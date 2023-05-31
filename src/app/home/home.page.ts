import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsapi: any = "http://newsapi.org/v2/top-headlines?country=in&apiKey=b63af0019a434f4d907547e8f558e692";
  articles: any = [];
  constructor(private http: HttpClient) {
    this.showNews()
  }


  onToggleColorTheme(event: any) {
    console.log(event.detail.checked);
    if (event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else {
      document.body.setAttribute('color-theme','light');
    }
  }
  showNews()
  {
    this.http.get(this.newsapi).subscribe((response:any) => {
      console.log(response);
      this.articles = response.articles;
    },
    error=>{
      console.log(error);
    })
  }
}
