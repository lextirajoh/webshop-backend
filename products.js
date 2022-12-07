const products = [
  {
    id: 0,
    title: 'Gloomhaven',
    price: 99.95,
    category: 'Strategie',
    publisher: 'Cephalofair',
    language: 'Engels',
    players: '1-4',
    playtime: '60-120',
    age: '14',
    desc: 'Gloomhaven is een spel van, op Euro Style geïnspireerde tactische gevechten in een blijvende wereld van veranderende motieven. Spelers zullen de rol aannemen van een rondtrekkende avonturier met hun eigen speciale vaardigheden en hun eigen redenen om naar deze donkere hoek van de wereld te reizen. Spelers moeten uit noodzaak samenwerken om dungeons en vergeten ruïnes te overwinnen. Op hun avontuur zullen ze hun vaardigheden verbeteren door ervaring en loot, nieuwe locaties ontdekken om te verkennen en plunderen, en een steeds vertakkend verhaal ontplooit zich dat wordt aangewakkerd door de beslissingen die ze nemen.',
    image:
      'https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__imagepage/img/pBaOL7vV402nn1I5dHsdSKsFHqA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2437871.jpg',
    youtube: 'https://www.youtube.com/embed/mKc5XhvkC8M',
  },
  {
    id: 1,
    title: 'Bloodborne',
    price: 24.95,
    category: 'Strategie',
    publisher: 'CMON',
    language: 'Engels',
    players: '1-4',
    playtime: '45-75',
    age: '14',
    desc: 'Revered for its healing techniques, the town of Yharnam is rapidly degrading as a plague that turns people into beasts spreads uncontrollably. As a Hunter, it falls to you to quell this growing threat. You will have to fight through beasts, monsters, and townsfolk alike to survive the night and discover the source of this madness. \nIn the campaign-based action-adventure Bloodborne: The Board Game, players take on the role of Hunters, working together against the game to uncover the mysteries hidden within the city of Yharnam and beyond. Featuring unique Trick Weapons, each with various forms and powers, Hunters have to think quickly and adapt their tactics to overcome the multitude of foes that stand in their way. Learn their behavior, exploit their weaknesses, and strike them down! Featuring unique card-driven combat, luck has little place here — success or failure depends on your choices and how you approach each engagement! \nOf course, against such horrific foes, death is a common occurrence, but worry not as death is no end for a Hunter. Those who fall in combat awaken in the Hunter\'s Dream, ready to return fresh to the fight. Be warned, however, that upon awakening you might find previous foes and obstacles returned, Worse, time is not on your side as the Blood Moon rises ever higher into the sky, spreading its madness across Yharnam. You must press ever forward if you and your comrades hope to complete the Hunt before the city meets an unfortunate end. \nAs you set out onto the Hunt, always remember the old adage: \n"We are born of the blood, made men by the blood, undone by the blood. Our eyes are yet to open... Fear the old blood."',
    image:
      'https://cf.geekdo-images.com/clKFvn2bUUPbY62eSmc-ig__imagepage/img/dtZczndlVT0nOsFceQbM0yeAGVo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4757839.png',
    youtube: 'https://www.youtube.com/embed/ZlFelry1e1w',
  },
  {
    id: 2,
    title: 'Food Chain Magnate',
    price: 79.95,
    category: 'Strategie',
    publisher: 'Splotter',
    language: 'Engels',
    players: '2-5',
    playtime: '120-240',
    age: '14',
    desc: 'Hebberige CEO\'s van restaurantketens zijn er op uit om iedereen verslaafd te maken aan hun fast food. Kunnen ze de menigte hersenspoelen om hetzelfde eten verkopen voor de dubbele prijs nu het een luxere naam heeft?\nIn dit zwaar strategische spel sta jij aan het hoofd van een fast food keten die je moet laten uitgroeien tot de dominante speler op de markt. Met behulp van jouw kaarten manipuleer je de inkoop van ingrediënten, de verkoop van jouw eten, het marketen van jouw merk en het inhuren van jouw staf voor minimale lonen.\nHet spel speelt zich af in een stad die telkens anders opgebouwd is. Hierdoor wordt je telkens op nieuwe manieren uitgedaagd om op meedogenloze wijze de concurrentie te verpletteren.',
    image:
      'https://cf.geekdo-images.com/Wtxml94LAXsIWQCxGPS63Q__imagepage/img/H8df_iehwKM8SY2wVFWswoYwMvQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2649434.png',
    youtube: 'https://www.youtube.com/embed/jHSxnRS2g0o',
  },
  {
    id: 3,
    title: 'Twilight Struggle',
    price: 59.95,
    category: 'Strategie',
    publisher: 'GMT',
    language: 'Engels',
    players: '2',
    playtime: '120-180',
    age: '13',
    desc: 'Na de val van het Hitlers 3e rijk en het Japanse keizerrijk blijven er nog twee wereld spelers over. De Verenigde Staten en de Sovjet Unie. Voordat de wereld op adem is gekomen van de oorlog, raakt zij verstrikt in een nieuw conflict. Dit keer staan niet de soldaten en de tanks centraal maar de spionnen en politici. Twilight Struggle is een tweepersoons simulatie spel gebaseerd op de koude oorlog. De verschillende historische episodes van de koude oorlog komen aan bod en het strijd toneel is de hele wereld Dit spel is verschrikkelijk goed, misschien wel het beste spel ooit. Pas wel op, hij is ook zwaar ingewikkeld en duurt lang. Echt iets voor de liefhebber. ',
    image:
      'https://cf.geekdo-images.com/pNCiUUphnoeWOYfsWq0kng__imagepage/img/BWy9XaudHc_YnHCrzFc3cINAhvw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3530661.jpg',
    youtube: 'https://www.youtube.com/embed/w7ZLaIrq2_U',
  },
  {
    id: 4,
    title: 'Wingspan',
    price: 29.95,
    category: 'Familie',
    publisher: '999 Games',
    language: 'Nederlands',
    players: '1 tot 5',
    playtime: '60',
    age: '10',
    desc: 'Wingspan is een vogelspel vol tactiek en spanning. Als vogelliefhebber probeer je de beste leefomstandigheden voor de vogels in je opvangcentrum te creëren. Elke vogel breidt in één van zijn leefgebieden een ketting van krachtige combinaties uit. Deze leefgebieden richten zich op verschillende groeifactoren: voedsel pakken, eieren leggen en nieuwe vogelkaarten trekken. Wie bouwt het beste actiemotortje en scoort aan het einde van het spel de meeste punten met zijn vogels? \nElke beurt speel je een vogel, waarna je alle acties die zich in het betreffende leefgebied bevinden, mag uitvoeren. Zo kun je voedsel uit een “echt” vogelhuisje pakken, ei-miniaturen in nesten leggen of nieuwe vogels verzamelen. Alle opties leveren op verschillende manieren punten op. Het spel bevat 170 unieke vogelkaarten, die in combinatie met de verschillende bonuskaarten en de interactie met de andere spelers voor oneindige variatie zorgen. Het spel is ook solitair te spelen! ',
    image:
      'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg',
    youtube: 'https://www.youtube.com/embed/JQnCvlfMvXY',
  },
  {
    id: 5,
    title: 'The Castles of Burgundy',
    price: 39.95,
    category: 'Familie',
    publisher: 'Ravensburger',
    language: 'Nederlands',
    players: '2-4',
    playtime: '90',
    age: '12',
    desc: 'De Loire-vallei in de 15e eeuw. Als invloedrijke edelen laten spelers hun bezittingen groeien door middel van strategische handel en commercie. Kaarten die dienen als "dobbelstenen" laten mogelijke acties zien, maar de spelers maken de uiteindelijke beslissingen. Wil je vee verhandelen of kopen, gebouwen in de stad bouwen of investeren in de wetenschappelijke vooruitgang? Er zijn vele wegen naar welvaart en prestige! De winnaar is de speler met de meeste overwinningspunten aan het eind van het spel. The Castle of Burgundy in een speciale versie. ',
    image:
      'https://cf.geekdo-images.com/VrNrk7XVU1hN0j1ZFhjcjw__imagepage/img/m0j2FZJc3cvX7ZrzSTnOd11NAaU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4934938.jpg',
    youtube: 'https://www.youtube.com/embed/aENpd1khRPA',
  },
  {
    id: 6,
    title: 'Spirit Island',
    price: 79.95,
    category: 'Familie',
    publisher: 'Greater Than Games ',
    language: 'Engels',
    players: '1-4',
    playtime: '120',
    age: '14',
    desc: 'Spirit Island is een complex en thematisch coöperatief spel over het verdedigen van je eiland, jou thuis, tegen de kolonisten van Invaders. Spelers zijn verschillende Spirits van het land, elk met zijn eigen unieke elementaire krachten. Elke beurt kiezen spelers tegelijkertijd welke van hun krachtkaarten ze spelen, en betalen daarvoor energie.\nHet gebruik van combinaties van machtskaarten die overeenkomen met de elementaire verwantschap van een geest kan extra bonuseffecten opleveren. Snellere krachten treden onmiddellijk in werking, voordat de indringers zich verspreiden en verwoesting aan richten, maar andere magie is langzamer, en vereist voorzichtigheid en planning om effectief te gebruiken. In de Spirit fase winnen geesten energie en kiezen ze hoe en of ze willen groeien om: gebruikte krachtkaarten terug te winnen, en om nieuwe kracht zoeken of hun aanwezigheid naar nieuwe delen van het eiland te verspreiden.\nSpirit Island escaleert terwijl het vordert: geesten verspreiden hun aanwezigheid naar nieuwe delen van het eiland en zoeken nieuwe en sterkere krachten, terwijl de Invaders hun kolonisatie-inspanningen opvoeren. Elke beurt vertegenwoordigt 1-3 jaar alternatieve geschiedenis.\nBij het begin van Spirit Island, vereist het winnen dat elke laatste nederzetting en stad van het bord wordt gespeeld maar, naarmate je de Invaders meer en meer angst inboezemt, wordt de overwinning eenvoudiger en: ze zullen ze wegrennen, zelfs als er een aantal nederzettingen of steden overblijven. Nederlagen komen als één Spirit wordt vernietigd, of als het eiland wordt overspoeld door de verdorring, of als de Invader-kaarten op zijn voordat je de overwinning behaald.',
    image:
      'https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__imagepage/img/py7KzNjXVOuVesFZB7LwqCbvALY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7013651.jpg',
    youtube: 'https://www.youtube.com/embed/Qj2OTrksMuY',
  },
  {
    id: 7,
    title: 'Ticket to Ride',
    price: 14.95,
    category: 'Familie',
    publisher: 'Days of Wonder',
    language: 'Nederlands',
    players: '2-5',
    playtime: '60',
    age: '8',
    desc: "Als Europese treinmaatschappij leg je in Ticket to Ride trein verbindingen aan tussen verschillende steden. Sint Petersburg- Madird, Amsterdam- Berlin , je gaat heel Europa door en je verbind de routes die de meeste punten waard zijn. Let ook goed op je opdrachten kaarten want deze zijn veel punten waard en zorg er voor dat de andere spelers je niet te snel af zijn.Ticket to Ride is een kwalitatief hoogwaardig bordspel waar de hele familie heel veel lol aan zal beleven. Bovendien wordt de topografische kennis ook even flink bij gespijkerd. Als extraatje zit bij ieder spel een code die toegang geeft tot de Ticket to Ride site waar het spel online gespeeld kan worden.",
    image:
      'https://cf.geekdo-images.com/0K1AOciqlMVUWFPLTJSiww__imagepage/img/pC5hC440R46jn4EpfdYV5rL4VOc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic66668.jpg',
    youtube: 'https://www.youtube.com/embed/MGaAPViyXo0',
  },

  {
    id: 8,
    title: 'Codenames',
    price: 19.95,
    category: 'Party',
    publisher: 'White Goblin',
    language: 'Nederlands',
    players: '2-8',
    playtime: '20',
    age: '8',
    desc: 'De bazen van twee geheime diensten kennen de identiteit van 25 agenten, maar hun ondergeschikten kennen alleen de codenamen van de andere agenten. Wie kan het eerste contact maken met al zijn collega-spionnen?\nDe bazen geven hints aan hun ondergeschikten door een woord en een getal te noemen. Zo kunnen ze bijvoorbeeld Dier 2 zeggen als 2 van hun spionnen een codenaam hebben dat een dier voorstelt. Het team overlegt vervolgens en wijst één van de kaartjes met codenamen aan. De baas geeft vervolgens aan bij welk team deze kaart hoort, zodat de anderen weten of ze de hint juist of verkeerd geïnterpreteerd hebben.\nHet team dat als eerste al hun collega\'s weet te identificeren, wint dit spannende spel. Als een team echter per ongeluk de huurmoordenaar kiest, dan verliezen ze meteen.  ',
    image:
      'https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__imagepage/img/rc_Do8f5v41nWEGcwHE1eKAkIfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2582929.jpg',
    youtube: 'https://www.youtube.com/embed/C97mCg9AxZc',
  },
  {
    id: 9,
    title: 'Captain Sonar',
    price: 44.95,
    category: 'Party',
    publisher: 'Asmodee',
    language: 'Engels',
    players: '2-8',
    playtime: '45',
    age: '14',
    desc: 'In een onderzeeboot is het essentieel dat je jouw positie niet verraadt met geluid, maar je zult toch goed moeten communiceren om de vijandelijke onderzeeër te torpederen voordat hij dat bij jou doet!\nIn dit spel worden de spelers over twee teams verdeeld die elkaars onderzeeër tot zinken willen brengen. Iedereen heeft een eigen taak, zoals het verplaatsen van de onderzeeër, de vijandelijke onderzeeër vinden door goed te luisteren naar het andere team, het laden van de torpedobuizen en jouw onderzeeër drijvende te houden.\nOmdat iedereen alleen zijn eigen stukje ziet, is een goede communicatie vereist. Alleen dan kan de kapitein namelijk op het juiste moment overgaan tot een aanval waarbij hopelijk de vijandelijke onderzeeër geraakt wordt.\nDit spel kan gespeeld worden in een ultra-spannende real-time modus, maar ook in een puzzel-achtige modus waarin er wel een beurtvolgorde gehanteerd wordt. Tevens zijn er diverse verschillende scenario\'s die zorgen voor verschillende moeilijkheidsgraden. ',
    image:
      'https://cf.geekdo-images.com/Dpu5nFJu4UUJ4Y50WyKueg__imagepagezoom/img/p23JzDsS2C5VZ1FYkAWVCVkhENU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic7069368.jpg',
    youtube: 'https://www.youtube.com/embed/Yjo4iXyDPtw',
  },
  {
    id: 10,
    title: 'Decrypto',
    price: 19.95,
    category: 'Party',
    publisher: 'Scorpion Masqué',
    language: 'Nederlands',
    players: '3-8',
    playtime: '30',
    age: '12',
    desc: 'Decrypto is een communicatiespel waarin je deel uitmaakt van een team van codekrakers.\nJouw missie: verzend geheime codes naar je teamgenoten zonder dat je tegenstanders ze onderscheppen.Ga daarom op zoek naar een manier van communiceren waarbij jouw teamgenoten jou begrijpen, maar zorg dat je communicatie goed gecodeerd is om je tegenstander te verwarren. Tegelijkertijd probeer je ook de codes van je tegenstanders te ontcijferen. Jouw team wint het spel zodra je 2 onderscheppingsfiches weet te bemachtigen. Je ontvangt 1 onderscheppingsfiche voor elke keer dat je de code van je tegenstanders weet te onderscheppen. Jouw team verliest het spel als je 2 miscommunicatie fiches hebt ontvangen. Je ontvangt 1 miscommunicatie fiche voor elke keer dat jouw team de code van je Encryptor niet weet te raden.',
    image:
      'https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__imagepage/img/txjLrQy6eZNhk1caOxfTPn54mac=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3759421.jpg',
    youtube: 'https://www.youtube.com/embed/jcM3Y9KchMs',
  },
  {
    id: 11,
    title: 'Marvel Champions',
    price: 59.95,
    category: 'Party',
    publisher: 'Fantasy Flight',
    language: 'Engels',
    players: '1-4',
    playtime: '45-90',
    age: '12',
    desc: 'Marvel Champions: The Card Game is een coöperatieve Living Card Game waarin spelers in de huid kruipen van Marvel-helden die strijden om de plannen van gemene schurken te dwarsbomen. In het spel zullen spelers een beroep doen op iconische bondgenoten, krachtige wapens en bepantsering gebruiken en verwoestende tactieken ontketenen terwijl ze vechten om de schurken van het Marvel-universum te verslaan. \nIn elk scenario van Marvel Champions: The Card Game worden de helden geconfronteerd met een krachtige schurk met snode plannen, evenals hun eigen persoonlijke vijanden die in het heldendeck kunnen worden geschud. Bij elke beurt zullen spelers moeten beslissen of ze als een superheld willen spelen en de schurk direct willen bevechten, of in hun alter ego willen veranderen om schade te herstellen, hun troepen voor te bereiden en indirect tegen de schurk te vechten (wat een interessante strategische beslissing is tijdens elke beurt). Als de helden de slechterik kunnen verslaan voordat ze hun gemene plan hebben voltooid, winnen de helden het spel. ',
    image:
      'https://cf.geekdo-images.com/kRvUgYiaOq07kC67ZK5UoQ__imagepage/img/ifaw5M-Z2eEFir0ImkbNzxMbaOk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4900321.jpg',
    youtube: 'https://www.youtube.com/embed/2HfaNyzAkvQ',
  },
];

module.exports = products;