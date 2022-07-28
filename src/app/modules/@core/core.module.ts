import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppStoreModule } from '@/store/store.module';

@NgModule({
  imports: [CommonModule, FormsModule, AppStoreModule],
})
export class CoreModule {}
