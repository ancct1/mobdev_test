import { Injectable } from '@angular/core';
/** api service to return data from the url source*/
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    /**GET Episode from outside source*/
    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes');
    }
    /**GET a Episode by ID from outside source*/
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }
    /**GET character from outside source*/
    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters');
    }
    /**GET character by ID from outside source*/
    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    /**GET quotes reletad to episodes from outside source*/
    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }
    /**GET quotes by ID reletad to episodes from outside source*/
    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }
    /**GET number of deaths reletad to a character from outside source*/
    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths');
    }
    getDeath(id) {
        return this.http.get('https://www.breakingbadapi.com/api/deaths');
    }

}
