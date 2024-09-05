import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento';
import { PensamentoService } from '../pensamentos/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() =>
    this.router.navigate(['/listarPensamento']))
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
