import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import {SignupPage} from '../pages/signup/signup';
import {LoginPage } from '../pages/login/login';
import {ResetPasswordPage} from '../pages/reset-password/reset-password';

import { Facebook } from '@ionic-native/facebook';

// facebook app
// ID 158231704791243
// name Auth­e­n­I­o­nic3



export const firebaseConfig = {
    apiKey: "AIzaSyAdqK7IqCtn6P3rxkGditOmapSd6l1vDJg",
    authDomain: "authenonic3.firebaseapp.com",
    databaseURL: "https://authenonic3.firebaseio.com",
    projectId: "authenonic3",
    storageBucket: "authenonic3.appspot.com",
    messagingSenderId: "366302552456"
}; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Facebook
   
  ]
})
export class AppModule {}
