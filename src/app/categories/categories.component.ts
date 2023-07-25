import { Component, EventEmitter, Output } from '@angular/core';

interface Category {
  name: string;
  id: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {
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

  selectedCategory: Category = this.categories[0];

  @Output() categorySelected = new EventEmitter<Category>();

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
    console.log(category);
  }

  resetCategory() {
    this.categorySelected.emit(null);
  }
}
