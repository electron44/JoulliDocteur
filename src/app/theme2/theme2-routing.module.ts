import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Theme2Page } from './theme2.page';

const routes: Routes = [
  {
    path: '',
    component: Theme2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Theme2PageRoutingModule {}
