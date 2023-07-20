import { Component } from '@angular/core';
import { Category } from '../category';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private announcementService : AnnouncementService) { }

  selectedCategory: Category;

  announcements: Announcement[];
  filteredAnnouncements: Announcement[];

  ngOnInit() {
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
    this.selectedCategory = category;
    this.filteredAnnouncements = this.announcements.filter(announcement => announcement.category.id === category.id);
  }
}
