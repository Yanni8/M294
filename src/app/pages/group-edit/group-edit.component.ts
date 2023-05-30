import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/model/group.model';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createGroup } from 'src/app/stage/group/group.action';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.less']
})
export class GroupEditComponent {
  
  public group: Group | null = null;

  public groupForm = new FormGroup({
    groupName: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    users: new FormArray([])
    });

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store){}

  goBack(){ 
    this.router.navigate(['group'])
  }

  createGroup() {
    this.store.dispatch(createGroup({group: this.groupForm.getRawValue() as Group}));
    this.router.navigate(["group"]);
  }
}
