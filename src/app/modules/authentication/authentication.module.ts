import pages from './pages';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../@core/core.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  providers: [],
  declarations: [...pages],
  imports: [CoreModule, FormsModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
