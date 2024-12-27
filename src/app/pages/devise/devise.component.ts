import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { ServiceProService } from '../../service/service-pro.service';
import { MatDialog } from '@angular/material/dialog';
import { Modale1Component } from '../modale1/modale1.component';
import { MatSort } from '@angular/material/sort';
import { Modale3Component } from '../modale3/modale3.component';
import { Modale2Component } from '../modale2/modale2.component';
//import { ModaleDeviseComponent } from '../../modale/modale-devise/modale-devise.component';

export interface Devise {
  id: number;
  libelle: String;
  description: String;
  taux: number;
}

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrl: './devise.component.css',
  


})
export class DeviseComponent  implements AfterViewInit   {
 ELEMENT_DATA: Devise[]=[];
dataSource :  MatTableDataSource<Devise>;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(private serv: ServiceProService,public dialogue1:MatDialog,public dialog: MatDialog){
  this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);

}

displayedColumns: string[] = ['libelle', 'description', 'taux','Action'];

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  
ngOnInit(): void {
  this.Refresh();
  
}




Refresh(){
  this.serv.Get_Devise_BD().subscribe((listedevises:any) =>{
      console.log("listdevse   ::::",listedevises);
      this.ELEMENT_DATA = listedevises;
      console.log("listdevise bd   ::::",this.ELEMENT_DATA);
      this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);


      


    })
  }
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
}
  openDialog(): void {
     const dialogRef = this.dialog.open(Modale1Component, {
      width: '350px',height:'400px',

   
  });}


openDialog2(element:any):void{
   const dialogRef = this.dialog.open(Modale2Component,{
    width:'350px' ,height:'400px', data :{id:element.id,libelle:element.libelle,
      description:element.description,taux: element .taux}
   })

   dialogRef.afterClosed().subscribe(result => {
    console.log("result :::",result);
    
    if (result) {
      this.serv.Modifier_BD(result).subscribe({
        next: devise =>{
          this.Refresh();
        }, error : err =>{
          console.log(err);
          
        }
      })
    }
  });
}

  openDialog1(ele:any): void {
    const dialogRef = this.dialog.open(Modale3Component, {
     width: '400px',height:'200px', data: {id:ele.id,libelle:ele.libelle,descripton:ele.description,
      taux:ele.taux
     }

  
 });

 dialogRef.afterClosed().subscribe(result => {
  console.log("result :::",result);
  
  if (result) {
    this.serv.Supprimer_BD(result).subscribe({
      next: devise =>{
        this.Refresh();
      }, error : err =>{
        console.log(err);
        
      }
    })
  }
});

 
  }



  //supprimer un element by id

  
  
  
  


  

 
   
 























}
