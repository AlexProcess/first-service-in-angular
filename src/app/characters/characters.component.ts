import { CharactersService } from './../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any = []


  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().
      subscribe((res: any) => {
        console.log(res);
        this.characters = res.results;
        console.log(this.characters)
      })
  }
  //this.characters.push()


}
