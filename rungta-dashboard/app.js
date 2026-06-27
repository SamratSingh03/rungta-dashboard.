/* -------------------------------------------------------------
   COLLEGES AND COURSES DATA MODEL
   ------------------------------------------------------------- */
const coursesData = [
    {
        id: "btech-cse",
        name: "B.Tech Computer Science & Eng. (CSE)",
        college: "RCET Bhilai",
        stream: "engineering",
        duration: "4 Years",
        intake: 180,
        package: "38.0 LPA",
        desc: "Learn algorithms, cloud computing, database structures, and advanced systems design with industry partnerships."
    },
    {
        id: "btech-aiml",
        name: "B.Tech CSE (Artificial Intelligence & ML)",
        college: "RCET Bhilai",
        stream: "engineering",
        duration: "4 Years",
        intake: 60,
        package: "28.0 LPA",
        desc: "Focus on neural networks, natural language processing, statistics, and building intelligent agents."
    },
    {
        id: "btech-me",
        name: "B.Tech Mechanical Engineering",
        college: "RCET Bhilai",
        stream: "engineering",
        duration: "4 Years",
        intake: 90,
        package: "8.5 LPA",
        desc: "Covers thermodynamics, robotics, machine design, CAD/CAM modelling, and industrial manufacturing."
    },
    {
        id: "btech-ce",
        name: "B.Tech Civil Engineering",
        college: "RCET Raipur",
        stream: "engineering",
        duration: "4 Years",
        intake: 60,
        package: "7.0 LPA",
        desc: "Structural analytics, urban planning, hydraulics, concrete design, and infrastructure development."
    },
    {
        id: "bpharm",
        name: "Bachelor of Pharmacy (B.Pharm)",
        college: "RIPER Bhilai",
        stream: "pharmacy",
        duration: "4 Years",
        intake: 100,
        package: "9.2 LPA",
        desc: "Study of pharmacology, pharmaceutical chemistry, clinical research, drug dosage forms and formulation."
    },
    {
        id: "dpharm",
        name: "Diploma in Pharmacy (D.Pharm)",
        college: "RIPER Bhilai",
        stream: "pharmacy",
        duration: "2 Years",
        intake: 60,
        package: "4.5 LPA",
        desc: "Practical foundation course covering basic pharmacy practice, hospital clinical procedures and dispensing."
    },
    {
        id: "bds",
        name: "Bachelor of Dental Surgery (BDS)",
        college: "RCDSR Bhilai",
        stream: "dental",
        duration: "5 Years",
        intake: 100,
        package: "12.0 LPA",
        desc: "Premier dental clinic exposure, oral pathology, surgery practices, prosthodontics, and hands-on patient rounds."
    },
    {
        id: "mds",
        name: "Master of Dental Surgery (MDS)",
        college: "RCDSR Bhilai",
        stream: "dental",
        duration: "3 Years",
        intake: 24,
        package: "18.5 LPA",
        desc: "Specialized postgraduate studies in Orthodontics, Oral Surgery, Prosthodontics, or Periodontics."
    },
    {
        id: "mba",
        name: "Master of Business Administration (MBA)",
        college: "Rungta University (RIU)",
        stream: "management",
        duration: "2 Years",
        intake: 120,
        package: "14.0 LPA",
        desc: "Specialize in Finance, Marketing, HR, or Systems with dynamic group case studies and industry internships."
    },
    {
        id: "mca",
        name: "Master of Computer Applications (MCA)",
        college: "RCET Bhilai",
        stream: "management",
        duration: "2 Years",
        intake: 60,
        package: "10.5 LPA",
        desc: "Advanced programming, mobile app development, internet architecture, software lifecycle and systems engineering."
    },
    {
        id: "bca",
        name: "Bachelor of Computer Applications (BCA)",
        college: "Rungta University (RIU)",
        stream: "management",
        duration: "3 Years",
        intake: 90,
        package: "6.5 LPA",
        desc: "Comprehensive logic building, web technologies, database administration, and basic system administration."
    }
];

const recruitersData = [
    { name: "Amazon", icon: "fa-brands fa-amazon", sector: "Tech / Product", hires: "18 Placed" },
    { name: "AWS", icon: "fa-solid fa-cloud", sector: "Cloud Services", hires: "12 Placed" },
    { name: "TCS", icon: "fa-solid fa-code-branch", sector: "IT Services", hires: "85 Placed" },
    { name: "Wipro", icon: "fa-solid fa-network-wired", sector: "IT Services", hires: "64 Placed" },
    { name: "Infosys", icon: "fa-solid fa-cubes", sector: "IT Services", hires: "70 Placed" },
    { name: "Capgemini", icon: "fa-solid fa-diagram-project", sector: "IT Services", hires: "48 Placed" },
    { name: "Tech Mahindra", icon: "fa-solid fa-screwdriver-wrench", sector: "Telecom & Tech", hires: "35 Placed" },
    { name: "Cognizant", icon: "fa-solid fa-brain", sector: "IT Services", hires: "52 Placed" },
    { name: "IBM", icon: "fa-solid fa-server", sector: "Tech & Services", hires: "22 Placed" },
    { name: "Accenture", icon: "fa-solid fa-chart-line", sector: "Consulting", hires: "40 Placed" },
    { name: "Samsung", icon: "fa-solid fa-mobile-screen-button", sector: "Electronics", hires: "8 Placed" },
    { name: "Deloitte", icon: "fa-solid fa-calculator", sector: "Audit & Tax", hires: "15 Placed" }
];

