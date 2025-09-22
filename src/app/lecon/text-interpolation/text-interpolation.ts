
import { Component } from '@angular/core';

interface Hobbies {
  reading: string;
  cycling: string;
  cooking: string;
}
@Component({
  selector: 'app-text-interpolation',
  imports: [],
  templateUrl: './text-interpolation.html',
  styleUrl: './text-interpolation.css',
})
export class TextInterpolation {
  title: string = 'Bienvenue dans notre super mega cours Angular';
  description: string =
    "La text interpolation vous permet d'afficher des données dynamiques dans votre template.";
  currentDate: Date = new Date();

  username: string = 'John Doe';

  xss:string= '<script> hahaha <script/>'

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  hobbies: Hobbies = {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }
}
