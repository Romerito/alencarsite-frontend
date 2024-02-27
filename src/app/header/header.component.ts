import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showRecuperarSenha = false
  showFazerLogin = true;
  showCriarUsuario = false;
  showHero = false;
  showPerfil = false;
  currentUrl!: string;
  constructor(private router: Router ) { }


  ngOnInit(): void {
    this.currentUrl = this.router.url;
    if(this.currentUrl === "/home"){
      this.showHero = true;
    }else{
      this.showHero = false;
    }
  }

  openLogin() {
    if (this.showPerfil === false) {
      this.showPerfil = true;
    } else {
      this.showPerfil = false;
    }

  }

  cadastrar() {
    this.showRecuperarSenha = false
    this.showFazerLogin = false;
    this.showCriarUsuario = true;
  }

  voltar() {
    this.showRecuperarSenha = false
    this.showFazerLogin = true;
    this.showCriarUsuario = false;
  }

  recuperarSenha() {
    this.showRecuperarSenha = true
    this.showFazerLogin = false;
    this.showCriarUsuario = false;
  }
}
