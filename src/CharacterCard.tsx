type CharacterProps = {
    name: string;
    image: string;
};

export function CharacterCard({ name, image }: CharacterProps) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            width: "200px"
        }}>
            <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{name}</h3>
        </div>
    );
}

/*
ERKLÄRUNG:
1. "type CharacterProps" legt fest, welche Eigenschaften (Props) die Komponente erwartet:
   - name: der Name des Charakters (Text)
   - image: die Bild-URL des Charakters (Text)

2. Die Funktion "CharacterCard" ist eine React-Komponente.
   - Sie bekommt "name" und "image" als Props.
   - Mit { name, image } holen wir die Werte direkt aus den Props heraus.

3. Im return-Teil wird HTML-ähnlicher JSX-Code zurückgegeben:
   - Ein <div> als Container mit Rahmen, Innenabstand und fester Breite.
   - Ein <img>-Tag zeigt das Bild an (src = image, alt = name).
   - Ein <h3>-Tag zeigt den Namen des Charakters an.

4. Die Komponente wird später in "App.tsx" aufgerufen und bekommt dort die Daten aus dem State.
*/
