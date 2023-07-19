import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
  title: string;
  message: string;
  selectedCategory: Category;
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

  addAnnouncement() {
    console.log(this.title);
    console.log(this.message);
    console.log(this.selectedCategory);
  }
}
