import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getBusinessNews() {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=business`;
    const url = "https://jsonplaceholder.typicode.com/posts"

    return this.http.get(url);

    // return this.http.get(url, {
    //   params: {
    //     apiKey,
    //   }
    // })
  }

}

