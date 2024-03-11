import {Injectable} from "@angular/core";
import {Contact} from "./contact.mode";

@Injectable({
  providedIn:'root'
})

export class ContactsService{
  private contacts: Contact[] = [
    {
      name: 'Kris Narola',
      phone: '12345678',
      email: 'Kris@example.com',
      gender: 'Male',
      birthDate: new Date('2003-05-06')
    },
    {
      name: 'Prince Narola',
      phone: '12345678',
      email: 'Prince@example.com',
      gender: 'Male',
      birthDate: new Date('2003-11-02')
    },
    {
      name: 'Kaxali Narola',
      phone: '12345678',
      email: 'Kaxali@example.com',
      gender: 'Female',
      birthDate: new Date('2006-06-26')
    },
  ];

  getContacts(){
    return this.contacts;
  }

  deleteContact(index: number) {
    this.contacts.splice(index,1);
  }

  editTask(index,editingTask: Contact) {
    this.contacts[index]=editingTask;
  }
}
