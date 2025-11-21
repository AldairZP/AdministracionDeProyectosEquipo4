import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card'; 

// 1. Definimos la interfaz del Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Component({
  selector: 'app-menu-food-mobile',
  standalone: true,
  imports: [
    CommonModule, 
    ProductCard, 
    RouterModule
  ],
  templateUrl: './menu-food-mobile.html',
  styleUrls: ['./menu-food-mobile.css'] 
})
export class MenuFoodMobile {

  // 2. TUS DATOS DE EJEMPLO (JSON)
  productos: Producto[] = [
    { id: 1, nombre: "Café Americano", precio: 25, imagen: "assets/cafe.png", categoria: "Bebidas" },
    { id: 2, nombre: "Capuchino", precio: 35, imagen: "assets/capuchino.png", categoria: "Bebidas" },
    { id: 3, nombre: "Sandwich Pollo", precio: 45, imagen: "assets/sandwich.png", categoria: "Comida" },
    { id: 4, nombre: "Mollete", precio: 30, imagen: "assets/mollete.png", categoria: "Comida" },
    { id: 5, nombre: "Jugo Naranja", precio: 20, imagen: "assets/jugo.png", categoria: "Bebidas" }
  ];

  // 3. LÓGICA DEL CARRITO
  carrito: Producto[] = [];
  total: number = 0;

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.calcularTotal();
    console.log("Agregaste:", producto.nombre);
  }

  calcularTotal() {
    this.total = this.carrito.reduce((suma, item) => suma + item.precio, 0);
  }

  verCarrito() {
    alert(`Llevas ${this.carrito.length} productos. Total: $${this.total}`);
    // Opcional: Aquí podrías usar el router para navegar
    // this.router.navigate(['/cart-food-mobile']);
  }

}