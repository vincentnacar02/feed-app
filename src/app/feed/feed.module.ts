import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedlistComponent } from './feedlist/feedlist.component';
import { CreateFeedComponent } from './create-feed/create-feed.component';
import { FormsModule } from '@angular/forms';

const ROUTES : Routes = [
  {
    path: '', component: FeedlistComponent
  },
  {
    path: 'create' , component : CreateFeedComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [FeedlistComponent, CreateFeedComponent]
})
export class FeedModule { }
