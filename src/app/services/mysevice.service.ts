import { Injectable } from "@angular/core";

import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MyseviceService {
  constructor(private httpClient: HttpClient) {}
  // url: string = "http://192.168.16.106:8081/user?id=3";
  url = "http://localhost:8081/user?id=3";

  public getPosts() {
    return new Promise(resolve => {
      this.httpClient.get(this.url).subscribe(
        data => {
          console.log(data)
          resolve(data);

        },
        error => {
          console.log(error);
        }
      );
    }); 
  }
}
