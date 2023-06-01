import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/model/group.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createGroup, loadGroupById, updateGroup } from 'src/app/stage/group/group.action';
import { selectGroupById } from 'src/app/stage/group/group.selector';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.less']
})
export class GroupEditComponent implements OnInit {
  
  public group: Group | null = null;

  public groupForm = new FormGroup({
    groupName: new FormControl("", [Validators.required, Validators.maxLength(250)]),
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store, private route: ActivatedRoute){}

  ngOnInit(): void {

    const userId = this.route.snapshot.paramMap.get("id");

    if(userId !== null){
      
      this.store.select(selectGroupById({id: +userId})).subscribe(group =>  {this.group = group || null; this.updateFormbuilder(this.group)});

      if(!this.group){
        this.store.dispatch(loadGroupById({id: +userId}));
      }
    }
  }

  updateFormbuilder(group: Group | null){
    if(!group){
      return;
    }
    this.groupForm = this.formBuilder.group({groupName: group.groupName});
  }

  goBack(){ 
    this.router.navigate(['group'])
  }

  createGroup() {
    if(this.group?.id){
      this.store.dispatch(updateGroup({group: {...this.groupForm.getRawValue(), id: this.group.id} as Group}));
    } else{
      this.store.dispatch(createGroup({group: {...this.groupForm.getRawValue(), users: []} as Group}));
    }
    this.router.navigate(["group"]);
  }
}
