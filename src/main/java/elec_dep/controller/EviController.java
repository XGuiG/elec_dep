package elec_dep.controller;

import elec_dep.exception.Constants;
import elec_dep.pojo.Evi;
import elec_dep.pojo.File;
import elec_dep.service.EviService;
import elec_dep.service.FileService;
import elec_dep.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/chain")
public class EviController {
    @Autowired
    EviService eviService;
    @Autowired
    FileService fileService;

    @PostMapping("/deploy")
    public Response deploy(@RequestParam("filehash") String filehash) throws IOException {
         try{
             Evi evi = eviService.chain(filehash);
             File newfile = fileService.deploy(filehash);
             if(newfile.getStatus().equals("已上链")) {
                return Response.ok().setData(evi);
             }
             return Response.error(Constants.CODE_500, "文件状态修改失败");
//            return R.ok().setData("发布成功");
        } catch (Exception e){
            return Response.error(Constants.CODE_500, e.getMessage());
        }
    }
}
