import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule" },
        { path: 'contact', component: ContactComponent },
        { path: '404', component : NotFoundComponent},
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', redirectTo: '/404', pathMatch: 'full'}
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
