import { Component } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
  title: string;
  message: string;
  selectedCategory: Category;

  announcementsLength: number;

  constructor (private announcementService : AnnouncementService) {}
  
  categories: Category[] = [
    {
      name: 'General',
      id: "1",
    },
    {
      name: 'Course',
      id: "2",
    },
    {
      name: 'Laboratory',
      id: "3",
    }
  ];

  addAnnouncement() {
    const announcement: Announcement = {
      id: "", ///this is here because the backend requires an id
      author: "Admin",
      title: this.title,
      message: this.message,
      categoryId: this.selectedCategory.id,
      imageUrl: "",
    };
    this.announcementService.addAnnouncement(announcement).subscribe(() => {
      console.log('Announcement added successfully' + announcement.id);
    });
  }
}
