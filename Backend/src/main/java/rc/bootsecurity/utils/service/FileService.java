package rc.bootsecurity.utils.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.exception.FileHandlerException;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
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

    private File createDirectoryIfNotExists(Integer requestId){
        String rootPath = System.getProperty("user.dir");
        File dir = new File(rootPath + "/uploadedFiles/requests" + File.separator + requestId);
        if (!dir.exists())
            dir.mkdirs();
        return dir;
    }

    public void uploadFileForRequest(Integer requestId, MultipartFile[] uploadingFiles){
        File dir = this.createDirectoryIfNotExists(requestId);

        for(MultipartFile uploadedFile : uploadingFiles) {
            try{
                byte[] bytes = uploadedFile.getBytes();
                // Create the file on server
                File serverFile = new File(dir.getAbsolutePath() + File.separator + uploadedFile.getOriginalFilename());
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();

            } catch (IOException e) {
                LOGGER.warn("Failed to upload file " +  uploadedFile.getOriginalFilename() + " for request id : " + requestId + ", error : " + e.getMessage());
                throw new FileHandlerException("Failed to upload file : " + uploadedFile.getOriginalFilename() );
            }
        }
    }



}
