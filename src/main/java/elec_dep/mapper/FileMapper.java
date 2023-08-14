package elec_dep.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import elec_dep.pojo.File;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 */
public interface FileMapper extends BaseMapper<File> {
    List<File> getFileList();
    File search(String filehash);
    int deploy(String filehash);
}


