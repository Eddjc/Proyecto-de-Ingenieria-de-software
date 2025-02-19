import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { CategoriaService } from 'src/app/servicios/categoria.service';
=======
>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  formularioCategoria = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });
<<<<<<< HEAD

  categorias: any = [];
  backendHost: string = 'http://localhost:3500';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.httpClient.get(`${this.backendHost}/categoria`)
      .subscribe(res => {
        this.categorias = res;
        console.log(this.categorias);
      })
  }

  guardar(){
    this.httpClient.post(`${this.backendHost}/categoria`,this.formularioCategoria.value)
      .subscribe((res: any)=>{
        console.log(res);
        this.categorias.push(res)
      });
  }
=======

  categorias: any = [];
  backendHost: string = 'http://localhost:3500';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.httpClient.get(`${this.backendHost}/categoria`)
      .subscribe(res => {
        this.categorias = res;
        console.log(this.categorias);
      })
  }

  guardarCategoria(){
    console.log('Formulario valido', this.formularioCategoria.valid);
    this.httpClient.post(`${this.backendHost}/categoria`,this.formularioCategoria.value)
      .subscribe((res: any)=>{
        console.log(res);
        this.categorias.push(res);
        
      });
  }

  eliminarCategoria(i:any){
    this.httpClient.delete(`${this.backendHost}/categoria/${i}`)
      .subscribe((res: any)=>{
        console.log(res);
        if (res.codigoResultado ==1){
            this.categorias.splice(res,1);
        }
        
      });
  }  



>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc

  eliminarCategoria(i:any){
    this.httpClient.delete(`${this.backendHost}/categoria/${i}`)
      .subscribe((res: any)=>{
        console.log(res);
        if (res.codigoResultado ==1){
            this.categorias.splice(i,1);
        }
      });
  }  
}
