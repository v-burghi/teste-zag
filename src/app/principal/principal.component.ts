import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [PrincipalService]
})
export class PrincipalComponent implements OnInit {

  produto = ['Todos', 'Produto 1', 'Produto 2', 'Produto 3'];
  acoes: any[];

  constructor(private service: PrincipalService) { }

  ngOnInit() {
    this.service.getAcoes().subscribe(acao => {
      this.acoes = acao;
      console.log(this.acoes);

    });
  }

}
