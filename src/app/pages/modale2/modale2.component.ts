import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../modale1/modale1.component';
import { ServiceProService } from '../../service/service-pro.service';

@Component({
  selector: 'app-modale2',
  templateUrl: './modale2.component.html',
  styleUrl: './modale2.component.css'
})
export class Modale2Component {


  constructor(public dialogRef: MatDialogRef<Modale2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private ser:ServiceProService) {

    }
  data1:any={id:this.data.id,libelle:this.data.libelle,taux:this.data.taux,description:this.data.description};
  
    onNoClick(): void {
      this.dialogRef.close();
    }


  modifier(){
     console.log(this.data );
     this.dialogRef.close(this.data1);
    console.log("element a moder =",this.data1);
    // this.ser.Modifier_BD(this.data1).subscribe( data =>{
    // console.log("mod ok");
    // this.dialogRef.close();
    
    // })

   }














}
