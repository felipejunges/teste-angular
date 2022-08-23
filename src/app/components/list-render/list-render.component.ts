import { Component, OnInit } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animais: Animal[] = [];

  detalhes: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  getAnimals() {
    this.listService.getAll().subscribe((animais) => this.animais = animais);
  }

  showAge(animal: Animal) {
    this.detalhes = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    this.listService.remove(animal.id).subscribe((_) =>
      this.listService.getAll().subscribe((animais) => this.animais = animais)
    );
  }

}
