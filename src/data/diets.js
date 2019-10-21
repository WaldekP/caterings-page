import React from 'react';
export const diets = [
  {
    dietUrl: "dieta-bezglutenowa",
    metaDescription: 'Dieta bezglutenowa jest idealna dla każdego, kto chce się zdrowo odżywiać i nie toleruje glutenu.',
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_14.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_5.jpg",
    },
    fullName: "Dieta bezglutenowa",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 15-25%\n" +
          "Węglowodany: 40-50%\n" +
          "Tłuszcze: 25-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dedykowana osobom z alergią, nadwrażliwością i nietolerancją na gluten.<br/> <br/>
          2.Może być zalecana w chorobach autoimmunologicznych w tym Hashimoto a także w chorobach  nieswoistych zapaleń jelit<br/> <br/>
          3. Dla osób, którym po spożyciu produktów z glutenem towarzyszą objawy min. wzdęcia, bóle brzucha, nudności i wymioty, uczucie pełności,  zaparcia czy gazy<br/> <br/></span>
      },
    },
    menu: {
      breakfast: "Biszkoptowe omlety z  grzybami",
      secondBreakfast: "Czekoladowo-orzechowe ciastka z awokado",
      dinner: "Schab z suszonymi pomidorami podany z sałatką z buraczka i pieczonymi talarkami ziemniaczanymi",
      tea: "Muffinki z parmezanem, cukinią i komosą",
      supper: "Wołowina po burgundzku podana z komosą ryżową",
    },
    offerDescription: "Dieta dla osób, które nie tolerują glutenu",
    cityDescription: {
      lodz: {
        description: [
          "Dieta bezglutenowa przeznaczona jest dla osób, które w swojej diecie pudełkowej z różnych przyczyn muszą wyeliminować lub ograniczyć gluten.",
          "W naszej diecie bezglutenowej produkty zbożowe zostały zastąpione produktami naturalnie bezglutenowymi takimi jak np. kasza jaglana, kasza gryczana, ryż czy makarony kukurydziane.",
          "W jadłospisie cateringu bezglutenowego AfterFit znajdziecie również produkty mleczne, różnego rodzaju mięso, ryby, jaja, owoce, warzywa czy nasiona i orzechy.",
          "Z uwagi na to, że w diecie bezglutenowej mogą pojawić się śladowe ilości glutenu, nie jest na polecana dla osób z celiakią.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta bezglutenowa przeznaczona jest dla osób, które w swojej diecie pudełkowej z różnych przyczyn muszą wyeliminować lub ograniczyć gluten.",
          "W naszej diecie bezglutenowej produkty zbożowe zostały zastąpione produktami naturalnie bezglutenowymi takimi jak np. kasza jaglana, kasza gryczana, ryż czy makarony kukurydziane.",
          "W jadłospisie cateringu bezglutenowego AfterFit znajdziecie również produkty mleczne, różnego rodzaju mięso, ryby, jaja, owoce, warzywa czy nasiona i orzechy.",
          "Z uwagi na to, że w diecie bezglutenowej mogą pojawić się śladowe ilości glutenu, nie jest na polecana dla osób z celiakią.",
        ]},
    },
  },
  {
    dietUrl: "dieta-bezlaktozowa",
    metaDescription: 'Dieta bezlaktozowa jest idealna dla każdego, kto chce się zdrowo odżywiać i nie toleruje laktozy.',
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_14.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_5.jpg",
    },
    fullName: "Dieta bezlaktozowa",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 15-25%\n" +
          "Węglowodany: 40-50%\n" +
          "Tłuszcze: 25-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Skierowana do osób nietolerujących laktozy.<br/> <br/>
          2. Dla osób, którym po spożyciu produktów mlecznych towarzyszy uciążliwe uczucie dyskomfortu min. wzdęcia, bóle brzucha, kolki,  zaparcia, gazy, biegunki.<br/> <br/>
          3. Dla osób, które zrezygnowały z jedzenia nabiału.<br/></span>
      },
    },
    menu: {
      breakfast: "Jajeczne muffiny z boczkiem",
      secondBreakfast: "Smoothie bowl z ananasem i granolą",
      dinner: "Schab z suszonymi pomidorami podany z sałatką z buraczka i pieczonymi talarkami ziemniaczanymi",
      tea: "Muffinki z parmezanem, cukinią i komosą",
      supper: "Lekka sałatka azjatycka z wołowiną",
    },
    offerDescription: "Dieta dla osób, które nie tolerują laktozy",
    cityDescription: {
      lodz: {
        description: [
          "Dieta pudełkowa bezlaktozowa przeznaczona jest dla osób z nietolerancją laktozy. Z menu zostały wyeliminowane produkty zawierające laktozę a wykorzystane zostały jego zamienniki.",
          "Jadłospis cateringu dietetycznego AfterFit bazuje na pełnowartościowych bezlaktozowych produktach spożywczych. Mleko krowie zostało zastąpione napojami roślinnymi, mlekiem kokosowym czy mlekiem kozim.  ",
          "Dieta bezlaktozowa tym samym dostarcza odpowiednią ilość białka, która pochodzi zarówno ze źródeł zwierzęcych jak i roślinnych. ",
          "Prawidłowo skomponowane posiłki mają wspomóc nasze zdrowie i dore samopoczucie przy towarzyszącej nietolerancji na cukier zawarty w mleku.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta pudełkowa bezlaktozowa przeznaczona jest dla osób z nietolerancją laktozy. Z menu zostały wyeliminowane produkty zawierające laktozę a wykorzystane zostały jego zamienniki.",
          "Jadłospis cateringu dietetycznego AfterFit bazuje na pełnowartościowych bezlaktozowych produktach spożywczych. Mleko krowie zostało zastąpione napojami roślinnymi, mlekiem kokosowym czy mlekiem kozim.  ",
          "Dieta bezlaktozowa tym samym dostarcza odpowiednią ilość białka, która pochodzi zarówno ze źródeł zwierzęcych jak i roślinnych. ",
          "Prawidłowo skomponowane posiłki mają wspomóc nasze zdrowie i dore samopoczucie przy towarzyszącej nietolerancji na cukier zawarty w mleku.",
        ]},
    },
  },
  {
    dietUrl: "dieta-detox",
    metaDescription: 'Dieta przeznaczona jest dla osób, które chcą oczyścić organizm z toksyn i zbędnych produktów przemiany materii.',
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_9.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
    },
    fullName: "Dieta detox",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "W diecie detox nie liczymy makroskładników. Jest to dieta , która powinna być stosowana tylko przez krótki okres. Optymalny czas to 1-3 tygodnie.",
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dedykowana osobom, które są w ciągłym biegu, czują się wyczerpane, ociężałe, pozbawione energii do życia.<br/> <br/>
          2. Dla osób które chcą oczyścić swój organizm z toksyn, wspomóc system trawienny oraz odpornościowy.<br/> <br/>
          3. Skierowana dla osób, które chcą w szybki sposób zrzucić kilka kilogramów.<br/> <br/></span>
      },
    },
    menu: {
      breakfast: "Budyń jaglany z wiśniową nutką detox",
      secondBreakfast: "Sernik z orzechów nerkowca",
      dinner: "Lekki bigos z suszonymi morelami",
      tea: "Sałatka  z mango i gruszki z granatem",
      supper: "Azjatycki krem z marchewki detox",
    },
    offerDescription: "Dieta dla osób, które chcą oczyścić organizm z toksyn.",
    cityDescription: {
      lodz: {
        description: [
          "Dieta pudełkowa Detox przeznaczona jest dla osób, które chcą oczyścić organizm z toksyn i zbędnych produktów przemiany materii. Może też być stosowana jaka krótkotrwała kuracja odchudzająca, która pozwoli nam zrzucić kilka kilogramów w szybszym czasie.",
          "Dieta Detox to przede wszystkim dieta owocowo-warzywna, która została wzbogacona o produkty naturalnie bezglutenowe takie jak np. kasza jaglana, ryż brązowy czy płatki gryczane. ",
          "Jadłospis uzupełniają tłuszcze roślinne, nasiona oraz orzechy. Eliminuję ona mięso, ryby, jaja , rośliny strączkowe oraz gluten i laktozę.",
          "W cateringu diety Detox znajdują się różnego rodzaju soki warzywno-owocowe, zupy czy smaczne sałatki. Dieta detox dostarczy naszemu organizmowi sporą dawkę witamin, składników mineralnych a także błonnika, który skutecznie pobudzi naszą przemianę materii.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta pudełkowa Detox przeznaczona jest dla osób, które chcą oczyścić organizm z toksyn i zbędnych produktów przemiany materii. Może też być stosowana jaka krótkotrwała kuracja odchudzająca, która pozwoli nam zrzucić kilka kilogramów w szybszym czasie.",
          "Dieta Detox to przede wszystkim dieta owocowo-warzywna, która została wzbogacona o produkty naturalnie bezglutenowe takie jak np. kasza jaglana, ryż brązowy czy płatki gryczane. ",
          "Jadłospis uzupełniają tłuszcze roślinne, nasiona oraz orzechy. Eliminuję ona mięso, ryby, jaja , rośliny strączkowe oraz gluten i laktozę.",
          "W cateringu diety Detox znajdują się różnego rodzaju soki warzywno-owocowe, zupy czy smaczne sałatki. Dieta detox dostarczy naszemu organizmowi sporą dawkę witamin, składników mineralnych a także błonnika, który skutecznie pobudzi naszą przemianę materii.",
        ]},
    },
  },
  {
    dietUrl: "dieta-niski-indeks",
    metaDescription: 'Dieta z niskim indeksem glikemicznym przeznaczona jest dla osób , które mają problemy z nieprawidłowym poziom glukozy we krwi.',
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_9.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_5.jpg",
    },
    fullName: "Dieta niski indeks",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 20-25%\n" +
          "Węglowodany: 40-50%\n" +
          "Tłuszcze: 30-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dedykowana osobom, które chcą zacząć odżywiać się zdrowo i pragną zapanować nad niekontrolowanymi napadami głodu.<br/> <br/>
          2. Skierowana dla osób cierpiących na cukrzycę, insulinooporość, choroby ze strony układu krążenia.<br/> <br/>
          3. Zalecana osobom, które chcą zrzucić zbędne kilogramy.<br/> <br/></span>
      },
    },
    menu: {
      breakfast: "Sałatka norweska z łososiem",
      secondBreakfast: "Smoothie bowl z ananasem i granolą",
      dinner: "Filet z indyka w winnym sosie śliwkowym z kaszą jaglaną i kalafiorem",
      tea: "Spring rolls z mango",
      supper: "Bakłażan  faszerowany mozarellą i pomidorami",
    },
    offerDescription: "Dieta dla osób, które mają problemy z nieprawidłowym poziomem glukozy we krwi.",
    cityDescription: {
      lodz: {
        description: [
          "Dieta z niskim indeksem glikemicznym przeznaczona jest dla osób , które mają problemy z nieprawidłowym poziomem glukozy we krwi, insulinoopornością czy chorująch na cukrzycę. Może być również stosowana w profilaktyce chorób serca oraz otyłości.",
          "Dieta opiera się głównie o produkty o niskim indeksie glikemicznym. W diecie została ograniczona ilość produktów bogatych w cukry proste. W słodkich deserach cukier został zastąpiony jego zdrowszym zamiennikiem – ksylitolem.",
          "Jadłospis obfituje w warzywa, owoce, mięso, ryby, produkty mleczne, jaja, nasiona roślin strączkowych oraz orzechy.",
          "W diecie zwrócono uwagę nie tylko na indeks glikemiczny produktów ale na udział gramowy danego składnika w potrawie czyli na ładunek glikemiczny.",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta z niskim indeksem glikemicznym przeznaczona jest dla osób , które mają problemy z nieprawidłowym poziomem glukozy we krwi, insulinoopornością czy chorująch na cukrzycę. Może być również stosowana w profilaktyce chorób serca oraz otyłości.",
          "Dieta opiera się głównie o produkty o niskim indeksie glikemicznym. W diecie została ograniczona ilość produktów bogatych w cukry proste. W słodkich deserach cukier został zastąpiony jego zdrowszym zamiennikiem – ksylitolem.",
          "Jadłospis obfituje w warzywa, owoce, mięso, ryby, produkty mleczne, jaja, nasiona roślin strączkowych oraz orzechy.",
          "W diecie zwrócono uwagę nie tylko na indeks glikemiczny produktów ale na udział gramowy danego składnika w potrawie czyli na ładunek glikemiczny.",
        ]},
    },
  },
  {
    dietUrl: "dieta-odchudzajaca",
    metaDescription: 'Dieta Odchudzająca jest idealna dla każdego, kto chce schudnąć, nie będąc przy tym aktywnym fizycznie. Najważniejszy jest tutaj odpowiedni dobór kalorii.',
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
      opole: {
        description: [
          "Dieta odchudzająca jest odpowiednia dla wszystkich, którzy chcą schudnąć, ale nie przepadają za aktywnością fizyczną. Co istotne, zawiera ona gluten oraz laktozę.",
          "Jadłospis pomoże ustabilizować poziom cukru we krwi i zlikwiduje uczucie głodu. Po takich posiłkach będziesz najedzony, ale jednocześnie nie opuści Cię energia i siła do działania. Menu zawiera chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych, orzechy.",
          "Dzięki diecie odchudzającej zrzucisz kilogramy w bezpieczny sposób. Mało tego, stanowi ona również inwestycję w odpowiedni stan zdrowia i lepsze samopoczucie. Menu ogranicza kaloryczność  poszczególnych posiłków. ",
          <span><a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> sprawi, że pokochasz lekkie, zdrowe, ale i sycące posiłki, które dostarczają w odpowiednich ilościach witaminy, minerały i mikroelementy. </span>,
        ]
      },
      kielce: {
        description: [
          <span>Chcesz schudnąć, ale jednocześnie nie jesteś szczególnie aktywny fizycznie? Czujesz, że intensywne treningi to nie Twoja bajka? <a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> będzie dla Ciebie idealna. Od teraz możesz zrzucić zbędne kilogramy w bezpieczny sposób, przechodząc na odpowiedni jadłospis. </span>,
          "Poszczególne dania zawierają gluten i laktozę. Menu w diecie odchudzającej opiera się na odpowiedniej ilości kalorii i na mniejszej dawce węglowodanów. Co ważne, dzięki właściwemu zbilansowaniu, w końcu nie będziesz czuł się nieustannie głodny. ",
          "Posiłki zostały tak skomponowane, by zapewnić Ci odpowiednią ilość witamin, minerałów i mikroelementów. W jadłospisie znajdziesz chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych, orzechy.",
          "Dieta odchudzająca sprawi, że będziesz się zdrowo odżywiał i poczujesz się lekko. Całość jest tak ułożona, abyś pozbył się zbędnych kilogramów i zaczął jeść posiłki lekkie i jednocześnie sycące. ",
        ]
      },
      plock: {
        description: [
          <span>Jeśli nie przepadasz za aktywnością fizyczną, ale jednocześnie zależy Ci na tym, by zrzucić zbędne kilogramy, to <a href="https://afterfit-catering.pl/dieta-odchudzajaca" >dieta odchudzająca</a> będzie dla Ciebie idealna. Taki jadłospis pozwala schudnąć w bezpieczny i kontrolowany sposób. </span>,
          "Menu składa się z posiłków o ograniczonej kaloryczności, ale dostarczą Ci one wszystko to, co niezbędne, a więc składniki odżywcze, witaminy, mikroelementy. ",
          "Jadłospis zawiera dania z glutenem i laktozę. Posiłki zawierają mniej węglowodanów, dzięki czemu po jedzeniu nie będziesz się czuł ociężały. Co ważne, zniknie również poczucie wilczego apetytu. Menu gwarantuje, że będziesz najedzony. ",
          "Jadłospis diety odchudzającej składa się z chudego mięsa, warzyw, owoców, jaj, nasion roślin strączkowych oraz z orzechów. Całość pozwoli Ci przestawić się na zdrowe jedzenie i jednocześnie sprawi, że zaczniesz tracić zbędne kilogramy. Odczujesz również różnicę w samopoczuciu. ",
        ]
      },
      radom: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> jest dla Ciebie idealna, jeśli chcesz schudnąć, ale nie lubisz treningów i nie przepadasz za regularną aktywnością fizyczną. Rozsądny i zdrowy jadłospis pomoże Ci osiągnąć cel w całkowicie bezpieczny sposób. </span>,
          "Menu ogranicza kaloryczność, ale jednocześnie dostarcza Ci wszystkie niezbędne składniki odżywcze. Dieta odchudzająca jest odpowiednio zbilansowana. Posiłki zawierają mniej węglowodanów, dzięki czemu po jedzeniu poczujesz się lekko.",
          "Jadłospis diety odchudzającej opiera się na chudym mięsie, warzywach, owocach, jajach, nasionach roślin strączkowych oraz na orzechach. Takie dania sprawią, że pozbędziesz się tzw. napadów głodu. ",
          "Menu zawiera dania z glutenem i laktozę, zatem jeśli borykasz się z nietolerancjami pokarmowymi, to ta dieta nie będzie dla Ciebie odpowiednia. ",
        ]
      },
      rzeszow: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> pozwala zrzucić zbędne kilogramy nawet, jeśli nie przepadasz za treningami. Cały proces kształtowania figury i dochodzenia do upragnionego celu odbywa się w kontrolowany i całkowicie bezpieczny sposób. </span>,
          "Menu opiera się chudym mięsie, warzywach, owocach, jajach, nasionach roślin strączkowych oraz na orzechach. Odpowiednio skomponowane dania sprawią, że w końcu pozbędziesz się napadów głodu. Po posiłkach z tej diety będziesz najedzony, ale i poczujesz się lekko. ",
          "Mimo tego, że dieta odchudzająca ogranicza kaloryczność posiłków, to jest odpowiednio zbilansowana i zawiera wszystko to, co niezbędne. Zdrowe dania zachwycą Cię smakiem i różnorodnością. ",
          "Jadłospis diety odchudzającej zawiera gluten i laktozę, zatem nie jest on odpowiedni dla osób cierpiących na alergie pokarmowe. ",
        ]
      },
      szczecin: {
        description: [
          "Dieta odchudzająca jest idealna dla wszystkich tych, którzy chcą zrzucić dodatkowe kilogramy, ale nie lubią ćwiczyć. Takie menu pozwala w całkowicie bezpieczny sposób ukształtować figurę i osiągnąć swój cel. ",
          "W jadłospisie znajdziesz chude mięsa, warzywa, owoce, jaja, nasiona roślin strączkowych i orzechy. Posiłki będą lekkie, ale jednocześnie zaspokoją poczucie głodu. Teraz po jedzeniu poczujesz, że masz siłę. ",
          <span><a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> bazuje na produktach o ograniczonej kaloryczności, dzięki czemu będziesz chudnąć. Menu jest jednocześnie odpowiednio zbilansowane, a tym samym zawiera wszystkie niezbędne składniki odżywcze. Zdrowe dania będą różnorodne i każdego dnia będą Cię zaskakiwać smakiem. </span>,
          "Poszczególne posiłki diety odchudzającej zawierają gluten i laktozę.",
        ]
      },
      wloclawek: {
        description: [
          "Dieta odchudzająca jest idealna dla osób chcących schudnąć, ale jednocześnie nie przepadających za  aktywnością fizyczną. Odpowiedni jadłospis gwarantuje osiągnięcie celu w całkowicie bezpieczny sposób. ",
          "Kluczowe w diecie odchudzającej jest zmniejszenie ilości węglowodanów. Jadłospis opiera się na daniach z chudego mięsa, warzyw, owoców, jaj, nasion roślin strączkowych, orzechów i nie tylko. Takie posiłki zawierają mniej kalorii, ale dostarczają Tobie wszystko to, co niezbędne. ",
          "Menu diety odchudzającej eliminuje napady głodu. Takie posiłki są lekkie, ale i sprawią, że będziesz najedzony, a dodatkowo będziesz miał siłę i energię do działania. ",
          <span><a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> umożliwi Ci zdrowe odżywianie się. Jadłospis zawiera gluten i laktozę, a więc jest nieodpowiedni dla osób borykających się z nietolerancjami pokarmowymi.  </span>,
        ]
      },
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
      },
      bialystok: {
        description: [
          <span>Chcesz bezpiecznie zrzucić zbędne kilogramy? <a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> będzie dla Ciebie idealna! Główne założenie jadłospisu dotyczy zmniejszenia dziennej dawki przyjmowanych kalorii, przy jednoczesnym dostarczaniu organizmowi wszystkich niezbędnych witamin, minerałów i składników odżywczych.</span>,
          "Menu w przypadku diety odchudzającej zawiera zarówno gluten, jak i laktozę. Dania bazują na mniejszej ilości węglowodanów, dzięki czemu efekty przejścia na ten sposób odżywiania się będą widoczne gołym okiem. ",
          "Decydując się na dietę odchudzającą, przestaniesz odczuwać tzw. napady głodu. Poszczególne dania z menu sprawią, że poczujesz się najedzony, ale nie przepełniony. Jednocześnie jadłospis ten sprawdzi się przypadku osób nieco mniej aktywnych fizycznie. ",
          "Menu diety odchudzającej jest bogate jest w nabiał. Można w nim znaleźć chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Takie posiłki pozwolą Ci zredukować masę ciała, przy jednoczesnej poprawie stanu zdrowia, kondycji oraz lepszym samopoczuciu. ",
        ]
      },
      czestochowa: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-odchudzajaca" >Dieta odchudzająca</a> jest dla Ciebie idealna, jeśli chcesz zrzucić nadprogramowe kilogramy, ale jednocześnie nie przepadasz za aktywnością fizyczną. Od teraz napady głodu zostaną zredukowane, a Ty poczujesz się najedzony, ale nie przepełniony. </span>,
          "Cały jadłospis zawiera posiłki ograniczone kalorycznie, ale jednocześnie pozwala zaopatrzyć organizm w niezbędną dawkę witamin, minerałów i składników odżywczych. Poszczególne dania bazują na mniejszej ilości węglowodanów. ",
          "Dieta odchudzająca jest bogata w nabiał. W menu znajdziesz chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Dania zawierają laktozę i gluten. ",
          "Decydując się na dietę odchudzającą zaczniesz się zdrowo odżywiać, zrzucisz zbędne kilogramy i jednocześnie poprawi się Twoja kondycja i samopoczucie! Odpowiedni dobór kalorii sprawi, że rezultaty przejścia na ten sposób odżywiania będą widoczne gołym okiem. ",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-paleo",
    metaDescription: 'Dieta Paleo bazuje na prostym, bezglutenowym menu. Jest ono bogate w białka i tłuszcze. Składa się głównie z dań mięsnych, ryb, jaj, owoców i warzyw.',
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
      kielce: {
        description: [
          <span>Chcesz przejść na prosty jadłospis, z którego wyeliminowana zostanie sztuczna żywność? <a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a>, czyli tzw. jadłospis człowieka paleolitu idealnie wpisze się w Twoje potrzeby. Od teraz będziesz jadał wyłącznie zdrowe dania opierające się na naturalnych produktach. </span>,
          "W jadłospisie można znaleźć dania bazujące na mięsie, rybach, jajach, warzywach, owocach, orzechach i pestkach. Posiłki są bogate w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Dania są wysokobiałkowe, zatem dodadzą Ci masę energii. ",
          "Dieta paleo jest odpowiednia również dla osób, które nie mogą spożywać glutenu. Eliminuje ona produkty przetworzone i modyfikowane. Taki sposób odżywiania wpłynie pozytywnie na stan organizmu, ale też pozwoli zredukować wagę. ",
          "Jadłospis człowieka paleolitu sprawi, że poczujesz się lepiej. Dania są nieskomplikowane, ale zaskakują pysznym smakiem.",
        ]
      },
      opole: {
        description: [
          "Dieta paleo jest odpowiednia dla wszystkich osób, które chcą się zdrowo odżywiać i wyeliminować ze swojego menu wszystkie sztuczne i przetworzone produkty, gluten oraz produkty mleczne. ",
          "Jadłospis opiera się na prostych i naturalnych składnikach, które sprawią, że poczujesz się lepiej i będziesz miał energię. Dania składają się z mięsa, ryb, jaj, warzyw, owoców, orzechów i pestek. Dieta paleo zawiera dużą ilość białka, zaś małą węglowodanów.  ",
          "Poszczególne składniki są bogate w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Całość jest odpowiednio zbilansowana, a dodatkowo jadłospis wpłynie na Twój stan zdrowia. ",
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> pozwala na wyeliminowanie wszystkich potencjalnie szkodliwych składników z Twojego codziennego jadłospisu. Pozytywne skutki działania takiego menu odczujesz bardzo szybko. </span>,
        ]
      },
      plock: {
        description: [
          "Jeśli chcesz odżywiać się zdrowo, odstawić wszystkie sztuczne i przetworzone produkty, to dieta paleo będzie dla Ciebie wprost idealna. Takie menu bazuje wyłącznie na zdrowych składnikach.",
          "W jadłospisie znajdziemy wyłącznie naturalne produkty, jak np. warzywa, owoce, orzechu, grzyby, jajka, mięso i ryby. Menu będzie odpowiednie również dla uczulonych na gluten. ",
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> jest wysokobiałkowa, a dania zawierają małą ilość węglowodanów i większą tłuszczu. Wpłynie to na Twoją kondycję, samopoczucie oraz stan zdrowia. Odstawienie żywności zmodyfikowanej to pierwszy krok do możliwie najlepszego sposobu odżywiania się. </span>,
          "Poszczególne składniki w jadłospisie zawierają żelazo hemowe, błonnik oraz kwasy tłuszczowe omega-3. Dzięki temu, organizmowi jest dostarczana energia i wszystko to, co najlepsze. ",
        ]
      },
      radom: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> budzi coraz większe zainteresowanie, co wynika z faktu, że eliminuje ona wszystkie sztuczne i przetworzone produkty i bazuje wyłącznie na naturalnych i zdrowych składnikach. Jeśli zatem i Ty chcesz przestać jadać to, co przetworzone, to ta dieta będzie dla Ciebie idealna. </span>,
          "W menu znajdziesz dania z naturalnych produktów - np. z mięsa, ryb, warzyw, owoców, jaj, orzechów, grzybów itd. Jadłospis jest bezglutenowy. ",
          "Dieta paleo jest wysokobiałkowa, a zatem doda Ci energii. Co ważne, według badań, niemalże każda osoba jest przystosowana to takiego sposobu odżywiania się. ",
          "Taki jadłospis bazuje na składnikach bogatych w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega-3. Wszystko to wpływa pozytywnie na Twoje samopoczucie oraz kondycję. Dieta paleo kładzie nacisk na to, by dostarczać Ci tylko to, co naturalne i najlepsze. ",
        ]
      },
      rzeszow: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a>, zwana również „jadłospisem człowieka paleolitu” opiera się na zdrowych, naturalnych i nieprzetworzonych produktach. Odrzuca ona wszystkie sztuczne i zmodyfikowane składniki. Pozwala ona wcielić w życie zdrowe nawyki jedzeniowe. </span>,
          "Przechodząc na dietę paleo, możesz mieć pewność, że odżywiasz się zdrowo. Menu to proste dania z mięsa, ryb, warzyw, owoców, jaj, orzechów, grzybów itd. Jadłospis jest bezglutenowy. Ciekawe połączenia smaków sprawią, że będziesz zachwycony. ",
          "Takie menu zawiera duże ilości żelaza hemowego, błonnika, kwasów tłuszczowych omega-3. Całość jest idealnie zbilansowana i składa się z produktów najwyższej jakości. ",
          "Przestawienie się na naturalne produkty sprawia, że poprawi się Twój stan zdrowia, kondycja i samopoczucie. Różnicę w codziennym funkcjonowaniu odczujesz bardzo szybko. ",
        ]
      },
      wloclawek: {
        description: [
          "Dieta paleo to inaczej jadłospis człowieka paleolitu. Według badań każdy człowiek jest niemalże przystosowany genetycznie do tego rodzaju odżywiania się. ",
          "Jadłospis diety paleo eliminuje przetworzone produkty, laktozę oraz gluten. Menu opiera się na składnikach wyłącznie naturalnych, a więc na mięsie, rybach, jajach, warzywach, owocach, orzechach i pestkach. Są one bogate w błonnik, żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. ",
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> jest wysokobiałkowa i dodaje Ci energii. Z racji ograniczenia węglowodanów, będziesz mógł zredukować wagę. Odstawienie wszystkich zmodyfikowanych składników wpłynie pozytywnie na stan zdrowia i samopoczucie. </span>,
          "Jadłospis obfituje w proste, a jednocześnie smaczne i różnorodne dania. Będziesz pod wrażeniem takich posiłków!",
        ]
      },
      szczecin: {
        description: [
          "Dieta paleo jest idealną propozycją dla wszystkich osób, które chcą jadać zdrowo i całkowicie odstawić ze swojego jadłospisu sztuczne produkty. Tzw. jadłospis człowieka paleolitu to dania skomponowane wyłącznie z naturalnych składników. ",
          "Menu opiera się na mięsach, rybach, warzywach, owocach, jajach, orzechach itp. Takie produkty tworzą proste i pyszne dania, które na pewno przypadną Ci do gustu. Dieta paleo eliminuje gluten, produkty mleczne i wszystkie przetworzone składniki. ",
          "Zdrowe dania, które będziesz otrzymywał, zawierają żelazo hemowe, błonnik, kwasy tłuszczowe omega-3. Menu jest wysokobiałkowe, dzięki czemu jedzenie będzie Ci dawało siłę. ",
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> wpłynie na Twój stan zdrowia, samopoczucie, ale i na przyzwyczajenia jedzeniowe. Od teraz będziesz sięgał jedynie po to, co naturalne i nieprzetworzone. Wpłynie to pozytywnie na Twój stan zdrowia i samopoczucie. </span>,
        ]
      },
      czestochowa: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> to wysokobiałkowe menu o sporej zawartości tłuszczu. Jadłospis całkowicie eliminuje żywność przetworzoną, gluten, produkty mleczne oraz sztuczne składniki. Jeśli borykasz się z alergiami pokarmowymi, to menu jest równie dla Ciebie odpowiednie. </span>,
          "Według badań, każdy z nas jest niemalże przystosowany genetycznie do takiego sposobu odżywania się. Poszczególne dania składają się bowiem ze składników, do których przypuszczalnie miał dostęp człowiek już w okresie paleolitu.",
          "Jadłospis bazuje na naturalnych produktach, takich jak: warzywa, owoce, orzechy, grzyby, jajka, mięso i ryby. Pozwala on zredukować wagę, ale i zadbać o ogólny stan zdrowia i wyrobić zdrowe nawyki żywieniowe. ",
          "Dania w diecie paleo są bogate w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Posiłki są smaczne, zdrowe i na pewno przypadną Ci do gustu.",
        ]
      },
      warszawa: {
        description: [
          "Dieta Paleo funkcjonuje również pod nazwą „dieta człowieka pierwotnego”. Jest ona przeznaczona dla osób, które chcą wyrobić sobie odpowiednie nawyki żywieniowe.",
          "Jest to dieta wysokobiałkowa, o sporej zawartości tłuszczu. Węglowodany zostają tutaj z kolei ograniczone. Menu eliminuje żywność przetworzoną, zboża, rośliny strączkowe i nabiał (produkty mleczne).",
          "Typowe posiłki zawierają mięsne źródła białka, ryby i oraz jaja. Dodatkowo, jadłospis został uzupełniony o owoce, warzywa, a także orzechy i pestki. Menu w diecie Paleo jest urozmaicone.",
          "Posiłki, wchodzące w skład tej diety, nie zawierają glutenu. Dieta Paleo jest bogata jest w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. Pozwoli Ci to zadbać o gospodarkę lipidową oraz insulinową swojego organizmu oraz zrzucić zbędne kilogramy.",
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
      },
      bialystok: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-paleo" >Dieta Paleo</a> pozwala dostarczyć organizmowi dużo energii i pozwala bezpiecznie schudnąć. Menu uwzględnia składniki, do których przypuszczalnie miał dostęp człowiek już w okresie paleolitu. Według badań, każdy z nas jest niemalże przystosowany genetycznie do takiego sposobu odżywania się. </span>,
          "Dieta paleo opiera się naturalnych produktach, takich jak: warzywa, owoce, orzechy, grzyby, jajka, mięso i ryby. Co ważne, całkowicie eliminuje ona produkty przetworzone, a zatem osoby uczulone na gluten, mogą spokojnie skorzystać z tego jadłospisu. Będzie on odpowiedni również dla osób cierpiących na choroby autoimmunologiczne. ",
          "Menu jest wysokobiałkowe, o sporej zawartości tłuszczu, a mniejszej ilości węglowodanów. Poszczególne dania są bogate w żelazo hemowe, błonnik oraz kwasy tłuszczowe omega 3. ",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-samuraja",
    metaDescription: 'Dieta Samuraja kładzie nacisk na zdrowe odżywianie, wykluczając gluten i laktozę. Menu jest odpowiednie dla osób aktywnych fizycznie.',
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
          "Posiłki z diety Samuraja nie zawierają glutenu oraz laktozy (tzn. produktów mlecznych). Menu przykuwa uwagę większą ilością mięsa. Posiłki są obfite również w jaja, ryby, warzywa i owoce.",
          "Do diety Samuraja zostały wprowadzone rośliny strączkowe, które stanowią ciekawe urozmaicenie. Smaczne, zdrowe i konkretne posiłki na pewno przypadną do gustu każdej osobie, która lubi się ruszać.",
          "Takie menu będzie idealne, dla osób cierpiących nietolerancje pokarmowe, ale chcących dostarczać organizmowi pełnowartościowych składników odżywczych. Dieta Samuraja jest idealną dietą dla osób ćwiczących, którzy pragną, aby ich sylwetka wyglądała jeszcze lepiej.",
        ]
      },
      kielce: {
        description: [
          <span>Twoje życie to aktywność fizyczna i treningi? Nie wyobrażasz sobie bez tego dnia? <a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> idealnie wpisze się w Twoje potrzeby. Łączy ona w sobie dietę paleo oraz dietę sportową na masę. </span>,
          "Jadłospis zawiera większą ilość węglowodanów niż dieta paleo. Posiłki zawierają dużo mięsa. Gluten i laktoza są z menu całkowicie wyeliminowane, a więc możesz przejść na tę dietę, nawet jeśli cierpisz na alergie pokarmowe.  ",
          "Menu diety samuraja wykorzystuje warzywa, owoce, mięso, ryby, jaja, oliwa, bezglutenowe zboża. Poszczególne posiłki zaspokajają dzienny bilans energetyczny i dostarczają Tobie to, co najlepsze. ",
          "Jadłospis jest niezwykle urozmaicony i smaczny. Od teraz możesz się odżywiać odpowiednio i pełnowartościowo, nawet jeśli intensywnie trenujesz. Dania z diety samuraja na pewno Cię zaskoczą i będziesz nimi zachwycony! ",
        ]
      },
      opole: {
        description: [
          "Dieta samuraja jest odpowiednia dla osób, które uwielbiają wysiłek, ruch i treningi. Menu jest tak skomponowane, że także osoby cierpiące na nietolerancje pokarmowe mogą przejść na ten sposób odżywiania.",
          "Jadłospis jest połączeniem diety paleo oraz z diety sportowej na masę. Zostało ono wzbogacone o większą ilość węglowodanów niż w paleo. Z jadłospisu jest wyeliminowany również gluten i laktoza. ",
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> przypadnie do gustu zwłaszcza tym osobom, które uwielbiają mięso. W menu znajdziemy warzywa, owoce, mięso, ryby, jaja, oliwa, bezglutenowe zboża.  </span>,
          "Poszczególne posiłki kładą nacisk na pełnowartościowe składniki odżywcze. Dania są niezwykle smaczne i zróżnicowane. Składają się z najlepszych produktów odpowiedniej jakości. Na pewno takie menu szybko zdobędzie Twoje uznanie!",
        ]
      },
      plock: {
        description: [
          <span>Jeśli uwielbiasz wysiłek fizyczny, intensywnie trenujesz i szukasz odpowiedniego menu, to <a href="https://afterfit-catering.pl/dieta-samuraja" >dieta samuraja</a> będzie dla Ciebie odpowiednia. Stanowi ona połączenie diety paleo i sportowej na masę. </span>,
          "Menu zawiera większą ilość węglowodanów aniżeli paleo. Jednocześnie jadłospis na pewno Ci się nie znudzi i przypadnie Ci do gustu, zwłaszcza jeśli uwielbiasz dania mięsne. ",
          "W diecie samuraja przeważają naturalne produkty, a więc warzywa, owoce, mięso, ryby, jaja, oliwa, bezglutenowe zboża. Taki sposób odżywiania eliminuje żywność przetworzoną, gluten oraz laktozę, a więc będzie on odpowiedni również dla osób borykających się z alergiami pokarmowymi. ",
          "Menu kładzie nacisk na pełnowartościowe składniki odżywcze. Dania są smaczne i urozmaicone. Dieta samuraja pozwoli Ci się pozbyć z jadłospisu wszystkich przetworzonych składników i wcielić w życie zdrowe nawyki żywieniowe. ",
        ]
      },
      radom: {
        description: [
          "Dieta samuraja cieszy się sporą popularnością wśród osób uwielbiających ruch i niewyobrażających sobie życia bez treningów. Jeśli wysiłek fizyczny to coś, co uwielbiasz, to będziesz zachwycony takim jadłospisem. ",
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> czerpie z diety paleo oraz z diety sportowej na masę. W odróżnieniu od paleo, jadłospis zawiera większą ilość węglowodanów. W skład menu wchodzi sporo dań mięsnych. </span>,
          "Dieta samuraja jest zróżnicowana i eliminuje żywność przetworzoną, gluten oraz laktozę, a więc będzie ona idealna także dla osób borykających się z alergiami pokarmowymi. W jadłospisie znajdziesz dania z mięsa, ryb, warzyw, owoców, jaj i bezglutenowych zbóż.",
          "Menu kładzie nacisk na pełnowartościowe składniki odżywcze i eliminację wszystkiego, co sztuczne. Taki jadłospis wpłynie pozytywnie na Twój stan zdrowia oraz na samopoczucie. ",
        ]
      },
      rzeszow: {
        description: [
          "Dieta samuraja to idealny sposób odżywiania się dla osób uwielbiających treningi, ruch, aktywność fizyczną. Jadłospis to połączenie diety paleo i sportowej na masę. W takim sposobie odżywiania kładzie się nacisk na pełnowartościowe składniki odżywcze. ",
          "W menu znajdziemy sporo dań mięsnych, ale również ryby, warzywa, owoce, jaja, nasiona strączkowe. Całość jest urozmaicona, zdrowa, a przede wszystkim pyszna. Warto podkreślić, że jadłospis zawiera większą ilość węglowodanów, co zapewnia sporo energii. ",
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> eliminuje produkty przetworzone, gluten oraz laktozę. Wpłynie to pozytywnie na Twój stan zdrowia i samopoczucie. </span>,
          "Taki sposób odżywiania jest odpowiedni dla tych, którzy borykają się z alergiami pokarmowymi, ale chcą dostarczać organizmowi wszystko, co najlepsze. ",
        ]
      },
      wloclawek: {
        description: [
          "Dieta samuraja jest idealną opcją dla osób regularnie ćwiczących, które nie mogą spożywać glutenu oraz laktozy. Takie menu umożliwia wyrzeźbienie sylwetki i jednocześnie wyrobienie zdrowych nawyków jedzeniowych. ",
          "Jadłospis łączy w sobie elementy diety paleo oraz sportowej na masę. W menu znajduje się większa ilość węglowodanów aniżeli w paleo. ",
          "Menu diety samuraja składa się z warzyw, owoców, mięsa, ryb, jaj, oliwy i z bezglutenowych zbóż. Przypadnie ono do gustu zwłaszcza tym osobom, którzy lubią spore ilości mięsa. Poszczególne posiłki są odpowiednio skomponowane i zaspokajają Twój dzienny bilans energetyczny.  ",
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> jest odpowiednia także dla tych, którzy cierpią na nietolerancje pokarmowe. Nawet przy tego rodzaju przypadłościach można się odpowiednio odżywiać, będąc przy tym aktywnym fizycznie. </span>,
        ]
      },
      szczecin: {
        description: [
          "Dieta samuraja jest odpowiednią opcją dla wszystkich osób, które trenują, chcą się zdrowo odżywiać, a jednocześnie nie mogą spożywać laktozy i glutenu. Jadłospis kładzie nacisk na naturalne i pełnowartościowe składniki. ",
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> łączy w sobie elementy diety paleo i sportowej na masę. Poszczególne posiłki zawierają dużą ilość węglowodanów, a zatem dodadzą Ci energii. </span>,
          "Takie menu przypadnie do gustu osobom, które lubią w dziennym jadłospisie duże ilości mięsa. Dania opierają się również na rybach, warzywach, owocach, jajach i nasionach strączkowych. Różnego rodzaju urozmaicają posiłki i nadają im pyszny smak. ",
          "Jadłospis diety samuraja pozwala odpowiednio się odżywiać, eliminując przy tym potencjalnie szkodliwe produkty. Posiłki dostarczają dużo energii nawet tym, którzy nie wyobrażają sobie dnia bez wysiłku fizycznego. ",
        ]
      },
      czestochowa: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> to połączenie diety paleo i diety sportowej na masę. Jeśli lubisz ruch, aktywność fizyczną i regularnie trenujesz, to będzie ona dla Ciebie idealna. Menu zostało tak skomponowane, żeby trafiać również w potrzeby osób cierpiących na nietolerancje pokarmowe. Jest ono pozbawione glutenu i laktozy. </span>,
          "Jadłospis w diecie samuraja jest wysokobiałkowy. Zawiera on również większą ilość węglowodanów niż w przypadku paleo. W menu znajdziesz dużo mięsa, ale również ryb, warzyw, owoców, jaj oraz roślin strączkowych. ",
          "Różnorodne potrawy są smaczne i jednocześnie odpowiednio zbilansowane. Codziennie będziesz dostarczał organizmowi pełnowartościowe składniki odżywcze. ",
          "Dieta samuraja bazuje na naturalnych produktach wysokiej jakości. Eliminuje ono żywność przetworzoną. Wszystko to przyczynia się do wyrobienia zdrowych nawyków jedzeniowych oraz pozwala wymodelować figurę dzięki odpowiedniemu menu. ",
        ]
      },
      warszawa: {
        description: [
          "Dieta Samuraja jest przeznaczona dla osób aktywnych fizycznie, które zmagają się z nietolerancjami pokarmowymi – są uczulone na gluten i laktozę.",
          "Dieta Samuraja czerpie z diety Paleo oraz ze sportowej na masę. Menu zawiera większą ilość węglowodanów niż w diecie Paleo, ale również jest pozbawione glutenu i laktozy (produkty mleczne).",
          "Do jadłospisu wprowadzono rośliny strączkowe, które są sporym urozmaiceniem. Dieta Samuraja jest bogata w mięso, ryby, warzywa, owoce, jaja.",
          "Dzięki niej, Twój organizm codziennie będzie otrzymywał pełnowartościowe składniki odżywcze, mimo tego, że zmagasz się z nietolerancjami pokarmowymi. Przestawienie się na zdrowe odżywianie jest zawsze możliwe!",
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
          "Posiłki są pozbawione laktozy oraz glutenu. Menu udowadnia jednak, że możliwe jest dostarczenie organizmowi pełnowartościowych składników odżywczych, nawet przy alergiach pokarmowych.",
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
      },
      bialystok: {
        description: [
          "Dieta samuraja jest idealna dla wszystkich tych, którzy regularnie i intensywnie trenują. Podkreśla ona rolę aktywności fizycznej i jest inspirowana sposobem odżywiania się japońskich wojowników. ",
          "Jadłospis jest połączniem menu znanego z paleo oraz z diety sportowej na masę. Jeśli jesteś aktywny i jednocześnie nie możesz spożywać glutenu i laktozy, to menu będzie dla Ciebie idealne. ",
          <span><a href="https://afterfit-catering.pl/dieta-samuraja" >Dieta samuraja</a> jest wysokobiałkowa. Poszczególne posiłki zawierają większą ilość węglowodanów aniżeli dieta paleo. Jej podstawę stanowią naturalne produkty, a więc warzywa, owoce, mięso, ryby, jaja, oliwa, bezglutenowe zboża. Menu eliminuje żywność przetworzoną, gluten i laktozę. </span>,
          "Taki jadłospis pozwoli wymodelować sylwetkę, a jednocześnie każdego dnia będzie zaskakiwać różnorodnością potraw. Dieta samuraja podkreśla, że istotna jest również jakość poszczególnych składników.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  // {
  //   dietUrl: "dieta-sportowa-na-mase",
  //   metaDescription: 'Dieta sportowa na masę to opcja dla tych, którzy chcą wyrobić masę mięśniową. Proces ten powinien się łączyć z odpowiednim planem treningowym.',
  //   dietImg: "../images/diets/dieta-odchudzajaca.jpg",
  //   dietGallery: {
  //     1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_12.jpg",
  //     2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_11.jpg",
  //     3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_4.jpg",
  //   },
  //   fullName: "Dieta sportowa na masę",
  //   questions: {
  //     1: {
  //       question: "Rozkład makroskładników",
  //       answer: "Białko: 25-30% \n" +
  //         "Węglowodany: 40-55% \n" +
  //         "Tłuszcze: 25-30%"
  //     },
  //     2: {
  //       question: "Dla kogo?",
  //       answer: "Dieta skierowana do osób, które aktywnie uprawiają sport i pragną zwiększyć masę mięśniową, a nie maja czasu ani wiedzy potrzebnej do przygotowania odpowiednio zbilansowanych posiłków."
  //     },
  //   },
  //   menu: {
  //     breakfast: "Jajecznica z krewetkami, pomidory, pieczywo pełnoziarniste.",
  //     secondBreakfast: "Koktajl jogurtowy na bazie awokado i masła orzechowego",
  //     dinner: "Marokańskie pulpeciki z kurczaka z ziemniaczanymi krokietami ze szpinakiem",
  //     tea: "Babeczki mięsne z sosem imbirowo – pomarańczowym",
  //     supper: "Naleśniki owsiane z białym serem, miodem i orzechami.",
  //   },
  //   offerDescription: "Dieta dla osób chcących zwiększyć masę mięśniową",
  //   cityDescription: {
  //     lodz: {
  //       description: [
  //         "Dieta sportowa na masę jest przeznaczona dla wszystkich osób, które są zmotywowane do tego, by zbudować swoją masę mięśniową i \n" +
  //         "które intensywnie trenują na siłowni.",
  //         "Budowanie masy mięśniowej to proces długotrwały, w którym liczy się odpowiednia strategia. Zwiększenie ilości spożywanych kalorii musi iść z parze z odpowiednim planem treningowym, który pomoże Ci dobrać specjalista.",
  //         "W diecie na masę kluczowe są tzw. dobre kalorie, dobre tłuszcze i dobre węglowodany. Pochodzą one z pełnowartościowych i nieprzetworzonych produktów. Wszystkie posiłki z menu są skomponowane według tych wytycznych.",
  //         "Składniki są łączone w taki sposób, by wpływały na zwiększenie masy mięśniowej. Dieta sportowa na masę, podobnie jak dieta Samuraja, jest bogata w mięso, ryby oraz jaja.",
  //       ]
  //     },
  //     trojmiasto: {
  //       description: [
  //         "Dieta Sportowa na masę jest odpowiednia dla wszystkich osób, którym zależy na wyrobieniu masy mięśniowej.",
  //         "Zwiększanie masy mięśniowej jest procesem, w którym dieta musi iść w parze z odpowiednio i profesjonalnie dobranym planem treningowym.",
  //         "Istotną kwestią jest tu zwiększenie ilość spożywanych kalorii. Dieta sportowa na masę bazuje na dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach- pochodzą one z produktów nieprzetworzonych.\n" +
  //         "\n",
  //         "Posiłki składają się z mięsa, ryb, jaj (podobnie jak w diecie Samuraja). Składniki są ze sobą prawidłowo połączone, tak by przybliżały Cię do celu, jakim jest zwiększenie masy mięśniowej.",
  //       ]},
  //     aglomeracjaSlaska: {
  //       description: [
  //         "Dieta sportowa na masę idealnie wpisuje się w potrzeby osób, które chcą uwydatnić swoją masę mięśniową i zadbać o odpowiednie kształty.",
  //         "Samo budowanie masy mięśniowej to długotrwały proces. Do sukcesu konieczny jest również odpowiednio dobrany plan treningowy. Zwiększenie ilości spożywanych kalorii musi iść w parze z wysiłkiem fizycznym.",
  //         "Dieta Sportowa na masę posiada jasny cel. Składniki są łączone tak, by zbudować masę mięśniową. Menu jest bogate w mięso, ryby i jaja (podobnie jak dieta Samuraja) i będzie odpowiadało wszystkim, lubiącym konkretne potrawy.\n" +
  //         "\n",
  //         "Kluczowe są tutaj dobre kalorie, dobre tłuszcze oraz dobre węglowodany. Znajdziemy je w nieprzetworzonych, pełnowartościowych produktach.\n" +
  //         "\n",
  //       ]},
  //     warszawa: {
  //       description: [
  //         "Dieta Sportowa na masę jest przeznaczona dla wszystkich tych, którzy pragną poprawić swoją rzeźbę poprzez zwiększenie masy mięśniowej.",
  //         "Menu jest bogate w mięso, ryby i jaja (podobnie jak w diecie Samuraja). Posiłki bazują na tzw. dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach,które pochodzą z pełnowartościowych i zdrowych produktach.",
  //         "Głównym celem diety sportowej jest sprawienie, by nastąpił odpowiedni przyrost masy mięśniowej. W tym celu, wszystkie składniki w menu są odpowiednio rozłożone i ze sobą połączone.",
  //         "Podkreślamy, że budowanie masy mięśniowej oprócz większej ilości spożywanych kalorii, opiera się również na odpowiedniej strategii treningowej. W tym przypadku dieta musi iść w parze z właściwą aktywnością fizyczną.",
  //       ]
  //     },
  //     bydgoszcz: {
  //       description: [
  //         "Dieta Sportowa na masę jest przeznaczona dla wszystkich osób, które chcą zwiększyć swoją masę mięśniową i wyrobić odpowiednią muskulaturę.",
  //         "Menu bazuje na dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach. Pochodzą one ze zdrowych, pełnowartościowych oraz nieprzetworzonych produktów.",
  //         "Posiłki są bogate w mięso, ryby i jaja (podobnie jak w diecie Samuraja). Odpowiednie połączenie składników gwarantuje, że dania przypadną Ci do gustu, jednocześnie przybliżając do celu, jakim jest zwiększenie masy mięśniowej.",
  //         "Pamiętaj, że budowanie masy mięśniowej to proces wymagający konsekwencji. Odpowiednie odżywianie musi iść w parze z przemyślana strategią treningową.",
  //       ]
  //     },
  //     krakow: {
  //       description: [
  //         "Dieta sportowa na masę jest odpowiednia dla wszystkich tych, którzy chcą zwiększyć swoją masę mięśniową oraz uwydatnić mięśnie.",
  //         "Menu jest nakierowane na ten cel. Opiera się ono na mięsie, rybach i jajach (podobnie jak w diecie Samuraja). Wszystkie składniki są odpowiednio zbilansowane i połączone ze sobą.",
  //         "Dieta Sportowa na masę bazuje na dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach. Składniki te pochodzą z nieprzetworzonych i pełnowartościowych produktów.\n" +
  //         "\n",
  //         "Budowanie masy mięśniowej to proces wymagający konsekwencji. Do realizacji celu, niezbędne jest połączenie diety oraz odpowiedniego planu treningowego.",
  //       ]
  //     },
  //     poznan: {
  //       description: [
  //         "Dieta Sportowa na masę będzie odpowiednia dla wszystkich osób, chcących popracować nad swoją muskulaturą, czyli zwiększyć masę mięśniową.",
  //         "Całe menu opiera się na tzw. dobrych kaloriach, dobrych tłuszczach oraz dobrych węglowodanach. Składniki te pochodzą wyłącznie z pełnowartościowych i nieprzetworzonych produktów.",
  //         "Jadłospis zawiera dużą ilość mięsa, ryb i jaj (podobnie jak w diecie Samuraja). Dania zawierają sporą ilość kalorii, gdyż mają za zadanie przyczynić się do budowy masy mięśniowej.",
  //         "Budowanie masy mięśniowej to proces długotrwały, wymagający konsekwencji. Niezwykle istotny jest tutaj odpowiednio dobrany plan treningowy, który musi iść w parze z dietą.",
  //       ]
  //     },
  //     torun: {
  //       description: [
  //         "Dieta sportowa na masę jest skierowana do osób chcących zwiększyć swoją masę mięśniową.",
  //         "W diecie tej staramy się w odpowiedni sposób łączyć i wykorzystywać składniki w jadłospisie tak, aby były ukierunkowane na zwiększenie masy mięśniowej Klienta. Podobnie jak dieta Samuraja bogata jest w mięso, ryby oraz jaja.",
  //         "Warto pamiętać, że budowanie masy mięśniowej to nie tylko zwiększenie ilości spożywanych kalorii, ale przede wszystkim przemyślana strategia treningowa. Przy budowaniu masy mięśniowej dieta powinna współgrać z planem treningowym.",
  //         "Dieta Sportowa na masę bazuje na tzw. dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach, które pochodzą z pełnowartościowych i nie przetworzonych produktów.",
  //       ]
  //     },
  //     wroclaw: {
  //       description: [
  //         "Dieta Sportowa na masę na masę będzie idealną opcją dla wszystkich osób, które pragną stworzyć odpowiednią rzeźbę oraz zwiększyć swoją masę mięśniową.",
  //         "W diecie sportowej na masę najistotniejsze są tzw. dobre kalorie, tłuszcze i węglowodany, Dieta sportowa na masę bazuje na tzw. dobrych kaloriach, dobrych tłuszczach i dobrych węglowodanach. Składniki te pozyskuje się z nieprzetworzonych, pełnowartościowych produktów.",
  //         "Posiłki są ukierunkowane na zwiększenie masy mięśniowej, a więc składają się z odpowiednio połączonych i dobranych produktów. Dieta sportowa na masę jest bogata jest w mięso, ryby oraz jaja (podobnie jak dieta Samuraja).",
  //         "Podkreślamy, że budowanie masy mięśniowej nie opiera się wyłącznie na diecie i na zwiększaniu ilości spożywanych kalorii, ale również na odpowiedniej strategii treningowej. Dieta i ćwiczenia muszą iść tu w parze.",
  //       ]
  //     },
  //     sopot: {
  //       description: [
  //         "Dieta odchudzająca jest przeznaczona dla wszystkich, którzy chcą zrzucić zbędne kilogramy i nie są uczuleni na gluten oraz laktozę. Jest ona odpowiednia dla osób mniej aktywnych fizycznie.",
  //         "Taki sposób odżywiania bazuje na mniejszej ilości węglowodanów, co pozwala ustabilizować lub zredukować masę ciała. Menu jest tu tak dobrane, że pozwoli wyeliminować „napady głodu”.",
  //         "Dieta odchudzająca jest bogata jest w nabiał. Menu jest w tym przypadku obfite w chude mięso, warzywa, owoce, jaja, nasiona roślin strączkowych oraz orzechy. Zapiekanki warzywne, sałatki, jogurty i koktajle z pewnością będą sporym urozmaiceniem",
  //         "Dzięki diecie odchudzającej zyskasz wymarzoną figurę i zmienisz swój tryb życie. Stanowi ona inwestycję w lepszy stan zdrowia i dobre samopoczucie.",
  //       ]
  //     }
  //   },
  //   image: "../images/diets/dieta-paleo.png"
  // },
  {
    dietUrl: "dieta-sportowa-na-redukcje",
    metaDescription: 'Dieta sportowa na masę jest dietą wysokobiałkową, dzięki czemu nie dochodzi do „spalania mięśni”. Ciesz się lepszą kondycją oraz dobrym samopoczuciem.',
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
      kielce: {
        description: [
          "Jesteś aktywny fizycznie i chcesz pozbyć się tkanki tłuszczowej, ale obawiasz się o to, że mięśnie przy tym będą się „spalać”? Dieta sportowa na redukcję będzie dla Ciebie idealna!",
          "Jadłospis w przypadku dieta sportowej na redukcję opiera się na większej ilości białka i ograniczeniu węglowodanów oraz tłuszczów. Takie menu „podkręca” metabolizm i pozwala spalać tkankę tłuszczową, ale jednocześnie chroni Twoje mięśnie.",
          "Menu jest odpowiednio zbilansowane i dostarcza twojemu organizmowi to, co najlepsze. Całość wpisuje się w Twoje codzienne zapotrzebowanie kaloryczne. ",
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa</a> na redukcję powinna być połączona z profesjonalnym planem treningowym. Tylko wówczas cel będzie łatwy do osiągnięcia. Należy podkreślić, że pozbycie się tkanki tłuszczowej to proces długotrwały. </span>,
        ]
      },
      opole: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa na redukcję</a> jest odpowiednia dla osób aktywnych fizycznie, które chcą zrzucić dodatkowe kilogramy i pozbyć się nadmiaru tkanki tłuszczowej. W przypadku takiego sposobu odżywiania podkreślone jest to, by zabezpieczyć mięśnie przed „spalaniem”.</span>,
          "Wysokobiałkowe menu „podkręca” metabolizm, co wpływa na spalanie tkanki tłuszczowej, ale jednocześnie ochrania mięśnie. Poszczególne posiłki zawierają mniejszą ilość węglowodanów oraz tłuszczów. ",
          "Jadłospis w diecie sportowej na masę jest odpowiednio zbilansowany i dba o potrzeby Twojego organizmu. Takie dania dostarczają Ci wszystko to, co niezbędne do prawidłowego funkcjonowania. Jedzenie będzie dodawać Ci energii do działania!",
          "Dieta sportowa na redukcję podkreśla znaczenie odpowiedniego zapotrzebowania kalorycznego. Należy ją łączyć z przemyślanym planem treningowym - tylko wówczas da oczekiwane efekty. ",
        ]
      },
      plock: {
        description: [
          "Jeśli jesteś aktywny i zależy Ci na pozbyciu się tkanki tłuszczowej, ale również na ochronie mięśni, to dieta sportowa na redukcję będzie dla Ciebie idealna. ",
          "Wysokobiałkowe menu oraz ograniczenie węglowodanów i tłuszczów pomoże Ci „pokręcić” metabolizm. Dzięki temu będziesz spalał tkankę tłuszczową, ale jednocześnie mięśnie pozostaną w odpowiedniej formie. ",
          "Dania z tego jadłospisu składają się głównie z chudego mięsa drobiowego, ryb, warzyw, owoców i chudego nabiału. Takie dania dostarczają Ci to, co najlepsze, a jednocześnie odpowiednio uzupełniają zapotrzebowanie kaloryczne. ",
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa</a> na redukcję powinna iść w parze z odpowiednim planem treningowym - tylko wówczas da pożądane efekty. Pamiętaj, że redukcja tkanki tłuszczowej jest procesem długotrwałym. </span>,
        ]
      },
      radom: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa na redukcję</a> cieszy się ogromną popularnością wśród osób, które są aktywne fizycznie i chcą się pozbyć nadmiaru tkanki tłuszczowej. Jeśli i Ty stawiasz sobie za cel odpowiednie wymodelowanie sylwetki, to będziesz zadowolony z takiego menu. </span>,
          "Jadłospis diety sportowej na redukcję składa się z dań o dużej zawartości białka. Węglowodany i tłuszcze są tutaj ograniczone. Wysokobiałkowe menu poprawia metabolizm, co ma przełożenie na spalanie tkanki tłuszczowej. ",
          "Poszczególne dania składają się głównie z chudego mięsa drobiowego, ryb, warzyw, owoców i chudego nabiału. Takie posiłki uzupełniają Twoje zapotrzebowanie kaloryczne, co jest istotne. ",
          "Należy podkreślić, że odpowiednio zbilansowane posiłki chronią mięśnie przed spalaniem. Będziesz zrzucał zbędne kilogramy, ale mięśnie pozostaną nietknięte. Dieta sportowa na redukcję powinna być połączona z odpowiednimi treningami. ",
        ]
      },
      wloclawek: {
        description: [
          "Dieta sportowa na redukcję będzie odpowiednia dla osób aktywnych, które chcą zrzucić dodatkowe kilogramy i pozbyć się nadmiaru tkanki tłuszczowej. Jednocześnie odpowiednio zbilansowane menu zaspokoją niezbędne zapotrzebowanie energetyczne.",
          "Jadłospis jest typowo wysokobiałkowy, dzięki czemu przyspiesza metabolizm, chroniąc jednocześnie mięśnie. W posiłkach znajdziemy mniej węglowodanów oraz tłuszczów. ",
          "Dania z tego menu są zdrowe i smaczne. Dostarczą one Tobie wszystkie niezbędne składniki odżywcze.",
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa</a> powinna być połączona z treningami, gdyż tylko wówczas da one oczekiwane rezultaty. Pamiętaj, że spalanie tkanki tłuszczowej to proces rozłożony w czasie. </span>,
        ]
      },
      rzeszow: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa</a> na redukcję jest dedykowana aktywnym osobom, które chcą pozbyć się dodatkowych kilogramów i tkanki tłuszczowej, ale jednocześnie wiedzą, jak istotna jest tutaj ochrona mięśni. </span>,
          "Warto podkreślić, że spalenie tkanki tłuszczowej może być procesem rozłożonym w czasie. Istotne jest to, że dieta sportowa na redukcję powinna iść w parze z treningami. Taki sposób odżywiania nie powinien być obciążeniem. ",
          "Menu jest w tym przypadku wysokobiałkowe, co „podkręca” metabolizm, ale ochrania mięśnie. Będziesz spalał tkankę tłuszczową, a nie mięśnie. W jadłospisie znajdziesz dania z chudego mięsa drobiowego, ryb, warzyw, owoców i chudego nabiału. ",
          "Posiłki z diety sportowej na redukcję idealnie uzupełniają Twoje dzienne zapotrzebowanie kaloryczne. Całość jest oczywiście odpowiednio zbilansowana. ",
        ]
      },
      szczecin: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa na redukcję</a> jest przeznaczona dla wszystkich tych, którzy chcą się pozbyć tkanki tłuszczowej i dodatkowych kilogramów. Specjalnie skomponowane menu pozwala jednocześnie chronić mięśnie. </span>,
          "Wysokobiałkowe menu przyspiesza metabolizm, co pozwala na spalanie tkanki tłuszczowej, ale nie mięśni. Codzienne posiłki bazują na chudym mięsie drobiowym, rybach, warzywach, owocach. ",
          "W jadłospisie kluczowe jest trzymanie się prawidłowego zapotrzebowania kalorycznego. Całość jest odpowiednio zbilansowana i dostarczy Ci wszystko, co najlepsze. ",
          "Dieta sportowa na redukcję powinna być połączona z odpowiednimi i przemyślanymi treningami. Dzięki temu, kształtowanie figury będzie prostsze. ",
        ]
      },
      czestochowa: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa</a> na redukcję będzie dla Ciebie idealna, jeśli chcesz spalić nadmiar tkanki tłuszczowej, ale jednocześnie ochronić mięśnie. Takie menu nie musi być obciążające dla organizmu oraz dla psychiki. </span>,
          "Jadłospis opiera się na zdrowych i smacznych posiłkach, które są odpowiednio zbilansowane. Poszczególne dania zawierają dużo białka i mało węglowodanów, co przyczynia się do „podkręcenia metabolizmu”, a w rezultacie do spalania tkanki tłuszczowej. ",
          "Menu diety sportowej na redukcję składa się z dużej ilości chudego mięsa drobiowego, owoców, ryb, warzyw, ale i chudego nabiału. Potrawy są bogate w błonnik. Jadłospis eliminuje wyroby z mąki. ",
          "Redukcja tkanki tłuszczowej to proces czasochłonny i kluczowe jest połączenie go z odpowiednim i profesjonalnym planem treningowym. Całość wymaga konsekwencji w działaniu i cierpliwości. ",
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
      },
      bialystok: {
        description: [
          <span>Chcesz zgubić zbędne kilogramy i w końcu spalić nadmiar tkanki tłuszczowej? <a href="https://afterfit-catering.pl/dieta-sportowa-na-redukcje" >Dieta sportowa na redukcję</a> będzie dla Ciebie idealna! Bazuje ona na odpowiednio zbilansowanych posiłkach i zdrowych składnikach. </span>,
          "Jadłospis w przypadku diety na redukcję ułatwia kształtowanie figury. Sama redukcja tkanki tłuszczowej jest procesem rozłożonym w czasie, dlatego też bardzo istotną kwestią jest trzymanie się odpowiedniego zapotrzebowania kalorycznego. ",
          "Podstawą jadłospisu są lekkostrawne potrawy bogate w błonnik. Węglowodany i tłuszcze są w nich ograniczone, natomiast ilość białka zwiększona. Wszystko to wpływa na metabolizm oraz na spalanie tkanki tłuszczowej. Takie menu pozwala pozbyć się jej nadmiaru, ale jednocześnie nie redukuje masy mięśniowej, co jest niezwykle istotne.",
          "Posiłki z diety na redukcję zawierają sporo warzyw, nabiału o niskiej zawartości tłuszczu, ryb, chudego mięsa drobiowego oraz owoców. W menu nie znajdziemy wyrobów z mąki. Dieta na redukcję tkanki tłuszczowej nie musi, a wręcz nie powinna być obciążeniem dla organizmu oraz dla psychiki.",
        ]
      },
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-standard",
    metaDescription: 'Dieta standard pozwoli Ci zacząć się smacznie i zdrowo odżywiać. Menu dostarcza organizmowi niezbędne składniki odżywcze, witaminy i mikroelementy.',
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
      kielce: {
        description: [
          "Chcesz się pozbyć szkodliwych nawyków jedzeniowych, ale nie masz czasu zdrowo gotować i pilnować kalorii? Dieta standard będzie dla Ciebie idealna! Od teraz będziesz jadał odpowiednie dania, pozwalające utrzymać dotychczasową wagę lub delikatnie ją skorygować. ",
          "Jadłospis diety standard pozwala zdrowo się odżywiać i szkodliwe produkty zastąpić pełnowartościowymi. Poszczególne posiłki są urozmaicone, smaczne i lekkie. ",
          "Menu jest tak skomponowane, by dostarczać Tobie witaminy, mikroelementy i składniki odżywcze. Istotne jest tu odpowiednie zbilansowanie. Przechodząc na dietę standardową, odczujesz poprawę swojej kondycji i stanu zdrowia. ",
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standard</a> sprawi, że zaczniesz jeść dania składające się z najlepszych i starannie wyselekcjonowanych składników. W końcu przestawisz się na zdrowe odżywianie. </span>,
        ]
      },
      opole: {
       description: [
         <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standard</a> jest odpowiednia dla osób, które chcą się zdrowo odżywiać i wyeliminować potencjalnie szkodliwe składniki ze swojego codziennego menu. Taki sposób odżywiania pozwoli Ci delikatnie skorygować Twoją wagę. </span>,
         "Poszczególne posiłki są starannie skomponowane i zawierają odpowiednią ilość witamin i innych składników odżywczych. Teraz masz pewność, że jesz dokładnie to, co powinieneś. Jadłospis kładzie nacisk na zdrowe i pełnowartościowe dania. ",
         "Zdrowa dieta sprawi, że lepiej się poczujesz, poprawi się Twoja kondycja i nie tylko. Od teraz będziesz miał siłę i energię!",
         "Dieta standard pokaże Ci, że zdrowe jedzenie jest niezwykle smaczne, ale też zróżnicowane. Takie dania na pewno przypadną Ci do gustu. ",
       ]
      },
      plock: {
        description: [
          "Jeśli zależy Ci na wcieleniu w życie zasad zdrowego odżywiania, to dieta standard będzie dla Ciebie idealna. Pozwoli ona wyeliminować szkodliwe zwyczaje i odstawić niezdrowe przekąski. Menu sprawi, że delikatnie skorygujesz swoją wagę. ",
          "Jadłospis jest tak skomponowany, że na pewno Ci się nie znudzi. Każdego dnia będziesz otrzymywał pełnowartościowe dania, które będą nie tylko smaczne, ale i lekkie. Zaczniesz się w końcu odżywiać dokładnie tak, jak powinieneś. ",
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standardowa</a> eliminuje przetworzone i sztuczne produkty. Menu jest właściwie zbilansowane - zawiera odpowiednią ilość witamin, składników odżywczych i mikroelementów. </span>,
          "Dieta standard pokaże Ci, jaki wpływ ma jedzenie na Twoje zdrowie - sam zobaczysz, jak dobrze będziesz się czuł po takich posiłkach!",
        ]
      },
      wloclawek: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standard</a> to idealna opcja dla osób, którym zależy na tym, by wcielić w życie zasady zdrowego odżywiania. Menu eliminuje szkodliwe i sztuczne produkty, a ponadto daje pewność, że przyjmujesz odpowiednią ilość kalorii. </span>,
          "Taka dieta pozwoli Ci utrzymać dotychczasową wagę albo też delikatnie ją skorygować. Wpłynie ona również na Twoje samopoczucie oraz kondycję - na pewno poczujesz się lepiej!",
          "Jadłospis diety standard obfituje w lekkie dania. Nie będziesz narzekał na nudę - ciekawe kompozycje są niezwykle smaczne oraz urozmaicone. Dodatkowo dostarczają organizmowi wszystkie niezbędne składniki odżywcze. ",
          "Menu eliminuje sztuczne produkty i jest odpowiednio zbilansowane. Przekonasz się, że zdrowe jedzenie jest pyszne!",
        ]
      },
      radom: {
        description: [
          "Coraz więcej osób chce się odżywiać zdrowo i jadać wyłącznie nieprzetworzone produkty. Jeśli i Ty masz taki cel, to dieta standard będzie dla Ciebie idealna. Zadba ona o prawidłowe nawyki jedzeniowe i pozwoli wyeliminować z Twojego jadłospisu wszystko to, co niezdrowe. ",
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standardowa</a> pozwala utrzymać obecną wagę ciała lub też nieznacznie ją skorygować. Poszczególne posiłki są lekkie, ale i sycące. Na pewno nie będziesz po nich głodny. Dania zachwycą Cię smakiem i różnorodnością. </span>,
          "Od teraz nie musisz liczyć kalorii. Każdy posiłek w menu jest odpowiednio zbilansowany, pełen witamin i innych składników odżywczych. ",
          "Właściwe nawyki jedzeniowe i odstawienie niezdrowych przekąsek sprawi, że poczujesz się dużo lepiej i jednocześnie poprawi się Twoja kondycja. ",
        ]
      },
      rzeszow: {
        description: [
          "Dieta standard jest przeznaczona dla tych, którzy chcą się odpowiednio i zdrowo odżywiać. Taki jadłospis pozwoli Ci wcielić w życie odpowiednie nawyki i wyeliminować szkodliwe produkty. ",
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standard</a> pozwala delikatnie skorygować wagę. Jadłospis obejmuje dania składające się z nieprzetworzonych produktów. Lekkie menu zachwyci Cię smakiem. Każdego dnia będziesz jadał urozmaicone posiłki, po których poczujesz się lekko. </span>,
          "Jadłospis sprawi, że będziesz miał energię do działania. Posiłki są odpowiednio zbilansowane i zawierają niezbędne składniki odżywcze.",
          "Taki sposób odżywiania pozwoli Ci się przestawić na zdrowe jedzenie. Bardzo szybko odczujesz różnicę w codziennym funkcjonowaniu. Sam się przekonaj, jak pyszne są pełnowartościowe dania składające się ze zdrowych produktów. ",
        ]
      },
      szczecin: {
        description: [
          "Dieta standard jest odpowiednia dla osób chcących się zdrowo odżywiać. Od teraz codzienne posiłki będą się opierały na właściwie dobranych składnikach. Wyeliminujesz ze swojego menu wszystko to, co źle wpływa na stan Twojego organizmu. ",
          "Prawidłowo zbilansowany jadłospis składa się ze zróżnicowanych dań. Sztuczne i niezdrowe dodatki zostały z nich wykluczone. Od teraz po jedzeniu nie będziesz czuł się „ciężko”. ",
          "Urozmaicone posiłki zaskoczą Cię pysznym smakiem. Przekonasz się, że pełnowartościowe dania są syte i sprawiają, że masz siłę i energię. ",
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standard</a> sprawi, że wykluczysz ze swojego menu wszystko to, co niezdrowe. Różnicę w samopoczuciu i kondycji odczujesz bardzo szybko. </span>,
        ]
      },
      czestochowa: {
        description: [
          "Dieta standard jest dedykowana osobom, które w ferworze codziennych obowiązków nie mają czasu na gotowanie, liczenie kalorii i zastanawianie się, czy na pewno odpowiednio się odżywiają. Jeśli chcesz przestawić się na zdrowe menu, to dieta ta będzie dla Ciebie idealna. ",
          "Jadłospis opiera się na smacznych posiłkach, odpowiednio zbilansowanych, zawierających właściwą ilość składników odżywczych, witamin i mikroelementów. Takie menu idealnie pokrywa Twoje dziennie zapotrzebowanie kaloryczne. ",
          <span><a href="https://afterfit-catering.pl/dieta-standard" >Dieta standardowa</a> pozwala na utrzymanie obecnej masy ciała lub na jej delikatne skorygowanie. Pomoże ona wyeliminować niewłaściwe i przetworzone produkty z codziennego jadłospisu. </span>,
          "Menu sprawi, że oprócz tego, że będziesz się właściwie odżywiać, to dodatkowo zadbasz o stan swojego zdrowia oraz o samopoczucie. W końcu nie będziesz musiał pilnować się, czy jesz odpowiednio. ",
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
      },
      bialystok: {
        description: [
          <span>Jeśli chcesz zadbać o sposób odżywiania się i wyrobić zdrowe nawyki żywieniowe, to <a href="https://afterfit-catering.pl/dieta-standard" >dieta standard</a> będzie dla Ciebie odpowiednia. Pozwala ona na bezproblemowe utrzymanie aktualnej masy ciała lub delikatne jej skorygowanie przy jednoczesnym wyeliminowaniu niewłaściwych produktów i zwyczajów. </span>,
          "Menu pozwala zacząć odpowiednio się odżywiać i jednocześnie odstawić przetworzone i sztuczne produkty. Na diecie standard będziesz dostarczał organizmowi wszystkie niezbędne i pełnowartościowe składniki.",
          "Jadłospis opiera się na posiłkach odpowiednio zbilansowanych. Poszczególne dania gwarantują pokrycie dziennego zapotrzebowania na składniki odżywcze, witaminy i mikroelementy.",
          "Od teraz smaczne i zdrowe posiłki są w zasięgu ręki, nawet jeśli nie masz czasu gotowanie i na pilnowanie tego, co jesz i w jakich ilościach. ",
        ]
      },
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-weganska",
    metaDescription: 'Dieta wegańska zmniejsza ryzyko wystąpienia otyłości, nadciśnienia, cukrzycy i niektórych nowotworów. Eliminuje ona całkowicie produkty odzwierzęce.',
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
      kielce: {
        description: [
          <span>Jesteś zdeterminowany, by całkowicie wyeliminować ze swojego menu mięso i produkty odzwierzęce? <a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> będzie dla Ciebie odpowiednia! Menu jest całkowicie bezpieczne dla Twojego organizmu i dostarcza do niego wszystko to, co niezbędne i najlepsze.</span>,
          "Jadłospis diety wegańskiej bazuje na produktach roślinnych. Poszczególne dania opierają się na różnorodności roślin, owoców, kasz, nasion, orzechów i alg morskich. ",
          "Takie posiłki zaskoczą Cię smakiem, zróżnicowaniem oraz tym, że są syte. Jednocześnie po jedzeniu nie będziesz już ociężały. Przejście na weganizm zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową.",
          "Wszelkie składniki odżywcze są pozyskiwane z produktów roślinnych (np. wapń z mleka sojowego, białko z orzechów itd.). W przypadku diety wegańskiej należy dodatkowo suplementować witaminy D oraz B12. ",
        ]
      },
      opole: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> jest odpowiednia dla osób, które chcą odstawić mięso i produkty odzwierzęce. Należy przy tym podkreślić, że jest ona całkowicie bezpieczna i odpowiednia dla Twojego organizmu. Bardzo szybko odczujesz różnicę w codziennym funkcjonowaniu i samopoczuciu. </span>,
          "Menu wegańskie bazuje na różnorodności roślin, owoców, kasz, orzechów, nasion oraz alg morskich. Wszystkie dania są syte i różnorodne. Na pewno będziesz po nich najedzony, ale jednocześnie będziesz miał też siłę i energię. ",
          "Poszczególne posiłki są odpowiednio zbilansowane i zawierają niezbędne składniki odżywcze, które się pozyskuje z produktów roślinnych. ",
          "W przypadku diety wegańskiej ważna jest dodatkowa suplementacja witaminy D oraz B12, gdyż ciężko je pozyskać z produktów roślinnych. Weganizm ma pozytywny wpływ na zdrowie i zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową.",
        ]
      },
      plock: {
        description: [
          <span>Jeśli chcesz zrezygnować z mięsa i produktów odzwierzęcych, to <a href="https://afterfit-catering.pl/dieta-weganska" >dieta wegańska</a> jest dokładnie tym, czego szukasz. Zmiana nawyków jedzeniowych jest tutaj konkretna, ale sprawi ona, że poczujesz się dużo lepiej. </span>,
          "Jadłospis jest tak skomponowany, by dostarczać Tobie wszystkie niezbędne składniki odżywcze. Pozyskuje się je z produktów roślinnych (np. wapń z mleka sojowego, roślin strączkowych i niektórych warzyw; białko z orzechów, soi, soczewicy i bobu).",
          "Weganizm jest całkowicie bezpieczny dla Twojego organizmu. Dania bazujące na roślinach, zbożach, orzechach, nasionach i algach morskich są zdrowe, smaczne i oryginalne. Na pewno nie będziesz narzekał na nudę. ",
          "Po przejściu na dietę wegańską, powinno się zadbać o dodatkową suplementację witaminy D i B12. Co ważne, taki sposób odżywiania zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową. ",
        ]
      },
      radom: {
        description: [
          "Coraz więcej osób decyduje się przejść na weganizm. Dieta ta jest bardziej restrykcyjna aniżeli wegetariańska. Jej kluczowym założeniem jest bowiem całkowita rezygnacja z mięsa i wszystkich produktów odzwierzęcych. ",
          "Jadłospis bazuje na różnorodności roślin, zbóż, orzechów, nasion i alg morskich. Poszczególne dania są smaczne, zdrowe i zbilansowane tak, by dostarczać wszystko to, co najlepsze do Twojego organizmu. ",
          "Jeśli obawiasz się monotonnych posiłków, to jesteś w błędzie. Dania wegańskie są niezwykle różnorodne, a połączenia składników zachwycają. Tak zdecydowana zmiana nawyków jedzeniowych sprawi, że Twój organizm będzie funkcjonował dużo lepiej, a Twój stan zdrowia się znacząco poprawi. ",
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> jest całkowicie bezpieczna. Zmniejsza ona ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową. Istotne jest to, by przy takim menu, dodatkowo suplementować witaminy D i B12. </span>,
        ]
      },
      szczecin: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> jest idealna dla wszystkich tych, którzy całkowicie wykluczyli lub chcą wykluczyć produkty odzwierzęce i mięso. Taki jadłospis jest zdrowy i bezpieczny i udowadnia, że dania opierające się na różnorodności produktów roślinnych zaskakują pysznym smakiem. </span>,
          "Menu opiera się na roślinach, zbożach, orzechach, nasionach i algach morskich. Jest ono prawidłowo zbilansowane. Składniki odżywcze są pozyskiwane z produktów roślinnych, a więc nie musisz się obawiać o ich niedobory w codziennym menu. ",
          "Weganizm zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową. Mało tego, po przejściu na taki sposób odżywiania się, bardzo szybko odczujesz różnicę w samopoczuciu. ",
          "Przejście na taki sposób odżywiania wymaga dodatkowej suplementacji witaminy D i B12, gdy są one ciężko przyswajalne z produktów roślinnych. ",
        ]
      },
      wloclawek: {
        description: [
          "Dieta wegańska jest odpowiednia dla osób, które zdecydowały się na całkowitą zmianę swych nawyków żywieniowych i chcą odstawić mięso oraz wszelkie produkty odzwierzęce. Takie menu jest w pełni bezpieczne oraz zdrowe. ",
          "Odpowiedni jadłospis opierający się na roślinach, owocach, algach morskich, nasionach i orzechach pozwala dostarczyć wszystkie niezbędne składniki odżywcze. Poszczególne dania są urozmaicone i smaczne, a ponadto zapewniają Ci energię do działania. ",
          "Składniki odżywcze w diecie wegańskiej pochodzą z produktów roślinnych (np. wapń z mleka sojowego, białko z orzechów itd.). Ważne, by pamiętać o dodatkowej suplementacji witaminy D oraz B12 (ciężko je pozyskać z produktów roślinnych). ",
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> wpływa pozytywnie na samopoczucie i stan zdrowia, a przy tym minimalizuje ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową.</span>,
        ]
      },
      rzeszow: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> zakłada całkowitą rezygnację z mięsa i wszystkich produktów odzwierzęcych. Menu opiera się na różnorodności roślin, zbóż, orzechów, nasion i alg morskich. Należy tu podkreślić, że jest ono całkowicie bezpieczne i odpowiednio zbilansowane. </span>,
          "W przypadku tej diety, składniki odżywcze są pozyskiwane z produktów roślinnych. Posiłki są niezwykle urozmaicone i zachwycają smakiem. ",
          "Weganizm to sposób odżywiania, który sprawi, że poczujesz się dużo lepiej, a jednocześnie Twój organizm będzie zupełnie inaczej funkcjonował. ",
          "Dieta ta zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową. W przypadku tego menu, niezbędna jest dodatkowa suplementacja witaminy D i B12. ",
        ]
      },
      czestochowa: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> eliminuje mięso i produkty odzwierzęce. Jeśli chcesz całkowicie zmienić swoje zwyczaje jedzeniowe, to będzie ona dla Ciebie odpowiednia. Poszczególne posiłki nieraz Cię zaskoczą swoją różnorodnością oraz niesamowitym smakiem. </span>,
          "Jadłospis jest urozmaicony i opiera się na roślinach, zbożach, orzechach, nasionach i algach morskich. Należy podkreślić, że menu wegańskie jest całkowicie bezpieczne dla organizmu. Pozytywne skutki działania tej diety odczujesz bardzo szybko. Wpłynie ona na Twoje samopoczucie, ale i figurę. ",
          "Menu pozwala dostarczyć organizmowi wszystko to, co niezbędne. Składniki odżywcze są pozyskiwane z produktów roślinnych i w odpowiednich ilościach. Co istotne, weganizm pozwala zmniejszyć ryzyko wystąpienia otyłości, nadciśnienia, cukrzycy, nowotworów, kamicy żółciowej. ",
          "W weganizmie bardzo ważne jest to, by dodatkowo suplementować witaminy D oraz B12, gdyż pozyskiwanie ich z produktów roślinnych jest niewystarczające.",
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
      },
      bialystok: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-weganska" >Dieta wegańska</a> jest odpowiednia dla osób, które chcą zrezygnować z mięsa i produktów odzwierzęcych. Zmiana nawyków jedzeniowych jest w tym przypadku konkretna, ale przy odpowiednim menu całkowicie bezpieczna. </span>,
          "Jadłospis bazuje na roślinach, zbożach, orzechach, nasionach i algach morskich. Poszczególne posiłki zaskakują pysznym smakiem, oryginalnym połączeniem produktów i kreatywnością. ",
          "W przypadku diety wegańskiej, nie musisz się martwić o to, czy dostarczasz organizmowi wszystko to, co niezbędne. Składniki odżywcze są tutaj pozyskiwane w odpowiednich ilościach z produktów roślinnych (np. wapń z mleka sojowego, roślin strączkowych i niektórych warzyw; białko z orzechów, soi, soczewicy i bobu).",
          "Jadłospis diety wegańskiej wymaga dodatkowej suplementacji witaminy D oraz B12, gdyż ich pozyskiwanie z produktów roślinnych jest trudne i niewystarczające dla organizmu. Warto podkreślić, że weganizm zmniejsza ryzyko zachorowania na otyłość, nadciśnienie, cukrzycę, nowotwory i kamicę żółciową.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-wegetarianska",
    metaDescription: 'Dieta wegetariańska bazuje na warzywach, owocach, roślinach, kaszach i nasionach. Mimo wyeliminowania mięsa, posiłki są smaczne, sycące i zróżnicowane.',
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
      opole: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> jest odpowiednia dla osób, które chcą odstawić mięso. Dania bezmięsne są różnorodne, smaczne i sycące. Pozwalają one poprawić stan zdrowia i kondycję. </span>,
          "Menu wegetariańskie bazuje na różnorodności roślin, owoców, kasz, orzechów, nasion. Całość zaspokaja dzienny bilans energetyczny i dodaje Ci jednocześnie energii. ",
          "Jadłospis jest niezwykle zróżnicowany. Poszczególne posiłki zawierają spore ilości błonnika, witamin, potasu i magnezu, a więc niezwykle istotnych składników dla organizmu. Kluczowe jest tutaj również odpowiednie zbilansowanie dań. ",
          "Wegetarianizm to sposób odżywiania, który wpływa pozytywnie na sylwetkę, ale nie tylko. Ogranicza on również ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory. Jedz smacznie, zdrowo i odstaw mięso! ",
        ]
      },
      kielce: {
        description: [
          <span>Chcesz całkowicie odstawić mięso? <a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> jest tym, czego potrzebujesz. Poszczególne dania są sycące, smaczne, zdrowe i różnorodne. Sam zobaczysz, ile energii dostarcza bezmięsne menu. </span>,
          "Jadłospis diety wegetariańskiej opiera się na różnorodności roślin, owoców, kasz, orzechów, nasion. Dania są bogate w błonnik, witaminy, potas, magnez, nienasycone kwasy tłuszczowe. Całość idealnie wpisze się w potrzeby Twojego organizmu.",
          "Menu wegetariańskie jest odpowiednio zbilansowane i dostarcza Ci wszystko to, co niezbędne. Co istotne, dania te zaspokajają Twój dzienny bilans energetyczny. ",
          "Wegetarianizm pozwala ograniczyć ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory; a dodatkowo pomaga utrzymać szczupłą sylwetkę i odpowiednią kondycję organizmu. ",
        ]
      },
      plock: {
        description: [
          <span>Jeśli chcesz w końcu odstawić mięso, to <a href="https://afterfit-catering.pl/dieta-wegetarianska" >dieta wegetariańska</a> będzie dla Ciebie idealna! Pokaże ona Tobie, jak smaczne, urozmaicone i pożywne mogą być dania opierające się na warzywach, owocach, kaszach, orzechach i nasionach!</span>,
          "Takie menu będzie miało pozytywy wpływ na Twoją figurę, ale nie tylko. Dzięki przejściu na wegetarianizm poczujesz się lepiej i będziesz miał więcej energii. Mało tego, ograniczone zostanie również ryzyko chorób serca, cukrzycy, otyłości i nowotworów. ",
          "Jadłospis w tej diecie jest perfekcyjnie zbilansowany! Codziennie będziesz dostarczał organizmowi odpowiednią ilość składników odżywczych. Dania wegetariańskie zawierają sporą ilość błonnika, witamin, potasu, magnezu i nienasyconych kwasów tłuszczowych. ",
          "Dieta wegetariańska to prawdziwy hit. Dania z menu będą Cię zaskakiwać wyjątkowym smakiem i ciekawym połączeniem składników. ",
        ]
      },
      radom: {
        description: [
          "Dieta wegetariańska to prawdziwy hit ostatnich lat. Obecnie coraz więcej osób decyduje się przejść na ten sposób żywienia. Odstawienie mięsa to nie tylko moda, ale i wyraz troski o środowisko, ale również o własne zdrowie.",
          "Nie od dzisiaj wiadomo, że menu bezmięsne ma wpływ na samopoczucie, sylwetkę i ogólny stan organizmu. Jadając posiłki opierające się na warzywach, owocach, kaszach, orzechach i nasionach będziesz najedzony, ale jednocześnie nie zabraknie Ci energii. ",
          <span><a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> jest urozmaicona, a posiłki zachwycą Cię smakiem. Będziesz nimi zachwycony. Mało tego, poszczególne składniki zawierają błonnik, witaminy, potas, magnez, a więc dostarczysz organizmowi wszystko to, co najlepsze i niezbędne. </span>,
          "Wegetarianizm pozwala ograniczyć ryzyko chorób serca, cukrzycy, otyłości i nowotworów. Nawet osoby, które nigdy wcześniej nie były na takiej diecie, będą nią zachwycone, a efekty jej działania odczują niezwykle szybko!",
        ]
      },
      wloclawek: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> opiera się na całkowitym wyeliminowaniu mięsa z jadłospisu. Będzie ona idealna dla wszystkich osób, które chcą zmienić swoje nawyki żywieniowe i poczuć się lepiej. </span>,
          "Menu jest niezwykle urozmaicone, a poszczególne dania zaskakują smakiem, oryginalnymi połączeniami składników oraz pożywnością. Jadłospis opiera się tutaj na warzywach, owocach, roślinach, kaszach, orzechach i nasionach. ",
          "Wegetarianizm to sposób odżywiania, który sprawi, że będziesz pełen energii. Jednocześnie jadłospis jest tak zbilansowany, że dostarczasz organizmowi wszystkie niezbędne składniki. Twój dzienny bilans energetyczny zostanie zaspokojony. ",
          "Taki sposób odżywiania poprawia stan zdrowia i minimalizuje ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory. Przekonaj się sam, jak pyszne mogą być bezmięsne dania.  ",
        ]
      },
      rzeszow: {
        description: [
          "Dieta wegetariańska opiera się na różnorodności roślin, owoców, kasz, warzyw, nasion, orzechów i nie tylko. Rezygnacja z mięsa sprawi, że poczujesz się lżej oraz lepiej. Poprawi się Twój stan zdrowia oraz kondycja. Mało tego, wegetarianizm wpływa także pozytywnie na wagę i figurę. ",
          "Menu bezmięsne nie musi być nudne! W jadłospisie znajdziesz ciekawe i sycące dania, które dodadzą Ci energii i zachwycą smakiem. ",
          "Jadłospis jest odpowiednio zbilansowany i dostarcza Ci niezbędne składniki odżywcze. Po takich posiłkach będziesz najedzony!",
          <span><a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> pozwala ograniczyć ryzyko chorób serca, cukrzycy, otyłości i nowotworów. Mało tego, szybko odczujesz różnicę, jeśli chodzi o codzienne funkcjonowanie. Nic zatem dziwnego, że coraz więcej osób stawia na bezmięsne menu.</span>,
        ]
      },
      szczecin: {
        description: [
          "Dieta wegetariańska jest odpowiednia dla wszystkich osób, które zdecydowały się wykluczyć mięso ze swojego menu. Taki sposób odżywiania jasno pokazuje, że dania z warzyw, owoców, roślin, kasz, nasion i orzechów są różnorodne, smaczne i syte. ",
          "Jadłospis wegetariański pozytywnie wpłynie na Twoją figurę. Jednocześnie odczujesz zmianę na plus, jeśli chodzi o stan organizmu i samopoczucie. Teraz po posiłkach nie będziesz miał poczucia „przejedzenia”. ",
          <span><a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> jest bogata w składniki odżywcze i dostarcza Ci wszystko to, co najlepsze i zdrowe dla organizmu. Co ważne, poszczególne posiłki zaspokajają dzienny bilans energetyczny. </span>,
          "Wegetarianizm ogranicza ryzyko chorób serca, cukrzycy, otyłości i nowotworów. Pamiętaj, że odstawienie mięsa jest procesem całkowicie bezpiecznym. ",
        ]
      },
      czestochowa: {
        description: [
          <span><a href="https://afterfit-catering.pl/dieta-wegetarianska" >Dieta wegetariańska</a> pozwala wyeliminować mięso ze swojego codziennego menu. Nowe zwyczaje żywieniowe sprawią, że się poczujesz się zdrowiej i jednocześnie lepiej. </span>,
          "Jadłospis opiera roślinach, owocach, kaszach, orzechach i nasionach. Menu jest odpowiednio zbilansowane i zawiera właściwą ilość białka, tłuszczów, węglowodanów, witamin i minerałów. Będziesz dostarczał swojemu organizmowi wszystko to, co najlepsze. ",
          "Dania wegetariańskie są różnorodne, smaczne oraz zdrowe. Zaspokajają one dzienny bilans energetyczny, a posiłki są sycące. Od teraz nie będziesz miał poczucia przepełnienia po jedzeniu. ",
          "Przechodząc na tę dietę, odczujesz poprawę swojej kondycji i samopoczucia. Wegetarianizm ogranicza ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory. Taki sposób odżywiania wpłynie pozytywnie na Twoją sylwetkę i jednocześnie zapewni Ci dużo siły i energii. ",
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
      },
      bialystok: {
        description: [
          <span>Jeśli chcesz wyeliminować mięso ze swojego codziennego menu, to <a href="https://afterfit-catering.pl/dieta-wegetarianska" >dieta wegetariańska</a> jest tym, czego szukasz. Jadłospis jest odpowiednio zbilansowany i zawiera pozwala dostarczać do organizmu niezbędną ilość składników odżywczych.</span>,
          "Menu w przypadku diety wegetariańskiej opiera się na zwiększeniu ilości błonnika, witamin, potasu, magnezu i nienasyconych kwasów tłuszczowych. Poszczególne posiłki bazują na różnorodności roślin, owoców, kasz, orzechów, nasion.",
          "Dania wegetariańskie są pożywne, smaczne i zdrowe. Sprawiają one, że jesteś najedzony, ale jednocześnie nie masz poczucia przepełnienia. Taki jadłospis zaspokoją dzienny bilans energetyczny i sprawia, że masz siłę do działania. ",
          "Wegetarianizm pozwala ograniczyć ryzyko zachorowania na choroby serca, cukrzycę, otyłość i nowotwory. Taki sposób odżywiania jednocześnie wpłynie pozytywne na Twoją kondycję, stan zdrowia, samopoczucie oraz sylwetkę.",
        ]
      }
    },
    image: "../images/diets/dieta-paleo.png"
  },
  {
    dietUrl: "dieta-wege-z-rybami",
    metaDescription: 'Dieta dla osób, które chcą się zdrowo odżywiać i pragną ze swojego jadłospisu wyeliminować mięso nie rezygnując przy tym z ryb',
    dietImg: "../images/diets/dieta-odchudzajaca.jpg",
    dietGallery: {
      1: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_3.jpg",
      2: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_9.jpg",
      3: "https://miscellaneous-images.s3.eu-central-1.amazonaws.com/afterfit_2.jpg",
    },
    fullName: "Dieta wege z rybami",
    questions: {
      1: {
        question: "Rozkład makroskładników",
        answer: "Białko: 15-25%\n" +
          "Węglowodany: 45-55%\n" +
          "Tłuszcze: 25-35%"
      },
      2: {
        question: "Dla kogo?",
        answer: <span>1. Dedykowana osobom, które nie spożywają mięsa ale nie chcą rezygnować z ryb czy owoców morza, które są doskonałym źródłem białka i kwasów omega - 3.<br/> <br/>
          2. Dla wszystkich, którzy pragną zdrowo się odżywiać i zadbać o prawidłową masę ciała czy zrzucić zbędne kilogramy.<br/> <br/></span>
      },
    },
    menu: {
      breakfast: "Sałatka z grillowaną cukinią, serem kozim i czarną porzeczką",
      secondBreakfast: "Jogurtowy deser z mango z nasionami chia",
      dinner: "Pełnoziarnisty makaron z krewetkami, pomidorkami i szpinakiem",
      tea: "Muffinki z parmezanem, cukinią i komosą",
      supper: "Dorsz w sosie musztardowym, mix warzyw na parze, ryż brązowy",
    },
    offerDescription: "Dieta dla osób nie jedzących mięsa czerwonego i drobiu",
    cityDescription: {
      lodz: {
        description: [
          "Dieta pudełkowa wege z rybami przeznaczona jest dla osób, które chcą się zdrowo odżywiać, ale ze względów zdrowotnych lub smakowych pragną ze swojego jadłospisu wyeliminować mięso nie rezygnując przy tym z ryb i owoców morza.",
          "W diecie wege z rybami oprócz ryb i owoców morza znajdują się produkty mleczne, jaja, warzywa, owoce, rośliny strączkowe, produkty zbożowe oraz różnego rodzaju tłuszcze roślinne.",
          "Podobnie jak dieta wegetariańska dostarczy ona nam sporą dawkę witamin, składników mineralnych, błonnika oraz znacznie więcej pełnowartościowego białka.",
          "Skomponowana została tak, aby dostarczała wszystkich niezbędnych składników odżywczych w odpowiednich ilościach. ",
        ]},
      aglomeracjaSlaska: {
        description: [
          "Dieta pudełkowa wege z rybami przeznaczona jest dla osób, które chcą się zdrowo odżywiać, ale ze względów zdrowotnych lub smakowych pragną ze swojego jadłospisu wyeliminować mięso nie rezygnując przy tym z ryb i owoców morza.",
          "W diecie wege z rybami oprócz ryb i owoców morza znajdują się produkty mleczne, jaja, warzywa, owoce, rośliny strączkowe, produkty zbożowe oraz różnego rodzaju tłuszcze roślinne.",
          "Podobnie jak dieta wegetariańska dostarczy ona nam sporą dawkę witamin, składników mineralnych, błonnika oraz znacznie więcej pełnowartościowego białka.",
          "Skomponowana została tak, aby dostarczała wszystkich niezbędnych składników odżywczych w odpowiednich ilościach. ",
        ]},
    },
  },
]
