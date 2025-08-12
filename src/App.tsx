import { useState } from "react";
import { response } from "./data";
import { CharacterCard } from "./CharacterCard";

export default function App() {
    // Anfangsdaten aus unserer data.ts als Zustand (State) speichern
    const [characters] = useState(response.results);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Rick & Morty Galerie</h1>
            <div style={{
                display: "flex",     // Flexbox Layout für die Karten
                gap: "10px",         // Abstand zwischen den Karten
                flexWrap: "wrap"     // Karten umbrechen, wenn nicht mehr Platz ist
            }}>
                {/* Über alle Charaktere iterieren und für jeden eine CharacterCard anzeigen */}
                {characters.map((char) => (
                    <CharacterCard
                        key={char.id}        // Einzigartiger Schlüssel für React
                        name={char.name}     // Name an CharacterCard weitergeben
                        image={char.image}   // Bild-URL an CharacterCard weitergeben
                    />
                ))}
            </div>
        </div>
    );
}

/*
ERKLÄRUNG:
1. useState speichert die Charakter-Daten aus response.results als "characters".

2. Im JSX wird ein Container mit Überschrift angezeigt.

3. Im inneren Container (Flexbox) gehen wir mit .map() durch alle Charaktere.

4. Für jeden Charakter wird eine CharacterCard-Komponente gerendert, die Name und Bild zeigt.

5. key ist wichtig für React, damit es die Karten unterscheiden kann.

6. So entsteht die Galerie mit allen Charakteren aus unseren Daten.
*/
