import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { LogicService } from '../services/logic.service';
import { HttpClient } from '@angular/common/http';
import { IData } from '../../interfaces/data.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public images;
  questions$: Observable<IData[]>;
  public jsonObject: any;
  constructor(public logic: LogicService, private http: HttpClient, private file: File) {

    const d: IData = { id: 3, question: '3', img: '3'};
    this.file.readAsText(this.file.dataDirectory, 'data.json')
    .then((res) => {
      this.jsonObject = of(res);
    });
    this.jsonObject.subscribe((res) => {
      this.images = JSON.stringify(res);
    });
  }
  ionViewWillEnter() {
    this.questions$ = this.logic.getData();
    const d: IData = { id: 3, question: '3', img: '3'};
    this.questions$.subscribe((res) => {
      this.images = JSON.stringify(res);
      res.push(d);
      this.images = 'sdfsdfsdfsdf';
      this.logic.saveData(JSON.stringify(res));
      res.forEach(element => {
      });
    });
  }
}
