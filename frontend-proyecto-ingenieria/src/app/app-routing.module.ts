import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './contrato/contrato.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { DashboardClienteComponent } from './paginas/dashboard-cliente/dashboard-cliente.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { RegistroUsuariosComponent} from './registro-usuarios/registro-usuarios.component'
import { ClientesComponent } from './paginas/clientes/clientes.component';

const routes: Routes = [
  //{path: '', component: RegistroUsuariosComponent},
  {path: 'registro', component: RegistroUsuariosComponent},
  {path: 'contrato', component:ContratoComponent},
  {path: 'dashboard', component:DashboardComponent, children:[
    
<<<<<<< HEAD
    {path: 'usuario', component:UsuariosComponent},
    {path: 'clientes', component:ClientesComponent},
    {path: 'categorias', component:CategoriasComponent},
=======
    {
      path: 'usuario', component:UsuariosComponent, 
    }
>>>>>>> b22e48c8e545297fcf8549d7b7e975162b9dcba8

  ]
  }, 
  {
    path: 'dashboard-cliente', component: DashboardClienteComponent,children:[
      {
        path: 'productos', component: ProductosComponent, 
      },

      {
        path: 'categorias', component: CategoriasComponent, 
      },

      {
        path: 'galeria', component: GaleriaComponent, 
      }
    ] 

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
