import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonComponent} from './button/button.component';
import {InputComponent} from './input/input.component';
import {HomeComponent} from './home/home.component';

const routes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'input', component: InputComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
