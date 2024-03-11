import {Component, OnInit} from '@angular/core';
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.mode";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

    contacts:Contact[]=[]
    editIndex:number|null=null;
    isEditingMode=false;
    editingTask:Contact;

    constructor(private contactService:ContactsService) {

    }

  ngOnInit(): void {
      this.contacts=this.contactService.getContacts();
  }


  onDelete(i: number) {
      if(window.confirm("Are You Sure?"))
    this.contactService.deleteContact(i);
      else return;
  }

  doToggle() {
    this.isEditingMode=!this.isEditingMode;
  }

  doEdit(index:number){
      this.editIndex=index;
      this.doToggle();
      console.log(this.editIndex);
      this.isEditingMode=true;
      this.editingTask=this.contacts[index];
  }

  doUpdate(index: number) {
    const emailRegex:RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if(!emailRegex.test(this.contacts[index].email) && this.contacts[index].phone===""){
      this.contactService.editTask(index,this.editingTask);
    }
    this.editIndex=null;
    this.doToggle();
  }

}
