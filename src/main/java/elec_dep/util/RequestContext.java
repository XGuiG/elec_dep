package elec_dep.util;

import java.io.Serializable;

public class RequestContext implements Serializable {
    private static ThreadLocal<String> remoteAddr = new ThreadLocal<>();

    public static String getRemoteAddr() {
        return remoteAddr.get();
    }

    public static void setRemoteAddr(String remoteAddr) {
        elec_dep.util.RequestContext.remoteAddr.set(remoteAddr);
    }
}

