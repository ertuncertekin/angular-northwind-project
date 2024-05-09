import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Ertunç';
  clickCount: number = 0
  sonuc: string = ""
  items: number[] = [5, 6, 10, 12, 5, 8];
  onButtonClick() {
    this.title = "Butona Tıkladınız!"
    this.clickCount++
    if (this.clickCount > 5 && this.clickCount < 10) {
      this.sonuc = "5'ten fazla tıkladınız."
    }
    else if (this.clickCount > 10) {
      this.sonuc = "10'dan fazla tıkladınız."
    }
  }
  getFiltiredItems() {
    return this.items.filter(item => item > 1)
  }
}
