import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  actresses$ = new BehaviorSubject<Array<object>>([
    {name:"Alexandra Daddario",photo:"http://i.imgur.com/jE6JYF9.jpg"},
    {name:"Liu Yifei",photo:"https://pbs.twimg.com/media/Ct8mT7bUEAA_J7f.jpg"},
    {name:"Song Hye-kyo",photo:"https://i.pinimg.com/originals/5f/40/36/5f4036842bb952b2a28f1b2b05048ab9.jpg"},
    {name:"Liv Tyler",photo:"https://i.pinimg.com/originals/c1/d2/fe/c1d2feba59397a9ac61407f5f0830106.jpg"}
  ]);
  constructor() { }

  getGetActresses():BehaviorSubject<Array<object>>{
    return this.actresses$;
  }
}
