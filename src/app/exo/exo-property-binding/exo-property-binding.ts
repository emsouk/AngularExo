import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';


@Component({
  selector: 'app-property-binding',
  imports: [FormsModule],
  templateUrl: './exo-property-binding.html',
  styleUrl: './exo-property-binding.css'
})

export class ExoPropertyBinding {

  oneFriendId:number=99;
  oneFriendName:string="";
  oneFriendAge:number=0;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";

  getOneFriendStatus():string{
    return this.oneFriendStatus;
  }

}
