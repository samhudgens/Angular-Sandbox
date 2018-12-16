import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          image: 'http://loremflickr.com/600/600/3',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'http://loremflickr.com/600/600/2',
          isActive: false,
          balance: 200,
          registered: new Date('03/11/2017 06:20:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 31,
          address: {
            street: '12 Barf st',
            city: 'Miami',
            state: 'FL'
          },
          image: 'http://loremflickr.com/600/600/1',
          isActive: true,
          balance: 50,
          registered: new Date('11/02/2016 10:30:00')
        }
      ];

      this.loaded = true;

      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson',
      // });

    // }, 2000);

    // this.showExtended = false;

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px;'
    }
  }

}