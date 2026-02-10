/* ============================================
   RESEARCH COMMENT BUBBLES — Engine
   ============================================ */

(function() {
    'use strict';

    // ---- COMMENT DATA PER PAGE ----
    const PAGE_COMMENTS = {

        'dashboard.html': [
            {
                id: 1,
                target: '.dashboard-welcome',
                pos: { top: '12px', right: '180px' },
                title: 'Single Global Identifier (EQ-ID)',
                text: 'Employees currently deal with multiple reference numbers across systems — Easy Share, CSN, party reference — none called the same thing. This single EQ-ID unifies their identity across all plans and products.',
                evidence: [
                    { quote: 'Multiple reference numbers and none of them are called the same thing — it\'s one of my bug bears.', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview', 'Admin FG 21 Jan', 'Admin FG 16 Feb'],
                frequency: 4
            },
            {
                id: 2,
                target: '.eq-card.eq-card--elevated',
                pos: { top: '8px', left: '200px' },
                title: 'Unified Portfolio View',
                text: 'The #1 most requested feature across all admin focus groups. Currently employees must log into separate systems (ESP Portal, EQ Premier, EQ Insight, CSN, EQ ISA) to see their holdings. This single dashboard eliminates that fragmentation.',
                evidence: [
                    { quote: 'Just needs to all be in one space for employees to use and see a clear journey.', source: 'Admin Focus Group, 21 Jan' },
                    { quote: 'One Unified Portal — See all holdings (SIP, SAYE, discretionary, ISA, CSN) in one place.', source: 'Admin FG 16 Feb — Magic Wand wish' }
                ],
                sessions: ['Admin FG 21 Jan', 'Admin FG 16 Feb', 'BT Interview', 'Employee FG'],
                sessionTypes: ['admin', 'admin', 'admin', 'employee'],
                frequency: 6
            },
            {
                id: 3,
                target: '.donut-chart',
                pos: { top: '-10px', right: '20px' },
                flip: 'h',
                title: 'Tax-Free vs Taxable Pie Chart',
                text: 'Visual breakdown of tax-free vs taxable portions was specifically praised by participants who had seen it on the existing Equiniti platform. Helps employees understand their CGT exposure at a glance — especially important now that CGT allowance has reduced to £3,000.',
                evidence: [
                    { quote: 'For normal people, I think we need to educate them a bit better about CGT implications.', source: 'Jay, Admin FG 16 Feb' }
                ],
                sessions: ['Employee FG', 'Admin FG 16 Feb'],
                frequency: 3
            },
            {
                id: 4,
                target: '.action-item--urgent',
                pos: { top: '-6px', right: '-6px' },
                flip: 'h',
                title: 'Prominent Action Prompts',
                text: 'Research found employees miss critical deadlines (enrollment windows, maturity dates, award acceptances) because there\'s no proactive notification. One participant knew a colleague who missed enrollment entirely while on sick leave. Prominent action cards with deadlines prevent this.',
                evidence: [
                    { quote: 'One participant knew a colleague who was on sick leave and missed the enrollment window entirely.', source: 'Employee Focus Group' },
                    { quote: 'Getting people to accept their awards — needs a popup straight away when they log in.', source: 'Admin FG 21 Jan' }
                ],
                sessions: ['Employee FG', 'Admin FG 21 Jan', 'Admin FG 29 Jan'],
                frequency: 4
            },
            {
                id: 5,
                target: '.action-item:last-child',
                pos: { top: '-4px', left: '40px' },
                title: 'Dividend Bank Details Prompt',
                text: 'BT\'s Anna reunited employees with £25,000+ in forgotten dividends sitting unclaimed because no bank details were set up. This prompt nudges users to complete their profile and prevent unclaimed dividends.',
                evidence: [
                    { quote: 'Last year I reunited one person with £25,000, somebody else with £14,000 in unclaimed dividends.', source: 'Anna, BT Interview' },
                    { quote: 'A prompted health check on the portal encouraging dividend mandate setup would help.', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview'],
                frequency: 2
            },
            {
                id: 6,
                target: '.plan-card:first-child',
                pos: { top: '8px', right: '8px' },
                flip: 'h',
                title: 'Plan Cards with Values & Status',
                text: 'Employees often have no idea what shares they own. Anna described sitting with one employee for 45 minutes who had no idea about her holdings. Cards show current value, status, and direct action links for each plan.',
                evidence: [
                    { quote: 'Some people are sitting on balances of 30,000 shares with absolutely no idea that they own them.', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview', 'Admin FG 21 Jan', 'Employee FG'],
                frequency: 4
            },
            {
                id: 7,
                target: '.eq-card:last-child',
                pos: { top: '8px', right: '8px' },
                flip: 'h',
                title: 'Upcoming Dates at a Glance',
                text: 'Employees want advance notice of key dates. The research showed people want 3+ months heads-up before maturity, not just when the window opens. This calendar-style view keeps all deadlines visible.',
                evidence: [
                    { quote: 'Want 3+ months heads-up before maturity, not just when the window opens.', source: 'Employee Focus Group' }
                ],
                sessions: ['Employee FG', 'Admin FG 16 Feb'],
                frequency: 3
            }
        ],

        'maturity-wizard.html': [
            {
                id: 1,
                target: '.wizard-steps',
                pos: { top: '-4px', left: '50%' },
                title: 'Step-by-Step Decision Wizard',
                text: 'Maturity was identified as the single most stressful moment in the share plan journey. A guided wizard breaks the overwhelming decision into manageable steps. Inspired by BT\'s successful "knowledge tree" dropdown-based journey.',
                evidence: [
                    { quote: 'Maturity is the most stressful moment in the share plan journey. Employees feel unprepared to make financial decisions.', source: 'Employee Focus Group' },
                    { quote: 'BT\'s microsite with a knowledge tree decision tool was praised.', source: 'Anna, BT Interview' }
                ],
                sessions: ['Employee FG', 'BT Interview', 'Admin FG 29 Jan', 'Admin FG 16 Feb'],
                frequency: 6
            },
            {
                id: 2,
                target: '.option-card.selected',
                pos: { top: '8px', left: '50%' },
                title: 'Exact After-Tax Amounts',
                text: 'The most critical element: showing employees EXACTLY what they\'ll receive after tax for each option. At Auto Trader, many chose "just return my savings" because they didn\'t understand how to buy shares. Clear numbers prevent this.',
                evidence: [
                    { quote: 'So many people chose "just return my savings" at maturity because they didn\'t understand how to buy shares — they had to lock down the system.', source: 'Admin FG 29 Jan (Auto Trader)' }
                ],
                sessions: ['Admin FG 29 Jan', 'Employee FG', 'Admin FG 16 Feb'],
                frequency: 5
            },
            {
                id: 3,
                target: '.option-card.recommended',
                pos: { top: '8px', right: '8px' },
                flip: 'h',
                title: 'ISA Transfer Recommendation',
                text: 'Research showed a clear shift: BT went from 55% "sell all" pre-pandemic to 33% — more people now use ISA and spouse transfers. Highlighting the ISA option helps employees make tax-efficient choices.',
                evidence: [
                    { quote: 'Shift from 55% sell-all pre-pandemic to 33% now — more using ISA/spouse transfers.', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview', 'Employee FG'],
                frequency: 3
            },
            {
                id: 4,
                target: '.tax-breakdown',
                pos: { top: '60px', left: '-10px' },
                title: 'Real-Time CGT Calculator',
                text: 'With CGT allowance reduced to £3,000, tax calculation is now critical for every employee. The calculator shows gain, allowance used, and tax owed. Praised when BT had this on their microsite.',
                evidence: [
                    { quote: 'For normal people, I think we need to educate them a bit better about CGT implications.', source: 'Jay, Admin FG 16 Feb' },
                    { quote: 'Tax, pensions, and shares are the three areas where people glaze over the minute you start to talk to them about it.', source: 'Anna, BT Interview' }
                ],
                sessions: ['Admin FG 16 Feb', 'BT Interview', 'Employee FG'],
                frequency: 5
            },
            {
                id: 5,
                target: '.sidebar-panel--accent',
                pos: { top: '-4px', right: '8px' },
                flip: 'h',
                title: '"I Need £X" Reverse Calculator',
                text: 'A unique feature from the research: employees often know how much money they need, not how many shares to sell. This reverse calculator answers "how many shares do I sell to get £5,000 after tax?"',
                evidence: [
                    { quote: 'Popup explanations for each option: This means X will happen, it will take Y days.', source: 'Employee Focus Group — Feature Requirements' }
                ],
                sessions: ['Employee FG'],
                frequency: 2
            },
            {
                id: 6,
                target: '.sidebar-panel:last-child',
                pos: { top: '-4px', left: '8px' },
                title: 'Contextual Help & Video Links',
                text: 'Videos appear exactly when they\'re needed — at the decision point. Research unanimously showed short videos are preferred over long PDFs, and should be contextual, not buried in a separate section.',
                evidence: [
                    { quote: 'Nobody wants to sit and necessarily just plow their way through a PowerPoint presentation. They\'d much rather watch a 2-minute video.', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview', 'Employee FG', 'Admin FG 29 Jan'],
                frequency: 4
            }
        ],

        'transaction-tracker.html': [
            {
                id: 1,
                target: '.transaction-header',
                pos: { top: '12px', right: '12px' },
                flip: 'h',
                title: 'Parcel-Tracking Style Design',
                text: 'Multiple admin sessions independently suggested "tracking a parcel" as the ideal model for share transactions. The passport renewal process was also cited — proactive updates at every stage without needing to query.',
                evidence: [
                    { quote: 'Like tracking a parcel — you\'ve put your instruction in, next step is sold on this date, contract note on this date, money on that date.', source: 'Admin Focus Group, 21 Jan' },
                    { quote: 'The journey from start to finish isn\'t very clear. It\'s dotted around. There\'s no timeline.', source: 'Emma, Admin FG 21 Jan' }
                ],
                sessions: ['Admin FG 21 Jan', 'Admin FG 16 Feb'],
                frequency: 4
            },
            {
                id: 2,
                target: '.progress-visual',
                pos: { top: '-4px', left: '200px' },
                title: 'Visual Progress Bar',
                text: 'Sarah from the admin focus group used the passport renewal process as the benchmark — receiving updates at every stage without needing to query anything. This progress bar provides instant visual status.',
                evidence: [
                    { quote: 'Sarah used the passport renewal process as an example — receiving updates at every stage without needing to query anything.', source: 'Admin FG 16 Feb' }
                ],
                sessions: ['Admin FG 16 Feb', 'Admin FG 21 Jan'],
                frequency: 3
            },
            {
                id: 3,
                target: '.timeline-item.active',
                pos: { top: '8px', left: '-12px' },
                title: 'Expected Dates at Each Stage',
                text: 'Transaction confirmation emails currently lack sufficient detail, causing employees to call the helpline just for reassurance. Showing expected dates for each step eliminates this anxiety and reduces support calls.',
                evidence: [
                    { quote: 'Transaction confirmation emails lack sufficient detail, causing employees to contact the helpline for reassurance that their instruction was processed correctly.', source: 'Admin FG 16 Feb' }
                ],
                sessions: ['Admin FG 16 Feb', 'Admin FG 21 Jan'],
                frequency: 3
            },
            {
                id: 4,
                target: '.notif-options',
                pos: { top: '-6px', right: '40px' },
                flip: 'h',
                title: 'Multi-Channel Push Notifications',
                text: 'Research strongly favoured proactive notifications via app, email, and SMS at each transaction stage — modelled on DPD, Amazon, and HMRC passport renewal where you never need to check status manually.',
                evidence: [
                    { quote: 'Push notifications via app/email/SMS at each stage.', source: 'Admin FG 21 Jan — Feature Requirements' }
                ],
                sessions: ['Admin FG 21 Jan', 'Admin FG 16 Feb', 'Employee FG'],
                frequency: 4
            }
        ],

        'education-hub.html': [
            {
                id: 1,
                target: '.learn-hero',
                pos: { top: '30px', left: '30px' },
                title: 'Short-Form Video Hub (2-3 min max)',
                text: 'Unanimously preferred over long PDFs across all sessions. The younger workforce (Gen Z entering) expects TikTok/Instagram-style short content. Nobody reads emails or PowerPoints — but they\'ll watch a 2-minute video.',
                evidence: [
                    { quote: 'Short videos (2-3 minutes) unanimously preferred over long PDFs — TikTok-style content for younger workforce.', source: 'Employee Focus Group' },
                    { quote: 'Nobody wants to sit and necessarily just plow their way through a PowerPoint presentation. They\'d much rather watch a 2-minute video.', source: 'Anna, BT Interview' }
                ],
                sessions: ['Employee FG', 'BT Interview', 'Admin FG 29 Jan'],
                frequency: 5
            },
            {
                id: 2,
                target: '.category-tabs',
                pos: { top: '-6px', left: '300px' },
                title: 'Topic-Based Browsing',
                text: 'Research showed people only seek information when they need it — not proactively. Categories like "Maturity", "Tax", "ISA" allow just-in-time learning at the moment of need.',
                evidence: [
                    { quote: 'Nobody reads an email that gets sent... people will only go and find it when they want it.', source: 'Admin FG 29 Jan' }
                ],
                sessions: ['Admin FG 29 Jan', 'Employee FG'],
                frequency: 3
            },
            {
                id: 3,
                target: '.video-grid',
                pos: { top: '8px', right: '8px' },
                flip: 'h',
                title: 'AI-Generated Video Content',
                text: 'Morgan (from admin sessions) successfully used AI-generated videos for their Share Save invitation and saw positive results. This validates the approach of scaling video content using AI tools.',
                evidence: [
                    { quote: 'AI-generated videos used successfully for Share Save invitation.', source: 'Admin FG — Morgan\'s case study' }
                ],
                sessions: ['Admin FG 29 Jan'],
                frequency: 1
            },
            {
                id: 4,
                target: '.glossary-grid',
                pos: { top: '-6px', left: '200px' },
                title: 'Interactive Glossary — Plain English',
                text: 'Share plan terminology is a major barrier. Participants said people "glaze over" when you mention tax, pensions, or shares. Every term needs a plain English definition with linked videos for deeper learning.',
                evidence: [
                    { quote: 'If you are reading something which is this long, you skip read. But if there\'s someone there, they simplify it.', source: 'Gareth, Employee FG' },
                    { quote: 'Tax, pensions, and shares are the three areas where people glaze over.', source: 'Anna, BT Interview' }
                ],
                sessions: ['Employee FG', 'BT Interview', 'Admin FG 16 Feb'],
                frequency: 4
            }
        ],

        'document-repository.html': [
            {
                id: 1,
                target: '.tax-banner',
                pos: { top: '12px', left: '40px' },
                title: 'HMRC-Ready Tax Pack Download',
                text: 'Every January, there\'s an exponential spike in queries for tax documents — post-vesting statements, base cost, dividend tax records. A one-click tax pack download eliminates the most common helpline queries of the year.',
                evidence: [
                    { quote: 'January queries spike exponentially for tax returns. Common requests: Where\'s my post-vesting statement? What was my base cost?', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview', 'Admin FG 16 Feb'],
                frequency: 4
            },
            {
                id: 2,
                target: '.doc-table',
                pos: { top: '-6px', right: '100px' },
                flip: 'h',
                title: 'Centralized Document Repository',
                text: 'Clients receive daily queries from employees requesting duplicate documents — they go missing in post, or employees can\'t locate them at tax return time. Having everything searchable and downloadable in one place eliminates this.',
                evidence: [
                    { quote: 'Clients receive daily queries from employees requesting duplicate documents.', source: 'Admin FG 16 Feb' },
                    { quote: 'Document library: Ability to access scheme rules and FAQs for each specific plan year.', source: 'Employee Focus Group — Feature Request' }
                ],
                sessions: ['Admin FG 16 Feb', 'BT Interview', 'Employee FG'],
                frequency: 4
            },
            {
                id: 3,
                target: '.doc-filters',
                pos: { top: '-6px', left: '450px' },
                title: 'Filter by Tax Year & Plan',
                text: 'Organized by tax year is critical because HMRC filing requires documents grouped by tax year. Plan-level filtering helps employees with multiple plans (SIP + SAYE + RSU) find exactly what they need.',
                evidence: [
                    { quote: 'All transactions should be online. There shouldn\'t be any form filling or signing.', source: 'Gill, Admin FG 16 Feb' }
                ],
                sessions: ['Admin FG 16 Feb', 'BT Interview'],
                frequency: 3
            }
        ],

        'onboarding.html': [
            {
                id: 1,
                target: '.onboarding-visual',
                pos: { top: '12px', left: '12px' },
                title: 'Guided Dashboard Tour',
                text: 'Admin research recommended onboarding videos when employees log in for the first time. UX best practices show 70% of users drop off after one session if onboarding feels confusing. This guided tour prevents that.',
                evidence: [
                    { quote: 'Onboarding videos — when employees log in for the first time, show them what the portal can do.', source: 'Admin FG 29 Jan' }
                ],
                sessions: ['Admin FG 29 Jan'],
                frequency: 2
            },
            {
                id: 2,
                target: '.checklist',
                pos: { top: '-4px', left: '8px' },
                title: 'Profile Completion Checklist',
                text: 'The checklist ensures employees set up bank details and dividend mandates — the two things that, if missing, lead to unclaimed dividends (£25K+ found at BT) and failed payments. Gamification encourages completion.',
                evidence: [
                    { quote: 'Last year I reunited one person with £25,000, somebody else with £14,000 in unclaimed dividends.', source: 'Anna, BT Interview' },
                    { quote: 'A prompted health check on the portal encouraging dividend mandate setup would help.', source: 'Anna, BT Interview' }
                ],
                sessions: ['BT Interview', 'Admin FG 21 Jan'],
                frequency: 3
            },
            {
                id: 3,
                target: '.reward-banner',
                pos: { top: '-4px', right: '8px' },
                flip: 'h',
                title: 'Gamification Elements',
                text: 'Engagement on discretionary plans is only ~30%. Financial wellness apps (Origin, Enrich, FinFit) use gamification to drive engagement — points, badges, leaderboards. Applied here to encourage profile completion.',
                evidence: [
                    { quote: '30% engagement on discretionary plans.', source: 'Research Overview — Engagement Data' }
                ],
                sessions: ['Employee FG', 'Competitor Analysis'],
                sessionTypes: ['employee', 'competitor'],
                frequency: 2
            }
        ]
    };

    // ---- ENGINE ----
    let commentsVisible = true;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const comments = PAGE_COMMENTS[currentPage];

    if (!comments || comments.length === 0) return;

    // Inject toggle bar
    const toggleBar = document.createElement('div');
    toggleBar.className = 'comments-toggle-bar';
    toggleBar.innerHTML = `
        <span class="comments-toggle-bar__label">Research Notes</span>
        <span class="comments-toggle-bar__count">${comments.length}</span>
        <button class="comments-toggle active" id="commentsToggle" title="Toggle research comments"></button>
    `;
    document.body.appendChild(toggleBar);

    document.getElementById('commentsToggle').addEventListener('click', function() {
        commentsVisible = !commentsVisible;
        this.classList.toggle('active', commentsVisible);
        document.querySelectorAll('.comment-pin').forEach(pin => {
            pin.classList.toggle('hidden', !commentsVisible);
        });
    });

    // Create comment pins
    function createPin(comment) {
        const target = document.querySelector(comment.target);
        if (!target) return;

        // Make target position:relative if not already
        const cs = getComputedStyle(target);
        if (cs.position === 'static') {
            target.style.position = 'relative';
        }

        const pin = document.createElement('div');
        pin.className = 'comment-pin' + (comment.flip === 'h' ? ' flip-h' : '') + (comment.flip === 'v' ? ' flip-v' : '');
        pin.style.position = 'absolute';
        if (comment.pos.top) pin.style.top = comment.pos.top;
        if (comment.pos.bottom) pin.style.bottom = comment.pos.bottom;
        if (comment.pos.left) pin.style.left = comment.pos.left;
        if (comment.pos.right) pin.style.right = comment.pos.right;
        pin.style.zIndex = '1000';

        // Frequency dots
        let freqDots = '';
        for (let i = 0; i < 6; i++) {
            freqDots += `<div class="comment-panel__freq-dot${i < comment.frequency ? ' filled' : ''}"></div>`;
        }

        // Evidence quotes
        let evidenceHtml = '';
        if (comment.evidence && comment.evidence.length > 0) {
            evidenceHtml = comment.evidence.map(e =>
                `<div class="comment-panel__quote">"${e.quote}"<span class="comment-panel__quote-source">— ${e.source}</span></div>`
            ).join('');
        }

        // Session tags
        let sessionsHtml = '';
        if (comment.sessions) {
            sessionsHtml = comment.sessions.map((s, i) => {
                let cls = 'comment-panel__session-tag';
                if (s.includes('Employee') || s.includes('BT')) cls += ' comment-panel__session-tag--employee';
                else if (s.includes('Competitor')) cls += ' comment-panel__session-tag--competitor';
                return `<span class="${cls}">${s}</span>`;
            }).join('');
        }

        pin.innerHTML = `
            <div class="comment-pin__dot">${comment.id}</div>
            <div class="comment-panel">
                <div class="comment-panel__header">
                    <div class="comment-panel__header-left">
                        <div class="comment-panel__avatar">UX</div>
                        <div>
                            <div class="comment-panel__author">UX Research</div>
                            <div class="comment-panel__role">Research Insight</div>
                        </div>
                    </div>
                    <button class="comment-panel__close" onclick="event.stopPropagation(); this.closest('.comment-pin').classList.remove('open');">✕</button>
                </div>
                <div class="comment-panel__body">
                    <div class="comment-panel__title">${comment.title}</div>
                    <div class="comment-panel__text">${comment.text}</div>
                    ${evidenceHtml ? `
                    <div class="comment-panel__evidence">
                        <div class="comment-panel__evidence-title">Research Evidence</div>
                        ${evidenceHtml}
                    </div>` : ''}
                    <div class="comment-panel__sessions">
                        ${sessionsHtml}
                    </div>
                    <div class="comment-panel__frequency">
                        <div class="comment-panel__freq-bar">${freqDots}</div>
                        <div class="comment-panel__freq-label">Mentioned in <strong>${comment.frequency} of 6</strong> sessions</div>
                    </div>
                </div>
            </div>
        `;

        // Toggle open/close
        pin.querySelector('.comment-pin__dot').addEventListener('click', function(e) {
            e.stopPropagation();
            // Close all others
            document.querySelectorAll('.comment-pin.open').forEach(p => {
                if (p !== pin) p.classList.remove('open');
            });
            pin.classList.toggle('open');
        });

        target.appendChild(pin);
    }

    // Close panels when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.comment-pin')) {
            document.querySelectorAll('.comment-pin.open').forEach(p => p.classList.remove('open'));
        }
    });

    // Init after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        comments.forEach(createPin);
    }

})();
