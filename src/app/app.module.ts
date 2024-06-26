import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ByAuthorPipe } from './byauthor.pipe';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AnnouncementService } from './services/announcement.service';
import { EditAnnouncementFormComponent } from './edit-announcement-form/edit-announcement-form.component';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    ByAuthorPipe,
    CategoriesComponent,
    AddAnnouncementFormComponent,
    HomeComponent,
    EditAnnouncementFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [AnnouncementService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
