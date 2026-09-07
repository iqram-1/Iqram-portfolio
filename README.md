# Iqram Abubakar — Mechanical Engineering Portfolio

This repository is the source for Iqram Abubakar's public portfolio site. GitHub Pages publishes the site automatically whenever an approved editor updates the `main` branch.

## Access model

- **Visitors** can view the public portfolio only. There is no public editing interface in the site.
- **Iqram** controls the repository through the connected GitHub account and is the administrator of the published site.
- **Other AI agents or collaborators** can inspect this source from the repository link. They can only change or publish it when Iqram explicitly gives their GitHub account repository write access.

This is deliberately enforced by GitHub authentication and repository permissions, rather than a password in the website. A password inside a static website would be publicly readable and would not be secure.

## Making an update

1. Open the repository on GitHub while signed in as Iqram.
2. Open the relevant file and choose the pencil icon to edit it, or ask an approved AI agent to prepare a change.
3. Commit the change to `main`.
4. The **Deploy portfolio to GitHub Pages** workflow publishes the change automatically.

## Where content lives

- `index.html` — introduction, education, selected work, contact details, and page sections.
- `script.js` — archive groups, all media captions, and the ordering of the portfolio gallery.
- `projects/case-study.js` — detailed Smart Power Hub and Combined Circuit Study case studies.
- `assets/archive/` — retained gallery images and videos.
- `premium.css` — the portfolio colour, typography, and card system.

## Instructions for an AI collaborator

Give an AI agent the repository URL and a precise request, for example: “Update the caption for archive item 13 in `script.js`, preserve the current grouping, then verify the site locally.” Review its proposed change before allowing it write access or merging a pull request.
