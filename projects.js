/*
  YOUR CV
  Put your CV in the main folder as resume.pdf, then change "" to "resume.pdf".
  The "Download CV" buttons only appear once this is set.
*/
window.RESUME = "";

/*
  YOUR PROJECTS LIVE HERE.
  To add one: copy the example block at the bottom of this file,
  paste it inside the square brackets below, and fill it in.
  Projects show in the order you list them. "featured: true" pins one to the top, full width.
  Leave a field out (or as "") if you don't have it. The card adjusts.
*/

window.PROJECTS = [

  {
    title: "Client onboarding asset pipeline",
    summary: "When a client record is ready, one workflow builds their Drive folders, files their photos and logo, drafts a presentation and hands it to the creative team.",
    date: "2026-09",
    context: "Built as Junior Tech Specialist",
    tools: ["Zapier", "Airtable", "Google Drive", "Google Docs", "Gamma", "Asana"],
    workflow: [
      "Airtable: Client record ready",
      "Google Drive: Build folder structure",
      "Google Drive: Upload photos and logo",
      "Google Docs: Create brief from record",
      "Gamma: Generate presentation",
      "Asana: Create task for creative team",
      "Airtable: Save links back to record",
      "Paths: Route by generation status"
    ],
    problem: "Preparing each client's presentation meant creating folders, sorting their photos, writing a brief and briefing the design team by hand.",
    solution: "A 19-step Zap that builds the folder structure, files every asset, generates a draft presentation with Gamma, creates the Asana task and writes all links back to Airtable. Delays and a status check give the presentation time to finish generating.",
    result: "Each new client starts with organised assets and a draft presentation, without manual setup.",
    featured: true
  },

  {
    title: "HubSpot workflow cut from about 50 steps to 14",
    summary: "Rebuilt a workflow that copies client feedback scores from contacts to their companies, so it's faster to change and easier to debug.",
    context: "Built as Junior Tech Specialist",
    tools: ["HubSpot Workflows"],
    workflow: [
      "HubSpot: Contact enrolled",
      "HubSpot: Copy session ratings to company",
      "HubSpot: Copy feedback and takeaways",
      "HubSpot: Copy referral and score date"
    ],
    problem: "Feedback scores were stored on contacts, but reporting happens at company level. The original workflow took around 50 steps to copy them across.",
    solution: "Rebuilt it with one step per field that writes directly to the associated company, for 14 steps in total.",
    result: "The same data reaches company records through a much simpler workflow that's easier to maintain."
  },

  {
    title: "Contract generation with branching",
    summary: "Creates the right contract from a template as soon as a record is ready, then saves the document link back to Airtable.",
    date: "2026-10",
    context: "Built as Junior Tech Specialist",
    tools: ["Zapier", "Airtable", "Google Docs"],
    workflow: [
      "Airtable: Record ready for contract",
      "Paths: Choose contract type",
      "Google Docs: Fill matching template",
      "Airtable: Save contract link"
    ],
    problem: "Contracts were copied from templates and filled in by hand for every new agreement.",
    solution: "A Zap that branches by contract type, fills the matching Google Docs template with the record's details, and saves the link back to Airtable.",
    result: "Part of the contract automations that replaced 30–60 minutes of manual prep per contract."
  },

  {
    title: "Automated performance review one-pagers",
    summary: "Turns review data in Airtable into a formatted one-page document, ready to share.",
    date: "2026-09",
    context: "Built as Junior Tech Specialist",
    tools: ["Zapier", "Airtable", "Google Docs"],
    workflow: [
      "Airtable: Review record updated",
      "Google Docs: Fill one-pager template",
      "Delay: Wait for document",
      "Airtable: Attach document link"
    ],
    problem: "Each review summary was formatted by hand from data already stored in Airtable.",
    solution: "A Zap that fills a Google Docs template with the review's fields, waits for the document to be ready and saves its link on the record.",
    result: "Review documents come out consistent every time, without manual formatting."
  },

  {
    title: "Coach details synced with custom code",
    summary: "When a coach is assigned to a company, their name, email and booking link flow to every associated contact and payment record.",
    context: "Built as Junior Tech Specialist",
    tools: ["HubSpot Workflows", "Custom code", "HubDB"],
    workflow: [
      "HubSpot: Company enrolled",
      "Custom code: Look up coach details",
      "HubSpot: Update associated contacts",
      "HubSpot: Update associated payments"
    ],
    problem: "Coach details were set on the company, but contacts and payment records each needed them for emails and booking links.",
    solution: "A company-level workflow with a custom code step that looks up the assigned coach in a HubDB table and returns their details, which the next steps write to every associated contact and payment.",
    result: "Contacts always carry the right coach and booking link, without manual updates."
  }

];

/*
  ---- EXAMPLE (copy everything between the lines) ----
  {
    title: "Lead intake that routes itself",
    summary: "One sentence on what the automation does and for whom.",
    date: "2026-11",                       // year-month, shown on the card
    context: "Built as Junior Tech Specialist", // optional short line under the title
    tools: ["n8n", "Node.js", "HubSpot", "Slack"],

    // Each step becomes a node in the card's workflow diagram.
    // Format: "App: what it does". Steps show in this order.
    workflow: [
      "Webhook: New form entry",
      "Node.js: Clean and format data",
      "HubSpot: Create contact",
      "Slack: Notify sales"
    ],

    problem: "What was slow, manual or error-prone before.",
    solution: "What you built, in plain words.",
    result: "What changed. Only use real numbers you can back up.",
    image: "images/lead-intake.png",        // put the file in the images folder
    link: "https://your-demo-video-link",   // demo video, write-up or repo
    linkLabel: "Watch the demo",
    featured: false
  },
  ------------------------------------------------------
*/
