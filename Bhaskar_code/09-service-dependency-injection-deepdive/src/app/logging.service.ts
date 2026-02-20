import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(message: string) {
    const date = new Date().toLocaleDateString();
    console.log(date + ' ==> ' + message);
  }
}
