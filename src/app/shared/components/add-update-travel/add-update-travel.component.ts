import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modelos/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-add-update-travel',
  templateUrl: './add-update-travel.component.html',
  styleUrls: ['./add-update-travel.component.scss'],
})
export class AddUpdateTravelComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(''), 
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required,Validators.minLength(4)]), 
    vehicle: new FormControl('', [Validators.required,Validators.minLength(4)]),
    patente: new FormControl('', [Validators.required,Validators.minLength(4),Validators.min(0)]),
    phone: new FormControl('', [Validators.required,Validators.min(0)]),

  })

  FirebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {

     const loading =await this.utilSvc.loading();
     await loading.present();

      this.FirebaseSvc.Registrar(this.form.value as User).then(async res => {

       await this.FirebaseSvc.updateUser(this.form.value.name);

       let uid=res.user.uid;
       

      }).catch(error =>{
        console.log(error);

//====================contraseña o usuario invalida
        this.utilSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
//=========================================
      }).finally(()=>{
        loading.dismiss();
      })
    }

  }

}

