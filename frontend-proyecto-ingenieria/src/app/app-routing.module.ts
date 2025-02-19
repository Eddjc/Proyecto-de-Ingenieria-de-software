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
<<<<<<< HEAD
=======
import { DenunciasComponent } from './paginas/denuncias/denuncias.component';
>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc

const routes: Routes = [
  //{path: '', component: RegistroUsuariosComponent},
  {path: 'registro', component: RegistroUsuariosComponent},
  {path: 'contrato', component:ContratoComponent},
  {path: 'dashboard', component:DashboardComponent, children:[
<<<<<<< HEAD
  
    {path: 'usuario', component:UsuariosComponent},
    {path: 'clientes', component:ClientesComponent},
    {path: 'categorias', component:CategoriasComponent},
    {
      path: 'usuario', component:UsuariosComponent, 
    }
=======
    
    {path: 'usuario', component:UsuariosComponent},
    { path: 'categorias',component:CategoriasComponent},
    {path: 'clientes', component:ClientesComponent},
    { path: 'denuncias', component:DenunciasComponent}


>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc
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
