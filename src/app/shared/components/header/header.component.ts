import { Component, Input, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

@Input() title!: string;
@Input() backbutton!: string;
@Input() isModal!: boolean;

utilsSvc = inject(UtilsService);

  ngOnInit() {}


  dissmissModal() {
    this.utilsSvc.dismissModal();
  }
}