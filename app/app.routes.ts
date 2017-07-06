import {provideRouter, RouterConfig} from "@angular/router";
import {BouteilleListeComponent} from "./composant/bouteille-liste.component";
import {BouteilleCreationComponent} from "./composant/bouteille-creation.component";

const routes: RouterConfig = [

    {
        path: '',
        redirectTo: '/bouteilles',
        pathMatch: 'full'
    },
    {
        path: 'bouteilles',
        component: BouteilleListeComponent
    },
    {
        path: 'bouteille',
        component: BouteilleCreationComponent
    }

];

export const routerService = [

    provideRouter(routes)

];