GI FELLOWSHIP STUDY — HOW TO ADD A NEW ENTRY
=============================================

Everything in the app is built from one file: data.js

The structure is:

  DOMAIN  (big heading, e.g. Esophagus)
    TOPIC (subheading, e.g. GERD & Reflux)
      PAPER (a single study, e.g. ACG GERD 2022)

Each study is one line in data.js using the P() helper:

  P('unique-id', 'Title of the Study', 'Society', 2027, ['★'])

--------------------------------------------------------------------
HOW TO ADD A NEW STUDY (PAPER) TO AN EXISTING TOPIC
--------------------------------------------------------------------
1. Open your GitHub repo: github.com/flerexion/GI
2. Click data.js, then the pencil icon (Edit).
3. Find the topic. Search for its id, for example:
       id: 'eso-gerd'
4. Inside that topic's papers: [ ... ] list, add one new line:
       P('acg-gerd-2027', 'GERD: 2027 Update', 'ACG', 2027, ['★']),
5. Click "Commit changes".

Rules:
- id: unique, lowercase, no spaces. Use dashes. Example: 'acg-gerd-2027'
- title: the study title, inside single quotes.
- society: who published it. Example: 'ACG', 'AGA', 'EASL', 'NCCN'
- year: the year number, or null if unknown.
- tags: ['★'] for core, ['CPU'] for AGA CPU, ['★','CPU'] for both,
  or [] for none.
- Make sure the line ends with a comma if more lines follow.
- Do not reuse an id that already exists.

--------------------------------------------------------------------
HOW TO ADD A NEW TOPIC (SUBHEADING) TO AN EXISTING DOMAIN
--------------------------------------------------------------------
1. Open data.js in edit mode.
2. Find the domain, for example: id: 'esophagus'
3. Inside its topics: [ ... ], add a block after another topic:

       { id: 'eso-new', name: 'New Topic Name', papers: [
         P('paper-id-1', 'First Study Title', 'ACG', 2026, ['★']),
         P('paper-id-2', 'Second Study Title', 'AGA', 2025, []),
       ]},

4. Commit.

Rules:
- Topic id: unique, lowercase, no spaces (use dashes).
- Keep the same shape: id, name, papers.
- Mind the commas: topics are separated by commas.

--------------------------------------------------------------------
HOW TO ADD A NEW DOMAIN (BIG HEADING)
--------------------------------------------------------------------
1. Open data.js in edit mode.
2. Scroll to the very end, before the final "];".
3. Add a block:

   {
     id: 'new-domain',
     name: 'New Heading Name',
     icon: '🆕',
     topics: [
       { id: 'new-topic', name: 'First Topic', papers: [
         P('paper-id-1', 'First Study Title', 'ACG', 2026, ['★']),
       ]},
     ]
   },

4. Commit.

Rules:
- Domain id must be unique and lowercase with dashes.
- You can copy any emoji for the icon.

--------------------------------------------------------------------
AFTER ANY EDIT TO data.js
--------------------------------------------------------------------
1. On your phone, open the app.
2. Go to Settings → Check for updates.
3. If it does not appear, wait a minute and close/reopen the app.

--------------------------------------------------------------------
HOW TO ADD THE STUDY TEXT (FULL TEXT / SUMMARY)
--------------------------------------------------------------------
The app itself is only for adding the CONTENT to a study that already
exists in data.js. You do not edit data.js for content.

On your phone:
1. Open the app → domain → topic → study.
2. Under "Summary" or "Full text", tap "Import .md file".
3. Pick the .md file from OneDrive.

On your computer, save each LLM output as a .md file in OneDrive first:
   OneDrive/GI Study/<Topic>/<Study - Society Year - summary.md>
   OneDrive/GI Study/<Topic>/<Study - Society Year - full.md>

--------------------------------------------------------------------
NOTE ABOUT structure.html
--------------------------------------------------------------------
structure.html is a static snapshot for printing. If you add entries to
data.js, update structure.html by hand too (or just use the app itself
to see the latest structure).
