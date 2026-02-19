import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([logginInterceptor]))],
}).catch((err) => console.error(err));

function logginInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  console.log('[outgoing request]');
  console.log(request);
  return next(request).pipe(
    tap({
      next: (event) => {
        if (event.type == HttpEventType.Response) {
          console.log('[incoming request]');
          console.log(event.body);
          console.log(event.status);
        }
      },
    }),
  );
}
