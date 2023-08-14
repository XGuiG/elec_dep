package elec_dep.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigInteger;
import java.time.LocalDateTime;

/**
 * 存证表
 */

@Data
@TableName("evidence")
public class Evi {
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String filehash;

    @TableField(value = "timeStamp")
    private LocalDateTime timeStamp;

    @TableField(value = "transactionHash")
    private String transactionHash;

    @TableField(value = "blockNumber")
    private BigInteger blockNumber;

    @TableField(value = "contractAddress")
    private String contractAddress;
}
