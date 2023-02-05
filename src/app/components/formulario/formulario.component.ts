import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  AlioliForm = this.fb.group({
    name: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    email: ['', [Validators.required]],
    cantPers: ['', [Validators.required]],
    fechaUbi: ['', [Validators.required]],
    details: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get name() {
    return this.AlioliForm.get('name');
  }
  get telefono() {
    return this.AlioliForm.get('telefono');
  }
  get email() {
    return this.AlioliForm.get('email');
  }
  get cantPers() {
    return this.AlioliForm.get('cantPers');
  }
  get fechaUbi() {
    return this.AlioliForm.get('fechaUbi');
  }
  get details() {
    return this.AlioliForm.get('details');
  }
}
