# Hopebridge Global Foundation

A responsive, multi-page Next.js website for Hopebridge Global Foundation.

## Requirements
- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Configure enquiry forms
The forms submit to `/api/contact`. Add a Resend API key and a sender address from a domain verified in your Resend account to `.env.local`:
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL` (defaults to hopebridgeinc@gmail.com)

Without these settings the API intentionally returns a clear configuration error; it does not pretend an enquiry was delivered.

## Add official brand assets
- The supplied Hopebridge logo is installed as `public/images/hopebridge-logo.png` and used in the header and footer.
- The supplied photographs are installed as `public/images/humanitarian-outreach.jpg` and `public/images/community-support.jpg`, and used in the homepage and programme areas. Replace remaining labelled SVG placeholders with additional approved photographs when available.
- Do not publish illustrative placeholders as if they document real projects. The included abstract SVG compositions are explicitly labelled placeholders.

## Pages
Home, About, Programmes, Impact, Grant Programme, Partnerships, News & Gallery, Contact, plus a custom not-found page.

## Deploy to GitHub / Vercel
1. Create a new GitHub repository.
2. Upload this project folder or push it using Git.
3. Import the repository into Vercel.
4. Add the three environment variables above in Vercel Project Settings.
5. Deploy. Add your custom domain and verify the sender domain with Resend before enabling live forms.

## Content integrity
The supplied figures and programme descriptions come from the project brief. Country names, beneficiary stories, dates, awards, and additional partner claims are deliberately not invented. The City Bridge Foundation relationship is presented only as stated in the brief and should be confirmed internally before publication.
