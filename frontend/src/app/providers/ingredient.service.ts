import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Ingredient } from '../pages/order-builder/order-builder.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  apiEndpoint = `${environment.api_base_url}/ingredients/`;
  
  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiEndpoint);
  }
}
