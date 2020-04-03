import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routed-app';
  obsTrack : Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("Roxanne");
    this.obsTrack.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  }
}

