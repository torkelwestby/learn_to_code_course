# Kursnotater: mentale modeller i Claude Code

Aha-poenger fra tidlig diskusjon – ment som forklaringer å gjenfortelle til deltakere.
Hvert punkt har en ferdig "oneliner" du kan si høyt.

## 1. Mappe = prosjekt
Claude Code har **ingen egen "prosjekt"-greie**. Organiseringsprinsippet er den lokale mappa.
Hver mappe du starter `claude` fra får sin egen historikk og sitt eget minne.
> *"Claude Code har ikke prosjekter – mappa di ER prosjektet. Start alltid Claude fra prosjektmappa."*

## 2. Session ≈ chat, og den er mappebundet
En session er én samtale/kjøring. Den lagres automatisk.
- `claude` = ny, blank
- `claude -c` (`--continue`) = fortsett siste session **i denne mappa**
- `claude -r` (`--resume`) = velg fra tidligere sessions
`-c`/`-r` viser bare sessions startet fra samme mappe.
> *"En session er en chat. Du kan ta opp igjen gamle med -c eller -r, men bare de som tilhører mappa du står i."*

## 3. Hva overlever mellom sessions
- `CLAUDE.md` i mappa (leses automatisk hver gang) ← prosjektets hukommelse på papir
- Minne (`.claude/projects/.../memory/`)
- `settings.json` (permissions, statuslinje, modell)
- IKKE selve samtalen – kun via `-c`/`-r`
> *"Vil du at en ny session skal kjenne prosjektet, legg det i CLAUDE.md. Den leses hver gang."*

## 4. Statuslinje og mappe låses ved oppstart
Endrer du `settings.json` mens Claude kjører, må du starte på nytt for at det slår inn.
Statuslinja nederst viser: `mappe · git-branch · modell`.
> *"Statuslinje og prosjektmappe leses ved oppstart. Endrer du konfig underveis – start på nytt."*

## 5. Grensesnittet snakker med Claude, ikke med maskinen
Tekstboksen sender meldinger til **Claude**, ikke til et rått skall.
Skriver du `ls`, ber du Claude gjøre noe. Vil du kjøre en kommando **selv**, sett `!` foran:
- `!ls`, `!git status`, `!ii .` → går rett til terminalen, ikke innom Claude
> *"Boksen snakker med Claude. Vil du kjøre noe selv, sett ! foran."*

## 6. Claude Code kjører oppi en helt vanlig terminal
Du startet det ved å skrive `claude` i PowerShell. Programmet tok over skjermen.
`exit` lukker Claude Code og tar deg tilbake til det bare terminalpromptet.

## 7. Ingen fil-tre – du spør i stedet
Ren terminal har ikke sidepanel som VS Code. Det erstattes av vaner:
- Skriv `@` → autofullføring av filer = ditt innebygde fil-tre
- Si *"vis prosjektstrukturen"* → Claude lister treet
- Hver endring Claude gjør vises som **diff** før du godtar – du er aldri blind
- `!ii .` åpner mappa i Windows Utforsker (null nedlasting) hvis noen vil ha det visuelt
> *"Du bytter 'bla og let' med 'spør og få svar'. @ viser filene, og hver endring kommer som en diff."*

## 8. Zero-install-filosofien (kursets vinkling)
Bevisst valg: kjør **ren Claude Code**, ikke krev VS Code-nedlasting. Lavere terskel, mer demokratisk.
VS Code-integrasjon parkeres som et valgfritt "neste nivå".

## 9. Prosjektmappa låses – du bytter ikke prosjekt underveis
Rota settes ved oppstart og kan ikke `cd`-es bort fra. Vil du bytte prosjekt: `exit`, naviger i terminalen, start `claude` på nytt.
Du *kan* derimot **utvide** hvilke mapper Claude får jobbe i – uten å flytte rota – med `/add-dir <sti>` (eller flagget `claude --add-dir <sti>` ved oppstart).
> *"Som å åpne en mappe i en editor: vil du bytte prosjekt, lukker du og åpner det nye. /add-dir låner inn en ekstra mappe uten å flytte hjemmebasen."*

## 10. Slash-kommandoer popper ikke opp av seg selv
Menyen er ikke knapper. Trykk `/` for å åpne lista, så **skriv** for å filtrere. Kommandoer som tar argument (f.eks. `/add-dir`) venter på at du skriver stien selv – ingen filvelger.
`/help` lister alt som finnes i akkurat din versjon (lista vokser fra versjon til versjon).
> *"Slash-kommandoer trigges med / og filtreres ved å skrive. /help viser hva du faktisk har."*

## 11. Claude Code vs Cowork – samme motor, ulik dør
Anthropic bygde Cowork *med* Claude Code, så samme agent-kjerne. Forskjellen er innpakningen:
- **Claude Code**: terminal/IDE, full tilgang til din ekte maskin (`git`, `vercel`, `ii .`), du ser hvert steg og godkjenner. Mer kraft, mer ansvar.
- **Cowork**: chat-app, kjører i en **sandboxet Linux-boks isolert fra maskinen din**. Kan kjøre kommandoer *inni* sandkassen, men ikke styre OS-et (åpner ikke Utforsker, kan ikke `ii`). Tryggere, men avskåret fra verktøyene et utviklingskurs trenger.
- Demonstrert live: Cowork klarte ikke `ii` (åpne mappe); Claude Code gjorde det rett på maskinen.
> *"Claude.ai = tenke med Claude. Cowork = delegere til Claude (sandkasse). Code = bygge med Claude (full maskin). Velg etter om oppgaven lever i terminalen eller i dokumenter – ikke etter hva som føles mest avansert."*

## 12. Statuslinja er en TUI-greie – desktop-appen viser sin egen
Den egendefinerte statuslinja (`~/.claude/statusline.js`) tegnes i **terminal-versjonen** (rått PowerShell-vindu).
Kjører du **desktop-appen**, overstyrer appens eget grensesnitt: nederst ser du modus (`Accept edits`), modell (`Opus 4.8`) og tenkenivå (`High`) som innebygde piller. Skriptet er ikke ødelagt – det er bare ikke appen som tegner det.
> *"Custom statuslinje virker i terminalen. I desktop-appen har du appens egen linje i stedet. Vil du se ditt eget skript, kjør claude i et PowerShell-vindu."*

## 13. CLAUDE.md vs minne – to ulike hukommelser
- **CLAUDE.md**: i mappa, **du** skriver den, sjekkes inn i git (deles med team), og jeg leser *hele* hver session. Prosjektets grunnlov.
- **Minne** (`~/.claude/projects/.../memory/`): skjult hos meg, **jeg** vedlikeholder den, ikke i git, hentes fram selektivt. Mine private notater om deg og hvordan du vil jobbe.
> *"Vil du at teamet/enhver session skal vite det → CLAUDE.md. Vil du at Claude skal huske hvordan DU liker å jobbe → minne. Den ene er felles og på papir, den andre er Claudes private notatbok."*
