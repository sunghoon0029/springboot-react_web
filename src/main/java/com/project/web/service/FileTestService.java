package com.project.web.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class FileTestService {

    @Value("${file.dir}")
    private String uploadDir;

    public String uploadFile(MultipartFile file) {
        try {
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
            String filePath = uploadDir + File.separator + fileName;

            file.transferTo(new File(filePath));

            return fileName;
        } catch (IOException e) {
            e.printStackTrace();

            throw new RuntimeException("파일 업로드에 실패했습니다.");
        }
    }

    public List<String> uploadFiles(List<MultipartFile> files) {

        List<String> fileNames = new ArrayList<>();

        for (MultipartFile file: files) {
            fileNames.add(uploadFile(file));
        }

        return fileNames;
    }

    public String getUploadDir() {
        return uploadDir;
    }
}
