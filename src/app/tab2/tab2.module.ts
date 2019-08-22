import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonBottomDrawerModule } from 'ion-bottom-drawer';

import { SharedModule } from '../../shared/shared.module';


import { Tab2Page } from './tab2.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonBottomDrawerModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
