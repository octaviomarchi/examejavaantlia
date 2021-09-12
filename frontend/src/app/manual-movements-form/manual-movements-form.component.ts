import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-manual-movements-form',
  templateUrl: './manual-movements-form.component.html',
  styleUrls: ['./manual-movements-form.component.css']
})
export class ManualMovementsFormComponent implements OnInit {

  addProductForm: FormGroup;
  isFormDisabled = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      mes: ['', Validators.required],
      ano: ['', Validators.required],
      produto: ['', Validators.required],
      cosif: ['', Validators.required],
      valor: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  onReset(): void {
    this.addProductForm.reset();
  }

  onNew(): void {
    this.isFormDisabled = false;
  }
}