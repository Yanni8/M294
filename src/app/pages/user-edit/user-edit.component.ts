import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { loadUserById } from 'src/app/stage/user/user.action';
import { selectUserById } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit{

  public user: User | null = null;

  public userForm = new FormGroup({
    username: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  constructor(private store: Store, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    const userId = this.route.snapshot.paramMap.get("id");


    if(userId !== null){
      
      this.store.select(selectUserById({id: +userId})).subscribe(user =>  this.user = user || null);

      if(!this.user){
        this.store.dispatch(loadUserById({id: +userId}));
      }
    }
  }

  goBack(){ 
    this.router.navigate(['user'])
  }

}
