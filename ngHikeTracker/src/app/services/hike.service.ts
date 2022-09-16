import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HikeService {
  private baseUrl = 'http://localhost:8082/';
private url = this.baseUrl + 'api/hikes';

  constructor(private http : HttpClient) { }
}
