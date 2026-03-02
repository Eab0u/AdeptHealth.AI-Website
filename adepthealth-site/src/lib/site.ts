export const siteConfig = {
  companyName: "AdeptHealth.AI",
  contactEmail: "contact@adepthealth.ai",
  contactMailto: "mailto:contact@adepthealth.ai",
  navLinks: [
    { label: "Contact", href: "/#contact" },
  ],
  coreServices: [
    {
      title: "AI Readiness and Use-Case Prioritization",
      description:
        "Assess maturity, identify high-value opportunities, and align initiatives to clinical and operational goals.",
    },
    {
      title: "Clinical and Operational Workflow Automation",
      description:
        "Reduce repetitive work across documentation, triage, and back-office processes with safe automation.",
    },
    {
      title: "Responsible AI, Governance, and Compliance",
      description:
        "Build governance controls, review checkpoints, and model oversight designed for regulated settings.",
    },
  ],
  processSteps: [
    "Discovery",
    "Data and Workflow Assessment",
    "Pilot and Validation",
    "Scale and Monitoring",
  ],
  outcomes: [
    {
      title: "Faster documentation",
      description:
        "Reduce charting friction with AI-assisted drafting and cleaner handoffs.",
    },
    {
      title: "Reduced manual review",
      description:
        "Automate repetitive checks so teams can focus on exceptions and decisions.",
    },
    {
      title: "Improved patient access",
      description:
        "Shorten intake and routing delays that slow scheduling and care coordination.",
    },
    {
      title: "Audit-ready governance",
      description:
        "Maintain clear controls, oversight, and traceability across AI-enabled workflows.",
    },
  ],
  trustBullets: [
    "Privacy-first design",
    "Security-minded delivery",
    "Experience in regulated environments",
    "Human oversight and governance",
    "Do not submit PHI in contact form",
  ],
  testimonials: [
    {
      quote:
        "Sample testimonial: AdeptHealth.AI helped us move from workshop ideas to a validated pilot in one quarter.",
      author: "Operations Leader",
    },
    {
      quote:
        "Sample testimonial: Their approach balanced innovation with governance, which made leadership comfortable scaling.",
      author: "Digital Health Director",
    },
    {
      quote:
        "Sample testimonial: We got clear priorities, realistic timelines, and cleaner handoffs between clinical and technical teams.",
      author: "Care Transformation Team",
    },
  ],
  faqs: [
    {
      question: "What data do you need to start?",
      answer:
        "We begin with workflow context, current process pain points, and a practical data inventory across your existing systems. From there, we define the minimum data needed for a pilot, document assumptions, and avoid over-scoping before value is proven.",
    },
    {
      question: "Do you build solutions or advise teams?",
      answer:
        "Both. We can advise leadership and implementation teams, build targeted prototypes, and support production rollout using your current technology stack and vendors. Engagements can be advisory-led, build-led, or a hybrid depending on your internal capacity.",
    },
    {
      question: "How do you handle compliance?",
      answer:
        "Compliance is built into delivery from day one through governance checkpoints, role-based access controls, documentation standards, and human oversight expectations. We work with your security and legal stakeholders early so controls are aligned before scale decisions.",
    },
    {
      question: "What timeline should we expect?",
      answer:
        "Most engagements start with a focused discovery and planning phase, then move into pilot validation with clear success criteria. If outcomes and controls are met, we transition into a scaled implementation plan with monitoring and ownership defined.",
    },
    {
      question: "Can you work with our current vendors?",
      answer:
        "Yes. We design for interoperability and collaborate with your existing EHR, analytics, cloud, and integration partners instead of forcing a tool reset. The goal is to reduce implementation friction while still improving reliability, governance, and adoption.",
    },
    {
      question: "Which AI capabilities do you support?",
      answer:
        "We support LLM-enabled workflows, predictive modeling, intelligent automation, and monitoring strategies that keep performance stable over time. Capability selection is driven by workflow fit, risk profile, and measurable operational value rather than novelty.",
    },
  ],
  servicePageItems: [
    {
      title: "AI strategy and roadmap",
      description:
        "Define a phased plan tied to business and care delivery priorities.",
    },
    {
      title: "Use-case selection + ROI framing",
      description:
        "Prioritize practical initiatives with clear impact and adoption criteria.",
    },
    {
      title: "Data readiness + interoperability planning",
      description:
        "Prepare data and integration paths across EHR and operational systems.",
    },
    {
      title: "LLM and ML solution prototyping",
      description:
        "Build and validate prototypes against workflow and risk requirements.",
    },
    {
      title: "Deployment, monitoring, and MLOps",
      description:
        "Operationalize models with observability, change controls, and support loops.",
    },
    {
      title: "Responsible AI, governance, and compliance support",
      description:
        "Implement policies, review processes, and accountability for safe rollout.",
    },
  ],
  principles: [
    "Outcomes-first",
    "Clinician-in-the-loop",
    "Privacy by design",
    "Measurable delivery",
  ],
  contactReasons: [
    "AI strategy and roadmap",
    "Use-case assessment",
    "Prototype support",
    "Compliance and governance",
    "General inquiry",
  ],
} as const;
