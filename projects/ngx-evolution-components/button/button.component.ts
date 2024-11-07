import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  AvatarComponent,
  IButtonAction,
  ButtonTheme,
  IIcon,
  SvgComponent,
} from '../public-api';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'evo-button',
  standalone: true,
  imports: [
    CommonModule,
    SvgComponent,
    MatIconModule,
    AvatarComponent,
    MarkdownModule,
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnChanges {
  @Input() label?: string;
  @Input() icon?: IIcon;
  @Input() theme: ButtonTheme = 'default';
  @Input() disabled?: boolean;
  @Input() twClass?: string;
  @Input() isFlat: boolean = false;
  @Input() isFluid: boolean = false;
  @Input() withoutBorder: boolean = false;
  @Input() url?: string;
  @Input() avatarName?: string;
  @Input() avatarImgUrl?: string;
  @Input() onClick?: IButtonAction;
  @Input() isMarkdown?: boolean = false;

  /**
   * Se asegura de que si se proporciona un ícono sin posición, se asigne una por defecto.
   * @param {SimpleChanges} changes - Cambios detectados en las entradas del componente.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['icon'] && this.icon && !this.icon.position) {
      this.icon.position = 'left';
    }
  }

  /**
   * Obtiene las clases CSS que deben aplicarse al botón.
   * Combina las clases de Tailwind con las propiedades del componente.
   * @returns {Object} Objeto con las clases CSS como claves y valores booleanos.
   */
  public get getClasses() {
    const classes = this.twClass ? this.twClass.split(' ') : [];
    return {
      ...classes.reduce(
        (acc, cls) => {
          acc[cls] = true;
          return acc;
        },
        {} as { [key: string]: boolean },
      ),
      ['theme-' + this.theme]: true,
      disabled: this.disabled === true,
      'is-flat': this.isFlat,
      'is-fluid': this.isFluid,
      'only-icon': !this.label,
      'without-border': this.withoutBorder,
    };
  }

  /**
   * Maneja el evento de clic del botón.
   * Ejecuta la acción definida en la propiedad `onClick` si está presente.
   */
  public onClickHandler() {
    if (this.onClick) {
      this.onClick.action();
    }
  }
}
