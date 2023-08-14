package elec_dep.exception;

import elec_dep.util.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {



    @ExceptionHandler(value = RuntimeException.class)
    public Response handler(RuntimeException e){
        log.error("运行时异常：---------{}"+e.getMessage());
        return Response.error(e.getMessage());
    }

    /**
     * 如果抛出的的是ServiceException，则调用该方法
     * @param se 业务异常
     * @return Result
     */
    @ExceptionHandler(ServiceException.class)
    public Response handle(ServiceException se){
        return Response.error(se.getCode(), se.getMessage());
    }

}