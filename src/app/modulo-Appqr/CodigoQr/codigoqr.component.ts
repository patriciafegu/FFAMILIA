import { Component, OnInit } from '@angular/core';
import {ServiceAppQr} from '../../SERVICES/services-appqr/moduloappqr.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.component.html',
  styleUrls: ['./codigoqr.component.css']
})
export class CodigoQrComponent implements OnInit {
  Codigos:any = [];
  
   constructor(private serviceAppQr:ServiceAppQr, private router:Router) { }


  ngOnInit(): void {
    this.serviceAppQr.GetCodigos().subscribe(res => {
      console.log(res)
      this.Codigos =<any>res;
    });
    
  }

  

}