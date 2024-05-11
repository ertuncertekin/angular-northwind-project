import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() imageUrl?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() buttonLabel?: string | number;
}
