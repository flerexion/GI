# GI Fellowship Study

A personal, offline GI literature library for fellowship studying.

## How to update the app
1. Edit files on GitHub.
2. Open the app on your phone.
3. Settings → Check for updates.

## How to add a new study later
1. Open `data.js` on GitHub (pencil icon).
2. Find the topic where it belongs.
3. Copy one line inside `papers: [ ... ]` and paste a new line after it.
4. Change the four parts: id, title, society, year.

Example:
`P('acg-gerd-2022', 'GERD', 'ACG', 2022, ['★']),`

- The id must be unique (no spaces, use dashes).
- `['★']` marks it as core reading; `['CPU']` marks an AGA Clinical Practice Update.
- Add a comma after each line except the last one is optional.

## Your workflow
1. Keep the PDF in OneDrive.
2. Ask the LLM for the verbatim Markdown version (paste into "Full text").
3. Ask the LLM for the study brief (paste into "Summary").
4. Read it on the subway.
5. Tap "Mark as reviewed" when done.
6. Check Activity to see what to revisit next.
