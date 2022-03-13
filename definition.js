

// Pokazywania definicji:

class Definition{
	author = ""
	title = ""
	content = ""
	
	constructor(author, title, content) {
		this.author = author;
		this.title = title;
		this.content = content;
	}
	
}



var definitionList = [];

// Szablon
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

// A
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"AA",
									"<b>Znaczenie:</b><br /> \
									ang. <i>auto atack</i> – podstawowy atak każdej\
									postaci.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Jeszcze jeden AA i chłop będzie martwy!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ace",
									"<b>Znaczenie:</b><br /> \
									ang. <i>All Clan Elimination</i><br />\
									<br />\
									<b>League of Legends:</b><br /> \
									Stan w którym wszyscy przeciwnicy są wyeliminowani.<br />\
									<br />\
									<b>CS:GO, Valorant i gry FPS:</b><br />\
									Wyeliminowanie wszystkich przeciwników przez <b>jednego</b> gracza w jednej rundzie.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ale Ace, rozwaliłeś ich stary!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"AD",
									"<b>Znaczenie:</b><br /> \
									Obrażenia fizyczne<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ej nie uwierzysz, mam 500 AD.\
									"));	
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"ADC",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Pozycja na dolnej alei: grają ją zazwyczaj strzelcy, mają zadawać duże obrażenia \
									z dużej odległości, za to z bliska być bezużyteczni z powodu niskiej ilości zdrowia.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Nienawidzę grać ADC, ciągle tylko auto ataki, a jak ktoś do mnie podejdzie to jestem martwy.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com",
									"Admin",
									"<b>Znaczenie:</b><br /> \
									Właściciel/Założyciel grupy/serwera, posiadający \
									największe uprawnienia.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Dałbyś mi uprawnienia Admina?\
									"));	

definitionList.push(new Definition("samuel.wlostowski@gmail.com",
									"AFK",
									"<b>Znaczenie:</b><br /> \
									ang. <i>away from keyboard</i> – zdala od klawiatury, \
									osoba która odeszła od komputera.<br /> \
									<br />\
									<b>Przykład użycia:</b><br /> \
									Nie da się grać! Gość przegrał linię i poszedł AFK. Typowe..."));	

definitionList.push(new Definition("samuel.wlostowski@gmail.com",
									"AOE", 
									"<b>Znaczenie:</b> <br /> \
									ang. <i>Area Of Effect</i> - obszar efektu. \
									Obszar w którym została użyta jakaś umiejętność. \
									Nie wpływa bezpośrednio na pojedyńczego gracze, \
									ale na wszystkich w tym obszarze.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Niedość że jej ulti zadaje ogromne obrażenia, to jeszcze AOE. To niesprawiedliwe!"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"AP",
									"<b>Znaczenie:</b><br /> \
									ang. <i>ability power</i> – moc umiejętności<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ja mam się budować pod AP, no nie?\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"ARAM",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>all random all mid</i> – tryb gry w którym wszyscy idą na jedną linię.\
									Zazwyczej rozgrywka w tym trybie trwa krócej niż standardowa mapa.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Muszę zaraz kończyć, ale chodź jeszcze ARAMa zagramy.\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Armor Pen",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b>\
									Penetracja pacerza – jedna ze satystyk, które można ulepszać\
									poprzez kupowanie przedmiotów. Pomaga ona likwidować tanków.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ile ty masz Armor Pen? Tanki nie mają z tobą szans!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com",
									"ASAP",
									"<b>Znaczenie:</b> <br /> \
									ang. <i>as soon as possible</i> – tak szybko jak się da.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Zgrupujmy się ASAP!"));


definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Assassin",
									"<b>Znaczenie:</b><br /> \
									Klasa postaci, zabójca. Zadaje ogromne obrażenia w bardzo krótkim czasie,\
									za to posiada małą ilość zdrowia.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Mamy mało obrażeń w teamie, weź jakiegoś assassin'a, ok?\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"AS",
									"<b>Znaczenie:</b><br /> \
									ang. <i>atack speed</i> – szybkość ataku, statystyka odpowiadająca za to jak\
									często twoja postać będzie mogła używac auto ataków.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ile on ma tego AS? Strzela z 5 razy na sekundę! Nienormalne.\
									"));






