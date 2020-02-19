import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeIndexComponent } from './home-index.component';

describe('HomeIndexComponent', () => {
  let component: HomeIndexComponent;
  let fixture: ComponentFixture<HomeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIndexComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
