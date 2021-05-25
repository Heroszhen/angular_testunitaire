import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActressComponent } from './actress.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../myservices/api.service';
import { Actress } from '../../mymodels/actress';

//describe : l'objet qui contient tous les tests sur un composant
describe('ActressComponent', () => {
  let component: ActressComponent; //le composant à tester
  let fixture: ComponentFixture<ActressComponent>;//l'accès au composant testé
  let as:ApiService;
  let debugElement:any;//l'accès au dom du composant

  //beforeEach : les tâches à effecturer avant les test : importer les composants nécessaires
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActressComponent ],
      imports:[FormsModule],
      providers:[{provide:ApiService}]
    })
    .compileComponents();
  });

  beforeEach(() => {//initialiser les outils
    fixture = TestBed.createComponent(ActressComponent);//instancie le composant testé
    component = fixture.componentInstance;//l'objet intancié retourné
    fixture.detectChanges();//detection de changement, à utiliser chaque fois qu'on modifie une variable du composant
    debugElement = fixture.debugElement;//l'accès au dom du composant
  });

  //it: l'objet qui décrit le ou les tests à effecturer
  it('should create', () => {
    //élément testé mis dans expect, toBeTruthy est un opérateur,un seul expect par it(conseil)
    expect(component).toBeTruthy();//detecter si le composant a été créé
  });

  it("should have tag 'h4'",()=>{
    expect(debugElement.nativeElement.querySelector('h4').textContent).toContain("Les Actrices");
  });
  it("should have tag 'table'",()=>{
    expect(debugElement.nativeElement.querySelector('table')).toBeTruthy();
  });
  it("should get actresses",()=>{
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.allactresses.length).toBeGreaterThan(0);
  });
  it("should add one actress",()=>{
    let len:number = component.allactresses.length;
    let ob:object = {
      name:"monica bellucci",
      photo:"https://i.pinimg.com/originals/2a/07/e4/2a07e45a345c7bef5ff000dea708daa6.jpg"
    };
    component.actressM.set(ob);
    component.actressindex = null;
    component.editActress();
    fixture.detectChanges();
    expect(len).toBeLessThan(component.allactresses.length);
    expect(component.allactresses[0]["name"]).not.toEqual("aaa");
  });
  it("should modify one actress",()=>{
    component.resetActress(0);
    component.actressM["name"] = "aaa";
    component.editActress();
    fixture.detectChanges();
    expect(component.allactresses[0]["name"]).toEqual("aaa");
  });
  it("should delete one actress",()=>{
    component.deleteOneActress(0);
    fixture.detectChanges();
    expect(component.allactresses[0]["name"]).not.toEqual("aaa");
  });
});
