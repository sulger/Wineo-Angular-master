import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";

import {AppComponent} from './app.component';
import {routerService} from "./app.routes";

bootstrap(AppComponent, [routerService, HTTP_PROVIDERS]);
