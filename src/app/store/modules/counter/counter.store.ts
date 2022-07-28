import { Injectable } from '@angular/core';
import { PersistService } from '@/store/services/persist.service';
import { ICountInitialState } from '@/store/@interfaces/count.interface';

@Injectable()
export class CounterStore {
  constructor() {}
  private persistService = new PersistService('counter');

  private getState(): ICountInitialState {
    return this.persistService.getInitialState<ICountInitialState>({
      count: 0,
    });
  }

  public get state() {
    return this.getState();
  }

  public increment(state = this.state) {
    state.count = state.count + 1;
    this.persistService.update(state);
  }
  public decrement(state = this.state) {
    state.count = state.count - 1;
    this.persistService.update(state);
  }
  public reset(state = this.state) {
    state.count = 0;
    this.persistService.update(state);
  }
}
