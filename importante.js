////////////////////////////////////////////////////////
// para usar local storage
ionic cordova plugin add cordova-sqlite-storage
npm i  @ionic/storage --save
// appmodule
import { IonicStorageModule } from '@ionic/storage';
IonicStorageModule.forRoot(),
//cualquier ts donde de use
import { Storage } from "@ionic/storage";
private mystorage: Storage,   // constructor
////////////////////////////////////////////////////////