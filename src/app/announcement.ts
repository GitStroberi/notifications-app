import { Category } from './category';

export interface Announcement {
    id: string;
    title: string;
    message: string;
    categoryId: string;
    author: string;
    imageUrl: string;
}
