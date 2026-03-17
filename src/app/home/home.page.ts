import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenu,
  IonMenuToggle,
  IonButtons,
  IonMenuButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  informationCircleOutline,
  pricetagsOutline,
  callOutline,
  logoGooglePlaystore,
  logoApple,
  locationOutline,
  mailOutline,
  logoTwitter,
  logoFacebook,
  logoYoutube,
  logoInstagram,
  closeOutline
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
    IonMenuToggle,
    IonButtons,
    IonMenuButton,
    IonIcon,
  ],
})
export class HomePage {
  selectedPlan: 'business' | 'students' = 'business';
  activeSlideIndex = 0;

  constructor() {
    addIcons({
      informationCircleOutline,
      pricetagsOutline,
      callOutline,
      logoGooglePlaystore,
      logoApple,
      locationOutline,
      mailOutline,
      logoTwitter,
      logoFacebook,
      logoYoutube,
      logoInstagram,
      closeOutline
    });
  }

  setPlan(plan: 'business' | 'students') {
    this.selectedPlan = plan;
  }

  onSliderScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const width = event.target.clientWidth;
    this.activeSlideIndex = Math.round(scrollLeft / width);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
