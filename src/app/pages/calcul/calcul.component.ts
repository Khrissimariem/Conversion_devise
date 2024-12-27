import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { ServiceProService } from '../../service/service-pro.service';

export interface Devise {
  id: number;
  libelle: string;
  description: String;
  taux: number;
}




@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css'
})

export class CalculComponent {


  devises: Devise[]=[];
  
  constructor(private ser:ServiceProService){}

  ngOnInit(): void {
     
  this.ser.Get_Devise_BD().subscribe((liste_dev_bd:any) => {

    this.devises=liste_dev_bd;
    console.log("la liste aprés affecctaons",this.devises);
  })

  console.log("ya rab",this.devises[1]);

  }

  visible:boolean=false;
  put1:any='';
  dev1:Devise;
  obj={montant:0, device:'' , devicedid: 0 ,taux:0 , resultat:0 };
  res:any;
  

  selectedValue: string;

  index:any;

 // fonction qui retourne l'index de l'elemnt sélectionné 
  trouver (lib:string){
    let i=0;
      while( i < this.devises.length){
        console.log("yyyes",this.devises.length)
        if(this.devises[i].libelle == lib){
          return i;
        }
        i++;
     }
     return i;
      
     
 
  }

  afficher(){
  
    this.visible=!this.visible;
    
    let j=this.trouver(this.selectedValue);
    
    this.dev1=this.devises[j];
    console.log("montant=",this.put1);
    console.log("devise=",this.dev1);
    
    this.obj.montant=this.put1;
    this.obj.taux=this.dev1.taux;
    this.obj.resultat=0;
    this.obj.devicedid=this.dev1.id;
    this.obj.device=this.dev1.libelle;

    console.log("objet apres remplssage=",this.obj);
    //calacul
    this.ser.Calculer_BD(this.obj).subscribe((obj_res:any) => {

      this.res=obj_res;
      console.log("la liste aprés affecctaons",this.res);
    })

   


  }

  



  
  


}
