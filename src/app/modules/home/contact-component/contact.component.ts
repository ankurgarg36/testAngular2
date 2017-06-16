import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from './contact.interface';
import {Regex} from '../../../app-config.constants';
import {HomeService} from '../../../services/home.service';

@Component({
  moduleId: module.id,
  selector: 'contact-component',
  templateUrl: 'contact.component.html',
  styleUrls: ['form.css'],
  providers : [HomeService]
})

export class ContactComponent implements OnInit {
   public contact: FormGroup;
  public formResponse: any;
    constructor(private fb: FormBuilder, private homeService: HomeService) {}

  ngOnInit() {
    this.contact = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.pattern(Regex.email)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit({ value, valid }: { value: Contact, valid: boolean }) {
    console.log(valid);
    this.homeService
      .saveContactForm(value)
      .then((fResponse) => this.formResponse = fResponse);
  }
}
