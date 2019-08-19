import React from 'react';
export const diets = [
  {
    dietUrl: "dieta-odchudzajaca",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_9.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_5.jpg",
    },
    fullName: "Dieta odchudzająca",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 20-30%\n" +
          "Węglowodany: 30-45%\n" +
          "Tłuszcze: 30-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dla osób chcących zredukować swoją masę ciała.<br/> <br/>
          2. Dla osób zmagających się z chorobami cywilizacyjnymi: nadwaga, otyłość, cukrzyca, podwyższony cholesterol, choroby kardiologiczne.<br/> <br/>
          3. Dla wszystkich chcących odżywiać się w sposób racjonalny.<br/> <br/>
          4. Dla ludzi dbających o zdrowie i cieszących się życiem</span>
      },
    },
    menu: {
      breakfast: "Sałatka Cesar z grzanką z bagietki",
      secondBreakfast: "Koktajl z awokado i masłem orzechowym",
      dinner: "Dorsz w sosie musztardowym, mix warzyw na parze, ryż brązowy",
      tea: "Muffinki z parmezanem, cukinią i komosą",
      supper: "Aromatyczny kurczak po indyjsku",
    },
    offerDescription: "Dieta dla osób, które chcą schudnąć",
    cityDescription: {
      lodz: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
      ]},
      trojmiasto: {
        description: [
          "Dieta Odchudzająca jest przeznaczona dla osób, które nie są aktywne fizycznie, jednakże za pomocą odpowiedniego odżywiania, chciałby zredukować swoją wagę. Menu zawiera gluten oraz laktozę.",
          "W diecie odchudzającej, kluczową kwestią jest odpowiedni dobór kalorii. Właściwie skomponowane menu pozwoli nam się uporać ze zbędnymi kilogramami oraz cieszyć się wymarzoną figurą i lepszym samopoczuciem.",
          "Menu bazuje na nabiale, chudym mięsie, warzywach, owocach, jajach, nasionach roślin strączkowych, orzechach. Znajdziemy tu sporo sałatek, zapiekanek warzywnych, jogurtów i koktajli.",
          "Dieta odchudzająca pozwoli Ci uporać się z tzw. „atakami głodu”. Mniejsza ilość węglowodanów aniżeli w diecie standardowej, została tu odpowiednio rozłożona.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta Odchudzająca jest odpowiednia dla wszystkich chcących schudnąć, a także się zdrowo odchudzać. Dieta ta przeznaczona jest dla osób mało aktywnych fizycznie oraz mogących spożywać gluten i laktozę.",
          "Menu jest bogate w nabiał, chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych i orzechy. Sałatki, jogurty, koktajle i zapiekanki warzywne świetnie je uzupełniają.",
          "Dieta odchudzająca opiera się na mniejszej ilości węglowodanów. Są one tak rozłożone, by wyeliminować „napady głodu”. Wpłynie to na ustabilizowanie wagi.",
          "Dzięki diecie odchudzającej wyrobisz zdrowe nawyki żywieniowe, lepiej się poczujesz i dodatkowo schudniesz.",
        ]},
      warszawa: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla osób, które chcą schudnąć, ale nie są przy tym aktywne fizycznie. Menu zawiera produkty z glutenem i laktozą.",
          "Dieta odchudzająca opiera się na mniejszej ilości węglowodanów. Ich poziom jest jednak odpowiedni, aby wyeliminować tzw. napady głodu. Dzięki temu łatwiej będzie zgubić zbędne kilogramy.",
          "Menu jest w tym przypadku różnorodne i zawiera chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych, orzechy. Posiłki są urozmaicone o sałatki, jogurty, koktajle i zapiekanki warzywne.",
          "Dieta Odchudzająca pozwoli się Tobie przestawić na zdrowy tryb życia i odpowiednie odżywianie. Dzięki temu, walka o wymarzoną figurę będzie dużo prostsza.",
        ]},
      bydgoszcz: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla osób, które chcą schudnąć, ale nie są przy tym aktywne fizycznie. Menu zawiera produkty z glutenem i laktozą.",
          "Dieta odchudzająca opiera się na mniejszej ilości węglowodanów. Ich poziom jest jednak odpowiedni, aby wyeliminować tzw. napady głodu. Dzięki temu łatwiej będzie zgubić zbędne kilogramy.",
          "Menu jest w tym przypadku różnorodne i zawiera chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych, orzechy. Posiłki są urozmaicone o sałatki, jogurty, koktajle i zapiekanki warzywne.",
          "Dieta Odchudzająca pozwoli się Tobie przestawić na zdrowy tryb życia i odpowiednie odżywianie. Dzięki temu, walka o wymarzoną figurę będzie dużo prostsza.",
        ]},
      krakow: {
        description: [
          "Dieta Odchudzająca jest odpowiednia dla wszystkich osób mało aktywnych fizycznie, które chcą schudnąć. Menu zawiera laktozę oraz gluten.",
          "Dieta odchudzająca pozwala wyeliminować „napady głodu”, dzięki odpowiednio rozłożonym węglowodanom. Wpływa to na zredukowanie zbędnych kilogramów.",
          "Menu składa się z nabiału, chudego mięsa, warzyw, owoców, jaj, nasion roślin strączkowych, orzechów. W jadłospisie znajduje się również sporo sałatek, jogurtów, koktajli oraz zapiekanek warzywnych.",
          "Dieta odchudzająca pozwoli przestawić się na zdrowy tryb życia. Dzięki niej zaczniesz chudnąć. Wszystko to jest możliwe za sprawą odpowiedniego doboru kalorii.",
        ]},
      poznan: {
        description: [
          "Dieta Odchudzająca będzie odpowiednia dla osób, które nie są aktywne fizycznie, ale chcą schudnąć. Menu w tym przypadku zawiera gluten i laktozę, a więc będzie nieodpowiednie dla borykających się z nietolerancjami pokarmowymi.",
          "Jadłospis w tym przypadku zawiera mniejszą ilość węglowodanów niż dieta standardowa. Menu składa się z nabiału, chudego mięsa, warzyw, owoców, jaj, nasion roślin strączkowych, orzechów. Znajdziemy tu sporo sałatek, jogurtów, koktajli itp.",
          "Dieta odchudzająca pozwala wyeliminować „napady głodu”, a w efekcie ustabilizować wagę. Jednocześnie masz pewność, że dostarczasz organizmowi odpowiednią ilość kalorii.",
          "Dieta odchudzająca pozwoli Tobie przestawić się na zdrowy tryb życia i właściwe odżywianie. Uporasz się w końcu z nadprogramowymi kilogramami i zyskasz wymarzoną figurę.",
        ]},
      torun: {
        description: [
          "Dieta skierowana jest dla osób mniej aktywnych fizycznie, którzy chcą zredukować swoją masę ciała, oraz tych którzy bez przeszkód mogą spożywać gluten czy laktozę.",
          "Dieta odchudzająca zawiera mniejszą ilość węglowodanów niż dieta standardowa, jednak poziom ich jest tak rozłożony, aby zapobiegać “atakom głodu”, co w konsekwencji pomaga ustabilizować czy zredukować masę ciała.",
          "Dieta Odchudzająca bogata jest w nabiał, chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Znajdziemy w niej większą ilość sałatek, jogurtów, koktajli oraz zapiekanek warzywnych.",
          "Dieta odchudzająca jest przeznaczona dla osób mało aktywnych, które nie uprawiają regularnie sportu. Dzięki niej zyskasz wymarzoną figurę i przestawisz się na zdrowy tryb życia. Od teraz, będziesz dostarczać organizmowi jedynie pełnowartościowe składniki odżywcze.",
        ]},
      wroclaw: {
        description: [
          "Dieta odchudzająca jest dedykowana wszystkim osobom, które nie są aktywne fizyczne, ale pragną zgubić zbędne kilogramy. Posiłki w tym menu zawierają gluten oraz laktozę. ",
          "Dania składają się z mniejszej ilości węglowodanów (aniżeli w przypadku diety standardowej), jednak są odpowiednio rozłożone, dzięki czemu pozbędziesz się „napadów głodu”.",
          "Dieta Odchudzająca jest bogata w  nabiał, chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. W codziennym menu znajduje się też sporo sałatek, jogurtów, koktajli oraz zapiekanek warzywnych.",
          "Dieta odchudzająca, dzięki prawidłowemu doborowi kalorii pozwoli Ci ustabilizować czy zredukować masę ciała. Dzięki niej zyskasz wymarzoną figurę i przestawisz się na zdrowy tryb życia.",
        ]},
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-paleo",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_10.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_7.jpg",
    },
    fullName: " Dieta Paleo",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 19-35%\n" +
          "Węglowodany: 22-40%\n" +
          "Tłuszcze: 28-47%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dla sportowców oraz osób aktywnych fizycznie. <br/> <br/>
          2. Osób chorujących na celiakię oraz wszystkich z nietolerancją glutenu <br/> <br/>
          3. Dla osób nie tolerujących laktozy, i/ czy kazeiny <br/>
          4. Osób chorych na Hashimoto <br/> <br/>
          5. Osób z insulino opornością</span>
      },
    },
    menu: {
      breakfast: "Jajecznica z krewetkami i awokado",
      secondBreakfast: "Kawowe ptasie mleczko z malinami",
      dinner: "Kokosowy kurczak z orzechami nerkowca",
      tea: "Rolada ze szpinaku i łososia",
      supper: "Pulpety z chorizo w hiszpańskim sosie z pieczonymi warzywami",
    },
    offerDescription: "Dieta białkowo-tłuszczowa dla osób, które nie tolerują glutenu i roślin strączkowych",
    cityDescription: {
      lodz: {
        description: [
          "Dieta Paleo (czyli człowieka „Paleolitu”) to dieta wysokobiałkowa. Jest ona przeznaczona dla tych, którzy chcą bezpiecznie schudnąć. Bazuje ona na naturalnych i nieprzetworzonych produktach.",
          "Jest to dieta wysokobiałkowa, o sporej zawartości tłuszczu, a mniejszej ilości węglowodanów. Menu jest bogate w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Zawiera ono sporo mięsa, ryb, jaj oraz owoców, warzyw, orzechów i pestek.",
          "Dieta Paleo jest odpowiednia dla osób uczulonych na gluten. Eliminuje wszelką żywność przetworzoną, zboża, rośliny strączkowe, jak również nabiał (produkty mleczne).",
          "Tego rodzaju menu pozwoli Ci wyrobić właściwe i zdrowe nawyki żywieniowe, a w efekcie utracić zbędne kilogramy. Przestawisz się na zdrowy tryb życia i zadbasz o gospodarkę lipidową oraz insulinową swojego organizmu.",
        ]
      },
      trojmiasto: {
        description: [
          "Dieta Paleo bazuje na prostym i jasnym jadłospisie. Menu jest wysokobiałkowe, o sporej zawartości tłuszczów, a deficytowe w węglowodany. Paleo to dieta bezglutenowa.",
          "Kluczowe jest tutaj wyeliminowanie żywności przetworzonej, zboża, produktów mlecznych, roślin strączkowych. Dieta Paleo zawiera duże ilości żelaza hemowego, błonnika oraz kwasów tłuszczowych omega 3.",
          "Menu kładzie nacisk na wszelkie mięsne źródła białka, ryby i jaja. Dania zawierają również owoce i warzywa oraz orzechy i pestki.",
          "Dieta Paleo pozwoli Ci zacząć się zdrowo i odpowiednio odżywiać. Przy okazji zadbasz o gospodarkę lipidową oraz insulinową swojego organizmu. Dodatkowym efektem będzie zredukowanie wagi ciała.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta Paleo, czyli tzw. „jadłospis człowieka pierwotnego” skupia się na wyrobieniu odpowiednich nawyków żywieniowych. Bazuje ona przede wszystkim na naturalnych produktach.",
          "Menu zawiera spore ilości żelaza hemowego, błonnika, kwasów tłuszczone omega 3. Eliminuje ona gluten, produkty przetworzone i modyfikowane, zboża, rośliny strączkowe, produkty mleczne.",
          "Dieta Paleo jest wysokobiałkowa. Posiłki zawierają sporą ilość tłuszczów oraz mało węglowodanów. Dania składają się przede wszystkim z mięsa, ryb, jaj, warzyw, owoców, orzechów i pestek",
          "Takie odżywianie pozwoli Ci zadbać o odpowiednią gospodarkę lipidową i insulinową organizmu oraz przestawić się na zdrowy tryb życia. Dodatkowo, zredukujesz swoją wagę.",
        ]},
      bydgoszcz: {
        description: [
          "Dieta Paleo to typowa dieta wysokobiałkowa. Posiłki wchodzące w skład menu zawierają sporo tłuszczu, zaś mało węglowodanów.",
          "Menu wyklucza gluten. Eliminuje ono również żywność przetworzoną, zboża, rośliny strączkowe oraz produkty mleczne.",
          "Dieta Paleo jest bogata w mięsne źródła białka, ryby, jaja, owoce, warzywa, orzechy i pestki. Posiłki zawierają sporą ilość żelaza hemowego, błonnika oraz kwasów tłuszczowych omega 3.",
          "Przechodząc na dietę Paleo, a więc na dietę „człowieka Paleolitu”, możesz wyrobić zdrowe nawyki żywieniowe. Dodatkowo zadbasz o gospodarkę lipidową oraz insulinową organizmu. Efektem będzie reedukacja wagi i uzyskanie wymarzonej figury.",
        ]
      },
      krakow: {
        description: [
          "Dieta Paleo (czyli tzw. jadłospis człowieka „Paeolitu”) jest typową dietą wysokobiałkową, o sporej zawartości tłuszczu. Ogranicza ona węglowodany.",
          "Jest ona skierowana do wszystkich osób, które chcą zadbać o zdrowe nawyki jedzeniowe oraz o gospodarkę lipidową i insulinową organizmu. Dodatkowo zredukujesz swoją wagę i zyskasz wymarzoną figurę.",
          "Menu opiera się na mięsie, rybach, jajach, warzywach, owocach, orzechach i pestkach. Menu eliminuje gluten, żywność przetworzoną, produkty mleczne oraz sztuczne składniki.",
          "Dieta Paleo bogata jest w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Umożliwia ono zdrowe i smaczne odżywianie się.",
        ]
      },
      poznan: {
        description: [
          "Dieta Paleo, czyli tzw. jadłospis człowieka „Paleolitu”, bazuje na prostym menu eliminującym gluten, które pozwoli na wyrobienie odpowiednich nawyków żywieniowych.",
          "Jest to dieta wysokobiałkowa, zawierająca sporo tłuszczów. Posiłki posiadają ograniczoną ilość węglowodanów. Taki jadłospis przyczynia się do poprawy gospodarki lipidowej i insulinowej Twojego organizmu.",
          "Dieta Paleo jest obfita w mięsa, ryba, jaja, owoce, warzywa, orzechy i pestki. Jadłospis zawiera żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3.",
          "Żywność przetworzona, zboża, rośliny strączkowe i produkty mleczne są tu wyeliminowane. Dieta Paleo skierowana jest do osób, które są aktywnę i chcą zredukować jednocześnie tkankę tłuszczową.",
        ]
      },
      torun: {
        description: [
          "Dieta Paleo bazuje na jadłospisie człowieka „Paeolitu”. Typowa jej wersja jest zdecydowanie dietą wysokobiałkową, o sporej zawartości tłuszczu, a deficytową w węglowodany.",
          "Dieta Paleo bogata jest w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Dieta ta nie zawiera glutenu. Eliminuje wszelką żywność przetworzoną, zboża, rośliny strączkowe, jak również nabiał (tu w rozumieniu produktów mlecznych).",
          "Na zielonej liście produktów znajdują się wszelkie mięsne źródła białka, ryby i oraz jaja . Jadłospis uzupełniają owoce i warzywa oraz wszelkiego rodzaju orzechy i pestki.",
          "Dieta Paleo pozwala na wyrobienie odpowiednich nawyków żywieniowych, czego efektem będzie utrata zbędnych kilogramów i wymarzona figura. Dzięki tej diecie, zadbasz o gospodarkę lipidową oraz insulinową swojego organizmu.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Paleo jest dedykowana wszystkim osobom, które chcą zadbać o gospodarkę lipidową oraz insulinową. Pozwoli ona Tobie wyrobić zdrowe nawyki żywieniowe.",
          "Menu bazuje na tak zwanym jadłospisie człowieka „Paeolitu”. Dieta Paleo jest dietą wysokobiałkową, zawierającą sporo tłuszczów i mało węglowodanów.",
          "Wszystkie posiłki są bogate jest w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. W menu królują: mięso, ryby, jaja, owoce, warzywa, orzechy i pestki.",
          "Paleo eliminuje gluten oraz wyklucza wszelkiego rodzaju żywność przetworzoną, zboża, rośliny strączkowe i nabiał (produkty mleczne). Dzięki tej diecie, utracisz zbędne kilogramy i będziesz się cieszył lepszym samopoczuciem.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-samuraja",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_12.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_4.jpg",
    },
    fullName: "Dieta Samuraja",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 25-35% \n" +
          "Węglowodany: 40-50% \n" +
          "Tłuszcz: 25-30% "
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dieta Samuraja jest przeznaczona dla ludzi aktywnych fizycznie o podwyższonym wskaźniku zużycia energii, którzy posiłki węglowodanowe włączają do swojego jadłospisu przed i po treningu. <br/> <br/>
2. Osób chorujących na celiakię oraz wszystkich z nietolerancją glutenu.  <br/> <br/>
3. Dla osób nie tolerujących laktozy, i/ czy kazeiny.  <br/> <br/>
4. Osób obciążonych chorobami metabolicznymi i autoimmunologicznymi.</span>
      },
    },
    menu: {
      breakfast: "Bezglutenowa kutia makowa z bakaliami",
      secondBreakfast: "Sałatka z wędzonym kurczakiem na kaszy jaglanej",
      dinner: "Nuggetsy z kurczaka w płatkach kukurydzianych z pieczonymi ziemniakami i surówką z kapusty pekińskiej",
      tea: "Zupa meksykańska",
      supper: "Pikantny dorsz po tajsku z warzywami z ryżem brązowym długo-ziarnistym",
    },
    offerDescription: "Dieta dla osób aktywnych, które nie tolerują glutenu i kazeiny",
    cityDescription: {
      lodz: {
        description: [
          "Dieta Samuraja jest przeznaczona dla osób aktywnych fizycznie. Stanowi ona połączenie diety Paleo i diety sportowej na masę. W tym menu mamy większą ilość węglowodanów niż w Paleo.",
          "Posiłki z diety Samuraja nie zawierają glutenu (tzn. ryżu, kasz, makaronów i pseudo-zbóż) oraz laktozy (tzn. produktów mlecznych). Menu przykuwa uwagę większą ilością mięsa. Posiłki są obfite również w jaja, ryby, warzywa i owoce.",
          "Do diety Samuraja zostały wprowadzone rośliny strączkowe, które stanowią ciekawe urozmaicenie. Smaczne, zdrowe i konkretne posiłki na pewno przypadną do gustu każdej osobie, która lubi się ruszać.",
          "Takie menu będzie idealne, dla osób cierpiących nietolerancje pokarmowe, ale chcących dostarczać organizmowi pełnowartościowych składników odżywczych. Dieta Samuraja jest idealną dietą dla osób ćwiczących, którzy pragną, aby ich sylwetka wyglądała jeszcze lepiej.",
        ]
      },
      trojmiasto: {
        description: [
          "Dieta Samuraja jest odpowiednia dla osób aktywnych fizycznie, które borykają się z nietolerancjami pokarmowymi. Menu jest pozbawione glutenu oraz laktozy.",
          "Dieta Samuraja czerpie z diety Paleo oraz sportowej na masę. W posiłkach znajduje się więcej węglowodanów aniżeli w Paleo.",
          "Dania składają się z mięsa, ryb, jaj, owoców, warzyw, roślin strączkowych. Takie menu pozwoli Ci wyrobić odpowiednie nawyki jedzeniowe.",
          "Przechodząc na dietę Samuraja, masz gwarancję, że do Twojego organizmu będą dostarczane pełnowartościowe składniki odżywcze, które zaspokoją dzienny bilans energetyczny. Zdrowe odżywianie jest możliwe także przy nietolerancjach pokarmowych!",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta Samuraja przeznaczona jest dla osób uprawiających sport i aktywnych fizycznie. Eliminuje ona gluten oraz laktozę, więc będzie idealna dla wszystkich zmagających się z nietolerancjami pokarmowymi.",
          "Dieta Samuraja czerpie z diety Paleo i sportowej na masę. Posiłki są wzbogacone o większą ilość węglowodanów (aniżeli w Paleo). Menu będzie idealne dla osób, lubiących mięso.",
          "Dania zawierają również ryby, warzywa, owoce, jaja i rośliny strączkowe. Taka różnorodność gwarantuje zdrowe i smaczne posiłki.",
          "Posiłki są tak komponowane, by dostarczać organizmowi pełnowartościowe składniki odżywcze, nawet przy alergiach pokarmowych i niemożliwości spożywania wielu produktów.",
        ]},
      bydgoszcz: {
        description: [
          "Dieta Samuraja to idealna opcja dla osób uczulonych na laktozę oraz gluten. Jest ona dedykowana tym, którzy chcą się zdrowo odżywiać i są przy tym aktywni fizycznie.",
          "Dieta Samuraja to połączenie diety Paleo oraz sportowej na masę. Posiłki zostały wzbogacone o większą ilość węglowodanów.",
          "Menu spodoba się osobom, lubiącym mięso. Obfituje ono również w ryby, warzywa, owoce i jaja. Rośliny strączkowe stanowią ciekawe urozmaicenie, nadające daniom inny smak.",
          "Dieta Samuraja udowadnia, że nawet zmagając się z nietolerancjami pokarmowymi, można dostarczać organizmowi pełnowartościowych składników odżywczych.",
        ]
      },
      krakow: {
        description: [
          "Dieta Samuraja jest pozbawiona glutenu i laktozy, a więc idealnie sprawdzi się w przypadku osób zmagających się z nietolerancjami pokarmowymi. Dieta ta jest dedykowana osobom aktywnych fizycznie.",
          "Dieta Samuraja to połącznie diety Paleo i Sportowej na Masę. Menu opiera się na większej ilości węglowodanów (niż w Paleo). Posiłki są bogate w mięso, ryby, warzywa, owoce, jaja i rośliny strączkowe.",
          "Dzięki takiemu sposobowi odżywiania się, organizm otrzymuje pełnowartościowe składniki odżywcze, nawet przy braku możliwości spożywania wielu produktów.",
          "Dieta Samuraja będzie idealna dla wszystkich osób, które lubią menu bogate w mięso i chcą się zdrowo odżywiać.",
        ]
      },
      poznan: {
        description: [
          "Dieta Samuraja jest perfekcyjna dla osób niemogących spożywać glutenu i laktozy. Wpisze się ona w potrzeby osób aktywnych fizycznie.",
          "Menu zawiera sporą ilość mięsa, ryb, jaj, warzyw i owoców; a ponadto jest uzupełnione roślinami strączkowymi. Dieta Samuraja czerpie z diety Paleo oraz ze sportowej na masę.",
          "Jadłospis został wzbogacony i większą ilość węglowodanów, aniżeli w przypadku Paleo. Takie menu udowadnia, że zdrowe odżywianie jest możliwe nawet w przypadku nietolerancji pokarmowych.",
          "Dieta Samuraja dostarcza organizmowi pełnowartościowych składników odżywczych. Menu jest prawidłowo zbilansowane i pokrywa dzienne zapotrzebowanie energetyczne.",
        ]
      },
      torun: {
        description: [
          "Dieta Samuraja to mieszanka diety Paleo i Sportowej na Masę. Wzbogacona ona została o znacznie większą ilość węglowodanów niż w diecie Paleo, ale nadal pozbawionych glutenu ( ryżu, kasz, makaronów, pseudo-zbóż).",
          "Nowością jest wprowadzenie do menu roślin strączkowych. Menu obfite jest również w jaja, mięso, ryby, warzywa i owoce. W diecie Samuraja nie znajdziemy również produktów mlecznych.",
          "Dieta ta została całkowicie pozbawiona laktozy. Polecana jest dla wszystkich osób aktywnych fizycznie, którzy lubią trochę większą ilość mięsa w diecie, a także dla osób, którzy chcą zdrowo się odżywiać, a nie mogą spożywać glutenu czy laktozy.",
          "Dzięki niej możliwe jest dostarczanie organizmowi pełnowartościowych składników odżywczych, nawet przy różnego rodzaju nietolerancjach pokarmowych.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Samuraja jest odpowiednia dla wszystkich osób, które są aktywne fizycznie i chcą się zdrowo oraz smacznie odżywiać, ale cierpią na nietolerancje pokarmowe.",
          "Posiłki są pozbawione laktozy oraz glutenu (ryż, kasza, makarony, pseudo-zboża). Menu udowadnia jednak, że możliwe jest dostarczenie organizmowi pełnowartościowych składników odżywczych, nawet przy alergiach pokarmowych.",
          "Dieta Samuraja to połączenie diety Paleo oraz diety sportowej na masę. Menu zostało wzbogacone o większą ilość węglowodanów.",
          "W diecie Samuraja posiłki składają się z mięsa, ryb, warzyw, owoców, jajek. Rośliny strączkowe stanowią tu ciekawe i smaczne urozmaicenie.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-sportowa-na-mase",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_12.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_4.jpg",
    },
    fullName: "Dieta sportowa na masę",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 25-30% \n" +
          "Węglowodany: 40-55% \n" +
          "Tłuszcze: 25-30%"
      },
      2: {
        question: "Dla kogo?",
        answer: "Dieta skierowana do osób, które aktywnie uprawiają sport i pragną zwiększyć masę mięśniową, a nie maja czasu ani wiedzy potrzebnej do przygotowania odpowiednio zbilansowanych posiłków."
      },
    },
    menu: {
      breakfast: "Jajecznica z krewetkami, pomidory, pieczywo pełnoziarniste.",
      secondBreakfast: "Koktajl jogurtowy na bazie awokado i masła orzechowego",
      dinner: "Marokańskie pulpeciki z kurczaka z ziemniaczanymi krokietami ze szpinakiem",
      tea: "Babeczki mięsne z sosem imbirowo – pomarańczowym",
      supper: "Naleśniki owsiane z białym serem, miodem i orzechami.",
    },
    offerDescription: "Dieta dla osób chcących zwiększyć masę mięśniową",
    cityDescription: {
      lodz: {
        description: [
          "Dieta sportowa na masę jest przeznaczona dla wszystkich osób, które są zmotywowane do tego, by zbudować swoją masę mięśniową i \n" +
          "które intensywnie trenują na siłowni.",
          "Budowanie masy mięśniowej to proces długotrwały, w którym liczy się odpowiednia strategia. Zwiększenie ilości spożywanych kalorii musi iść z parze z odpowiednim planem treningowym, który pomoże Ci dobrać specjalista.",
          "W diecie na masę kluczowe są tzw. dobre kalorie, dobre tłuszcze i dobre węglowodany. Pochodzą one z pełnowartościowych i nieprzetworzonych produktów. Wszystkie posiłki z menu są skomponowane według tych wytycznych.",
          "Składniki są łączone w taki sposób, by wpływały na zwiększenie masy mięśniowej. Dieta sportowa na masę, podobnie jak dieta Samuraja, jest bogata w mięso, ryby oraz jaja.",
        ]
      },
      trojmiasto: {
        description: [
          "Dieta Sportowa na masę jest odpowiednia dla wszystkich osób, którym zależy na wyrobieniu masy mięśniowej.",
          "Zwiększanie masy mięśniowej jest procesem, w którym dieta musi iść w parze z odpowiednio i profesjonalnie dobranym planem treningowym.",
          "Istotną kwestią jest tu zwiększenie ilość spożywanych kalorii. Dieta sportowa na masę bazuje na dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach- pochodzą one z produktów nieprzetworzonych.\n" +
          "\n",
          "Posiłki składają się z mięsa, ryb, jaj (podobnie jak w diecie Samuraja). Składniki są ze sobą prawidłowo połączone, tak by przybliżały Cię do celu, jakim jest zwiększenie masy mięśniowej.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta sportowa na masę idealnie wpisuje się w potrzeby osób, które chcą uwydatnić swoją masę mięśniową i zadbać o odpowiednie kształty.",
          "Samo budowanie masy mięśniowej to długotrwały proces. Do sukcesu konieczny jest również odpowiednio dobrany plan treningowy. Zwiększenie ilości spożywanych kalorii musi iść w parze z wysiłkiem fizycznym.",
          "Dieta Sportowa na masę posiada jasny cel. Składniki są łączone tak, by zbudować masę mięśniową. Menu jest bogate w mięso, ryby i jaja (podobnie jak dieta Samuraja) i będzie odpowiadało wszystkim, lubiącym konkretne potrawy.\n" +
          "\n",
          "Kluczowe są tutaj dobre kalorie, dobre tłuszcze oraz dobre węglowodany. Znajdziemy je w nieprzetworzonych, pełnowartościowych produktach.\n" +
          "\n",
        ]},
      warszawa: {
        description: [
          "Dieta Sportowa na masę jest przeznaczona dla wszystkich tych, którzy pragną poprawić swoją rzeźbę poprzez zwiększenie masy mięśniowej.",
          "Menu jest bogate w mięso, ryby i jaja (podobnie jak w diecie Samuraja). Posiłki bazują na tzw. dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach,które pochodzą z pełnowartościowych i zdrowych produktach.",
          "Głównym celem diety sportowej jest sprawienie, by nastąpił odpowiedni przyrost masy mięśniowej. W tym celu, wszystkie składniki w menu są odpowiednio rozłożone i ze sobą połączone.",
          "Podkreślamy, że budowanie masy mięśniowej oprócz większej ilości spożywanych kalorii, opiera się również na odpowiedniej strategii treningowej. W tym przypadku dieta musi iść w parze z właściwą aktywnością fizyczną.",
        ]
      },
      bydgoszcz: {
        description: [
          "Dieta Sportowa na masę jest przeznaczona dla wszystkich osób, które chcą zwiększyć swoją masę mięśniową i wyrobić odpowiednią muskulaturę.",
          "Menu bazuje na dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach. Pochodzą one ze zdrowych, pełnowartościowych oraz nieprzetworzonych produktów.",
          "Posiłki są bogate w mięso, ryby i jaja (podobnie jak w diecie Samuraja). Odpowiednie połączenie składników gwarantuje, że dania przypadną Ci do gustu, jednocześnie przybliżając do celu, jakim jest zwiększenie masy mięśniowej.",
          "Pamiętaj, że budowanie masy mięśniowej to proces wymagający konsekwencji. Odpowiednie odżywianie musi iść w parze z przemyślana strategią treningową.",
        ]
      },
      krakow: {
        description: [
          "Dieta sportowa na masę jest odpowiednia dla wszystkich tych, którzy chcą zwiększyć swoją masę mięśniową oraz uwydatnić mięśnie.",
          "Menu jest nakierowane na ten cel. Opiera się ono na mięsie, rybach i jajach (podobnie jak w diecie Samuraja). Wszystkie składniki są odpowiednio zbilansowane i połączone ze sobą.",
          "Dieta Sportowa na masę bazuje na dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach. Składniki te pochodzą z nieprzetworzonych i pełnowartościowych produktów.\n" +
          "\n",
          "Budowanie masy mięśniowej to proces wymagający konsekwencji. Do realizacji celu, niezbędne jest połączenie diety oraz odpowiedniego planu treningowego.",
        ]
      },
      poznan: {
        description: [
          "Dieta Sportowa na masę będzie odpowiednia dla wszystkich osób, chcących popracować nad swoją muskulaturą, czyli zwiększyć masę mięśniową.",
          "Całe menu opiera się na tzw. dobrych kaloriach, dobrych tłuszczach oraz dobrych węglowodanach. Składniki te pochodzą wyłącznie z pełnowartościowych i nieprzetworzonych produktów.",
          "Jadłospis zawiera dużą ilość mięsa, ryb i jaj (podobnie jak w diecie Samuraja). Dania zawierają sporą ilość kalorii, gdyż mają za zadanie przyczynić się do budowy masy mięśniowej.",
          "Budowanie masy mięśniowej to proces długotrwały, wymagający konsekwencji. Niezwykle istotny jest tutaj odpowiednio dobrany plan treningowy, który musi iść w parze z dietą.",
        ]
      },
      torun: {
        description: [
          "Dieta sportowa na masę jest skierowana do osób chcących zwiększyć swoją masę mięśniową.",
          "W diecie tej staramy się w odpowiedni sposób łączyć i wykorzystywać składniki w jadłospisie tak, aby były ukierunkowane na zwiększenie masy mięśniowej Klienta. Podobnie jak dieta Samuraja bogata jest w mięso, ryby oraz jaja.",
          "Warto pamiętać, że budowanie masy mięśniowej to nie tylko zwiększenie ilości spożywanych kalorii, ale przede wszystkim przemyślana strategia treningowa. Przy budowaniu masy mięśniowej dieta powinna współgrać z planem treningowym.",
          "Dieta Sportowa na masę bazuje na tzw. dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach, które pochodzą z pełnowartościowych i nie przetworzonych produktów.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Sportowa na masę na masę będzie idealną opcją dla wszystkich osób, które pragną stworzyć odpowiednią rzeźbę oraz zwiększyć swoją masę mięśniową.",
          "W diecie sportowej na masę najistotniejsze są tzw. dobre kalorie, tłuszcze i węglowodany, Dieta sportowa na masę bazuje na tzw. dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach. Składniki te pozyskuje się z nieprzetworzonych, pełnowartościowych produktów.",
          "Posiłki są ukierunkowane na zwiększenie masy mięśniowej, a więc składają się z odpowiednio połączonych i dobranych produktów. Dieta sportowa na masę jest bogata jest w mięso, ryby oraz jaja (podobnie jak dieta Samuraja).",
          "Podkreślamy, że budowanie masy mięśniowej nie opiera się wyłącznie na diecie i na zwiększaniu ilości spożywanych kalorii, ale również na odpowiedniej strategii treningowej. Dieta i ćwiczenia muszą iść tu w parze.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-sportowa-na-redukcje",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_14.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_5.jpg",
    },
    fullName: "Dieta sportowa na redukcję",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 25-30% \n" +
          "Węglowodany: 40-45% \n" +
          "Tłuszcze: 25-30%"
      },
      2: {
        question: "Dla kogo?",
        answer: "Dieta skierowana do osób, które w miarę aktywnie uprawiają sport i pragną zredukować tkankę tłuszczową, a nie maja czasu ani wiedzy potrzebnej do przygotowania odpowiednio zbilansowanych posiłków."
      },
    },
    menu: {
      breakfast: "Sałatka Cesar z grzanką z bagietki",
      secondBreakfast: "Koktajl z awokado i masłem orzechowym",
      dinner: "Pierś z kurczaka grillowana w ziołach, ryż brązowy z warzywami na parze",
      tea: "Sałatka z pieczoną dynia, szpinakiem, suszonymi pomidorami i fetą.",
      supper: "Naleśniki owsiane z białym serem, miodem i orzechami.",
    },
    offerDescription: "Dieta dla osób aktywnych chcących zredukować tkankę tłuszczową",
    cityDescription: {
      lodz: {
        description: [
          "Dieta sportowa na redukcję jest przeznaczona dla wszystkich tych, którzy chcą zrzucić zbędne kilogramy i pozbyć się nadmiaru tkanki tłuszczowej. W okresie redukcji tkanki tłuszczowej bardzo duże znaczenie ma dobrze zbilansowana dieta, oparta na odpowiednich składnikach.",
          "Sama redukcja tkanki tłuszczowej jest procesem długotrwałym i bardzo istotną kwestią jest bezwzględne trzymanie się odpowiedniego zapotrzebowania kalorycznego. ",
          "Dieta na redukcję opiera się na dostarczaniu organizmowi większej ilości białka, przy jednoczesnym ograniczeniu węglowodanów.",
          "Białko w zwiększonych proporcjach „podkręca metabolizm”, spalając tkankę tłuszczową, ale chroniąc przy tym mięśnie. Tym samym, budowanie odpowiedniej figury, powinno przebiegać bezproblemowo.",
        ]
      },
      trojmiasto: {
        description: [
          "Dieta sportowa na redukcję jest przeznaczona dla osób, które chcą pozbyć nadmiaru tkanki tłuszczowej, ale jednocześnie zależy im na przeciwdziałaniu „spalaniu” mięśni.",
          "Menu pozwoli zrzucić zbędne kilogramy. Zawiera ono mniejszą ilość węglowodanów i większą białka, które ma za zadanie „podkręcić metabolizm” i jednocześnie nie dopuścić do „spalania mięśni”.",
          "Dieta Sportowa na redukcję ułatwia wcielenie w życie zasad zdrowego odżywiania, które wpłyną na lepsze samopoczucie oraz kondycję.",
          "Proces redukcji tkanki tłuszczowej jest długotrwały i wymagający. Kluczowe jest tu trzymanie się odpowiedniego zapotrzebowania kalorycznego.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta Sportowa na redukcję jest przeznaczona dla osób aktywnych fizycznie. Pomoże ona zrzucić zbędne kilogramy oraz pozbyć się tkanki tłuszczonej.",
          "Menu jest odpowiednio zbilansowane. Posiłki dostarczają organizmowi wszystkich niezbędnych makroskładników. Zawierają one więcej białka i mniej węglowodanów.",
          "Zwiększona ilość białka w diecie sportowej na redukcję napędza metabolizm i jednocześnie chroni przed spalaniem mięśni. Dzięki temu, będziesz tracił tkankę tłuszczową, a nie mięśnie.\n" +
          "\n",
          "Dieta sportowa na redukcję powinna iść w parze z odpowiednim treningiem, gdyż tylko wtedy będzie przynosiła odpowiednie i oczekiwane rezultaty. W żywieniu kluczowe jest trzymanie się wymaganego zapotrzebowania kalorycznego.",
        ]},
      warszawa: {
        description: [
          "Dieta sportowa na redukcję będzie idealna dla osób, których celem jest pozbycie się zbędnej tkanki tłuszczowej i dodatkowych kilogramów.",
          "Menu w przypadku tej diety charakteryzuje się zwiększoną ilością białka i ograniczonymi węglowodanami. Wszystko opiera się w niej na zasadach zdrowego odżywiania się.",
          "Większa ilość białka w diecie sportowej na redukcję służy przede wszystkim podkręceniu metabolizmu oraz ochronie przed tzw. spalaniem mięśni. W efekcie będziesz gubił zbędną tkankę tłuszczową, a nie masę mięśniową.",
          "Dieta Sportowa na redukcję pomoże Ci pozbyć się nadmiaru tkanki tłuszczowej, co jest procesem długotrwałym. Niezwykle istotną kwestią jest tu trzymanie się odpowiedniego zapotrzebowania kalorycznego.",
        ]
      },
      bydgoszcz: {
        description: [
          "Dieta sportowa na redukcję jest przeznaczona dla wszystkich tych, którzy chcą zrzucić zbędne kilogramy i pozbyć się nadmiaru tkanki tłuszczowej.",
          "Sama redukcja tkanki tłuszczowej jest procesem długotrwałym i bardzo istotną kwestią jest bezwzględne trzymanie się odpowiedniego zapotrzebowania kalorycznego.",
          "Dieta Sportowa na redukcję opiera się na dostarczaniu organizmowi większej ilości białka, przy jednoczesnym ograniczeniu węglowodanów.",
          "Białko w zwiększonych proporcjach „podkręca metabolizm”, spalając tkankę tłuszczową, ale chroniąc przy tym mięśnie. Tym samym, budowanie odpowiedniej figury i kształtowanie jej będzie przebiegać sprawniej.",
        ]
      },
      krakow: {
        description: [
          "Dieta Sportowa na redukcję będzie odpowiednia dla osób, które chcą pozbyć się nadmiaru tkanki tłuszczowej. Umożliwia ona również zrzucenie zbędnych kilogramów.",
          "Menu opiera się na większej ilości białka i mniejszej węglowodanów. Białko ma za zadanie „podkręcić metabolizm”.",
          "Zwiększenie ilości białka i „podkręcenie metabolizmu” pozwoli pozbywać się nadmiaru tkanki tłuszczowej, zaś uchroni przez „spalaniem” mięśni.",
          "Dieta sportowa na redukcję wymaga konsekwencji w działaniu. Kluczowe jest w niej odpowiednie zapotrzebowanie kaloryczne. Sam proces „spalania” tkanki tłuszczowej i budowania masy mięśniowej jest długotrwały.",
        ]
      },
      poznan: {
        description: [
          "Dieta Sportowa na redukcję jest odpowiednia dla wszystkich chcących schudnąć. Dzięki niej pozbędziesz się nadmiaru tkanki tłuszczowej i zrzucisz dodatkowe kilogramy.",
          "Menu opiera się na większej ilości białka, które ma za zadanie podkręcić metabolizm. Proces ten przyczynia się do redukcji tkanki tłuszczowej i chroni jednocześnie organizm przed „spalaniem” mięśni.",
          "Dieta sportowa na redukcję ogranicza węglowodany. Jest ona oparta o zasady zdrowego odżywiania, które zostały lekko zmodyfikowane na rzecz większej ilość białka, a mniejszej węglowodanów.",
          "Proces redukcji tkanki tłuszczowej jest długotrwały i kluczowe jest tu trzymanie się odpowiedniego zapotrzebowania kalorycznego.",
        ]
      },
      torun: {
        description: [
          "Dieta Sportowa na redukcję charakteryzuje się tym, że przeznaczona jest dla osób, które chcą pozbyć się nadmiaru tkanki tłuszczowej oraz zrzucić zbędne kilogramy.",
          "Dieta oparta jest o zasady zdrowego odżywiania, które zostały lekko zmodyfikowane na rzecz większej ilość białka, a mniejszej węglowodanów.",
          "Jego zwiększony udział procentowy w diecie ma za zadanie “podkręcić metabolizm” oraz uchronić organizm przed “spalaniem” mięśni co może mieć miejsce przy na diecie na rzeźbę kiedy deficyt kaloryczny jest duży.",
          "Dieta sportowa na redukcję skupia się na pozbyciu tkanki tłuszczowej, ale i na uwydatnieniu mięśni. Proces ten jest długotrwały i najważniejsze w nim jest trzymanie się odpowiedniego zapotrzebowania kalorycznego.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Sportowa na redukcję to idealna opcja dla wszystkich chcących zrzucić zbędne kilogramy oraz spalić nadmiar tkanki tłuszczowej.",
          "Menu opiera się na zdrowych posiłkach, które są bogate w białko. Ilość węglowodanów została znacząco zredukowana. ",
          "Białko w diecie sportowej na redukcję „podkręca metabolizm”, tak istotny dla procesu chudnięcia. Jednocześnie organizm jest chroniony przed nadmiernym „spalaniem”, które mogłoby się odbić na mięśniach.",
          "Dieta sportowa na redukcję skupia się spalaniu tkanki tłuszczowej. Proces ten może być długotrwały, jednakże najważniejsze jest tu systematyczne działanie oraz konsekwencja. Dostarczanie organizmowi odpowiedniego zapotrzebowania kalorycznego jest kluczowe.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-standard",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_10.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_9.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_2.jpg",
    },
    fullName: "Dieta standard",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 10-20%\n" +
          "Węglowodany: 55-60%\n" +
          "Tłuszcze: 25-30%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dla osób chcących się zdrowo odżywiać. <br/><br/>

2. Dla osób, które nie mają czasu gotować, a chciałyby pokryć zapotrzebowanie organizmu na wszytskie składniki odżywcze.</span>
      },
    },
    menu: {
      breakfast: "Sałatka Cesar z grzanką z bagietki i kurczakiem",
      secondBreakfast: "Krem daktylowo-bananowy",
      dinner: "Dorsz w sosie musztardowym, mix warzyw na parze, ryż brązowy",
      tea: "Muffinki z parmezanem, cukinią i komosą",
      supper: "Pulpety z chorizo z sosem pomidorowym i szpinakowym tagliatelle",
    },
    offerDescription: "Dieta dla osób chcących się zdrowo odżywiać",
    cityDescription: {
      lodz: {
        description: [
          "Dieta Standard jest przeznaczona dla osób, które chcą zachować swoją aktualną masę ciała lub też lekko ją skorygować, przestawiając się przy tym na zdrowe odżywianie. Dieta Standard to idealne rozwiązanie dla osób potrzebujących wszystkie niezbędne składniki pokarmowe.",
          "Pozwoli ona wcielić Ci w życie odpowiednie nawyki jedzeniowe. Od teraz posiłki przestaną bazować na przetworzonych i sztucznych składnikach. Codziennie dostarczysz organizmowi to, co najlepsze.",
          "Dieta Standard jest odpowiednio zbilansowana, a więc gwarantuje pokrycie dziennego zapotrzebowania na składniki odżywcze, witaminy i mikroelementy.",
          "Menu tej diety trafi w gust każdej osoby, która chce smacznie i zdrowo jeść, ale nie ma czasu na gotowanie, a tym bardziej na liczenie kalorii.",
        ]
      },
      aglomeracjaSlaska: {
        description: [
          "Dieta standard jest przeznaczona dla wszystkich osób, które chcą się zdrowo odżywiać, ale brak im czasu na gotowanie i na zastanawianie się co mogą zjeść, a co niekoniecznie. Teraz nie musisz już liczyć kalorii!",
          "Takie żywienie sprawi, że delikatnie zredukujesz masę ciała, ale jednocześnie odczujesz poprawę swojego stanu zdrowia i samopoczucia. Ponadto wyrobisz odpowiednie nawyki żywieniowe.",
          "Dieta Standard jest odpowiednio zbilansowana, dzięki czemu zyskujesz gwarancję, że dostarczasz organizmowi wszystko to, co najlepsze oraz niezbędną ilość witamin i mikroelementów.",
          "Od teraz wyeliminowanie szkodliwych nawyków jedzeniowych, będzie proste. Dieta standard udowadnia, że na co dzień można jeść zdrowo, smacznie i rozsądnie.",
        ]},
      trojmiasto: {
        description: [
          "Dieta Standard jest odpowiednią opcją dla osób, które chcą się zdrowo odżywiać, ale nie mają czasu na gotowanie, wymyślanie dań i liczenie kalorii.\n" +
          "\n",
          "Pozwoli ona zredukować wagę, ale jednocześnie wpłynie na stan Twojego zdrowia oraz na samopoczucie. Skutki zdrowego odżywiania odczujesz bardzo szybko.",
          "Odpowiednie zbilansowanie daje Ci gwarancję, że każdy posiłek dostarcza Twojemu organizmowi niezbędnych składników odżywczych, witamin i mikroelementów.\n" +
          "\n",
          "Dieta standard pozwoli Ci przestawić się na zdrowy tryb życia oraz wyrobić odpowiednie nawyki jedzeniowe. Od teraz, masz pewność, że jesz dania składające się z najlepszych i starannie wybranych składników.\n" +
          "\n",
        ]},
      warszawa: {
        description: [
          "Dieta Standard jest dedykowana osobom, które pragną zachować aktualną wagę lub jedynie lekko ją skorygować. Głównym celem jest tu jednak przedstawienie się na zdrowe odżywianie.",
          "Od teraz wcielenie w życie odpowiednich nawyków jedzeniowych będzie łatwiejsze. Dzięki diecie standard, każdego dnia będziesz dostarczał organizmowi najlepsze składniki odżywcze.",
          "Całe menu jest odpowiednio zbilansowane, więc pokryje ono dzienne zapotrzebowanie na witaminy, mikroelementy i składniki odżywcze. Koniec z przetworzonym, sztucznym jedzeniem!",
          "Dieta standard zawiera smaczne i zdrowe posiłki, które zasmakują każdej osobie. Jeśli nie masz czasu na gotowanie, a chcesz zdrowo jeść, to jest to opcja idealna dla Ciebie!",
        ]
      },
      bydgoszcz: {
        description: [
          "Dieta Standard jest odpowiednia dla wszystkich osób, które pragną się przestawić na zdrowy tryb życia i odpowiednie odżywianie. Mało tego, przy takim odżywianiu, Twoje samopoczucie stanie się lepsze.",
          "Od teraz, możesz zyskać pewność, że dostarczasz organizmowi wyłącznie najlepsze składniki odżywcze.",
          "Przy diecie standard, nie musisz się martwić o to, czy Twoje dzienne zapotrzebowanie na witaminy i mikroelementy zostanie spełnione. Wszystkie posiłki są odpowiednio zbilansowane.",
          "Jeśli pragniesz zdrowo się odżywiać, jeść smacznie i nie liczyć kalorii, to dieta standard będzie dla Ciebie idealną opcją. Dodatkowo, pozwoli ona Tobie utrzymać prawidłową wagę ciała lub też nieznacznie ją zredukować.",
        ]
      },
      krakow: {
        description: [
          "Dieta Standard jest skierowana do zabieganych osób, które chcą przestawić się na zdrowe odżywianie, ale nie mają czasu na gotowanie, a tym bardziej na liczenie kalorii.",
          "Menu jest smaczne i zdrowe. Umożliwia ono niewielką redukcję wagi. Wpływa ponadto na dobre samopoczucie, co odczujesz bardzo szybko.",
          "Odpowiednio zbilansowane posiłki gwarantują dostarczanie organizmowi niezbędnych składników odżywczych, minerałów oraz witamin.",
          "Dieta standard daje Ci pewność, że odżywiasz się prawidłowo, dbając jednocześnie o swoje zdrowie. Codziennie dostarczasz do organizmu niezbędną ilość kalorii, a posiłki są zróżnicowane, smaczne i nie zawierają sztucznych składników.",
        ]
      },
      poznan: {
        description: [
          "Dieta Standard będzie odpowiednia dla wszystkich osób, które chcą zdrowo jeść, ale nie mają czasu, by samodzielnie gotować, komponować menu i pilnować kalorii.",
          "Od teraz wcielenie w życie odpowiednich nawyków jedzeniowych będzie dużo prostsze. Menu w tej diecie zapewnia Twojemu organizmowi składniki odżywcze najwyższej jakości, które są niezbędne do prawidłowego funkcjonowania.",
          "Dieta standard jest odpowiednio zbilansowana. Nie musisz już zastanawiać się nad tym, czy codziennie przyjmujesz prawidłowe ilości najistotniejszych składników pokarmowych, witamin i mikroelementów.",
          "Takie żywienie pozwoli Ci zredukować lub utrzymać wagę, ale dodatkowo wpłynie na Twoje samopoczucie i sprawi, że staniesz się bardziej odporny.",
        ]
      },
      torun: {
        description: [
          "Dieta Standard skierowana jest do wszystkich tych, którzy nie mają czasu gotować, a chcą jeść smacznie i zdrowo nie licząc przy tym zbędnych kalorii.",
          "Dieta ta jest odpowiednio zbilansowana dzięki czemu gwarantuje dostarczenie organizmowi wszystkich najważniejszych składników pokarmowych, witamin i mikroelementów.",
          "Dieta Standard to świetna opcja dla wszystkich tych, którzy chcą prawidłowo się odżywiać, pragnących zredukować lub utrzymać swoją masę ciała dbając przy tym o samopoczucie raz zdrowie.",
          "Dieta ta pozwoli Ci wcielić w życie zdrowe nawyki jedzeniowe. Od teraz, jedząc smacznie, zyskujesz pewność, że dostarczasz organizmowi najlepsze i najodpowiedniejsze składniki odżywcze.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Standard będzie idealną opcją dla wszystkich zabieganych osób. Od teraz możesz jeść smacznie i zdrowo, nie tracąc czasu i energii na gotowanie i liczenie kalorii.",
          "Taki sposób odżywiania pozwoli Ci przestawić się na zdrowy tryb życia. Wyeliminujesz szkodliwe nawyki jedzeniowe, a dodatkowo utrzymasz lub lekko zredukujesz masę ciała, co wpłynie na Twoje samopoczucie.",
          "Dieta Standard gwarantuje, że codziennie dostarczysz organizmowi najlepszych i najbardziej wartościowych składników odżywczych.",
          "Odpowiednie zbilansowanie sprawi, że poczujesz się dużo lepiej, a dodatkowo będziesz miał pewność, że codziennie przyjmujesz najważniejsze witaminy i mikroelementy.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-weganska",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_13.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_6.jpg",
    },
    fullName: "Dieta wegańska",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 10-20% \n" +
          "Węglowodany: 50-55% \n" +
          "Tłuszcze: 25-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dla osób chcących się zdrowo odżywiać. <br/><br/>

2. Dla osób, które nie mają czasu gotować, a chciałyby pokryć zapotrzebowanie organizmu na wszytskie składniki odżywcze.<br/><br/>
3. Dla osób, które chcą się żywić najwyższej jakości produktami roślinnymi.</span>
      },
    },
    menu: {
      breakfast: "Tofucznica z grzankami posmarowanymi oliwą czosnkową i pomidorkami koktajlowymi.",
      secondBreakfast: "Krem z kaszy jaglanej z kakao, daktylami i bananami.",
      dinner: "Fajitas z tofu ,papryką i czerwoną cebulą podane z guacamole i grillowanymi tortillami.",
      tea: "Sałatka z pieczonym batatem, rukolą, wegańskim serem i granatem polana pikantnym malinowym sosem.",
      supper: "Pulpety z ciecierzycy z sosem żurawinowym, puree z zielonego groszku i kapustą modro po koreańsku.",
    },
    offerDescription: "Dieta oparta o najwyższej jakości produkty pochodzenia roślinnego",
    cityDescription: {
      lodz: {
        description: [
          "Dieta wegańska jest przeznaczona dla wszystkich osób, które pragną zmienić lub zmieniły już swoje nawyki jedzeniowe w odpowiedni i kontrolowany sposób. Jest niezwykle zdrowa, ale trzeba komponować ją z głową. Menu składa się wyłącznie z produktów roślinnych (produkty odzwierzęce – np. jajka, miód, nabiał zostają wykluczone).",
          "Ten rodzaj diety opiera się na roślinach, zbożach, orzechach, nasionach i algach morskich. Przejście na weganizm zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory, kamicę żółciową itd.",
          "Dieta wegańska pozyskuje wszystkie niezbędne składniki odżywcze z produktów roślinnych (np. wapń z mleka sojowego, roślin strączkowych i niektórych warzyw; białko z orzechów, soi, soczewicy i bobu), gwarantując przy tym pokrycie dziennego zapotrzebowania.",
          "Przy przestawieniu się na ten rodzaj żywienia zaleca się suplementację witaminy D oraz B12 (dostarczanie ich organizmowi poprzez produkty roślinny i zboża jest bardzo trudne).",
        ]
      },
      aglomeracjaSlaska: {
        description: [
          "Dieta Wegańska zyskuje coraz większą popularność. Będzie ona idealna dla osób, które chcą ze swojego jadłospisu wyeliminować wszelkie produkty odzwierzęce, w tym również jajka, miód i nabiał.",
          "Weganizm to bardziej radykalna forma wegetarianizmu. Menu składa się wyłącznie z posiłków przygotowanych z produktów roślinnych. Dania opierają się na roślinach, zbożach, orzechach, nasionach i algach morskich.",
          "Składniki odżywcze są pozyskiwane z produktów roślinnych (np. z mleka sojowego, roślin strączkowych, orzechów, soi, soczewicy). Dieta wegańska minimalizuje wystąpienie np. otyłości, nadciśnienia, cukrzycy, nowotworów itp.",
          "Tego typu żywienie wymaga dodatkowego przyjmowania witaminy D oraz witaminy B12, gdyż ciężko je uzupełnić ze składników roślinnych.",
        ]},
      trojmiasto: {
        description: [
          "Dieta Wegańska jest odpowiednia dla osób, które chciałaby ze swojego menu całkowicie wyeliminować produktu odzwierzęce.",
          "Jadłospis bazuje na roślinach, zbożach, orzechach, nasionach i algach morskich. Potrzebne składniki odżywcze są pozyskiwane z produktów roślinnych(np. wapń z roślin strączkowych i zielonych warzyw, białko z orzechów, bobu itd.).",
          "Dieta wegańska ma pozytywny wpływ na zdrowie. Zmniejsza ono ryzyko wystąpienia chorób takich, jak: otyłość, nadciśnienie, cukrzyca, nowotwory, kamica żółciowa i wiele innych.\n" +
          "\n",
          "Przy przejściu na weganizm, wskazana jest suplementacja witaminy D i witaminy B12 (gdyż ciężko je uzupełnić z produktów roślinnych).",
        ]},
      warszawa: {
        description: [
          "Dieta Wegańska to bardziej restrykcyjna forma diety wegetariańskiej. Tu menu składa się tylko z produktów roślinnych. Wszystko, co pochodzi od zwierząt, jest wykluczane (np. jajka, nabiał, miód).",
          "Dania w tej diecie są odpowiednio skomponowane i smaczne. Bazują na roślinach, zbożach, orzechach, nasionach i algach morskich. Niezbędne składniki odżywcze są pozyskiwane z produktów roślinnych (np. wapń z mleka sojowego,białko – z orzechów, soi, soczewicy i bobu itp.).",
          "Dieta wegańska sprawi, że poprawi się Twój stan zdrowia i przy okazji zmniejsza ona ryzyko wystąpienia niektórych chorób (m.in. otyłość, nadciśnienie, cukrzyca, nowotwory, kamica żółciowa itp.)",
          "Ten sposób żywienia wymaga dodatkowego przyjmowania witaminy D i witaminy B12, gdyż ciężko je na co dzień uzupełniać z produktów roślinnych.",
        ]
      },
      bydgoszcz: {
        description: [
          "Dieta Wegańska opiera się wyłącznie na składnikach roślinnych. Posiłki bazują na zbożach, orzechach, nasionach oraz na algach morskich. Produkty odzwierzęce są tu całkowicie wykluczone (np. jajka, miód, nabiał).",
          "Menu opiera się na odpowiednim wykorzystaniu produktów roślinnych. To z nich pozyskiwane są składniki odżywcze, takie jak np. wapń, białko itd. Jest to możliwe tylko przy prawidłowo skomponowanych posiłkach.",
          "Przechodząc na dietę wegańską, niezbędne jest suplementowanie witaminy D oraz witaminy B12, gdyż pozyskanie ich z produktów roślinnych i zbóż jest bardzo trudne.",
          "Dieta wegańska to krok w stronę przestawienia się na zdrowy tryb życia. Minimalizuje ona ryzyko wystąpienia chorób, takich jak np. otyłość, nadciśnienie, cukrzyca, nowotwory, kamica żółciowa itd.",
        ]
      },
      krakow: {
        description: [
          "Dieta wegańska opiera się wyłącznie na produktach roślinnych. Eliminuje ona całkowicie żywność odzwierzęcą (jajka, miód, nabiał). Menu jest tutaj zupełnie inne niż w diecie wegetariańskiej.",
          "Dieta Wegańska bazuje na następujących produktach: rośliny, zboża, orzechy, nasiona, algi morskie. Wszelkie niezbędne składniki odżywcze są pozyskiwane z produktów roślinnych (np. wapń z zielonych warzyw liściastych, mleka sojowego; białko z orzechów, bobu itd.).",
          "Skutki tak zdrowego odżywiania, odczujesz bardzo szybko- poprawi się Twój stan zdrowia i samopoczucie. Weganizm dodatkowo zmniejsza ryzyko wystąpienia otyłości, nadciśnienia, cukrzycy, nowotworów, kamicy żółciowej itd.",
          "Osobom, które zdecydowały się przejść na dietę wegańską, zaleca się przyjmowanie witaminy D i witaminy B12 (ciężko je uzupełnić z produktów roślinnych).",
        ]
      },
      poznan: {
        description: [
          "Dieta wegańska staje się coraz bardziej popularna. Jest ona idealna dla wszystkich osób, które chcą wykluczyć ze swojego menu produkty odzwierzęce (w tym również jaja, miód, nabiał itd.).",
          "Jadłospis opiera się wyłącznie na roślinach, zbożach, orzechach, nasionach i algach morskich. Niezbędne składniki odżywcze są pozyskiwane z produktów roślinnych (np. białko z orzechów, soi; wapń z mleka sojowego, roślin strączkowych itd.).",
          "Dieta Wegańska minimalizuje ryzyko wystąpienia otyłości, nadciśnienia, cukrzycy, nowotworów, kamicy żółciowej itd.",
          "Przy tego rodzaju odżywianiu, niezbędna jest suplementacja witamy D i witaminy B12 (gdyż ciężko je uzupełnić z produktów roślinnych).",
        ]
      },
      torun: {
        description: [
          "Dieta Wegańska jest bardziej restrykcyjną wersją diety wegetariańskiej. Jadłospis składa się wyłącznie z produktów roślinnych, z wykluczeniem jakichkolwiek produktów odzwierzęcych jak np. jajka, miód, nabiał.",
          "Dieta Wegańska opiera się na roślinach, zbożach, orzechach, nasionach i algach morskich. Zmniejsza ona ryzyko wystąpienia chorób takich, jak: otyłość, nadciśnienie, cukrzyca, nowotwory, kamica żółciowa i wiele innych.",
          "Posiłki w diecie wegańskiej są tak skomponowane, aby pozyskiwać potrzebne składniki odżywcze z produktów roślinnych, np. wapń z mleka sojowego, roślin strączkowych i zielonych warzywach liściastych, białko – z orzechów, soi, soczewicy i bobu. Gwarantują one pokrycie dziennego zapotrzebowania na niezbędne witaminy i mikroelementy.",
          "Klientom na diecie wegańskiej zalecamy ponadto suplementować dwie witaminy, które niełatwo uzupełnić z różnych produktów roślinnych i zbóż, tj. witaminę D oraz witaminę B12.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Wegańska zyskuje coraz większą popularność. Jest to bardziej restrykcyjna wersja wegetarianizmu, która zmniejsza ryzyko wystąpienia otyłości, nadciśnienia, cukrzycy, nowotworów, kamicy żółciowej itp.",
          "Menu zawiera wyłącznie produkty roślinne. Bazuje ono na zbożach, roślinach, orzechach, nasionach algach morskich. Produkty odzwierzęce, takie jak np. jajka, miód i nabiał są całkowicie wykluczone.",
          "Potrzebne składniki odżywcze są pozyskiwane z produktów roślinnych- np. wapń z mleka sojowego, roślin strączkowych i zielonych warzyw liściastych, białko – z orzechów, soi, soczewicy i bobu. Posiłki są niezwykle urozmaicone.",
          "Klientom, którzy zdecydowanie się przejść na weganizm, zaleca się suplementację witaminy D i witaminy B12, gdyż ciężko je pozyskać z produktów roślinnych.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-wegetarianska",
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_13.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_8.jpg",
    },
    fullName: "Dieta wegetariańska",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 10-20%\n" +
          "Węglowodany: 50-55%\n" +
          "Tłuszcze: 25-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dla osób chcących się zdrowo odżywiać. <br/><br/>

2. Dla osób, które nie mają czasu gotować, a chciałyby pokryć zapotrzebowanie organizmu na wszytskie składniki odżywcze. <br/><br/>
3. Dla osób, które chcą się żywić produktami roślinnymi ale dopuszczają spożycie takich składników jak jajka czy nabiał.</span>
      },
    },
    menu: {
      breakfast: "Tofucznica z grzankami posmarowanymi oliwą czosnkową i pomidorkami koktajlowymi.",
      secondBreakfast: "Krem z kaszy jaglanej z kakao, daktylami i bananami. ",
      dinner: "Fajitas z tofu, papryką i czerwoną cebulą podane z guacamole i grillowanymi tortillami.",
      tea: "Sałatka z pieczonym batatem, rukolą, kozim serem i granatem polana pikantnym malinowym sosem.",
      supper: "Pulpety z ciecierzycy z sosem żurawinowym, puree z zielonego groszku i kapustą modro po koreańsku.",
    },
    offerDescription: "Dieta roślinna dopuszczająca spożywanie takich pokarmów jak jajka i nabiał",
    cityDescription: {
      lodz: {
        description: [
          "Dieta wegetariańska jest przeznaczona dla osób, które chcą wyeliminować mięso ze swojego codziennego menu. Dieta wegetariańska jest zdrowa, pod warunkiem że wiesz, jak prawidłowo komponować jadłospis. Menu jest smaczne i różnorodne, gdyż wykorzystuje bogactwo roślin, owoców, kasz, orzechów, nasion.",
          "Każdy posiłek w diecie wegetariańskiej jest odpowiednio zbilansowany i zawiera właściwe proporcje i ilość składników odżywczych (białka, tłuszcze, węglowodany, witaminy, minerał). Dieta wegetariańska zapewnia zwiększenie ilości błonnika, witamin, potasu, magnezu i nienasyconych kwasów tłuszczowych.",
          "Dania są smaczne, zdrowe, pożywne i sycące. Mimo tego, że nie zawierają mięsa, to po ich spożyciu, jesteś najedzony. Posiłki z diety wegetariańskiej zaspokajają dzienny bilans energetyczny i co najważniejsze, mają pozytywny wpływ na Twoją figurę. ",
          "Przejście na wegetarianizm zmniejszy ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory. Bardzo szybko zaczniesz dostrzegać wpływ nowej diety na zdrowie i kondycję organizmu.",
        ]
      },
      aglomeracjaSlaska: {
        description: [
          "Dieta Wegetariańska wykorzystuje różnorodność roślin, owoców, kasz, orzechów i nasion, dzięki czemu menu jest smaczne, zdrowe, sycące i niejednorodne. Dodatkowo, przyczynia się ona do zachowania szczupłej sylwetki.\n" +
          "\n",
          "Odpowiednia ilość oraz proporcje białka, tłuszczów, węglowodanów, witamin i minerałów gwarantują, że posiłki zaspokoją dzienny bilans energetyczny.",
          "Przechodząc na wegetarianizm, wyświadczasz ogromną przysługę swojemu organizmowi! Po krótkim czasie odczujesz poprawę stanu zdrowia oraz ogólnej kondycji i samopoczucia.",
          "Dieta wegetariańska minimalizuje ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory (piersi, jajników i przechodu pokarmowego).",
        ]},
      trojmiasto: {
        description: [
          "Dieta Wegetariańska opiera się na roślinach, owocach, kaszach i nasionach. Eliminuje ona mięso, jednak posiłki są sycące, smaczne i różnorodne.",
          "Menu wegetariańskie wpływa na stan Twojego zdrowia oraz ogólnej kondycji organizmu. Przestawiając się na takie żywienie, zmniejsza się ryzyko zachorowania np. na choroby serca, cukrzycę, otyłość i nowotwory.\n" +
          "\n",
          "Prawidłowo dobrane proporcje i ilości składników odżywczych, takich jak: białka, tłuszcze, węglowodany, witaminy, minerały, gwarantuje zaspokojenie dziennego bilansu energetycznego.\n" +
          "\n",
          "Dieta wegetariańska pozwala zachować szczupłą sylwetkę, a jednocześnie doskonale sprawia, że jesz zdrowo, smacznie i różnorodnie.",
        ]},
      warszawa: {
        description: [
          "Dieta Wegetariańska jest przeznaczona dla osób, chcących wyeliminować mięso ze swojego menu. Czerpie ona z takich składników, jak rośliny, owoce, kasze, orzechy, nasiona. Posiłki z menu są różnorodne, sycące, smaczne i przede wszystkim zdrowe.",
          "Odpowiednie ilości oraz proporcje składników odżywczych, takich jak: białka, tłuszcze, węglowodany, witaminy, minerały, sprawiają, że dieta wegetariańska jest odpowiednio zbilansowana.",
          "Wbrew obiegowym opiniom, dania bezmięsne są urozmaicone i sprawiają, że jesteśmy najedzeni, ale jednocześnie nie jest nam po jedzeniu ciężko. Menu bezmięsne pozwala cieszyć się szczupłą sylwetką.",
          "Dieta wegetariańska pozytywnie wpływa na nasze zdrowie i oraz ogólną kondycję organizmu. Pozwala ona zmniejszyć ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory.",
        ]
      },
      bydgoszcz: {
        description: [
          "Dieta Wegetariańska jest niezwykle popularna od wielu lat. Będzie to idealna opcja dla wszystkich, którzy chcą poprawić kondycję swojego organizmu oraz przestawić się na zdrowy tryb życia.",
          "Zmniejsza ono ryzyko zachorowania np. na choroby serca, cukrzycę, otyłość i nowotwory. Wszystko dzięki właściwemu zbilansowaniu diety oraz odpowiedniemu doborowi białka, tłuszczów, węglowodanów i minerałów.",
          "Posiłki wchodzące w skład menu wegetariańskiego wykorzystują rośliny, owoce, kasze oraz nasiona. Produkty te można wykorzystać na wiele sposób, dzięki czemu posiłki są sycące, smaczne i przede wszystkim zdrowe.",
          "Dieta wegetariańska pozwoli wypracować szczupłą sylwetkę, przy jednoczesnym zaspokojeniu dziennego bilansu energetycznego. Różnorodność menu sprawi, że na pewno nie będziesz narzekał na monotonne jedzenie.",
        ]
      },
      krakow: {
        description: [
          "Dieta Wegetariańska jest bardzo popularna. Kieruje się ją do wszystkich, chcących odstawić mięso. Takie odżywianie pozwala poprawić samopoczucie i kondycję organizmu. Wegetarianizm zmniejsza ryzyko zachorowania np. choroby serca, cukrzycę, otyłość i nowotwory.",
          "Dieta wegetariańska opiera się na roślinach, owocach, kaszach, orzechach i nasionach. Posiłki są smaczne i urozmaicone, a jednocześnie sycące.",
          "Menu jest odpowiednio zbilansowane, gdyż zawiera odpowiednią ilość białka, tłuszczów, węglowodanów, witamin i minerałów.",
          "Dieta wegetariańska zaspokaja dzienny bilans energetyczny, gdyż posiłki są pożywne i sycące. Takie odżywianie jednocześnie przyczynia się do wypracowania szczupłej sylwetki.",
        ]
      },
      poznan: {
        description: [
          "Dieta Wegetariańska czerpie z bogactwa roślin, owoców, kasz, orzechów, nasion. Będzie ona odpowiednia dla wszystkich osób, chcących odstawić mięso.",
          "Wbrew pozorom, menu wegetariańskie jest niezwykle urozmaicone. Dania są smaczne, sycące i przede wszystkim zdrowe. Nie tylko zaspokajają one dzienny bilans energetyczny, ale i pozwalają zachować szczupłą sylwetkę.",
          "Jadłospis jest prawidłowo zbilansowany. Dania dostarczają niezbędnych składników odżywczych (białka, tłuszcze, węglowodany, witaminy, minerały) w odpowiednich ilościach.",
          "Przejście na wegetarianizm wpływa pozytywnie na nasze zdrowie- zmniejsza się ryzyko wystąpienia chorób, takich jak np. choroby serca, cukrzyca, otyłość i niektóre nowotwory.",
        ]
      },
      torun: {
        description: [
          "Dieta Wegetariańska ma ogromny wpływ na nasze zdrowie i kondycję organizmu – zmniejsza ryzyko zachorowania na wiele chorób cywilizacyjnych, np. choroby serca, cukrzycę, otyłość i nowotwory (szczególnie raka piersi, jajników oraz przewodu pokarmowego). Wegetarianizm to nie tylko dieta eliminująca mięso, to także zdrowy styl życia, który opiera się na swoistej filozofii.",
          "Nasze wegetariańskie posiłki zostały tak opracowane, aby – wykorzystując bogactwo roślin, owoców, kasz, orzechów, nasion – dostarczyć różnorodne i smaczne dania.",
          "Nasi dietetycy dobierają odpowiednie ilość oraz proporcje składników odżywczych, takich jak: białka, tłuszcze, węglowodany, witaminy, minerały, aby dieta wegetariańska była odpowiednio zbilansowana.",
          "Dbamy o to, żeby posiłki w diecie były pożywne, sycące, zaspokajające dzienny bilans energetyczny – wbrew obiegowym opiniom dania bezmięsne doskonale sycą, a jednocześnie pozwalają zachować szczupłą sylwetkę.",
        ]
      },
      wroclaw: {
        description: [
          "Dieta Wegetariańska to hit ostatnich lat. Przyczynia się ona do poprawy stanu zdrowia oraz ogólnej kondycji organizmu. Ryzyko chorób cywilizacyjnych, takich tak choroby serca, cukrzyca, otyłość i nowotwory, zostaje dzięki niej ograniczone.",
          "Menu jest niezwykle urozmaicone, zdrowe, smaczne oraz sycące. Posiłki zaspokajają dzienny bilans energetyczny, ale też pozwalają zachować odpowiednią wagę i szczupłą sylwetkę.",
          "Dieta wegetariańska jest odpowiednio zbilansowana. Proporcje składników odżywczych są prawidłowo dobrane, dzięki czemu dostarczasz organizmowi właściwą ilość białka, tłuszczu, węglowodanów, witamin i minerałów.",
          "Podkreślamy, że wykorzystując bogactwo roślin, owoców, kasz, orzechów i nasion, można stworzyć naprawdę zróżnicowane, smaczne i sycące dania.",
        ]
      },
      sopot: {
        description: [
          "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
          "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
          "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
          "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
]
