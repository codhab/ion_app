import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastreSigninComponent } from 'src/app/components/cadastre/cadastre-signin/cadastre-signin.component';
import { CadastreHomeComponent } from 'src/app/components/cadastre/cadastre-home/cadastre-home.component';
import { CadastreSearchComponent } from 'src/app/components/cadastre/cadastre-search/cadastre-search.component';
import { CadastreDashboardComponent } from 'src/app/components/cadastre/cadastre-dashboard/cadastre-dashboard.component';
import { CadastreContactShowComponent } from 'src/app/components/cadastre/cadastre-contact-show/cadastre-contact-show.component';
import { CadastreContactEditComponent } from 'src/app/components/cadastre/cadastre-contact-edit/cadastre-contact-edit.component';

const routes: Routes = [
  { path: '', component: CadastreHomeComponent },

  { path: 'signin', component: CadastreSigninComponent},
  { path: 'search', component: CadastreSearchComponent},
  { path: 'dashboard', component: CadastreDashboardComponent},

  { path: 'contact/show', component: CadastreContactShowComponent},
  { path: 'contact/edit', component: CadastreContactEditComponent}
  
];

@NgModule({
  declarations: [
    CadastreSigninComponent,
    CadastreHomeComponent,
    CadastreSearchComponent,
    CadastreDashboardComponent,

    CadastreContactShowComponent,
    CadastreContactEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastreRoutingModule { }
