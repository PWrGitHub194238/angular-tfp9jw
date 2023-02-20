import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ColorPickerComponent,
    },
  ],
})
export class ColorPickerComponent implements ControlValueAccessor {
  hexColor: string;

  onChange: (hexColor: string) => void;
  onTouched: () => void;

  isDisabled: boolean;

  writeValue(value: string): void {
    this.hexColor = value;
  }

  registerOnChange(fn: (hexColor: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  modelChanged(value: string): void {
    this.onTouched();
    this.onChange(value);
  }
}
