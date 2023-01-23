import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notificacao } from '../models/notificacao';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  private _notificacoes: Subject<Notificacao> = new Subject<Notificacao>();

  public notificacaoAdicionada = this._notificacoes.asObservable();
  
  constructor() { }

  public adicionar(notificacao: Notificacao) {
    this._notificacoes.next(notificacao);
  }
}