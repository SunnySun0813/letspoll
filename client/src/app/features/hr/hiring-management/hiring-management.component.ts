import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../../services/registration.service';

@Component({
  selector: 'app-hiring-management',
  templateUrl: './hiring-management.component.html',
  styleUrls: ['./hiring-management.component.scss']
})
export class HiringManagementComponent implements OnInit {

  newEmployeeForm: FormGroup = this.fb.nonNullable.group ({
    email: ['', [Validators.email, Validators.required]],
    name: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.newEmployeeForm.get('email')?.errors) {
      return alert("must have valid email for new employee");
    }
    if (this.newEmployeeForm.get('name')?.errors) {
      return alert("must include employee full name");
    }
    const email: string = this.newEmployeeForm.value.email;
    const name: string = this.newEmployeeForm.value.name;
    this.registrationService.generateRegTokenAndEmail(email, name).subscribe(res => {
      console.log(res);
    })
  }

}
