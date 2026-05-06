export default function SWSVisualPrototype() {
    return (
        <main className="sws-proto-page">

            {/* ========================================================
          SECTION 1 — HERO
          ======================================================== */}
            <section className="sws-proto-hero">
                <div className="sws-proto-container">
                    <div className="sws-proto-hero-grid">

                        {/* Left: Message */}
                        <div className="sws-proto-hero-left">
                            <div className="sws-proto-hero-pill">Smart Websites</div>
                            <h1 className="sws-proto-hero-headline">
                                Enquiries Arrive.<br />
                                <span>Nobody Picks</span><br />
                                Them Up.
                            </h1>
                            <p className="sws-proto-hero-desc">
                                Somebody finds your business online. Ready to talk. They fill in a form.
                                That message goes to an email nobody checks until the end of the day.
                                They have already rung someone else.
                            </p>
                            <div className="sws-proto-loss-chips">
                                <span className="sws-proto-loss-chip">Lost leads</span>
                                <span className="sws-proto-loss-chip">No follow-up</span>
                                <span className="sws-proto-loss-chip">No tracking</span>
                            </div>
                            <a href="/contact" className="sws-proto-hero-btn">Start a Conversation</a>
                        </div>

                        {/* Right: Live Feed */}
                        <div className="sws-proto-feed-panel">
                            <div className="sws-proto-feed-header">
                                <span className="sws-proto-feed-live-dot"></span>
                                <span className="sws-proto-feed-title">Live enquiry feed</span>
                                <span className="sws-proto-feed-subtitle">Last 24 hours · auto-routed</span>
                            </div>
                            <div className="sws-proto-feed-rows">
                                <div className="sws-proto-feed-row">
                                    <span className="sws-proto-feed-row-label">Roof repair · Mark T.</span>
                                    <span className="sws-proto-feed-status sws-proto-feed-status--assigned">Assigned</span>
                                </div>
                                <div className="sws-proto-feed-row">
                                    <span className="sws-proto-feed-row-label">Quote request · Sara P.</span>
                                    <span className="sws-proto-feed-status sws-proto-feed-status--followup">Follow-up</span>
                                </div>
                                <div className="sws-proto-feed-row">
                                    <span className="sws-proto-feed-row-label">Booking · Lina R.</span>
                                    <span className="sws-proto-feed-status sws-proto-feed-status--confirmed">Confirmed</span>
                                </div>
                                <div className="sws-proto-feed-row">
                                    <span className="sws-proto-feed-row-label">Old enquiry · Tom W.</span>
                                    <span className="sws-proto-feed-status sws-proto-feed-status--lost">Lost</span>
                                </div>
                            </div>
                            <div className="sws-proto-feed-footer">
                                <span>auto-assigned · CRM logged</span>
                                <span>uptime 99.98%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 2 — JOURNEY LEAK MAP
          ======================================================== */}
            <section className="sws-proto-section sws-proto-leak-map">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">Where It Breaks</span>
                        <h2 className="sws-proto-heading">Where enquiries leak out of your business</h2>
                        <p className="sws-proto-subtext">
                            Five points where leads disappear — before your team ever has a chance to respond.
                        </p>
                    </div>

                    {/* Journey Spine */}
                    <div className="sws-proto-journey-stages">
                        <div className="sws-proto-stage">
                            <div className="sws-proto-stage-marker">1</div>
                            <span className="sws-proto-stage-label">Discovery</span>
                        </div>
                        <div className="sws-proto-stage">
                            <div className="sws-proto-stage-marker">2</div>
                            <span className="sws-proto-stage-label">Capture</span>
                        </div>
                        <div className="sws-proto-stage sws-proto-stage--active">
                            <div className="sws-proto-stage-marker">3</div>
                            <span className="sws-proto-stage-label">Response</span>
                        </div>
                        <div className="sws-proto-stage">
                            <div className="sws-proto-stage-marker">4</div>
                            <span className="sws-proto-stage-label">Follow-up</span>
                        </div>
                        <div className="sws-proto-stage">
                            <div className="sws-proto-stage-marker">5</div>
                            <span className="sws-proto-stage-label">Visibility</span>
                        </div>
                    </div>

                    {/* Primary Leak */}
                    <div className="sws-proto-leak-primary">
                        <div className="sws-proto-leak-primary-stage">Response</div>
                        <h3 className="sws-proto-leak-primary-title">Hours pass before anyone replies</h3>
                        <p className="sws-proto-leak-primary-body">
                            A form lands in a shared inbox. Nobody owns it. Whoever checks it that day replies — if they remember.
                            By then the caller has already rung someone else.
                        </p>
                        <p className="sws-proto-leak-primary-body" style={undefined}>
                            The business that responds first usually gets the work. A slow reply does not lose the enquiry in your
                            mind — it was already gone before you noticed.
                        </p>
                        <div className="sws-proto-leak-handled">
                            <div className="sws-proto-leak-handled-label">How it is handled</div>
                            <p className="sws-proto-leak-handled-text">
                                An automated confirmation goes out immediately. The enquiry is logged with a notification to the right
                                person. Your team picks it up in minutes, not hours.
                            </p>
                        </div>
                    </div>

                    {/* Secondary Leaks */}
                    <div className="sws-proto-leaks-secondary">
                        <div className="sws-proto-leak-item">
                            <div className="sws-proto-leak-item-stage">Discovery</div>
                            <h4 className="sws-proto-leak-item-title">They cannot find the one thing they need</h4>
                            <p className="sws-proto-leak-item-body">
                                All services grouped under one heading. Most visitors do not sift through everything else.
                            </p>
                            <p className="sws-proto-leak-item-handled">
                                Each service has its own page, written the way people search for it.
                            </p>
                        </div>
                        <div className="sws-proto-leak-item">
                            <div className="sws-proto-leak-item-stage">Capture</div>
                            <h4 className="sws-proto-leak-item-title">The message goes to the wrong place</h4>
                            <p className="sws-proto-leak-item-body">
                                Forms feed into a shared email. On mobile, buttons break. Enquiries pile up unread.
                            </p>
                            <p className="sws-proto-leak-item-handled">
                                Enquiry routes directly to the right person with name, number, and service attached.
                            </p>
                        </div>
                        <div className="sws-proto-leak-item">
                            <div className="sws-proto-leak-item-stage">Follow-up</div>
                            <h4 className="sws-proto-leak-item-title">Nobody chases — so the lead goes cold</h4>
                            <p className="sws-proto-leak-item-body">
                                No follow-up sequence. Your team is mid-job. Chasing depends on memory.
                            </p>
                            <p className="sws-proto-leak-item-handled">
                                Follow-up runs automatically until there is a response.
                            </p>
                        </div>
                        <div className="sws-proto-leak-item">
                            <div className="sws-proto-leak-item-stage">Visibility</div>
                            <h4 className="sws-proto-leak-item-title">Marketing spend cannot be measured</h4>
                            <p className="sws-proto-leak-item-body">
                                Ads, social, and directories run separately. Nothing connects a click to an actual enquiry.
                            </p>
                            <p className="sws-proto-leak-item-handled">
                                Tracking shows where each enquiry came from. Channels that produce real work are visible.
                            </p>
                        </div>
                    </div>

                    <div className="sws-proto-leak-summary">
                        These are not design problems. They are handling problems. The fix is not a better-looking website —
                        it is a website that holds what arrives.
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 3 — EXISTENCE VS EARNING COMPARISON
          ======================================================== */}
            <section className="sws-proto-section sws-proto-comparison">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">Broken vs Fixed</span>
                        <h2 className="sws-proto-heading">The difference between a site that exists and one that earns</h2>
                        <p className="sws-proto-subtext">
                            Having something online is not the bar. The question is whether anything happens after someone shows up.
                        </p>
                    </div>

                    <div className="sws-proto-compare-wrap">
                        {/* Today */}
                        <div className="sws-proto-compare-side sws-proto-compare-side--today">
                            <div className="sws-proto-compare-header">
                                <div className="sws-proto-compare-label sws-proto-compare-label--today">Today</div>
                                <h3 className="sws-proto-compare-title">How it runs right now</h3>
                            </div>
                            <div className="sws-proto-compare-groups">
                                {[
                                    ['Discovery', 'Different services crammed onto one page. Someone looking for one specific thing has to dig through everything else first.'],
                                    ['Capture', 'Contact form feeds into an email account. Whoever remembers to check it replies. Could be hours. Could be days.'],
                                    ['Visibility', 'No visibility into who visited, what they looked at, or where they dropped off. Marketing spend is a guess.'],
                                    ['Routing', 'Enquiries live in one place. Customer details in another. When it gets busy, things get missed between the two.'],
                                    ['Upkeep', 'Content has not been touched since launch. Outdated information. Broken links. Nobody is checking.'],
                                ].map(([label, text]) => (
                                    <div key={label} className="sws-proto-compare-group">
                                        <div className="sws-proto-compare-group-label">{label}</div>
                                        <p className="sws-proto-compare-group-text">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="sws-proto-compare-divider">
                            <div className="sws-proto-compare-vs">vs</div>
                        </div>

                        {/* Connected */}
                        <div className="sws-proto-compare-side">
                            <div className="sws-proto-compare-header">
                                <div className="sws-proto-compare-label sws-proto-compare-label--connected">Connected</div>
                                <h3 className="sws-proto-compare-title">How it runs when it is connected</h3>
                            </div>
                            <div className="sws-proto-compare-groups">
                                {[
                                    ['Discovery', 'Each service has its own clear page. Visitors recognise what they need and act faster.'],
                                    ['Capture', 'Enquiries arrive with name, number, and what they are after. The right person picks it up in minutes.'],
                                    ['Visibility', 'You can see where people come from, what they do, and which spend brings real work.'],
                                    ['Routing', 'The form goes straight into your CRM and follow-up starts without anyone copying details by hand.'],
                                    ['Upkeep', 'Backed up. Monitored. Updated. Issues flagged before customers notice them.'],
                                ].map(([label, text]) => (
                                    <div key={label} className="sws-proto-compare-group">
                                        <div className="sws-proto-compare-group-label">{label}</div>
                                        <p className="sws-proto-compare-group-text">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="sws-proto-compare-takeaway">
                        Having something online is not the bar. The question is whether anything happens after someone shows up.
                    </p>
                </div>
            </section>

            {/* ========================================================
          SECTION 4 — SYSTEM HANDOFF BOARD
          ======================================================== */}
            <section className="sws-proto-section sws-proto-handoff">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">Connected Systems</span>
                        <h2 className="sws-proto-heading">What the website hands off — and to what</h2>
                        <p className="sws-proto-subtext">
                            A Smart Website captures the enquiry. What happens after depends on the systems connected to it.
                        </p>
                    </div>

                    <div className="sws-proto-handoff-board">
                        {/* Source Dock */}
                        <div className="sws-proto-source-dock">
                            <div className="sws-proto-dock-entry-label">Entry Point</div>
                            <h3 className="sws-proto-dock-title">Smart Website Systems</h3>
                            <ul className="sws-proto-dock-responsibilities">
                                <li>Service page structure</li>
                                <li>Enquiry capture</li>
                                <li>Form routing</li>
                                <li>Visibility setup</li>
                            </ul>
                            <div className="sws-proto-dock-status-lines">
                                <span className="sws-proto-dock-status-line">Enquiry captured</span>
                                <span className="sws-proto-dock-status-line">Source attached</span>
                                <span className="sws-proto-dock-status-line">Next step visible</span>
                            </div>
                        </div>

                        {/* Receiving Modules */}
                        <div className="sws-proto-receiving-modules">
                            <div className="sws-proto-module">
                                <div className="sws-proto-module-name">AI Lead Handling</div>
                                <div className="sws-proto-module-handoff-label">Handoff</div>
                                <p className="sws-proto-module-handoff-text">
                                    The website captures the enquiry and routes it. AI Lead Handling takes the first response —
                                    confirming receipt, qualifying intent, and keeping the conversation moving before your team picks it up.
                                </p>
                                <div className="sws-proto-module-boundary">
                                    Smart Website Systems owns the capture and routing. AI Lead Handling owns the initial response
                                    and conversation logic that follows.
                                </div>
                            </div>

                            <div className="sws-proto-module">
                                <div className="sws-proto-module-name">CRM Automation</div>
                                <div className="sws-proto-module-handoff-label">Handoff</div>
                                <p className="sws-proto-module-handoff-text">
                                    Every enquiry that enters through the website goes straight into the CRM with name, number,
                                    service, and source attached. CRM Automation owns the workflow, assignment, follow-up sequence,
                                    and reporting from that point.
                                </p>
                                <div className="sws-proto-module-boundary">
                                    Smart Website Systems owns the entry point. CRM Automation owns the pipeline, task management,
                                    and ongoing communication.
                                </div>
                            </div>

                            <div className="sws-proto-module">
                                <div className="sws-proto-module-name">Local SEO Authority</div>
                                <div className="sws-proto-module-handoff-label">Handoff</div>
                                <p className="sws-proto-module-handoff-text">
                                    The service pages built into the Smart Website System give Local SEO Authority a structured
                                    foundation — individual pages, clear service intent, and the content signals that local search depends on.
                                </p>
                                <div className="sws-proto-module-boundary">
                                    Smart Website Systems owns the page structure and on-page content. Local SEO Authority owns the
                                    citation, profile, and authority-building work that makes those pages discoverable.
                                </div>
                            </div>

                            <div className="sws-proto-handoff-note">
                                The Smart Website owns the entry. Every system downstream depends on what it captures.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 5 — OPERATING COVERAGE LEDGER
          ======================================================== */}
            <section className="sws-proto-section sws-proto-coverage">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">What Is Included</span>
                        <h2 className="sws-proto-heading">Everything in scope from day one</h2>
                        <p className="sws-proto-subtext">
                            Not a pick-and-choose list. Every project covers all of this.
                        </p>
                    </div>

                    <div className="sws-proto-coverage-legend">
                        {['Structure', 'Capture', 'Routing', 'Visibility', 'Protection', 'Handover'].map((chip) => (
                            <span key={chip} className="sws-proto-legend-chip">{chip}</span>
                        ))}
                    </div>

                    <div className="sws-proto-coverage-bands">
                        {[
                            {
                                label: 'Structure',
                                purpose: 'What is built as part of the initial project',
                                items: [
                                    'WordPress build shaped around your services and how customers search for them',
                                    'Individual service pages written for the searches people nearby actually make',
                                    'Enquiry forms capturing name, number, and service — routed to the right person',
                                    'Mobile tested and working across phones, tablets, and desktops',
                                ],
                            },
                            {
                                label: 'Capture & Routing',
                                purpose: 'Systems connected during the build',
                                items: [
                                    'CRM or booking tool connected from day one — every lead logged on arrival',
                                    'Automated confirmation sent immediately when an enquiry lands',
                                    'Follow-up sequence running without anyone on your team having to remember',
                                    'Every enquiry path tested end to end before launch',
                                ],
                            },
                            {
                                label: 'Visibility',
                                purpose: 'Tracking and search setup included in the build',
                                items: [
                                    'Tracking showing where visitors come from and what they do',
                                    'Each service page written the way people search for it',
                                    'Clear structure for Google to read and match against service searches',
                                ],
                            },
                            {
                                label: 'Protection',
                                purpose: 'Reliability and security from day one',
                                items: [
                                    'SSL, daily backups, and security monitoring from day one',
                                    'Issues flagged before customers notice them',
                                ],
                            },
                            {
                                label: 'Handover',
                                purpose: 'What you receive at the end of the project',
                                items: [
                                    'Full documentation for content, CRM, and follow-up management',
                                    'Hands-on walkthrough for your team',
                                    'Your team manages content, checks leads, and handles updates independently from there',
                                ],
                            },
                        ].map((band) => (
                            <div key={band.label} className="sws-proto-coverage-band">
                                <div className="sws-proto-band-header">
                                    <div className="sws-proto-band-label-col">
                                        <span className="sws-proto-band-label">{band.label}</span>
                                        <span className="sws-proto-band-purpose">{band.purpose}</span>
                                    </div>
                                    <ul className="sws-proto-band-items">
                                        {band.items.map((item, i) => (
                                            <li key={i} className="sws-proto-band-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="sws-proto-coverage-close">Not a pick-and-choose list. Every project covers all of this.</p>
                </div>
            </section>

            {/* ========================================================
          SECTION 6 — OPERATING ENVIRONMENT ROSTER
          ======================================================== */}
            <section className="sws-proto-section sws-proto-roster">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">Built For</span>
                        <h2 className="sws-proto-heading">Built for businesses where the first contact matters</h2>
                        <p className="sws-proto-subtext">
                            If your work starts when someone calls, books, or fills in a form — that moment has to go right.
                            Everything after depends on it.
                        </p>
                    </div>

                    <div className="sws-proto-roster-rows">
                        {[
                            {
                                num: '01',
                                title: 'Service businesses',
                                enquiryHow: 'Phone calls, contact forms, quote requests',
                                handle: 'Individual service pages, clear contact paths, every enquiry captured and routed to the right person',
                                signals: ['Listed services', 'Direct contact', 'Tracked leads'],
                            },
                            {
                                num: '02',
                                title: 'Appointment-based businesses',
                                enquiryHow: 'Online booking, phone calls, availability checks',
                                handle: 'Booking that shows real availability, automated reminders, no-shows drop without manual chasing',
                                signals: ['Online booking', 'Automated reminders', 'Availability visible'],
                            },
                            {
                                num: '03',
                                title: 'Multi-location businesses',
                                enquiryHow: 'Location-based searches, area-specific contact forms',
                                handle: 'Each location has its own page, own contact path, and own CRM routing so leads do not land in the wrong inbox',
                                signals: ['Location pages', 'Local routing', 'Separate tracking'],
                            },
                            {
                                num: '04',
                                title: 'Single-offer campaigns',
                                enquiryHow: 'Paid traffic, single CTA, direct conversion path',
                                handle: 'One service. One action. One number to track. Built for a specific offer that needs a direct outcome',
                                signals: ['Single offer', 'Clear CTA', 'Tracked result'],
                            },
                        ].map((row) => (
                            <div key={row.num} className="sws-proto-roster-row">
                                <span className="sws-proto-roster-num">{row.num}</span>
                                <div>
                                    <h3 className="sws-proto-roster-title">{row.title}</h3>
                                </div>
                                <div>
                                    <div className="sws-proto-roster-enquiry-label">How enquiries start</div>
                                    <p className="sws-proto-roster-enquiry-text">{row.enquiryHow}</p>
                                    <div className="sws-proto-roster-handle-label">What the site must handle</div>
                                    <p className="sws-proto-roster-handle-text">{row.handle}</p>
                                </div>
                                <div className="sws-proto-roster-signals">
                                    {row.signals.map((s) => (
                                        <span key={s} className="sws-proto-roster-signal">{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 7 — HANDLED ENQUIRY PATH
          ======================================================== */}
            <section className="sws-proto-section sws-proto-path">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">System Layers</span>
                        <h2 className="sws-proto-heading">From visitor to handled enquiry</h2>
                        <p className="sws-proto-subtext">
                            Someone arrives. Sees what they need. Reaches out. Your team has it. Nothing drops between.
                        </p>
                    </div>

                    <div className="sws-proto-path-stages">
                        <div className="sws-proto-path-stage">
                            <span className="sws-proto-path-stage-state">Service found</span>
                            <h3 className="sws-proto-path-stage-title">Someone looking for one thing can find it and act</h3>
                            <p className="sws-proto-path-stage-desc">
                                They land looking for one specific service. It is right there. What it involves, how to reach you.
                                No scrolling through everything else.
                            </p>
                            <ul className="sws-proto-path-proof-points">
                                <li className="sws-proto-path-proof-point">They find what they came for. Not buried under ten other things.</li>
                                <li className="sws-proto-path-proof-point">Clear next step on every service — form, call, or booking.</li>
                                <li className="sws-proto-path-proof-point">Written the way people ask for help, not the way you file it internally.</li>
                            </ul>
                        </div>

                        <div className="sws-proto-path-stage">
                            <span className="sws-proto-path-stage-state">Intent matched</span>
                            <h3 className="sws-proto-path-stage-title">Your services are structured so Google can match them</h3>
                            <p className="sws-proto-path-stage-desc">
                                Each service listed separately. Written the way people look for help. When the site is structured right,
                                the rest of your visibility has something to land on.
                            </p>
                            <ul className="sws-proto-path-proof-points">
                                <li className="sws-proto-path-proof-point">The words on your site match what people actually type into Google.</li>
                                <li className="sws-proto-path-proof-point">Each service has its own page. Google reads the full picture.</li>
                                <li className="sws-proto-path-proof-point">Everything else you do to get found feeds back here.</li>
                            </ul>
                        </div>

                        <div className="sws-proto-path-stage sws-proto-path-stage--routing">
                            <span className="sws-proto-path-stage-state">Enquiry owned</span>
                            <h3 className="sws-proto-path-stage-title">The right person on your team gets it immediately</h3>
                            <p className="sws-proto-path-stage-desc">
                                Someone reaches out. Their name, number, what they want — it hits your CRM in seconds.
                                Nobody is copying between inboxes. Nobody is retyping into a spreadsheet.
                            </p>
                            <ul className="sws-proto-path-proof-points">
                                <li className="sws-proto-path-proof-point">Goes to the right person. Not a shared inbox nobody checks.</li>
                                <li className="sws-proto-path-proof-point">Booking shows real availability. They pick a time without phoning.</li>
                                <li className="sws-proto-path-proof-point">Tracked from the moment it arrives. Nothing disappears between form and follow-up.</li>
                            </ul>
                        </div>

                        <div className="sws-proto-path-stage">
                            <span className="sws-proto-path-stage-state">Nothing cold</span>
                            <h3 className="sws-proto-path-stage-title">Nobody on your team has to remember to chase</h3>
                            <p className="sws-proto-path-stage-desc">
                                They reach out. Confirmation goes straight away. No reply? Reminder goes out.
                                Your team does the work. Chasing runs on its own.
                            </p>
                            <ul className="sws-proto-path-proof-points">
                                <li className="sws-proto-path-proof-point">First response in minutes. Even at midnight.</li>
                                <li className="sws-proto-path-proof-point">Reminders the day before an appointment. No-shows drop.</li>
                                <li className="sws-proto-path-proof-point">Keeps going until they respond. Nothing goes cold quietly.</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sws-proto-path-summary">
                        Someone arrives. Sees what they need. Reaches out. Your team has it. Nothing drops between.
                    </p>
                </div>
            </section>

            {/* ========================================================
          SECTION 8 — PROOF STORY
          ======================================================== */}
            <section className="sws-proto-section sws-proto-proof">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">Real Outcome</span>
                        <h2 className="sws-proto-heading">What changed for a real business</h2>
                        <p className="sws-proto-subtext">
                            A veterinary clinic had a decent-looking site and regular traffic. Barely any of it converted into
                            actual bookings. Here is what we found.
                        </p>
                    </div>

                    <div className="sws-proto-proof-wrap">
                        {/* Context Panel */}
                        <div className="sws-proto-proof-context">
                            <div className="sws-proto-proof-context-row">
                                <div className="sws-proto-proof-context-label">Business</div>
                                <div className="sws-proto-proof-context-value">Veterinary clinic</div>
                            </div>
                            <div className="sws-proto-proof-context-row">
                                <div className="sws-proto-proof-context-label">Situation</div>
                                <div className="sws-proto-proof-context-value">
                                    Decent-looking site, regular traffic. Barely any converting into bookings.
                                </div>
                            </div>
                            <div className="sws-proto-proof-context-row">
                                <div className="sws-proto-proof-context-label">Constraint</div>
                                <div className="sws-proto-proof-context-value">No new traffic needed. Fixed existing handling.</div>
                            </div>
                            <div className="sws-proto-proof-type-badge">Scenario Study</div>
                        </div>

                        {/* Three Acts */}
                        <div className="sws-proto-proof-acts">
                            <div className="sws-proto-proof-act">
                                <div className="sws-proto-proof-act-header">
                                    <div className="sws-proto-proof-act-label">Before</div>
                                    <h3 className="sws-proto-proof-act-title">Visitors coming in, almost nothing coming out</h3>
                                </div>
                                <p className="sws-proto-proof-act-body">
                                    Everything on one long scroll. Contact form going to an email nobody really owned.
                                    Enquiries dying in a queue.
                                </p>
                                <ul className="sws-proto-proof-act-bullets">
                                    <li className="sws-proto-proof-act-bullet">
                                        Vaccinations, dental, emergency — all jammed together. A pet owner looking for one thing
                                        had to wade through the rest. Most did not.
                                    </li>
                                    <li className="sws-proto-proof-act-bullet">
                                        The contact form went somewhere. Reception sometimes checked it. Sometimes did not.
                                        Two-day response was a good week.
                                    </li>
                                    <li className="sws-proto-proof-act-bullet">
                                        Nobody knew how many people enquired. Or what happened after. The vet had a feeling
                                        things were slipping — but no numbers to prove it.
                                    </li>
                                </ul>
                            </div>

                            <div className="sws-proto-proof-act">
                                <div className="sws-proto-proof-act-header">
                                    <div className="sws-proto-proof-act-label">What Changed</div>
                                    <h3 className="sws-proto-proof-act-title">Services separated, handling connected</h3>
                                </div>
                                <p className="sws-proto-proof-act-body">
                                    Vaccinations in one place. Dental in another. Emergency in its own spot.
                                    Forms going straight to the booking tool. Follow-up running on its own.
                                </p>
                                <ul className="sws-proto-proof-act-bullets">
                                    <li className="sws-proto-proof-act-bullet">
                                        Each service pulled apart — its own content, its own booking option. Pet owners land
                                        where they need to be. No hunting.
                                    </li>
                                    <li className="sws-proto-proof-act-bullet">
                                        Forms hit the practice management tool directly. Staff saw enquiries the second they arrived.
                                    </li>
                                    <li className="sws-proto-proof-act-bullet">
                                        Confirmations and reminders ran automatically. Reception stopped having to remember who to chase.
                                    </li>
                                </ul>
                            </div>

                            <div className="sws-proto-proof-act">
                                <div className="sws-proto-proof-act-header">
                                    <div className="sws-proto-proof-act-label">After</div>
                                    <h3 className="sws-proto-proof-act-title">Same traffic, completely different outcome</h3>
                                </div>
                                <p className="sws-proto-proof-act-body">
                                    Six weeks in, bookings picked up. Not a trickle — actual appointments from people who
                                    found what they needed.
                                </p>
                                <ul className="sws-proto-proof-act-bullets">
                                    <li className="sws-proto-proof-act-bullet">
                                        Went from a handful of bookings a month to over forty. Same visitors. Just — people could
                                        finally find what they were looking for.
                                    </li>
                                    <li className="sws-proto-proof-act-bullet">
                                        Response time collapsed. Days became minutes. Enquiries arrived with a notification,
                                        not buried in an inbox.
                                    </li>
                                    <li className="sws-proto-proof-act-bullet">
                                        First time the practice could see which channels actually brought appointments in.
                                        Cut the ones that did not.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 9 — COMPOUNDING SIGNALS
          ======================================================== */}
            <section className="sws-proto-section sws-proto-signals">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker sws-proto-kicker--on-dark">Compounding Effect</span>
                        <h2 className="sws-proto-heading sws-proto-heading--on-dark">
                            What changes when the site actually works
                        </h2>
                        <p className="sws-proto-subtext sws-proto-subtext--on-dark">
                            Not about how it looks. About what happens when every interested person can reach you
                            and your team sees it straight away.
                        </p>
                    </div>

                    <div className="sws-proto-signals-grid">
                        {/* Live Signal Receipt */}
                        <div className="sws-proto-signal-receipt">
                            <div className="sws-proto-signal-receipt-header">
                                <span className="sws-proto-signal-receipt-dot"></span>
                                <span className="sws-proto-signal-receipt-title">Enquiry received — routed automatically</span>
                            </div>
                            <div className="sws-proto-signal-receipt-rows">
                                {[
                                    ['Source', 'Google Search'],
                                    ['Service', 'Roof repair'],
                                    ['Assigned to', 'Mark T.'],
                                    ['Follow-up', 'Scheduled'],
                                    ['Response sent', '2 min ago'],
                                ].map(([key, val]) => (
                                    <div key={key} className="sws-proto-signal-receipt-row">
                                        <span className="sws-proto-signal-receipt-key">{key}</span>
                                        <span className="sws-proto-signal-receipt-val">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Effects */}
                        <div className="sws-proto-effects-grid">
                            {[
                                {
                                    title: 'Ad spend pays for itself',
                                    before: 'Traffic clicks through. Nothing gets captured. The spend continues without evidence of return.',
                                    after: 'People find what they came for and get in touch. Follow-up runs before it goes cold. Spend that works is visible.',
                                },
                                {
                                    title: 'Less chasing, more delivering',
                                    before: 'Enquiries live in an inbox. Your team checks it when they remember. Leads go cold between jobs.',
                                    after: 'Enquiries arrive with context attached. Follow-up is handled. Your team focuses on the actual work.',
                                },
                                {
                                    title: 'Search traffic has somewhere to land',
                                    before: 'One page covers everything. Nobody searching for a specific service finds a specific answer.',
                                    after: 'Each service has its own page. Google can match it to the search. The site becomes where everything else points.',
                                },
                                {
                                    title: 'Your team can see what happened',
                                    before: 'No record of who enquired, which channel sent them, or what happened after. Gut feeling is all you have.',
                                    after: 'Every enquiry tracked from source to outcome. Channels that produce real work are visible. Ones that do not are too.',
                                },
                            ].map((effect) => (
                                <div key={effect.title} className="sws-proto-effect">
                                    <h4 className="sws-proto-effect-title">{effect.title}</h4>
                                    <div className="sws-proto-effect-before">
                                        <div className="sws-proto-effect-before-label">Before</div>
                                        <p className="sws-proto-effect-before-text">{effect.before}</p>
                                    </div>
                                    <div className="sws-proto-effect-after">
                                        <div className="sws-proto-effect-after-label">After</div>
                                        <p className="sws-proto-effect-after-text">{effect.after}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="sws-proto-signals-summary">
                        Visits disappear into separate places — email, social messages, missed calls — with nothing connecting them.
                        When the site works, every enquiry has a source, an owner, and a next step.
                    </p>
                </div>
            </section>

            {/* ========================================================
          SECTION 10 — OPERATING BUILD BOARD
          ======================================================== */}
            <section className="sws-proto-section sws-proto-build">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">How It Works</span>
                        <h2 className="sws-proto-heading">From first conversation to a site pulling its weight</h2>
                        <p className="sws-proto-subtext">
                            We start with how your business runs — not with colours or layouts. The build follows what we learn.
                        </p>
                    </div>

                    <div className="sws-proto-build-board">
                        {/* Inputs */}
                        <div className="sws-proto-build-inputs">
                            <div className="sws-proto-build-panel-header">
                                <span className="sws-proto-build-panel-label">Project Inputs</span>
                            </div>
                            <ul className="sws-proto-build-input-list">
                                {[
                                    'Incoming calls and missed calls',
                                    'Contact forms and booking requests',
                                    'Existing pages and service listings',
                                    'CRM and follow-up gaps',
                                    'Channels you already use to get found',
                                ].map((item) => (
                                    <li key={item} className="sws-proto-build-input-item">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Stages */}
                        <div className="sws-proto-build-stages">
                            {[
                                {
                                    num: 'Stage 01',
                                    title: 'Map how leads arrive',
                                    desc: 'We trace every path an enquiry takes — from where people find you to where the message ends up. We identify what is leaking before anything is built.',
                                    outputs: ['Enquiry flow mapped', 'Leak points identified', 'CRM gaps flagged'],
                                },
                                {
                                    num: 'Stage 02',
                                    title: 'Structure pages around real services',
                                    desc: 'Each service gets its own page, written the way people search for it. The architecture follows the business, not a template.',
                                    outputs: ['Service pages planned', 'Content aligned to search intent', 'Clear next actions on every page'],
                                },
                                {
                                    num: 'Stage 03',
                                    title: 'Connect enquiry handling',
                                    desc: 'Forms feed directly into your CRM. Confirmations go out automatically. The right person is notified the moment an enquiry arrives.',
                                    outputs: ['CRM connected', 'Auto-confirmation live', 'Routing configured'],
                                },
                                {
                                    num: 'Stage 04',
                                    title: 'Hand over to your team',
                                    desc: 'Everything tested end to end. Your team gets documentation and a walkthrough. They run it independently from there.',
                                    outputs: ['Full documentation', 'Team walkthrough', 'Independent from day one'],
                                },
                            ].map((stage) => (
                                <div key={stage.num} className="sws-proto-build-stage">
                                    <div className="sws-proto-build-stage-main">
                                        <div className="sws-proto-build-stage-num">{stage.num}</div>
                                        <h4 className="sws-proto-build-stage-title">{stage.title}</h4>
                                        <p className="sws-proto-build-stage-desc">{stage.desc}</p>
                                    </div>
                                    <div className="sws-proto-build-stage-outputs">
                                        {stage.outputs.map((o) => (
                                            <span key={o} className="sws-proto-build-output">{o}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Final State */}
                        <div className="sws-proto-build-final">
                            <div className="sws-proto-build-final-header">
                                <span className="sws-proto-build-final-label">What is working after the build</span>
                            </div>
                            <ul className="sws-proto-build-final-outcomes">
                                {[
                                    'Clear service pages — visitors find what they came for',
                                    'Every enquiry captured with name, number, and service',
                                    'Leads assigned and confirmed automatically',
                                    'Follow-up running without anyone having to remember',
                                    'Tracking showing which channels produce real work',
                                ].map((outcome) => (
                                    <li key={outcome} className="sws-proto-build-final-outcome">{outcome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 11 — FIT FILTER
          ======================================================== */}
            <section className="sws-proto-section sws-proto-fit">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">Fit Check</span>
                        <h2 className="sws-proto-heading">Is this the right fit?</h2>
                        <p className="sws-proto-subtext">
                            This solves a specific kind of problem. Here is how to tell if yours matches.
                        </p>
                    </div>

                    <div className="sws-proto-fit-columns">
                        {/* Strong fit */}
                        <div className="sws-proto-fit-block sws-proto-fit-block--strong">
                            <div className="sws-proto-fit-block-header">
                                <div className="sws-proto-fit-block-badge">Strong Fit</div>
                                <h3 className="sws-proto-fit-block-title">This is a strong fit if</h3>
                            </div>
                            <div className="sws-proto-fit-scenarios">
                                {[
                                    ['Traffic comes in but nothing converts', 'People visit. Browse. Leave. Attention is not the problem. Nothing on the site gives them a reason to act.'],
                                    ['Enquiries take days to get a response', 'Messages sit in a shared inbox nobody owns. By the time someone replies, the customer has moved on to whoever answered first.'],
                                    ['You cannot tell which marketing is working', 'Money goes out across different channels. You have no idea which one produced the last real enquiry — or if any of them did.'],
                                    ['Local people cannot find your individual services', 'Everything is bundled into one listing. Someone searching for a specific thing you do does not find you. They find whoever listed it separately.'],
                                ].map(([title, text]) => (
                                    <div key={title} className="sws-proto-fit-scenario">
                                        <h4 className="sws-proto-fit-scenario-title">{title}</h4>
                                        <p className="sws-proto-fit-scenario-text">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Probably not */}
                        <div className="sws-proto-fit-block sws-proto-fit-block--not">
                            <div className="sws-proto-fit-block-header">
                                <div className="sws-proto-fit-block-badge">Probably Not For You</div>
                                <h3 className="sws-proto-fit-block-title">This probably is not for you if</h3>
                            </div>
                            <div className="sws-proto-fit-scenarios">
                                {[
                                    ['You need something basic with no connections', 'If CRM, booking, and follow-up are not needed, this is more than you need. A simpler build costs less and does the job.'],
                                    ['Enquiries are already steady and nothing is slipping', 'If your current setup brings in enough work and nothing gets missed, a rebuild will not shift much.'],
                                    ['You sell products, not services', 'If you need checkout and inventory, our e-commerce build is a better starting point for that.'],
                                ].map(([title, text]) => (
                                    <div key={title} className="sws-proto-fit-scenario">
                                        <h4 className="sws-proto-fit-scenario-title">{title}</h4>
                                        <p className="sws-proto-fit-scenario-text">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 12 — FAQ
          ======================================================== */}
            <section className="sws-proto-section sws-proto-faq">
                <div className="sws-proto-container">
                    <div className="sws-proto-section-intro">
                        <span className="sws-proto-kicker">FAQ</span>
                        <h2 className="sws-proto-heading">What business owners ask before getting started</h2>
                        <p className="sws-proto-subtext">Direct answers. No jargon.</p>
                    </div>

                    <div className="sws-proto-faq-list">
                        {[
                            ['How is this different from getting a new website built?', 'Most builds stop at how it looks. This connects every enquiry to a real person, logs it, and follows up automatically. The difference shows up in your inbox, not your homepage.'],
                            ['We already spent a lot on our current site. Do we start over?', 'Not always. If the current site is structurally sound, we can connect the enquiry handling, CRM, and follow-up into what you already have. If it cannot support that properly, we will say so clearly before recommending a rebuild.'],
                            ['Do we need a specific CRM?', 'No. We build this around whatever CRM platform fits your workflow — enquiries, follow-up, and reporting all in one place. If you already have a setup that works, we can connect that instead.'],
                            ['Will local people actually find us on Google?', 'Each service gets its own page with wording that matches how people actually search. That gives Google a clear page to show when someone nearby needs that exact service.'],
                            ['How much upkeep is there once it is running?', 'Day-to-day is light — updating content, checking leads. Your team gets a proper walkthrough before we hand anything over.'],
                            ['What exactly do we walk away with?', 'Full documentation, hands-on training, and a team that can run it without us. If you want ongoing support after that, it is there.'],
                            ['How long does the whole thing take?', 'Four to six weeks for a straightforward build. Multiple locations or complex booking connections push it closer to eight to twelve. You will know the timeline upfront.'],
                            ['What should we expect to pay?', 'It depends on how many services you run, what needs connecting, and how much content is involved. You get a clear number before anything starts.'],
                        ].map(([q, a]) => (
                            <div key={q} className="sws-proto-faq-item">
                                <div className="sws-proto-faq-question">{q}</div>
                                <p className="sws-proto-faq-answer">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 13 — CTA
          ======================================================== */}
            <section className="sws-proto-cta">
                <div className="sws-proto-cta-inner">
                    <h2 className="sws-proto-cta-heading">Show me what is broken</h2>
                    <p className="sws-proto-cta-desc">
                        Drop your URL. We come back with what is working, what is leaking, and what to fix.
                    </p>
                    <a href="/contact" className="sws-proto-cta-btn">Start a Conversation</a>
                </div>
            </section>

            {/* ========================================================
          SECTION 14 — RELATED SERVICES
          ======================================================== */}
            <section className="sws-proto-section sws-proto-related">
                <div className="sws-proto-container">
                    <h2 className="sws-proto-heading">Related Services</h2>
                    <div className="sws-proto-related-origin">Smart Website Systems</div>

                    <div className="sws-proto-related-rail">
                        <a href="#" className="sws-proto-related-panel">
                            <div className="sws-proto-related-panel-type">Service Architecture</div>
                            <h3 className="sws-proto-related-panel-title">
                                Service Pages vs One Generic Services Page
                            </h3>
                        </a>
                        <a href="#" className="sws-proto-related-panel">
                            <div className="sws-proto-related-panel-type">Conversion</div>
                            <h3 className="sws-proto-related-panel-title">
                                Conversion Architecture for Service Websites
                            </h3>
                        </a>
                        <a href="#" className="sws-proto-related-panel">
                            <div className="sws-proto-related-panel-type">Industry</div>
                            <h3 className="sws-proto-related-panel-title">
                                Accounting Firms — Stop Losing Owners in The Gap Between Proposal And Signature
                            </h3>
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================================
          SECTION 15 — FOOTER PLACEHOLDER
          ======================================================== */}
            <footer className="sws-proto-footer">
                <div className="sws-proto-container">
                    <div className="sws-proto-footer-grid">
                        <div>
                            <div className="sws-proto-footer-brand">MindWP</div>
                            <p className="sws-proto-footer-tagline">
                                For service businesses where calls get missed, follow-ups slip, and local visibility disappears.
                            </p>
                        </div>
                        <div>
                            <div className="sws-proto-footer-col-label">Services</div>
                            <ul className="sws-proto-footer-links">
                                <li><a href="#">Smart Website Systems</a></li>
                                <li><a href="#">AI Lead Handling</a></li>
                                <li><a href="#">CRM Automation</a></li>
                                <li><a href="#">Local SEO Authority</a></li>
                                <li><a href="#">Reputation & Reviews</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="sws-proto-footer-col-label">Company</div>
                            <ul className="sws-proto-footer-links">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="sws-proto-footer-col-label">Resources</div>
                            <ul className="sws-proto-footer-links">
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Industry Guides</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sws-proto-footer-bottom">
                        © {new Date().getFullYear()} MindWP. All rights reserved.
                    </div>
                </div>
            </footer>

        </main>
    );
}
