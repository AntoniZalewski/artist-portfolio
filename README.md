Portfolio Artysty - Marcin Zalewski
Strona internetowa prezentująca portfolio artysty Marcina Zalewskiego, stworzona przy użyciu Next.js, React, TypeScript i Tailwind CSS.

⚙️ Lokalne Środowisko Programistyczne
Poniższa instrukcja krok po kroku pozwoli Ci na uruchomienie projektu na Twoim komputerze w celach deweloperskich i testowych.

Wymagania Wstępne
Upewnij się, że na Twoim komputerze zainstalowane są następujące narzędzia:

Node.js: Wersja 18.17.0 lub nowsza. Możesz pobrać instalator ze oficjalnej strony Node.js.

npm (lub yarn / pnpm): Menedżer pakietów, który jest instalowany razem z Node.js.

Aby sprawdzić, czy masz zainstalowanego Node.js, otwórz terminal i wpisz:

Bash

node -v
Instalacja
Sklonuj repozytorium (jeśli pobierasz projekt po raz pierwszy):

Bash

git clone <URL_TWOJEGO_REPOZYTORIUM>
Przejdź do folderu projektu:

Bash

cd <NAZWA_FOLDERU_PROJEKTU>
Zainstaluj zależności projektu. Otwórz terminal w głównym folderze projektu i uruchom jedną z poniższych komend (wybierz menedżer pakietów, którego używasz):

Używając npm:

Bash

npm install
Używając yarn:

Bash

yarn install
Używając pnpm:

Bash

pnpm install
Ta komenda pobierze wszystkie biblioteki i narzędzia zdefiniowane w pliku package.json, które są niezbędne do działania aplikacji.

🚀 Uruchamianie Aplikacji
Tryb deweloperski (do pracy na co dzień)
W tym trybie aplikacja będzie automatycznie przeładowywać się po każdej zmianie w kodzie, co jest idealne do programowania i testowania na żywo.

Uruchom serwer deweloperski:

Bash

npm run dev
Otwórz przeglądarkę i przejdź pod adres http://localhost:3000.

Tryb produkcyjny (do testowania finalnej wersji)
Ten tryb pozwala przetestować zoptymalizowaną, produkcyjną wersję aplikacji, tak jak będzie ona działać po wdrożeniu na serwer.

Zbuduj aplikację:

Bash

npm run build
Ta komenda stworzy zoptymalizowaną wersję produkcyjną aplikacji w folderze .next.

Uruchom zbudowaną aplikację:

Bash

npm run start
Serwer produkcyjny zostanie uruchomiony, zazwyczaj również pod adresem http://localhost:3000.

Dostępne Skrypty
W pliku package.json znajdziesz następujące skrypty:

npm run dev: Uruchamia aplikację w trybie deweloperskim.

npm run build: Buduje aplikację do wersji produkcyjnej.

npm run start: Uruchamia serwer z wersją produkcyjną aplikacji.

npm run lint: Uruchamia ESLint w celu znalezienia błędów i problemów ze stylem kodu.