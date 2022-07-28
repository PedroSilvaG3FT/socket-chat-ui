import { NgModule } from '@angular/core';
import components from './components';

@NgModule({
  imports: [],
  providers: [],
  exports: [...components],
  declarations: [...components],
})
export class SharedModule {}
