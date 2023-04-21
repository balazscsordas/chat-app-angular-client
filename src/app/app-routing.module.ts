import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGroupListComponent } from './chat-group-list/chat-group-list.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: ChatGroupListComponent }],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
