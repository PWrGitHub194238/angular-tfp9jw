import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModuleModule } from './app-module/app-module.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppModuleModule],
  template: `
    <div [formGroup]="form1">
      <app-color-picker formControlName="hex"></app-color-picker>
      VAL: {{ form1.value | json }}
    </div>

    <app-wrapper>
      <div [formGroup]="form2">
        <app-color-picker formControlName="hex"></app-color-picker>
        VAL: {{ form2.value | json }}
      </div>
    </app-wrapper>

  `,
})
export class App {
  form1: FormGroup<{ hex: FormControl<string> }>;
  form2: FormGroup<{ hex: FormControl<string> }>;

  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group<{ hex: FormControl<string> }>({
      hex: this.fb.control<string>('#00FF00'),
    });
    this.form2 = this.fb.group<{ hex: FormControl<string> }>({
      hex: this.fb.control<string>('#00FF00'),
    });
  }
}

bootstrapApplication(App);
