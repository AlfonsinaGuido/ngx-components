import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evo-avatar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss', '../styles/output.scss'],
})
export class AvatarComponent implements OnInit {
  private colorArray: string[];
  public iniciales!: string;
  public textColor!: string;
  public bgColor!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() name!: string;
  @Input() imgUrl?: string;
  @Input() isPriority: boolean = false;
  @Input() color?: string;

  constructor() {
    this.colorArray = [
      'red',
      'purple',
      'blue',
      'green',
      'gray',
      'stone',
      'yellow',
      'orange',
      'pink',
      'indigo',
      'teal',
    ];
  }

  ngOnInit(): void {
    this.color = this.color || this.getAvatarColor();
    this.setIniciales();
  }

  /**
   * Usando el nombre del input, separa por espacios el nombre y obtiene la inicial de las primeras dos instancias.
   */
  private setIniciales() {
    this.name = this.name.trim();
    if (!this.name) {
      this.iniciales = 'XX';
    } else {
      // Separar por espacios el nombre
      const splitNames = this.name.split(' ');
      this.iniciales = splitNames
        // Reducir solamente a inicales que no sean espacios en blanco
        .reduce((acc, curr) => (curr ? acc + curr[0].toUpperCase() : acc), '')
        // Retornar solamente las primeras dos instancias
        .slice(0, 2);
    }
  }

  /**
   * Método que, acorde a la longitud del nombre, obtiene un color de la paleta de colores.
   * @returns Color del avatar
   */
  private getAvatarColor() {
    return this.colorArray[this.name.length % this.colorArray.length];
  }
}
