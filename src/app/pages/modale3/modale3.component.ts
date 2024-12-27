import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceProService } from '../../service/service-pro.service';
import { DialogData } from '../modale1/modale1.component';

@Component({
  selector: 'app-modale3',
  templateUrl: './modale3.component.html',
  styleUrl: './modale3.component.css'
})
export class Modale3Component {

  constructor(public dialogRef: MatDialogRef<Modale3Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private ser:ServiceProService) {}
  data1:any=this.data;
  
    onNoClick(): void {
      this.dialogRef.close();
    }







  
  Supprimer(){
     
    console.log("element a supprmer =",this.data);
    console.log("sup ok",this.data1.id);
    this.dialogRef.close(this.data1.id);
    // this.ser.Supprimer_BD(this.data1.id).subscribe( data =>{
    
    
    // })

   }

}
