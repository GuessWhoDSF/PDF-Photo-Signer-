SIGNED POD - installable web app
================================

What it does
  Load a delivery note (PDF or photo), the customer types their name and signs
  with a finger, the date is added, and you save or share a signed PDF.
  Everything runs on the phone. Nothing is uploaded anywhere.

Put it online (needed once, must be HTTPS)
  Option A - GitHub Pages (free)
    1. Create a new public repository on github.com.
    2. Upload ALL files from this folder, keeping the folders
       (icons and standard_fonts) as they are.
    3. In the repository go to Settings > Pages, choose the main branch
       and the root folder, then Save.
    4. After a minute the site is live at
       https://YOURNAME.github.io/REPOSITORYNAME/

  Option B - your own website
    Upload the whole folder to any HTTPS web space and open its address.

Install on Android
  1. Open the web address in Chrome on the phone or tablet.
  2. Tap "Install app" at the top of the page, or Chrome menu (three dots)
     > Install app / Add to Home screen.
  3. Open it from the new Signed POD icon. It works without signal after
     the first load.

Sending
  Step 4 "Send to" keeps a list of WhatsApp numbers and email addresses on
  the phone. Tap Send PDF next to a person: the phone's share screen opens
  with the signed PDF attached. Choose WhatsApp or your email app, then pick
  that person (their number or address is copied for you to paste).
  "Message only" opens a chat or email to them without the PDF.
  A web app cannot attach a file to a chat link, which is why the share
  screen is used.

Saving
  "Save signed PDF" downloads to the phone's Downloads folder.
  "Share PDF" (shown when the phone supports it) sends the PDF straight to
  WhatsApp, email and so on.

Updating later
  If you change any file, edit VERSION at the top of sw.js (for example
  signed-pod-v4) so phones pick up the new copy.

Notes
  - Opening index.html straight from the phone's files will not install.
    It has to be served from a web address.
  - Photos are not straightened or cropped. Hold the phone square to the page.
  - The form's details are examples. Replace them with your own.
