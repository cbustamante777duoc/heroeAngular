import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjetas',
  templateUrl: './heroe-tarjetas.component.html',
  styleUrls: ['./heroe-tarjetas.component.css']
})
export class HeroeTarjetasComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() heroeSelecionado:EventEmitter<number>;


  constructor(private router:Router) { 
    this.heroeSelecionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
   // console.log(this.index);
   this.router.navigate(['/heroe', this.index]);
  // this.heroeSelecionado.emit(this.index);

  }

}
