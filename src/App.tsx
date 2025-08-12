// React-Hook useState importieren, um State in der Komponente zu nutzen
import { useState } from "react";
// Unsere Charakter-Daten importieren
import { response } from "./data";
// Komponente zum Anzeigen einzelner Charakterkarten importieren
import { CharacterCard } from "./CharacterCard";
// Suchfeld-Komponente importieren
import { Searchbar } from "./Searchbar";

export default function App() {
    // Alle Charaktere aus den Daten als State speichern (unveränderlich)
    const [characters] = useState(response.results);
    // Suchbegriff als State speichern, startet leer
    const [searchTerm, setSearchTerm] = useState("");

    // Filtere die Charaktere nach dem Suchbegriff (Groß-/Kleinschreibung ignorieren)
    const filteredCharacters = characters.filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Funktion zum Aktualisieren des Suchbegriffs (wird an Searchbar übergeben)
    function handleSearch(value: string) {
        setSearchTerm(value);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Rick & Morty Galerie</h1>

            {/* Suchfeld mit aktuellem Suchbegriff und Funktion zum Ändern */}
            <Searchbar searchTerm={searchTerm} onSearchChange={handleSearch} />

            {/* Fehlermeldung, wenn kein Charakter zum Suchbegriff passt */}
            {filteredCharacters.length === 0 && (
                <p style={{ color: "red" }}>
                    Keine Charaktere gefunden, die "{searchTerm}" enthalten.
                </p>
            )}

            {/* Flexbox-Container für die Charakterkarten */}
            <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap"
            }}>
                {/* Für jeden gefilterten Charakter eine CharacterCard anzeigen */}
                {filteredCharacters.map((char) => (
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
