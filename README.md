# Mobile e Web App per la gestione di una scuola di volo

## Framework e CSS

L'App è basata sulla versione del framework Meteor 1.8.0.2 - https://www.meteor.com/ <br />
Segue le regole CSS del framework mobile Ionic - https://ionicframework.com/ <br />
Le icone sono state prese dal sito ionicons.com versione 4.5.5 - https://ionicons.com/ <br />
 
## Come avviare l'App

Clona o scarica il repository e digita da terminale

```
cd mobile
```
Poi per avviare il server web

```
meteor
```
Oppure per avviare l'app per dispositivi mobili
```
meteor run ios-device
oppure
meteor run android
```
La Web app si trova all'indirizzo http://localhost:3000 

## Pacchetti utilizzati
Routing:
```
kadira:flow-router
```
Templating engine:
```
kadira:blaze-layout
```
Database:
```
mongo
```
Gestione accounts:
```
accounts-base
accounts-password
useraccounts:unstyled 
useraccounts:flow-routing
```
Permessi:
```
alanning:roles
```
Campi speciali con ricerca in DB:
```
mizzao:autocomplete
```
