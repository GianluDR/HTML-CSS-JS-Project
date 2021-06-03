# Relazione Tecnica
## INDICE
- ### [prova](#prova) Introduzione
- ### [2.](#2-modello-di-dominio) Modello Di Dominio
- ### [3.](#3-requisiti-specifici) Requisiti specifici
  - 3.1 Requisiti funzionali
  - 3.2 Requisiti non funzionali
- ### [4.](#4-system-design) System Design
  - Diagramma Package
  - Commentare decisioni prese
- ### [5.](#5-oo-design) OO Design
  - Diagrammi delle classi 
  - Diagrammi di sequenza
  - Commento sulle decisioni prese
- ### [6.](#6-riepilogo-del-test) Riepilogo del Test
- ### [7.](#7-manuale-utente) Manuale Utente
- ### [8.](#8-processo-di-sviluppo-e-organizzazione-del-lavoro) Processo di Sviluppo e Organizzazione del Lavoro
- ### [9.](#9-analisi-retrospettiva) Analisi Retrospettiva
  
<br/><br/>

# prova
Nella seguente documentazione verrà descritta la ***relazione tecnica*** del progetto di **Ingegneria del Software Anno Accademico 2020-2021**.<br/><br/>
Ci presentiamo, siamo il **gruppo Rumbaugh**, composto da: <br/>

***<h2 style="color: #2e6c80;">Team:</h2>***
<ol style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
<li style="clear: both;"><img style="float: left;" src="./relazione-finale/mariofranco.PNG" width="70" />&nbsp;&nbsp;&nbsp;Mario Franco (m.franco34@studenti.uniba.it)<br/>&nbsp;&nbsp;&nbsp;20 anni, Canosa Di Puglia (BT)</li><br/>
<li style="clear: both;"><img style="float: left;" src="./relazione-finale/olegivashkiv.PNG" width="70" />&nbsp;&nbsp;&nbsp;Oleg Ivashkiv (o.ivashkiv@studenti.uniba.it)<br/>&nbsp;&nbsp;&nbsp;21 anni, Bisceglie (BT)</li><br/><li style="clear: both;"><img style="float: left;" src="./relazione-finale/manuelfasanella.jpg" width="70" />&nbsp;&nbsp;&nbsp;Manuel Fasanella (m.fasanella5@studenti.uniba.it)<br/>&nbsp;&nbsp;&nbsp;20 anni, Canosa Di Puglia (BT)</li><br/>
<li style="clear: both;"><img style="float: left;" src="./relazione-finale/gianlucacolella.PNG" width="70" />&nbsp;&nbsp;&nbsp;Gianluca Colella (g.colella27@studenti.uniba.it)<br/>&nbsp;&nbsp;&nbsp;20 anni, San Cassiano (LE)</li><br/>
<li style="clear: both;"><img style="float: left;" src="./relazione-finale/antoniociriolo.PNG" width="70" />&nbsp;&nbsp;&nbsp;Antonio Ciriolo (a.ciriolo3@studenti.uniba.it)<br/>&nbsp;&nbsp;&nbsp;21 anni, Castro (LE)</li></ol>

<br/>

Il *progetto* svolto consiste nella realizzazione del gioco della **Dama**, sotto forma di applicazione eseguibile da riga di comando(*CLI*). 

<br/>

# 2 Modello Di Dominio

*I diagrammi che verranno mostrati, all'interno della relazione, sono stati realizzati con **StarUML**.* (https://staruml.io/)

<br/>

 - ### Diagramma delle Classi con prospettiva Software

  ![diagramma](./relazione-finale/classDiagram.PNG)

  <br/>

  Per visualizzarlo direttamente con il diagrammatore, cliccare il link qui di seguito:

  Download locale ClassDiagram:
  *[**classDiagram.mdj**](./drawings/ClassDiagram2.mdj)*

  <br/>

# 3. Requisiti specifici

## Requisiti Funzionali

Di seguito, i ***Requisiti Funzionali*** del progetto, facenti parte della *User Story*.

- *mostrare l'help con elenco comandi*

  Come giocatore voglio mostrare l'help con elenco comandi.

  **Criteri di accettazione**
  Eseguendo il comando ```help```
  o invocando l'app con flag ```--help``` o ```-h```


  il risultato è una descrizione concisa, che normalmente appare all'avvio del
  programma, seguita dalla lista di comandi disponibili,
  uno per riga, come da esempio successivo:

  - gioca
  - esci
  - ...

