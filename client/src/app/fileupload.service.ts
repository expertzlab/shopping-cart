import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private http: HttpClient) { }

  fileupload(fileItem: File){
    let formData = new FormData()
    formData.append('file', fileItem, fileItem.name)
    let req = new HttpRequest('POST','api/fileupload',formData,{reportProgress: true})
    return this.http.request(req)
  }
}