const workflowStepsData = [
    {
        step: 1,
        title: "Register & Inquire Interest",
        desc: "The initial phase of your path. Submit your online enquiry to share your career objectives and chosen stream. Our academic counselors will review your profile and contact you within 24 hours.",
        checklist: [
            { text: "Fill up basic information in the portal.", checked: true },
            { text: "Choose your course stream interest (e.g. Engineering, Management).", checked: true },
            { text: "Request free call back from academic mentors.", checked: false }
        ]
    },
    {
        step: 2,
        title: "Entrance Exams & Merit Review",
        desc: "Depending on your selected program (Engineering, Pharmacy, Dental, or MBA), valid scores in state or national level examinations are evaluated. Alternatively, qualifying criteria for merit-based admissions are verified.",
        checklist: [
            { text: "Upload JEE / CGPET / NEET / CAT scorecard (if applicable).", checked: false },
            { text: "Submit 10th & 12th board marksheet copies.", checked: false },
            { text: "Clear minimum qualification threshold (typically 40-50%).", checked: true }
        ]
    },
    {
        step: 3,
        title: "Counseling & Cutoff Matching",
        desc: "Seats are allocated based on your score ranks and choices. The admissions panel maps matching courses and guides candidates on optimal choices during counseling rounds.",
        checklist: [
            { text: "Participate in central counseling or institutional counseling session.", checked: false },
            { text: "Select chosen college code (e.g., RCET Bhilai code).", checked: false },
            { text: "Receive seat allocation confirmation notice.", checked: false }
        ]
    },
    {
        step: 4,
        title: "Document Verification",
        desc: "Physical or virtual review of all critical verification certificates to validate eligibility. This step ensures that all academic and personal records are officially verified in compliance with university standards.",
        checklist: [
            { text: "Verify original Transfer Certificate (TC) & Migration certificate.", checked: false },
            { text: "Confirm Category/Domicile certificate (for reservation candidates).", checked: false },
            { text: "Pass character review & background verification check.", checked: false }
        ]
    },
    {
        step: 5,
        title: "Fee Payment & Onboarding",
        desc: "Lock your seat! Pay the administrative fee online through our secure portal and finalize your onboarding. You'll receive your official university enrollment ID, hostel allocations (optional), and induction schedule.",
        checklist: [
            { text: "Pay semester fee through fees.rungta.ac.in portal.", checked: false },
            { text: "Obtain official student enrollment ID card.", checked: false },
            { text: "Receive orientation schedule and time-table syllabus.", checked: false }
        ]
    },
    {
        step: 6,
        title: "Academics & Placement Cell Drive",
        desc: "The final and most crucial workflow stage. Engage in dynamic learning, work in cutting-edge labs, join hackathons, and enter our rigorous T&P Cell program to secure placements in global multinationals.",
        checklist: [
            { text: "Achieve minimum 75% class attendance each semester.", checked: false },
            { text: "Participate in T&P Mock interviews & coding bootcamps.", checked: false },
            { text: "Attend campus interview drives & secure placement.", checked: false }
        ]
    }
];

/* -------------------------------------------------------------
   STATE MANAGEMENT
   ------------------------------------------------------------- */
let currentTab = 'home';
let activeWorkflowStep = 1;
let admissionStatus = {
    submitted: false,
    eligible: false,
    studentName: '',
    email: '',
    phone: '',
    stream: '',
    score: 0,
    examScore: 0
};
let testimonialIndex = 0;

/* -------------------------------------------------------------
   UI ELEMENTS & INITIALIZATION
   ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // Nav elements
    const menuButtons = document.querySelectorAll('.menu-btn');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const sidebar = document.getElementById('sidebar');

    // Tab switching
    menuButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Mobile nav toggles
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => sidebar.classList.add('open'));
    }
    if (mobileClose && sidebar) {
        mobileClose.addEventListener('click', () => sidebar.classList.remove('open'));
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Course filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCourses();
        });
    });

    // Search inputs
    const courseSearch = document.getElementById('course-search');
    if (courseSearch) {
        courseSearch.addEventListener('input', renderCourses);
    }
    const recruiterSearch = document.getElementById('recruiter-search');
    if (recruiterSearch) {
        recruiterSearch.addEventListener('input', renderRecruiters);
    }

    // Carousel buttons
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    if (carouselPrev && carouselNext) {
        carouselPrev.addEventListener('click', prevTestimonial);
        carouselNext.addEventListener('click', nextTestimonial);
    }

    // Workflow node click event listener
    const workflowStepNodes = document.querySelectorAll('.workflow-step');
    workflowStepNodes.forEach(node => {
        node.addEventListener('click', () => {
            const stepNum = parseInt(node.getAttribute('data-step'));
            setWorkflowStep(stepNum);
        });
    });

    // Campus tour hotspot click handlers
    const tourHotspots = document.querySelectorAll('.tour-hotspot');
    tourHotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            tourHotspots.forEach(h => h.classList.remove('active'));
            hotspot.classList.add('active');
            const landmark = hotspot.getAttribute('data-landmark');
            setTourLandmark(landmark);
        });
    });

    // Quiz delegation
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    if (quizOptionsContainer) {
        quizOptionsContainer.addEventListener('click', (e) => {
            const optionBtn = e.target.closest('.quiz-option-btn');
            if (optionBtn) {
                const choice = optionBtn.getAttribute('data-choice');
                selectQuizOption(choice);
            }
        });
    }

    // ROI fields
    const roiCourseSelect = document.getElementById('roi-course-select');
    const roiSalaryRange = document.getElementById('roi-salary-range');
    if (roiCourseSelect && roiSalaryRange) {
        roiCourseSelect.addEventListener('change', updateROICalculation);
        roiSalaryRange.addEventListener('input', updateROICalculation);
    }

    // Hub notification filters
    const hubFilterButtons = document.querySelectorAll('.hub-filter-btn');
    hubFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            hubFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderNotifications();
        });
    });

    // Audio Player Toggle Controls
    const audioWidget = document.getElementById('audio-widget');
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    const bgAudio = document.getElementById('bg-audio');
    
    if (audioToggleBtn && bgAudio) {
        bgAudio.volume = 0.25;

        audioToggleBtn.addEventListener('click', () => {
            const playIcon = audioToggleBtn.querySelector('.play-icon');
            const pauseIcon = audioToggleBtn.querySelector('.pause-icon');

            if (bgAudio.paused) {
                bgAudio.play().then(() => {
                    audioWidget.classList.add('playing');
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                }).catch(err => {
                    console.log("Audio play failed: ", err);
                });
            } else {
                bgAudio.pause();
                audioWidget.classList.remove('playing');
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            }
        });
    }

    // Initial Renders
    renderCourses();
    renderRecruiters();
    updateWorkflowUI();
    updateROICalculation();
    renderNotifications();
    startHeroSlideshow();
});

/* -------------------------------------------------------------
   TAB CONTROLLER
   ------------------------------------------------------------- */
