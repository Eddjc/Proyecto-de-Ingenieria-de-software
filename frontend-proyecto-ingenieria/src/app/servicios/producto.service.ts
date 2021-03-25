import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlApi = 'http://localhost:3500/producto';

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get(this.urlApi);

  }









}
