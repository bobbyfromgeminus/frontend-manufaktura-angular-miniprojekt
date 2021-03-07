# Frontend fiktív megrendelés
## Angular gyakorló feladat a tanulócsoport számára

### Szervusz!
Egy közös ismerősünktől, Cserkó Józsitól kaptam meg az elérhetőségedet. Nekem egy jó webesre lenne szükségem és ő téged ajánlott.
Rögtön a tárgyra is térnék. Szájmaszkok gyártásával és forgalmazásával foglalkozom és szükségem lenne egy egyszerű, egy lapos weboldalra, amelyen minden héten négy darab akciós termékünket ajánlanánk.
Nincs szükségem tehát semmi bonyolult dologra. A következő lenne az elképzelésem:

- A fejlécben egy egyszerű képlapozóra gondoltam, amelyhez adok is neked három képet!
- Menüre nem lesz szükség, hisz egy egyszerű, egy lapos oldalról lesz szó.
- A fejléc alatt szeretném egyik kedvenc íróm idézetét elhelyezni! Ezt majd lentebb megtalálod.
- Ezt követően jöhetne a négy maszk, amelyekről megjelenne egy kép, a neve, egy rövidke szöveg és az ára!
- Annyit kérnék még, hogy az asztali gépemen négy maszk jelenjen meg egymás mellett, a tabletemen már csak kettő férjen el egy sorban, a mobilomon pedig egymás alatt, egyesével szerepeljenek a maszkok!
- Egy kis egyszerű láblécet is szeretnék még legalulra egy egyszerű szöveggel! Lentebb ezt is megtalálod majd.
- Összedobtam egy vázlatot, amely mentén tudsz majd dolgozni. Ez nem egy kőbe vésett design, az ízlésedre bízom a megvalósítást. Annyit kérek csak, hogy a mellékelt képeket használd a fejléchez és a termékekhez!

Említettem, hogy hetente frissülne ez az oldal. Sajnos nekem nem lesz időm ezzel foglalkozni, ezért szerkesztő felületre sem lesz szükségem. Ellenben kérhetem-e, hogy a frissítéseket elvégezd majd nekem?
Józsi említette, hogy felvértezett a megfelelő tudással és még annyit mondott, hogy adjam át neked az alábbi üzenetet:

***Bootstrapelj! A termékeket pedig egy szervízből injektáld be! Még Jason sem kell hozzá!***

Amint írtam is, egyszerű a feladat és ebben Józsi üzenete is megerősített, hisz ha még Jasont sem kell felhívnod, hogy segítséget kérj tőle, akkor biztosan nem bonyolult a dolog. Egyébként ki ez a Jason, a másik mentorod? :)

Mit gondolsz, szombatra el tudnál vele készülni, vagy valameddig eljutni a megvalósításban?
Találkozhatnánk 18:00-kor a Teams-en és átbeszélnénk, hogy meddig jutottál és ha kérdésed van, azt is megbeszélhetnénk!
Majd megadom az elérhetőségemet.

Nagyon bízom benned! Józsi csupa jókat mondott rólad.

Üdvözlettel: MaszkMester


## Szöveges anyagok:

### Idézet:
- Az élet egy maszk, amin keresztül a mindenség kifejezi önmagát. - Frank Herbert

### Maszkok adatai:

#### CIAO maszk
- Hidd el nekem , ennyiért ez nem pénzrablás.
- 3990,-

#### SPIDER maszk
- Ezzel a maszkkal mindenkit behálózol.
- 4990,-

#### LECTER maszk
- Viselése igazán lebilincselő élmény.
- 3990,-

#### HULK maszk
- Habár zöld, ezzel az arcodon, garantáltan nem tűnsz majd éretlennek.
- 3990,-

A képeket úgy neveztem el, ahogy a maszkokat is hívják.

### Lábléc szövege:
- MASZKMESTER AKCIÓK

____________________________________________________

# Feladatmegoldás menete

## 1. GIT
- Git repó létrehozása.
- Ha üres repót hozol létre és az angular projekteddel szeretnéd később összekötni, akkor leghamarabb a - 03-as pont után tedd meg az alábbiak szerint:
```terminal
echo "# maszkmester-angular" >> README.md  // ha üres, vagy nem létezik a README.md fájlod
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/felhasznalonev/reponev.git  // figyelj, hogy jó neveket használj!
git push -u origin main
```

## 2. ANGULAR
- Telepítjuk az Angulart, ha még nem tettük.
```terminal
npm i @angular/cli -g 
```

## 3. ÚJ PROJEKT
- Létrehozunk egy új Aggular projektet, majd belépünk a mappába.
```terminal
ng new projektneve
cd projektneve
code . -r
```

## 4. TELEPÍTÉSEK
- Bootstrap, jquery telepítése
```terminal
npm i bootstrap jquery
```

## 5. KONFIGURÁLÁS
- A bootstrap css-ét, valamint a bootstrap és a jquery javascript fájlját fel kell venni az angular.json fájlban.
```json
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css", 
        "src/styles.scss"
    ],
    "scripts": [
        "./node_modules/jquery/dist/jquery.js", 
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
```

## 6. TERVEZÉS
- Tervezd meg akár papíron, hogy miként építed fel majd az alkalmazásodat!
- Milyen osztályok, servicek, komponensek szükségesek és azok hogyan kapcsolódnak majd egymáshoz.

## 7. KÓDOLÁS - HTML - CSS
- Létrehozzuk a szükséges komponenseket.
- Összeállítjuk az alkalmazás vázát képező html-t és az alap designt css-ben, majd kiszervezzük a megfelelő kódrészeteket a megfeleő komponensekbe.

## 8. KÓDOLÁS - Typescript
- Létrehozzuk a szükséges osztályokat, serviceket.
- A komponensek .ts fájljaiban megvalósítjuk az alkalmazás logikáját a tervünk alapján.

## 9. FINOMÍTÁS
- Logikai és design finomítások.
    
## 10. TESZTELÉS