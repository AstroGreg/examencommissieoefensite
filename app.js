// there can only be one object "quiz" at the time.
/// when this function is called the quiz takes action.
function populate() {
//----------------------------------------------------------------------------------------------------------------------------- responsable for if the quiz is at his end
    if(quiz.isEnded()) {     // "isEnded"  is a function of the object quiz.

    showScores()             //  "showScores"  calls the function showScores.



    }
    else {


// --------------------------------------------------------------------------------------------------------------------------- responsable for if the quiz is not at his end
        // show question
        var element = document.getElementById("question"); // gets the element in the html document were the question is supposed to be.
        element.innerHTML = quiz.getQuestionIndex().text; // puts the text in the question by taking the text of the object "quiz" .
// --------------------------------------------------------------------------------------------------------------------------- display choices.
        // show options
        var choices = quiz.getQuestionIndex().choices;   // declares the variable "choices" as an array van questions from the object "quiz".
        for(var i = 0; i < choices.length; i++) {    // this function will loop trough the whole array of questions, from the now selected questions (we selected the current question of the quiz on line "19").
            var element = document.getElementById("choice" + i); // each time we loop trough this we will select were to put the question in the html document.
            element.innerHTML = choices[i]; // here we put each question into a button in the index html document.
            guess("btn" + i, choices[i]); // here we call the function.
        }
//----------------------------------------------------------------------------------------------------------------------------- display the progress at the bottem.
        showProgress(); // roept de functie op showProgress and is responsable for going to the next question and display the progress at the bottem.
    }
};
//----------------------------------------------------------------------------------------------------------------------------- verifies if the correct answer is chosen.
function guess(id, guess) {
    var button = document.getElementById(id);   // targets wich button this in influenced by line 23 parameter 1.
    button.onclick = function() {  // this will turn on when when any button is clicked.
        quiz.guess(guess); // calles a function in quiz to verify the right answer and add a point to the object quiz.
        populate();  // recursion
    }
};

//----------------------------------------------------------------------------------------------------------------------------- shows the progress at the bottem and will bring you to the next question.
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;  // this line is responsable for going to the next line.
    var element = document.getElementById("progress"); // this selects the element in the htmd document that displays the progress at the bottem of the grid.
    element.innerHTML = "Vraag " + currentQuestionNumber + " Van de " + quiz.questions.length; // this puts the progress in the html document in the rght syntax.
};
//----------------------------------------------------------------------------------------------------------------------------- this will display the score.
function showScores() {

  var gameOverHTML = "<h1>Resultaat</h1>" ;  // this makes the html syntax that is going to be placed in the document.
  gameOverHTML += "<h2 id='score'> jou score: " + quiz.score + "/" + quiz.questions.length + "</h2>"; // same as line 49.
  gameOverHTML += "   <a id ='Retry' href ='file:///C:/Users/gregw/OneDrive/Bureaublad/Finish%20this/Geschiedenis%20ASO/index.html'>opnieuw</a>"; // same as line 49.
  gameOverHTML += "<a id ='Home' href ='file:///C:/Users/gregw/OneDrive/Bureaublad/Finish%20this/just%20another%20stupid%20Idea/index.html'>Home</a>"; // same as line 49.
  var grid = document.getElementById("grid"); // this will select the html element grid.

  grid.setAttribute("Style" , "height: 250px;"); // this will change the style of the grid.
  var element = document.getElementById("quiz"); // selecrs the div quiz in the html document.
  element.innerHTML = gameOverHTML; // puts all the set syntax in the div quiz.


};
//----------------------------------------------------------------------------------------------------------------------------- this will change the button style

