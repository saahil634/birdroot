# Birdroot

Static personal website for `www.birdroot.org`.

## Contents

- In-page PDF viewer for the CV and Birdroot poem
- Downloadable CV PDF
- Downloadable Birdroot poem PDF
- Links to ongoing projects
- Links to public web presence

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub + Vercel flow

Yes, you can use the same GitHub + Vercel route for this site.

1. Create a new GitHub repository.
2. Add this folder as the local repo remote.
3. Push the code to GitHub.
4. Import the GitHub repository into Vercel.
5. In Vercel project settings, add `www.birdroot.org` as the custom domain.

Because this is a plain static site, Vercel can deploy it without extra framework configuration.
