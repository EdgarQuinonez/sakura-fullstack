import { Component } from '@angular/core';
import { IngredientService } from '../../../providers/ingredient.service';
import { Ingredient } from '../order-builder.model';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent {

  ingredients!: Ingredient[];

  constructor(private ingredientsService: IngredientService) {
    this.ingredients = ingredientsService.getIngredients();
  }

}
