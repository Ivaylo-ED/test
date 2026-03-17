import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonMenuToggle,
  IonButtons,
  IonMenuButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  businessOutline,
  schoolOutline,
  informationCircleOutline,
  pricetagsOutline,
  callOutline,
  logoGooglePlaystore,
  logoApple,
  checkmarkCircle,
  mapOutline,
  locationOutline,
  mailOutline,
  logoLinkedin,
  logoTwitter,
  logoFacebook,
  logoYoutube,
} from 'ionicons/icons';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonMenu,
    IonList,
    IonItem,
    IonMenuToggle,
    IonButtons,
    IonMenuButton,
    IonIcon,
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      businessOutline,
      schoolOutline,
      informationCircleOutline,
      pricetagsOutline,
      callOutline,
      logoGooglePlaystore,
      logoApple,
      checkmarkCircle,
      mapOutline,
      locationOutline,
      mailOutline,
      logoLinkedin,
      logoTwitter,
      logoFacebook,
      logoYoutube,
    });
  }
}
