import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from 'src/app/models/figuras';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonItem, IonInput, IonButton, IonText ]
})

export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  resultado: number | null = null;
  ejecutarCalculo() {
    if (this.ladoA && this.ladoB && this.ladoC) {
      const objetoTriangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.resultado = objetoTriangulo.calcularPerimetro();
    }
  }
}
