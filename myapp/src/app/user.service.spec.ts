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
  describe('#getAll()', () => {
   it('getAll() should GET all data', () => {

    const data = [
      {
          "id": 7,
          "first_name": "reenu",
          "last_name": "thomas",
          "email": "roycereenu@yahoo.com",
          "phone": "98897634",
          "organization": "abs",
          "designation": "manager",
          "salary": 50000
      },
      {
          "id": 8,
          "first_name": "royce",
          "last_name": "thomas",
          "email": "royce@yahoo.co",
          "phone": "342342355",
          "organization": "gadgeon",
          "designation": "CEO",
          "salary": 75000
      },
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
          "id": 10,
          "first_name": "sreerag",
          "last_name": "ts",
          "email": "sreerag.ts@gmail.com",
          "phone": "983091280912",
          "organization": "Bosch",
          "designation": "R AND D engineer",
          "salary": 50000
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
          "id": 12,
          "first_name": "test",
          "last_name": "user",
          "email": "testuser@eim.ae",
          "phone": "9399122121",
          "organization": "mnkjk",
          "designation": "jknkj",
          "salary": 222222
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
          "id": 14,
          "first_name": "Biju",
          "last_name": "Thomas",
          "email": "roycereenu1@gmail.com",
          "phone": "0505913253",
          "organization": "Globis Medical",
          "designation": "CEO",
          "salary": 1000000
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
          "id": 16,
          "first_name": "Sunila",
          "last_name": "Thomas",
          "email": "sunilamoh@gmail.com",
          "phone": "0509203354",
          "organization": "Ministry of Health",
          "designation": "Technician",
          "salary": 180000
      }
  ];

    service.getAll().subscribe((res) => {
      expect(res).toEqual(data);
    });

    const req = httpMock.expectOne('http://localhost:5000/api/v1/employees/');
    expect(req.request.method).toEqual("GET");
    req.flush(data);

    httpMock.verify();
  });

});

  //For POST request
  describe('#create()', () => {
    it('returned Observable should match the right data', () => {
      const data =    {
        "first_name": "Surendran",
        "last_name": "Rajeev",
        "email": "leemolee@hotmail.com",
        "phone": "9876534562",
        "organization": "Ministry of Health",
        "designation": "Technician",
        "salary": 18000
      };

      service.create({ id: 17 })
        .subscribe(user => {
          expect(user.first_name).toEqual('Surendran');
        });

      const req = httpMock.expectOne('http://localhost:5000/api/v1/employees/');

      expect(req.request.method).toEqual('POST');

      req.flush(data);
    });
  });

//For Get request using corresponding ID
 describe('#getUserById(id)', () => {
  it('Sould get the correct name of user', () => {
    service.getUserById(11).subscribe((data: any) => {
      expect(data.name).toBe('Reenu Biju');
    });

    const req = httpMock.expectOne(`http://localhost:5000/api/v1/employees/11`);
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Reenu Biju'
    });

    httpMock.verify();
  });
 });
});
