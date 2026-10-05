import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Models/Member';

@Injectable({
  // décorateur qui permet d'injecter le service dans d'autres composants ou services
  providedIn: 'root', // le service est disponible dans toute l'application
})
//
export class Memberservice {

  // méthodes et des fonctions qui permettent d'envoyer des requêtes HTTP dans le backend
  // (get, post, put, delete, patch)
  // patch permet de modifier une partie d'un objet ou d'une ressource existante sur le serveur.

  constructor(private http: HttpClient) {
    // injection du service HttpClient pour effectuer des requêtes HTTP
  }

  getAllMembers() {

    return this.http.get<Member[]>(
      'http://localhost:3000/members'
    );
    // retourne un observable qui émet un tableau de membres

  }
  // angular lance une requête HTTP GET vers l'URL spécifiée
  // et retourne un observable qui émet un tableau d'objets de type Member.
  // Le type de retour est Member[] pour indiquer que la réponse attendue
  // est un tableau d'objets de type Member.

  // Observable : représente une source qui peut émettre des données.

  // Subscriber : celui qui s'abonne à l'Observable pour recevoir les données.

  // Notification : information émise par l'Observable.

  // Le backend fournit une réponse HTTP au frontend.
  // HttpClient transforme cette opération en Observable.
  // L'Observable émet la réponse reçue.
  // subscribe() reçoit cette donnée.
  // RxJS est une bibliothèque qui permet de gérer des flux de données asynchrones et réactifs en utilisant notamment les Observables et subscribe().

  // injections de dépendances :
  // c'est un mécanisme qui permet de fournir des dépendances à une classe
  // ou à un composant sans avoir à les créer manuellement.
  // Angular utilise l'injection de dépendances pour fournir des services
  // aux composants et aux autres services.

  AddMember(member: Member) {
    // Member essem model mett3ek
    return this.http.post<void>(
      // houni chno bech terj3 donc nermiha fergha
      // void yani fergha

      'http://localhost:3000/members',
      member
    );
    // retourne un observable qui émet le membre ajouté

  }

  getMemberById(id: string) {
    return this.http.get<Member>(
      `http://localhost:3000/members/${id}`
    ); // kif testa3ml $ tewali tekhdem ``
  }

  updateMemberById(id: string, m: Member) {
    return this.http.put<void>(
      `http://localhost:3000/members/${id}`,
      m
    );
  }

  // updateMember2 (idCourant : string , newName:string){
  // return this.http.patch<void>
  // (`http://localhost:3000/members/${idCourant}`,{nom : newName})}

  deleteMember(id: string) {
    return this.http.delete<void>(
      `http://localhost:3000/members/${id}`
    );
  }

}