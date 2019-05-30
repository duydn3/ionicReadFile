import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../../interfaces/data.interface';
import { Observable } from 'rxjs';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  private fileName = 'data.json';

  constructor(private http: HttpClient, private file: File, private platform: Platform) { }

  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this.file.dataDirectory + this.fileName);
  }

  async saveData(data: string) {
    await this.platform.ready();
    const d: IData = { id: 3, question: '3', img: '3'};
    return this.file.writeFile(this.file.dataDirectory, this.fileName, JSON.stringify(d), {replace: true});
  }
}
