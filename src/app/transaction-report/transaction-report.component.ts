import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FilesBackService} from "../service/files-back/files-back.service";
import {saveAs} from "file-saver";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-transaction-report',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css'],
  providers: [FilesBackService, HttpClientModule, HttpClient]
})
export class TransactionReportComponent {
  fileContent: string | ArrayBuffer | null = null;

  constructor(private router: Router, private filesBackService: FilesBackService) {
    this.viewIPMFile();
  }


  viewIPMFile() {
    this.filesBackService.getIPMFile().subscribe((data) => {
      let blob = new Blob([data], {type: 'application/octet-stream'});
      let file = new File([blob], 'IPM-File.ipm', {type: 'application/octet-stream'});
      console.log(file);
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        this.fileContent = reader.result;
      };
    })
  }

  download() {
    this.filesBackService.getIPMFile().subscribe((data) => {
      let blob = new Blob([data], {type: 'application/octet-stream'});
      saveAs(blob, 'IPM-File.ipm');
    })
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
