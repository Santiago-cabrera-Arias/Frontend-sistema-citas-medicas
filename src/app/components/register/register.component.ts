import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  modalSwith:boolean | undefined;

  constructor() { }

  ngOnInit(){}

  openModal(){
    this.modalSwith = true;
  }


}
