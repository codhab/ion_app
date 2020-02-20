import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from 'src/app/components/home/home-index/home-index.component';

const routes: Routes = [
  { path: '', component: HomeIndexComponent }
];

@NgModule({
  declarations: [
    HomeIndexComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeRoutingModule { }
