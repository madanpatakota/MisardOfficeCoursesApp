import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import '@popperjs/core';
// import 'bootstrap';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
