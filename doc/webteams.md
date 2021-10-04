Teammitglieder: Mert Agil & Halil Ibrahim Gümüs

Gruppenzugehörigkeit: Gruppe 24

Datum: 04.10.2021


# Aufbau der Webanwendung

Die Webanwenung beinhaltet 2 Seiten. Einmal die Startseite und die Formularseite. 

__Startseite__
Auf der Startseite werden alle Personen angezeigt die der Datenbank hinzugefügt wurden.
Diese werden in Tabelarischer oder Auflistender Form dargestellt.
Folgende Optionen werden dem Anwender auf der Startseite zur Verfügung gestellt:
    -Löschen von Tabelleneinträgen ( BEDINGUNG : Es existiert mindestens ein Eintrag)
    -Bearbeiten von Tabelleneinträgen ( BEDINGUNG : Es existiert mindestens ein Eintrag)
    -Erfassen von Neuen Personendaten
    -Wechseln in die Aufzählungsansicht

__Formularseite__
Auf der Formularseite können neue Personen der Datenbank hinzugefügt werden.
Hier stehen einem folgende Optionen zur Verfügung:
    -Speichern der eingegeben Daten
    -Abbrechen der Eingabe wodurch die Umleitung zur Startseite erfolgt

# Durchgeführte Ergänzungen
Die Formularseite wurde für das hinzufügen einer zweiten Person angepasst sowie die Ansicht auf der Startseite.
Auf der Formularseite wurde ein Abbrechen Button hinzugefügt und auf der Startseite ein löschen button.
In der Application.py wurde eine Delete Funktion hinzugefügt.
Die View.py wurde soweit angepasst das die erwähnte AUfzählungsansicht nun auf der Startseite angezeigt werden kann.



# Beschreibung des HTTP-Datenverkehr

### Beim Start der Anwendung



### Beim Speichern von Formulardaten



## Screenshots von der Netzwerkanalyse

### Welche Anfragen werden an den Webserver geschickt

Beim Start der Anwendung
Anfrage : GET localhost:8080/

Beim Speichern der Formulardaten
Anfrage : POST http://127.0.0.1:8080/save

### Welche Antworten liefert der Webserver

Beim Start der Anwendung
Antwort : Startseite Html , webteams.js , und favicon

Beim Speichern der Formulardaten
Antwort : Darstellung der Formularseite mit den eingegeben Daten


![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

![Start der Anmeldung](https://github.com/HalilGumus/webteams/blob/master/doc/index_html.png)

![Nach Speichern der Formulardaten 1](https://github.com/HalilGumus/webteams/blob/master/doc/save1.png)

![Nach Speichern der Formulardaten 2](https://github.com/HalilGumus/webteams/blob/master/doc/save2.png)




