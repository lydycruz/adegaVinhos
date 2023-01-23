import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { VinhosService } from './services/vinhos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroVinhoComponent } from './components/cadastro-vinho/cadastro-vinho.component';
import { DetalhesVinhoComponent } from './components/detalhes-vinho/detalhes-vinho.component';
import { DashVinhoComponent } from './components/dash/dash-vinho.component';
import { NotificacaoService } from './services/notificacao.service';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';
import { FiltroTabelaPipe } from './pipes/filtro-tabela.pipe';
import { DestacarEstiloDirective } from './directive/destacar-estilo.directive';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroVinhoComponent,
    DetalhesVinhoComponent,
    DashVinhoComponent,
    NotificacaoComponent,
    FiltroTabelaPipe,
    DestacarEstiloDirective    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VinhosService, NotificacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
