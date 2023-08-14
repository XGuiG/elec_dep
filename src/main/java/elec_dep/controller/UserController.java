package elec_dep.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import elec_dep.exception.Constants;
import elec_dep.pojo.User;
import elec_dep.service.UserService;
import elec_dep.util.JWTUtils;
import elec_dep.util.Response;
import elec_dep.vo.UserVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 */
@Slf4j
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    /**
     * @description 登录
     * @param user 用户
     */
    @PostMapping("/login")
    public Response login(@RequestBody User user){
        User userDB = userService.login(user);
        if(userDB==null){
            return Response.error(Constants.CODE_500,"没有该用户");
        }

        UserVo userVo = new UserVo();
        userVo.setUsername(userDB.getUsername());
        String token = JWTUtils.getToken(userDB.getId().toString(), userDB.getPassword());
        userVo.setToken(token);
        return Response.ok("登录成功").setData(userVo);

    }

    /**
     * @description 注册
     * @param user 用户
     */
    @PostMapping("/register")
    public Response register(@RequestBody User user){
        userService.register(user);
        return Response.ok("注册成功").setData(user);
    }

    /**
     * @description 检查用户名
     * @param username 用户名
     */
    @GetMapping("/check")
    public Response countByUsername(@RequestParam String username) {
        long count = userService.count(new LambdaQueryWrapper<User>().eq(User::getUsername, username));
        if(count!=0){
            return Response.error("用户名已存在");
        }
        return Response.ok();
    }

    /**
     * @description 身份验证
     *
     * @return {@link Response }
     */
    @PostMapping("/authentication")
    public Response authentication(){
        return Response.ok();
    }

    @GetMapping("/getUserInfo")
    public Response getUserInfo() {
        HashMap<String, String> map = new HashMap<>();
        map.put("nickname","无所谓^_^");
        map.put("qq","2673152463");
        map.put("address","浙江省");
        map.put("url","https://blog.csdn.net/weixin_51603038?type=blog");
        map.put("text","在笑大学牲");
        return Response.ok().setData(map);
    }
}



