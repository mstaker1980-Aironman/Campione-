# Campione Interior Solutions — one-page site

## What this is

A single-page marketing site for Campione Interior Solutions LLC, a commercial
flooring subcontractor in North Kansas City, MO. Built as the flagship portfolio
piece for a Kansas City web design side business.

## Who the audience is — this drives every decision

**General contractors, project managers, and architects doing subcontractor
prequalification.** NOT homeowners.

Campione is a small specialty subcontractor — not a general contractor, and
not a large company — that works as one of many subs on large commercial
jobs. The $6.8M figure is the average size of the *projects* they're tracked
on in Procore (15 total, 7 active), not company revenue or headcount. Don't
let anything on the site read as "this is a big company": estimated revenue
(~$798K) and headcount (~5) are third-party estimates that must not be
published (see "Must NOT publish" below) — but internally, assume small shop,
big jobs. The only reader who matters is a GC vetting them before sending a
bid invitation.

Practical consequences:

- Prequal facts (EMR, bonding capacity, GL limits, certifications) matter more
  than pretty photography
- "Invite us to bid" is the call to action, not "get a free quote"
- Tone is competent and plain. No marketing adjectives, no "passion for
  excellence," no stock-photo enthusiasm. This reader is scanning for
  disqualifiers, not being sold to

## Hard constraints

- **Single file.** `index.html`, no build step, no bundler, no framework
- **No localStorage or sessionStorage** anywhere
- **Fast.** Target sub-1.5s load on 4G. One webfont maximum
- **Mobile-first.** GCs read email on phones on jobsites
- **Accessible.** Semantic HTML, WCAG AA contrast, keyboard navigable,
  respects `prefers-reduced-motion`
- **No scraped content.** Do not add photos or review text pulled from Google
  Places, Porch, BBB, or any directory. Those are licensed to the platform, not
  to us. Facts only until the client supplies real assets

## Confirmed facts — safe to use

- Campione Interior Solutions LLC, Missouri LLC formed 22 April 2008
- 103 W 26th Ave, Ste 100, North Kansas City, MO 64116
- (816) 256-4156
- Commercial market sector, Specialty Contractor
- Business manager: William Dunn
- On Procore since January 2024; 15 projects, 7 active
- Contractor license LIC-06-26-0031 — active, issued 5 June 2026,
  independently reverified active July 2026
- Owns the domain campionekc.com (currently a GoDaddy parking page) — the
  eventual home for this site

## Must NOT publish

Confirmed to be wrong, inactive, or inappropriate for a public site — this is
stronger than "unconfirmed," these are known bad:

- License 2020-8263 — inactive/cancelled
- License 2016-8263 — unverified since December 2015
- St. Joseph license — expired December 2020
- Estimated revenue (~$798K) and headcount (~5) — third-party estimates, not
  confirmed. Revenue/headcount claims on a live prequal site are exactly the
  kind of precise-looking fabrication this project exists to avoid
- Owner names — not for publication

## Not yet confirmed — marked `[[ ]]` in the file

The company story, real project names/photos/GC partners, actual self-performed
scopes, EMR, bonding capacity, insurance limits, certifications, union
affiliation, hours, and the real email address.

All of these come from an interview with the owner.

**Never invent these.** If a value is unknown, leave the placeholder in place.
A fabricated EMR or bonding number on a live contractor site is a serious
problem, not a cosmetic one.

## Design

Charcoal (`#131519`) + bone (`#f7f5f1`) + copper (`#b87333`).
Inter Tight for headings, Inter for body.

Modern commercial-construction feel: large type, generous whitespace, hairline
rules, restrained motion. The benchmark is "better and more current than other
Kansas City commercial flooring contractors," not "flashy."

## Working style

- Screenshot the page and look at it before claiming something is fixed
- Keep the `[[ ]]` placeholder convention — it's how the client interview
  gets tracked
- Don't add sections without asking. Scope creep is the main risk here
- If strategy context is needed, the Wave Search vault has it (added via
  `/add-dir`). Relevant notes: `The Pre-Built Site Play`, `Directory Squatters`,
  `Offer and Pricing`

## Git workflow

- After completing any task that changes files, automatically `git add -A`,
  commit, and push to `origin main`. Don't wait to be asked
- Write real commit messages describing what changed and why — never
  "update" or "changes"
- Commit once per completed task, not once per file edit
- If a task is abandoned or reverted, don't commit it
- Never commit secrets, API keys, or anything in the "Must NOT publish" list
  above
- Report the commit hash and short message after pushing
