import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-vesp","appId":"1:447298501613:web:3579aafb1c746f9b7f05e4","storageBucket":"app-pokemon-vesp.appspot.com","apiKey":"AIzaSyC8cItyapsRdrmYkiRBOUQoxOtrU-5eD0E","authDomain":"app-pokemon-vesp.firebaseapp.com","messagingSenderId":"447298501613","measurementId":"G-X7QLXV0C14"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
