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
  selectedCategoryId: string;
  announcement: Announcement;

  constructor (private announcementService : AnnouncementService, private route : ActivatedRoute) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.announcementService.getAnnouncementById(id).subscribe(announcement => {
      this.announcement = announcement;
      this.title = announcement.title;
      this.message = announcement.message;
      this.selectedCategoryId = announcement.categoryId;
    });
  }

  editAnnouncement() {
    const announcement: Announcement = {
      id: this.announcement.id,
      author: "Admin",
      title: this.title,
      message: this.message,
      categoryId: this.selectedCategoryId,
      imageUrl: ""
    };
    console.log(announcement);
    this.announcementService.updateAnnouncement(announcement).subscribe(() => {
      console.log('Announcement updated successfully' + announcement.id);
    }
    );
  }

  deleteAnnouncement() {
    this.announcementService.deleteAnnouncement(this.announcement.id).subscribe(() => {
      console.log('Announcement deleted successfully' + this.announcement.id);
    }
    );
  }
  
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
}
