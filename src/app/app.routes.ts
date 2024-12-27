import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';

export const routes: Routes = [
    {path: "home", component: HomePageComponent},
    {path: "pokemon", component: PokemonListComponent},
    {path: "pokemon/:id", component: PokemonComponent}, 
    {path: "**", redirectTo: "/home", pathMatch: "full"}
];
