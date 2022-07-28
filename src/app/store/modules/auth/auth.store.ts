import { Injectable } from '@angular/core';
import { PersistService } from '@/store/services/persist.service';
import { IAuthInitialState } from '@/store/@interfaces/auth.interface';
import { IAuthentication } from '@/modules/authentication/interfaces/authentication.interface';

@Injectable()
export class AuthStore {
  constructor() {}
  private persistService = new PersistService('auth');

  private getState(): IAuthInitialState {
    return this.persistService.getInitialState<IAuthInitialState>({
      user: {} as IAuthentication,
    });
  }

  public get state() {
    return this.getState();
  }

  public setUser(user: IAuthentication) {
    const state = this.getState();

    state.user = user;
    this.persistService.update(state);
  }
}
