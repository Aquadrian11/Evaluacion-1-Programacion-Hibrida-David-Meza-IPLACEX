export abstract class FiguraGeometrica {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        super('Círculo');
        this.radio = radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super('Triángulo Escaleno');
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}