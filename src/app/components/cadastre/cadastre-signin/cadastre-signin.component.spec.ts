import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastreSigninComponent } from './cadastre-signin.component';

describe('CadastreSigninComponent', () => {
  let component: CadastreSigninComponent;
  let fixture: ComponentFixture<CadastreSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreSigninComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastreSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
