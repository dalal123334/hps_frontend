import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgIf } from "@angular/common";
import { FilesBackService } from "../service/files-back/files-back.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-file-display',
  standalone: true,
  imports: [HttpClientModule, NgIf],
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.css'],
  providers: [FilesBackService]
})
export class FileDisplayComponent {
  fileContent: string | ArrayBuffer | null = null;
  fileContentType: string | null = null;
  fileUrl: SafeUrl | null = null;
  filename: string = 'cover.pdf'; // Replace with actual filename

  constructor(private fileDisplayService: FilesBackService, private sanitizer: DomSanitizer) {
    this.viewFile(this.filename);
  }

  viewFile(filename: string) {
    this.fileDisplayService.getFile(filename).subscribe(
      (response: Blob) => {
        this.fileContentType = response.type;
        let reader = new FileReader();

        if (response.type.startsWith('text')) {
          reader.readAsText(response);
          reader.onload = () => {
            this.fileContent = reader.result;
          };
        } else if (response.type.startsWith('image') || response.type === 'application/pdf') {
          reader.readAsDataURL(response);
          reader.onload = () => {
            this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string);
          };
        }
      }
    );
  }

  downloadFile() {
    if (this.fileUrl) {
      const a = document.createElement('a');
      a.href = this.fileUrl as string;
      a.download = this.filename;
      a.click();
      URL.revokeObjectURL(this.fileUrl as string);
    }
  }
}
