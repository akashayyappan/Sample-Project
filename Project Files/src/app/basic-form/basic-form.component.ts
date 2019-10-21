import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes'
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  myForm:FormGroup;

  public formHeight:any;
  dropdownList: { item_id: number; item_text: string; }[];
  dropdownSettings:IDropdownSettings;
  selectedItems:any;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedApps:any = [];

  applications:any;

  
  constructor(
    private fb: FormBuilder
    ) { }
    
    ngOnInit() {
      
      this.myForm = this.fb.group({
        "sample1": ["",[Validators.required]],
        "sample2": ["",[Validators.required]],
      "sample3": ["",[Validators.required]],
      "sample4": [false,[Validators.required]],
      "sample5": [,[Validators.required]],
      "slide1": true,
      "slide2": false,
    })
    
    this.dropdownList = [
      { item_id: 1, item_text: 'Chennai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 6, item_text: 'Mumbai' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      searchPlaceholderText: "Ex: Chennai",
      itemsShowLimit: 4,
      allowSearchFilter: true
    };

    let element = document.getElementsByClassName("form-content")[0];
    let height = element.scrollHeight;
    if(height < 200) { height = 240 }
    this.formHeight = {'width':'100%','height':height +'px'};
    let mq = window.matchMedia("(max-width: 800px")
    if(mq.matches){
      this.formHeight = {'width':'100%','height':height - 40 +'px'};
    }

    this.applications = [
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
      {
        id: 1000,
        app: "sample",
        bo: "sample",
        acc: "SA"
      },
    ]
  }

  slideToggle(val){
    val.checked = false
    let infomsg = document.getElementsByClassName("infomsg")[0] as HTMLElement;
    infomsg.style.display = "block";
    setTimeout(() => {
      infomsg.style.display = "none";
    },1500)
  }

  openPopUp(){
    let element = document.getElementsByClassName("popup-container")[0] as HTMLElement;
    element.style.display = "block";
  }
  
  closePopUp(){
    let element = document.getElementsByClassName("popup-container")[0] as HTMLElement;
    element.style.display = "none";
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
  
    // Add our fruit
    if ((value || '').trim()) {
      this.selectedApps.push({name: value.trim()});
    }
  
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  
  remove(item: any): void {
    const index = this.selectedApps.indexOf(item);
  
    if (index >= 0) {
      this.selectedApps.splice(index, 1);
    }
  }

  addApp(app){
    this.selectedApps.push(app);
  }

  removeApp(app){
    this.selectedApps = this.selectedApps.filter(_ => {
      if(_ == app){
        return false;
      }else{
        return true;
      }
    })
  }
}
