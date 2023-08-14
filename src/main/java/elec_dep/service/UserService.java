package elec_dep.service;

import com.baomidou.mybatisplus.extension.service.IService;
import elec_dep.pojo.User;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lgy
 * @since 2023-03-09
 */
public interface UserService extends IService<User> {

    User login(User user);

    User register(User user);

}


