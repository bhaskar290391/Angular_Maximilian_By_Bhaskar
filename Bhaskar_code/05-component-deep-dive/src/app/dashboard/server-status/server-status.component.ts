import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const data = Math.random();

      if (data < 0.5) {
        this.currentStatus = 'online';
      } else if (data < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('after initialition of view');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
