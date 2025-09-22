
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './exo-property-binding.html',
  styleUrl: './exo-property-binding.css'
})

export class ExoPropertyBinding {
  
  oneFriendId:number=99;
  oneFriendName:string="Steven Cigale";
  oneFriendAge:number=25;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";

  getOneFriendStatus():string{
    return this.oneFriendStatus;
  }

}
