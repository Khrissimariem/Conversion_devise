import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceProService {

  constructor(private _http:HttpClient) { }


  public Get_Devise_BD():Observable<any>{
    return this._http.get<any>("http://localhost:8080/devises");
  }
   
  public Ajouter_Devise_BD(devise :any):Observable<any>{
     return this._http.post<void>("http://localhost:8080/devises",devise);
  }
  
  public Supprimer_BD(id:any):Observable<any>{
    return this._http.delete<void>("http://localhost:8080/devises/"+id);
 }

 public Modifier_BD(devise:any):Observable<any>{
  return this._http.put<any>("http://localhost:8080/devises" ,devise);
}

public Calculer_BD(ct:any):Observable<any>{
  return this._http.post<any>("http://localhost:8080/devises/convert",ct);
}




}
