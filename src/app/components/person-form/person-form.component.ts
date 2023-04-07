import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from "@angular/forms";

@Component({
  selector: "app-person-form",
  templateUrl: "./person-form.component.html",
  styleUrls: ["./person-form.component.scss"],
})
export class PersonFormComponent implements OnInit {
  personForm!: FormGroup;
  today: Date = new Date();
  birthdate!: Date;
  taxcodeValidation = "^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.minLength(2)]],
      lastname: ["", [Validators.required, Validators.minLength(2)]],
      birthdate: ["", [Validators.required, this.birthDateValidator()]],
      deceasedate: ["", this.deceaseDateValidator()],
      taxcode: ["", [Validators.required, Validators.pattern(this.taxcodeValidation)]],
      gender: ["", Validators.required],
    });
  }

  private birthDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const today = new Date().getTime();
      if (!(control && control.value)) {
        // if there's no control or no value, that's ok
        return null;
      }
      // return null if there's no errors
      this.birthdate = control.value;
      return control.value.getTime() > today
        ? { invalidDate: "You cannot use future dates" }
        : null;
    };
  }

  private deceaseDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!(control && control.value)) {
        // if there's no control or no value, that's ok
        return null;
      }
      // return null if there's no errors
      if (this.birthdate != null) {
        return control.value.getTime() < this.birthdate.getTime() ? { invalidDate: true } : null;
      }

      return null;
    };
  }

  onSubmit() {
    if (
      this.personForm.controls["birthdate"].value > this.personForm.controls["deceasedate"].value
    ) {
      return;
    }

    console.log(JSON.stringify(this.personForm.value, null, 4));

    if (this.personForm.status === "VALID") {
      // Post the form
    }
  }
}
