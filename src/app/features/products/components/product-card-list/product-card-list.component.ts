import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCardListItem } from '../../models/product-card-list-item';
import { CardListComponent } from '../../../../shared/components/card-list/card-list.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardListComponent
  ],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardListComponent {
  productList: ProductCardListItem[] = [
    { "id": 1, "name": "Bluetooth Kulaklık", "categoryId": 7, "price": 150, "description": "Kablosuz özgürlüğün keyfini çıkarın.", "imageUrl": "https://picsum.photos/id/237/400/400" },
    { "id": 2, "name": "Sporcu T-Shirt", "categoryId": 5, "price": 30, "description": "Rahat ve nefes alabilir kumaşla serin kalın.", "imageUrl": "https://picsum.photos/id/238/400/400" },
    { "id": 3, "name": " Havlu Seti", "categoryId": 3, "price": 50, "description": "Lüks ve kaliteli bir duş deneyimi için ideal.", "imageUrl": "https://picsum.photos/id/239/400/400" },
    { "id": 4, "name": "Klasik Roman Seti", "categoryId": 4, "price": 80, "description": "Usta yazarların en iyi eserleri bir arada.", "imageUrl": "https://picsum.photos/id/240/400/400" },
    { "id": 5, "name": "Kamp Çantası", "categoryId": 5, "price": 100, "description": "Açık hava maceraları için mükemmel bir seçim.", "imageUrl": "https://picsum.photos/id/241/400/400" },
    { "id": 6, "name": "Ahşap Yapı Taşları", "categoryId": 6, "price": 40, "description": "Çocukların yaratıcılığını geliştiren bir oyuncak.", "imageUrl": "https://picsum.photos/id/242/400/400" },
    { "id": 7, "name": "Organik Kahve", "categoryId": 7, "price": 25, "description": "Taze kavrulmuş organik kahve lezzeti.", "imageUrl": "https://picsum.photos/id/243/400/400" },
    { "id": 8, "name": "Klasik Vinyl Kayıt", "categoryId": 8, "price": 35, "description": "Gerçek müzik tutkunları için analog ses deneyimi.", "imageUrl": "https://picsum.photos/id/244/400/400" },
    { "id": 9, "name": "Modern Koltuk Takımı", "categoryId": 9, "price": 1500, "description": "Evinizi şık ve rahat bir şekilde döşeyin.", "imageUrl": "https://picsum.photos/id/185/400/400" },
    { "id": 10, "name": "Doğal Kozmetik Seti", "categoryId": 10, "price": 70, "description": "Cildinizi doğal ve organik içeriklerle besleyin.", "imageUrl": "https://picsum.photos/id/566/400/400" },
    { "id": 11, "name": "Bluetooth Hoparlör", "categoryId": 7, "price": 80, "description": "Her yerde yüksek kaliteli ses keyfi.", "imageUrl": "https://picsum.photos/id/247/400/400" },
    { "id": 12, "name": "Sporcu Şortu", "categoryId": 5, "price": 20, "description": "Rahat kumaşla spor aktivitelerinizi destekleyin.", "imageUrl": "https://picsum.photos/id/248/400/400" },
    { "id": 13, "name": "Pratik Mutfak Dolabı", "categoryId": 3, "price": 200, "description": "Mutfak düzenini sağlamak için ideal bir çözüm.", "imageUrl": "https://picsum.photos/id/249/400/400" },
    { "id": 14, "name": "Modern Ev Otomasyon Seti", "categoryId": 9, "price": 300, "description": "Evinizi akıllı hale getirin.", "imageUrl": "https://picsum.photos/id/250/400/400" },
    { "id": 15, "name": "Cilt Bakım Kiti", "categoryId": 10, "price": 100, "description": "Doğal ve etkili cilt bakım ürünleri seti.", "imageUrl": "https://picsum.photos/id/251/400/400" }
  ]
  //Daha sonra beckend tarafından gelecek olan data. şu an rasgele bir data oluşturduk.

}