function switchTab(tabId) {
    currentTab = tabId;

    // Toggle Content Active State
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `tab-${tabId}`) {
            content.classList.add('active');
        }
    });

    // Toggle Menu Link Active State
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });

    // Close Mobile Drawer
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');

    // Scroll to Top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* -------------------------------------------------------------
   COURSE RENDER & FILTER LOGIC
   ------------------------------------------------------------- */
function renderCourses() {
    const container = document.getElementById('course-grid');
    if (!container) return;

    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const searchVal = document.getElementById('course-search').value.toLowerCase();

    // Filter courses
    const filteredCourses = coursesData.filter(course => {
        const matchesFilter = (activeFilter === 'all' || course.stream === activeFilter);
        const matchesSearch = course.name.toLowerCase().includes(searchVal) || 
                              course.college.toLowerCase().includes(searchVal) ||
                              course.desc.toLowerCase().includes(searchVal);
        return matchesFilter && matchesSearch;
    });

    // Build markup
    if (filteredCourses.length === 0) {
        container.innerHTML = `
            <div class="status-placeholder" style="grid-column: 1 / -1; min-height: 200px;">
                <div class="pulse-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                <h4>No courses match your query</h4>
                <p>Try searching for other terms like CSE, MBA or Dental.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredCourses.map(course => `
        <article class="course-card">
            <div class="course-card-header">
                <span class="stream-badge stream-${course.stream}">${course.stream}</span>
                <span class="course-duration"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
            </div>
            <h4>${course.name}</h4>
            <p class="course-desc">${course.desc}</p>
            <div class="course-stats">
                <div class="course-stat-item">
                    <span class="course-stat-label">Intake seats</span>
                    <span class="course-stat-val">${course.intake}</span>
                </div>
                <div class="course-stat-item" style="text-align: right;">
                    <span class="course-stat-label">Placement up to</span>
                    <span class="course-stat-val text-accent-amber" style="font-weight: 800;">${course.package}</span>
                </div>
            </div>
        </article>
    `).join('');
}

/* -------------------------------------------------------------
   RECRUITERS HUB LOGIC
   ------------------------------------------------------------- */
function renderRecruiters() {
    const grid = document.getElementById('recruiters-grid');
    if (!grid) return;

    const query = document.getElementById('recruiter-search').value.toLowerCase();
    const filteredRecruiters = recruitersData.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.sector.toLowerCase().includes(query)
    );

    if (filteredRecruiters.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 20px 0;">No matching recruiters found.</p>`;
        return;
    }

    grid.innerHTML = filteredRecruiters.map(r => `
        <div class="recruiter-logo-item" style="padding: 10px; display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center; gap: 4px;">
            <i class="${r.icon}" style="font-size: 1.4rem;"></i>
            <span style="font-weight: 700; font-size: 0.85rem; display: block; color: var(--text-primary);">${r.name}</span>
            <span style="font-size: 0.65rem; color: var(--accent-red-light); font-weight: 700; display: block;">${r.hires}</span>
            <span style="font-size: 0.6rem; color: var(--text-muted); display: block; white-space: nowrap;">${r.sector}</span>
        </div>
    `).join('');
}

/* -------------------------------------------------------------
   WORKFLOW STEPS AND STATE NAVIGATION
   ------------------------------------------------------------- */
function setWorkflowStep(stepNum) {
    if (stepNum < 1 || stepNum > 6) return;
    activeWorkflowStep = stepNum;
    updateWorkflowUI();
}

function nextWorkflowStep() {
    if (activeWorkflowStep < 6) {
        activeWorkflowStep++;
        updateWorkflowUI();
    } else {
        // Shits back to Step 1 if finished loop
        activeWorkflowStep = 1;
        updateWorkflowUI();
    }
}

function updateWorkflowUI() {
    const stepNodes = document.querySelectorAll('.workflow-step');
    const lineFill = document.getElementById('workflow-line-fill');
    
    // Update step node classes
    stepNodes.forEach((node, idx) => {
        const stepNum = idx + 1;
        node.classList.remove('active', 'completed');
        
        if (stepNum === activeWorkflowStep) {
            node.classList.add('active');
        } else if (stepNum < activeWorkflowStep) {
            node.classList.add('completed');
        }
    });

    // Update connecting line fill
    if (lineFill) {
        const percent = ((activeWorkflowStep - 1) / 5) * 100;
        lineFill.style.width = `${percent}%`;
    }

    // Update Detail Panel Card
    const data = workflowStepsData.find(s => s.step === activeWorkflowStep);
    const detailCard = document.getElementById('step-detail-card');
    
    if (detailCard && data) {
        document.getElementById('detail-step-badge').textContent = `Step ${data.step} of 6`;
        document.getElementById('detail-step-title').textContent = data.title;
        
        // Build checklist items
        let checklistHTML = `
            <h4>Requirements & Checklist</h4>
            <ul>
        `;
        data.checklist.forEach(item => {
            const iconClass = item.checked ? 'fa-regular fa-square-check' : 'fa-regular fa-square';
            checklistHTML += `<li><i class="${iconClass}"></i> ${item.text}</li>`;
        });
        checklistHTML += '</ul>';

        // Set card inner content
        const descHTML = `
            <p>${data.desc}</p>
            <div class="checklist-section">
                ${checklistHTML}
            </div>
            <div class="detail-footer">
                <div class="info-note">
                    <i class="fa-solid fa-circle-info"></i> ${
                        admissionStatus.submitted && activeWorkflowStep <= 5
                        ? "Great! You have completed these onboarding admissions criteria!"
                        : "Submit the registration portal form to fast-track your workflow status."
                    }
                </div>
                <button class="btn btn-primary" onclick="nextWorkflowStep()">${
                    activeWorkflowStep === 6 ? "Restart Cycle" : "Next Phase"
                } <i class="fa-solid fa-chevron-right"></i></button>
            </div>
        `;
        document.getElementById('detail-step-desc').innerHTML = descHTML;
    }
}

/* -------------------------------------------------------------
   CAROUSEL TRANSITIONS
   ------------------------------------------------------------- */
