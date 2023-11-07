import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';
import { AddUpdateTravelComponent } from 'src/app/shared/components/add-update-travel/add-update-travel.component';

@Component({
  selector: 'app-menu-profe',
  templateUrl: './menu-profe.page.html',
  styleUrls: ['./menu-profe.page.scss'],
})
export class MenuProfePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  

  ngOnInit() {
  }

//=====================Cerrar sesion
  signOut(){
    this.firebaseSvc.signOut();
  }

  //===== Agregar o actualizar un viaje 
  addUpdateTravel(){


    this.utilsSvc.presentModal({
      component: AddUpdateTravelComponent,
      cssClass: 'add-update-modal'
    })
  }

}
