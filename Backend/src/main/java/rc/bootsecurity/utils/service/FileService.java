package rc.bootsecurity.utils.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.exception.FileHandlerException;
import rc.bootsecurity.model.dto.ImageDTO;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;


public class FileService {
    private final String REQUEST_PATH  = "/uploadedFiles/requests";
    private final String IMAGE_PATH  = "/uploadedFiles/images";

    private static final Logger LOGGER =  LoggerFactory.getLogger(FileService.class);

    public List<ImageDTO> getAllAvailableImages(){
        File dir = new File(System.getProperty("user.dir") + IMAGE_PATH + File.separator);
        List<ImageDTO> imageDTOList = new ArrayList<>();

      //  byte[][] result = new byte[dir.listFiles().length][];
       // int i = 0;
        for(File file: dir.listFiles()){
            try {
                ImageDTO imageDTO = new ImageDTO();
                imageDTO.setImageBytes(Files.readAllBytes(file.toPath()));
                imageDTO.setName(file.getName());
                imageDTOList.add(imageDTO);
               // result[i++] = Files.readAllBytes(file.toPath());
            }catch (IOException e){
                LOGGER.error("error in method getUserImage : " + e.getMessage());
            }
        }
        return imageDTOList;
    }

    public byte[] getUserImage(String imageName){
        try {
            File dir = new File(System.getProperty("user.dir") + IMAGE_PATH + File.separator + imageName);
            return Files.readAllBytes(dir.toPath());
        }catch (IOException e){
            LOGGER.error("error in method getUserImage : " + e.getMessage());
        }
        return null;
    }

    private File createDirectoryIfNotExists(String path ){
        String rootPath = System.getProperty("user.dir");
        File dir = new File(rootPath + path);
        if (!dir.exists())
            dir.mkdirs();
        return dir;
    }


    public void uploadFileForRequest(Integer requestId, MultipartFile[] uploadingFiles){
        File dir = this.createDirectoryIfNotExists(REQUEST_PATH + File.separator + requestId);

        for(MultipartFile uploadedFile : uploadingFiles) {
            File serverFile = new File(dir.getAbsolutePath() + File.separator + uploadedFile.getOriginalFilename());
            try( BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile))){

                // Create the file on server
                byte[] bytes = uploadedFile.getBytes();
                stream.write(bytes);
            } catch (IOException e) {
                LOGGER.warn("Failed to upload file " +  uploadedFile.getOriginalFilename() + " for request id : " + requestId + ", error : " + e.getMessage());
                throw new FileHandlerException("Failed to upload file : " + uploadedFile.getOriginalFilename() );
            }
        }
    }

    public void uploadImageForUser(MultipartFile uploadedFile){
        File dir = this.createDirectoryIfNotExists(IMAGE_PATH);
        File serverFile = new File(dir.getAbsolutePath() + File.separator + uploadedFile.getOriginalFilename());
        try( BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile))){

            // Create the file on server
            byte[] bytes = uploadedFile.getBytes();
            stream.write(bytes);
        } catch (IOException e) {
            LOGGER.warn("Failed to upload image " +  uploadedFile.getOriginalFilename() + ", error : " + e.getMessage());
            throw new FileHandlerException("Failed to upload image : " + uploadedFile.getOriginalFilename() );
        }

    }



}
