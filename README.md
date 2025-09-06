
# Nilesh Seeds Billing — Android APK (No-code CI Build)

This repo is pre-configured to build an **Android APK automatically** on GitHub—no coding, no Android Studio needed.

## Steps (no-code)
1. Create a new repository on GitHub (public or private).
2. Upload **all files from this folder** to that repo (or drag & drop the ZIP contents on GitHub).
3. Go to the repo → **Actions** tab → enable workflows if prompted.
4. Wait for the workflow **Build Android APK** to finish (or click **Run workflow**).
5. When it completes, open the workflow run → **Artifacts** → download `nilesh-seeds-app-debug-apk` → inside is `app-debug.apk`.
6. Install the APK on your Android phone (allow installing from unknown sources).

### What’s inside
- **/web**: Your offline-first billing web app (PWA) copied here.
- **Capacitor** config to wrap the web app as a native Android app.
- **GitHub Actions** workflow that sets up Java + Android SDK, adds the Android platform, and builds the APK.

### Release build (optional)
Debug APK is fine for testing. For Play Store, create a keystore and add signing steps. You can extend the workflow with secrets for signing.

### Update the app
Just edit files in **/web** (HTML/CSS/JS) and push to GitHub. The APK will rebuild automatically.
