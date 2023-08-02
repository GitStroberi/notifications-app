import { Component } from '@angular/core';
import { Category } from '../category';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private announcementService : AnnouncementService, private notificationService : NotificationService) { }

  selectedCategoryId: string;

  announcements: Announcement[];
  filteredAnnouncements: Announcement[];
  websocketConn: WebSocket;

  notificationMessage: string;

  ngOnInit() {
    this.websocketConn = new WebSocket("ws://localhost:7166/hub/notifications");

    this.notificationService.notificationSubject.subscribe(
      hasNotifications => this.notificationMessage = 
      hasNotifications ? "New notifications, please refresh the page" : ""
    );

    this.announcementService.serviceCall();
    this.announcementService.getAnnouncements().subscribe(announcements => {
      this.announcements = announcements;
      this.filteredAnnouncements = announcements;
    });
  }

  onCategorySelected(category: Category) {
    if(!category) {
      this.filteredAnnouncements = this.announcements;
      return;
    }
    this.selectedCategoryId = category.id;
    this.filteredAnnouncements = this.announcements.filter(announcement => announcement.categoryId === category.id);
  }
}
