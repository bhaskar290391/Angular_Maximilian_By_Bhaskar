import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  DestroyRef,
  inject,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const data = Math.random();

      if (data < 0.5) {
        this.currentStatus.set('online');
      } else if (data < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

  ngAfterViewInit() {
    console.log('after initialition of view');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
