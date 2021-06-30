import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileuploadService } from '../fileupload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.sass']
})
export class FileuploadComponent implements OnInit {

  fileToUpload: any
  constructor(private uplService: FileuploadService) { }
  progressFlag = false
  progressLength = ''
  sucessString = ' '

  ngOnInit(): void {

  }

  handleInputFile(target: any){
    this.fileToUpload = target.files.item(0)
    console.log(this.fileToUpload)
  }

  handleSubmit(form: NgForm){
    console.log('submit called')
    if(form.submitted){
      this.uplService.fileupload(this.fileToUpload).subscribe(
        (events)=>{
          console.log('upload event received', events)
          if(events.type == HttpEventType.UploadProgress){
            this.progressFlag = true
            let totalLoaded = 1
            if(events.total!= undefined && events.total > totalLoaded){
              totalLoaded = <number> events.total 
            }
            this.progressLength = 'width:' + Math.round(events.loaded / totalLoaded)*80 +'%'
          }
        }, 
        ( error) => {
          console.log('error received')
        }, 
        ()=> { 
          console.log("file upload complete")
          this.progressFlag = false
          this.sucessString = "File Uploaded successfully"
        })
    }
  }
}
