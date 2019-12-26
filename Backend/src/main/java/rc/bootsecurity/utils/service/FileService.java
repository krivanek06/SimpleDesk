package rc.bootsecurity.utils.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;
import java.io.IOException;


public class FileService {
    private static final Logger LOGGER =  LoggerFactory.getLogger(FileService.class);

    public byte[] getUserImage(String imageName){
        var imgFile = new ClassPathResource("images/" + imageName);
        byte[] bytes = null;

        try {
            bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());
        }catch (IOException e){
            LOGGER.error("error in method getUserImage : " + e.getMessage());
        }
        return bytes;
    }


}
