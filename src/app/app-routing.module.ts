import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { WelcomeTextComponent } from './components/welcome-text/welcome-text.component';
import { ChatBlockComponent } from './components/chat/chat-block/chat-block.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'chat',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: WelcomeTextComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':partner_id',
        component: ChatBlockComponent,
        canActivate: [AuthGuard],
      },
    ],
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
