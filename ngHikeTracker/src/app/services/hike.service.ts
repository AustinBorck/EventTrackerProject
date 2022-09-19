import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Hike } from '../models/hike';

@Injectable({
  providedIn: 'root'
})
export class HikeService {
  //private baseUrl = 'http://localhost:8082/';
  private url = environment.baseUrl + 'api/hikes';

  constructor(private http : HttpClient) { }

  index(){
    return this.http.get<Hike[]>(this.url).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('HikeService.index(): error retrieving Hikes: ' + err)
        );
      })
    );
  }
  create(newHike : Hike): Observable<Hike>{
    return this.http.post<Hike>(this.url, newHike).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('HikeService.create(): error creating Hike: ' + err)
        );
      })
    );
  }
  destroy(id : number){
    return this.http.delete<void>(this.url + "/" + id).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('HikeService.destroy(): error deleting Hike: ' + err)
        );
      })
    );
  }

  update(hike : Hike){
    return this.http.put<Hike>(this.url + "/" + hike.id, hike).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('HikeService.update(): error updating Hike: ' + err)
        );
      })
    )
  }
  search(keyword : string){
    return this.http.get<Hike[]>(this.url + "/" + "search" + "/" + keyword).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('HikeService.search(): error searching for Hikes: ' + err)
        );
      })
    )
  }
}
