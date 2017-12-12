import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController,IonicPage } from 'ionic-angular';

import {AuthProvider} from '../../providers/auth/auth';
import { User } from '../../models/user';
import {SignupPage} from '../signup/signup';
import {HomePage} from "../home/home";
import {ResetPasswordPage} from '../reset-password/reset-password';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
loginForm: FormGroup;
email: AbstractControl;
password: AbstractControl;
error: any;


user = {} as User ;

constructor(public navCtrl: NavController, private fb: FormBuilder,private aFaut: AuthProvider) {
this.loginForm = this.fb.group({
    'email': ['', Validators.compose(
       [
        Validators.required,
     Validators.pattern(/[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
    'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
});
    
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
}

login(): void {
    if(this.loginForm.valid) {
        console.log(this.email.value, this.password.value);
        //alert('Implement authentication');
        var credentials = ({email: this.email.value, password: this.password.value}); //Added next lines
        this.aFaut.loginWithEmail(credentials).subscribe(data => {
        console.log(data);
        this.navCtrl.setRoot(HomePage);
        }, error=>{             //Added next lines for handling unknown users
            console.log(error);
            if (error.code == 'auth/user-not-found')
            {
            alert('User not found');
            }
            });
     }
    }

    loginWithFacebook(): void{
        this.aFaut.loginWithFacebook().subscribe((success) => {
        console.log(success);
        }, err => {
        console.log(err);
        });
        }

    signup(){
        this.navCtrl.setRoot(SignupPage);
    }

    resetPass() {
        this.navCtrl.setRoot(ResetPasswordPage);
    }
 /*
async login(user : User) {
    //let auth = new AuthProvider(AngularFireAuth);
    if(this.loginForm.valid) {    
    console.log(this.email.value, this.password.value);
    
    try {
        const result = await this.aFaut.auth.signInWithEmailAndPassword("user.email","user.password");
        console.log(result);
        if(result){
            this.navCtrl.setRoot("HomePage");
        }
    } catch (e) {
        console.error("Probleme",e);
    }
*/
   // alert('Implementation de \' authentication');

   // var credentials = ({email: this.email.value, password: this.password.value}); 
    //Added next lines 
    /*
    this.aFaut.loginWithEmail(credentials).subscribe(data => {
        console.log(data);
    });*/
            // var credentials = {email: this.email.value, password: this.password.value}; //Added next lines
            // this.auth.loginWithEmail(credentials).subscribe(data => {
            // console.log(data);
        // },error=>{             //Added next lines for handling unknown users
        //     console.log(error);
        //     if (error.code == 'auth/user-not-found')
        //     {
        //     alert('User not found');
        //     }
        //     });
         //   }
      //  }


}
