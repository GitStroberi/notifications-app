import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl = 'https://newsapi20221108120432.azurewebsites.net/api/Announcements';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  
  serviceCall() {
    console.log("Service call");
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl);
  }
  
  getAnnouncementById(id: string): Observable<Announcement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Announcement>(url);
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(this.apiUrl, announcement);
  }

  updateAnnouncement(id: string): Observable<Announcement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Announcement>(url, id);
  }

  deleteAnnouncement(id: string): Observable<Announcement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Announcement>(url);
  }


  // announcements: Announcement[] = [
  //   {
  //     id: "1",
  //     title: 'New Announcement 1',
  //     message: 'This is a new announcement 1',
  //     author: 'Admin',
  //     categoryId: "1",
  //     imageUrl: ""
  //   },
  //   {
  //     id: "2",
  //     title: 'New Announcement 2',
  //     message: 'This is a new announcement 2',
  //     author: 'Admin',
  //     categoryId: "2",
  //     imageUrl: ""
  //   },
  //   {
  //     id: "3",
  //     title: 'New Announcement 3',
  //     message: 'This is a new announcement 3',
  //     author: 'Admin',
  //     categoryId: "3",
  //     imageUrl: ""
  //   }
  // ];
}
