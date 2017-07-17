import { Component, OnInit} from '@angular/core';
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
  ]
})
export class MainComponent implements OnInit {
  	constructor() { 
    }
  	ngOnInit() {
        const account = {
            loginId:'18306271627',
            password: Md5.hashStr('111111').toString()
        };
  	}
}
