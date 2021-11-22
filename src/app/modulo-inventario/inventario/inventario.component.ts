import { Component, OnInit } from '@angular/core';
import {ServiceInventario} from '../../SERVICES/services_inventario/moduloInventario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inv:any = [];

  constructor(private serviceInventario:ServiceInventario, private router:Router) { }

  //constructor() { }

  ngOnInit(): void {
    this.serviceInventario.GetInventarios().subscribe(res => {
      console.log(res)
      this.inv =<any>res;
    });
    
  }

}



  
  

  