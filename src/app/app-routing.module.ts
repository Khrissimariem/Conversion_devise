import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { DeviseComponent } from './pages/devise/devise.component';
import { CalculComponent } from './pages/calcul/calcul.component';

const routes: Routes = [{
  path:'',component:DashComponent,
  children :[
    {path:'devise',component:DeviseComponent},
    {path:'calcul',component:CalculComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
