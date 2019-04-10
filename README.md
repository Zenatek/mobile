# Mobile e Web App per la gestione di una scuola di volo

## Features

* Registrazione separata Operatore / Pilota
* Login Operatore / Pilota
* Operatore
	* Pagina dati personali per gestione brevetti e anagrafica.
	* Dashboard Operatore con gestione completa su propri piloti, droni, missioni.
	* Registrazione Drone con possibilità di importare QTB cartaceo.
	* Creazione di missioni con assegnamento equipaggio e droni.
	* Archivio missione completate da tutti i piloti.
	* Archivio Logbook e QTB.
	* Logbook e QTB stampabili da pc.
	* Possibilità di aggiornare i dati dei piloti.
	* Possibilità di eliminare i proprio piloti.
	* Possibilità di eliminare i propri droni.
	* Permessi di visualizzazione e modifica su i logbook e QTB compilati dai Piloti.
* Pilota
	* Dashboard Pilota con visualizzazione missioni da effettuare.
	* Compilazione automatica del logbook e del qtb relativi alla missione assegnata.
	* Completare la missione per archiviarla.
	* Archivio con storico missioni completate e archiviate.
	* Archivio Logbook e QTB
	* Pagina dati personali per gestione brevetti e anagrafica

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
