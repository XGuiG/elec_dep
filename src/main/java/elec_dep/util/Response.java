package elec_dep.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import org.apache.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;

/**
 * 返回数据
 *
 * @author Mark sunlightcs@gmail.com
 */
public class Response extends HashMap<String, Object> {
    private static final long serialVersionUID = 1L;

    public Response setData(Object data) {
        put("data",data);
        return this;
    }

    //利用fastjson进行反序列化
    public <T> T getData(TypeReference<T> typeReference) {
        Object data = get("data");	//默认是map
        String jsonString = JSON.toJSONString(data);
        T t = JSON.parseObject(jsonString, typeReference);
        return t;
    }

    public Response() {
        put("code", HttpStatus.SC_OK);
        put("msg", "success");
    }

    public static Response error() {
        return error(HttpStatus.SC_INTERNAL_SERVER_ERROR, "未知异常，请联系管理员");
    }

    public static Response error(String msg) {
        return error(HttpStatus.SC_INTERNAL_SERVER_ERROR, msg);
    }

    public static Response error(int code, String msg) {
        Response response = new Response();
        response.put("code", code);
        response.put("msg", msg);
        return response;
    }

    public static Response ok(String msg) {
        Response response = new Response();
        response.put("msg", msg);
        return response;
    }

    public static Response ok(Map<String, Object> map) {
        Response response = new Response();
        response.putAll(map);
        return response;
    }

    public static Response ok() {
        return new Response();
    }

    public Response put(String key, Object value) {
        super.put(key, value);
        return this;
    }
    public  Integer getCode() {

        return (Integer) this.get("code");
    }

}