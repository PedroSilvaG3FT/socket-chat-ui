import { Component, OnInit } from '@angular/core';
import { AuthStore } from '@/store/modules/auth/auth.store';
import { IAuthentication } from '@/modules/authentication/interfaces/authentication.interface';
@Component({
  selector: 'authentication-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authenticationForm: IAuthentication = {} as IAuthentication;

  constructor(private authStore: AuthStore) {}

  ngOnInit() {}

  setToken() {}

  handleSubmit() {
    console.log('FORM :', this.authenticationForm);
    this.authStore.setUser(this.authenticationForm);
  }
}
