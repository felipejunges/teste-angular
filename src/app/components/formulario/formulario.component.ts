import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  postagemForm!: FormGroup;

  constructor(private service: PostagemService) { }

  ngOnInit(): void {
    this.postagemForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title() {
    return this.postagemForm.get('title')!;
  }

  get description() {
    return this.postagemForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.postagemForm.patchValue({ image: file });
  }

  submit() {
    if (this.postagemForm.invalid)
      return;

    console.log(this.postagemForm.value);

    //this.service.incluir(this.postagemForm.value).subscribe();
    //this.service.incluir({titulo: 'teste', descricao: 'testeee'}).subscribe();
    this.service.incluir({
      titulo: this.title.value,
      descricao: this.description.value
    }).subscribe();
  }
}
