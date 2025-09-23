


import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

/**
 * 🧩 Composant Angular : ExoEventBinding
 * ------------------------------------------------------------
 * - Démonstration du fonctionnement de l'Event Binding en Angular
 * - Composant lié au template `exo-event-binding.html` et au style `exo-event-binding.css`
 * - Permet à l'utilisateur de saisir un nom d'ami et de l'ajouter à une liste
 * - Gère l'état du formulaire et les messages de retour utilisateur
 */
@Component({
  selector: 'app-event-binding',          // 🔹 Balise HTML personnalisée du composant
  imports: [FormsModule],                            // 🔹 (vide ici) → pourrait contenir des modules Angular nécessaires
  templateUrl: './exo-event-binding.html',// 🔹 Vue HTML associée
  styleUrl: './exo-event-binding.css'     // 🔹 Feuille de style spécifique
})
export class ExoEventBinding {

  /**
   * 🏗️ Constructeur du composant
   * - Utilise un setTimeout pour activer `listFriendsAuth` après 3s
   * - Simule un délai (ex. chargement ou autorisation utilisateur)
   */
  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = true; // après 3s → active l'ajout d'amis
    }, 3000);
  }

  // 📌 Variables d'état du composant
  listFriendsInputText: string = "";         // Texte saisi dans l'input utilisateur
  listFriendsAuth: boolean = false;          // État d'activation du bouton (false = désactivé)
  listFriendsCreationStatus: string = "🥶 Aucun ami ..."; // Message d'état affiché

  /**
   * ➕ Méthode : onAddingFriends
   * - Déclenchée lors du clic sur le bouton "Ajouter un ami"
   * - Met à jour le message de statut pour informer l'utilisateur
   */
  onAddingFriends(): void {
    this.listFriendsCreationStatus = "🥳 Votre ami a été ajouté !";
  }

  /**
   * ✏️ Méthode : onUpdateFriendsList
   * - Déclenchée à chaque saisie dans le champ input
   * - Met à jour dynamiquement :
   *    1. le statut (`listFriendsCreationStatus`)
   *    2. le texte saisi (`listFriendsInputText`)
   * - Utilise un cast TypeScript pour cibler correctement la valeur de l'input
   * - Ajoute aussi des logs en console pour debug
   *
   * @param eventInput : Event provenant de l'input
   */
  onUpdateFriendsList(eventInput: any): void {
    this.listFriendsCreationStatus = "🥳 Votre ami a été ajouté !";

    // 🔎 Debug console : affichage brut de l'événement et de la valeur saisie
    console.log(eventInput);
    console.log(eventInput.target.value);

    // ✅ Récupération typée de la valeur de l'input avec cast TS
    //this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;

    //! Variante alternative avec "as" (souvent plus lisible)
    // this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }
}

