import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [WrapperComponent, ColorPickerComponent],
  exports: [WrapperComponent, ColorPickerComponent],
})
export class AppModuleModule {}
