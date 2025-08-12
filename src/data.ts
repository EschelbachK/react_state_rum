export const response = {
    results: [
        {
            id: 1,
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            id: 3,
            name: "Summer Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        }
    ]
};

/*
ERKLÄRUNG:
1. "export const response" → Wir erstellen eine Konstante namens "response" und exportieren sie,
   damit sie in anderen Dateien importiert werden kann.

2. Das Objekt "response" hat eine Eigenschaft "results":
   - "results" ist ein Array (Liste) von Charakter-Objekten.

3. Jedes Charakter-Objekt hat:
   - id: eine eindeutige Nummer für den Charakter.
   - name: den Namen des Charakters (Text).
   - image: die URL zum Bild des Charakters.

4. Diese Daten werden in "App.tsx" importiert und als Startwert in den State gesetzt,
   damit wir sie mit .map() durchgehen und die CharacterCard-Komponenten anzeigen können.
*/
