import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

<<<<<<< HEAD

=======
>>>>>>> b22e48c8e545297fcf8549d7b7e975162b9dcba8
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor(private serviceProducto : ProductoService) { }

  ngOnInit(): void {

    this.obtenerProductos();
  }

  obtenerProductos() {
    this.serviceProducto.obtenerProductos().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.productos = data
      }

    });
  }







}
