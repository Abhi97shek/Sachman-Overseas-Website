# Sachman Overseas

Website mockup for **Sachman Overseas** — an IELTS, PTE, Spoken English, and study-visa consultancy based in Pathankot, Punjab.

## What's included

- One-page home, plus menu pages with more detail for Services, Countries, Process, and Contact
- Sideways study-country carousel covering every study destination
- Contact / free consultation form (emails the centre through Resend)
- Responsive layout for mobile and desktop

## Run locally

```bash
cp .env.example .env.local
# Add your Resend API key in .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Counselling requests need `RESEND_API_KEY` from [resend.com/api-keys](https://resend.com/api-keys). Until a domain is verified, keep `CONSULT_FROM_EMAIL` as `Sachman Overseas <onboarding@resend.dev>` and send only to the Resend account email. After verifying your domain, change the from address to something like `Sachman Overseas <counselling@yourdomain.com>` so `sachmaninstitute08@gmail.com` can receive them.

## Stack

Next.js · TypeScript · Tailwind CSS · shadcn/ui
