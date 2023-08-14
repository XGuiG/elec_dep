package elec_dep.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import elec_dep.exception.Constants;
import elec_dep.exception.ServiceException;
import elec_dep.mapper.FileMapper;
import elec_dep.pojo.File;
import elec_dep.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZoneOffset;
import java.util.Date;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lgy
 */
@Slf4j
@Service
public class FileServiceImpl extends ServiceImpl<FileMapper, File> implements FileService {

    @Autowired
    FileMapper fileMapper;

    @Override
    public File upload(String filename, String filehash, long filesize) {
        File file = new File();
        file.setFilename(filename);
        file.setFilehash(filehash);
        file.setFilesize(filesize);
        //设置当前时间为上传时间
        file.setLastUpdateTime(new Date().toInstant().atOffset(ZoneOffset.of("+8")).toLocalDateTime());
        file.setStatus("未上链");

        File one = checkByHash(file.getFilehash());
        if (one == null) {
            one = file;
            fileMapper.insert(file);
        } else {
            throw new ServiceException(Constants.CODE_600, "文件已存在");
        }
        return one;
    }

    private File checkByHash(String filehash) {
        QueryWrapper<File> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("filehash", filehash);
        File one;
        try {
            one = getOne(queryWrapper); // 从数据库查询文件信息
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ServiceException(Constants.CODE_500, "系统错误");
        }
        return one;
    }

    @Override
    public File search(String filehash) {
        return fileMapper.search(filehash);
    }

    @Override
    public List<File> getFileList() {
        return fileMapper.getFileList();
    }

    @Override
    public File verify(String newhash) {
        //通过计算出来的文件hash查询
        File oldfile = checkByHash(newhash);
        if(oldfile != null) {
            return oldfile;
        } else {
            throw new ServiceException(Constants.CODE_404, "文件不存在");
        }
    }

    @Override
    public File deploy(String filehash) {
        try {
            int res = fileMapper.deploy(filehash);
            if(res > 0) {
                return fileMapper.search(filehash);
            } else {
                throw new ServiceException(Constants.CODE_404, "文件不存在");
            }
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ServiceException(Constants.CODE_500, "系统错误");
        }
    }
}
