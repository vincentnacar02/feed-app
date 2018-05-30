import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES : Routes = [
    { path: '', redirectTo: 'statics/about', pathMatch: 'full' },
    { path: 'statics', loadChildren: './statics/statics.module#StaticsModule'},
    { path: 'feeds',  loadChildren: './feed/feed.module#FeedModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true })
    ]
})
export class AppRoutingModule {}