import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../shared/components/basic-layout/basic-layout.component';
import { CategoryListGoupComponent } from '../../features/categories/components/category-list-goup/category-list-goup.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    CommonModule, RouterModule, BasicLayoutComponent, CategoryListGoupComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
