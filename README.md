# Working on

# 🛍️ Shopper - Next.js Project

A full-stack web application built with **Next.js 15 (App Router)**, **MongoDB**, and **NextAuth.js**.  
This project includes authentication, services, bookings, blogs, and contact sections — making it a complete modern web solution.

---
## Live Link : https://shopbd-nine.vercel.app

## 🚀 Features
- 🔐 **Authentication** (Register / Login with NextAuth.js & Social Login)
- 🛎️ **Services Management** (Browse, view details, order)
- 📅 **Bookings System** (Create, update, and manage bookings)
- 📝 **Blog Pages** (Dynamic routing for blog posts)
- 📩 **Contact Page** (Get in touch easily)
- 🎨 **Modern UI** built with **TailwindCSS**
- 📱 Fully responsive design

---

## 📂 Project Structure


Repository: mostakim69/next.js
Files analyzed: 66
Estimated tokens: 490.7k
```
Directory structure:
└── mostakim69-next.js/
    ├── README.md
    ├── eslint.config.mjs
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── problemSolve.js
    ├── docs/
    │   ├── updateLottie.json
    │   └── cli_commands.md
    ├── public/
    │   ├── CNAME
    │   └── serviceData.json
    └── src/
        ├── authLottie.json
        ├── notfoundLottie.json
        ├── updateLottie.json
        ├── app/
        │   ├── globals.css
        │   ├── layout.jsx
        │   ├── loading.jsx
        │   ├── not-found.jsx
        │   ├── page.js
        │   ├── about/
        │   │   └── page.jsx
        │   ├── actions/
        │   │   └── auth/
        │   │       ├── loginUser.js
        │   │       └── registerUser.js
        │   ├── api/
        │   │   ├── auth/
        │   │   │   └── [...nextauth]/
        │   │   │       └── route.js
        │   │   ├── my-bookings/
        │   │   │   ├── my-bookingsAPI.hurl
        │   │   │   ├── route.js
        │   │   │   └── [id]/
        │   │   │       ├── [bookingAPI].hurl
        │   │   │       └── route.js
        │   │   └── services/
        │   │       ├── route.js
        │   │       ├── servicesAPI.hurl
        │   │       └── [id]/
        │   │           ├── [serviceAPI].hurl
        │   │           └── route.js
        │   ├── auth/
        │   │   ├── layout.jsx
        │   │   ├── refractorAuthPrompt.md
        │   │   ├── components/
        │   │   │   └── SocialLogin.jsx
        │   │   ├── register/
        │   │   │   ├── page.jsx
        │   │   │   └── components/
        │   │   │       └── SignupForm.jsx
        │   │   └── signin/
        │   │       ├── page.jsx
        │   │       └── SignInForm.jsx
        │   ├── blogs/
        │   │   ├── page.jsx
        │   │   └── [blogId]/
        │   │       └── page.jsx
        │   ├── checkout/
        │   │   └── [id]/
        │   │       └── page.jsx
        │   ├── components/
        │   │   ├── CheckoutForm.jsx
        │   │   ├── Navbar.jsx
        │   │   ├── NotFoundAnime.jsx
        │   │   ├── OrderReview.jsx
        │   │   ├── ServiceCard.jsx
        │   │   ├── ServicesSection.jsx
        │   │   ├── Footer/
        │   │   │   └── Footer.jsx
        │   │   └── HomeSection/
        │   │       ├── AboutSection.jsx
        │   │       ├── CallToAction.jsx
        │   │       ├── HeroSection.jsx
        │   │       ├── TestimonialsSection.jsx
        │   │       └── WhyChooseUs.jsx
        │   ├── contact/
        │   │   └── page.jsx
        │   ├── my-bookings/
        │   │   ├── page.jsx
        │   │   ├── [bookingId]/
        │   │   │   └── page.jsx
        │   │   └── components/
        │   │       ├── BookingUpdateForm.jsx
        │   │       └── UpdateLottieAnime.jsx
        │   └── services/
        │       ├── page.jsx
        │       └── [id]/
        │           └── page.jsx
        ├── lib/
        │   ├── authOptions.js
        │   ├── dbConnect.js
        │   ├── LottieAnime.jsx
        │   └── useAuth.jsx
        └── providers/
            └── NextAuthProvider.jsx



---

## ⚙️ Tech Stack
- **Next.js 15** (App Router)
- **React 18**
- **MongoDB** (Database)
- **NextAuth.js** (Authentication)
- **TailwindCSS** (Styling)
- **Vercel** (Deployment)

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/sharmin-khan/ShopBD.git


npm install
# or
pnpm install


---




Hello i'm Sarmin Akter.
<p>I'm a passionate Frontend Developer with a strong focus on creating clean, responsive, and user-friendly web interfaces. I enjoy building modern web applications using technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS. I believe in writing readable code, maintaining UI consistency, and ensuring a smooth user experience across all devices. I'm always eager to learn new tools and improve my skills to deliver better results.

</p>

