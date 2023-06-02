import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { User } from '../model/user.model';

import { UserService } from './user.service';


fdescribe('UserService', () => {
  let service: UserService;
  let httpSpy: Spy<HttpClient>;

  const fakeUser: Array<User> = [
    {
      firstName: "Max",
      lastName: "Mustermann",
      username: "user",
      id: 1
    },
    {
      firstName: "Maximilian",
      lastName: "Mustermann",
      username: "user02",
      id: 2
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });
    service = TestBed.inject(UserService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of user', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeUser);

    service.getUsers().subscribe({
      next:
        users => {
          expect(users).toHaveSize(fakeUser.length);
          done();
        },
      error: done.fail
    }
    );
    expect(httpSpy.get.calls.count()).toBe(1);

  });
  
  it('should create a new user', (done: DoneFn) => {

    const user: User = {
      firstName: "New",
      lastName: "User",
      username: "newuser",
    };

    httpSpy.post.and.nextWith({...user, id: 3});

    service.saveUser(user).subscribe({
      next: user => {
        expect(user).toEqual({...user, id: 3});
        expect(user.id).toEqual(3);
        done();
      },
      error: done.fail
    }
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should update an user', (done: DoneFn) => {

    const user = fakeUser[0];
    user.firstName = 'New First Name';

    httpSpy.put.and.nextWith(user);

    service.updateUser(user).subscribe({
      next: user => {
        expect(user.firstName).toEqual('New First Name');
        done();
      },
      error: done.fail
    });
    expect(httpSpy.put.calls.count()).toBe(1);
  });

  it('should delete an existing user', (done: DoneFn) => {
    
    //Mein Service is so configuriert,
    //dass er nur failed wenn ein Statuscode
    // zurückgegeben wird der nicht im 2xx bereich liegt.
    // Aus diesem Grund wird bei der Delete Methode im Service auch void
    // zurückegeben wenn alles erfolgreich ist.
    httpSpy.delete.and.nextWith(); 
    service.deleteUser(1).subscribe({
      next: () => { //Aus diesem Grund brauche ich hier auch nicht den Statuscode zu überprüfen
        done();
      },
      error: done.fail
    });
    expect(httpSpy.delete.calls.count()).toBe(1);
  });

});

