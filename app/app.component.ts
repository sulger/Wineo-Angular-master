import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {BouteilleService} from "./service/bouteille.service";


@Component({

    selector: 'wineo',

    templateUrl: 'app/app.component.html',

    directives: [ROUTER_DIRECTIVES],

    providers: [BouteilleService]

})

export class AppComponent {

}
