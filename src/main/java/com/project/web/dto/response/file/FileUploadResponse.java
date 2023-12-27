package com.project.web.dto.response.file;

import com.project.web.entity.File;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class FileUploadResponse {

    private Long id;
    private String originalFilename;
    private String storedFilename;
    private String filePath;
    private LocalDateTime createdAt;
//    private Long board;

    public static FileUploadResponse toDTO(File file) {
        return FileUploadResponse.builder()
                .id(file.getId())
                .originalFilename(file.getOriginalFilename())
                .storedFilename(file.getStoredFilename())
                .filePath(file.getFilePath())
                .createdAt(file.getCreatedAt())
//                .board(file.getBoard().getId())
                .build();
    }
}