function prevTestimonial() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex - 1 + slides.length) % slides.length;
    slides[testimonialIndex].classList.add('active');
}

function nextTestimonial() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % slides.length;
    slides[testimonialIndex].classList.add('active');
}

/* -------------------------------------------------------------
   ADMISSION SIMULATOR WIZARD FORM LOGIC
   ------------------------------------------------------------- */
let wizardFormStep = 1;

function validateStep1() {
    const nameInput = document.getElementById('student-name');
    const emailInput = document.getElementById('student-email');
    const phoneInput = document.getElementById('student-phone');

    let isValid = true;

    // Reset errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('phone-error').textContent = '';

    if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit mobile number.';
        isValid = false;
    }

    if (isValid) {
        wizardFormStep = 2;
        updateWizardFormUI();
    }
}

function prevFormStep() {
    wizardFormStep = 1;
    updateWizardFormUI();
}

function updateWizardFormUI() {
    const steps = document.querySelectorAll('.wizard-form-step');
    steps.forEach(s => {
        s.classList.remove('active');
        if (parseInt(s.getAttribute('data-form-step')) === wizardFormStep) {
            s.classList.add('active');
        }
    });

    const indicator = document.getElementById('form-step-indicator');
    if (indicator) {
        indicator.textContent = wizardFormStep === 1 ? 'Step 1: Bio' : 'Step 2: Academics';
    }
}

function submitAdmissionSimulator() {
    const streamInput = document.getElementById('student-stream');
    const scoreInput = document.getElementById('student-score');
    const examInput = document.getElementById('student-exam');

    document.getElementById('score-error').textContent = '';

    const scoreVal = parseFloat(scoreInput.value);
    if (isNaN(scoreVal) || scoreVal < 40 || scoreVal > 100) {
        document.getElementById('score-error').textContent = 'Score must be between 40% and 100%.';
        return;
    }

    if (!streamInput.value) {
        alert('Please select a course stream.');
        return;
    }

    // Set state variables
    admissionStatus.submitted = true;
    admissionStatus.eligible = scoreVal >= 50; // Merit admission cutoff 50%
    admissionStatus.studentName = document.getElementById('student-name').value.trim();
    admissionStatus.email = document.getElementById('student-email').value.trim();
    admissionStatus.phone = document.getElementById('student-phone').value.trim();
    
    // Read display stream
    const selectedOption = streamInput.options[streamInput.selectedIndex].text;
    admissionStatus.stream = selectedOption;
    admissionStatus.score = scoreVal;
    admissionStatus.examScore = examInput.value ? parseFloat(examInput.value) : 0;

    // Display Results
    showAdmissionResult();
}

function showAdmissionResult() {
    const placeholder = document.getElementById('status-placeholder');
    const successLetter = document.getElementById('status-success-letter');
    const statusTag = document.getElementById('status-tag');

    placeholder.classList.add('hidden');
    successLetter.classList.remove('hidden');

    if (admissionStatus.eligible) {
        // Approved Letter Content
        statusTag.textContent = 'Provisional Approved';
        statusTag.className = 'status-indicator text-accent-indigo';
        
        document.getElementById('letter-student-name').textContent = admissionStatus.studentName;
        document.getElementById('letter-student-score').textContent = `${admissionStatus.score}%`;
        document.getElementById('letter-student-stream').textContent = admissionStatus.stream;

        // Automatically update the user profile info on Sidebar
        document.getElementById('profile-name').textContent = admissionStatus.studentName;
        document.getElementById('profile-status').textContent = 'Admitted (Provisional)';

        // Shift global progress bar
        document.getElementById('header-progress-fill').style.width = '80%';
        document.getElementById('header-progress-pct').textContent = '80%';
        document.getElementById('greeting-title').textContent = `Welcome aboard, ${admissionStatus.studentName.split(' ')[0]}! 🚀`;

        // Update workflow list automatically to step 5 (Onboarding)
        activeWorkflowStep = 5;
        
        // Auto check off the checklist indicators for step 1-4
        workflowStepsData[0].checklist.forEach(c => c.checked = true);
        workflowStepsData[1].checklist.forEach(c => c.checked = true);
        workflowStepsData[2].checklist.forEach(c => c.checked = true);
        workflowStepsData[3].checklist.forEach(c => c.checked = true);

        updateWorkflowUI();

    } else {
        // Not Eligible State Letter Modifications
        statusTag.textContent = 'Hold / Counselling';
        statusTag.className = 'status-indicator text-accent-amber';
        
        const letterBody = document.querySelector('.letter-body');
        letterBody.innerHTML = `
            <h5>COUNSELLING ASSISTANCE REQ.</h5>
            <p>Dear <strong>${admissionStatus.studentName}</strong>,</p>
            <p>Thank you for submitting your application simulator. Your score of <strong>${admissionStatus.score}%</strong> sits below the instant merit threshold (50%).</p>
            <p>However, your file has been forwarded to our **Counselling Panel** for custom admissions review. We will reach you at <strong>${admissionStatus.phone}</strong> or <strong>${admissionStatus.email}</strong> to review alternative seat streams.</p>
        `;
        document.querySelector('.letter-badge').innerHTML = `<i class="fa-solid fa-hourglass-half"></i> COUNSELLING REQUIRED`;
        document.querySelector('.letter-badge').style.borderColor = 'var(--accent-amber)';
        document.querySelector('.letter-badge').style.color = 'var(--accent-amber)';
        document.querySelector('.letter-badge').style.backgroundColor = 'rgba(245,158,11,0.1)';

        document.getElementById('profile-name').textContent = admissionStatus.studentName;
        document.getElementById('profile-status').textContent = 'In Counselling Review';

        document.getElementById('header-progress-fill').style.width = '50%';
        document.getElementById('header-progress-pct').textContent = '50%';

        activeWorkflowStep = 3; // Shift to Counselling step
        updateWorkflowUI();
    }
}

