# 🔍 GoDeskScout — Campus Lost & Found Platform

> *"Find What Matters. Return What Belongs."*

[![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting%20Active-0288D1?logo=firebase&logoColor=white)](https://godeskscout-app.web.app)
[![Firestore](https://img.shields.io/badge/Firestore-Security%20Hardened-FFA000?logo=firebase&logoColor=white)](https://godeskscout-app.web.app)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS%203.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)](#)

A centralized college web application engineered for university students, faculty, and desk custodians to lodge complaints, search ledger entries, submit ownership claims, and track item handovers securely.

🌐 **Live Deployed Application**: [https://godeskscout-app.web.app](https://godeskscout-app.web.app)  
🚀 **Alternative URL**: [https://godeskscout-app.firebaseapp.com](https://godeskscout-app.firebaseapp.com)  
📂 **GitHub Repository**: [https://github.com/ATP0925/GoDeskScout](https://github.com/ATP0925/GoDeskScout)

---

## 🌟 Authentication & Access Architecture

1. **Google Login Option**
   - Direct 1-Click sign-in using Google Workspace account with official Google branding.
   - Real-time profile synchronization (name, profile avatar, role).
   - **Unlimited Access** (Does not consume device demo quota).

2. **College Email & Password Login Option**
   - Supports College Email validation (`.edu`, `.ac.in`, `.edu.in`, `admin@godeskscout.com`).
   - Sign In and Sign Up modes with toggleable visibility, password eye toggle, and remember-me option.
   - **Unlimited Access** (Does not consume device demo quota).

3. **10-Use Limit Device Demo Quota (Device-Locked)**
   - For evaluation and trial use, students/guests can test the platform without credentials using:
     - **Student Demo**: `alex.morgan@university.edu`
     - **Admin Demo**: `admin@godeskscout.com`
     - **Run Full User Demo Mock**
   - **Enforcement**: Strictly capped at **10 uses per device**.
   - **Live Visual Quota Meter**: Dynamic progress bar and counter badge (`X/10 used`).
   - **Exhaustion Behavior**: Once 10 uses are consumed on a device, demo buttons lock automatically (`<i class="fa-solid fa-lock"></i> Demo Limit Exceeded`), prompting the user to sign in using their **Google Account** or **College Email**.
   - **Admin Reset**: An administrative reset button (`Reset Demo Quota`) is available in the Admin Panel for professors and project presentation reviews.

---

## 🤝 Campus Social Media & Community Network Model

GoDeskScout sirf ek database nahi hai — **ye pure college community ko ek social media platform ki tarah aapas me jode rakhta hai**:

1. **❤️ Community Alert Boosts**:
   - Classmates lost item alerts ko boost kar sakte hain taaki exam ke time ya critical situations me important documents aur laptops campus feed me top par dikhein.
2. **👁️ Crowdsourced Sighting Tips**:
   - Agar kisi student ne item dekha ho (jaise: *"11:30 AM Library desk ke paas dekha tha"*), wo instant location tip leave kar sakta hai without claiming ownership.
3. **📲 1-Click College WhatsApp & Batch Group Sharing**:
   - Formatted recovery cards ko single click me class WhatsApp groups aur college Telegram channels me circulate kiya ja sakta hai.
4. **🏆 Good Samaritan Campus Culture**:
   - Desk attendants, finders, aur students ko transparent credit milta hai, jisse college campus me trust aur mutual help ka culture develop hota hai.

---

## 📋 Core Modules & Pages

1. **Campus Ledger Bulletin**: Live cloud synchronized lost & found database via Google Cloud Firestore.
2. **Lodge Lost Complaint**: Smart filing wizard with AI attribute recommendation.
3. **Log Found Items**: Custody logging for campus desks and security stations.
4. **Ownership Verification Claims**: Hidden identifier verification (serial digits, wallpapers, secret markings) before physical handovers.
5. **Student Hub**: Live personal complaint tracking and management.
6. **Campus Admin Control Center**: Claim approval, status transition to `RETURNED`, and presentation zero-reset.

---

## 🛡️ Enterprise Security & Firestore Rules

Production-grade rules deployed to Cloud Firestore enforce:
- **Strict CEL Schema Validation**: Type checks, length bounds, positive integer timestamps, and enum constraints.
- **Field Immutability**: Document `id`, `type`, `date`, and `timestamp` cannot be tampered with on updates.
- **PII & User Data Separation**: Private student profiles and claim proof documents are isolated from public inspection.
- **Role Authority**: Admin actions are verified through server-side claims or designated administrative emails.
- **Global Default Deny**: All unspecified paths reject read and write attempts.

---

## 🚀 Local Development & Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ATP0925/GoDeskScout.git
   cd GoDeskScout
   ```

2. **Open locally**:
   Simply open `public/index.html` in any modern web browser or serve via:
   ```bash
   npx serve public
   ```

3. **Deploy to Firebase**:
   ```bash
   firebase deploy --only hosting,firestore:rules
   ```

---

## 📄 License

Licensed under the MIT License. Developed for University Campus Notice & Recovery Systems.