// B

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"B/Back",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Inaczej Recall. Skrót pochodzi od tego, że klawisz, pozwalający \
									recallować to \"B\". <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Mordo back, martwy prawie jesteś!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"BB",
									"<b>Znaczenie:</b><br /> \
									ang. <i>bye bye</i> – pa pa.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Muszę już lecieć, bb.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Bind",
									"<b>Znaczenie:</b><br /> \
									Ręcznie stworzony przez graczy skrót na myszce lub klawiaturze. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Powie mi ktoś jak zrobić binda?\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"BD/Backdoor",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Próba zniszczenia Nexusa przeciwników gdy nie ma ich w bazie i są zajęci czymś innym. \
									Jest to trudny manewr, ponieważ łatwo jest zostać zauważonym i zlikwidowanym.<br />\<br />\
									<b>Przykład użycia:</b><br /> \
									Ale bd, nawet się nie zorientowali jak przegrali!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Base",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Jest to obszar, w którym znajduje się Nexus, spawn, sklep, dwie wieże i inhibitory.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Nie mogę im pozwolić wejść do base'a, bo przegramy.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"BG",
									"<b>Znaczenie:</b><br /> \
									ang. <i>Bad Game</i> – Zła Gra.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									(Zazwyczaj po prostu napisane na czacie przez toksycznych graczy na koniec gry).\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Blue/Blue buff",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Neutralny niebieski stwór w dżungli, który po zabiciu\
									daje niebiekie wzmocnienie, które przypiesza znacznie regenerację many. <br />\
									(Blue – stwór, Blue buff – wzmocnienie)<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Zgarnę tylko blue i idę ci pomóc.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"BM",
									"<b>Znaczenie:</b><br /> \
									ang. <i>Bad Mannered</i> – osoba zachowująca się niekuluralnie.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Mógłbyś się bardziej postarać debilu, przez ciebie przegramy!<br/>\
									– Ale bm! To nie była moja wina!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Boosted",
									"<b>Znaczenie:</b><br /> \
									Osoba, która znajduje się w wyższej randze niż wskazują na to jej\
									umiejętności. Prawdobobnie ktoś inny wbijał tej osobie rangę, lub\
									grał z nią w jednej drużynie, carrując gry.<br /> \
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ktoś ją wyboostował i teraz sobie nie radzi, ma za swoje!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Bot",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>Ogólnie:</b><br /> \
									Inaczej komputer grający zamiast gracza, albo obraźliwie na graczy któzy słabo grają.<br /> \
									<br />\
									<b>Przykład użycia:</b><br /> \
									Jak prosto! Normalnie jakbym na boty grał!\
									<br /> \
									<b>League of Legends:</b><br />\
									ang. <i>bottom</i> – dół. Chodzi o dolną aleję.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Zagram sobie dziś bota ok?<br />\
									– Spoko, jak chcesz.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"BotRK",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>Blade of the Ruined King</i> – Ostrze Zniszczonego Króla, przedmiot w grze.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Kurde, wystarczy że ta Irelia BotRKa kupi i już nie da się jej zabić!\
									"));									

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"BRB",
									"<b>Znaczenie:</b><br /> \
									ang. <i>Be Right Back</i> – Zaraz wracam.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									O, wait, wołają mnie, brb.\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Buff",
									"<b>Znaczenie:</b><br /> \
									Czasowe lub trwałe podniesienie statystyk bohatera. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Hah! Ten buff jest zbyt potężny, nie da się mnie zabić xD!\
									<br /> \
									<b>League of Legends:</b><br />\
									Wzmocnienie – zazwyczaj co dwa tygodnie do gry wchodzą nowe \"patche\", są to zmiany m.in.\
									statystyk bohaterów. Wzmocnienie bohatera jest nazywane buffem.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Wreszcie buff do Gangplanka! Nie mogłem się doczekać!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Build",
									"<b>Znaczenie:</b><br /> \
									Sposób rozdysponowania posiadanych przez postać punktów umiejętności. \
									Najczęściej na początku rozgrywki podejmuje się decyzję, w którą stronę będzie się zmierzać (\
									tank, mag, wojownik, zabójca itp.) i przez całą rozgrywkę ten plan się realizuje.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Wiesz może jaki jest build do Corkiego?<br />\
									– Wiem tylko, że jest mega dziwny.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Burst",
									"<b>Znaczenie:</b><br /> \
									Ogromne obrażenia zadane w krótkim czasie.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ale burst! Chłop pewnie nawet nie zauważył kiedy umarł!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Bug",
									"<b>Znaczenie:</b><br /> \
									Błąd w grze przeoczony przez twórców.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Kolejne akualizacje, kolejne bugi, no nie wytrzymam.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Bruiser",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Klasa postaci – jest to \"fighter\", z dużą przeżywalnością. \
									Coś pomiędzy fighterem a tankiem.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Spróbuję się dziś zbudować pod bruisera, podobno strasznie to OP teraz.\
									"));
																		
