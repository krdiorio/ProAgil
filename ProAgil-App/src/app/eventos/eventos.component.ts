import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [];

  imagemLargura: number = 50;
  imagemMargem: number = 2;
  mostraImagem: boolean = false;
  filtroLista = '';
  
    
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getEventos();

  }
  alterarImagem() {
    this.mostraImagem = !this.mostraImagem;
  }

  getEventos() {

    this.http.get('http://localhost:5000/api/values').subscribe(response =>
    {
      this.eventos = response;
      console.log(this.eventos);
    }, error => {
      console.log(error);
    }
    
    );
  }

}
