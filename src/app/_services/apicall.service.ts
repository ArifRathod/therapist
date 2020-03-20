import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class httpservice {

    constructor(private http: HttpClient) { }

    getTherapist(obj) {
        let url = 'https://publicapi.dev.talkspace.com/public/v1/therapists?country=US&state='+obj.state;
        return this.http.get(url);
    }
}