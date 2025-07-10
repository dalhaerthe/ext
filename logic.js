 
const sentences = [
  'Schronienie',
'Cztery podstawowe rozmyślania',
'Cenne ludzkie ciało',
'O przemijalności',
'Lama jest zwierciadłem naszego umysłu',
'Madrość i współczucie',
'Czyste widzenie',
'Najwyższa radość jest najwyzszą prawdą',
'Moc życzeń',
'Co oznacza budda - Przebudzony',
'Przyczyna i skutek',
'Cztery czynniki wzmacniajace karmę',
'Buddyzma a filozofia, psychologia, religia',
'Buddyzm a nauka',
'Co to jest ego',
'6 paramit, wyzwalajacych działań (można też opowiedzieć o jednym, wybranym)',
'O szczodrosci',
'Cztery szlachetne prawdy',
'Cztery oświecone aktywności',
'Pięć mądrości',
'Trzy stany buddy są jak woda (para wodna, chmury, deszcz)',
'Praca z gniewem',
'Praca z dumą',
'Praca z emocjami w malej, wielkiej i diamentowej drodze',
'Dziesięć wskazań',
'O Lamie Ole - jak działa umysł lamy',
'Niewiedza - przyczyna wszystkich trudnosci',
'Poglad, medytacja, działanie (informacja, medytacja, zabezpieczenie)',
'Guru joga - medytacja na lamę',
'Praktyki podstawowe nyndro',
'Jak działają mantry',
'Co to jest linia przekazu',
'Schornienie w sandze',
'Dlaczego warto uczestniczyć w życiu ośrodka',
'Czemu służą 10-minutowki',
'Buddyzm dla ludzi świeckich',
'Co znaczy miłość dla buddysty',
'Czym jest śmierć dla buddysty',
'Gromadzenie dobrych wrażeń i mądrości',
'Tu i teraz - bez obaw i oczekiwań',
'Praktyka w codziennym życiu',
'O podejmowaniu decyzji w codziennym życiu',
'Obietnica bodhisattwy',
'Praca z pobudzeniem i ospałością w medytacji',
'O właściwej postawie medytacyjnej',
'Medytacja a myśli',
'O mali',
'Nauczyciel i uczeń',
'Strażnicy',
'Jidamy',
'Buddyzm jako religia doświadczenia - religie wiary a religie doświadczenia',
'Jak buddyzm zakorzenia się na Zachodzie',
'Jaki typ ludzi jest zainteresowanych buddyzmem',
'2 nagromadzenia - dobrych wrażeń i mądrości.',
'(wg pomysłu Lamy Ole): streścić dowolny rozdział z "Jakimi rzeczy są" lub "O naturze rzeczy".',
'Prawidłowa pozycja medytacyjna oraz wskazówki, jak sprawić by medytacja stała się częścią dnia codziennego',
' Krótka faza skupiania się na oddechu podczas medytacji XVI Karmapy: myśli i uczucia są jak chmury na niebie, nie oceniamy ich',
' Cztery podstawowe rozmyślania, ukierunkowujące umysł ku wyzwoleniu i oświeceniu',
' Pierwsze podstawowe rozmyślanie: cenne ludzkie ciało',
' Drugie podstawowe rozmyślanie: przemijalność wszystkiego, co uwarunkowane i nieprzemijalność umysłu',
' Trzecie podstawowe rozmyślanie: przyczyna i skutek – sami decydujemy, co się wydarza',
' Czwarte podstawowe rozmyślanie – dlaczego medytujemy?',
' Nasza postawa na wielkiej drodze (mahajana), postawa bodhisattwy/oświecona postawa',
' Kim jest bodhisattwa?',
' Sześć wyzwalających działań',
' Paramita szczodrości',
' Paramita pełnego znaczenia postępowania',
' Paramita cierpliwości',
' Paramita radosnego wysiłku',
' Paramita medytacji',
' Paramita mądrości',
' Dlaczego składamy ślubowanie bodhisattwy?',
' Czy istnieje trwałe ja? Na czym naprawdę możemy się oprzeć?',
' Schronienie w Buddzie, jako nasz cel i lustro dla naszego umysłu',
' Schronienie w Dharmie, w naukach Buddy, które prowadzą nas do oświecenia',
' Schronienie w przyjaciołach na ścieżce, w Sandze',
' Schronienie w Lamie, nauczycielu na Diamentowej Drodze',
' Linia Karmapów – czym jest przekaz?',
' XVI Karmapa, moc aktywności buddów, dla pożytku wszystkich istot',
' Czarna korona Karmapów',
' Znaczenie dordże i dzwonka',
' Pola mocy (mandale)',
' Czym są wyzwolenie i oświecenie?',
' Kim jest nauczyciel w Diamentowej Drodze?',
' Jak rozwijać oddanie i zaufanie?',
' Dlaczego jeszcze nie przeżywamy prawdziwej natury naszego umysłu? Jakich doświadczamy przeszkód i jakie mamy zasłony w umyśle?',
' Medytacja w Diamentowej Drodze – ścieżka identyfikacji',
' Czym jest inicjacja? Przekaz mocy (łang), pozwolenie poprzez słuchanie (lung), wyjaśnienia (tri), przekaz poprzez wspólną medytację (gum-lung) ',
' Cztery stany buddy – stan prawdy (dharmakaja), stan radości (sambogakaja), stan wypromieniowania (nirmanajaka), stan esencji (swabhawikakaja)',
' Czym są mantry, na przykład Karmapa Czienno',
' Czysty pogląd – po fazie spełnienia w medytacji, świat powstaje od nowa i przeżywamy wszystko na jak najwyższym poziomie',
' Podzielenie się zasługą na koniec medytacji i wyrażanie życzeń dla dobra wszystkich istot',
' Nasi nauczyciele Lama Ole i Hannah Nydahl',
' Nauki Buddy – czym są, a czym nie są (ze wstępu książki)',
' Historia życia Buddy',
' Schronienie',
' Trzy ścieżki (Mała, Wielka i Diamentowa Droga)',
' Mała droga – cztery szlachetne prawdy',
' Karma – przyczyna i skutek',
' Wielka droga – współczucie i mądrość',
' Współczucie – cztery rodzaje miłości (cztery niezmierzoności)',
' Przeszkadzające uczucia, jako źródła mądrości',
' Diamentowa Droga – wykorzystywanie wszystkich środków',
' Cztery aktywności',
' Metody Diamentowej Drogi',
' Cele w buddyzmie – wyzwolenie i oświecenie',
' Przekrój nauk Buddy (nauki uwarunkowane i ostateczne)',
' Znaczenie nauczyciela (dlaczego nie przemierzamy ścieżki sami)',
' Buddyjskie sposoby życia i funkcjonowania (mnisi, ludzie świeccy, jogini)',
' Struktura nauk – wiedza, medytacja, działanie',
' Dziesięć działań przynoszących pożytek i dziesięć szkodliwych działań.',
' Sześć wyzwalających działań (paramity)',
' Czym jest odosobnienie? / Nasze ośrodki odosobnieniowe *',
' Czym jest stupa? Gdzie znajdują się nasze stupy? *',
' Różne aspekty historii życia ważnych lamów naszej linii przekazu, którzy mają szczególne znaczenie dla nas dzisiaj – Tilopa *',
' Różne aspekty historii życia ważnych lamów naszej linii przekazu, którzy mają szczególne znaczenie dla nas dzisiaj – Naropa *',
' Różne aspekty historii życia ważnych lamów naszej linii przekazu, którzy mają szczególne znaczenie dla nas dzisiaj – Marpa *',
' Różne aspekty historii życia ważnych lamów naszej linii przekazu, którzy mają szczególne znaczenie dla nas dzisiaj – Milarepa *',
' Różne aspekty historii życia ważnych lamów naszej linii przekazu, którzy mają szczególne znaczenie dla nas dzisiaj – Karmapowie *',
' Różne aspekty historii życia ważnych lamów naszej linii przekazu, którzy mają szczególne znaczenie dla nas dzisiaj – Lobpyn Tseczu Rinpocze *',
' Podróżowanie z nauczycielem *',
' Jak funkcjonują nasze ośrodki Diamentowej Drogi (przejmowanie funkcji, przyjaźń, merytokracja, przejrzystość, działalność społeczna) *',
' Tanki i formy buddów (formy, symbole, gesty i ich znaczenie) *'


];




let interval;
let delay = 20;
let currentIndex = 0;
let tries = 3;
let triesdispl=document.getElementById('tries');
let mani=document.getElementById('mani');
triesdispl.innerText=tries;
const btn=document.getElementById('btn');
let nr=0; //indeks tematów


mani //ustawić na niewidzialne, potem na widzialne

const el = document.getElementById("sentence");


function changeColor() {
  el.style.color='black';
  
}


function startLottery() {
  changeColor();
  
  clearInterval(interval);
  delay = 20;
  currentIndex = 0;
  animateLoop();
tries --;
triesdispl.innerText=tries;
if(tries==0) {

  btn.disabled=true;
  btn.style.opacity=.3;
}


}

function animateLoop() {
  
  interval = setInterval(() => {
    
    el.style.opacity = 0;
    setTimeout(() => {
      nr=Math.floor(Math.random() * sentences.length);
      el.innerText = sentences[nr];
      
      
      el.style.opacity = 1;
    }, 10);

    delay += 10;

    if (delay > 100) {
      clearInterval(interval);
      el.style.color='red';
      sentences.splice(nr,1);

    } else {
      clearInterval(interval);
      interval = setTimeout(animateLoop, delay);
    }
  }, delay);

}






tstTab.splice(rnd,1);





