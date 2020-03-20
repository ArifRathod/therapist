import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';


@Injectable()
export class AppGlobals {
      base_url_waudit = "http://192.168.0.65:3000/api";
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    default_home_page_limit = 10;
    constructor(private router:Router) {
    }

}
