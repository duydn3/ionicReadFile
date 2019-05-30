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
  constructor(public logic: LogicService, private http: HttpClient, private file: File) {

    this.logic.saveData('dsfsdf');
    this.file.readAsText(this.file.dataDirectory, 'data.json')
    .then((res) => {
        this.questions$ = JSON.parse(res);
        this.questions$.subscribe((respo) => {
          respo.forEach(element => {
            this.images = element.question;
          });
        });
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
