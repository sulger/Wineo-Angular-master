import {Bouteille} from "../domain/bouteille";
import {Component} from "@angular/core";
import {BouteilleService} from "../service/bouteille.service";

@Component({

    selector: 'bouteille-creation',

    templateUrl: 'app/composant/bouteille-creation.component.html'

})

export class BouteilleCreationComponent {

    bouteille: Bouteille = new Bouteille();

    constructor(private bouteilleService: BouteilleService) { }

    ajouterBouteille(bouteille: Bouteille) {
        this.bouteilleService.ajouterBouteille(bouteille).then();
    }

}
