import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  
  constructor(private route: ActivatedRoute) { }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    let id = params.get("id")!;
  })
}

}
