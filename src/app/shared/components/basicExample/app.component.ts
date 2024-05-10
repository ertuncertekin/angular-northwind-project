import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-basic-examples',
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

    products: { name: string; price: number; discontinued: boolean }[] = [
        { name: "Kalem", price: 100, discontinued: false },
        { name: "Defter", price: 80, discontinued: false },
        { name: "Kurşun Kalem", price: 50, discontinued: true },
        { name: "Silgi", price: 30, discontinued: false },
        { name: "Kalemtıraş", price: 20, discontinued: true },
        { name: "Rulo Cetvel", price: 70, discontinued: false },
        { name: "Dosya", price: 45, discontinued: false },
        { name: "Mürekkep", price: 60, discontinued: true }
    ];


    get FilteredProducts() {
        return this.products.filter(product => product.price > 50)
    }

    // getFilteredProducts() {
    //   return this.products.filter(product => product.price > 50).map(filteredProduct => filteredProduct.name);
    // }

}
