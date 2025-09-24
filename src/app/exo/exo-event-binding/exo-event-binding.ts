


import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-event-binding',          // 🔹 Balise HTML personnalisée du composant
  imports: [FormsModule, NgIf],                            // 🔹 (vide ici) → pourrait contenir des modules Angular nécessaires
  templateUrl: './exo-event-binding.html',// 🔹 Vue HTML associée
  styleUrl: './exo-event-binding.css'     // 🔹 Feuille de style spécifique
})

export class ExoEventBinding {

  // constructor(){
  //   setTimeout(() => {
  //     this.listFriendsAuth = true; // après 3s → active l'ajout d'amis
  //   }, 3000);
  // }

  listFriendsInputText: string = "";         // Texte saisi dans l'input utilisateur
  listFriendsAuth: boolean = false;          // État d'activation du bouton (false = désactivé)
  listFriendsCreationStatus: string = ""; // Message d'état affiché

  onAddingFriends(): void {
    this.listFriendsCreationStatus = "🥳 Votre ami a été ajouté !";
  }


  onUpdateFriendsList(eventInput: any): void {
    this.listFriendsCreationStatus = "🥳 Votre ami a été ajouté !";

    console.log(eventInput);
    console.log(eventInput.target.value);


  }
}

