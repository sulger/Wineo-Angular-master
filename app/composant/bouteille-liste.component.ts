import {Component, OnInit} from '@angular/core';
import {Bouteille} from '../domain/bouteille';
import {BouteilleDetailComponent} from './bouteille-detail.component';
import {BouteilleService} from '../service/bouteille.service';

@Component({
    selector: 'bouteille-liste',

    templateUrl: 'app/composant/bouteille-liste.component.html',

    directives: [BouteilleDetailComponent]

})

export class BouteilleListeComponent implements OnInit {

    // Collection de bouteilles de la cave
    cave: Bouteille[];

    // Bouteille sélectionnée
    bouteilleSelectionnee: Bouteille;

    // Constructeur public du composant
    constructor(private bouteilleService: BouteilleService) { }

    // Réagir à la sélection d'une bouteille dans la liste
    onSelect(bouteille: Bouteille) {
        this.bouteilleSelectionnee= bouteille;
    }

    // Obtenir toutes les bouteilles de la cave
    obtenirBouteilles() {

        /*
         *  Nous résolvons de manière asynchrone l'opération.
         *  Nous obtenons une promesse de résultat du service des bouteilles.
         *  Lors que l'opération a été résolue (réussie ou échouée), nous obtenons les bouteilles.
         */
        /*
         * Soluce Jacqueline : On utilise l'API Observable en enregistrant this.cave à l'observable.
         * Les modifications de valeurs de l'observable feront variés this.cave.
         * Sans subscribe(), l'appel WS n'est jamais fait, même de manière explicite.
         */
        this.bouteilleService.obtenirBouteilles()
            .subscribe(resultat => this.cave = resultat);
    }

    // Hook d'initialisation
    ngOnInit() {
        this.obtenirBouteilles();
    }

}
