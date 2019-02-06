import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './_directive/only-number.directive';
import { LeftMenuComponent } from './_component/left-menu/left-menu.component';
import { HeaderComponent } from './_component/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OnlyNumberDirective, LeftMenuComponent, HeaderComponent],
  exports: [
    OnlyNumberDirective,
    LeftMenuComponent,
    HeaderComponent
  ]
})
export class UtilityModule { }
