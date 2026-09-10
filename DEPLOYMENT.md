# Portfolio deployment

## 1. Create the backend

1. Create a project at https://supabase.com.
2. In **SQL Editor**, paste and run `supabase-schema.sql`.
3. In **Authentication > Users**, create the private owner account.
4. In **Authentication > Providers > Email**, disable public user sign-ups.
5. Open **Project Settings > API** and copy the Project URL and the public anon key.
6. Put those two values in `portfolio-config.js` and `admin/config.js`.

The anon key is intended for browser use. Never place the service-role key in either file.

## 2. Deploy the public portfolio

The existing GitHub Pages workflow deploys the repository root. It excludes `admin/`, the SQL schema, and documentation from the public artifact.

1. Commit and push the changes to the repository's `main` branch.
2. In GitHub, open **Settings > Pages** and select **GitHub Actions** as the source.
3. Wait for **Deploy portfolio to GitHub Pages** to finish.
4. Open the generated portfolio URL and verify that the public page loads.

## 3. Deploy the admin site as a second GitHub site

GitHub Pages provides one Pages site per repository. Therefore, the admin must be placed in a second repository, for example `Iqram-portfolio-admin`.

1. Create a new empty GitHub repository named `Iqram-portfolio-admin`.
2. Copy everything inside this repository's `admin/` folder into the root of the new repository. Keep the hidden `.github/workflows/deploy-pages.yml` file.
3. Commit and push the new repository's `main` branch.
4. In the new repository, open **Settings > Pages** and select **GitHub Actions** as the source.
5. Wait for **Deploy portfolio admin** to finish.
6. In Supabase, open **Authentication > URL Configuration** and add the admin site's full URL as an allowed URL.
7. Open the deployed admin URL from your phone and sign in with the owner account:
   https://iqrion4-dev.github.io/Iqram-portfolio-admin/

The public repository's workflow excludes `admin/`, so the admin files will not be published on the main portfolio site. The admin configuration already links back to the public GitHub Pages URL.

## 4. Test the complete flow

1. Sign in to the separate admin URL from your phone.
2. Upload an image and publish an update.
3. Open the public portfolio in a private browser window.
4. Confirm the update appears there.
5. Confirm a visitor can see the public portfolio but cannot access posts through the admin API without signing in.

## 5. Manage the existing media archive

Run the updated `supabase-schema.sql` in the same Supabase project once. It creates and seeds the `media_assets` table from the existing public archive. The admin dashboard then provides an **Archive library** where the owner can edit titles and captions, hide/show items, replace files, and add new media. Public archive visitors can only read visible items.
