import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdatetodoComponent } from './updatetodo/updatetodo.component';
import { HttpInterceptorBasicAuthService } from './service/htpp/http-interceptor-basic-auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    TodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    UpdatetodoComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, BrowserAnimationsModule,
    MatButtonModule,MatDialogModule,MatIconModule
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorBasicAuthService, multi:true 
  }],
  entryComponents: [RegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
