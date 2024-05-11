import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input } from '@angular/core';


export interface ListGroupItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
  @Input() items: ListGroupItem[] = [] //category ve product için yaptığım aynı şey

  @Output() changeSelect = new EventEmitter<{ selectedItemId: string | null; }>();
  // <app-list-group (changeSelect)="onListGroupItemClick($event)"></app-list-group>
  // @Output: Bu component'ten dışarıya bir değer gönderilmesini sağlar.
  // EventEmitter: Bu component'ten dışarıya bir değer gönderilmesini sağlar.
  // Component'in kullanıldığı yerde bu event'i dinleyen bir metot olabilir.

  selectedItemId: string | null = null;

  onListGroupItemClick(item: ListGroupItem) {
    this.selectedItemId = this.selectedItemId !== item.id ? item.id : null;
    this.changeSelect.emit({ selectedItemId: this.selectedItemId });
  }

  isSelectedItem(itemId: string): boolean {
    return this.selectedItemId === itemId;
  }
  ///////////////////////////////////

}
