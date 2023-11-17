import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group ({
      name: ['', Validators.required],
        email: [
          '',
          [Validators.required,
          Validators.pattern(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
          ],
        ],
    });
  }
  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
    }
  }
}
