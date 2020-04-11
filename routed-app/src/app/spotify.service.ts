import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBYEr3rY57mEdIJf3ACs7004KYhaU40JMJW5UgbrAL0JNY2skg18lnmln9VjLHKpL3k0tJiHYL6NxYUcUNq14przvHB4CK1Xcgj8pMV_ouXVQyNkuD8EKX008ItdtFE64nlRJnI2pVAsATQ_XzA9AietQ9xDEo'
    });

    return this.http.get(url, { headers });
  }

}


