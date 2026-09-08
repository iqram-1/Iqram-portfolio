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

## Phone-friendly publishing setup

See [DEPLOYMENT.md](DEPLOYMENT.md) for the exact Supabase, GitHub Pages, and Netlify steps.

The public portfolio and private editor are now separated in the source tree:

- Public site: the repository root, deployed to the portfolio URL.
- Admin site: the `admin/` folder, copied to a separate GitHub repository and deployed to its own GitHub Pages URL.
- Backend: Supabase stores posts, handles sign-in, and stores uploaded images.

### One-time setup

1. Create a Supabase project, disable public email sign-ups, and create an email/password user for the owner account.
2. Run `supabase-schema.sql` in the Supabase SQL Editor.
3. Copy the project URL and publishable anon key into both `portfolio-config.js` and `admin/config.js`.
4. Keep the existing GitHub Pages workflow for the public site. It intentionally excludes `admin/` from the public artifact. Copy `admin/` into a second GitHub repository and use its included Pages workflow for the private admin site.
5. Configure the admin site's authentication redirect URL in Supabase to its deployed URL.

The public site only requests rows where `published = true`. The admin page requires Supabase authentication before it can read or change posts. Do not put a Supabase service-role key in either config file.
