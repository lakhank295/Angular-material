import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl();

  userOptions = [
    new User('Mary'),
    new User('Shelley'),
    new User('Igor')
  ];

  filteredOptions: Observable<User[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith({} as User),
        map(user => user && typeof user === 'object' ? user.name : user),
        map((name: string) => name ? this.filter(name) : this.userOptions.slice())
      );
  }

  filter(name: string): User[] {
    return this.userOptions.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user: User): string {
    return user ? user.name : '';
  }
  
}

export class User {
  constructor(public name: string) { }
}
