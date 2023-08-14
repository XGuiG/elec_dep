package elec_dep.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import elec_dep.exception.Constants;
import elec_dep.contract.Evidence;
import elec_dep.exception.ServiceException;
import elec_dep.mapper.EviMapper;
import elec_dep.pojo.Evi;
import elec_dep.service.EviService;
import lombok.extern.slf4j.Slf4j;
import okhttp3.OkHttpClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.TransactionManager;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Slf4j
@Service
public class EviServiceImpl extends ServiceImpl<EviMapper, Evi> implements EviService {
    @Autowired
    EviMapper eviMapper;
    //合约地址
    String contractAddress = "0xB5e1C1b515d6E71ADa3024435BD7052155e9B9ce";
    //建立连接
    okhttp3.OkHttpClient httpClient = new OkHttpClient();
    Web3j web3j = Web3j.build(new HttpService("https://smart-indulgent-glitter.ethereum-goerli.discover.quiknode.pro/67b51503bfb95bd2f2a3cfb7ad1dec6588ea1be1/", httpClient));

    //加载账户信息
    Credentials credentials;
    {
        //            credentials = WalletUtils.loadCredentials("admin", "D:\\Program Files\\Geth\\test1\\keystore\\UTC--2023-08-10T07-57-41.424180200Z--ec3d1f940d84bedc5f07e26e47a1980d7a5cb392");
        credentials = Credentials.create("e44c7f961a83678a063ca2e339f93e158c041c66d935a879118c0b1dbf37ff4c");
    }

    BigInteger gasPrice = BigInteger.valueOf(1000);
    BigInteger gasLimit = BigInteger.valueOf(300000);


    @Override
    public Evi chain(String filehash) {
        TransactionManager cutomerTokenTxManager = new RawTransactionManager(web3j, credentials, 5);
        Evidence evidence = Evidence.load(contractAddress, web3j,cutomerTokenTxManager, gasPrice, gasLimit);
        try {
            TransactionReceipt receipt = evidence.setEvidence(filehash).send();
            //获取时间戳
            EthBlock txnBlock = web3j.ethGetBlockByHash(receipt.getBlockHash(),true).send();
            long txnBlockTimestamp = txnBlock.getBlock().getTimestamp().longValueExact() * 1000;
            //转换为localDateTime
            LocalDateTime timeStamp = new Date(txnBlockTimestamp).toInstant().atOffset(ZoneOffset.of("+8")).toLocalDateTime();
            //保存
            Evi one = save(receipt.getTransactionHash(), timeStamp, filehash, receipt.getBlockNumber(), contractAddress);
            eviMapper.insert(one);
            //返回存证信息
            return one;
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ServiceException(Constants.CODE_500, "系统错误，连接失败");
        }
    }

    //保存新的存证信息
    private Evi save(String txHash, LocalDateTime timeStamp, String filehash, BigInteger blockNumber, String contractAddress) {
        Evi evi = new Evi();
        evi.setFilehash(filehash);
        evi.setTransactionHash(txHash);
        evi.setBlockNumber(blockNumber);
        evi.setContractAddress(contractAddress);
        evi.setTimeStamp(timeStamp);
        return evi;
    }

}
