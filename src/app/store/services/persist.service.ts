import { LocalStorageService } from '../storage/local-storage';

export class PersistService extends LocalStorageService {
  constructor(private key: string) {
    super();
  }

  getInitialState<Data>(model: Data): Data {
    const state = this.getState();
    const hasState = !!Object.keys(state).length;

    if (hasState) return state;
    else return model;
  }
  getState() {
    const storage = this.get(this.key);
    if (storage) return JSON.parse(storage);
    else return {};
  }
  update(value: any) {
    this.set(this.key, JSON.stringify(value));
    return value;
  }
}
