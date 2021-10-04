function confirmDelete_p (event_opl) {
    if ((event_opl.target.tagName.toLowerCase() == 'a') && (event_opl.target.className == "clDelete")) {
       // Klick auf Link zum Löschen

      if(confirm('Möchtest du die Eingaben wirklich löschen? \n\nFür Ja (Löschen) = OK Klicken \nFür Nein (nicht löschen) = Abbrechen klicken\n\n')){
      } else{
         event_opl.preventDefault(); // Sagt dem User Agent, dass das Event nicht gehandled wird. Die Standard-Aktion soll nicht ausgeführt werden.
      }
      }
 }
 window.onload = function () {
    let body_o = document.getElementsByTagName('body')[0];
    body_o.addEventListener('click', confirmDelete_p, false);
 }
 