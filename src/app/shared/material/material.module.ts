import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const modules = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: [modules],
})
export class MaterialModule {}
