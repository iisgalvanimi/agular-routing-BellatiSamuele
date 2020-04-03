import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAF-A44j7lPRPS-W_JuLRYTv0u3z-EHWcr6uVBomYWs-3tLWl6laxuR33dgQfU-tJ75Z7g3_GnUKue_Nh3jP0f_Wtz_DhOWWWSsRxHDfnXCuS7wawgIkarETiC2J_yXX3C_drtdCMk5BbZX_UEk297uXsOtuTM'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
