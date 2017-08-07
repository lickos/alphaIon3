import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsefulPage } from './useful';

@NgModule({
  declarations: [
    UsefulPage,
  ],
  imports: [
    IonicPageModule.forChild(UsefulPage),
    ComponentsModule
  ],
})
export class UsefulPageModule {}
