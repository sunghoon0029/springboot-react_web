package com.project.web.controller;

import com.project.web.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/upload")
public class FileController {

    private final FileService fileService;

//    @PostMapping("/file")
//    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
//        File uploadFile = fileService.uploadFile(file);
//
//        return ResponseEntity.ok("File upload success.");
//    }

//    @PostMapping("/files")
//    public ResponseEntity<List<FileUploadResponse>> uploadFiles(@RequestPart List<MultipartFile> files) throws IOException {
//        return ResponseEntity.ok(fileService.uploadFiles(files));
//    }
}