function ShowButtons(){

 document.getElementById("EndButtons").style.display = Block ;  // changes behavior of the button

}
//----------------------------------------------------------------------------------------------------------------------------- this is responsable for having different questions each time.
function RandomQuestionMaker() {
  var i = 0; // declares a variable i
  while ( i < ChosenQuestion.length){ // while loop tha repeats itself as long as the array (ChosenQuestion) lengte of line 187.
      RandomNumber =  Math.floor(Math.random() * questions.length);  // this creates a random number between 0 and the amount of questions there are.

     if (!(ChosenQuestion.includes(questions[RandomNumber]))){ // this will filter out the questions you have already done.
          ChosenQuestion[i] = (questions[RandomNumber]); // if the already done questions are filter than put the question in the array (ChosenQuestion).
          i++;
     }
    }
};
//----------------------------------------------------------------------------------------------------------------------------- this section contains all the questions
// create questions
var questions = [

  //  new Question("<h3>situeer eugenetica in de tijd",["1883- 1950","1915-1940","1800-1899","1880-1905"],"1883- 1950"),
    new Question("<h3> Wat is een revolutie, <br> <br> A:  een plotselinge opstand van het volk of verandering <br><br> B:  De geleidelijke ontwikkeling, waarbij uit eenvoudig gebouwde soorten steeds ingewikkelder soorten ontstaan. <br><br> ", ["A", "B" , "" , ""], "A" ),

    new Question("<h3>situeer fin de siècle in de tijd?<br> <br>A:eind 18e eeuw – begin 19e eeuw<br> <br>B:eind 19e eeuw – begin 20e eeuw<br> <br>C:18e eeuw<br> <br> D:17e eeuw",["A","B","C","D"],"A"),
    new Question("<h3>situeer de Conferentie van Berlijn in de tijd ",["1884-1885","1939-1940","1869-1870","1838-1839"],"1884-1885"),
    new Question("<h3>Situeer de Belgische kolonisatie van Congo in de tijd",["1915-1940","1990- 2003","1930-1960","1908-1960"],"1908-1960"),
    new Question("<h3>wanneer zijn de De Verenigde Naties opgericht",["1970","1950","1970","1945"],"1945"),
    new Question("<h3>onstaan van bipolaire wereldorde situeeren in tijd",["1950","1945","1920","1850"],"1945"),
    new Question("<h3>Situeer de Balfourverklaring in de tijd",["1917","1948","1956","1967"],"1917"),
    new Question("<h3>situeer de onafhankelijkheid van Israël in de tijd",["1917","1948","1956","1967"],"1948"),
    new Question("<h3>situeer de Suezcrisis in de tijd",["1917","1948","1956","1967"],"1956"),
    new Question("<h3>situeer de Zesdaagse Oorlog in de tijd",["1948","1967","1917","1956"],"1967"),
    new Question("<h3>situeer de Yom Kippoeroorlog in de tijd",["1973","1978","1993","2002"],"1973"),
    new Question("<h3>situeer de Camp Davidakkoorden in de tijd",["1973","1978","1993","2002"],"1978"),
    new Question("<h3>situeer de Oslo-akkoorden in de tijd",["1973","1978","1993","2002"],"1993"),
    new Question("<h3>situeer de eerste en de tweede Intifada in de tijd",["1987-2000","1953-1966","1953-1990","1936 -1999"],"1987-2000"),
    new Question("<h3>in welk jaar vond de Belgische revolutie plaats",["1830","1815","1780","1850"],"1830"),
    new Question("<h3>situeer liberalisme in de tijd ",["18 eeuw","19eeuw","17eeuw","20 eeuw"],"19eeuw"),
    new Question("<h3>Situeer nationalisme in de tijd",["19eeuw","20eeuw","einde 18eeuw","einde 17eeuw"],"einde 18eeuw"),
    new Question("<h3>situeer fin de siècle in de tijd?<br> <br>A:eind 18e eeuw – begin 19e eeuw<br> <br>B:eind 19e eeuw – begin 20e eeuw<br> <br>C:18e eeuw<br> <br> D:17e eeuw",["A","B","C","D"],"A"),
  // de ideeën van het marxisme, het socialisme en de christendemocratie
    new Question("<h3> Waaruit kunnen we socialisme herleiden ? ", ["A", "B" , "C" , "D"], "D" ),
  // Datums (7)
    new Question("<h3>Wanneer eindigd de prehistorie", ["3500 v. Chr.", "3000 v. Chr. ","5000 v. Chr. ", "1000 v. Chr. "], "3500 v. Chr."),
    new Question("<h3>Wanneer begint en eindigt het oude nabije oosten", ["3500v.C - 800v.C", "3000v.C - 800v.C","1000v.C - 200v.C", "5000v.C - 800v.C"], "3500v.C - 800v.C" ),
    new Question("<h3>Wanneer begint en eindigt de klassieke oudheid,", ["800 v.Chr. tot 1000", "800 v.Chr. tot 500","2000 v.Chr. tot 500", "1000v.C - 500"], "800 v.Chr. tot 500" ),
    new Question("<h3>Wanneer begint en eindigt de middeleeuwen,", ["750-2000", "500-1500","500-1000", "750-1500"], "500-1500" ),
    new Question("<h3>Wanneer begint en eindigt de nieuwe tijd,", ["1300-1750", "1500-1750","1700-1900", "1500-1950"], "1500-1750" ),
    new Question("<h3>Wanneer begint en eindigt de nieuwste tijd,", ["1850-1914", "1914-nu","1750-1914", "1750-1945"], "1750-1945" ),
    new Question("<h3>Wanneer begint en eindigt de eigen tijd,", ["1975-nu", "1750-1945","1914-nu", "1945-nu"], "1945-nu" ),

  // centrum en periferie & maritiem en continentaal & ruraal en stedelijk & lokaal, regionaal, nationaal, Europees, mondiaal (5)
    new Question("<h3>Wat is het ancien régime:<br> <br> A:de periode waarin het Franse koninkrijk op absolutistische wijze werd geregeerd door het huis Bourbon.  <br><br> B: Strategie van Vladimir Poetin om aan de macht te blijven.<br> <br> C: ook wel De periferie genoemd is een aardrijkskundig begrip dat 'randgebied' of 'achterland' betekent.<br><br> D: origine een regeringsvorm waarbij de macht bij één persoon berust. ", ["A", "B","C", "D"], "A" ),
    new Question("<h3>Wat past het BESTE bij het begrip centrum en periferie <br> <br> A: Alles wat te maken heeft met een het continent. (centrum) en alles wat te maken heeft met de zeevaart (periferie).  <br><br> B: Het stedelijke gebied (centrum). het landelijke gebied (periferie).<br> <br> C: Gebied waar er veel verkeer is .(centrum) gebied met weinig verkeer (periferie).<br><br> D:  is een aardrijkskundig begrip dat 'middelpunt' of 'kern' betekent. (centrum) is een aardrijkskundig begrip dat 'randgebied' of 'achterland' betekent (periferie).", ["A", "B","C", "D"], "D" ),
    new Question("<h3>Wat past het BESTE bij het begrip maritiem en continentaal <br> <br> A: Alles wat te maken heeft met een het continent. (continentaal) en alles wat te maken heeft met de zeevaart (maritiem).  <br><br> B: Het stedelijke gebied (maritiem). het landelijke gebied (continentaal).<br> <br> C: Gebied waar er veel verkeer is .(continentaal) gebied met weinig verkeer (maritiem).<br><br> D:  is een aardrijkskundig begrip dat 'middelpunt' of 'kern' betekent. (continentaal) is een aardrijkskundig begrip dat 'randgebied' of 'achterland' betekent (maritiem ).", ["A", "B","C", "D"], "A" ),
    new Question("<h3>Wat past het BESTE bij het begrip ruraal en stedelijk <br> <br> A: Alles wat te maken heeft met een het continent. (ruraal) en alles wat te maken heeft met de zeevaart (stedelijk).  <br><br> B: Het stedelijke gebied (stedelijk). het landelijke gebied (ruraal).<br> <br> C: Gebied waar er veel verkeer is .(stedelijk) gebied met weinig verkeer (ruraal).<br><br> D:  is een aardrijkskundig begrip dat 'middelpunt' of 'kern' betekent. (stedelijk) is een aardrijkskundig begrip dat 'randgebied' of 'achterland' betekent (ruraal).", ["A", "B","C", "D"], "B" ),
    new Question("<h3>Welke zin staat er in de juiste volgorde volgens deze hiërarchie lokaal, regionaal, nationaal, Europees, mondiaal <br> <br> A:   streek of provincie → stad of gemeente → land  → streek of provincie →  Het continent Europa → De melkweg. <br><br> B: stad of gemeente → streek of provincie → land →  Het continent Europa →  wereld.<br> <br> C: streek of provincie → stad of gemeente → land →  Het continent Europa →  wereld.<br><br> D: streek of provincie → stad of gemeente → land →  Het continent Europa →  De melkweg .", ["A", "B","C", "D"], "B" ),

   // Begrippen 1.1 (4)
    new Question("<h3> Wat is het begrip alliantie, <br> <br> A: is een verdrag tussen staten, zakenpartners of individuen, omwille van een gemeenschappelijk voordeel <br><br> B:beweging die zich verzet tegen de invloed van de clerus, de geestelijkheid, van een kerk.<br><br> C: algemene ontwikkeling van individuen of groepen, maar ook naar een maatschappij met een bepaalde mate van complexiteit. <br><br> D:  verbond van twee of meer groeperingen, partijen of staten", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip antiklerikaal, <br> <br> A: is een verdrag tussen staten, zakenpartners of individuen, omwille van een gemeenschappelijk voordeel <br><br>B:beweging die zich verzet tegen de invloed van de clerus, de geestelijkheid, van een kerk.<br><br> C: algemene ontwikkeling van individuen of groepen, maar ook naar een maatschappij met een bepaalde mate van complexiteit. <br><br> D:  verbond van twee of meer groeperingen, partijen of staten", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip beschaving, <br> <br> A: is een verdrag tussen staten, zakenpartners of individuen, omwille van een gemeenschappelijk voordeel <br><br>B:beweging die zich verzet tegen de invloed van de clerus, de geestelijkheid, van een kerk.<br> <br>C: algemene ontwikkeling van individuen of groepen, maar ook naar een maatschappij met een bepaalde mate van complexiteit. <br><br> D:  verbond van twee of meer groeperingen, partijen of staten", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip coalitie, <br> <br> A: is een verdrag tussen staten, zakenpartners of individuen, omwille van een gemeenschappelijk voordeel <br><br> B:beweging die zich verzet tegen de invloed van de clerus, de geestelijkheid, van een kerk.<br><br> C: algemene ontwikkeling van individuen of groepen, maar ook naar een maatschappij met een bepaalde mate van complexiteit. <br><br> D:  verbond van twee of meer groeperingen, partijen of staten", ["A", "B","C", "D"], "D" ),
   // Begrippen 1.2 (4)
    new Question("<h3> Wat is het begrip censuur, <br> <br> A: staatsrecht dat de beperking van de vrijheid van meningsuiting door voorafgaand aan de publicatie van die uiting controle uit te oefenen en/of wijzigingen in die uiting op te leggen.  <br><br> B: onroerend goed gerelateerde jaarlijkse betaling aan de grondheer <br><br> C: het hebben van maatschappelijke denkbeelden en die bestaande toestanden willen handhaven. <br><br> D: is het proces waarbij kolonies zelfstandig worden van een moederland. ", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip cijns, <br> <br> A: staatsrecht dat de beperking van de vrijheid van meningsuiting door voorafgaand aan de publicatie van die uiting controle uit te oefenen en/of wijzigingen in die uiting op te leggen.  <br><br> B: onroerend goed gerelateerde jaarlijkse betaling aan de grondheer <br><br> C: het hebben van maatschappelijke denkbeelden en die bestaande toestanden willen handhaven. <br><br> D: is het proces waarbij kolonies zelfstandig worden van een moederland. ", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip conservatief, <br> <br> A: staatsrecht dat de beperking van de vrijheid van meningsuiting door voorafgaand aan de publicatie van die uiting controle uit te oefenen en/of wijzigingen in die uiting op te leggen.  <br><br> B: onroerend goed gerelateerde jaarlijkse betaling aan de grondheer <br><br> C: het hebben van maatschappelijke denkbeelden en die bestaande toestanden willen handhaven. <br><br> D: is het proces waarbij kolonies zelfstandig worden van een moederland. ", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip dekolonisatie, <br> <br> A: staatsrecht dat de beperking van de vrijheid van meningsuiting door voorafgaand aan de publicatie van die uiting controle uit te oefenen en/of wijzigingen in die uiting op te leggen.  <br><br> B: onroerend goed gerelateerde jaarlijkse betaling aan de grondheer <br><br> C: het hebben van maatschappelijke denkbeelden en die bestaande toestanden willen handhaven. <br><br> D: is het proces waarbij kolonies zelfstandig worden van een moederland. ", ["A", "B","C", "D"], "D" ),
   // Begrippen 1.3 (4)
    new Question("<h3> Wat is het begrip democratie, <br> <br> A:  is een bestuursvorm waarin de wil van het volk de bron is van legitieme machtsuitoefening.  <br><br> B: bevolkingsleer is de wetenschap die de kwantitatieve aspecten van de bevolking bestudeert, <br><br> C: is een opeenvolging van heersers die tot eenzelfde familie behoren.  <br><br> D: wanneer de conjunctuur verandert van een hoog- in een laagconjunctuur.", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip demografie, <br> <br> A:  is een bestuursvorm waarin de wil van het volk de bron is van legitieme machtsuitoefening.  <br><br> B: bevolkingsleer is de wetenschap die de kwantitatieve aspecten van de bevolking bestudeert, <br><br> C: is een opeenvolging van heersers die tot eenzelfde familie behoren.  <br><br> D: wanneer de conjunctuur verandert van een hoog- in een laagconjunctuur.", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip dynastie, <br> <br> A:  is een bestuursvorm waarin de wil van het volk de bron is van legitieme machtsuitoefening.  <br><br> B: bevolkingsleer is de wetenschap die de kwantitatieve aspecten van de bevolking bestudeert, <br><br> C: is een opeenvolging van heersers die tot eenzelfde familie behoren.  <br><br> D: wanneer de conjunctuur verandert van een hoog- in een laagconjunctuur.", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip economische crisis, <br> <br> A:  is een bestuursvorm waarin de wil van het volk de bron is van legitieme machtsuitoefening.  <br><br> B: bevolkingsleer is de wetenschap die de kwantitatieve aspecten van de bevolking bestudeert, <br><br> C:is een opeenvolging van heersers die tot eenzelfde familie behoren.  <br><br> D: wanneer de conjunctuur verandert van een hoog- in een laagconjunctuur.", ["A", "B","C", "D"], "D" ),
   // Begrippen 1.4 (4)
    new Question("<h3> Wat is het begrip federalisering, <br> <br> A: overgaan tot een staatsvorm waarin de soevereiniteit wordt gedeeld tussen het centrale, nationale of federale niveau en de deelstaten.  <br><br> B: volkerenmoord ,de ontzegging van het recht van bestaan van een gehele menselijke groep. <br><br> C:is een toenemend proces van economische, culturele en politieke integratie op mondiaal niveau. Door de openstelling van grenzen tussen landen, kunnen goederen en diensten zich gemakkelijker verplaatsen. <br><br> D: vaststelling bevoegdheden van koning, regering en parlement , Ook zijn in de Grondwet de belangrijkste rechten en plichten van de burgers vastgelegd..", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip genocide, <br> <br> A: overgaan tot een staatsvorm waarin de soevereiniteit wordt gedeeld tussen het centrale, nationale of federale niveau en de deelstaten.  <br><br> B: volkerenmoord ,de ontzegging van het recht van bestaan van een gehele menselijke groep. <br><br> C:is een toenemend proces van economische, culturele en politieke integratie op mondiaal niveau. Door de openstelling van grenzen tussen landen, kunnen goederen en diensten zich gemakkelijker verplaatsen. <br><br> D: vaststelling bevoegdheden van koning, regering en parlement , Ook zijn in de Grondwet de belangrijkste rechten en plichten van de burgers vastgelegd..", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip globalisering, <br> <br> A: overgaan tot een staatsvorm waarin de soevereiniteit wordt gedeeld tussen het centrale, nationale of federale niveau en de deelstaten.  <br><br> B: volkerenmoord ,de ontzegging van het recht van bestaan van een gehele menselijke groep. <br><br> C:is een toenemend proces van economische, culturele en politieke integratie op mondiaal niveau. Door de openstelling van grenzen tussen landen, kunnen goederen en diensten zich gemakkelijker verplaatsen. <br><br> D: vaststelling bevoegdheden van koning, regering en parlement , Ook zijn in de Grondwet de belangrijkste rechten en plichten van de burgers vastgelegd..", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip grondwet, <br> <br> A: overgaan tot een staatsvorm waarin de soevereiniteit wordt gedeeld tussen het centrale, nationale of federale niveau en de deelstaten.  <br><br> B: volkerenmoord ,de ontzegging van het recht van bestaan van een gehele menselijke groep. <br><br> C:is een toenemend proces van economische, culturele en politieke integratie op mondiaal niveau. Door de openstelling van grenzen tussen landen, kunnen goederen en diensten zich gemakkelijker verplaatsen. <br><br> D: vaststelling bevoegdheden van koning, regering en parlement , Ook zijn in de Grondwet de belangrijkste rechten en plichten van de burgers vastgelegd..", ["A", "B","C", "D"], "D" ),
   // Begrippen 1.5(4)
    new Question("<h3> Wat is het begrip holocaust, <br> <br> A: systematische Jodenvervolging en genocide door de nazi's en hun bondgenoten voor en tijdens de Tweede Wereldoorlog. <br><br> B: Een stelsel van opvattingen of ideeën dat ten grondslag ligt aan politiek handelen <br><br> C:is het proces waarbij landen hun macht in andere delen van de wereld uit willen breiden door gebieden te veroveren en te beheersen. <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip ideologie, <br> <br> A: systematische Jodenvervolging en genocide door de nazi's en hun bondgenoten voor en tijdens de Tweede Wereldoorlog. <br><br> B: Een stelsel van opvattingen of ideeën dat ten grondslag ligt aan politiek handelen <br><br> C:is het proces waarbij landen hun macht in andere delen van de wereld uit willen breiden door gebieden te veroveren en te beheersen. <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip imperialisme, <br> <br> A: systematische Jodenvervolging en genocide door de nazi's en hun bondgenoten voor en tijdens de Tweede Wereldoorlog. <br><br> B: Een stelsel van opvattingen of ideeën dat ten grondslag ligt aan politiek handelen <br><br> C:is het proces waarbij landen hun macht in andere delen van de wereld uit willen breiden door gebieden te veroveren en te beheersen. <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip interbellum, <br> <br> A: systematische Jodenvervolging en genocide door de nazi's en hun bondgenoten voor en tijdens de Tweede Wereldoorlog. <br><br> B: Een stelsel van opvattingen of ideeën dat ten grondslag ligt aan politiek handelen <br><br> C:is het proces waarbij landen hun macht in andere delen van de wereld uit willen breiden door gebieden te veroveren en te beheersen. <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "D" ),

   // Begrippen 1.6(3)
    new Question("<h3> Wat is het begrip klassenmaatschappij, <br> <br> A: Een samenleving waarin de maatschappelijke positie van ieder individu vooral wordt bepaald door de sociaal-economische positie (functie, inkomen) die hij bekleedt. <br><br> B:  is een samenleving waarin de bevolking in verschillende groepen of standen is opgedeeld die elk hun eigen rechten en plichten hebben. <br><br> C: is de meest recente (grote) periode in de geschiedenis. <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip standenmaatschappij, <br> <br> A: Een samenleving waarin de maatschappelijke positie van ieder individu vooral wordt bepaald door de sociaal-economische positie (functie, inkomen) die hij bekleedt. <br><br> B:  is een samenleving waarin de bevolking in verschillende groepen of standen is opgedeeld die elk hun eigen rechten en plichten hebben. <br><br> C: is de meest recente (grote) periode in de geschiedenis . <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip moderniteit, <br> <br> A: Een samenleving waarin de maatschappelijke positie van ieder individu vooral wordt bepaald door de sociaal-economische positie (functie, inkomen) die hij bekleedt. <br><br> B:  is een samenleving waarin de bevolking in verschillende groepen of standen is opgedeeld die elk hun eigen rechten en plichten hebben. <br><br> C: is de meest recente (grote) periode in de geschiedenis. <br><br> D: 11 nov. 1918 – 11 sep. 1939", ["A", "B","C", "D"], "C" ),
   // Begrippen 1.7(4)
    new Question("<h3> Wat is het begrip monarchie, <br> <br> A: is van origine een regeringsvorm waarbij de macht bij één persoon berust. <br><br> B:  synoniem voor globalisering. <br><br> C:  land waarin één volk de politieke macht vormt  <br><br> D:  alle politieke partijen die tegen de uitvoerende macht zijn gekant", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip mondialisering, <br> <br> A: is van origine een regeringsvorm waarbij de macht bij één persoon berust. <br><br> B:  synoniem voor globalisering. <br><br> C:  land waarin één volk de politieke macht vormt  <br><br> D:  alle politieke partijen die tegen de uitvoerende macht zijn gekant", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip natie, <br> <br> A: is van origine een regeringsvorm waarbij de macht bij één persoon berust. <br><br> B:  synoniem voor globalisering. <br><br> C:  land waarin één volk de politieke macht vormt  <br><br> D:  alle politieke partijen die tegen de uitvoerende macht zijn gekant", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip oppositie, <br> <br> A: is van origine een regeringsvorm waarbij de macht bij één persoon berust. <br><br> B:  synoniem voor globalisering. <br><br> C:  land waarin één volk de politieke macht vormt  <br><br> D:  alle politieke partijen die tegen de uitvoerende macht zijn gekant", ["A", "B","C", "D"], "D" ),
   // Begrippen 1.8(4)
    new Question("<h3> Wat is het begrip  politiek, <br> <br> A:  is de wijze waarop in een samenleving de belangentegenstellingen van groepen en individuen tot hun recht komen. <br><br> B:  een politieke stroming die gebaseerd is op progressie <br><br> C: is een vorm van communicatie waarbij door de belanghebbende partij wordt getracht aanhangers voor haar gedachtegoed te winnen door het bespelen van de publieke opinie <br><br> D: staatsvorm waarin de vrijheidsbeginselen, democratisch verkozen instellingen, eerbiediging van mensenrechten en scheiding der machten gelden. ", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip progressief, <br> <br> A:  is de wijze waarop in een samenleving de belangentegenstellingen van groepen en individuen tot hun recht komen. <br><br> B:  een politieke stroming die gebaseerd is op progressie <br><br> C: is een vorm van communicatie waarbij door de belanghebbende partij wordt getracht aanhangers voor haar gedachtegoed te winnen door het bespelen van de publieke opinie <br><br> D: staatsvorm waarin de vrijheidsbeginselen, democratisch verkozen instellingen, eerbiediging van mensenrechten en scheiding der machten gelden. ", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip propaganda, <br> <br> A:  is de wijze waarop in een samenleving de belangentegenstellingen van groepen en individuen tot hun recht komen. <br><br> B:  een politieke stroming die gebaseerd is op progressie <br><br> C: is een vorm van communicatie waarbij door de belanghebbende partij wordt getracht aanhangers voor haar gedachtegoed te winnen door het bespelen van de publieke opinie <br><br> D: staatsvorm waarin de vrijheidsbeginselen, democratisch verkozen instellingen, eerbiediging van mensenrechten en scheiding der machten gelden. ", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip rechtsstaat, <br> <br> A:  is de wijze waarop in een samenleving de belangentegenstellingen van groepen en individuen tot hun recht komen. <br><br> B:  een politieke stroming die gebaseerd is op progressie <br><br> C: is een vorm van communicatie waarbij door de belanghebbende partij wordt getracht aanhangers voor haar gedachtegoed te winnen door het bespelen van de publieke opinie <br><br> D: staatsvorm waarin de vrijheidsbeginselen, democratisch verkozen instellingen, eerbiediging van mensenrechten en scheiding der machten gelden. ", ["A", "B","C", "D"], "D" ),
   // Begrippen 1.9(5)
    new Question("<h3> Wat is het begrip republiek, <br> <br> A:  staat waarvan het staatshoofd niet door erfopvolging wordt aangewezen, maar op een of andere manier wordt verkozen.. <br><br> B:  het onteigenen van bezit van de Kerk<br><br> C: Verenigingen van werknemers ter verkrijging van betere arbeidsvoorwaarden en omstandigheden<br><br> D:  een sociaal systeem waarin de staat primaire verantwoordelijkheid draagt voor het welzijn van zijn burgers ", ["A", "B","C", "D"], "A" ),
    new Question("<h3> Wat is het begrip secularisatie, <br> <br> A:  staat waarvan het staatshoofd niet door erfopvolging wordt aangewezen, maar op een of andere manier wordt verkozen.. <br><br> B:  het onteigenen van bezit van de Kerk<br><br> C: Verenigingen van werknemers ter verkrijging van betere arbeidsvoorwaarden en omstandigheden<br><br> D:  een sociaal systeem waarin de staat primaire verantwoordelijkheid draagt voor het welzijn van zijn burgers ", ["A", "B","C", "D"], "B" ),
    new Question("<h3> Wat is het begrip vakbond, <br> <br> A:  staat waarvan het staatshoofd niet door erfopvolging wordt aangewezen, maar op een of andere manier wordt verkozen.. <br><br> B:  het onteigenen van bezit van de Kerk<br><br> C: Verenigingen van werknemers ter verkrijging van betere arbeidsvoorwaarden en omstandigheden<br><br> D:  een sociaal systeem waarin de staat primaire verantwoordelijkheid draagt voor het welzijn van zijn burgers ", ["A", "B","C", "D"], "C" ),
    new Question("<h3> Wat is het begrip  verzorgingsstaat, <br> <br> A:  staat waarvan het staatshoofd niet door erfopvolging wordt aangewezen, maar op een of andere manier wordt verkozen.. <br><br> B:  het onteigenen van bezit van de Kerk<br><br> C: Verenigingen van werknemers ter verkrijging van betere arbeidsvoorwaarden en omstandigheden<br><br> D:  een sociaal systeem waarin de staat primaire verantwoordelijkheid draagt voor het welzijn van zijn burgers ", ["A", "B","C", "D"], "D" ),
    new Question("<h3> Wat is het begrip zelfbeschikking, <br> <br> A:  Het recht op eigen keuzen en zelfstandigheid, zowel voor het individu als voor een collectief <br><br> B:   wat je doet om te overleven, om niet beschadigd te worden <br><br> C: Verenigingen van werknemers ter verkrijging van betere arbeidsvoorwaarden en omstandigheden<br><br> D:  een sociaal systeem waarin de staat primaire verantwoordelijkheid draagt voor het welzijn van zijn burgers ", ["A", "B","C", "D"], "A" ),
   // Begrippen 1.10(1)
   new Question("<h3> Wat is een revolutie, <br> <br> A:  een plotselinge opstand van het volk of verandering <br><br> B:  De geleidelijke ontwikkeling, waarbij uit eenvoudig gebouwde soorten steeds ingewikkelder soorten ontstaan. <br><br> ", ["A", "B" , "" , ""], "A" ),
   // Begrippen 1.11(4)
   new Question("<h3> Wat is het Congres van Wenen <br> <br> A: na de val van Napoleon in 1814 en 1815 gehouden door de overwinnende mogendheden Pruisen, Oostenrijk, Rusland en het Verenigd Koninkrijk met als doel de Europese vrede op effectieve wijze gezamenlijk te regelen en vast te leggen <br><br> B:  bijeenkomst van vijftien Europese landen en de Verenigde Staten gehouden in Berlijn in 1884-1885, over de verdeling van Afrika. <br><br> C: was een verdrag tussen Duitsland en de Entente en het belangrijkste van de vijf in voorsteden van Parijs in 1919-1920 gesloten verdragen, waarmee de Eerste Wereldoorlog formeel werd beëindigd.<br><br> D:bijeenkomst van vijftien hoge naziambtenaren in Berlijn. Zij kwamen bijeen om te spreken over een 'definitieve oplossing' voor het 'Jodenvraagstuk", ["A", "B" , "C" , "D"], "A" ),
   new Question("<h3> Wat is de Conferentie van Berlijn <br> <br> A: na de val van Napoleon in 1814 en 1815 gehouden door de overwinnende mogendheden Pruisen, Oostenrijk, Rusland en het Verenigd Koninkrijk met als doel de Europese vrede op effectieve wijze gezamenlijk te regelen en vast te leggen <br><br> B:  bijeenkomst van vijftien Europese landen en de Verenigde Staten gehouden in Berlijn in 1884-1885, over de verdeling van Afrika. <br><br> C: was een verdrag tussen Duitsland en de Entente en het belangrijkste van de vijf in voorsteden van Parijs in 1919-1920 gesloten verdragen, waarmee de Eerste Wereldoorlog formeel werd beëindigd.<br><br> D:bijeenkomst van vijftien hoge naziambtenaren in Berlijn. Zij kwamen bijeen om te spreken over een 'definitieve oplossing' voor het 'Jodenvraagstuk ", ["A", "B" , "C" , "D"], "B" ),
   new Question("<h3> Wat is het Verdrag van Versailles <br> <br> A: na de val van Napoleon in 1814 en 1815 gehouden door de overwinnende mogendheden Pruisen, Oostenrijk, Rusland en het Verenigd Koninkrijk met als doel de Europese vrede op effectieve wijze gezamenlijk te regelen en vast te leggen <br><br> B:  bijeenkomst van vijftien Europese landen en de Verenigde Staten gehouden in Berlijn in 1884-1885, over de verdeling van Afrika. <br><br> C: was een verdrag tussen Duitsland en de Entente en het belangrijkste van de vijf in voorsteden van Parijs in 1919-1920 gesloten verdragen, waarmee de Eerste Wereldoorlog formeel werd beëindigd.<br><br> D: bijeenkomst van vijftien hoge naziambtenaren in Berlijn. Zij kwamen bijeen om te spreken over een 'definitieve oplossing' voor het 'Jodenvraagstuk", ["A", "B" , "C" , "D"], "C" ),
   new Question("<h3> de Wannseeconferentie in 1942 <br> <br> A: na de val van Napoleon in 1814 en 1815 gehouden door de overwinnende mogendheden Pruisen, Oostenrijk, Rusland en het Verenigd Koninkrijk met als doel de Europese vrede op effectieve wijze gezamenlijk te regelen en vast te leggen <br><br> B:  bijeenkomst van vijftien Europese landen en de Verenigde Staten gehouden in Berlijn in 1884-1885, over de verdeling van Afrika. <br><br> C: was een verdrag tussen Duitsland en de Entente en het belangrijkste van de vijf in voorsteden van Parijs in 1919-1920 gesloten verdragen, waarmee de Eerste Wereldoorlog formeel werd beëindigd.<br><br> D:  bijeenkomst van vijftien hoge naziambtenaren in Berlijn. Zij kwamen bijeen om te spreken over een 'definitieve oplossing' voor het 'Jodenvraagstuk'. ", ["A", "B" , "C" , "D"], "D" ),
   // Het Congres Van Wenen
   new Question("<h3>Wat bedoeld men met de restauratiepolitiek van het Congres van Wenen ? <br> <br> A: Het heropbouwen van Europa <br><br> B: het territorium van Frankrijk verkleinen <br><br> C: Het herstel van de monarchie in Frankrijk.<br><br> D: Politiek die zich richt op het uitbuiten van een ander land.", ["A", "B" , "C" , "D"], "C" ),
   new Question("<h3>Welke Zinnen zijn gevolgen van het Congres van Wenen ? <br> <br> A: bufferstaten rond Frankrijk <br> Italie wordt communistisch <br> Groothertogdom Luxemburg wordt opgericht<br> <br> B: bufferstaten rond Frankrijk <br> Verenigd Koninkrijk der Nederlanden <br> Groothertogdom Luxemburg wordt opgericht<br> <br>C: bufferstaten rond Frankrijk <br> Rusland wordt communistisch <br> Groothertogdom Luxemburg wordt opgericht.<br><br> D: bufferstaten rond Frankrijk <br> Rusland wordt communistisch <br> Italie wordt communistisch", ["A", "B" , "C" , "D"], "B" ),
   // Franse revolutie
   new Question("<h3> Wat zijn oorzaken van de Franse revolutie ? <br> <br> A: de dood van Napoleon zorgde voor onrust <br> Frankrijk kende een klassensamenleving van geestelijkheid, adel en burgerij/boeren de 3de stand was in de meerderheid en wilde verandering <br> mislukte oogsten <br><br> B: De Franse koning was te aardig om te heersen. <br> Frankrijk kende een standensamenleving van geestelijkheid, adel en burgerij/boeren de 3de stand was in de meerderheid en wilde verandering <br> mislukte oorlog tegen Italie <br><br> C: Verlichtingsideeën maakten de geesten rijp voor verandering <br> Frankrijk kende een klassensamenleving van geestelijkheid, adel en burgerij/boeren de 3de stand was in de meerderheid en wilde verandering <br> mislukte oogsten <br><br><br> D:  A: Verlichtingsideeën maakten de geesten rijp voor verandering <br> Frankrijk kende een standensamenleving van geestelijkheid, adel en burgerij/boeren de 3de stand was in de meerderheid en wilde verandering <br> mislukte oogsten", ["A", "B" , "C" , "D"], "D" ),
  // industriele revolutie
  new Question("<h3> plaats en tijd van de eerste industriele revolutie ?", ["1750 in België" , "1750 in Engeland", "1850 in Engeland" , "1750 in België"], "1750 in Engeland" ),
  new Question("<h3> Wat is geen kenmerk van de eerste industriele revolutie?", ["stoomschepen" , "Stoommachines", "Elektriciteit" , "Gietijzer"], "Elektriciteit" ),
  new Question("<h3> Wat is geen kenmerk van de tweede industriele revolutie?", ["Stoommachines" , "Staal", "Elektriciteit" , "Verbrandingsmotor"], "Stoommachines" ),
  // de ideeën van het marxisme, het socialisme en de christendemocratie
  new Question("<h3>Waaruit kunnen we socialisme herleiden ?",["liberalisme","ikweetnietisme","kapitalisme","marxisme"],"marxisme"),

];
//----------------------------------------------------------------------------------------------------------------------------- this is the begin process
var ChosenQuestion = new Array(1); // this will define the amount of questions u will have.
RandomQuestionMaker(); // this will call the function RandomQuestionMaker and creat a random order and pick of the array (questions)

// create quiz
var quiz = new Quiz(ChosenQuestion); // this will call create the object quiz

// display quiz
populate();
