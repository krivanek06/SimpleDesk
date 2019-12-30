package rc.bootsecurity.model.dto;

import lombok.Data;

@Data
public class ImageDTO {
    private byte[] imageBytes;
    private String name;
}
