import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpRequestInterceptor } from './services/spinner-interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {

  providers: [
    provideAnimations(), // required animations providers
    importProvidersFrom(
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),  // Corrected
    ToastrModule.forRoot({
       timeOut:3000,
       positionClass:'toast-top-right',
       preventDuplicates:true,
   }),
    CarouselModule.forRoot()
  ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
};
