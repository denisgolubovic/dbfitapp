import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OverviewPage } from '../overview/overview';
	
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(OverviewPage)
  }
}