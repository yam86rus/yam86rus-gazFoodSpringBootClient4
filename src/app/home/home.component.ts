import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Cafeterias {
  id: number
  name: string
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cafeterias: Cafeterias[]=[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Cafeterias[]>('http://127.0.0.1:8077/api/cafeterias')
      .subscribe(response => {
        this.cafeterias = response
      })
  }

}
