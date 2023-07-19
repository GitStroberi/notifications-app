import { Component } from '@angular/core';
import { Category } from '../category';
import { Announcement } from '../announcement';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedCategory: Category;

  announcements: Announcement[] = [
    {
      title: 'New Announcement 1',
      message: 'This is a new announcement 1',
      author: 'Admin',
      category: {
        name: 'General',
        id: 1,
      }
    },
    {
      title: 'New Announcement 2',
      message: 'This is a new announcement 2',
      author: 'Admin',
      category: {
        name: 'Course',
        id: 2,
      }
    },
    {
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
