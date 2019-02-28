let notatka = function(){ //funkcja tworząca notatkę

    //pobieranie treści i tytułu notatki
    let tytul = document.querySelector("#tytulMenu").value;
    let tresc = document.querySelector("#trescMenu").value;

    //pobieranie daty i zmiana na wygodną formę np "21.02.2019 28:23"
    let data = new Date();
    let dataString = data.getDate() + '.' + (data.getMonth() + 1) + '.' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes();
    console.log(tytul);
    console.log(tresc);
    console.log(dataString);

    //Tworzenie notatki w divie tablica
    let notatka = document.createElement("div");
    notatka.setAttribute("class", "notka");

    notatka.appendChild(document.createTextNode(tytul));
    notatka.appendChild(document.createElement("br"));
    
    notatka.appendChild(document.createTextNode(tresc));
    notatka.appendChild(document.createElement("br"));

    notatka.appendChild(document.createTextNode(dataString));
    tablica.appendChild(notatka);

     //ustawianie koloru notatki
     let kolor = document.querySelector("#kolorMenu").value;
     console.log(kolor)

    switch(kolor){
        case "yellow":
        notatka.style.backgroundColor = "#FFFACD";
        break;

        case "red":
        notatka.style.backgroundColor = "#FF6347";
        break;

        case "green":
        notatka.style.backgroundColor = "#00FA9A";
        break;

        case "blue":
        notatka.style.backgroundColor = "#6495ED";
        break;
    }

    //usuwanie notatki przez kliknięcie
    notatka.onclick = usunNotatke;

    function usunNotatke(e) {
        e.target.parentElement.removeChild(e.target);
    }

}