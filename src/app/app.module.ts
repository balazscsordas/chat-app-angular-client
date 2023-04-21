import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatGroupItemComponent } from './chat-group-item/chat-group-item.component';
import { ChatGroupListComponent } from './chat-group-list/chat-group-list.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ChatBlockComponent } from './chat-block/chat-block.component';
import { MyMessageComponent } from './my-message/my-message.component';
import { PartnerMessageComponent } from './partner-message/partner-message.component';
import { ChatBlockTopProfileComponent } from './chat-block-top-profile/chat-block-top-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { InputFieldErrorTextComponent } from './input-field-error-text/input-field-error-text.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateNewRoomDialogComponent } from './create-new-room-dialog/create-new-room-dialog.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
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
