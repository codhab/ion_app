import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastreSigninComponent } from 'src/app/components/cadastre/cadastre-signin/cadastre-signin.component';
import { CadastreHomeComponent } from 'src/app/components/cadastre/cadastre-home/cadastre-home.component';

const routes: Routes = [
  { path: '', component: CadastreHomeComponent },
];

@NgModule({
  declarations: [
    CadastreSigninComponent,
    CadastreHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastreRoutingModule { }
