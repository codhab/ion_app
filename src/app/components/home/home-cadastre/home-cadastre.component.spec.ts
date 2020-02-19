import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCadastreComponent } from './home-cadastre.component';

describe('HomeCadastreComponent', () => {
  let component: HomeCadastreComponent;
  let fixture: ComponentFixture<HomeCadastreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCadastreComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCadastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