// C
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Camp",
									"<b>Znaczenie:</b><br /> \
									Kryjówka, pozwalająca wziąść wroga z zaskoczenia.\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Znajdź sobie campa i wypatruj wroga.<br/>\
									<br />\
									<b>League of Legends:</b><br />\
									Obóz danych stworów w jungli, podstawowych campów jest 6 rodzaji:<br />\
									<br />\
									W niebieskiej jungli:<br />\
									- Blue Buff<br />\
									- Gromp<br />\
									- Wolves <br />\
									<br />\
									I w czerwonej jungli:<br />\
									- Red Buff<br />\
									- Krugs/Krugi/Skalniaki<br />\
									- Wraiths/Wiedźmy/Rapory<br />\
									<br />\
									Oraz krab wędrownik, który chodzi po rzece i nikogo nie atakuje.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Od jakiego campa mam zacząć?<br/>\
									– Możesz spróbować od Raptorów, będzie ciekawie.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Carry",
									"<b>Znaczenie:</b><br /> \
									Z angielskiego \"nieść\", prowadzić drużynę do zwycięstwa, \
									zdecydowanie dominować nad wszystkimi i praktycznie móc samemu wygrać \
									grę.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Gdyby nie ja to byśmy przegrali! Mocno nas wycarrowałem.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"CC/Crowd Control",
									"<b>Znaczenie:</b><br /> \
									Kontrola tłumu, wszystkie efekty wpływające na mobilność przeciwników, \
									wszelkiego rodzaju spowolnienia, ogłuszenia itp.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Nienawidzę Blitzcranka, jak cię z CC-kuje, to to nie poruszysz się dopóki nie umrzesz.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"CD",
									"<b>Znaczenie:</b><br /> \
									ang. <i>cooldown</i> – czas odnowienia.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Nie mogę ci pomóc, wszystkie umiejętności mam na cd :((.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"CDR",
									"<b>Znaczenie:</b><br /> \
									ang. <i>coooldown reduction</i> – redukcja czasu odnowienia (umiejętności/itemu itp.).<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Przydałoby mi się trochę CDR, za długo musze czekać na te umiejętności.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Counter gank",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zgankowanie linii gankowanej przez enemy junglera. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Pomóż mi zgankowali mnie!<br/>\
									– Już lecę z counter gankiem!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Cover",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zajęcie się linią sojusznika, gdy tego tam nie ma bo jest martwy, jest na twojej, \
									ablo z jakiegoś innego powodu.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									(Wyraz ten źle brzmi jeśli się go spolszcza, więc zwykle używany jest w języku angielskim. \
									Nie zmienia to faktu, że jest to istotne sformułowanie.)<br/>\
									– Can u cover my line for a moment bro?<br />\
									– Sure, OMW.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Creepy",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Inaczej minionki, małe stwory, które pojawiają się regularnie falami \
									na każdej linii.<br />\\<br />\
									<b>Przykład użycia:</b><br /> \
									No nie, wszystkie creepy rozbijają się mi o wieżę!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"CS",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>creep score</i> – licznik <b>dobitych</b> minionków, punkt za każdego \
									minionka, któremu zadasz ostatni cios, który go dobije. Jeśli go nie dobije, \
									nie naliczy się złoto, ani nie zwiększy liczba cs'ów. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Tylko 50 CS w 20 minucie? Ty serio nie umiesz grać.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Control Ward/Pink Ward/Pink",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Przedmiot, postawiony w terenie, zapewnia wizję/widoczność w określonym obszarze. Wykrywa również wizję przciwnika.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Postaw proszę pinka w tych krzakach, muszę mieć pewność że nikt mnie nie widzi.\
									"));







