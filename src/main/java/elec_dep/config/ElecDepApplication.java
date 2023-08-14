package elec_dep.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("elec_dep")
@MapperScan("elec_dep.mapper") //mybatis mapper端口扫描
public class ElecDepApplication {

    public static void main(String[] args) {
//        System.getProperties().put( "server.port", 8090);
        SpringApplication.run(ElecDepApplication.class, args);
    }

}
