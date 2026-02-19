import {
  AfterContentInit,
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
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
  host: {
    class: 'control',
    '(click)': 'onclick()',
  },
})
export class ControlComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('Control componet initialized');
    console.log(this.input?.nativeElement);
  }
  @Input({ required: true }) lable!: string;

  private el = inject(ElementRef);
  // @HostBinding('class') className = 'control';

  // @HostListener('click') onclick() {
  //   console.log('Clickedd !!!');
  // }

  @ContentChild('input') private input?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  // private input = contentChild.required<HTMLInputElement | HTMLTextAreaElement>(
  //   'input',
  // );

  onclick() {
    console.log('Clickedd !!!');
    console.log(this.el);
    // console.log(this.input());
    console.log(this.input);
  }
}
