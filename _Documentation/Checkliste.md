## **Aufgaben / Todos**
[x] Create folder structure
[x] Download Assets
[x] Create imageHelper.js
[x] Create world in canvas
[x] Extend canvas
[x] Integrate Character in World
[x] Integrate Ennemy in World
[x] Integrate Background in World
[x] Make Character move
      [x] Stop left
      [x] Stop right
[x] Make Ennemies move
[x] Make Background move
[x] Implement Camera
[x] Make character defy gravity
[x] Implement collision
      [x] Draw boxes around movable objects
[x] Integrate status bar for health
[x] Integrate status bar for coins
[x] Integrate status bar for bottles
[x] Make Bottle defy gravity
[x] Make Character throw bottles
[x] Collision between bottle and enemies
[x] Collision between bottle and baby enemies
[x] Collision bewteen bottle and endboss
[ ] Dyning animation Endboss
[ ] Impelement sounds
      [ ] Volume control
[ ] Save sound settings to local storage
[ ] Get font
[ ] Start screen
      [ ]  Game rules explanation
      [ ] Start Button
[ ] Win Screen
[ ] Loose screen
[ ] Make responsive
      [ ] Build div for buttons
[ ] JSDOC comments & file

------------------------------------------------------------------------------------------------

Checklist: https://docs.google.com/document/d/1g1duLjtfI3wSA2_cS8DfuWW6oYX0STMZHFVGpRb6nnI/edit?tab=t.0#heading=h.opn8pdu251dm 


## **( El Pollo Loco)**
Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.

2. ## **Funktionalitäten** {#funktionalitäten---user-stories-(wip)}

### **Spielerklärung:** {#spielerklärung:}
Als Benutzer möchte ich eine ansprechende Landingpage haben, die mir auch erklärt, wie das Spiel funktionieren soll, dafür kann ich z.B. einen Button anklicken und es öffnet sich ein Dialog, in dem alles erklärt wird. Der Dialog schließt sich wieder, wenn ich neben ihn oder auf ein X klicke. 

- [ ] Die Seite hat ein Hintergrundbild welches zum Thema passt  
- [ ] Die Schriftart ist angepasst  
- [ ] Es gibt eine Möglichkeit die Tastenbelegung des Spiels nachzuschauen  
- [ ] **Optional:** Es gibt eine Story-Erklärung.  
- [ ] **Optional:** Man kann das Spiel in den Fullscreen Modus schalten.


### **Spiel:** {#spiel:}
Als Benutzer möchte ich das Spiel über einen Start Button starten können, um dann ein schönes funktionierendes Spiel zu sehen, hierbei sollte auf einiges geachtet werden, damit man als Benutzer eine gute Spielerfahrung hat.
- [ ] Es gibt einen Button, der das Spiel startet.  
- [x] Wenn das Spiel startet, sollte man nicht direkt von Gegnern überrannt werden.  
- [x] Der Hintergrund des Spiels ist gleichmäßig und hat keine Lücken.  
- [ ] Das Spiel verfügt über Hintergrundmusik und zusätzliche Soundeffekte. 
- [ ] Alle Sounds können jederzeit über einen Button stummgeschaltet werden.
- [ ] Der Status des Mute-Buttons wird dabei im Local Storage gespeichert.  
- [ ] Wenn das Spiel gewonnen oder verloren ist, wird mir ein Endscreen gezeigt. 
- [ ] Es sollte die Möglichkeit zum Restart des Spiels sowie die Möglichkeit zum Verlassen des Spiels gegeben sein (zurück zum Home Screen).


### **Charakter:** {#charakter:}
Als Benutzer möchte ich einen Charakter spielen, welcher durchgehend animiert ist und Spaß bringt.
- [x] Wenn der Charakter springt wird eine flüssige Sprunganimation ausgeführt  
- [x] Die Animationen des Charakters sind grundsätzlich flüssig, auch wenn er verletzt wird oder springt.  
- [x] Die Idle-Animation muss vorhanden sein - grundsätzlich ist der Charakter immer in der Idle-Animation, wenn er nichts anderes tut.  
- [ ] Die Sleep Animation sollte nach spätestens 15 sec. idle eintreten. 
- [x] Der Charakter kann Coins und Flaschen / Blubberblasen einsammeln, hierbei sollte sich seine Statusbar aktualisieren.  
- [ ] **Pollo Loco:** Der Charakter kann Flaschen werfen, normale Gegner werden bei einem Treffer getötet und dem Endboss wird Schaden zugefügt, auch die Statusbar reduziert sich nach einem Wurf.


### **Gegner:** {#gegner:}
Als Benutzer möchte ich herausfordernde verschiedene Gegner haben, jedoch sollten sie auch nicht unmöglich zu besiegen sein. (Tipp: Im Entwicklungsmodus ist es ratsam, dem Charakter mehr Leben zu geben, damit man besser herumexperimentieren kann.)
- [x] Es gibt mindestens 2 verschiedene Gegnertypen \+ den Endboss im Spiel (Größe, Geschwindigkeit, Angriffe sollten hier möglichst variieren)  
- [x] Es gibt einen Endboss, der stärker ist als die normalen Gegner.  
- [x] Die Animationen der Gegner sind flüssig, auch wenn sie verletzt und getötet werden.  
- [x] Gegner, die man z.B. durch Springen besiegen kann, sollten nur sterben, wenn man von oben auf sie springt.  
- [x] Die Offsets der Gegner sollten passen. (Wenn ich auf einen Gegner springe, stirbt dieser nur, wenn ich ihn auch treffe.)  
- [ ] Die Gegner haben zu ihren verschiedenen Animationen auch Sounds, z.B. könnte der Endboss in EPL laut gackern, wenn er getroffen wird und Schaden erleidet.

