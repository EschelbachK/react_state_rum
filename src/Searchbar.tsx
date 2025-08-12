// Definiert die Props (Eigenschaften), die die Searchbar erwartet:
// - searchTerm: der aktuelle Text im Suchfeld
// - onSearchChange: Funktion, die ausgeführt wird, wenn der Text sich ändert
type SearchbarProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
};

// Searchbar-Komponente mit zwei Props
export function Searchbar({ searchTerm, onSearchChange }: SearchbarProps) {
    return (
        // Eingabefeld für die Suche
        <input
            type="text" // Typ ist Text
            placeholder="Suche nach Charakter..." // Platzhalter-Text im Eingabefeld
            value={searchTerm} // Wert des Eingabefelds kommt aus dem Suchbegriff (Props)
            // Wenn sich der Text ändert, wird onSearchChange mit dem neuen Wert aufgerufen
            onChange={(e) => onSearchChange(e.target.value)}
            // Einfache Styles für das Eingabefeld
            style={{
                padding: "8px",
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                fontSize: "16px"
            }}
        />
    );
}