<br/>

- *iniziare una nuova partita*

  Come giocatore voglio iniziare una nuova partita.

  **Criteri di accettazione**

  Al comando ```gioca```

  - se nessuna partita è in corso l'app si predispone a ricevere la prima mossa di gioco o altri comandi

<br/>

- *abbandonare la partita*

  Come giocatore voglio abbandonare la partita

  **Criteri di accettazione:**
  Al comando ```abbandona```

  - l'app chiede conferma
    - se la conferma è positiva, l'app comunica che il Bianco (o Nero) ha vinto per abbandono
    - se la conferma è negativa, l'app si predispone a ricevere nuovi comandi

<br/>
    
- *chiudere il gioco*

  Come giocatore voglio chiudere il gioco.

  **Criteri di accettazione:**
  Al comando ```esci```

  - l'applicazione chiede conferma
    - se la conferma è positiva, l'app si chiude restituendo un zero exit code
    - se la conferma è negativa, l'app si predispone a ricevere nuovi comandi

<br/>

- *mostrare la damiera con la numerazione*

  Come giocatore voglio mostrare la damiera con la numerazione in modo da ricordare come sono numerate le caselle della damiera.

  **Criteri di accettazione**
  Al comando ```numeri```

  - l'app mostra la damiera con i numeri sulle caselle nere

  ![scacchiera_numerata](https://user-images.githubusercontent.com/1144915/113774399-853fc600-9727-11eb-8231-8915eaea8d28.jpg)

<br/>

- *mostrare la damiera con i pezzi*

  Come giocatore voglio mostrare la damiera con i pezzi in modo da visualizzare lo stato del gioco.

  **Criteri di accettazione**
  Al comando ```damiera```

  - se il gioco è iniziato l'app mostra la posizione di tutti pezzi sulla damiera
     - i pezzi sono mostrati in formato Unicode https://en.wikipedia.org/wiki/English_draughts#Unicode
  - se il gioco non è iniziato l'app suggerisce il comando ```gioca```

<br/>

- *mostrare il tempo di gioco*

  Come giocatore voglio mostrare il tempo di gioco.

  **Criteri di accettazione**
  Al comando ```tempo```

  - se il gioco è in corso
     - l'app mostra il tempo trascorso per il Bianco dall'inizio del gioco
      - l'app mostra il tempo trascorso per il Nero dall'inizio del gioco
  - se il gioco non è in corso l'app suggerisce il comando gioca e si predispone a ricevere nuovi comandi

<br/>

- *spostare una pedina(spostamento semplice)*

  Come giocatore voglio spostare una pedina mediante spostamento semplice

  **Criteri di accettazione**
  - a partita in corso di gioco, l'app deve accettare mosse di spostamento semplice di pedina in notazione algebrica.
  _Es. 1-5_
  - Lo spostamento semplice della pedina deve rispettare le regole del gioco della dama italiana, escludendo damature e prese:
  http://www.fid.it/regolamenti/capo1.htm
  In particolare (Art. 4 - Gli spostamenti semplici)
  > La pedina può essere mossa solo in avanti e in diagonale e portata dalla casella di partenza in una casella libera contigua.

<br/>

- *spostare una pedina con presa semplice*

  Come giocatore voglio spostare una pedina con presa semplice.

  **Criteri di accettazione**
  - a partita in corso di gioco, l'app deve accettare mosse di spostamento di pedina con presa semplice in notazione algebrica.
  Es. 18x11 (se è il bianco a muovere)
  - Lo spostamento della pedina con presa semplice deve rispettare le regole del gioco della dama italiana
  (http://www.fid.it/regolamenti/capo1.htm)
  In particolare (Art. 5 e 6)

<br/>

- *spostare una pedina con presa multipla*

  Come giocatore voglio spostare una pedina con presa multipla.
  **Criteri di accettazione** 
  - a partita in corso di gioco, l'app deve accettare mosse di spostamento di pedina con presa multipla in notazione algebrica.
     Es. 22x15x6 (se è il bianco a muovere)
  - Lo spostamento della pedina con presa multipla deve rispettare le regole del gioco della dama italiana
   (http://www.fid.it/regolamenti/capo1.htm) 
     In particolare (Art. 5 e 6)

<br/>
   
- *spostare una pedina con damatura*
 
  Come giocatore voglio spostare una pedina con damatura.
  **Criteri di accettazione**
  - a partita in corso di gioco, l'app deve accettare mosse di spostamento semplice di pedina in notazione algebrica che terminano con la damatura.
  _Es. `6-3`_ oppure se c'è una presa `10x3`
  - Lo spostamento con damatura deve rispettare le regole del gioco della dama italiana
  : http://www.fid.it/regolamenti/capo1.htm

<br/>

- *mostare le prese*

  Come giocatore voglio visualizzare le prese in modo da valutare se è il caso di offrire una patta o abbandonare.
  **Criteri di accettazione**
  Al comando **prese** l'app mostra le prese del Bianco e del Nero con caratteri Unicode

  - Es.
  
    Bianco: ⛂ ⛂

    Nero: ⛀ ⛀ ⛀ ⛀

<br/>

- *mostrare le mosse giocate*

  Come giocatore voglio visualizzare le mosse giocate in modo da poter ripercorrere mentalmente la storia della partita giocata. 
  **Criteri di accettazione**
  Al comando **mosse** l'app mostra la storia delle mosse con notazione algebrica

  - Esempio:

    B 21-18

    N 10-14

    B 24-20

    N 14x21

    ...

<br/>

## Requisiti non funzionali

- Da **java 1.8** in poi
- Tutti i terminali che supportano UTF-8 e gli ANSI escape codes

# 4. System Design

### *Diagramma dei Package*

![diagrammapackage](./relazione-finale/diagrammaPackage.PNG)


Download locale PackageDiagram:
  *[**PackageDiagram.mdj**](./drawings/PackageDiagram.mdj)*

## Commento decisioni prese:

La suddivisione in package è stata effettuata accomunando le classi in base alle loro responsabilità e compiti svolti, infatti:

Il primo è il package **Main** dove è contenuta la classe *AppMain* che si occupa dell'inizializzazione e avvio del software.

Dopodichè abbiamo il **Commands** dove sono contenuti:
- *Command* è l'interfaccia dei comandi, quindi ne descrive la struttura
- *CommandsManager*, esso si occupa della registrazione dei comandi e descrive l'interazione con essi

All'interno del package Commands è contenuto il package **List** dove sono situate le classi dei vari comandi in maniera tale da avere una migliore organizzazione.

**Game** è il package che contiene:
- *GameManager* che si occupa dell'avvio e della chiusura delle varie partite. Questa scelta è stata adottata in quanto inizialmente erano previste le user story che richiedevano il salvataggio e il caricamento delle partite su/da file
- *Game* che si occupa della gestione della partita in corso
- *Player* è la classe che definisce i possibili giocatori, in questo caso Bianco e Nero
- *Content* è la classe che descrive i possibili contenuti delle celle della damiera

Infine, l'ultimo package è l'**Utils** che contiene:
- *COMUtils* è la classe che si occupa dell'interfacciamento con l'attore. Essa contiene i messaggi usati più frequentemente dai comandi e dalle varie classi
- *CLIUtils* è la classe che si occupa del ricevere l'input dall'attore e degli output grafici




# 5. OO Design

***Diagrammi delle Classi*** e di Sequenza di alcune delle User Story piu' importanti:

  ### **iniziare una partita**: 

   - *Diagramma di Sequenza*: **iniziare una nuova partita**
  
  ![diagrammasequenza](./relazione-finale/sequenceDiagramPlay.PNG)

  Download locale SequenceDiagram:
  *[**sequenceDiagramPlay.mdj**](./drawings/sequenceDiagramPlay.mdj)*

   - *Diagramma delle Classi*: **iniziare una nuova partita**

  ![diagrammaclasse](./relazione-finale/classDiagramPlay.PNG)

  Download locale ClassDiagram:
  *[**classDiagramPlay.mdj**](./drawings/classDiagramPlay.mdj)*

  ### **mostrare le mosse**:

   - *Diagramma di Sequenza*: **mostrare le mosse**
  
  ![diagrammasequenza](./relazione-finale/sequenceDiagramMosse.PNG)

  Download locale SequenceDiagram:
  *[**sequenceDiagramMosse.mdj**](./drawings/sequenceDiagramMosse.mdj)*

   - *Diagramma delle Classi*: **mostrare le mosse**

  ![diagrammaclasse](./relazione-finale/classDiagramMosse.PNG)


  Download locale ClassDiagram:
  *[**classDiagramMosse.mdj**](./drawings/classDiagramMosse.mdj)*

  ### **abbandonare la partita**: 

  - *Diagramma di Sequenza*: **abbandonare la partita**

  ![diagrammasequenza](./relazione-finale/sequenceDiagramQuit.PNG)

   Download locale SequenceDiagram:
  *[**sequenceDiagramQuit.mdj**](./drawings/sequenceDiagramQuit.mdj)*

   - *Diagramma delle Classi*: **abbandonare la partita**

  ![diagrammaclasse](./relazione-finale/classDiagramQuit.PNG)

  Download locale ClassDiagram:
  *[**classDiagramQuit.mdj**](./drawings/classDiagramQuit.mdj)*

  
  ### **uscire da una partita**:

  - *Diagramma di Sequenza*: **uscire da una partita**

  ![diagrammasequenza](./relazione-finale/sequenceDiagramExit.PNG)

  Download locale SequenceDiagram:
  *[**sequenceDiagramExit.mdj**](./drawings/sequenceDiagramExit.mdj)*

  - *Diagramma delle Classi*: **uscire da una partita**

  ![diagrammaclasse](./relazione-finale/classDiagramExit.PNG)

  Download locale ClassDiagram:
  *[**classDiagramExit.mdj**](./drawings/classDiagramExit.mdj)*


**PRINCIPI OO DESIGN**

In maniera aderente a quanto specificato dai principi dell'OO Design abbiamo rispettato:

- **INFORMATION HIDING**
In diverse classi abbiamo dichiarato metodi *privati* proprio perchè erano esclusivi per quella determinata classe e non aveva senso renderli quindi pubblici. Gli attributi sono tutti privati e, solo quando serviva è stata fatta un eventuale funzione di get e set.

-	**ALTA COESIONE**
Ogni nostra classe ha una *responsabilità* ben definita, ad esempio:
    - **AppMain** gestisce l'inizializzazione del programma
    - i comandi sono ognuno in una classe separata, tutte basate sull'interfaccia **Command**
    - **CommandsManager** richiama i comandi in base all'input dell'utente
    - le classi **Player** e **Content** descrivono i contenuti possibili della damiera e il colore dei giocatori
    - la classe **GameManager** gestisce la sessione generale di gioco, che viene approfondita in **Game** dove troviamo le meccaniche di turni e vari controlli. 
    - **CLIUtils** e **COMUtils** invece gestiscono l'interazione con l'attore.
-	**BASSO ACCOPPIAMENTO**
Le classi possiedono un grado di indipendenza molto alto tra di loro, infatti l'utilizzo di componenti separate facilita la possibilità di effettuare un cambiamento senza che si propaghi ad altri componenti
- **PRESENTAZIONE SEPARATA**
Tutte le interazioni con l'attore vengono gestite dalle classi **CLIUtils** accompagnata da **COMUtils** dove registriamo con un' enumerazione tutti i messaggi per l'utente, il che evita di dover toccare altre classe inerenti a meccaniche del gioco.
-	**DO NOT REPEAT YOURSELF**
Tutti i metodi e funzioni svolgono compiti diversi tra di loro e ogni parte significativa di quest'ultime è implementata in unico posto del codice sorgente. Per evitare le ripetizioni e overhead sono state usate le interfacce *ad-hoc*.
-	**PRINCIPI SOLID**
    - *SINGLE RESPONSIBILITY*: Tutte le nostre modifiche sono state esclusivamente effettuate per risolvere gli issue, e qualora erano necessarie modifiche/migliorie, sono stati creati issue appositi
    - *OPEN/CLOSED*: Avendo scelto l'utilizzo di un'interfaccia per la definizione dei comandi, questi ultimi sono chiusi rispetto alla modifica in quanto la struttura definita dall'interfaccia non è modificabile (nel singolo comando),però sono ammesse le estensioni quindi è possibile definire nuovi metodi, attributi e così via
    - *LISKOV SUBSTITUTION*: Non abbiamo usato generalizzazioni
    - *INTERFACE SEGREGATION* e *DEPENDENCY INVERSION*: non abbiamo esplicitato il rispetto di queste due proprietà, poichè non riguardano la struttura del nostro progetto


# 6. Riepilogo del Test

Test effettuati: 63

![casiTest](./relazione-finale/testReport.PNG)

Coveralls:

![coveralls](./relazione-finale/screenCoveralls.PNG)

checkstyle:

![checkstyle](./relazione-finale/checkstyle.PNG)

spotbugs:

![spotbugs](./relazione-finale/spotbugsPackageMainReports.PNG)

![spotbugs](./relazione-finale/spotbugsPackageTestReports.PNG)

jacoco:

![jacoco](./relazione-finale/jacocoDamaReports.PNG)


# 7. Manuale Utente
## Indice 
 - Passi Preliminari
 - Comandi Docker
 - Comandi Gioco
   - *Avvio*
   - *In-Game*
   - *Interruzione*

## Passi Preliminari
Una volta scaricato Docker Desktop, assicurarsi di aver ottenuto i permessi e quindi di aver importato l'immagine Docker del gioco della Dama.

 - Esempio *Container immagine Docker*
<br/>

![docker1](./relazione-finale/screenDocker.PNG)

<br/>

## Comandi Docker

Per poter scaricare il programma ed avviarlo, effettuare il ***Docker Pull*** e il ***Docker Run***, tramite i comandi esplicitati qui di seguito: (assicurarsi di avere *Docker Desktop* in esecuzione)

- *Docker Pull*

```
docker pull docker.pkg.github.com/softeng2021-inf-uniba/progetto2021ter-rumbaugh/dama-rumbaugh:latest
```
- *Docker Run*

```
docker run --rm -it docker.pkg.github.com/softeng2021-inf-uniba/progetto2021ter-rumbaugh/dama-rumbaugh:latest
```

Quindi, copiare e incollare i comandi in uno dei *Prompt di Comandi* specificato nei ***Requisiti Specifici***.

<br/>

![docker2](./relazione-finale/screenDockerAvviato.PNG)

<br/>

## Comandi Gioco: ***Avvio***
All'avvio dell'applicazione, l'utente visualizzerà una schermata di *benvenuto*, con la scritta "Digita un comando: " che viene visualizzata ad ogni comando effettuato. 

Per avere informazioni su tutti i comandi disponibili nel gioco, utilizzare il comando " ``` help ``` " che mostrerá l'elenco dei nominativi dei comandi affiancati da una breve descrizione del funzionamento di essi.

<br/>

![docker2](./relazione-finale/screenComandoHelp.PNG)

<br/>

Per iniziare una nuova partita di *Dama*, utilizzare il comando " ``` gioca ``` ".
   
## Comandi Gioco: ***In-Game***

Una volta iniziata la partita, è possibile visualizzare la damiera col comando " ``` damiera ``` " o, alternativamente, la damiera numerata col comando " ``` numeri ``` ".

Per poter effettuare una mossa di "*spostamento*" si utilizzerà la notazione algebrica che segue:
 ``` 
 num1-num2 
 ``` 
 dove per " *num1* " si intende la posizione della pedina da spostare e per " *num2* " si intende la posizione di destinazione.

  - Esempio *Spostamento*:


 ![spostamentoPedina](./relazione-finale/screenSpostamentoPedina.PNG)

 <br/>
 
 Mentre per effettuare una mossa di "*presa*" utilizzeremo:
 ``` 
 num1xnum2 
 ```
 
 dove per " *num1* " si intende la posizione della pedina che effettuerà la presa e per " *num2* " si intende la posizione di destinazione dopo aver effettuato la presa.

   - Esempio *Presa*:


![spostamentoPedina](./relazione-finale/screenPresaPedina.PNG)

 <br/>

Per, invece, visualizzare il *tempo* trascorso in entrambi i turni, utilizzare il comando " ``` tempo ``` ", che lo mostrerá per entrambi i giocatori.

   - Esempio di utilizzo comando *tempo*:

 
![spostamentoPedina](./relazione-finale/screenTempo.PNG)

<br/>

É possibile, inoltre, visualizzare tutte le *mosse* e le *prese* effettuate durante la stessa partita, utilizzando rispettivamente il comando " ``` mosse ``` " e " ``` prese ``` ".

   - Esempio di utilizzo comandi *mosse* e *prese* :


![mosse&prese](./relazione-finale/screenMosse&Prese.PNG)

<br/>

## Comandi Gioco: ***Interruzione***

Per *interrompere* una partita in corso, nello specifico la partita che si sta attualmente svolgendo, utilizzare il comando " ``` abbandona ``` ", che chiederà prima conferma dell'abbandono e in riposta affermativa, decreterà un vincitore e terminata quest'ultima partita, ti permetterá di avviarne un'altra o digitare altri comandi.

   - Esempio di utilizzo comando *abbandona*:


![abbandona](./relazione-finale/screenAbbandona.PNG)

<br/>

Per *uscire dall'applicazione*, utilizzare il comando " ``` esci ``` ", che anch'esso chiederá conferma dell'uscita e ti riporterà nel percorso iniziale della riga di comando in utilizzo.

   - Esempio di utilizzo comando *esci*:


![esci](./relazione-finale/screenEsci.PNG)

<br/>

# 8. Processo di Sviluppo e Organizzazione del Lavoro

 - ## Processo di Sviluppo: ***Agile Software Development***

    Il processo di sviluppo seguito e messo in pratica in questo progetto é l' ***Agile Software Development***, utilizzando uno dei metodi agili per piccoli/medi progetti, nello specifico é stato seguito ***Scrum***.

    Agile Manifesto: *https://agilemanifesto.org/*

 - ## Processo di Sviluppo: ***Scrum*** 

    Come dettato dalle caratteristiche che determinano il metodo ***Scrum***, il progetto é stato suddiviso, nel tempo, in piú iterazioni dette ***Sprint*** interrompibili e di una durata costante di *2-4 settimane*, in cui i requisiti sono stati analizzati, progettati, realizzati e testati dai membri del progetto sotto la guida del ***ProductOwner/ScrumMaster***, che ci ha fornito direttive per:

    - *Product backlog*
    - *Sprint backlog*
    - *Burndown charts*

    Scrum Home: *https://www.scrum.org/*

    Per la *comunicazione* del ***Team***, per tutte le questioni progettistiche, é stata sempre di tipo *vocale* (chiamate Discord, maggiormente per Team Meetings o Sprint Retrospective) e di tipo *messaggistico* (gruppo Whatsapp/Telegram per comunicazioni a breve termine e feedback del lavoro in corso per gestione delle tempisitiche)

 - ## Organizzazione del lavoro: ***Sprint planning and Sprint review*** 

    Una volta terminato il meeting col ***ProductOwner/ScrumMaster***, é stato indetto regolarmente un ***Team meeting*** (a distanza di massimo due giorni), in cui si é discusso riguardo le direttive annotate per poi gestire le varie richieste e quindi pianificare i vari ruoli dei membri nelle circostanze dello *Sprint* di riferimento, nello specifico, si é stata fatta l'assegnazione dei vari issues.

    - ### ***Gestione Issues***
      
      Ogni **issue** é stato assegnato ad un *singolo membro*, con occasionalmente un *collaboratore* (*Pair Programming*), nella sua realizzazione, gestione e responsabilitá generale a fronte del futuro *Sprint Feedback Meeting* 

      Gli **issue** sono sempre stati assegnati in base alle tempistiche proposte dal membro nel realizzarlo e portarlo a termine, per quindi dettare un ordine di realizzazione di tutti gli issue dello *Sprint* in questione, senza andare incontro ad eventuali problemi di sincronizzazione e *File Data Collision/Corruption*

      Il **Pair Programming** é stato utilizzato per issue con modifiche di file concomitanti, che richiedevano quindi comunicazione elevata tra i due membri incaricati e, molte volte, condivisione dei file soggetti a modifiche.

    - ### ***Gestione Reviews***     

      Ad ogni issue, sono stati proclamati **1/2 reviewers** (1 in caso di bug fix riguardanti un unico issue), con il compito di *esaminare* prima di tutto il prodotto dopo tali modifiche e la coerenza delle modifiche stesse in base alle richieste fornite.

      Grazie a tale organizzazione, non ci sono state solo ***approvazioni*** ma anche ***commenti*** e ***richieste di cambiamenti***, utilissimi per modifiche di tipo correttivo.

      Importante precisare che le *approvazioni/commenti* su *GitHub* sono di tipo **formale**, poiché sono stati utilizzati come forti strumenti di comunicazione, quelli citati nella sezione *Scrum*.


 - ## Organizzazione del lavoro: ***Sprint Retrospective*** 

    Durante i vari *Sprint Feedbacks*, sono stati indetti, in concomitanza, Team Meetings per commentare appunto il *feedback* del *ProductOwner/ScrumMaster* e, dopo di che, valutare quali sono i miglioramenti da apportare nei prossimi *Sprint* ed eventuali modifiche, invece, di quello attuale per portarlo a termine completo.


 - ## Organizzazione del lavoro: ***Product Developing***  

    In questa sezione, si andrá nel dettaglio, piú precisamente verrá fatto un riassunto della gestione dei vari Sprint del progetto Dama.

    (La numerazione degli issues qui seguita, é quella riportata su GitHub nelle Project Boards portate a termine)

   -  ### **Sprint 0**: *dimostrare familiarità con GitHub e il processo agile*

      Per il "primo" *Sprint*, abbiamo suddiviso gli *issues* in maniera piú equa possibile, esaminando quali fossero quelli piú adatti ai vari membri, in modo tale da rientrare piú facilmente nella *deadline*, nello specifico:

      <br/>
      
      gli issues *tecnici* (badges da attivare) sotto responsabilitá di Oleg Ivashkiv

      gli issues di *documentazione* sotto responsabilitá di Manuel Fasanella e Gianluca Colella

      gli issues di *personalizzazione* e *aggiornamento* della *Guida Studente* sotto responsabilitá di Antonio Ciriolo e Mario Franco

      <br/>

      - #### **Issue#1**: badge di GitHub Actions, ***Oleg Ivashkiv***
      - #### **Issue#2**: badge di Coveralls, ***Oleg Ivashkiv***
      - #### **Issue#3**: Personalizza Guida Studente, ***Mario Franco***
      - #### **Issue#4**: Cambia identificatori credenziali GitHub, ***Mario Franco - Antonio Ciriolo***
      - #### **Issue#5**: Cambio 1920 in 2021, ***Antonio Ciriolo - Mario Franco***
      - #### **Issue#6**: Crea Code of Conduct, ***Gianluca Colella***
      - #### **Issue#7**: Crea ispiratore gruppo, ***Manuel Fasanella***     

   -  ### **Sprint 1**: *piccoli comandi*

      Per il secondo *Sprint*, (il primo *Sprint* di vero e proprio *Coding*), Oleg Ivashkiv ha gettato le basi per il codice, in modo tale da poi rendere gli issue un susseguirsi di aggiunte e modifiche del codice giá esistente

      Anche in questo caso, abbiamo suddiviso in maniera equa il lavoro, visto che tutti gli issue riguardavano la creazione del codice

      <br/>

      - #### **Issue#17**: mostrare l'help con elenco comandi, ***Oleg Ivashkiv***
      - #### **Issue#18**: iniziare una nuova partita, ***Manuel Fasanella***   
      - #### **Issue#19**: abbandonare la partita, ***Antonio Ciriolo***  
      - #### **Issue#20**: chiudere il gioco, ***Gianluca Colella***
      - #### **Issue#21**: mostare la damiera con la numerazione, ***Mario Franco***
      - #### **Issue#22**: mostrare la damiera con i pezzi, ***Oleg Ivaskiv***
      - #### **Issue#23**: mostare il tempo di gioco, ***Manuel Fasanella, Mario Franco***

      <br/>
      
   -  ### **Sprint 2**: *Mediogioco*

      Per il terzo *Sprint*, abbiamo semplicemente seguito le linee guida gettate nello scorso frangente

      Abbiamo incluso un *issue aggiuntivo*, non facente parte formalmente della *User Story*, per il *cambio della tassonomia* del codice con l'aggiunta di *commenti descrittivi* riguardanti quest'ultima

      <br/>
      
      - #### **Issue#33**: spostare una pedina(spostamento semplice), ***Oleg Ivashkiv***
      - #### **Issue#34**: spostare una pedina con presa semplice, ***Manuel Fasanella,***
      - #### **Issue#35**: spostare una pedina con presa multipla, ***Mario Franco***
      - #### **Issue#36**: spostare una pedina con damatura, ***Gianluca Colella***
      - #### **Issue#37**: mostrare le prese, ***Antonio Ciriolo***
      - #### **Issue#38**: mostare le mosse giocate, ***Gianluca Colella, Antonio Ciriolo***
      - #### **Issue#39**: Cambio tassonomia progetto e aggiunte descrizioni funzioni, ***Oleg Ivashkiv, Mario Franco***

      <br/>
      
   -  ### **Sprint 3**: *Comunicare la qualità del lavoro svolto*

      Per l'ultimo *Sprint*, vista la maggiore libertá nel finalizzare il progetto (seguendo sempre le richieste del *ProductOwner/ScrumMaster*), abbiamo creato quattro *issue principali* distribuiti tra di noi in base alle nostre capacitá portanti

      I problemi di *CheckStyle e SpotBugs* gestiti da Gianluca Colella, Oleg Ivashkiv e Antonio Ciriolo, sono stati risolti in collaborazione, e riassunti in un'unica Pull Request linkata ad entrambi gli Issues

      I *casi di test* sono stati realizzati con la comunicazione tra tutti i membri per ottenere un risultato coerente con i lavori di tutti

      La *relazione tecnica* é stata stilata in *Visual Studio Code Live Share* tra Mario Franco e Manuel Fasanella, con il *feedback* da parte degli altri componenti sul lavoro svolto, per un risultato coerente

      <br/>

      - #### **Issue#51**: risolvere problemi segnalati da CheckStyle, ***Gianluca Colella, Oleg Ivashkiv***
      - #### **Issue#52**: risolvere problemi segnalati da SpotBugs, ***Antonio Ciriolo, Oleg Ivashkiv***
      - #### **Issue#53**: stilare relazione tecnica finale, ***Manuel Fasanella, Mario Franco***
      - #### **Issue#54**: creare i casi di test automatici, ***Gianluca Colella, Antonio Ciriolo***

<br/>

# 9. Analisi Retrospettiva

All'interno di questa sezione, verranno riportate le ***analisi retrospettive*** fatte dal **Team**, nel corso del tempo, ad ogni ***Sprint Feedback***, seguendo questo *schema* strutturato:

- *cosa ci ha soddisfatto*
- *cosa ci ha deluso*
- *cosa abbiamo imparato*

   -  ### **Sprint 0**: *dimostrare familiarità con GitHub e il processo agile*

      Il nostro *workflow* organizzato si é dimostrato funzionale ed efficiente

       - siamo rimasti soddisfatti dal feedback ricevuto, ottenendo il **massimo** della valutazione

   -  ### **Sprint 1**: *piccoli comandi*

      Abbiamo **sottovalutato** l'aspetto dell'*interfaccia utente*, trascurando una parte fondamentale di essa cioé le prime righe all'avvio del programma, causando l'assenza di una *schermata di benvenuto* che conferma l'avvenuta esecuzione dell'immagine Docker

      - siamo rimasti soddisfatti dal punteggio ricevuto, riguardante il funzionamento del programma, non avendo riscontrato errori

      - siamo rimasti amareggiati del non aver raggiunto la massima valutazione per una *piccola dimenticanza* 

      - grazie a questo feedback, abbiamo riguardato l'*interfaccia utente*, ***migliorandola*** sotto ogni aspetto, cercando di evitare incompletezze e rendere *esaustivo* il nostro prodotto finale
      
   -  ### **Sprint 2**: *Mediogioco*

      Il **tempo** é stato uno degli elementi che, durante lo sviluppo del software, ci ha causato **diverse problematiche** con la risoluzione di *bug* presenti nel codice e, vista la mancanza di una **unitá di test automatico** del *codice*, non abbiamo potuto rilevare l'*errore* prima della consegna del progetto
      

      - siamo rimasti soddisfatti dal generale buon funzionamento del software che ha ripagato la nostra voglia di rifarci dopo lo scorso feedback

      - siamo rimasti delusi dall'errore commesso che ha *penalizzato* la nostra valutazione, nonostante avessimo dato grande cura ai dettagli

      - grazie a questo feedback, abbiamo dato maggiore importanza al *testing* del software, cercando di ricoprire tutte le parti del funzionamento del programma
    



    
