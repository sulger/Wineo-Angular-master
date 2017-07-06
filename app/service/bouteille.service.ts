import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

import {Bouteille} from "../domain/bouteille";

@Injectable()
export class BouteilleService {

    // URL du WS d'obtention des bouteilles
    private urlWSBouteille: String = 'http://localhost:8080/tutu';

    constructor(private http: Http) { }

    /*
     *   Obtenir une promesse sur les bouteilles de la cave
     */
    obtenirBouteilles(): Observable<Bouteille[]> {

        // Nous consommons le WS

        /*
         * Soluce Jacqueline : On utilise le mapper pour obtenir et manipuler une HttpRequest et un Observable.
         * https://angular.io/docs/ts/latest/guide/server-communication.html
         * On retourneun boservable des datas de l'objet JSON ou d'un proto vide.
         */
        return this.http
            .get(this.urlWSBouteille)
            .map(res => res.json().data || { });
    }

    /*
     * Ajouter une bouteille.
     */
    ajouterBouteille(bouteille: Bouteille) {

        // Nous préparons les paramètres d'entêtes
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        // Nous consommons le WS
        return this.http
            .post(this.urlWSBouteille, JSON.stringify(bouteille), {headers: headers})
            .toPromise()
            .then(reponse => reponse.json().data);
    }

}
