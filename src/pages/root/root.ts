import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-root',
  templateUrl: 'root.html'
})
export class RootPage {

  constructor(public navCtrl: NavController) {
  	
  }

  login() {
	this.navCtrl.push(LoginPage)
  }

}
