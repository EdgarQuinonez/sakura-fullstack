import { Component } from '@angular/core';
import { IngredientService } from '../../../providers/ingredient.service';
import { Ingredient } from '../order-builder.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent {

  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientService) {    
  }

  ngOnInit() {
    this.ingredientsService.getIngredients().subscribe({
      next: (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Ingredients loaded');
      }
    });
    
  }
}