// D									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Dive",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Z angielskiego: \"zanurkowanie\" pad wieżę przeciwnika w celu \
									zdobycia zabójstwa.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Szybko, dive'ujemy! Możemy go zabić!<br/>\
									– Obawiam się że to nie jest dobry pomysł.\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"DPS",
									"<b>Znaczenie:</b><br /> \
									ang. <i>damage per secound</i> – obrażenia na sekundę.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									No, zobaczmy jakie mam DPS-y.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"DoT",
									"<b>Znaczenie:</b><br /> \
									ang. <i>damage over time</i> – obrażenia zadawane w czasie.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									NIENAWIDZĘ wszelkich DoT, moge tylko patrzeć jak powoli umieram...\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Drake",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Jest to smok żywiołu, który pojawia się w swoim leżu, znajdującym się \
									pomiędzy środkową a dolną aleją koło rzeki. <br />\
									<br />\
									Obecnie w grze występuje 7 rodzajów smoków:<br />\
									<br />\
									- Mountain (Gór)<br />\
									- Cloud (Niebios)<br />\
									- Infernal (Piekła)<br />\
									- Ocean (Oceanu)<br />\
									- Hextech (Hextechu)<br />\
									<br/>\
									Kiedyś był jeszcze dostępny smok Chemtechowy, ale został on usunięty.<br/>\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Szybko, bierzemy Drake'a, to jedyna szansa!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Disengage",
									"<b>Znaczenie:</b><br /> \
									Powstrzymanie ataku przeciwników.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Uff, dobrze że ten disengage się udał. Myślałem już że przegramy!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Dodge",
									"<b>Znaczenie:</b><br /> \
									Unik<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Musisz nauczyć się dodge'ować te spelle inaczej ciągle będziesz ginął.<br />\
									– Kiedy to takie trudne!\
									"));





// E									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Elo",
									"<b>Znaczenie:</b><br /> \
									High Elo – wysoka ranga.<br />\
									Low Elo – niska ranga.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ty ciągle low elo, współczuję.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Elo Hell",
									"<b>Znaczenie:</b><br /> \
									Spadnięcie do niższej dywizji i utknięcie w niej z powodu niskiego zaawansowania graczy w drużynie. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Kurna elo hell mam, zawsze mi jakichś idiotów do teamu dobiera!<br/>\
									– A może to ty nie umiesz grać co?\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"EZ",
									"<b>Znaczenie:</b><br /> \
									ang. <i>easy</i> – łatwo.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ez game, ez win.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Engage",
									"<b>Znaczenie:</b><br /> \
									Zainicjowanie walki przez drużynę.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Ktoś musi engage'ować inaczej ciągle tak będziemy się okrążali.<br/>\
									– Jak taki chętny jesteś to proszę bardzo, ja tam bym poczekał.\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Elder",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Inaczej Elder Dragon, Starszy Smok, pojawia się po tym jak \
									jakaś drużyna zbierze \"soula\".<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Dobra Elder jest nasz, łatwo.\
									"));








// F
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Face check",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Wejscie w krzaki bez wizji, w celu zobaczenia czy kogoś tam nie ma.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Facechekuj te krzaki.<br/>\
									– Co ty, oni na pewno tam siedzą! Umrę!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Farmienie",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zabijanie wszelkiego rodzaju stworów, \
									w celu zdobycia złota i doświadczenia.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Mógłbyś się wziąć porządnie za farmienie, zamiast bez sensu biegać po mapie?\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"First Blood",
									"<b>Znaczenie:</b><br /> \
									Inaczej \"Pierwsza Krew\" – pierwsze zabójstwo w grze. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									I cyk, firstblood dla mnie.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Fed",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Inaczej \"nażarty\" – stan w którym gracz zdobywa dużą dominację \
									dzięki dużej liczbie zdobytych zabójstw. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Ale jestem fed, niech uciekają!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Feedowanie",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Ciągłe umieranie, doprawadzające do tego, że przeciwnik jest \"fed\".<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Czy mógłbyś przestać feedować tego Warwicka? Zaraz przegramy przez ciebie.<br />\
									– Staram się, ale to strasznie trudne!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"FF",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Poddanie się.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Nie ma szans na wygraną, ff.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Freeze",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Utrzymywanie fali minionów w jednym miejscu.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Freezuj tą falę, proszę.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Fear",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Efekt kotroli tłumu powodujący powolne oddalanie się od nadawcy \
									cc'ka, oraz bycie niezdolnym do użycia jakichkolwiek umiejętności.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Sora, feara na mordę dostałem, nic zrobić nie mogłem.\
									"));







									