function resetAdmissionSimulator() {
    // Reset state
    admissionStatus = {
        submitted: false,
        eligible: false,
        studentName: '',
        email: '',
        phone: '',
        stream: '',
        score: 0,
        examScore: 0
    };

    wizardFormStep = 1;
    document.getElementById('admission-wizard-form').reset();
    updateWizardFormUI();

    // Toggle panels
    document.getElementById('status-placeholder').classList.remove('hidden');
    document.getElementById('status-success-letter').classList.add('hidden');
    
    const statusTag = document.getElementById('status-tag');
    statusTag.textContent = 'Unsubmitted';
    statusTag.className = 'card-tag';

    // Reset profile info
    document.getElementById('profile-name').textContent = 'Guest Explorer';
    document.getElementById('profile-status').textContent = 'Not Registered';

    // Reset progress pill
    document.getElementById('header-progress-fill').style.width = '20%';
    document.getElementById('header-progress-pct').textContent = '20%';
    document.getElementById('greeting-title').textContent = 'Hey, Future Rungtian! 👋';

    // Restore original text in letter body
    const letterBody = document.querySelector('.letter-body');
    letterBody.innerHTML = `
        <h5>OFFER OF PROVISIONAL ADMISSION</h5>
        <p>Dear <strong id="letter-student-name">Student</strong>,</p>
        <p>Congratulations! Based on your academic score of <span id="letter-student-score">85%</span>, we are pleased to offer you provisional admission into the <strong id="letter-student-stream">Computer Science</strong> program at our campus.</p>
        <p>Your enrollment stands active under the tracker, shifting your Journey Pipeline to **Stage 5: Verification & Onboarding**.</p>
    `;
    
    const letterBadge = document.querySelector('.letter-badge');
    letterBadge.innerHTML = `<i class="fa-solid fa-stamp"></i> APPROVED`;
    letterBadge.style.borderColor = 'var(--accent-success)';
    letterBadge.style.color = 'var(--accent-success)';
    letterBadge.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';

    activeWorkflowStep = 1;
    // Reset checklists
    workflowStepsData[0].checklist[2].checked = false;
    workflowStepsData.slice(1).forEach(step => {
        step.checklist.forEach(c => {
            if (c.text.includes("Clear minimum qualification")) c.checked = true;
            else c.checked = false;
        });
    });

    updateWorkflowUI();
}

function printOfferLetter() {
    window.print();
}

/* -------------------------------------------------------------
   CAREER MATCHING QUIZ LOGIC
   ------------------------------------------------------------- */
const quizQuestions = [
    {
        num: 1,
        question: "How do you prefer to spend your weekend?",
        options: [
            { text: "Building cool web apps, modding games, or playing with tech.", weight: "engineering", letter: "A" },
            { text: "Reading about biology, molecular sciences, or compounding formulas.", weight: "pharmacy", letter: "B" },
            { text: "Helping others, clinical diagnostics, or analyzing tooth anatomy and smiles.", weight: "dental", letter: "C" },
            { text: "Pitching startup ideas, analyzing stock trends, or organizing community teams.", weight: "management", letter: "D" }
        ]
    },
    {
        num: 2,
        question: "What is your main cognitive superpower?",
        options: [
            { text: "Logical problem solving and structured systems thinking.", weight: "engineering", letter: "A" },
            { text: "An analytical memory for complex biological and chemical structures.", weight: "pharmacy", letter: "B" },
            { text: "Steady hand coordination, patient empathy, and surgical precision.", weight: "dental", letter: "C" },
            { text: "Persuasion, public speaking, and leading organizational groups.", weight: "management", letter: "D" }
        ]
    },
    {
        num: 3,
        question: "Pick your ideal professional desk environment:",
        options: [
            { text: "A sleek workspace with dual monitors, code terminals, and coffee.", weight: "engineering", letter: "A" },
            { text: "A sterilized research lab with test tubes, balances, and compounding tools.", weight: "pharmacy", letter: "B" },
            { text: "A brightly lit clinical chair surrounded by modern healthcare instruments.", weight: "dental", letter: "C" },
            { text: "A high-rise boardroom collaborating on marketing and venture metrics.", weight: "management", letter: "D" }
        ]
    },
    {
        num: 4,
        question: "What is your primary goal during your college tenure?",
        options: [
            { text: "To master core software design and win tech hackathons.", weight: "engineering", letter: "A" },
            { text: "To discover medicine compounds and manage pharmaceutical patents.", weight: "pharmacy", letter: "B" },
            { text: "To learn clinical dental surgeries and treat real campus patients.", weight: "dental", letter: "C" },
            { text: "To pitch business plans, manage operations, and network with CEOs.", weight: "management", letter: "D" }
        ]
    }
];

let quizAnswers = [];
let currentQuizIndex = 0;
let quizMatchResult = '';

function selectQuizOption(choice) {
    quizAnswers.push(choice);
    currentQuizIndex++;

    if (currentQuizIndex < 4) {
        renderQuizQuestion();
    } else {
        calculateQuizResult();
    }
}

function renderQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-question-title').innerHTML = `<i class="fa-solid fa-circle-question"></i> Question ${q.num} of 4`;
    document.getElementById('quiz-progress-badge').textContent = `Q${q.num} Active`;
    document.getElementById('question-text').textContent = q.question;

    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = q.options.map(opt => `
        <button class="quiz-option-btn" data-choice="${opt.weight}">
            <span class="option-letter">${opt.letter}</span>
            <span class="option-txt">${opt.text}</span>
        </button>
    `).join('');
}

