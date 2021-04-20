import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  textBox : String;
  passedData : any;

  constructor(private dataTransfer : DataTransferService) { }

  ngOnInit(): void {
    
  }

  sendData(){
    this.dataTransfer.getText(this.textBox).subscribe( (data) => this.passedData = data )
  }

}
