import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {NgFor} from "@angular/common";
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tp-directive',
  imports: [NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './tp-directive.html',
  styleUrl: './tp-directive.css'
})
export class TpDirective {
  showDetails = false;

  items: number[] = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.items.push(this.items.length + 1);
  }
}



