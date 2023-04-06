import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-person-form",
  templateUrl: "./person-form.component.html",
  styleUrls: ["./person-form.component.scss"],
})
export class PersonFormComponent implements OnInit {
  personForm!: FormGroup;
  today: Date = new Date();
  taxcodeValidation = "^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.minLength(2)]],
      lastname: ["", [Validators.required, Validators.minLength(2)]],
      birthdate: ["", [Validators.required]],
      deceasedate: [""],
      taxcode: ["", [Validators.required, Validators.pattern(this.taxcodeValidation)]],
      gender: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.personForm.value, null, 4));

    if (this.personForm.status === "VALID") {
      // Post the form
    }
  }
}
