import { Directive, effect, inject, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  @Input({ required: true, alias: 'appAuth' }) authType!: Permission;
  private authService = inject(AuthService);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.authType) {
        console.log('show element');
      } else {
        console.log('show No element');
      }
    });
  }
}
