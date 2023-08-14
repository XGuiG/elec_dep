package elec_dep.controller;

import elec_dep.exception.Constants;
import elec_dep.exception.ServiceException;
import elec_dep.pojo.File;
import elec_dep.service.FileService;
import elec_dep.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.StreamCorruptedException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@RequestMapping("/file")
public class FileController {
    @Autowired
    private FileService fileService;

    //上传
    @PostMapping("/upload")
    public Response upload(@RequestParam("file") MultipartFile file) throws IOException {
        //获取文件名
        String fileName = file.getOriginalFilename();
        //计算hash
        String filehash = getFileHash(file);
        //获取文件大小
        long filesize = file.getSize();
        fileService.upload(fileName, filehash, filesize);
        return Response.ok("上传成功").setData(fileName);
    }

    //获取所有文件信息
    @GetMapping("/list")
    public Response getFileList() {
        List<File> fileList = fileService.getFileList();
        return Response.ok().setData(fileList);
    }

    //查询
    @GetMapping("/search")
    public Response search(@RequestParam String filehash) throws IOException {
        File file = fileService.search(filehash);
        if(file == null) {
            return Response.error(Constants.CODE_404, "文件不存在");
        }
        return Response.ok().setData(file);
    }

    //验证
    @PostMapping("/verify")
    public Response verify(@RequestParam("file") MultipartFile file) throws IOException {
        //计算hash
        String newhash = getFileHash(file);
//        if(fileService.verify(newhash)) {
//            return Response.ok().setData("验证成功");
//        } else {
//            return Response.error(Constants.CODE_404, "验证失败，文件不存在");
//        }
        try {
            File oldFile = fileService.verify(newhash);
            return Response.ok().setData(oldFile);
        } catch (Exception e) {
            return Response.error(Constants.CODE_500, "文件不存在，验证失败");
        }
    }

    // 计算文件哈希值
    private String getFileHash(MultipartFile file) throws IOException {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] bytes = digest.digest(file.getBytes());

            StringBuilder sb = new StringBuilder();
            for (byte b : bytes) {
                sb.append(String.format("%02x", b & 0xff));
            }

            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("algorithm not found");
        }
    }

}
