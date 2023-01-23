import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vinho } from '../models/vinho';
import { delay, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {

  private readonly API = `${environment.API}vinhos`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Vinho[]>(this.API).pipe(
      delay(2000),
      tap(console.log)
    );
  }

  cadastrar(vinho: Vinho) {
    return this.http.post(this.API, vinho).pipe(take(1));
  }

  buscar(id:number) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }
  
  deletar(id:number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  atualizar(id:number, vinho: Vinho) {
    return this.http.put(`${this.API}/${id}`, vinho).pipe(take(1));
  }
}
