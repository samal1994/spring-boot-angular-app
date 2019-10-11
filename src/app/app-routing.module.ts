import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardService } from './service/routeguard.service';
import { UpdatetodoComponent } from './updatetodo/updatetodo.component';

const routes: Routes = [
 { path: 'login',component: LoginComponent},
 { path: 'welcome/:name',component: WelcomeComponent, canActivate:[RouteguardService]},
 { path: '',component: LoginComponent},
 { path: 'todos',component: TodosComponent,canActivate:[RouteguardService]},
 { path: 'logout',component: LogoutComponent,canActivate:[RouteguardService]},
 { path: 'uptodo/:id',component: UpdatetodoComponent,canActivate:[RouteguardService]},
 { path: '**',component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
