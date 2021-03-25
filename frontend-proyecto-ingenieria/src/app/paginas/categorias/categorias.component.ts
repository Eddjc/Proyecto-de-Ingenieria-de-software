import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { CategoriaService } from 'src/app/servicios/categoria.service';
>>>>>>> b22e48c8e545297fcf8549d7b7e975162b9dcba8

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

<<<<<<< HEAD
  formularioCategoria = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

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

  eliminarCategoria(i:any){
    this.httpClient.delete(`${this.backendHost}/categoria/${i}`)
      .subscribe((res: any)=>{
        console.log(res);
        if (res.codigoResultado ==1){
            this.categorias.splice(i,1);
        }
      });
  }  
=======
  categorias: any = [];

  constructor(private serviceCategoria: CategoriaService) { }

  ngOnInit(): void {

    this.obtenerCategorias();

  }

  obtenerCategorias() {
    this.serviceCategoria.obtenerCategorias().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.categorias = data
      }

    });
  }

>>>>>>> b22e48c8e545297fcf8549d7b7e975162b9dcba8
}
