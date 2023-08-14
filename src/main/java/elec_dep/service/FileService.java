package elec_dep.service;

import com.baomidou.mybatisplus.extension.service.IService;
import elec_dep.pojo.File;

import java.util.List;

public interface FileService extends IService<File> {
    File upload(String filename, String filehash, long filesize);

    File search(String filehash);

    File verify(String newhash);

    List<File> getFileList();

    File deploy(String filehash);
}
