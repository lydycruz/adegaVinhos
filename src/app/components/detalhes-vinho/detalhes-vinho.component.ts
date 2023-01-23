import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Vinho } from 'src/app/models/vinho';
import { VinhosService } from 'src/app/services/vinhos.service';

@Component({
  selector: 'app-detalhes-vinho',
  templateUrl: './detalhes-vinho.component.html',
  styleUrls: ['./detalhes-vinho.component.css']
})
export class DetalhesVinhoComponent implements OnInit {

  titulo: any;
  vinho: Vinho;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private vinhoService: VinhosService) { }

  ngOnInit() {
    this.titulo = 'Visualizar Vinho';
    this.vinho = new Vinho();
    this.activatedRoute.params.forEach((params:Params) => {
      let id = +params['id'];
      if (id) {
        this.carregarVinho(id);
      }
    });
  }
  
  private carregarVinho(id: number) {
    this.vinhoService.buscar(id).subscribe((vinho: Vinho) =>{
      this.vinho = vinho;
    })
  }

  voltar(): void {
    this.router.navigate(['/vinhos']);
  }
}
