import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site/site.component';
import { LojaComponent } from './loja/loja.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = 
[
{
  path: 'home',
  component: HomeComponent
}, {
  path: '',
  component: HomeComponent
}, {
  path: 'loja',
  component: LojaComponent
}, {
  path: 'site',
  component: SiteComponent
}, {
  path: 'pagamento',
  component: PagamentoComponent
}, {
  path: 'contato',
  component: ContatoComponent
}, {
  path: 'sobre',
  component: SobreComponent
}, {
  path: 'clientes',
  component: ClienteComponent
}, {
  path: 'login',
  component: LoginComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
