/* =====================================================
   Samyak Computer Classes – script.js
   -----------------------------------------------------
   HOW TO EDIT
   1. CONFIG      : phone number, e-mail, stats, sample-badge switch
   2. BRANCHES    : the 4 branch addresses and map search text
   3. COURSES, INTERNSHIPS, TRAINERS, PLACEMENTS,
      REVIEWS, AWARDS : content shown on the site
   NOTE: TRAINERS, PLACEMENTS, REVIEWS, AWARDS and the stats are
   SAMPLE data. Replace them with real, verifiable information
   before going live, then set showSampleBadges to false.
   ===================================================== */
(function () {
  'use strict';

  /* ---------- 1. CONFIG ---------- */
  const CONFIG = {
    whatsappNumber: '919876543210',          // country code + number, no "+" or spaces
    phoneDisplay: '+91 88864 74957',
    email: 'info@samyakcomputerclasses.com', // change to your real e-mail
    showSampleBadges: true,                  // set to false once real data is added
    stats: [
      { icon: 'fa-location-dot', value: 4, suffix: '', label: 'Branches in Indore' },
      { icon: 'fa-book-open', value: 13, suffix: '', label: 'Career-focused courses' },
      { icon: 'fa-users', value: 5000, suffix: '+', label: 'Students trained (edit)' },
      { icon: 'fa-handshake', value: 100, suffix: '+', label: 'Hiring partners (edit)' }
    ]
  };

  /* ---------- 2. BRANCHES ---------- */
  const BRANCHES = [
    { short: 'Vijay Nagar', name: 'Vijay Nagar Branch', address: 'Above Apna Sweets, Vijay Nagar, Indore', query: 'Apna Sweets, Vijay Nagar, Indore', g: ['#4f46e5', '#8b5cf6'] },
    { short: 'Geeta Bhawan', name: 'Geeta Bhawan Branch', address: '3rd Floor, Tulsi Tower, Geeta Bhawan, Indore', query: 'Tulsi Tower, Geeta Bhawan, Indore', g: ['#ff4d8d', '#ffb020'] },
    { short: 'Bhawarkua', name: 'Bhawarkua Branch', address: 'Veda Complex, Bhawarkua, Indore', query: 'Veda Complex, Bhawarkua, Indore', g: ['#00b4ff', '#4f46e5'] },
    { short: 'Annapurna Mandir', name: 'Annapurna Mandir Branch', address: 'Near Annapurna Mandir, Indore', query: 'Annapurna Mandir, Indore', g: ['#14c9a2', '#0891b2'] }
  ];

  /* ---------- 3. CONTENT ---------- */
  const COURSES = [
    { title: 'Data Science', cat: 'technical', icon: 'fa-brain', dur: '6 months', level: 'Intermediate', desc: 'Learn Python, statistics and machine learning to turn raw data into useful predictions.', topics: ['Python', 'Statistics', 'Pandas', 'Machine Learning', 'Projects'], g: ['#7c3aed', '#c026d3'] },
    { title: 'Data Analytics', cat: 'technical', icon: 'fa-chart-pie', dur: '4 months', level: 'Beginner friendly', desc: 'Clean, analyse and present data with Excel, SQL and Power BI dashboards.', topics: ['Excel', 'SQL', 'Power BI', 'Python basics', 'Dashboards'], g: ['#0891b2', '#4f46e5'] },
    { title: 'Cloud Computing', cat: 'technical', icon: 'fa-cloud', dur: '4 months', level: 'Intermediate', desc: 'Understand servers, storage and networking on leading cloud platforms with lab practice.', topics: ['Linux', 'Networking', 'AWS / Azure basics', 'Virtualization', 'DevOps intro'], g: ['#00b4ff', '#4f46e5'] },
    { title: 'Cyber Security', cat: 'technical', icon: 'fa-shield-halved', dur: '5 months', level: 'Intermediate', desc: 'Learn how to protect systems, networks and data from common security threats.', topics: ['Network security', 'Threat analysis', 'Firewalls', 'SOC basics', 'Security tools'], g: ['#059669', '#0891b2'] },
    { title: 'Ethical Hacking', cat: 'technical', icon: 'fa-user-secret', dur: '5 months', level: 'Intermediate', desc: 'Practise penetration testing in safe lab setups. Taught only for lawful, authorised security work.', topics: ['Kali Linux', 'Pen testing', 'Web vulnerabilities', 'Lab practice', 'Reporting'], g: ['#1e293b', '#7c3aed'] },
    { title: 'Web Development', cat: 'technical', icon: 'fa-code', dur: '4 months', level: 'Beginner friendly', desc: 'Build modern, responsive websites from scratch using HTML, CSS and JavaScript.', topics: ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'Git'], g: ['#f97316', '#ff4d8d'] },
    { title: 'MERN Stack', cat: 'technical', icon: 'fa-layer-group', dur: '6 months', level: 'Intermediate', desc: 'Become a full-stack developer with MongoDB, Express, React and Node.js.', topics: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs'], g: ['#16a34a', '#0891b2'] },
    { title: 'Basic Computer', cat: 'non-technical', icon: 'fa-desktop', dur: '2 months', level: 'Beginner', desc: 'Start from zero: learn to use a computer, type, browse the internet and send email confidently.', topics: ['Windows', 'Typing', 'Internet & email', 'MS Word basics', 'Digital payments'], g: ['#4f46e5', '#8b5cf6'] },
    { title: 'Advanced MS Office', cat: 'non-technical', icon: 'fa-file-word', dur: '3 months', level: 'Beginner to intermediate', desc: 'Create professional documents, presentations and reports with the full MS Office suite.', topics: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Mail merge'], g: ['#2563eb', '#4f46e5'] },
    { title: 'Advanced Excel', cat: 'non-technical', icon: 'fa-file-excel', dur: '2 months', level: 'Intermediate', desc: 'Master formulas, pivot tables, dashboards and MIS reporting used in everyday office work.', topics: ['Formulas', 'Pivot tables', 'Charts', 'Dashboards', 'Macros intro'], g: ['#16a34a', '#84cc16'] },
    { title: 'Tally with GST', cat: 'non-technical', icon: 'fa-calculator', dur: '3 months', level: 'Beginner friendly', desc: 'Learn accounting entries, GST, inventory and payroll with Tally Prime.', topics: ['Accounting basics', 'Vouchers', 'GST', 'Inventory', 'Payroll'], g: ['#ffb020', '#f97316'] },
    { title: 'Graphic Designing', cat: 'non-technical', icon: 'fa-palette', dur: '4 months', level: 'Beginner friendly', desc: 'Design logos, posters and social media creatives with industry-standard tools.', topics: ['Photoshop', 'Illustrator', 'CorelDRAW', 'Canva', 'Branding'], g: ['#ff4d8d', '#8b5cf6'] },
    { title: 'Digital Marketing', cat: 'non-technical', icon: 'fa-bullhorn', dur: '4 months', level: 'Beginner friendly', desc: 'Grow a business online with SEO, social media, content and paid ads.', topics: ['SEO', 'Social media', 'Google Ads', 'Meta Ads', 'Analytics'], g: ['#ff4d8d', '#ffb020'] }
  ];

  const INTERNSHIPS = [
    { title: 'Web Development Intern', course: 'Web Development', icon: 'fa-code', dur: '1–3 months', mode: 'Classroom', desc: 'Build and update real web pages under a mentor’s guidance.', g: ['#f97316', '#ff4d8d'] },
    { title: 'MERN Stack Intern', course: 'MERN Stack', icon: 'fa-layer-group', dur: '2–3 months', mode: 'Classroom', desc: 'Work on full-stack features with React, Node.js and MongoDB.', g: ['#16a34a', '#0891b2'] },
    { title: 'Data Analytics Intern', course: 'Data Analytics', icon: 'fa-chart-pie', dur: '1–3 months', mode: 'Classroom', desc: 'Clean datasets and build dashboards using Excel, SQL and Power BI.', g: ['#0891b2', '#4f46e5'] },
    { title: 'Data Science Intern', course: 'Data Science', icon: 'fa-brain', dur: '2–3 months', mode: 'Classroom', desc: 'Train and evaluate simple machine learning models on practice datasets.', g: ['#7c3aed', '#c026d3'] },
    { title: 'Cyber Security Intern', course: 'Cyber Security', icon: 'fa-shield-halved', dur: '1–3 months', mode: 'Classroom', desc: 'Practise security monitoring and hardening in a controlled lab.', g: ['#059669', '#0891b2'] },
    { title: 'Cloud Computing Intern', course: 'Cloud Computing', icon: 'fa-cloud', dur: '1–3 months', mode: 'Classroom', desc: 'Set up and manage virtual servers and storage on cloud platforms.', g: ['#00b4ff', '#4f46e5'] },
    { title: 'Graphic Design Intern', course: 'Graphic Designing', icon: 'fa-pen-nib', dur: '1–3 months', mode: 'Classroom', desc: 'Create posters, banners and social media designs for live briefs.', g: ['#ff4d8d', '#8b5cf6'] },
    { title: 'Digital Marketing Intern', course: 'Digital Marketing', icon: 'fa-bullhorn', dur: '1–3 months', mode: 'Classroom', desc: 'Plan content, run small campaigns and read analytics reports.', g: ['#ff4d8d', '#ffb020'] },
    { title: 'Accounts and Tally Intern', course: 'Tally with GST', icon: 'fa-calculator', dur: '1–3 months', mode: 'Classroom', desc: 'Practise voucher entry, GST filing basics and reconciliation.', g: ['#ffb020', '#f97316'] },
    { title: 'Excel and MIS Intern', course: 'Advanced Excel', icon: 'fa-file-excel', dur: '1–2 months', mode: 'Classroom', desc: 'Prepare MIS reports and automate routine sheets for practice projects.', g: ['#16a34a', '#84cc16'] }
  ];

  // SAMPLE DATA: replace names, photos and details with real trainers.
  // To show a real photo, put the image path in "photo", e.g. photo: 'images/rakesh.jpg'
  const TRAINERS = [
    { name: 'Rakesh Verma', role: 'Data Science and ML', exp: '10 years', bio: 'Python, statistics and machine learning with real datasets.', photo: '', g: ['#7c3aed', '#c026d3'] },
    { name: 'Neha Joshi', role: 'Data Analytics', exp: '8 years', bio: 'Excel, SQL and Power BI reporting for business teams.', photo: '', g: ['#0891b2', '#4f46e5'] },
    { name: 'Amit Patidar', role: 'Cloud Computing', exp: '9 years', bio: 'Linux, networking and cloud fundamentals with live labs.', photo: '', g: ['#00b4ff', '#4f46e5'] },
    { name: 'Sandeep Chouhan', role: 'Cyber Security', exp: '7 years', bio: 'Network defence, threat analysis and security tooling.', photo: '', g: ['#059669', '#0891b2'] },
    { name: 'Pooja Mishra', role: 'Web Development', exp: '6 years', bio: 'Clean, responsive front-end development and Git workflow.', photo: '', g: ['#f97316', '#ff4d8d'] },
    { name: 'Vikas Rathore', role: 'MERN Stack', exp: '8 years', bio: 'Full-stack apps with React, Node.js and MongoDB.', photo: '', g: ['#16a34a', '#0891b2'] },
    { name: 'Anjali Tiwari', role: 'MS Office and Excel', exp: '9 years', bio: 'Office productivity, formulas, pivots and dashboards.', photo: '', g: ['#2563eb', '#4f46e5'] },
    { name: 'Deepak Jain', role: 'Tally and GST', exp: '12 years', bio: 'Practical accounting, GST returns and inventory in Tally.', photo: '', g: ['#ffb020', '#f97316'] },
    { name: 'Kritika Solanki', role: 'Graphic Designing', exp: '7 years', bio: 'Branding, layout and Adobe tools for print and social.', photo: '', g: ['#ff4d8d', '#8b5cf6'] },
    { name: 'Rohit Malviya', role: 'Digital Marketing', exp: '6 years', bio: 'SEO, social media and paid campaigns that can be measured.', photo: '', g: ['#ff4d8d', '#ffb020'] }
  ];

  // SAMPLE DATA: company names are fictional. Replace with real, consented placement records only.
  const PLACEMENTS = [
    { name: 'Aarav Sharma', course: 'Web Development', role: 'Junior Web Developer', company: 'PixelForge Technologies', photo: '', g: ['#f97316', '#ff4d8d'] },
    { name: 'Priya Patel', course: 'Data Analytics', role: 'Data Analyst Trainee', company: 'InsightEdge Analytics', photo: '', g: ['#0891b2', '#4f46e5'] },
    { name: 'Rohan Verma', course: 'MERN Stack', role: 'Full Stack Developer', company: 'CodeCraft Solutions', photo: '', g: ['#16a34a', '#0891b2'] },
    { name: 'Sneha Gupta', course: 'Digital Marketing', role: 'SEO Executive', company: 'GrowthNest Media', photo: '', g: ['#ff4d8d', '#ffb020'] },
    { name: 'Mohit Yadav', course: 'Cyber Security', role: 'SOC Analyst Trainee', company: 'SecureNet Systems', photo: '', g: ['#059669', '#0891b2'] },
    { name: 'Kavya Joshi', course: 'Graphic Designing', role: 'Graphic Designer', company: 'BrandBloom Studio', photo: '', g: ['#ff4d8d', '#8b5cf6'] },
    { name: 'Harsh Choudhary', course: 'Cloud Computing', role: 'Cloud Support Associate', company: 'NimbusOne Infotech', photo: '', g: ['#00b4ff', '#4f46e5'] },
    { name: 'Ritika Jain', course: 'Tally with GST', role: 'Accounts Executive', company: 'Metro Trade Associates', photo: '', g: ['#ffb020', '#f97316'] },
    { name: 'Aditya Rathore', course: 'Data Science', role: 'Junior Data Scientist', company: 'DataVista Labs', photo: '', g: ['#7c3aed', '#c026d3'] },
    { name: 'Pooja Solanki', course: 'Advanced Excel', role: 'MIS Executive', company: 'BlueOak Services', photo: '', g: ['#16a34a', '#84cc16'] }
  ];

  const PROCESS = [
    { t: 'Skill training', d: 'Classroom sessions, lab practice and projects.' },
    { t: 'Resume and portfolio', d: 'Build a clear resume and showcase your projects.' },
    { t: 'Mock interviews', d: 'Technical and HR practice with feedback.' },
    { t: 'Hiring connections', d: 'Referrals and walk-in information when openings arise.' },
    { t: 'Career guidance', d: 'Advice on roles, growth and next skills to learn.' }
  ];

  // SAMPLE DATA: replace with genuine, permission-based student reviews.
  const REVIEWS = [
    { name: 'Ankit Sharma', course: 'Web Development', stars: 5, text: 'The trainer explained every concept with live coding. I built my first website in the second month.', g: ['#f97316', '#ff4d8d'] },
    { name: 'Shivani Dubey', course: 'Advanced Excel', stars: 5, text: 'Pivot tables and dashboards finally make sense. It is now part of my daily work at the office.', g: ['#16a34a', '#84cc16'] },
    { name: 'Manish Patel', course: 'MERN Stack', stars: 5, text: 'Project-based learning helped a lot. Doubt sessions were always available after class.', g: ['#16a34a', '#0891b2'] },
    { name: 'Nidhi Agrawal', course: 'Digital Marketing', stars: 4, text: 'Good mix of theory and live campaigns. The SEO practicals were especially useful.', g: ['#ff4d8d', '#ffb020'] },
    { name: 'Rahul Chouhan', course: 'Cyber Security', stars: 5, text: 'The lab setup is excellent. I understood real attacks and how to defend against them.', g: ['#059669', '#0891b2'] },
    { name: 'Tanvi Saxena', course: 'Graphic Designing', stars: 5, text: 'I started with no design background and now I have a portfolio I am proud of.', g: ['#ff4d8d', '#8b5cf6'] },
    { name: 'Gaurav Mishra', course: 'Tally with GST', stars: 5, text: 'GST entries and returns were taught step by step. Very practical and easy to follow.', g: ['#ffb020', '#f97316'] },
    { name: 'Komal Rathi', course: 'Data Analytics', stars: 4, text: 'SQL and Power BI classes were well structured. The mock interviews gave me confidence.', g: ['#0891b2', '#4f46e5'] },
    { name: 'Yash Malviya', course: 'Cloud Computing', stars: 5, text: 'Hands-on labs made cloud concepts simple. The trainer is patient and knowledgeable.', g: ['#00b4ff', '#4f46e5'] },
    { name: 'Sunita Verma', course: 'Basic Computer', stars: 5, text: 'I was afraid of computers, but the staff were kind and taught me at my own pace.', g: ['#4f46e5', '#8b5cf6'] }
  ];

  // SAMPLE DATA: replace with real awards, issuing bodies and years.
  const AWARDS = [
    { title: 'Best IT Training Institute', by: 'Indore Education Forum', year: 2024, icon: 'fa-trophy', g: ['#ffb020', '#f97316'] },
    { title: 'Excellence in Skill Development', by: 'Regional Skill Council', year: 2023, icon: 'fa-medal', g: ['#4f46e5', '#8b5cf6'] },
    { title: 'Best Placement Support', by: 'Career Guidance Association', year: 2023, icon: 'fa-briefcase', g: ['#14c9a2', '#0891b2'] },
    { title: 'Student Choice Award', by: 'Student Voice Survey', year: 2024, icon: 'fa-heart', g: ['#ff4d8d', '#ffb020'] },
    { title: 'Digital Learning Innovation', by: 'EdTech Meet, Madhya Pradesh', year: 2023, icon: 'fa-lightbulb', g: ['#00b4ff', '#4f46e5'] },
    { title: 'Best Practical Curriculum', by: 'Tech Education Review', year: 2024, icon: 'fa-flask', g: ['#7c3aed', '#c026d3'] },
    { title: 'Digital Literacy Champion', by: 'Community Service Trust', year: 2022, icon: 'fa-hands-holding-circle', g: ['#16a34a', '#84cc16'] },
    { title: 'Emerging Institute of the Year', by: 'Indore Business Awards', year: 2022, icon: 'fa-rocket', g: ['#f97316', '#ff4d8d'] },
    { title: 'Women in Tech Initiative', by: 'Women Empowerment Forum', year: 2023, icon: 'fa-venus', g: ['#ff4d8d', '#8b5cf6'] },
    { title: 'Trusted Training Partner', by: 'Local Industry Network', year: 2021, icon: 'fa-certificate', g: ['#059669', '#0891b2'] }
  ];

  const WHY = [
    { icon: 'fa-laptop-code', t: 'Practical, lab-first learning', d: 'Every topic is followed by hands-on practice and mini projects.', g: ['#4f46e5', '#8b5cf6'] },
    { icon: 'fa-chalkboard-user', t: 'Experienced trainers', d: 'Learn from mentors who work with the tools they teach.', g: ['#ff4d8d', '#ffb020'] },
    { icon: 'fa-briefcase', t: 'Placement support', d: 'Resume help, mock interviews and hiring connections.', g: ['#14c9a2', '#0891b2'] },
    { icon: 'fa-clock', t: 'Flexible batches', d: 'Morning, evening and weekend options for students and professionals.', g: ['#00b4ff', '#4f46e5'] },
    { icon: 'fa-user-group', t: 'Small batch sizes', d: 'More attention for every learner and quicker doubt solving.', g: ['#7c3aed', '#c026d3'] },
    { icon: 'fa-certificate', t: 'Course certificate', d: 'Receive an institute certificate on successful completion.', g: ['#ffb020', '#f97316'] }
  ];

  const FAQS = [
    { q: 'Do you offer a free demo class?', a: 'Yes, you can request a demo class at your nearest branch. Use the Enquiry button and our team will confirm the timing on WhatsApp or call.' },
    { q: 'What are the course fees?', a: 'Fees depend on the course, duration and batch. Please contact your nearest branch for the latest fee structure and any installment options. Fees are shared in writing before you enroll.' },
    { q: 'Is placement guaranteed?', a: 'No. We provide placement support, including training, resume building, mock interviews and job referrals, but we cannot guarantee a job. Outcomes depend on your skills, effort and market openings.' },
    { q: 'Who can join these courses?', a: 'Students, graduates, homemakers and working professionals can join. Most courses need no prior experience. Some advanced programs may recommend basic computer knowledge.' },
    { q: 'What are the batch timings?', a: 'Batches usually run in the morning, evening and on weekends. Timings differ by branch, so please confirm with the branch you plan to attend.' },
    { q: 'Is Ethical Hacking legal to learn?', a: 'Yes. We teach ethical hacking only for lawful, authorised security testing and defence, in safe lab environments. Misusing these skills is illegal and against our code of conduct.' },
    { q: 'Will I get a certificate?', a: 'Yes, you receive a course completion certificate from Samyak Computer Classes. It is an institute certificate and not a government or university degree.' }
  ];

  const POLICIES = {
    privacy: {
      title: 'Privacy policy',
      html: `
        <p>Samyak Computer Classes respects your privacy and handles personal data in line with applicable Indian laws, including the Digital Personal Data Protection Act, 2023.</p>
        <h4>What we collect</h4>
        <p>When you submit an enquiry or enrollment form, we collect the details you enter: name, mobile number, email, education status, preferred course, branch and message.</p>
        <h4>How we use it</h4>
        <ul><li>To respond to your enquiry and share course, fee and batch information.</li><li>To process your admission or internship application.</li><li>To contact you about your chosen course.</li></ul>
        <h4>How the form works</h4>
        <p>Our website forms open WhatsApp with your message pre-filled, and you choose whether to send it. The information you send is received by our counsellors on WhatsApp.</p>
        <h4>Your rights</h4>
        <p>You may ask us to correct or delete your personal data, or withdraw your consent at any time, by contacting us on ${CONFIG.phoneDisplay} or ${CONFIG.email}. We do not sell your data.</p>
        <p class="muted"><em>Note for the owner: have this policy reviewed by a legal advisor and update it to match how you actually store and use enquiries.</em></p>`
    },
    terms: {
      title: 'Terms and conditions',
      html: `
        <ul>
          <li>Course details, syllabus, duration and batch timings are indicative and may change. The branch will confirm the latest details before you enroll.</li>
          <li>Admission is confirmed only after you complete registration and pay the applicable fee. A receipt is issued for every payment.</li>
          <li>Certificates are issued by Samyak Computer Classes on completion of the course and required attendance or assessment. They are not a government or university degree unless clearly stated.</li>
          <li>Placement and internship support means guidance, preparation and referrals. It does not guarantee a job, an offer or a salary.</li>
          <li>Students must follow the institute’s code of conduct. Skills learned in Cyber Security and Ethical Hacking must be used only for lawful and authorised purposes.</li>
          <li>Use of lab systems and study material is for learning only. Copying or sharing paid material is not permitted.</li>
          <li>All disputes are subject to the jurisdiction of courts in Indore, Madhya Pradesh.</li>
        </ul>
        <p class="muted"><em>Note for the owner: have these terms reviewed by a legal advisor before publishing.</em></p>`
    },
    refund: {
      title: 'Fee and refund policy',
      html: `
        <ul>
          <li>The complete fee, installment plan and due dates are shared in writing before admission.</li>
          <li>Registration or admission charges, if any, are stated at the time of enrollment.</li>
          <li>Refund eligibility, timelines and any deductions are described in the admission form. Please read them before paying.</li>
          <li>To request a refund or fee change, contact the branch where you enrolled and keep your payment receipt.</li>
        </ul>
        <p><strong>Owner action needed:</strong> <span class="todo">[add your actual refund rules and timelines here]</span>. Consumer protection rules in India expect fees and refund conditions to be clear and disclosed upfront.</p>`
    }
  };

  const MARQUEE = ['Data Science', 'Data Analytics', 'Cloud Computing', 'Cyber Security', 'Ethical Hacking', 'Web Development', 'MERN Stack', 'Basic Computer', 'MS Office', 'Advanced Excel', 'Tally with GST', 'Graphic Designing', 'Digital Marketing'];

  /* ---------- Helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const initials = (name) => name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const grad = (g) => `--g:linear-gradient(135deg,${g[0]},${g[1]});--g1:${g[0]}`;
  const sample = () => '<span class="sample-tag">Sample</span>';
  const stagger = (i, n = 4) => `--d:${((i % n) * 0.08).toFixed(2)}s`;
  const photoOrInitials = (photo, name) => (photo ? `<img src="${esc(photo)}" alt="${esc(name)}" loading="lazy">` : esc(initials(name)));
  const mapSrc = (q) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  const dirLink = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  if (CONFIG.showSampleBadges) document.body.classList.add('show-sample');

  /* ---------- Render: hero stats, marquee, about ---------- */
  function renderStats() {
    $('#stats').innerHTML = CONFIG.stats.map((s) => `
      <div class="stat">
        <i class="fa-solid ${s.icon}"></i>
        <div><strong data-count="${s.value}" data-suffix="${esc(s.suffix)}">0${esc(s.suffix)}</strong><span>${esc(s.label)}</span></div>
      </div>`).join('');
  }

  function renderMarquee() {
    const items = MARQUEE.map((m) => `<span><i class="fa-solid fa-star"></i>${esc(m)}</span>`).join('');
    $('#marquee').innerHTML = items + items; // duplicated for seamless loop
  }

  function renderWhy() {
    $('#why').innerHTML = WHY.map((w, i) => `
      <div class="why-item reveal" style="${grad(w.g)};${stagger(i, 3)}">
        <div class="ic"><i class="fa-solid ${w.icon}"></i></div>
        <h4>${esc(w.t)}</h4><p>${esc(w.d)}</p>
      </div>`).join('');
  }

  /* ---------- Render: courses ---------- */
  function renderCourses() {
    $('#courseGrid').innerHTML = COURSES.map((c, i) => `
      <article class="course reveal" data-cat="${c.cat}" style="${grad(c.g)};${stagger(i, 3)}">
        <div class="course-top">
          <div class="c-icon"><i class="fa-solid ${c.icon}"></i></div>
          <span class="badge ${c.cat === 'technical' ? '' : 'non'}">${c.cat === 'technical' ? 'Technical' : 'Non-technical'}</span>
        </div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.desc)}</p>
        <div class="meta"><span><i class="fa-regular fa-clock"></i>${esc(c.dur)}</span><span><i class="fa-solid fa-signal"></i>${esc(c.level)}</span></div>
        <div class="chips">${c.topics.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        <div class="course-actions">
          <button class="btn btn-primary btn-sm" type="button" data-open-form="enroll" data-course="${esc(c.title)}"><i class="fa-solid fa-user-plus"></i> Enroll now</button>
          <button class="btn btn-outline btn-sm" type="button" data-open-form="enquiry" data-course="${esc(c.title)}"><i class="fa-solid fa-circle-question"></i> Enquire</button>
        </div>
      </article>`).join('');

    $('#courseTabs').addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (!tab) return;
      $$('.tab', e.currentTarget).forEach((t) => t.classList.toggle('active', t === tab));
      const f = tab.dataset.filter;
      $$('.course').forEach((card) => {
        const show = f === 'all' || card.dataset.cat === f;
        card.classList.toggle('hide', !show);
        if (show) card.classList.remove('reveal');
      });
    });
  }

  /* ---------- Render: internships ---------- */
  function renderInternships() {
    $('#internGrid').innerHTML = INTERNSHIPS.map((n, i) => `
      <article class="intern reveal" style="${grad(n.g)};${stagger(i, 3)}">
        <div class="ic"><i class="fa-solid ${n.icon}"></i></div>
        <div class="body">
          <h3>${esc(n.title)}</h3>
          <p>${esc(n.desc)}</p>
          <div class="meta"><span><i class="fa-regular fa-clock"></i>${esc(n.dur)}</span><span><i class="fa-solid fa-building-columns"></i>${esc(n.mode)}</span></div>
          <button class="btn btn-primary btn-sm" type="button" data-open-form="internship" data-subject="${esc(n.title)}" data-course="${esc(n.course)}"><i class="fa-solid fa-paper-plane"></i> Apply now</button>
        </div>
      </article>`).join('');
  }

  /* ---------- Render: trainers ---------- */
  function renderTrainers() {
    $('#trainerGrid').innerHTML = TRAINERS.map((t, i) => `
      <article class="trainer reveal" style="${grad(t.g)};${stagger(i, 4)}">
        ${sample()}
        <div class="avatar-ring"><div class="avatar">${photoOrInitials(t.photo, t.name)}</div></div>
        <h3>${esc(t.name)}</h3>
        <div class="role">${esc(t.role)}</div>
        <div class="exp"><i class="fa-solid fa-award"></i> ${esc(t.exp)} experience</div>
        <p>${esc(t.bio)}</p>
      </article>`).join('');
  }

  /* ---------- Render: placements ---------- */
  function renderPlacements() {
    $('#processList').innerHTML = PROCESS.map((p, i) => `
      <li class="reveal" style="${stagger(i, 5)}"><h4>${esc(p.t)}</h4><p>${esc(p.d)}</p></li>`).join('');

    $('#placeGrid').innerHTML = PLACEMENTS.map((p, i) => `
      <article class="place reveal" style="${grad(p.g)};${stagger(i, 3)}">
        ${sample()}
        <span class="placed-tag"><i class="fa-solid fa-circle-check"></i>Placed</span>
        <div class="avatar-sm">${photoOrInitials(p.photo, p.name)}</div>
        <div>
          <h3>${esc(p.name)}</h3>
          <p class="role">${esc(p.role)}</p>
          <p class="company"><i class="fa-regular fa-building"></i>${esc(p.company)}</p>
          <p class="from">Course: ${esc(p.course)}</p>
        </div>
      </article>`).join('');
  }

  /* ---------- Render: reviews carousel ---------- */
  function renderReviews() {
    const track = $('#reviewTrack');
    track.innerHTML = REVIEWS.map((r) => `
      <article class="review" style="${grad(r.g)}">
        ${sample()}
        <i class="fa-solid fa-quote-right q"></i>
        <div class="stars" aria-label="${r.stars} out of 5 stars">${'<i class="fa-solid fa-star"></i>'.repeat(r.stars)}${'<i class="fa-regular fa-star"></i>'.repeat(5 - r.stars)}</div>
        <p>${esc(r.text)}</p>
        <div class="reviewer"><div class="avatar-sm">${esc(initials(r.name))}</div><div><strong>${esc(r.name)}</strong><small>${esc(r.course)} student</small></div></div>
      </article>`).join('');

    const step = () => {
      const card = $('.review', track);
      return card ? card.getBoundingClientRect().width + 20 : 320;
    };
    const next = () => {
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step(), behavior: 'smooth' });
    };
    const prev = () => {
      const atStart = track.scrollLeft <= 8;
      track.scrollTo({ left: atStart ? track.scrollWidth : track.scrollLeft - step(), behavior: 'smooth' });
    };
    $('#revNext').addEventListener('click', next);
    $('#revPrev').addEventListener('click', prev);

    let timer = null;
    const start = () => { stop(); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(next, 4500); };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    ['mouseenter', 'focusin', 'touchstart'].forEach((ev) => track.addEventListener(ev, stop, { passive: true }));
    ['mouseleave', 'focusout', 'touchend'].forEach((ev) => track.addEventListener(ev, start, { passive: true }));
    start();
  }

  /* ---------- Render: awards ---------- */
  function renderAwards() {
    $('#awardGrid').innerHTML = AWARDS.map((a, i) => `
      <article class="award reveal" style="${grad(a.g)};${stagger(i, 3)}">
        ${sample()}
        <div class="medal"><i class="fa-solid ${a.icon}"></i></div>
        <div><h3>${esc(a.title)}</h3><p>${esc(a.by)}</p><span class="year">${a.year}</span></div>
      </article>`).join('');
  }

  /* ---------- Render: branches + map ---------- */
  let activeBranch = 0;
  function renderBranches() {
    $('#branchList').innerHTML = BRANCHES.map((b, i) => `
      <div class="branch reveal ${i === 0 ? 'active' : ''}" role="button" tabindex="0" data-branch="${i}" style="${grad(b.g)};${stagger(i, 4)}">
        <div class="b-ic"><i class="fa-solid fa-location-dot"></i></div>
        <div>
          <h3>${esc(b.name)}</h3>
          <address>${esc(b.address)}</address>
          <div class="b-links">
            <a href="tel:+${CONFIG.whatsappNumber}"><i class="fa-solid fa-phone"></i> Call</a>
            <a href="${dirLink(b.query)}" target="_blank" rel="noopener"><i class="fa-solid fa-diamond-turn-right"></i> Directions</a>
          </div>
        </div>
      </div>`).join('');

    const selectBranch = (i) => {
      activeBranch = i;
      $$('.branch').forEach((el, idx) => el.classList.toggle('active', idx === i));
      $('#branchMap').src = mapSrc(BRANCHES[i].query);
    };
    $('#branchList').addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const el = e.target.closest('.branch');
      if (el) selectBranch(+el.dataset.branch);
    });
    $('#branchList').addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const el = e.target.closest('.branch');
      if (el) { e.preventDefault(); selectBranch(+el.dataset.branch); }
    });
    $('#branchMap').src = mapSrc(BRANCHES[0].query);
  }

  /* ---------- Render: FAQ, footer ---------- */
  function renderFaq() {
    $('#faqList').innerHTML = FAQS.map((f, i) => `
      <details class="reveal" style="${stagger(i, 3)}" ${i === 0 ? 'open' : ''}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');
  }

  function renderFooter() {
    $('#footCourses').innerHTML = COURSES.slice(0, 7).map((c) => `<li><a href="#courses">${esc(c.title)}</a></li>`).join('');
    $('#footBranches').innerHTML = BRANCHES.map((b) => `<li><a href="#branches"><i class="fa-solid fa-location-dot" style="margin-right:.4rem;color:#ffb020"></i>${esc(b.short)}</a></li>`).join('');
    $('#year').textContent = new Date().getFullYear();
  }

  /* =====================================================
     FORMS  →  WhatsApp
     ===================================================== */
  const FORM_TYPES = {
    enquiry: { label: 'General Enquiry', title: 'Enquiry form', sub: 'Tell us what you are looking for. Your details open in WhatsApp so our counsellor can reply.', btn: 'Send enquiry on WhatsApp' },
    enroll: { label: 'Course Enrollment Request', title: 'Enroll in a course', sub: 'Share your details to reserve your seat. Our team will confirm batch timings and fees.', btn: 'Send enrollment on WhatsApp' },
    internship: { label: 'Internship Application', title: 'Apply for an internship', sub: 'Share your details and our team will contact you about availability.', btn: 'Send application on WhatsApp' },
    contact: { label: 'Website Query', title: 'Send your query', sub: '', btn: 'Send query on WhatsApp' }
  };

  function formTemplate(type) {
    const cfg = FORM_TYPES[type] || FORM_TYPES.enquiry;
    const courseOpts = ['<option value="">Select a course</option>']
      .concat(COURSES.map((c) => `<option value="${esc(c.title)}">${esc(c.title)}</option>`))
      .concat('<option value="Not sure, need guidance">Not sure, need guidance</option>').join('');
    const branchOpts = ['<option value="">Any branch</option>']
      .concat(BRANCHES.map((b) => `<option value="${esc(b.short)}">${esc(b.short)}</option>`)).join('');
    return `
      <div class="form-grid">
        <label class="field"><span><i class="fa-solid fa-user"></i>Full name *</span>
          <input name="name" type="text" autocomplete="name" maxlength="60" placeholder="Your full name"><small class="err"></small></label>
        <label class="field"><span><i class="fa-solid fa-phone"></i>Mobile number *</span>
          <input name="phone" type="tel" inputmode="numeric" autocomplete="tel" maxlength="16" placeholder="10-digit mobile number"><small class="err"></small></label>
        <label class="field"><span><i class="fa-solid fa-envelope"></i>Email (optional)</span>
          <input name="email" type="email" autocomplete="email" maxlength="80" placeholder="you@example.com"><small class="err"></small></label>
        <label class="field"><span><i class="fa-solid fa-user-graduate"></i>You are a</span>
          <select name="status">
            <option value="">Select</option><option>School student</option><option>College student</option><option>Graduate / fresher</option><option>Working professional</option><option>Other</option>
          </select></label>
        <label class="field"><span><i class="fa-solid fa-book-open"></i>Course ${type === 'enroll' ? '*' : ''}</span>
          <select name="course">${courseOpts}</select><small class="err"></small></label>
        <label class="field"><span><i class="fa-solid fa-location-dot"></i>Preferred branch</span>
          <select name="branch">${branchOpts}</select></label>
        <label class="field"><span><i class="fa-solid fa-chalkboard"></i>Preferred mode</span>
          <select name="mode"><option value="">Select</option><option>Classroom</option><option>Online</option><option>Either is fine</option></select></label>
        <label class="field"><span><i class="fa-regular fa-clock"></i>Preferred batch</span>
          <select name="batch"><option value="">Select</option><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Weekend</option></select></label>
        <label class="field full"><span><i class="fa-solid fa-message"></i>Your message</span>
          <textarea name="message" maxlength="400" rows="3" placeholder="Ask about fees, syllabus, demo class, timings…"></textarea></label>
        <div class="field full consent-field">
          <label class="consent"><input type="checkbox" name="consent">
            <span>I agree to be contacted by Samyak Computer Classes on call or WhatsApp about my enquiry and I have read the <button type="button" data-policy="privacy">privacy policy</button>. *</span></label>
          <small class="err"></small>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-wa btn-lg" type="submit"><i class="fa-brands fa-whatsapp"></i> ${esc(cfg.btn)}</button>
        <p class="form-note"><i class="fa-solid fa-lock"></i> Your details are used only to respond to your request.</p>
      </div>`;
  }

  function setError(field, msg) {
    field.classList.add('invalid');
    const el = $('.err', field);
    if (el) el.textContent = msg;
  }

  function normalisePhone(v) {
    let d = String(v).replace(/\D/g, '');
    if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
    if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
    return d;
  }

  function validate(form) {
    $$('.field', form).forEach((f) => { f.classList.remove('invalid'); const e = $('.err', f); if (e) e.textContent = ''; });
    const f = form.elements;
    const type = form.dataset.type;
    let firstBad = null;
    const fail = (input, msg) => { setError(input.closest('.field'), msg); if (!firstBad) firstBad = input; };

    if (f.name.value.trim().length < 2) fail(f.name, 'Please enter your full name.');
    if (!/^[6-9]\d{9}$/.test(normalisePhone(f.phone.value))) fail(f.phone, 'Enter a valid 10-digit Indian mobile number.');
    if (f.email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim())) fail(f.email, 'Enter a valid email address.');
    if (type === 'enroll' && !f.course.value) fail(f.course, 'Please select a course.');
    if (!f.consent.checked) fail(f.consent, 'Please tick the consent box to continue.');

    if (firstBad) { firstBad.focus(); return false; }
    return true;
  }

  function buildMessage(form) {
    const f = form.elements;
    const type = form.dataset.type || 'enquiry';
    const cfg = FORM_TYPES[type] || FORM_TYPES.enquiry;
    const subject = form.dataset.subject;
    const clean = (v) => String(v).replace(/\s+/g, ' ').trim();
    const rows = [
      ['Name', clean(f.name.value)],
      ['Mobile', normalisePhone(f.phone.value)],
      ['Email', clean(f.email.value)],
      ['Status', f.status.value],
      subject ? ['Internship', subject] : null,
      ['Course', f.course.value],
      ['Branch', f.branch.value],
      ['Mode', f.mode.value],
      ['Batch', f.batch.value],
      ['Message', clean(f.message.value)]
    ].filter((r) => r && r[1]);

    return [
      `*${cfg.label} – Samyak Computer Classes*`,
      '',
      ...rows.map(([k, v]) => `*${k}:* ${v}`),
      '',
      `_Sent from website on ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}_`
    ].join('\n');
  }

  function sendToWhatsApp(text) {
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    const w = window.open(url, '_blank');
    if (!w) window.location.href = url; // popup blocked: open in same tab
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    sendToWhatsApp(buildMessage(form));
    toast('Opening WhatsApp. Press send to submit your details.');
    const wasModal = form.id === 'modalForm';
    const keep = { type: form.dataset.type };
    form.reset();
    if (wasModal) closeModal($('#formModal'));
    form.dataset.type = keep.type;
  }

  function mountForm(form, type) {
    form.dataset.type = type;
    form.innerHTML = formTemplate(type);
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', (e) => {
      const fld = e.target.closest('.field');
      if (fld) fld.classList.remove('invalid');
    });
    form.addEventListener('change', (e) => {
      const fld = e.target.closest('.field');
      if (fld) fld.classList.remove('invalid');
    });
  }

  /* ---------- Modals ---------- */
  let lastFocus = null;
  const formModal = () => $('#formModal');

  function openModal(m) {
    lastFocus = document.activeElement;
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }
  function closeModal(m) {
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    if (!$('.modal.open')) document.body.classList.remove('no-scroll');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function setModalMap(i) {
    const b = BRANCHES[i];
    $('#modalMap').src = mapSrc(b.query);
    $('#modalDirections').href = dirLink(b.query);
    $$('#modalMapTabs button').forEach((btn, idx) => btn.classList.toggle('active', idx === i));
  }

  function openForm(opts) {
    const type = FORM_TYPES[opts.type] ? opts.type : 'enquiry';
    const cfg = FORM_TYPES[type];
    const form = $('#modalForm');

    // Re-mount so the required-field markers match the form type
    form.innerHTML = formTemplate(type);
    form.dataset.type = type;
    form.dataset.subject = opts.subject || '';

    $('#modalTitle').textContent = opts.subject ? `Apply: ${opts.subject}` : (opts.course && type === 'enroll' ? `Enroll: ${opts.course}` : cfg.title);
    $('#modalSub').textContent = cfg.sub;

    if (opts.course) form.elements.course.value = opts.course;
    form.elements.branch.value = '';
    setModalMap(0);
    openModal(formModal());
    setTimeout(() => form.elements.name.focus(), 320);
  }

  function openPolicy(key) {
    const p = POLICIES[key];
    if (!p) return;
    $('#policyTitle').textContent = p.title;
    $('#policyContent').innerHTML = p.html;
    openModal($('#policyModal'));
  }

  function initModals() {
    // Modal form (mounted once; re-mounted on each open)
    const form = $('#modalForm');
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', (e) => { const f = e.target.closest('.field'); if (f) f.classList.remove('invalid'); });
    form.addEventListener('change', (e) => {
      const f = e.target.closest('.field');
      if (f) f.classList.remove('invalid');
      if (e.target.name === 'branch') {
        const idx = BRANCHES.findIndex((b) => b.short === e.target.value);
        if (idx >= 0) setModalMap(idx);
      }
    });

    $('#modalMapTabs').innerHTML = BRANCHES.map((b, i) => `<button type="button" data-map="${i}">${esc(b.short)}</button>`).join('');
    $('#modalMapTabs').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const i = +btn.dataset.map;
      setModalMap(i);
      form.elements.branch.value = BRANCHES[i].short;
    });

    // Global click delegation
    document.addEventListener('click', (e) => {
      const opener = e.target.closest('[data-open-form]');
      if (opener) {
        e.preventDefault();
        closeMenu();
        openForm({ type: opener.dataset.openForm, course: opener.dataset.course, subject: opener.dataset.subject });
        return;
      }
      const pol = e.target.closest('[data-policy]');
      if (pol) { e.preventDefault(); openPolicy(pol.dataset.policy); return; }
      const closer = e.target.closest('[data-close]');
      if (closer) closeModal(closer.closest('.modal'));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const open = $$('.modal.open').pop();
        if (open) closeModal(open);
        closeMenu();
      }
      // Basic focus trap inside the open modal
      if (e.key === 'Tab') {
        const open = $$('.modal.open').pop();
        if (!open) return;
        const focusable = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', open).filter((el) => el.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast');
    t.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${esc(msg)}</span>`;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 4200);
  }

  /* ---------- Navigation ---------- */
  function closeMenu() {
    $('#navLinks').classList.remove('open');
    $('#hamburger').setAttribute('aria-expanded', 'false');
  }
  function initNav() {
    const burger = $('#hamburger');
    burger.addEventListener('click', () => {
      const open = $('#navLinks').classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('#navLinks a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) closeMenu();
    });

    // Header shadow, back-to-top
    const header = $('#siteHeader');
    const toTop = $('#toTop');
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
      toTop.classList.toggle('show', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Highlight active section link
    const links = $$('#navLinks a');
    const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const link = map.get(en.target.id);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'about', 'courses', 'internships', 'trainers', 'placements', 'reviews', 'awards', 'branches', 'contact']
      .forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
  }

  /* ---------- Animations ---------- */
  function initReveal() {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          el.classList.add('in');
          obs.unobserve(el);
          // Drop the reveal transition afterwards so hover effects stay snappy
          setTimeout(() => el.classList.remove('reveal', 'in'), 1100);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  }

  function initCounters() {
    const animate = (el) => {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1600;
      let t0 = null;
      const step = (ts) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => { if (en.isIntersecting) { animate(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.5 });
    $$('[data-count]').forEach((el) => io.observe(el));
  }

  function initTyped() {
    const el = $('#typed');
    const words = COURSES.map((c) => c.title);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = words[0]; return; }
    let w = 0, c = 0, deleting = false;
    (function tick() {
      const word = words[w];
      el.textContent = word.slice(0, c);
      let delay = deleting ? 40 : 85;
      if (!deleting && c === word.length) { deleting = true; delay = 1500; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
      else { c += deleting ? -1 : 1; }
      setTimeout(tick, delay);
    })();
  }

  /* ---------- Init ---------- */
  function init() {
    renderStats();
    renderMarquee();
    renderWhy();
    renderCourses();
    renderInternships();
    renderTrainers();
    renderPlacements();
    renderReviews();
    renderAwards();
    renderBranches();
    renderFaq();
    renderFooter();

    mountForm($('#contactForm'), 'contact');
    initModals();
    initNav();
    initTyped();
    initReveal();
    initCounters();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
