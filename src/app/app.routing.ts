import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ConsultaCpfComponent} from 'src/app/consulta-cpf/consulta-cpf.component';

const routes : Routes = [
  { path : 'consulta-cpf', component: ConsultaCpfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
