import { Component, OnInit } from '@angular/core';
import { Program } from './program';


@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  //programName = 'WKFC';
  programName : Program [] = [
    { 
      id: 1, 
      name: "Wkfc"
      },
      { 
        id: 2, 
        name: "Tru"
        }
  ];

selectedProgram?: Program;
onSelect(Program: Program): void {
  this.selectedProgram = Program;
}
  constructor() { }

  ngOnInit(): void {
  }

}