3. ## **Sonstiges** {#sonstiges}

### **User Story 1**  {#user-story-1}
Als Benutzer möchte ich das Spiel auch auf Mobilgeräten spielen.
- [ ] Es gibt die Möglichkeit, im Querformat auf einem Mobilgerät zu spielen.  
- [ ] Es gibt nur in der Mobilansicht extra Buttons, um auf dem Mobilgerät (Smartphone  / Tablet) zu spielen.  
- [ ] Das Kontextmenü (Rechtsklick / Touch-and-Hold) ist bei den Mobile-Touch-Buttons deaktiviert.  
- [ ] Wenn das Gerät hochkant gehalten wird, sollte eine Meldung anzeigen, dass das Gerät gedreht werden muss, um spielen zu können.


### **User Story 2** {#user-story-2}
Als Benutzer möchte ich das Impressum von El Pollo Loco einsehen können, um Informationen über den Anbieter und den Nutzungsbedingungen zu erhalten.
- [ ] Durch Anklicken des Links werde ich zu einer Seite weitergeleitet, die alle notwendigen Informationen über den Anbieter und rechtliche Hinweise enthält.


1. ## **Allgemein**
### **Git-Workflow für dein Projekt** {#git-workflow-für-dein-projekt}

- [x] Nutze GitHub von Anfang an. Denk dran: Dein GitHub-Profil ist deine Visitenkarte für Arbeitgeber – nutze diese Chance\!  
- [x] Committe nach jeder Coding-Session  
- [x] Verwende klare, aussagekräftige Commit-Messages  
- [ ] Verwende *.gitignore* verwenden, um unnötige Dateien auszuschließen  
- [x] Halte dein Repository aktuell und gepflegt


### **Funktionalität** {#funktionalität}
- [ ] Alle Links und Buttons sind funktionstüchtig.  
- [ ] Es gibt keine Konsolenfehler & keine console.log ausgaben.


### **Design** {#design}
- [ ] Bitte setze das Design bestmöglich um, sei dabei auch etwas kreativ  
- [ ] Richtige Schriftart ausgewählt & lokal eingebunden  
- [x] Favicon vorhanden  
- [ ] Haben Buttons die CSS Eigenschaft cursor: pointer; ?


### **Responsiveness** {#responsiveness}
- [ ] Die Seite funktioniert auf Desktop Geräten und in der mobilen Ansicht nur im Querformat, ansonsten gibt es im Hochformat eine Anzeige, dass man das Gerät nur im Querformat nutzen kann, z.B. Turn your Device to play.  
- [ ] Die Mobile-Touch-Button sind erst sichtbar, wenn man auf Tablet / Handy Größe ist.  
- [ ] Kein Scrollbalken bei kleineren Auflösungen


### **Technische Umsetzung** {#technische-umsetzung}
- [x] Dateinamen  
      - [x] beschreibend / aussagekräftig  
      - [x] konsistent   
      - [x] Die Hauptseite muss **index.html** heißen, damit sie standardmäßig geladen wird.  
- [x] Javascript Dateienstruktur / Projektstruktur  
      - [x] Einen extra classes Ordner, indem alle class.js Dateien liegen


### **JavaScript / Clean Code** {#javascript-/-clean-code}
- [ ] Eine Funktion hat nur eine Aufgabe  
- [ ] Eine Funktion ist maximal 14 Zeilen lang (HTML ausgenommen)  
- [ ] Deutliche Datei, Funktions- und Variablennamen in konsistenter Schreibweise  
- [ ] Der erste Buchstabe von Funktionen / Variablen ist klein geschrieben  
- [ ] 1 oder 2 Leerzeilen Abstand zwischen Funktionen  
- [ ] Max 400 LOCs (Lines of Code) pro Datei  
- [x] Dateien sind richtig benannt: index.html, script.js, style.css  
- [ ] Ggf. HTML Code in extra Funktion  
- [ ] Extra Ordner für templates und Bilder (img)  
- [ ] Statischer HTML Code wird nicht über JavaScript generiert  
- [ ] Funktionen sind nach JSDoc Standard dokumentiert: [https://jsdoc.app/about-getting-started.html](https://jsdoc.app/about-getting-started.html)


### **Vermeide diese häufigen Fehler** {#vermeide-diese-häufigen-fehler}
- [ ] Animationen sehen nicht gut aus, da sie zu schnell oder zu langsam abgespielt werden.  
- [ ] Es gibt Lücken zwischen den Hintergrundbildern  
- [ ] Zu wenige / zu viele Gegner  
- [ ] Zu starke / zu schwache Gegner  
- [ ] Gegner stirbt auch, wenn ich neben ihn springe  
- [ ] Die Statusbars werden nicht korrekt aktualisiert  
- [ ] Charakter sollte nach Ableben unbeweglich sein.  
- [ ] Starten / Stoppen Sounds richtig ?  
- [ ] Mute Button stoppt alle Sounds? Sind die Sounds zu laut?  
- [ ] Besteht die Möglichkeit zum Neustart nach GameOver?  
- [ ] Restart soll nicht über Reload der Seite gelöst sein.  
- [ ] mobile  
- [ ] Buttons funktionieren nicht auf dem Tablet  
- [ ] keine echten Daten im Impressum  
