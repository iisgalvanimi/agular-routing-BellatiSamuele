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
        'Bearer BQAjgc-98CkH6cfqS6zEQ06mVBWuLQebqTfNT6HzVMdxCVDd4fxpRBXI7JY-gs5Ce-fo_CBQyaBYcVGOAKJE_rTSmkLL2XF5e6DDccYbseLYp8so5sSIY1Lxg-zEJ0wFjV08h7I3FY98Ttfm55wm3nHDNXVtDkQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
