# SysAdminPath: System Administrator Career Portfolio

A responsive, single-page career portfolio explaining System Administration career pathways, responsibilities, skills, and tools.

## Technology stack
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3
- Bootstrap Icons
- Google Fonts (Inter)

No database, login system, or administrator dashboard is required.

## Project structure
```text
sysadmin-career-portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Run locally
1. Extract the project ZIP.
2. Open the `sysadmin-career-portfolio` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code **Live Server** extension and select **Open with Live Server**.
4. Keep an internet connection available for Bootstrap, Bootstrap Icons, and Google Fonts loaded from their CDNs.

The website is static and does not need XAMPP, PHP, MySQL, or a build step.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new repository, for example `sysadmin-career-portfolio`.
2. Upload `index.html`, `README.md`, `css/style.css`, and `js/script.js`, keeping the folder structure unchanged.
3. Open the repository's **Settings**.
4. Select **Pages** from the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then click **Save**.
7. Wait for the deployment to finish. GitHub will display the published website URL in the Pages section.

Your URL will usually look like `https://YOUR-USERNAME.github.io/sysadmin-career-portfolio/`. Replace `YOUR-USERNAME` with your actual GitHub username. Do not submit the example URL as if it were already live.

## Before submitting
- [ ] Test the navigation links on desktop and mobile.
- [ ] Check the page at a narrow phone width.
- [ ] Add a professional email address if you want the Contact button to work.
- [ ] Take screenshots of the Home, Career Pathway, Skills, Job Roles, Tools, and About sections.
- [ ] Submit the published GitHub Pages URL or demonstrate the website locally.
- [ ] Submit the complete source code folder or ZIP.

## Personalizing the contact button
In `index.html`, find the Contact / connect button and add your email as a `data-email` attribute. For example:
```html
<a href="mailto:yourname@example.com" class="btn btn-primary" id="contactButton" data-email="yourname@example.com">
```
Use an email address you are comfortable making public. Remove the nearby contact note after configuring the button if you no longer need the reminder.

## Notes
- The website uses CDN-hosted libraries, so those resources require an internet connection.
- Career titles and job requirements vary between organizations. The descriptions are intended as a general learning guide, not a promise of a particular career progression.
