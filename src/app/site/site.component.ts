import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  
  showModeloIslustrativo!: boolean;
  showTableOrcamento!: boolean;
  showOrcamento!: boolean;

  ngOnInit(): void {
    this.showModeloIslustrativo = true;
    this.showTableOrcamento = false;
    this.showOrcamento = false;
  }
  
  
  cancelar(){
    this.showOrcamento = false;
    this.showTableOrcamento = false;
    this.showModeloIslustrativo = true;
  }

  solicitarOrcamento(){
    this.showModeloIslustrativo = true;
    this.showOrcamento = true;
    this.showTableOrcamento = false;
  }

  
  consultarOrcamento(){
    this.showTableOrcamento = true;
    this.showOrcamento = false;
    this.showModeloIslustrativo = false;
  }
  
}