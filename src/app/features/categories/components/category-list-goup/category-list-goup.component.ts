import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryListItem } from '../../models/category-list-item';
import { ListGroupComponent, ListGroupItem } from '../../../../shared/components/list-group/list-group.component';

@Component({
  selector: 'app-category-list-goup',
  standalone: true,
  imports: [
    CommonModule,
    ListGroupComponent
  ],
  templateUrl: './category-list-goup.component.html',
  styleUrl: './category-list-goup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGoupComponent {
  categoryList: CategoryListItem[] = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Giyim" },
    { id: 3, name: "Ev & Yaşam" },
    { id: 4, name: "Kitaplar" },
    { id: 5, name: "Spor & Outdoor" },
    { id: 6, name: "Oyuncaklar" },
    { id: 7, name: "Yiyecek & İçecek" },
    { id: 8, name: "Müzik" },
    { id: 9, name: "Mobilya" },
    { id: 10, name: "Kozmetik" }
  ]
  get categoryListGroupItems(): ListGroupItem[] {
    return this.categoryList.map(category => ({
      id: category.id.toString(),
      label: category.name
    }))
  }
}
