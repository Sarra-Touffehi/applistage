import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './components/admin/admin.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'accueil', title:'Accueil',component:AccueilComponent},
{path:'apropos',title:'Apropos', component:AproposComponent},
{path:'admin',title:'Admin', component:AdminComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**', title:'Erreur', component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