// G									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Gank",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Pomoc junglera na linii.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Zgankowałbyś może, czy coś?<br /> \
									– No już zaraz.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Gap Closer",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Wszelkiego rodzaju dashe, doskoki, blinki itp. skracające odległość \
									pomiędzy tobą a rywalem. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Szkoda że usuneli dasha stridebreakerowi, był świetnym gap closerem.<br/>\
									– To prawda.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ghosting",
									"<b>Znaczenie:</b><br /> \
									Oglądanie streama jednego z przeciwników, w trakcie trwania meczu, \
									w celu zobaczenia pozycji przeciwników. <br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Według mnie ghosting to tylko psucie sobie frajdy z rozgrywki.\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"GG",
									"<b>Znaczenie:</b><br /> \
									ang. <i>good game</i> – Dobra Gra.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									(Zazwyczaj pisze się GG na koniec każdej gry na czacie.)\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"GJ",
									"<b>Znaczenie:</b><br /> \
									ang. <i>good job</i> – dobra robota!<br />\
									GJ bro, genialnie go wrobiłeś.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"GLHF",
									"<b>Znaczenie:</b><br /> \
									ang. <i>good luck have fun</i> – powodzenia i dobrej zabawy.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Idę grać.<br/>\
									– GLHF!\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"GP",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Gangplank – jedna z postaci.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Uwielbiam GP'ka, niesamowita postać.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ground",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Uziemienie – efekt kontroli tłumu.<br />\
									"));






// H								
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Hypercarry",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Postać, będąca mocna w późnym etapie gry, bazująca zazwyczaj na autoatakach.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Potrzebujemy hypercarry.<br/>\
									– OK, pickuję Yasuo.<br/>\
									– WTF, ogarnij się.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Honor",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Po zakończeniu rozgrywki, możemy docenić jakiegoś gracza, \
									honorując go jedną z 3 odznak:<br />\
									<br />\
									- Great Shotcalling (Doskonałe Dowodzenie)<br /> \
									- Stayed Cool (Zachowanie Zimnej Krwi)<br /> \
									- GG <3 (Dobra gra <3)<br /> \
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Oddaj mi honor.<br />\
									– Nie xD.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Hard Leash",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Duża pomoc junglerowi przy pierwszym campie.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									– Dzięki za hard leasha.<br/>\
									– Nie ma za co.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Hard CC",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Kontrola tłumu nie pozwalająca się ruszyć z miejsca.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									I już, hard CC na typa i jest martwy.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Harass",
									"<b>Znaczenie:</b><br /> \
									Obijanie przeciwnika.<br />\
									"));







// I									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Inc",
									"<b>Znaczenie:</b><br /> \
									ang. <i>incoming</i> – nadchodzą.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Szykuj się, inc.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Inner",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Wieże wewnątrzne.<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									Świetnie, inner padły, to koniec chyba.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Instalock",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Natychmiastowy wybór bohatera i zatwierdzenie, bez większego namysłu.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Instakill",
									"<b>Znaczenie:</b><br /> \
									Natychmiastowe zabójstwo. <br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Invade",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Wejście do jungli wroga.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Intowanie",
									"<b>Znaczenie:</b><br /> \
									Celowe umieranie i przegrywanie gry. <br />\
									"));







// J								
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"J4",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Jarvan IV – Postać z gry.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Jungla/Jungler",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Jungla znajduje się pomiędzy alejami, a jungler \
									chodzi z jednej linii do drugiej i pomaga. <br />\
									"));







// K 
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"K6",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Kha'zix – postać.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Kite/Kite'owanie",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Jednocześnie uciekanie i obijanie goniących cię wrogów.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"KS",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>kill steal</i> – skradnięcie zabójstwa.<br />\
									"));








