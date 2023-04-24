import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatGroupItemComponent } from './components/chat-group-item/chat-group-item.component';
import { ChatGroupListComponent } from './components/chat-group-list/chat-group-list.component';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { ChatBlockComponent } from './components/chat/chat-block/chat-block.component';
import { MyMessageComponent } from './components/chat/my-message/my-message.component';
import { PartnerMessageComponent } from './components/chat/partner-message/partner-message.component';
import { ChatBlockTopProfileComponent } from './components/chat/chat-block-top-profile/chat-block-top-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateNewRoomDialogComponent } from './components/create-new-room-dialog/create-new-room-dialog.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InputFieldErrorTextComponent } from './components/auth/input-field-error-text/input-field-error-text.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { WelcomeTextComponent } from './components/welcome-text/welcome-text.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatGroupItemComponent,
    ChatGroupListComponent,
    AppLayoutComponent,
    ChatBlockComponent,
    MyMessageComponent,
    PartnerMessageComponent,
    ChatBlockTopProfileComponent,
    LoginComponent,
    RegistrationComponent,
    InputFieldErrorTextComponent,
    CreateNewRoomDialogComponent,
    WelcomeTextComponent,
    NavbarComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
