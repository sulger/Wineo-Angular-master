import {Component, Input} from "@angular/core";
import {Bouteille} from '../domain/bouteille';

@Component({

    selector: 'bouteille-detail',

    templateUrl: 'app/composant/bouteille-detail.component.html',

})

export class BouteilleDetailComponent {

    @Input()
    bouteille: Bouteille;

}