function calculateQuizResult() {
    // Find mode of choices
    const counts = {};
    let maxChoice = 'engineering';
    let maxCount = 0;

    quizAnswers.forEach(choice => {
        counts[choice] = (counts[choice] || 0) + 1;
        if (counts[choice] > maxCount) {
            maxCount = counts[choice];
            maxChoice = choice;
        }
    });

    quizMatchResult = maxChoice;

    // Show result panels
    document.getElementById('quiz-result-placeholder').classList.add('hidden');
    document.getElementById('quiz-result-box').classList.remove('hidden');

    const progressBadge = document.getElementById('quiz-progress-badge');
    progressBadge.textContent = "Completed";
    progressBadge.className = "card-tag status-indicator active";

    // Set matching stream attributes
    const streamTag = document.getElementById('quiz-result-stream-tag');
    const matchTitle = document.getElementById('quiz-match-title');
    const matchDesc = document.getElementById('quiz-match-description');
    const matchPctText = document.getElementById('quiz-match-pct-text');
    const matchSalary = document.getElementById('quiz-match-salary');

    // Score: 1 choice = 50%, 2 = 75%, 3 = 90%, 4 = 100%
    const pctMap = { 1: "50%", 2: "75%", 3: "90%", 4: "100%" };
    matchPctText.textContent = pctMap[maxCount] || "85%";

    if (maxChoice === 'engineering') {
        streamTag.textContent = "ENGINEERING (RCET)";
        streamTag.style.borderColor = "var(--accent-red)";
        streamTag.style.color = "var(--accent-red-light)";
        streamTag.style.backgroundColor = "rgba(192,30,46,0.06)";
        matchTitle.textContent = "B.Tech Computer Science / AI-ML";
        matchDesc.textContent = "Your profile shows high affinity for logic structure, tech solutions, and system models. RCET Bhilai offers cutting-edge labs and top placements up to 38 LPA.";
        matchSalary.textContent = "38.0 LPA";
    } else if (maxChoice === 'pharmacy') {
        streamTag.textContent = "PHARMACY (RIPER)";
        streamTag.style.borderColor = "var(--accent-success)";
        streamTag.style.color = "var(--accent-success)";
        streamTag.style.backgroundColor = "rgba(16,185,129,0.06)";
        matchTitle.textContent = "Bachelor of Pharmacy (B.Pharm)";
        matchDesc.textContent = "Your interests align with healthcare development, compounding, chemistry, and clinical doses. RIPER Bhilai provides industry-standard pharmacology labs.";
        matchSalary.textContent = "9.2 LPA";
    } else if (maxChoice === 'dental') {
        streamTag.textContent = "DENTAL (RCDSR)";
        streamTag.style.borderColor = "var(--accent-red-light)";
        streamTag.style.color = "var(--accent-red-light)";
        streamTag.style.backgroundColor = "rgba(224,62,77,0.06)";
        matchTitle.textContent = "Bachelor of Dental Surgery (BDS)";
        matchDesc.textContent = "You show great empathy for clinical care, tooth structure, and dental surgeries. RCDSR Bhilai has extensive patient clinics and postgrad courses.";
        matchSalary.textContent = "12.0 LPA";
    } else if (maxChoice === 'management') {
        streamTag.textContent = "MANAGEMENT & IT (RIU)";
        streamTag.style.borderColor = "var(--accent-amber)";
        streamTag.style.color = "var(--text-primary)";
        streamTag.style.backgroundColor = "var(--border-color)";
        matchTitle.textContent = "Master of Business Administration (MBA)";
        matchDesc.textContent = "Your leadership profile fits strategic management, capital metrics, team structures, and corporate networking. RIU offers elite global corporate tie-ups.";
        matchSalary.textContent = "14.0 LPA";
    }

    // Update main card to showing summary finished
    document.getElementById('quiz-box').innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <div class="pulse-icon" style="color: var(--accent-success); background-color: rgba(16,185,129,0.06); border-color: var(--accent-success);"><i class="fa-solid fa-circle-check"></i></div>
            <h4>Quiz Completed Successfully!</h4>
            <p style="margin-bottom: 20px;">We matched your interests. Inspect the compatibility dashboard on the right to view details.</p>
            <button class="btn btn-outline" onclick="resetQuiz()"><i class="fa-solid fa-rotate-left"></i> Retake Quiz</button>
        </div>
    `;
}

function resetQuiz() {
    quizAnswers = [];
    currentQuizIndex = 0;
    quizMatchResult = '';

    // Reset left card
    const cardHTML = `
        <h3 id="quiz-question-title"><i class="fa-solid fa-circle-question"></i> Question 1 of 4</h3>
        <span class="card-tag" id="quiz-progress-badge">Start</span>
    `;
    document.getElementById('quiz-card-container').querySelector('.card-header').innerHTML = cardHTML;

    document.getElementById('quiz-card-container').innerHTML = `
        <div class="card-header">
            <h3 id="quiz-question-title"><i class="fa-solid fa-circle-question"></i> Question 1 of 4</h3>
            <span class="card-tag" id="quiz-progress-badge">Start</span>
        </div>
        <div class="quiz-question-box" id="quiz-box">
            <h4 id="question-text" style="font-size: 1.25rem; margin-bottom: 20px;">How do you prefer to spend your weekend?</h4>
            <div class="quiz-options" id="quiz-options-container">
                <button class="quiz-option-btn" data-choice="engineering">
                    <span class="option-letter">A</span>
                    <span class="option-txt">Building cool web apps, modding games, or playing with tech.</span>
                </button>
                <button class="quiz-option-btn" data-choice="pharmacy">
                    <span class="option-letter">B</span>
                    <span class="option-txt">Reading about biology, molecular sciences, and compounding formulas.</span>
                </button>
                <button class="quiz-option-btn" data-choice="dental">
                    <span class="option-letter">C</span>
                    <span class="option-txt">Helping others, clinical diagnostics, or analyzing tooth anatomy and smiles.</span>
                </button>
                <button class="quiz-option-btn" data-choice="management">
                    <span class="option-letter">D</span>
                    <span class="option-txt">Pitching startup ideas, analyzing stock trends, or organizing community teams.</span>
                </button>
            </div>
        </div>
    `;

    // Reset right card
    document.getElementById('quiz-result-placeholder').classList.remove('hidden');
    document.getElementById('quiz-result-box').classList.add('hidden');
    
    const progressBadge = document.getElementById('quiz-progress-badge');
    if (progressBadge) {
        progressBadge.textContent = "Start";
        progressBadge.className = "card-tag";
    }
}

function applyQuizMatch() {
    if (!quizMatchResult) return;

    // Switch to Admissions Portal
    switchTab('admissions');

    // Auto-select stream in form
    const select = document.getElementById('student-stream');
    if (select) {
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === quizMatchResult) {
                select.selectedIndex = i;
                break;
            }
        }
    }
}

/* -------------------------------------------------------------
   CAMPUS TOUR INTERACTIVE LANDMARKS
   ------------------------------------------------------------- */
const tourLandmarksData = {
    portal: {
        title: "Main Campus Portal",
        img: "assets/campus_banner.webp",
        desc: "The grand entrance gate of Rungta Group welcomes thousands of aspirants yearly. Featuring sprawling green lawns, administrative wings, and high-security smart access boundaries.",
        highlights: [
            "Wi-Fi enabled administrative spaces.",
            "Student counseling reception counters."
        ]
    },
    life: {
        title: "Student Activity & Sports Hub",
        img: "assets/campus_life.webp",
        desc: "A vibrant playground for extracurricular fests. Features fully equipped gymnasiums, basketball arenas, seminar halls, and spaces for musical performances during VYOM fests.",
        highlights: [
            "Floodlit basketball & badminton courts.",
            "VYOM & Rungta Carnival center stage fests."
        ]
    },
    labs: {
        title: "Advanced Computing & T&P Lab",
        img: "assets/placements_image.webp",
        desc: "A high-tech terminal where students build coding structures, engage in hackathons, and practice mock corporate interviews under T&P Cell mentoring.",
        highlights: [
            "100 Mbps high-speed internet lease lines.",
            "Dedicated placement simulation software tools."
        ]
    },
    library: {
        title: "Central Digital Library",
        img: "assets/campus_banner.webp",
        desc: "A massive learning center providing access to online database repositories, peer-reviewed journals, and a comfortable atmosphere for silent study.",
        highlights: [
            "Access to digital IEEE & Springer libraries.",
            "1,00,000+ volumes of physical reference material."
        ]
    }
};

function setTourLandmark(id) {
    const data = tourLandmarksData[id];
    if (!data) return;

    const img = document.getElementById('tour-img');
    const title = document.getElementById('tour-title');
    const desc = document.getElementById('tour-desc');
    const highlights = document.getElementById('tour-highlights-list');

    // Add cross-fade effect
    img.style.opacity = '0.3';
    
    setTimeout(() => {
        img.src = data.img;
        img.alt = data.title;
        title.textContent = data.title;
        desc.textContent = data.desc;
        
        highlights.innerHTML = data.highlights.map(h => `
            <li><i class="fa-solid fa-circle-check" style="color: var(--accent-indigo-light);"></i> ${h}</li>
        `).join('');

        img.style.opacity = '1';
    }, 200);
}

/* -------------------------------------------------------------
   FEE & ROI CALCULATOR LOGIC
   ------------------------------------------------------------- */
const roiRatesData = {
    engineering: { fee: 80000, duration: 4 },
    pharmacy: { fee: 70000, duration: 4 },
    dental: { fee: 225000, duration: 5 },
    management: { fee: 90000, duration: 2 }
};

function updateROICalculation() {
    const courseSelect = document.getElementById('roi-course-select');
    const range = document.getElementById('roi-salary-range');
    const salaryVal = document.getElementById('roi-salary-val');
    
    if (!courseSelect || !range) return;

    const courseKey = courseSelect.value;
    const salaryLPA = parseFloat(range.value);
    
    // Update labels
    salaryVal.textContent = `${salaryLPA.toFixed(1)} LPA`;

    const data = roiRatesData[courseKey];
    if (!data) return;

    // Set displayed fee
    document.getElementById('roi-yearly-fee').textContent = `₹${data.fee.toLocaleString('en-IN')} / year`;

    // Calculations
    const totalTuition = data.fee * data.duration;
    const totalInvestment = totalTuition + 10000; // adding deposit
    
    const startingSalaryAnnual = salaryLPA * 100000;
    const monthlySalary = startingSalaryAnnual / 12;

    const paybackPeriodMonths = totalInvestment / monthlySalary;
    
    // Renders
    document.getElementById('roi-total-investment').textContent = `₹${totalInvestment.toLocaleString('en-IN')}`;
    
    if (paybackPeriodMonths < 12) {
        document.getElementById('roi-payback-months').textContent = `${paybackPeriodMonths.toFixed(1)} Months`;
    } else {
        const paybackYears = paybackPeriodMonths / 12;
        document.getElementById('roi-payback-months').textContent = `${paybackYears.toFixed(1)} Years`;
    }

    // Breakdown
    document.getElementById('roi-breakdown-tuition').textContent = `₹${totalTuition.toLocaleString('en-IN')}`;
    document.getElementById('roi-breakdown-total').textContent = `₹${totalInvestment.toLocaleString('en-IN')}`;

    // ROI Level grade indicator
    const gradeBadge = document.getElementById('roi-grade');
    if (paybackPeriodMonths <= 6) {
        gradeBadge.textContent = "Outstanding ROI ⚡";
        gradeBadge.style.color = "var(--accent-success)";
        gradeBadge.style.borderColor = "var(--accent-success)";
        gradeBadge.style.backgroundColor = "rgba(16,185,129,0.08)";
    } else if (paybackPeriodMonths <= 12) {
        gradeBadge.textContent = "Excellent ROI ✨";
        gradeBadge.style.color = "var(--accent-indigo-light)";
        gradeBadge.style.borderColor = "var(--accent-indigo-light)";
        gradeBadge.style.backgroundColor = "rgba(99,102,241,0.08)";
    } else if (paybackPeriodMonths <= 24) {
        gradeBadge.textContent = "Good ROI 👍";
        gradeBadge.style.color = "var(--text-primary)";
        gradeBadge.style.borderColor = "var(--border-color)";
        gradeBadge.style.backgroundColor = "var(--border-color)";
    } else {
        gradeBadge.textContent = "Steady Growth 📈";
        gradeBadge.style.color = "var(--accent-amber)";
        gradeBadge.style.borderColor = "var(--accent-amber)";
        gradeBadge.style.backgroundColor = "rgba(245,158,11,0.08)";
    }
}

/* -------------------------------------------------------------
   STUDENT HUB NOTIFICATION DATA & CONTROL
   ------------------------------------------------------------- */
let notificationsData = [
    {
        id: 1,
        category: "exams",
        title: "End Semester Exams Schedule",
        desc: "The timetable for B.Tech / MBA / B.Pharm End Semester exams has been officially uploaded. Exams commence on 10th July 2026. Clear all library dues.",
        time: "2 Hours Ago",
        icon: "fa-solid fa-calendar-days",
        color: "var(--accent-red-light)"
    },
    {
        id: 2,
        category: "placements",
        title: "AWS Campus Recruitment Drive",
        desc: "Amazon Web Services (AWS) is hosting a campus hiring drive for Software Associates. Eligibility: B.Tech CSE / MCA, CGPA > 7.5. Apply by 30th June.",
        time: "1 Day Ago",
        icon: "fa-solid fa-briefcase",
        color: "var(--accent-success)"
    },
    {
        id: 3,
        category: "events",
        title: "VYOM Fest 2026 Registration",
        desc: "VYOM central zone cultural fests are opening soon! Register for Battle of Bands, Hackathon sprints, and dance competitions. Celebrity lineup releases tonight.",
        time: "2 Days Ago",
        icon: "fa-solid fa-guitar",
        color: "var(--accent-red-light)"
    },
    {
        id: 4,
        category: "exams",
        title: "Grievance Redressal Meeting",
        desc: "The Academic Redressal Board meeting is scheduled for Friday at 2:00 PM. Registered student representatives may attend the main council room.",
        time: "4 Days Ago",
        icon: "fa-solid fa-circle-exclamation",
        color: "var(--text-muted)"
    }
];

function renderNotifications() {
    const list = document.getElementById('notifications-list');
    if (!list) return;

    const activeFilter = document.querySelector('.hub-filter-btn.active').getAttribute('data-hub-filter');

    const filtered = notificationsData.filter(item => {
        return activeFilter === 'all' || item.category === activeFilter;
    });

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="status-placeholder" style="padding: 30px 10px; min-height: 150px;">
                <div class="pulse-icon" style="width: 48px; height: 48px; font-size: 1.4rem;"><i class="fa-solid fa-bell-slash"></i></div>
                <h5 style="font-size: 0.95rem; font-weight: 600;">No alerts available</h5>
                <p style="font-size: 0.75rem;">You are all caught up! Use the sandbox tool to mock dispatch new notifications.</p>
            </div>
        `;
        return;
    }

    list.innerHTML = filtered.map(item => `
        <div class="portal-item" style="align-items: flex-start; justify-content: space-between; padding: 14px; border-left: 3px solid ${item.color}; background-color: var(--bg-card); animation: fadeIn 0.3s ease;">
            <div style="display: flex; gap: 14px; align-items: flex-start;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background-color: var(--bg-app); display: flex; align-items: center; justify-content: center; color: ${item.color}; flex-shrink: 0; font-size: 0.95rem;">
                    <i class="${item.icon}"></i>
                </div>
                <div>
                    <h5 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 2px;">${item.title}</h5>
                    <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4; margin-bottom: 6px;">${item.desc}</p>
                    <span style="font-size: 0.65rem; color: var(--text-muted); font-weight: 600;">${item.time} &nbsp;&bull;&nbsp; ${item.category.toUpperCase()}</span>
                </div>
            </div>
            <button onclick="dismissNotification(${item.id})" style="background: none; border: none; color: var(--text-muted); font-size: 0.85rem; cursor: pointer; padding: 2px 6px;" title="Dismiss alert">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `).join('');
}

