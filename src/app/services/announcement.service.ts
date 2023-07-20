import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  serviceCall() {
    console.log("Service call");
  }

  getAnnouncements(): Observable<Announcement[]> {
    if(this.announcements) {
      return of(this.announcements);
    }
    return of([]);
  }

  addAnnouncement(announcement: Announcement) : Observable<Announcement> {
    announcement.id = this.announcements.length + 1;
    this.announcements.push(announcement);
    return of(announcement);
  }

  editAnnouncement(id) : Observable<Announcement>{
    return of(this.announcements.find(announcement => announcement.id === id));
  }

  deleteAnnouncement(id) : Observable<Announcement>{
    return of(this.announcements.find(announcement => announcement.id === id));
  }

  getAnnouncementById(id: number) : Observable<Announcement> {
    return of(this.announcements.find(announcement => announcement.id === id));
  }

  constructor() { }

  announcements: Announcement[] = [
    {
      id: 1,
      title: 'New Announcement 1',
      message: 'This is a new announcement 1',
      author: 'Admin',
      category: {
        name: 'General',
        id: 1,
      }
    },
    {
      id: 2,
      title: 'New Announcement 2',
      message: 'This is a new announcement 2',
      author: 'Admin',
      category: {
        name: 'Course',
        id: 2,
      }
    },
    {
      id: 3,
      title: 'New Announcement 3',
      message: 'This is a new announcement 3',
      author: 'Admin',
      category: {
        name: 'Laboratory',
        id: 3,
      }
    }
  ];
}
