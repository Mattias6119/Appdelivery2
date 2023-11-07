import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

  
// firebase
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
    
      // Initialize Firebase
      export const firebaseConfig = {
        apiKey: "AIzaSyAmQaQubxPK19UpPqRzrPoALk6C-vB7GH8",
        authDomain: "delivery-99386.firebaseapp.com",
        projectId: "delivery-99386",
        storageBucket: "delivery-99386.appspot.com",
        messagingSenderId: "407037202697",
        appId: "1:407037202697:web:664a093e4bb9a6c18c43d8"
      } ;


      

      firebase.initializeApp(environment.firebaseConfig);     

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFirestoreModule
            ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