function dismissNotification(id) {
    notificationsData = notificationsData.filter(item => item.id !== id);
    renderNotifications();
}

function triggerSimulatedAlert(type) {
    let newAlert = {
        id: Date.now(),
        category: type,
        time: "Just Now",
    };

    if (type === 'exams') {
        newAlert.title = "URGENT: Hall Ticket Download";
        newAlert.desc = "Hall tickets for upcoming semester exams are now active. Download before the portal closes. Contact the registrar office for discrepancies.";
        newAlert.icon = "fa-solid fa-address-card";
        newAlert.color = "var(--accent-red-light)";
    } else if (type === 'placements') {
        newAlert.title = "Placement Drive: Cognizant";
        newAlert.desc = "Cognizant GenC onboarding drive registration is open. Expected salary: 4.5 LPA. B.Tech / MCA final year eligible.";
        newAlert.icon = "fa-solid fa-briefcase";
        newAlert.color = "var(--accent-success)";
    } else if (type === 'events') {
        newAlert.title = "VYOM Carnival Concert Pass";
        newAlert.desc = "Concert entry passes are generating today. Log into your Keka student ID under the admissions verification to redeem your free QR pass.";
        newAlert.icon = "fa-solid fa-ticket";
        newAlert.color = "var(--accent-red-light)";
    }

    // Append to beginning of feed
    notificationsData.unshift(newAlert);
    
    // Switch filter to 'All' or matching tab
    const filterButtons = document.querySelectorAll('.hub-filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-hub-filter') === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderNotifications();

    // Trigger visual notification toast in dashboard header
    showNotificationToast(newAlert.title);
}

