import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';

  selectedCategory: Category;

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

  filteredAnnouncements: Announcement[] = this.announcements;

  onCategorySelected(category: Category) {
    if(!category) {
      this.filteredAnnouncements = this.announcements;
      return;
    }
    this.selectedCategory = category;
    this.filteredAnnouncements = this.announcements.filter(announcement => announcement.category.id === category.id);
  }
}
