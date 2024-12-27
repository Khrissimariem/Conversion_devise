import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';import { ServiceProService } from '../../service/service-pro.service';
;

export interface DialogData {
  id: number;
  libelle: string;
  taux: number;
  description:String;
}
export interface Devise {
  id: number;
  libelle: string;
  description: String;
  taux: number;
}
@Component({
  selector: 'app-modale1',
  templateUrl: './modale1.component.html',
  styleUrl: './modale1.component.css'
})
export class Modale1Component {




  devises: Devise[]=[];
  

  constructor(public dialogRef: MatDialogRef<Modale1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private ser:ServiceProService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  dev1={libelle:'',taux:'',description:''};
ajouter_devise(){
  console.log("ajouter=",this.dev1.libelle,this.dev1.taux,this.dev1.description);
 this.ser.Ajouter_Devise_BD(this.dev1).subscribe(data => {
  console.log("user add with succées ");

   this.dialogRef.close(this.dev1);
   
     
    this.ser.Get_Devise_BD().subscribe((liste_dev_bd:any) => {
  
      this.devises=liste_dev_bd;
      console.log("la liste aprés affecctaons",this.devises);
    })
  
  })
}

}
