/*
  YOUR CV
  Put your CV in the main folder as resume.pdf, then change "" to "resume.pdf".
  The "Download CV" buttons only appear once this is set.
*/
window.RESUME = "resume.pdf";

/*
  YOUR PROJECTS LIVE HERE.
  Projects show in the order you list them. "featured: true" pins one to the top, full width.
  Leave a field out (or as "") if you don't have it. The card adjusts.

  New optional fields:
    value:  one short badge for what the employer gains, e.g. "Saves time"
    impact: up to 3 headline numbers, as [number, label] pairs. Only use numbers you can back up.

  Order below = strongest business case first.
  Projects that didn't make the cut are kept at the bottom, commented out, so nothing is lost.
*/

window.PROJECTS = [

  {
    title: "Lookbook delivery system, from form to client feedback",
    summary: "One workflow turns a client's form submission into a finished draft presentation, routes it to the creative team, and chases feedback automatically 40 days later.",
    date: "2026-08",
    context: "Built as Junior Tech Specialist",
    value: "Scales delivery without more headcount",
    impact: [["20+", "steps run with no manual setup"], ["40 days", "automatic feedback follow-up"], ["70", "lookbooks delivered through the board"]],
    tools: ["Zapier", "Airtable", "Google Drive", "Google Docs", "Gamma", "Asana"],
    workflow: [
      "Airtable: Client submits the lookbook form",
      "Google Drive: Build folders, file photos and logo",
      "Google Docs: Create brief from the record",
      "Gamma: Generate draft presentation",
      "Paths: Route by generation success or fail",
      "Asana: Create task in the creative team's board",
      "Airtable: Save links back to the record",
      "Airtable: Start the 40-day feedback countdown"
    ],
    problem: "Every client lookbook meant creating folders, sorting photos, writing a brief and briefing designers by hand, and nobody was tracking which clients had never given feedback.",
    solution: "A multi-path Zap builds the folders, files every asset, generates the draft with Gamma and creates the Asana task. A failed generation goes to its own path so it gets fixed instead of silently stalling. A second Zap watches the Asana board and updates an Airtable countdown, so the team sees which clients are overdue for feedback. Asana rules move each task through the stages.",
    result: "Each new client starts with organised assets and a draft presentation, and the team has a live list of who still owes feedback.",
    featured: true
  },

  {
    title: "CRM migration: member records from GoHighLevel to HubSpot",
    summary: "Moved a membership business's contact records into HubSpot and segmented them, so legacy and current members could be told apart.",
    date: "2026-06",
    context: "Built as Junior Tech Specialist",
    value: "Protects customer and revenue data",
    impact: [["515", "contacts in the source CRM"], ["153", "legacy-member companies segmented"]],
    tools: ["GoHighLevel", "HubSpot", "Data mapping", "Smart lists"],
    workflow: [
      "GoHighLevel: Filter and review member contacts",
      "Data: Clean and map fields to HubSpot properties",
      "HubSpot: Import contacts and companies",
      "HubSpot: Segment by delivery status"
    ],
    problem: "Member records lived in a CRM the team was moving away from, and past members had to stay identifiable for reporting and outreach.",
    solution: "I reviewed the contacts, mapped their fields to HubSpot properties and imported them. A delivery status property then drives a segment for legacy members, so each group can be reported on and contacted separately.",
    result: "Member history carried over into HubSpot instead of being lost, and legacy members have their own list."
  },

  {
    title: "Coach lookup: a 51-step workflow down to 6",
    summary: "One HubDB lookup replaced a separate branch for every coach, so adding a coach is a table edit instead of a workflow rebuild.",
    date: "2026-03",
    context: "Built as Junior Tech Specialist",
    value: "Cuts maintenance cost",
    impact: [["51 → 6", "workflow steps"], ["~50 → 14", "steps in a second rebuild"]],
    tools: ["HubSpot Workflows", "HubDB", "Custom code (Node.js)"],
    workflow: [
      "HubSpot: Company enrolled",
      "Custom code: Look up coach in HubDB",
      "HubSpot: Update associated contacts",
      "HubSpot: Update associated payment"
    ],
    problem: "Coach details were set on the company, but contacts and payments needed them too. The old workflow used one branch per coach, 10 in all, and every new coach meant another branch.",
    solution: "A Node.js step reads the assigned coach's name, email and meeting link from a HubDB table, then five edit steps write them to every associated contact and the payment. I documented the pattern in an SOP so others can reuse it. I applied the same one-step-per-field approach to a feedback-score workflow, cutting it from about 50 steps to 14.",
    result: "The workflow went from 51 steps to 6. Adding or changing a coach is a HubDB row edit, and workflows that hit the step limit can now be merged."
  },

  {
    title: "Revenue projections vs actuals dashboard",
    summary: "End-of-day checkouts feed a monthly summary per sales team, so leadership can see projected against actual results without chasing spreadsheets.",
    date: "2026-10",
    context: "Contributed as Junior Tech Specialist",
    value: "Gives leadership live revenue visibility",
    impact: [["3", "sales teams tracked monthly"], ["13+", "actions in the checkout automation"]],
    tools: ["Airtable", "Airtable Automations", "Slack", "Dashboards"],
    workflow: [
      "Form: Team submits the end-of-day checkout",
      "Airtable: Find this month's summary record",
      "Airtable: Create it if it doesn't exist yet",
      "Airtable: Update deals, cash, revenue at risk and NPS",
      "Slack: Notify the team",
      "Dashboard: Monthly summary feeds the graph"
    ],
    problem: "Projections and results lived in separate places, so comparing them each month was manual and easy to get wrong.",
    solution: "An Airtable automation runs on every checkout. It finds or creates the month's summary and writes deals signed, cash collected, revenue at risk and NPS into it. The monthly summary table feeds the dashboard graph, and other automations handle weekly tasks and coach check-ins.",
    result: "Each team's projection and actual figures sit side by side for every month, ready to graph."
  },

  {
    title: "Contract generation and signed-document backup",
    summary: "Creates the right contract from a template as soon as a record is ready, and keeps a copy of signed documents on the Airtable record.",
    date: "2026-10",
    context: "Built as Junior Tech Specialist",
    value: "Saves time and reduces risk",
    impact: [["30–60 min", "manual prep saved per contract"], ["2", "contract paths handled automatically"]],
    tools: ["Zapier", "Airtable", "Google Docs", "SignRequest API"],
    workflow: [
      "Airtable: Record ready for contract",
      "Paths: Choose contract type",
      "Google Docs: Fill matching template",
      "Airtable: Save contract link",
      "SignRequest: Fetch the document by API",
      "Airtable: Store the signed copy"
    ],
    problem: "Contracts were copied from templates and filled in by hand, and signed copies stayed inside the e-signature tool.",
    solution: "A Zap branches by contract type, fills the matching Google Docs template with the record's details and saves the link back to Airtable. A second Zap calls the SignRequest API and stores the document on the record, with a fallback path if it can't be found.",
    result: "Part of the contract automations that replaced 30–60 minutes of manual prep per contract, with a backup of every signed copy."
  },

  {
    title: "Video library migration from Vimeo to Livid",
    summary: "A Zap that takes the new video link from a tracking record and uses the community platform's API to update the matching post.",
    date: "2026-10",
    context: "Built as Junior Tech Specialist",
    value: "Automates a bulk content move",
    impact: [["14", "test runs in 30 days before go-live"]],
    tools: ["Zapier", "Airtable", "Webhooks", "Custom code (JavaScript)", "Circle API"],
    workflow: [
      "Airtable: Record updated with the new video link",
      "Webhooks: Send a GET request",
      "Custom code: Fetch the live post by its ID",
      "Custom code: Update the post with the new link"
    ],
    problem: "Moving videos to a new host meant opening each community post and swapping the video by hand.",
    solution: "The Zap starts when an Airtable record gets its new link. A JavaScript step calls the community platform's admin API with the post ID and updates the post.",
    result: "Posts can be updated from a tracking table instead of one by one. I tested it across 14 runs before using it."
  },

  {
    title: "Staff onboarding that sets itself up",
    summary: "When an onboarding task reaches a new phase, Asana tags the stage and creates that phase's checklist automatically.",
    date: "2026-09",
    context: "Built as Junior Tech Specialist",
    value: "Consistent onboarding, fewer missed steps",
    impact: [["30+", "staff onboarded across AU and NZ"], ["4", "phases, each with its own checklist"]],
    tools: ["Asana Rules", "Airtable", "Google Docs", "SOPs"],
    workflow: [
      "Asana: Task moves to a phase section",
      "Asana: Check it isn't already tagged",
      "Asana: Add the stage tag",
      "Asana: Create the phase's subtasks"
    ],
    problem: "Onboarding and offboarding steps lived in people's heads and were set up by hand for each new hire.",
    solution: "One Asana rule per phase checks the section and stage, adds the stage tag and creates the subtasks. Together with SOPs and Loom walkthroughs for each tool, a new hire's setup follows the same path every time.",
    result: "Every hire gets the same checklist, and the board shows who is in which phase."
  },

  {
    title: "End-of-day reports with KPI targets filled in",
    summary: "Each marketing role gets its own end-of-day form with that person's targets already attached, and a dashboard per role.",
    date: "2026-10",
    context: "Built as Junior Tech Specialist",
    value: "Accountability without chasing people",
    impact: [["9", "role-specific EOD forms"], ["17", "staff with KPI targets set"]],
    tools: ["Airtable Forms", "Airtable Interfaces", "Formulas"],
    workflow: [
      "Airtable: Staff record holds role KPIs and targets",
      "Airtable: Role form link generated per person",
      "Form: Staff submit their end-of-day numbers",
      "Interface: Dashboard per role"
    ],
    problem: "Marketing staff reported progress in different ways, and there was no simple way to compare the numbers with each person's targets.",
    solution: "I built nine EOD forms, one per role, with each person's KPI targets stored on their staff record so the form opens with them filled in. An Airtable interface gives every role its own dashboard.",
    result: "Daily numbers and targets sit in one place, in a consistent format."
  },

  {
    title: "Lead intake automation in n8n",
    summary: "A personal build that takes lead form data from a webhook, cleans it and sends it to a CRM and Slack.",
    context: "Personal project, in progress",
    value: "Shows I learn new tools on my own",
    tools: ["n8n", "Docker", "Postman", "Webhooks"],
    workflow: [
      "Webhook: Receive lead form data",
      "n8n: Clean the fields",
      "CRM: Send the lead",
      "Slack: Send alert"
    ],
    problem: "I wanted to apply what I already do in Zapier, such as webhooks, filters, CRM sync and alerts, in a self-hosted tool.",
    solution: "I run n8n on my own machine with Docker and test the webhook in Postman with sample data. An SOP and a Loom walkthrough will follow, like my work projects.",
    result: "Still being built, and the main way I'm learning n8n."
  }

];

/*
  ---- NOT FEATURED (kept for later; move a block up to show it) ----

  Referral program alerts: form -> Google Sheets row -> Slack + coach alerts. Small and common, so it adds little.
  Automated performance review one-pagers: Airtable -> Google Docs template. Same pattern as the contract project.
  Pay rise request form, Women in Construction event board, Tech SOP library: supporting work, better mentioned in your CV.
*/
