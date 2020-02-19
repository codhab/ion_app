import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastreHomeComponent } from './cadastre-home.component';

describe('CadastreHomeComponent', () => {
  let component: CadastreHomeComponent;
  let fixture: ComponentFixture<CadastreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreHomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
