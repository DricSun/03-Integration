import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongesListComponent } from './conges-list/conges-list.component';
import { CongeFormComponent } from './conge-form/conge-form.component';
import { RecapCongeComponent } from './recap-conge/recap-conge.component';

const routes: Routes = [
{
  path: '', component: CongesListComponent
},
{
  path : 'form' , component: CongeFormComponent
},
{
  path:'recap', component: RecapCongeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
