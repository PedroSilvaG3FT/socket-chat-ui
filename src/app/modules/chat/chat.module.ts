import pages from './pages';
import components from './components';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../@core/core.module';
import { SharedModule } from '../@shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [],
  providers: [],
  declarations: [...pages, ...components],
  imports: [
    CoreModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ChatRoutingModule,
  ],
})
export class ChatModule {}
