package rc.bootsecurity.util.fileModule;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class FileService {
    private final String REQUEST_PATH  = "/uploadedFiles/requests";
    private final String IMAGE_PATH  = "/uploadedFiles/images";

    private static final Logger LOGGER =  LoggerFactory.getLogger(FileService.class);

    public List<ImageDTO> getAllAvailableImages(){
        File dir = new File(System.getProperty("user.dir") + IMAGE_PATH + File.separator);
        List<ImageDTO> imageDTOList = new ArrayList<>();

        for(File file: dir.listFiles()){
            try {
                ImageDTO imageDTO = new ImageDTO();
                imageDTO.setImageBytes(Files.readAllBytes(file.toPath()));
                imageDTO.setName(file.getName());
                imageDTOList.add(imageDTO);
            }catch (IOException e){
                LOGGER.error("error in method getUserImage : " + e.getMessage());
            }
        }
        return imageDTOList;
    }

    public List<NameFileDTO> getFileForRequest(Integer id){
        File dir = new File(System.getProperty("user.dir") + REQUEST_PATH + File.separator + id + File.separator);
        List<NameFileDTO> files = new ArrayList<>();

        if(dir.exists()) {
            try {
                for (File file : Objects.requireNonNull(dir.listFiles())) {
                    NameFileDTO nameFileDTO = new NameFileDTO();
                    nameFileDTO.setName(file.getName());
                    nameFileDTO.setLastModified(file.lastModified());
                    files.add(nameFileDTO);
                }
            }catch (Exception e){
                LOGGER.error("error in method getFilesForRequest : " + e.getMessage());
            }
        }
        return files;
    }

    public byte[] getFileForRequest(Integer id, String name){
        File dir = new File(System.getProperty("user.dir") + REQUEST_PATH + File.separator + id + File.separator + name);
        if(dir.exists()) {
            try {
                return Files.readAllBytes(dir.toPath());
            }catch (IOException e){
                LOGGER.error("error in method getFileForRequest : " + e.getMessage());
            }
        }
        return null;
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
