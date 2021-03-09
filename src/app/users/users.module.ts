import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
