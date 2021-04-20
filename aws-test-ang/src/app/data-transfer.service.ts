import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http : HttpClient) { }

  baseLocalhost : string = "http://127.0.0.1:5000/";

  getText(inputText : String){
    return this.http.post<String>(this.baseLocalhost + "hello" ,inputText );
  }
  
}
