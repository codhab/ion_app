import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceHomeComponent } from 'src/app/components/attendance/attendance-home/attendance-home.component';

const routes: Routes = [
  { path: '', component: AttendanceHomeComponent },
];

@NgModule({
  declarations: [
    AttendanceHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