// L 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Lag",
									"<b>Znaczenie:</b><br /> \
									Opóźnienia serwera spowodowane zazwyczaj słabym ineternetem, <br/>\
									skutkujące ścinaniem się gry.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Lag spike",
									"<b>Znaczenie:</b><br /> \
									Nagły wzrost odpowiedzi serwera.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Laner",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Osoba grająca na linii.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Last Hit",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Uderzenie dobijające stwora, a więc dające złoto.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Leash",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Pomoc junglerowi z pierwszym campem.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Leaver",
									"<b>Znaczenie:</b><br /> \
									Gracz wychodzący z gry przed jej zakończeniem.<br />\
									"));







// M 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Main",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Bohater, którym grasz najczęściej.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Map Control",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Umiejętność kontrolowania mapy, dobrego stawiania wizji.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"MiA",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zniknięcie rywala z linii, można to zasygnalizować pingiem \
									w kształcie znaku zapytania, który zazwyczej jest błędnie używany \
									w celu okazania swego poirytowania.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Mid",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Środkowa aleja.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Meta",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Bohaterowie obecnie najmocniejsi. Meta zmienia się bardzo często, \
									praktycznie w każdym patchu.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Metagame",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Obecnie najlepszy styl gry.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Metaslave",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Gracz, grający tylko tym i tak jak dyktuje meta.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Magic pen",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Penetracja pancerza magicznego(chroniącego przed magią).<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"MR",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>magic resist</i> — odporność na magię.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"MS",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>movement speed</i> – prędkość ruchu.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Miniony",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Stwory regularnie nacierające na linie. Są miniony krótkozasięgowe, \
									daleko zasięgowe, oraz co trzy fale przychodzi cannon minion, czyli \
									minion zasięgowy z dużą ilością zdrowia.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Monster",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Stwór z jungli.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Melee",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Atak z bliska.<br />\
									"));








// N 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Newbie",
									"<b>Znaczenie:</b><br /> \
									Gracz początkujący.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Nerf",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Osłabienie bohatera, przedmiotu lub runy. \
									Nazwa wzięła się od nerfów – strzelb na piankowe strzałki.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Noob",
									"<b>Znaczenie:</b><br /> \
									Słaby gracz.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Normal",
									"<b>Znaczenie:</b><br /> \
									Gra nierankingowa.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Nuke",
									"<b>Znaczenie:</b><br /> \
									Umiejętność zadająca ogromne obrażenia.<br />\
									"));







// O 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"OMW",
									"<b>Znaczenie:</b><br /> \
									ang. <i>on my way</i> – nadchodzę.<br />\
									"));									

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"OOM",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>out of mana</i> – nie mam many.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"One shot",
									"<b>Znaczenie:</b><br /> \
									Wyealiminowanie przeciwnika w jednej chwili, \
									zazwyczaj za pomocą jednej umiejętności.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Overextending",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zbyt śmiałe splitpushowanie, lub oddalanie się od drużyny, \
									narażające na atak rywali.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Overstay",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zbyt długie pozostawanie na linii.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"OP",
									"<b>Znaczenie:</b><br /> \
									ang. <i>over powered</i> – potężne, a wręcze zbyt potężne.<br />\
									"));










// P									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"PBE",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>Public Beta Environment</i> – oficjalny serwer testowy, \
									na którym nowości pojawiają się szybciej niż na normalnych serwerach. <br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Peel",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Powstrzymywanie wroga przed dotarciem do wartościowych celów.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Penta/Pentakill",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Pięciokrotne zabójstwo/Pięć trupów, wyeliminowanie wszystkich przeciwników przez jednego \
									gracza. <br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Poke",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Obijanie przeciwników z daleka.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Pot/Potki",
									"<b>Znaczenie:</b><br /> \
									Mistury wzmacniając, leczące itp.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Proxy/Proxowanie",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zabijanie stworów pomiędzy wieżami wroga, lub przy miejscu ich spawnienia.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Push",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Szybkie zabijanie stowrów przeciwnika w \
									celu popchnięcia naszych w stronę wieży rywala.<br />\
									"));









