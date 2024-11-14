import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Ingredient } from '../pages/order-builder/order-builder.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  apiEndpoint = `${environment.api_base_url}/ingredients/`;
  
  constructor(private http: HttpClient) { }

  getIngredients(): Ingredient[] {
    this.http.get(this.apiEndpoint).subscribe((data: Ingredient[]) => {
      return data;
    });
  }
}
