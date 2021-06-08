import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Theme2PageRoutingModule } from './theme2-routing.module';

import { Theme2Page } from './theme2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Theme2PageRoutingModule
  ],
  declarations: [Theme2Page]
})
export class Theme2PageModule {}
