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

## 14. clone vs. push – retningen avgjør
To måter å få mappe og GitHub-repo til å henge sammen, og de går hver sin vei:
- **clone**: remote → ny, *tom* lokal mappe. Brukes for nye prosjekter. Kobler `origin` automatisk.
- **push eksisterende**: lokal mappe (som har filer) → tom remote. Brukes når mappa allerede finnes. Kommandoene GitHub viser deg på den tomme repo-siden: `git init` → `git remote add origin <url>` → `git add .` → `git commit` → `git push`.
Du kan **ikke** klone inn i en mappe som har filer fra før – da bruker du push-veien.
> *"clone henter ned i ny mappe. Har du allerede en mappe med filer, går det motsatt vei: du kobler til og pusher opp."*

## 15. To historier som må flettes (pull før push)
La du på en README ved opprettelsen, har remote én commit du ikke har lokalt. Da blir push avvist – Git nekter å overskrive ukjent historikk.
Fiks: `git pull --rebase origin main` legger dine commits *oppå* remote sin, så `git push`. Ingen konflikt så lenge filene ikke overlapper.
> *"Avvist push betyr nesten alltid: remote har noe du ikke har. Hent ned først (pull), så opp (push). Aldri tving."*

## 16. .gitignore: hemmeligheter og søppel skal aldri opp
Tre kategorier holdes utenfor GitHub via `.gitignore`:
- **Hemmeligheter**: `.env`, `.env.local` (API-nøkler, Supabase-passord) – kritisk, aldri push.
- **Generert/tungt**: `node_modules/`, `.next/` – kan gjenskapes, bloater repoet.
- **Personlig/lokalt**: `.claude/settings.local.json` (dine maskin-tillatelser). `settings.json` (felles) kan derimot deles.
> *"Tommelfingerregel: kan det gjenskapes, eller er det en hemmelighet, eller gjelder det bare din maskin? → .gitignore."*

## 17. Dev-server + hot reload = den tighte loopen
`npm run dev` starter en lokal server (Next.js på `localhost:3000`). Den kjører på **din egen maskin** – derfor kunne Claude Code starte den (Cowork i sandkasse kan ikke, jf. #11).
Hot reload: lagrer du en endring i koden, oppdaterer nettleseren seg **automatisk** – ingen refresh. Det er denne sekund-loopen som gjør webutvikling morsomt og rask å lære.
> *"npm run dev gir deg appen live lokalt. Endre kode → siden oppdaterer seg selv. Se det skje, ikke bare les om det."*

## 18. Scaffolde inn i undermappe (når rota har filer)
`create-next-app` nekter å lage app i en mappe som allerede har filer. Løsning: lag appen i en **undermappe** (her: `webapp/`). Notatene blir liggende i rota, appen i undermappa – alt i samme repo, samme session.
Konsekvens for senere: når vi deployer til Vercel må vi peke «Root Directory» til `webapp/`.
> *"Har prosjektmappa allerede innhold, scaffold appen i en undermappe. Da slipper du å bytte session, og repoet rommer både notater og app."*

## 19. Git-indikatoren i grensesnittet er et levende kompass
Linja viser `repo · branch · +N -M · Create PR`. `+N -M` er ulagrede endringer (linjer lagt til/fjernet) – den oppdaterer seg live mens du jobber. Samme info som `git status`, men alltid synlig.
> *"Den lille git-linja svarer alltid på: hvilken branch er jeg på, og har jeg endringer jeg ikke har lagret? Ditt kompass."*

## 20. «Trust this workspace» er en sikkerhetsgate
Nye mapper med egen prosjektkonfig (CLAUDE.md, AGENTS.md, hooks, .mcp.json) er «untrusted» til du sier god for dem. Grunnen: slike filer kan kjøre instruksjoner automatisk, og kode du laster ned kan skjule noe lurt. Trust-prompten sikrer at DU vouchet for koden først.
> *"Får du 'trust this workspace?' er det ikke mas – det er Claude Code som nekter å kjøre ukjent prosjektkonfig før du har sagt ja."*

## 21. Binærfiler hører dårlig hjemme i git
Git er laget for tekst. En 5 MB PPT lagres som hel ny kopi i historikken hver gang den endres → repoet blåser seg opp. Greit for ett deck, men oppdateres binæren ofte: vurder .gitignore eller Git LFS.
> *"Tekst i git, store binærfiler helst utenfor. Hver endring av en binær lagres i sin helhet, ikke som diff."*

## 22. Dev-servere henger igjen – og porten hopper
En dev-server stopper ikke av seg selv når du lukker terminalen/sessionen. Den blir liggende i bakgrunnen og holder porten. Starter du en ny, ser Next at 3000 er opptatt og hopper til neste ledige (3001, 3002...). Da kan du ende opp med å se en GAMMEL server på 3000 mens den nye lever på 3002.
Sjekk hvilken port serveren faktisk valgte (står i oppstarts-loggen: «using available port 3002»). Stopp servere med Ctrl+C når du er ferdig.
> *"Lukket terminal ≠ stoppet server. De henger igjen og spiser porter. Ser du 'feil' app, sjekk hvilken port den nye faktisk fikk."*

## 23. Connectors (MCP) – Claude styrer plattformene direkte
En connector lar Claude operere Vercel/Supabase rett fra chatten: deploye, sette miljøvariabler, lage tabeller, kjøre SQL – i stedet for at du klikker i dashboards. Treffer kursfilosofien (Claude gjør det tekniske, du er på høyt nivå).
**Men:** valgfri akselerator, ikke obligatorisk – oppsettet er friksjon for nybegynnere, og man kommer hele veien uten dem.
**Sikkerhet (Supabase):** skru på **read-only** som standard, og **aldri mot produksjon** – bruk et dev-prosjekt (data i basen kan påvirke agenten / prompt-injection).
> *"Connectors fjerner dashboard-klikking ved å la Claude styre plattformen. Bruk dem når du er komfortabel – og Supabase read-only mot et dev-prosjekt, aldri prod."*
