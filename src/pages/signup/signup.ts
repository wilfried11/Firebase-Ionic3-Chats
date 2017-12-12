import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController,IonicPage} from 'ionic-angular';


import {LoginPage} from '../login/login';
import {AuthProvider} from '../../providers/auth/auth';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
  })
  export class SignupPage {
    signupForm: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    error: any;
    
  user = {} as User ;

  constructor(public navCtrl: NavController, private fb: FormBuilder, private aFaut: AuthProvider)
  {
    this.signupForm = this.fb.group({
        'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
        });
         
        this.email = this.signupForm.controls['email'];
        this.password = this.signupForm.controls['password'];
  }
   

  signup(): void {
    if(this.signupForm.valid) {
        var credentials = ({email: this.email.value, password: this.password.value});
        this.aFaut.registerUser(credentials).subscribe(registerData => {
        console.log(registerData);
        alert('User is registered and send to the Login Page');
        this.navCtrl.setRoot(LoginPage);
    }, registerError => {
        console.log(registerError);
    if (registerError.code === 'auth/weak-password' || registerError.code === 'auth/email-already-in-use')
        {
        alert(registerError.message);
        }
    this.error = registerError;
            });
        }
    }

    
/*
 signup(user : User) {

    alert("good");
     Observable.create(observer => {
        this.aFaut.auth.createUserWithEmailAndPassword("user.email","user.password"
        ).then((authData) => {
            alert("good");
            console.log(authData);
            observer.next(authData);
            }).catch((error) => {
                alert("bad");
            observer.error(error);
            console.error(error);
            });
        });
    
    //  this.aFaut.auth.createUserWithEmailAndPassword("user.email","user.password")
    //     .then((result) => {
    //         alert("signup");
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.error("Probleme",error);

    //         let errorCode = error.code // THIS CAN'T BE READ
    //     });
        
        
        }
*/
  }
