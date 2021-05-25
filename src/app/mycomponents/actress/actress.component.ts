import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../myservices/api.service';
import { Actress } from '../../mymodels/actress';

@Component({
  selector: 'app-actress',
  templateUrl: './actress.component.html',
  styleUrls: ['./actress.component.css']
})
export class ActressComponent implements OnInit {

  allactresses:Array<object> = [];
  actressM:Actress = new Actress();
  actressindex:number = null;
  msgalert:string = null;
  constructor(private as:ApiService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.as.actresses$.subscribe((data)=>{
      this.allactresses = data;
    });
  }

  editActress():void{
    this.msgalert = null;
    if(this.actressindex == null){
      this.allactresses.unshift(JSON.parse(JSON.stringify(this.actressM)));
      this.actressM = new Actress();
    }else{
      this.allactresses[this.actressindex] = JSON.parse(JSON.stringify(this.actressM));
      this.msgalert = "Enregistré";
      setTimeout(()=>{
        this.msgalert = null;
      },2000);
    }
  }

  resetActress(key:number=null):void{
    this.msgalert = null;
    this.actressindex = key;
    this.actressM = new Actress();
    if(key != null){
      this.actressM.set(this.allactresses[key]);
    }
  }

  deleteOneActress(key:number):void{
    this.resetActress();
    this.allactresses.splice(key,1);
  }
}
