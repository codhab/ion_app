import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastre-signin',
  templateUrl: './cadastre-signin.component.html',
  styleUrls: ['./cadastre-signin.component.scss'],
})
export class CadastreSigninComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      cpf: [''],
      password: ['']
    });
  }

  ngOnInit() {}

}
