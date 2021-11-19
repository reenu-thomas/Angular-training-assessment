import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import {HttpClientModule} from '@angular/common/http';

import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientModule,HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//For GET request
describe('#Testing GET method #getAll() for getting all users', () => {
  it('returned Observable should match the right data', () => {
    const data = [
      {
          "id": 9,
          "first_name": "Jisna",
          "last_name": "Jose",
          "email": "roycereenu1@gmail.com",
          "phone": "0807 817 0167",
          "organization": "ksd",
          "designation": "sakoas",
          "salary": 234324
      },
      {
          "id": 11,
          "first_name": "Reenu Biju",
          "last_name": "Thomas",
          "email": "roycereenu1@gmail.com",
          "phone": "0505913253",
          "organization": "Gadgeon",
          "designation": "Software Engineer",
          "salary": 22999
      },
      {
          "id": 13,
          "first_name": "Biju",
          "last_name": "Thomas",
          "email": "bijumas@gmail.com",
          "phone": "0505617442",
          "organization": "Globis Medical",
          "designation": "CEO",
          "salary": 100000
      },
      {
          "id": 15,
          "first_name": "Silpa",
          "last_name": "jihas",
          "email": "roycereenu1@gmail.com",
          "phone": "0505913253",
          "organization": "Progress",
          "designation": "Software Developer",
          "salary": 299999
      },
      {
          "id": 18,
          "first_name": "Test",
          "last_name": "User",
          "email": "ts@eim.ae",
          "phone": "9786537786",
          "organization": "xyz",
          "designation": "accountant",
          "salary": 80000
      }
  ];

    service.getAll()
      .subscribe(user => {
        expect(user[0].first_name).toEqual('Jisna');
        expect(user[0].last_name).toEqual('Jose');
        expect(user[0].salary).toEqual(234324);

        expect(user[1].first_name).toEqual('Reenu Biju');
        expect(user[1].last_name).toEqual('Thomas');
        expect(user[1].organization).toEqual('Gadgeon');
      });

    const req = httpMock.expectOne(
      'http://localhost:5000/api/v1/employees/'
    );

    req.flush(data);

    httpMock.verify();
  });
});

  //For POST request
  describe('#Testing POST Method #create() for creating user', () => {
    it('returned Observable should match the right data', () => {
      const data =    {
        "id": 18,
        "first_name": "Surendran",
        "last_name": "Rajeev",
        "email": "leemolee@hotmail.com",
        "phone": "9876534562",
        "organization": "Ministry of Health",
        "designation": "Technician",
        "salary": 18000
      };

      service.create({ id: 18 })
        .subscribe(user => {
          expect(user.first_name).toEqual('Surendran');
        });

      const req = httpMock.expectOne('http://localhost:5000/api/v1/employees/');

      expect(req.request.method).toEqual('POST');

      req.flush(data);
    });
  });

//For Get request using corresponding ID
 describe('#Testing GET method getUserById(id) for geting user with a particular id', () => {
  it('Should get the correct first name of user', () => {
    service.getUserById(11).subscribe((data: any) => {
      expect(data.first_name).toBe('Reenu Biju');
    });

    const req = httpMock.expectOne(`http://localhost:5000/api/v1/employees/11`);
    expect(req.request.method).toBe('GET');

    req.flush({
      first_name: 'Reenu Biju'
    });

    httpMock.verify();
  });
 });
});
