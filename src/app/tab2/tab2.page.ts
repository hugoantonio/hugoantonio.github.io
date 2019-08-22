import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { DrawerState } from 'ion-bottom-drawer';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  shouldBounce = true;
  dockedHeight = 310;
  distanceTop = 65;
  drawerState = DrawerState.Top;
  states = DrawerState;
  minimumHeight = 80;

  intervals = [
    {
      name: 'Heute',
      date: '10. Juni'

    }, {
      name: 'Gestern',
      date: '9. Juni'
    }
  ];

  futureMovements = [
    {
      party: 'Simon Youssef',
      inc: false,
      date: '10. Juni',
      value: '10.20'
    },
    {
      party: 'Sunrise',
      inc: false,
      date: '10. Juni',
      value: '25.00'
    }
  ];

  movements = [
    {
      party: 'Starbucks Coffee Zurich',
      inc: false,
      date: '10. Juni',
      value: '10.20'
    },
    {
      party: 'Sunrise',
      inc: false,
      date: '10. Juni',
      value: '25.00'
    },
    {
      party: 'Laura Meier',
      inc: true,
      date: '10. Juni',
      value: '120.00'
    },
    {
      party: 'Hypothekarbank Lenzburg',
      inc: false,
      date: '9. Juni',
      value: '25.23'
    },
    {
      party: 'Shell',
      inc: false,
      date: '9. Juni',
      value: '35.00'
    },
    {
      party: 'Stadttheater',
      inc: false,
      date: '9. Juni',
      value: '34.00'
    },
    {
      party: 'myclubs',
      inc: false,
      date: '9. Juni',
      value: '25.12'
    }
  ];

  constructor(public plt: Platform) {}

}
