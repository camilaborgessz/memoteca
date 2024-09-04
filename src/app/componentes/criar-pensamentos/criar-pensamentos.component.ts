import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: "Dev",
    modelo: ''
  }

  criarPensamento() {
    alert('Novo')
  }

  cancelar() {
    alert('Olá')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
