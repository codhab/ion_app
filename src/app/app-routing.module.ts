import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)},
  { path: 'cadastre', loadChildren: () => import('./modules/cadastre/cadastre.module').then( m => m.CadastreModule)},
  { path: 'attendance', loadChildren: () => import('./modules/attendance/attendance.module').then( m => m.AttendanceModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
