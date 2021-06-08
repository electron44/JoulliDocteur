import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Theme1PageRoutingModule } from './theme1-routing.module';

import { Theme1Page } from './theme1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Theme1PageRoutingModule
  ],
  declarations: [Theme1Page]
})
export class Theme1PageModule {}
