import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Theme1Page } from './theme1.page';

const routes: Routes = [
  {
    path: '',
    component: Theme1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Theme1PageRoutingModule {}
