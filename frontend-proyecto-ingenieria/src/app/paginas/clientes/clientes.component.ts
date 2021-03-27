import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  
  personas: any = [];
  backendHost: string = 'http://localhost:3500';
<<<<<<< HEAD
=======
  
>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc
  constructor( private httpClient: HttpClient) { }
  
  ngOnInit() {
    this.httpClient.get(`${this.backendHost}/user`)
<<<<<<< HEAD
            .subscribe(res => { //esta funcion de tipo flecha se ejecuta cuando el servidor responde 
                this.personas = res; //almacenamos las personas que estan almacenadas  en el servidor
                //res trae un json con toda la informacion 
                console.log(this.personas);

=======
            .subscribe(res => { 
              this.personas = res;   
              console.log(this.personas);
>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc
            });
  }

  eliminar (i:any){
    console.log("eliminar el elemento " + i);
    this.httpClient.delete(`${this.backendHost}/user/${i}`)
      .subscribe((res:any) => {
        console.log(res);
        if(res.codigoResultado == 1){
<<<<<<< HEAD
          this.personas.splice(i,1);
=======
          this.personas.splice(res,1);
>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc
        }
      });
  }
}