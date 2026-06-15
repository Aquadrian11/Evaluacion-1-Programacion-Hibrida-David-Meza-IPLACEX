import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { Circulo } from 'src/app/models/figuras';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonItem, IonInput, IonButton, IonText ]
})

export class CirculoComponent {
  radioInput: number | null = null;
  resultado: number | null = null;

  ejecutarCalculo() {
    if (this.radioInput && this.radioInput > 0) {
      const objetoCirculo = new Circulo(this.radioInput);
      this.resultado = objetoCirculo.calcularPerimetro();
    }
  }
}