import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),

      );
  }
}
