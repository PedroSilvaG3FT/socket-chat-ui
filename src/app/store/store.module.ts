import modules from './modules';
import { NgModule } from '@angular/core';
import { LocalStorageService } from './storage/local-storage';

@NgModule({
  providers: [...modules, LocalStorageService],
})
export class AppStoreModule {}
