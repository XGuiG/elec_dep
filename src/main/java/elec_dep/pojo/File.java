package elec_dep.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("file")
public class File {
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String filename;

    private String filehash;

    @TableField(value = "lastUpdateTime")
    private LocalDateTime lastUpdateTime;

    private long filesize;

    private String status;

    //文件链上地址
//    @TableField(value = "chainAddress")
//    private String chainAddress;
}
