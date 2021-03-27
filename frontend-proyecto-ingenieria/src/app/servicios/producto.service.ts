import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlApi = 'http://localhost:3500/producto/';

  constructor(private http: HttpClient) { 

  }
//creacion de metodos para realizar consultas al back-end
  obtenerProductos() {
    return this.http.get(this.urlApi);
  }

  obtenerProducto(id:any) {
    return this.http.get(this.urlApi + id);
  }
<<<<<<< HEAD
=======

  guardarProducto(producto:any) {
    return this.http.post(this.urlApi, producto);
  }


eliminarProducto(idProducto:any){
  return this.http.delete(this.urlApi + idProducto)

}





>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc
}
