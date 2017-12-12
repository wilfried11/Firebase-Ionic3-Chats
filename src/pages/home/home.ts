import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import {AuthProvider} from '../../providers/auth/auth';


@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
 
    constructor(public navCtrl: NavController,private aFaut: AuthProvider) {
    
    }

    logout2(): void {
        alert("sortir");
        this.aFaut.logout();
        this.navCtrl.setRoot(LoginPage);
        }

        /*
        this.aFaut.authState.subscribe(data => {
            if(data && data.email && data.uid){
                this.toast.create({
                    message:'Welcome to tchat app , §{data.email} ',
                    duration : 3000 
                }).present();
            }else{
                this.toast.create({
                    message:'Sorry we can not found your email ',
                    duration : 3000 
                }).present();
            }
            
        });
        */
}
