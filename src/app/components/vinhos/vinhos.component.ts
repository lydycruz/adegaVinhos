import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vinho } from './../../models/vinho';
import { VinhosService } from './../../services/vinhos.service';
import { delay, tap, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { Notificacao } from 'src/app/models/notificacao';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css'],
})
export class VinhosComponent implements OnInit {

  // subscribe
  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;
  vinhos$: Observable<Vinho[]>;
  campoBusca: string;

  constructor(public vinhosService: VinhosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.listar();
  }
  
  listar() {
    this.vinhosService.listar().subscribe(
      dados => this.vinhos = dados
    );
    // this.vinhos$ = this.vinhosService.listar();
  }

  selecionar(vinho: Vinho) {
    this.vinhoSelecionado = vinho;
  }

  visualizar(id) {
    this.router.navigate(['detalhes-vinho', id])
  }

  editar(id) {
    this.router.navigate(['cadastro-vinho', id])
  }

  remover(id) {
    this.vinhosService.deletar(id).subscribe(() => {
      let notificacao: Notificacao = new Notificacao();
      notificacao.mensagem = 'Vinho Excluido';
      notificacao.tipo = 'danger';
      this.notificacaoService.adicionar(notificacao); 
      this.listar();
    })
  }
}