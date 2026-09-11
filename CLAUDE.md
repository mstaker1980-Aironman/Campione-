# Campione / Country Carpet / Floorsmith — group site

## What this is

A single-page marketing site presenting three separately-branded commercial
flooring companies as one group: Campione Interior Solutions, Country Carpet,
and Floorsmith. All three are owned by Bill Dunn III. The brands stay
distinct — each has regional equity in its part of Kansas/Missouri, so no
consolidation under one name — and the site presents them at equal weight,
mirroring the layout of the owner's own business card. Built as the flagship
portfolio piece for a Kansas City web design side business.

## Who the audience is — this drives every decision

**General contractors, project managers, and architects doing subcontractor
prequalification.** NOT homeowners.

Each of the three companies is a small, regionally-rooted specialty
contractor — not a general contractor, and not a large company — working as
one of many subs on large commercial jobs. Campione's $6.8M figure is the
average size of the *projects* it's tracked on in Procore (15 total, 7
active), not company revenue or headcount. Don't let anything on the site
read as "these are big companies" — internally, assume small shops, big jobs.
The only reader who matters is a GC vetting one (or more) of them before
sending a bid invitation.

Practical consequences:

- Prequal facts (EMR, bonding capacity, GL limits, certifications) matter more
  than pretty photography
- "Invite us to bid" is the call to action, not "get a free quote"
- Tone is competent and plain. No marketing adjectives, no "passion for
  excellence," no stock-photo enthusiasm. This reader is scanning for
  disqualifiers, not being sold to

## Hard constraints

- **`index.html` + `styles.css` + `site.js`.** Still no build step, no
  bundler, no framework — just three static files, served as-is by
  `serve.js` on port 5500
- **No localStorage or sessionStorage** anywhere
- **Fast.** Target sub-1.5s load on 4G. One webfont maximum
- **Mobile-first.** GCs read email on phones on jobsites
- **Accessible.** Semantic HTML, WCAG AA contrast, keyboard navigable,
  respects `prefers-reduced-motion`
- **No scraped content.** Do not add photos or review text pulled from Google
  Places, Porch, BBB, or any directory. Those are licensed to the platform, not
  to us. Facts only until the client supplies real assets

## Structure

Single scroll page. Target section order:

1. Hero
2. Brand strip — three logos, equal weight
3. Stats
4. Lifecycle — New / Maintain / Refresh
5. Where we work — plus map
6. Kansas statewide contract
7. Credentials
8. History
9. Community
10. Contact
11. Footer

This is the target, being built toward incrementally, phase by phase — don't
assume every section already matches this list without checking the actual
page.

## Confirmed facts — safe to use

### The group

- Three separately-branded companies, one owner: Bill Dunn III. Brands stay
  distinct — no consolidation under one name — presented at equal weight
- Group-wide credential: **"roots since 1976"** (Country Carpet's founding
  year). Never "50 years in business" — Campione itself dates to 2008, and
  the companies didn't operate as a group until 2022
- Service area: Kansas City metro, Lawrence, Topeka, Manhattan, Wichita, and
  surrounding communities
- Bill Dunn III is publicly the contact of record on the Kansas statewide
  contract (see "Must NOT publish" for what's still off-limits about it)
- Jon Ross, Mallory Minor, and Jay Marr are named in the History section, in
  their roles there — no other individual staff bios are in scope yet

### Campione Interior Solutions LLC

- Missouri LLC formed 22 April 2008
- Commercial install & tenant finish
- 103 W 26th Ave, Ste 100, North Kansas City, MO 64116
- (816) 256-4156
- Commercial market sector, Specialty Contractor
- Business manager: William Dunn
- On Procore since January 2024; 15 projects, 7 active
- Owns the domain campionekc.com (currently a GoDaddy parking page) — the
  eventual home for this site

### Country Carpet Inc

- Founded 1976 — this is the group's "roots since 1976" claim
- Commercial install & tenant finish
- Joined the group January 2022
- Maple Hill office: 14969 Waterman Crossing Rd, Maple Hill, KS 66507 — 785.256.4800
- Wichita office: 505 S Broadway, Ste 122, Wichita, KS 67202 — 316.910.4950 (opened
  September 2022)

### Floorsmith

- Founded 2018
- Commercial floor care & restoration
- Kansas City metro
- Joined the group July 2026

### Kansas statewide contract

- Contract 56954A — Floor Coverings, Furnish and Install
- Held by Country Carpet (not the group as a whole), with Kansas Department
  of Administration, awarded by the Office of Facilities and Property
  Management
- Open to state agencies and political subdivisions of Kansas (cities,
  counties, school districts, universities) at contract pricing — no
  separate competitive bid needed
- Covers broadloom carpet, carpet tile, VCT, LVT, Marmoleum and rubber,
  sheet vinyl, porcelain and ceramic tile, and adhesives; furnish and
  install, material and labor both priced
- Payment terms: Net 30. P-Cards are not accepted
- Current terms/pricing live on the Kansas eSupplier portal
  (https://supplier.sok.ks.gov) — that's the page's link target, not a
  hardcoded date
- Runs to 30 Nov 2026 with renewal options as of this writing — internal
  reference only, per the constraint below
- Awarded to multiple vendors — never claim exclusivity. "Holds" is the
  correct verb; never "one of the only," "exclusive," or "sole"
- Don't hardcode an end date on the page; link to the live state portal
  instead
- Don't link to or host the contract award PDF — full unit pricing (see
  Must NOT publish)

## Must NOT publish

- Bill Dunn's cell phone number
- The Kansas contract award PDF (contains full unit pricing)
- Named GC or client references — pending permission from both Bill and the
  GCs
- Team roster or individual bios — pending Bill; competitor-intelligence risk
- FEIN, DUNS, CAGE codes
- Any claim of exclusivity on the Kansas statewide contract — it is awarded to
  multiple vendors
- Any hardcoded end date for the Kansas contract — link to the live state
  portal instead

Owner names are **no longer** blanket-prohibited: Bill Dunn III is publicly
the contact of record on the state contract, and the History section names
Jon Ross, Mallory Minor, and Jay Marr in their roles. Individual staff bios
remain out of scope pending a decision (see "Team roster" above).

## Not yet confirmed — marked `[[ ]]` in the file

The company story, real project names/photos/GC partners, actual self-performed
scopes, EMR, bonding capacity, insurance limits, certifications, union
affiliation, hours, and the real email address.

**Contractor license number** — was previously listed here as confirmed
(independently reverified active July 2026), but that's no longer trusted as of
2026-08-17 — flagged as possibly expired, not re-checked. Site currently shows
`EXAMPLE-LIC-06-02-00003` as an explicit placeholder in the Credentials grid and
footer, each marked with an HTML comment. Do not put a real number back on the
page without re-verifying it first, and don't re-enable Netlify deploys until
it's replaced with a verified value (see README).

All of these come from an interview with the owner (or, for the license, a
re-verification pass).

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

- After completing any task that changes files, automatically `git add -A`
  and commit. Don't wait to be asked
- Do **not** push to `origin main` unless explicitly asked. The user pushes
  when they want something live
- Write real commit messages describing what changed and why — never
  "update" or "changes"
- Commit once per completed task, not once per file edit
- If a task is abandoned or reverted, don't commit it
- Never commit secrets, API keys, or anything in the "Must NOT publish" list
  above
- Report the commit hash and short message after committing (and after
  pushing, when asked to push)
