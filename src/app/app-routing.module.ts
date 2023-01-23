import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroVinhoComponent } from './components/cadastro-vinho/cadastro-vinho.component';
import { DashVinhoComponent } from './components/dash/dash-vinho.component';
import { DetalhesVinhoComponent } from './components/detalhes-vinho/detalhes-vinho.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  },
  {
    path: 'vinhos',
    component: VinhosComponent
  },
  {
    path: 'cadastro-vinho',
    component: CadastroVinhoComponent
  },
  {
    path: 'cadastro-vinho/:id',
    component: CadastroVinhoComponent
  },
  {
    path: 'detalhes-vinho/:id',
    component: DetalhesVinhoComponent
  },
  {
    path: 'dash',
    component: DashVinhoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
