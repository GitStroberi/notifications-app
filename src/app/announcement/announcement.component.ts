import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() author: string;
}
