package rc.bootsecurity.model.dto;

import lombok.Data;

@Data
public class NameFileDTO {
    private String name;
    private byte[] data;
    private long lastModified;
}
