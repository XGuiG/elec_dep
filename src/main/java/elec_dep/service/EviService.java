package elec_dep.service;

import com.baomidou.mybatisplus.extension.service.IService;
import elec_dep.pojo.Evi;

public interface EviService extends IService<Evi> {
    Evi chain(String filehash);
}
