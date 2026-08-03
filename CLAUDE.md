# Campione Interior Solutions — one-page site

## What this is

A single-page marketing site for Campione Interior Solutions LLC, a commercial
flooring subcontractor in North Kansas City, MO. Built as the flagship portfolio
piece for a Kansas City web design side business.

## Who the audience is — this drives every decision

**General contractors, project managers, and architects doing subcontractor
prequalification.** NOT homeowners.

Campione runs commercial work averaging roughly $6.8M per project (15 projects
on Procore, 7 active). The only reader who matters is a GC vetting them before
sending a bid invitation.

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
