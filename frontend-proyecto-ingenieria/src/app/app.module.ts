import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContratoComponent } from './contrato/contrato.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbardComponent } from './componentes/navbard/navbard.component';
import { SidebardComponent } from './componentes/sidebard/sidebard.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { SidebardClienteComponent } from './componentes/sidebard-cliente/sidebard-cliente.component';
import { NavbardClienteComponent } from './componentes/navbard-cliente/navbard-cliente.component';
import { DashboardClienteComponent } from './paginas/dashboard-cliente/dashboard-cliente.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { DenunciasComponent } from './paginas/denuncias/denuncias.component';

const routes: Routes = [
  {path:'',redirectTo:'/inico', pathMatch: 'full'},
  {path: 'inicio',component: InicioComponent},
  {path: 'contrato',component: ContratoComponent},
  {path: 'registro', component: RegistroUsuariosComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuariosComponent,
    ContratoComponent,
    InicioComponent,
    NavbardComponent,
    SidebardComponent,
    DashboardComponent,
    UsuariosComponent,
    SidebardClienteComponent,
    NavbardClienteComponent,
    DashboardClienteComponent,
    ProductosComponent,
    CategoriasComponent,
    GaleriaComponent,
    ClientesComponent,
    DenunciasComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    AppComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