function showNotificationToast(title) {
    // Create element dynamically
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.backgroundColor = 'var(--letter-bg)';
    toast.style.color = 'var(--text-primary)';
    toast.style.borderLeft = '4px solid var(--accent-red)';
    toast.style.borderRadius = 'var(--radius-sm)';
    toast.style.boxShadow = 'var(--shadow-lg)';
    toast.style.padding = '14px 20px';
    toast.style.zIndex = '999';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '12px';
    toast.style.animation = 'fadeInUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    toast.innerHTML = `
        <span style="color: var(--accent-red); font-size: 1.2rem;"><i class="fa-solid fa-circle-check"></i></span>
        <div>
            <strong style="font-size: 0.85rem; display: block; margin-bottom: 2px;">New Alert Dispatched</strong>
            <span style="font-size: 0.75rem; color: var(--text-secondary);">${title}</span>
        </div>
    `;

    document.body.appendChild(toast);

    // Fade out after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'opacity 0.4s, transform 0.4s';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 400);
    }, 4000);
}

/* -------------------------------------------------------------
   HERO BANNER BACKGROUND SLIDESHOW ROTATION
   ------------------------------------------------------------- */
function startHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        slides[currentIndex].style.opacity = '0';
        
        currentIndex = (currentIndex + 1) % slides.length;
        
        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.opacity = '1';
    }, 5000);
}
