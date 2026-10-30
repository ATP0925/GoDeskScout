# 🔍 GoDeskScout — Campus Lost & Found Platform

> *"Find What Matters. Return What Belongs."*

[![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting%20Active-0288D1?logo=firebase&logoColor=white)](https://godeskscout-app.web.app)
[![Firestore](https://img.shields.io/badge/Firestore-Security%20Hardened-FFA000?logo=firebase&logoColor=white)](https://godeskscout-app.web.app)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS%203.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)](#)

A centralized college web application engineered for university students, faculty, and desk custodians to lodge complaints, search ledger entries, submit ownership claims, and track item handovers securely.

🌐 **Live Deployed Application**: [https://godeskscout-app.web.app](https://godeskscout-app.web.app)  
🚀 **Alternative URL**: [https://godeskscout-app.firebaseapp.com](https://godeskscout-app.firebaseapp.com)

---

## 🌟 Key Capabilities & Architecture

1. **Role-Based Authentication Wall**
   - Restricts logins to campus emails (`.edu`, `.ac.in`) or administrative email (`admin@godeskscout.com`).
   - 1-Click Quick Demo Login for instant evaluation:
     - **Student Demo**: `alex.morgan@university.edu`
     - **Admin Demo**: `admin@godeskscout.com`

2. **Real-time Campus Ledger**
   - Live synchronization via **Google Cloud Firestore**.
   - Offline & latency resilience with seamless local cache fallbacks.
   - Categorized under: *Electronics*, *IDs & Cards*, *Stationery & Books*, *Keys & Accessories*, *Clothing & Bags*.

3. **Lodge Lost Item Complaint Wizard**
   - Real-time form capture for item title, campus location/hub, timestamps, and distinct markings.
   - Built-in **AI Suggest Description** feature that synthesizes item attribute templates on demand.

4. **Log Found Items to Desk Custody**
   - Desk attendants log found belongings turned into campus security or library desks.
   - Live state updates visible across the entire campus network in real time.

5. **Ownership Claim & Verification Engine**
   - Claimants must provide secret descriptors (lockscreen wallpaper, engravings, serial digits, hidden contents) before physical handover.
   - Automated state transition from `UNDER INVESTIGATION` / `FOUND` to `CLAIM PENDING`.

6. **Campus Admin Control Center**
   - Physical handover verification.
   - Single-click action to mark items as `RETURNED` or purge resolved records.
   - Presentation **Zero Reset** feature to reset the ledger for fresh demos.

7. **Built-in Automated User Demo Mock**
   - Interactive guided tour and automated 7-step test script executing in-browser across all pages and views.

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

## 💻 Tech Stack

- **Frontend**: HTML5, Modern Modular JavaScript (ES6+), Tailwind CSS, Font Awesome 6.5
- **Cloud Backend**: Google Firebase v11 Modular SDK
- **Database**: Google Cloud Firestore (Native Mode)
- **Hosting**: Firebase Global CDN with custom security response headers
- **Version Control**: Git & GitHub

---

## 📄 License

Licensed under the MIT License. Developed for University Campus Notice & Recovery Systems.
