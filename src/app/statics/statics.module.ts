import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const ROUTES : Routes = [
  {
    path: 'about', component: AboutComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [AboutComponent]
})
export class StaticsModule { }
