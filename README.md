Progetto Air Station

Tecnologie Utilizzate:

    Front End: Sviluppato in React.

    Backend: Sviluppato in Python con l'ausilio della libreria Flask per gestire le chiamate API.

Database:

    Il backend si interfaccia con il database "Voli" su PostgreSQL.

    Mediante delle query, il backend prende le informazioni dal database in base alla richiesta e le inoltra al front-end su React.

Comunicazione Frontend-Backend:

    Il front-end utilizza una funzione chiamata Fetch per prendere le informazioni mandate dal backend e inserirle direttamente nel sito.

        Esempio: Nella sezione "Voli In Partenza", viene utilizzato questo metodo per visualizzare i voli.

Design e Stile:

    Stile Moderno e Accattivante: Utilizzo di colori che risaltano tra di loro.

    NavBar:

        Logo Air Station sulla sinistra insieme all'immagine di un aereo.

        Link di Navigazione sulla destra:

            Home: Pagina principale.

            Voli in Partenza: Tabella con tutti i voli in partenza.

            Compagnie: Lista di tutte le compagnie di Air Station.

        Responsive Design: Su dispositivi mobili, i link si trasformano in un hamburger menu.

            Al tocco, appare una schermata laterale con i link in verticale.

            La schermata principale viene oscurata per garantire maggiore visibilità ai link.

            Il menu dispone di una "X" per chiudere la sezione links.

HomePage:

    Cenno Storico: Presenta la storia di AirStation con immagini e uno stile gradevole.

Footer:

    Contatti: Telefono, mail e tutti i social media (Instagram, Facebook, Threads).

    Effetto Hover: Tutti i link del sito dispongono di una proprietà CSS chiamata Hover che migliora la leggibilità al passaggio del mouse.




Installazione :


    Requisiti di Sistema

    Node.js (per gestire React e Vite):

        Versione consigliata: 18.x o superiore.

        Link per il download: https://nodejs.org/

    Python (per il backend Flask):

        Versione consigliata: Python 3.11 o superiore.

        Link per l'ultima versione di Python: https://www.python.org/downloads/

    PostgreSQL (per il database):

        Versione consigliata: PostgreSQL 15 o superiore.

        Link per il download: https://www.postgresql.org/download/

    Git (per clonare il repository):

        Link per il download: https://git-scm.com/




1. Clonare il Repository

Apri il terminale ed esegui il comando:


git clone https://github.com/AleMochiOnori/sitoVoli.git
cd sitoVoli

2. Configurare il Backend (Python + Flask)

    Crea un ambiente virtuale (consigliato):


    python -m venv venv

        Attiva l'ambiente virtuale:

            Su Windows:
         

            venv\Scripts\activate

            Su macOS/Linux:
         

            source venv/bin/activate

    Installa le dipendenze Python:


    pip install -r requirements.txt

    Configura il database PostgreSQL:

        Crea un database chiamato Voli su PostgreSQL.

        Modifica il file di configurazione del backend (es. config.py o .env) per inserire le credenziali del database:
        plaintext
        Copy

        DB_HOST=localhost
        DB_NAME=Voli
        DB_USER=tuo_username
        DB_PASSWORD=tuo_password
        DB_PORT=5432

    Avvia il backend Flask:

    python app.py

        Il backend sarà disponibile all'indirizzo: http://localhost:5000.

3. Configurare il Frontend (Vite + React)

    Installa le dipendenze di Node.js:

    npm install

    Avvia il server di sviluppo Vite:

    npm run dev

        Il frontend sarà disponibile all'indirizzo: http://localhost:5173.

4. Collegare Frontend e Backend

    Assicurati che il backend Flask sia in esecuzione.

    Verifica che le chiamate API nel frontend (es. fetch) puntino all'indirizzo corretto del backend (http://localhost:5000).

Dipendenze Principali

    Backend (Python):

        Flask (pip install flask)

        Flask-CORS (pip install flask-cors)

        Psycopg2 (pip install psycopg2) per PostgreSQL.

        Altre dipendenze elencate in requirements.txt.

    Frontend (React):

        React (npm install react)

        React DOM (npm install react-dom)

        React Router DOM (npm install react-router-dom)