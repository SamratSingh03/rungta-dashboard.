# 🎓 Rungta College Student Experience Dashboard
A next-generation, Gen Z-friendly interactive dashboard designed for the **Rungta Group of Institutions**. Rebuilt with official branding, active student tools, financial calculator instruments, and multimedia elements.
---
## 🎨 Design & Branding
*   **Thematic Color Scheme:** Re-engineered with Rungta's official **Crimson Red** and **Pearl White** branding. Supports smooth transition toggles between Light Mode and Dark Charcoal Mode.
*   **Aesthetics:** Premium glassmorphism cards (`backdrop-filter: blur(12px)`), responsive layouts, micro-interactions, and visual hover states.
*   **Official Assets:** Integrated the official Rungta Group header branding logo downloaded directly from `rungta.ac.in`.
---
## 🚀 Key Features
1.  **Home Feed with Rotating Banner:**
    *   Dynamic auto-rotating background slideshow cross-fading through real campus scenes, student activity, and placements celebration graphics.
    *   Official university affiliations panel (**Approved by AICTE, affiliated with CSVTU, NAAC accredited**).
    *   Embedded 3-minute virtual drone tour video.
2.  **Student Journey Timeline:**
    *   Multi-stage lifecycle tracker showing progress checkpoints from application submission up to recruitment onboarding.
3.  **Admissions Simulator:**
    *   Complete multi-step admissions wizard. Enter details and scores to instantly generate a printable, official provisional approval letter with registrar signature blocks.
4.  **Find Your Fit Quiz:**
    *   A interactive stream matcher quiz. Matches student preferences with Rungta programs (Engineering, Pharmacy, Dental) and auto-populates details into the Admissions Wizard.
5.  **Interactive Recruiter Directory:**
    *   Search and filter actual Rungta recruiting partners, showing placement figures and corporate sectors.
6.  **Tuition Fee & ROI Calculator:**
    *   Adjust course selections and expected starting salary packages via range sliders to instantly calculate payback periods (months to break-even) and investment grading indexes.
7.  **Campus Tour Hotspot Explorer:**
    *   Interactive maps detailing campus amenities, computing labs, central libraries, and sports centers complete with photo galleries.
8.  **Active Student Hub (Alerts):**
    *   Notification panel showing mock administrative and career notices. Includes a sandbox dispatch control board to test push-alert rendering.
9.  **Header Soothing Music Player:**
    *   Header-mounted study music widget streaming soft background lofi tracks, complete with play/pause triggers and animated sound equalizer bars.
---
## 📁 File Structure
```text
rungta-dashboard/
├── index.html       # Main webpage markup
├── style.css        # Stylesheet, theme tokens, and animations
├── app.js           # JavaScript states and event logic
├── README.md        # This documentation file
└── assets/          # Local media files
    ├── rungta_logo.webp        # Official Rungta header logo
    ├── campus_banner.webp      # Campus front view
    ├── campus_life.webp        # Student activities view
    └── placements_image.webp   # Placement celebrations view
