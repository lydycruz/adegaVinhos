import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Notificacao } from 'src/app/models/notificacao';
import { Vinho } from 'src/app/models/vinho';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { VinhosService } from 'src/app/services/vinhos.service';


@Component({
  selector: 'cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classificacao: Array<string>;
  titulo: string;
  infoMsgError: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private vinhoService: VinhosService,
    private notificacaoService: NotificacaoService) { }


  ngOnInit() {
    this.titulo = 'Cadastro de Vinho';
    this.inicializarValoresCadastro();
    this.activatedRoute.params.forEach((params:Params) => {
      let id = +params['id'];
      if (id) {
        this.titulo = 'Edição de Vinho';
        this.carregarVinho(id);
      }
    });
  }

  private carregarVinho(id: number) {
    this.vinhoService.buscar(id).subscribe((vinho: Vinho) =>{
      this.vinho = vinho;
    })
  }

  private inicializarValoresCadastro(): void {
    this.vinho = new Vinho();
    this.uvas = ['Cabernet Sauvignon', 'Merlot', 'Carmenére', 'Syrah'];
    this.classificacao = ['Tinto', 'Branco', 'Verde'];
  }

  voltar(): void {
    this.router.navigate(['/vinhos']);
  }

  salvar(){
    if(this.vinho.id){
      this.atualizar();
    } else {
      this.cadastrar();
    }
  }
  
  cadastrar() {
    this.vinhoService.cadastrar(this.vinho).subscribe(() => {
      let notificacao: Notificacao = new Notificacao();
      notificacao.mensagem = 'Vinho cadastrado com sucesso';
      notificacao.tipo = 'success';
      this.notificacaoService.adicionar(notificacao);  
      this.router.navigate(['/vinhos']);
    }), err => {
      let notificacao: Notificacao = new Notificacao();
      notificacao.mensagem = 'Erro ao cadastrar o vinho';
      notificacao.tipo = 'danger';
      this.notificacaoService.adicionar(notificacao);    
    }
  }

  atualizar() {
    this.vinhoService.atualizar(this.vinho.id, this.vinho).subscribe(() => {
      let notificacao: Notificacao = new Notificacao();
      notificacao.mensagem = 'Vinho atualizado com sucesso';
      notificacao.tipo = 'success';
      this.notificacaoService.adicionar(notificacao); 
      this.router.navigate(['/vinhos']);
    }), err => {
      let notificacao: Notificacao = new Notificacao();
      notificacao.mensagem = 'Erro ao cadastrar o vinho';
      notificacao.tipo = 'danger';
      this.notificacaoService.adicionar(notificacao);    
    }

  }
}