import {
  Component,
  HostBinding,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  //   '(click)': 'onclick()',
  // },
})
export class ControlComponent {
  @Input({ required: true }) lable!: string;

  @HostBinding('class') className = 'control';

  @HostListener('click') onclick() {
    console.log('Clickedd !!!');
  }

  // onclick() {
  //   console.log('Clickedd !!!');
  // }
}
