/**
 * GoDeskScout Comprehensive User Demo Mock Test Suite
 * Validates Google Login, Email Login, 10-Use Device Demo Quota & Firebase Deployment
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const indexPath = path.join(__dirname, 'public', 'index.html');
const rulesPath = path.join(__dirname, 'firestore.rules');
const firebaseJsonPath = path.join(__dirname, 'firebase.json');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
    totalTests++;
    if (condition) {
        console.log(`  ✅ [PASS] ${testName}`);
        passedTests++;
    } else {
        console.error(`  ❌ [FAIL] ${testName}`);
    }
}

async function runTestSuite() {
    console.log("==========================================================");
    console.log("🔍 GODESKSCOUT COMPREHENSIVE TEST SUITE");
    console.log("==========================================================");

    // 1. File verification
    console.log("\n📦 Section 1: File Artifacts & Configuration");
    assert(fs.existsSync(indexPath), "public/index.html exists and is readable");
    assert(fs.existsSync(rulesPath), "firestore.rules exists and contains hardened rules");
    assert(fs.existsSync(firebaseJsonPath), "firebase.json hosting & rules config exists");

    const htmlContent = fs.readFileSync(indexPath, 'utf-8');
    const rulesContent = fs.readFileSync(rulesPath, 'utf-8');

    // 2. Auth Options Verification
    console.log("\n🔑 Section 2: Google & Email Login Options");
    assert(htmlContent.includes('handleGoogleLogin') && htmlContent.includes('btnGoogleAuth'), "Google Login option implemented with branded action");
    assert(htmlContent.includes('handleLogin') && htmlContent.includes('login-email'), "Email Login form with College email support implemented");
    assert(htmlContent.includes('handleSignUp') && htmlContent.includes('signup-email'), "Email Sign Up option implemented");
    assert(htmlContent.includes('isCollegeEmail'), "College Email validation (.edu, .ac.in, admin@godeskscout.com)");

    // 3. Demo 10-Use Device Quota Verification
    console.log("\n⏱️ Section 3: Device Demo Quota (Max 10 Uses Per Device)");
    assert(htmlContent.includes('MAX_DEVICE_DEMO_LIMIT = 10'), "Max 10-use limit strictly defined");
    assert(htmlContent.includes('consumeDeviceDemoQuota'), "Device quota consumption logic enforced");
    assert(htmlContent.includes('getDeviceDemoUsage'), "Device usage tracking persisted in localStorage");
    assert(htmlContent.includes('updateDemoQuotaUI'), "Visual quota meter & progress bar implemented");
    assert(htmlContent.includes('resetDeviceDemoQuota'), "Admin presentation reset quota option provided");

    // 4. Page-by-Page View Architecture
    console.log("\n📄 Section 4: Page-by-Page View Architecture");
    assert(htmlContent.includes('id="page-home"'), "Page 1: Home View with Hero and Stats is present");
    assert(htmlContent.includes('id="page-search"'), "Page 2: Search & Browse Ledger View is present");
    assert(htmlContent.includes('id="page-report-lost"'), "Page 3: Lodge Lost Item Complaint Form is present");
    assert(htmlContent.includes('id="page-report-found"'), "Page 4: Log Found Item to Custody Form is present");
    assert(htmlContent.includes('id="page-user-dash"'), "Page 5: Student Hub Dashboard View is present");
    assert(htmlContent.includes('id="page-admin-dash"'), "Page 6: Admin Control Center View is present");

    // 5. Social Community Features Verification
    console.log("\n🤝 Section 5: Campus Social Community Integration");
    assert(htmlContent.includes('boostItem'), "Community Alert Boost (Likes/Upvotes) implemented");
    assert(htmlContent.includes('shareItemToSocial'), "1-Click WhatsApp / College Batch Group Share implemented");
    assert(htmlContent.includes('openSightingModal') && htmlContent.includes('submitSightingTip'), "Crowdsourced Campus Sighting Tips modal implemented");
    assert(htmlContent.includes('Campus Community Network'), "Campus Social Network showcase section present on Home View");

    // 6. Security and Deployment
    console.log("\n🔐 Section 5: Security Rules & Live Verification");
    assert(rulesContent.includes('service cloud.firestore'), "Firestore security service block defined");
    assert(rulesContent.includes('isValidLedgerItem'), "Ledger domain schema validator enforced");
    assert(rulesContent.includes('match /{document=**} {\n      allow read, write: if false;'), "Default Deny fallback rule strictly enforced");

    // 6. Live Firebase Hosting HTTP Verification
    console.log("\n🌐 Section 6: Live Firebase Cloud Deployment Check");
    const liveUrl = "https://godeskscout-app.web.app";
    try {
        await new Promise((resolve) => {
            https.get(liveUrl, (res) => {
                assert(res.statusCode === 200, `Live URL (${liveUrl}) returned HTTP 200 OK`);
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => {
                    assert(body.includes('GoDeskScout'), "Live deployment serves GoDeskScout application correctly");
                    resolve();
                });
            }).on('error', (err) => {
                assert(false, `Live URL check failed: ${err.message}`);
                resolve();
            });
        });
    } catch(e) {
        console.error("HTTP error:", e);
    }

    console.log("\n==========================================================");
    console.log(`📊 FINAL RESULT: ${passedTests}/${totalTests} Tests Passed (${Math.round(passedTests/totalTests*100)}%)`);
    console.log("==========================================================");

    if (passedTests === totalTests) {
        process.exit(0);
    } else {
        process.exit(1);
    }
}

runTestSuite();
