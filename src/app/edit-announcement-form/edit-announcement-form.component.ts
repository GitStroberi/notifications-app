import { Component } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { Category } from '../category';
import { Announcement } from '../announcement';
import { ActivatedRoute } from '@angular/router';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-edit-announcement-form',
  templateUrl: './edit-announcement-form.component.html',
  styleUrls: ['./edit-announcement-form.component.scss']
})
export class EditAnnouncementFormComponent {
  title: string;
  message: string;
  selectedCategory: Category;
  announcement: Announcement;

  constructor (private announcementService : AnnouncementService, private route : ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.announcementService.getAnnouncementById(id).subscribe(announcement => {
      this.announcement = announcement;
      this.title = announcement.title;
      this.message = announcement.message;
      this.selectedCategory = announcement.category;
    });
  }

  editAnnouncement() {
    const announcement: Announcement = {
      id: this.announcement.id,
      author: "Admin",
      title: this.title,
      message: this.message,
      category: this.selectedCategory
    };
    console.log(announcement);
    this.announcementService.editAnnouncement(this.announcement.id).subscribe((foundAnnouncement) => {
      foundAnnouncement.title = announcement.title;
      foundAnnouncement.message = announcement.message;
      foundAnnouncement.category = announcement.category;
      console.log('Announcement edited successfully' + announcement.id);
    }
    );
  }

  deleteAnnouncement() {
    this.announcementService.deleteAnnouncement(this.announcement.id).subscribe(() => {
      console.log('Announcement deleted successfully' + this.announcement.id);
    });
  }
  
  categories: Category[] = [
    {
      name: 'General',
      id: 1,
    },
    {
      name: 'Course',
      id: 2,
    },
    {
      name: 'Laboratory',
      id: 3,
    }
  ];
}