// R 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Rage",
									"<b>Znaczenie:</b><br /> \
									Dawanie upustu frustracji i złości spowodowanej grą.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ragequit",
									"<b>Znaczenie:</b><br /> \
									Wyjście z gry spowodowane frustracją.<br />\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ranged",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Bohaterowie walczący na dystans.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ranked",
									"<b>Znaczenie:</b><br /> \
									Rozgrywka rankingowa.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Recall",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Powrót do bazy.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Riot Games",
									"<b>Znaczenie:</b><br /> \
									Twórcy gry League of Legends, Valorant, Legends of Runeterra, \
									Wild Rift, Teamfight Tactics, Ruined King, Hextech Mayhem, a także \
									niedługo Song of Nunu i CONV/RGENSE.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Roam",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Zejście z linii w celu pomocy sojusznikowi.<br />\
									"));









// S 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Salty",
									"<b>Znaczenie:</b><br /> \
									Pisanie na czacie o swojej frustracji.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Scuttle Crab",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Krab Wędrownik – krab pojawiający się na rzece, który po zibiciu tworzy ołtarzyk, \
									dla drużyny tego kto go zabił. Ołtarzyk ten daje prędkość ruchu, oraz wizję.<br />\
									"));
									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Skillshot",
									"<b>Znaczenie:</b><br /> \
									Umiejętność, którą należy wycelować.<br />\
									"));									

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Smurf",
									"<b>Znaczenie:</b><br /> \
									Osoba, która założyła sobie nowe konto, aby grać w niższych \
									dywizjach, ze słabszymi przeciwnikami.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Snipe",
									"<b>Znaczenie:</b><br /> \
									Zabójstwa z dużej odległości. \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Snowball",
									"<b>Znaczenie:</b><br /> \
									Efekt kuli śnieżnej – zdobycie ogromnej przewagi, dzięki małej przewadze na początku.\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Splitpush",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Samotne pushowanie linii.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"SS",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Informacja o zniknięciu rywala.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Support",
									"<b>Znaczenie:</b><br /> \
									Wsparcie.<br/>\
									<br />\
									<b>League of Legends:</b><br />\
									Wspierający – rola na dolnej alei polegająca na wspieraniu ADC.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Siege",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Oblężenie wieży przeciwnika. <br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Suppression/Przygwożdżenie",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Najsilniejszy rodzaj kontroli tłumu.<br />\
									"));






// T 									
definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Tank",
									"<b>Znaczenie:</b><br /> \
									Klasa postaci, mających przyjmować obrażenia.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Team Comp",
									"<b>Znaczenie:</b><br /> \
									Kompozycja drużyny<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Teamfight",
									"<b>Znaczenie:</b><br /> \
									Walka drużynowa.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"TF",
									"<b>Znaczenie:</b><br /> \
									Troll face<br/>\
									<br/>\
									<b>League of Legends:</b><br />\
									Twisted Fate – postać z gry, \
									lub Trinity Force – przedmiot z gry.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Throw",
									"<b>Znaczenie:</b><br /> \
									Oddawanie dużej przewagi.<br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Tilt",
									"<b>Znaczenie:</b><br /> \
									Bycie zdenerwowanym.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Top",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Górna aleja.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Toxic",
									"<b>Znaczenie:</b><br /> \
									Negatywni gracze wyżywający się słownie na sojusznikach.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"TP",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Teleport – jeden z czarów przywoływacza.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Turret/Tower",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Wieża<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"TT",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									ang. <i>twisted treeline</i> – nieistniejący już tryb gry 3v3.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ulti/Ultimate",
									"<b>Znaczenie:</b><br /> \
									Umiejętność ostateczna.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"U2",
									"<b>Znaczenie:</b><br /> \
									ang. <i>you too</i> – ty też.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Ward",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Przedmiot, który po postawieniu zapewnia wizję w tym obszarze.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"WP",
									"<b>Znaczenie:</b><br /> \
									ang. <i>well played</i> – dobrze zagrane.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"WW",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Warwick – jedna z postaci.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Zoning",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									Niedopuszczanie, aby rywale weszli na dany obszar.<br />\
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));

definitionList.push(new Definition("samuel.wlostowski@gmail.com", 
									"Title",
									"<b>Znaczenie:</b><br /> \
									<br />\
									<b>League of Legends:</b><br />\
									<br />\
									<br />\
									<b>Przykład użycia:</b><br /> \
									"));