import { Component } from '@angular/core';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';

@Component({
  selector: 'app-order-builder',
  standalone: true,
  imports: [IngredientsListComponent],
  templateUrl: './order-builder.component.html',
  styleUrl: './order-builder.component.scss'
})
export class OrderBuilderComponent {

}
