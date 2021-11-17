import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createDoc(){
    this.firestore.collection('Docentes')

  }
  getColection(){

    console.log('Estoy leyendo');
    this.firestore.collection('Docentes').get().subscribe( (res) =>{

    });
  }

}
