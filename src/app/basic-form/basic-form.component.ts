import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  }

  slideToggle(val){
    val.checked = false
    let infomsg = document.getElementsByClassName("infomsg")[0] as HTMLElement;
    infomsg.style.display = "block";
    setTimeout(() => {
      infomsg.style.display = "none";
    },1500)
  }

}
