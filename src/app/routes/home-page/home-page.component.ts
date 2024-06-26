import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../shared/components/basic-layout/basic-layout.component';
import { CategoryListGoupComponent } from '../../features/categories/components/category-list-goup/category-list-goup.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { CategoryListItem } from '../../features/categories/models/category-list-item';
import { Router } from '@angular/router';


@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BasicLayoutComponent,
    CategoryListGoupComponent,
    ProductCardListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  seletectedCategory: CategoryListItem | null = null;

  /*constructor(private router: Router, route: ActivatedRoute) {
    if (this.seletectedCategory) {
      this.router.navigate([], {
        queryParams: { category: this.seletectedCategory.id }
      })
    }
  }*/

  onChangeSelectCategory(event: { selectedCategory: CategoryListItem | null }) {
    this.seletectedCategory = event.selectedCategory;
  }
}
