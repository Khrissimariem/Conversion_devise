import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './pages/dash/dash.component';
import { CalculComponent } from './pages/calcul/calcul.component';
import { DeviseComponent } from './pages/devise/devise.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidbarComponent } from './layout/sidbar/sidbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { Modale1Component } from './pages/modale1/modale1.component';
import { provideHttpClient, withFetch } from "@angular/common/http";
import {MatInputModule} from '@angular/material/input';
import { Modale3Component } from './pages/modale3/modale3.component';
import { Modale2Component } from './pages/modale2/modale2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    CalculComponent,
    DeviseComponent,
    NavbarComponent,
    SidbarComponent,
    Modale1Component,
    Modale3Component,
    Modale2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    MatPaginator,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
   // Ng2SearchPipeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
