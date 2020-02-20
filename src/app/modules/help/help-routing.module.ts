import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpHomeComponent } from 'src/app/components/help/help-home/help-home.component';

const routes: Routes = [
  { path: '', component: HelpHomeComponent },
];

@NgModule({
  declarations: [
    HelpHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
