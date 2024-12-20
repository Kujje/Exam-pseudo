// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START
FUNCTION "SplitNota"
INPUT "summa"
INPUT "vänner" 
INPUT "dricks"

CALCULATE "totala_summan" = summa + (summa*dricks)
CALCULATE "en_vän" = totala_summan / vänner

PRINT "Varje vän ska betala: en_vän"

ENDFUNCTION

CALL FUNCTION "SplitNota"

END
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*
START
function play()
    SET ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE", "EYE", "LID"];
    SET startOrd = "FOUR"; // Startordet
    SET slutord = "FIVE"; // Slutordet

    PRINT "Startord: " + startOrd + ", Slutord: " + slutord;

    SET currentWord = startOrd;

    WHILE currentWord != slutord
        PRINT "Nuvarande ord: " + currentWord;

        INPUT "nextWord"; 

        // Kontrollera om ordet finns i ordboken
        if nextWord NOT IN ordbok THEN
            PRINT "Ordet finns inte i ordboken. Försök igen.";
            CONTINUE;
        ENDIF

        // Kontrollera om bara en bokstav har ändrats
        if NOT isOneLetterDifferent(currentWord, nextWord) THEN
            PRINT "Du får bara ändra en bokstav! Försök igen.";
            CONTINUE;
        ENDIF

        // Uppdatera nuvarande ord
        currentWord = nextWord;
    ENDWHILE

    PRINT "Grattis! Du har nått slutordet: " + slutord;
END FUNCTION

    // Här behöver du skriva koden för din funktion
function isOneLetterDifferent(word1, word2)
    SET diffCount = 0;

    // Kontrollera om längderna är olika
    if LENGTH(word1) != LENGTH(word2) THEN
        return false;
    ENDIF

    // Jämför bokstav för bokstav
    FOR index FROM 0 TO LENGTH(word1) - 1
        if word1[index] != word2[index] THEN
            diffCount = diffCount + 1;
        ENDIF
    ENDFOR
END
    // Kontrollera om exakt en skillnad finns
    if diffCount == 1 THEN
        return true;
    ELSE
        return false;
    ENDIF
END FUNCTION

*/
