import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EdidUserComponent } from './edid-user/edid-user.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"edit-user/:id",
    component:EdidUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
