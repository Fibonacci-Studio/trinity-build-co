import type { ImageMetadata } from "astro";
import commercialHero from "../assets/photos/16-night-commercial-jobsite.png";
import commercialSupport from "../assets/photos/01-branded-truck-office-construction.png";
import designBuildHero from "../assets/photos/10-preconstruction-meeting.png";
import designBuildSupport from "../assets/photos/15-exterior-facade-install.png";
import constructionManagementHero from "../assets/photos/18-mechanical-room-inspection.png";
import constructionManagementSupport from "../assets/photos/12-branded-fleet-tool-trailer.png";
import preconstructionHero from "../assets/photos/13-hardhat-plans-detail.png";
import preconstructionSupport from "../assets/photos/06-concrete-pour-superintendent.png";
import budgetHero from "../assets/photos/02-plan-review-jobsite-team.png";
import budgetSupport from "../assets/photos/17-branded-cap-materials-detail.png";
import valueEngineeringHero from "../assets/photos/09-glass-partition-installation.png";
import valueEngineeringSupport from "../assets/photos/19-warehouse-loading-dock.png";
import planningHero from "../assets/photos/20-site-entrance-fencing.png";
import planningSupport from "../assets/photos/14-safety-huddle-jobsite.png";
import groundUpHero from "../assets/photos/07-tilt-up-warehouse-crew.png";
import groundUpSupport from "../assets/photos/work-areas/04-office-buildings.png";
import tenantImprovementHero from "../assets/photos/03-tenant-improvement-walkthrough.png";
import tenantImprovementSupport from "../assets/photos/11-medical-ti-framing.png";

export interface ServiceContentItem {
  title: string;
  copy: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  hubCopy: string;
  hubBullets: string[];
  eyebrow: string;
  lede: string;
  heroImage: ImageMetadata;
  heroAlt: string;
  heroPosition?: string;
  introTitle: string;
  introParagraphs: string[];
  capabilitiesTitle: string;
  capabilities: ServiceContentItem[];
  supportImage: ImageMetadata;
  supportAlt: string;
  supportPosition?: string;
  supportEyebrow: string;
  supportTitle: string;
  supportCopy: string;
  processTitle: string;
  processCopy: string;
  processItems: ServiceContentItem[];
  fitTitle: string;
  fitCopy: string;
  fitItems: ServiceContentItem[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "commercial-general-contracting",
    id: "commercial-general-contracting",
    title: "Commercial General Contracting",
    shortTitle: "General Contracting",
    seoTitle: "Commercial General Contractor Phoenix, AZ | Trinity Build Co.",
    seoDescription:
      "Commercial general contracting in Phoenix and across Arizona, with coordinated field supervision, trade management, project controls, and closeout.",
    hubCopy:
      "Full-scope commercial project delivery with field supervision, trade coordination, cost and schedule visibility, and organized closeout.",
    hubBullets: [
      "Project delivery from mobilization through closeout",
      "Trade coordination and field supervision",
      "Documented cost, schedule, and quality controls",
    ],
    eyebrow: "Commercial General Contractor",
    lede:
      "Coordinated commercial construction for owners and project teams throughout Phoenix, Scottsdale, and Arizona.",
    heroImage: commercialHero,
    heroAlt: "Commercial construction site at night",
    heroPosition: "center 52%",
    introTitle: "One accountable construction plan.",
    introParagraphs: [
      "Commercial construction brings together drawings, permits, procurement, trade partners, inspections, safety requirements, owner decisions, and field conditions. General contracting organizes those moving parts into a practical delivery plan with defined responsibilities and current information.",
      "Trinity Build Co. supports commercial projects from construction planning through punch and turnover. The project agreement establishes the exact scope, while the field team coordinates the work, documents progress, and keeps cost, schedule, quality, and active decisions visible.",
    ],
    capabilitiesTitle: "Core general contracting responsibilities.",
    capabilities: [
      {
        title: "Project Controls",
        copy: "Organize the working budget, schedule, submittals, procurement needs, decisions, and changes around the requirements of the project.",
      },
      {
        title: "Trade Coordination",
        copy: "Sequence qualified trade partners, deliveries, access, inspections, and handoffs so the work can progress in a controlled order.",
      },
      {
        title: "Field Supervision",
        copy: "Maintain day-to-day site leadership focused on safety, logistics, coordination, workmanship, and the current construction documents.",
      },
      {
        title: "Cost & Change Documentation",
        copy: "Track commitments, potential changes, approved adjustments, and supporting information according to the reporting defined for the project.",
      },
      {
        title: "Quality & Closeout",
        copy: "Coordinate inspections, punch work, turnover requirements, and closeout documents included in the contract.",
      },
    ],
    supportImage: commercialSupport,
    supportAlt: "Construction truck at a commercial jobsite",
    supportPosition: "center 56%",
    supportEyebrow: "Field Accountability",
    supportTitle: "The plan stays connected to the work.",
    supportCopy:
      "Useful reporting starts with accurate field information. Current schedules, documented decisions, coordinated trade activity, and visible quality expectations help the full project team act on the same facts.",
    processTitle: "A disciplined path from mobilization to turnover.",
    processCopy:
      "Every project has different contracts, approvals, site conditions, and stakeholders. The delivery plan is adjusted to those realities without losing the basic controls that keep the work organized.",
    processItems: [
      {
        title: "Confirm the Assignment",
        copy: "Review scope, drawings, permits, responsibilities, milestones, owner requirements, and known constraints before mobilization.",
      },
      {
        title: "Prepare the Work",
        copy: "Coordinate procurement, site logistics, trade sequencing, safety planning, submittals, and the information needed to begin.",
      },
      {
        title: "Build & Coordinate",
        copy: "Supervise field activity, resolve coordination questions through the proper team, and maintain the agreed project controls.",
      },
      {
        title: "Report & Decide",
        copy: "Communicate progress, schedule movement, cost information, quality items, risks, and decisions in the format defined for the project.",
      },
      {
        title: "Close & Turn Over",
        copy: "Complete punch work, coordinate final inspections, and organize the documents and training required by the agreement.",
      },
    ],
    fitTitle: "Commercial work that benefits from clear coordination.",
    fitCopy:
      "General contracting can support a range of commercial assignments. The right approach depends on the design status, delivery method, site, schedule, and owner priorities.",
    fitItems: [
      {
        title: "Ground-Up Projects",
        copy: "New commercial buildings and site improvements that require coordinated horizontal and vertical construction.",
      },
      {
        title: "Interior Build-Outs",
        copy: "Tenant improvements, renovations, and occupied-space work with building and operational constraints.",
      },
      {
        title: "Phased Developments",
        copy: "Multi-building or multi-phase work where logistics, inspections, turnover, and stakeholder communication must stay aligned.",
      },
    ],
    faqs: [
      {
        question: "What does a commercial general contractor manage?",
        answer:
          "The contracted scope may include field supervision, trade coordination, scheduling, procurement administration, safety coordination, quality control, inspections, change documentation, punch, and closeout. The executed agreement defines Trinity's exact responsibilities on each project.",
      },
      {
        question: "When should a general contractor join the project?",
        answer:
          "Early involvement can help the team review logistics, constructability, budget, schedule, and procurement before construction. Trinity can also evaluate projects with completed documents when that matches the owner's procurement plan.",
      },
      {
        question: "How are construction changes handled?",
        answer:
          "Potential changes should be identified, priced, documented, reviewed, and authorized according to the contract before they are incorporated, except where immediate action is required for safety or another defined emergency condition.",
      },
      {
        question: "Where does Trinity Build Co. provide commercial construction services?",
        answer:
          "Trinity Build Co. is based in Scottsdale and serves the Phoenix market and commercial projects across Arizona, subject to project fit and availability.",
      },
    ],
    relatedSlugs: ["preconstruction", "ground-up-commercial-construction", "tenant-improvements", "construction-management"],
  },
  {
    slug: "design-build",
    id: "design-build",
    title: "Design-Build",
    shortTitle: "Design-Build",
    seoTitle: "Design-Build Contractor Phoenix, AZ | Trinity Build Co.",
    seoDescription:
      "Design-build construction in Phoenix and across Arizona, coordinating design, constructability, budget, schedule, procurement, and field delivery.",
    hubCopy:
      "A coordinated design and construction workflow that brings scope, constructability, budget, schedule, and procurement decisions together early.",
    hubBullets: [
      "Early builder and design-team alignment",
      "Design-to-budget coordination",
      "Integrated planning through construction",
    ],
    eyebrow: "Design-Build Construction",
    lede:
      "Connect design decisions with construction planning, pricing, procurement, and field execution from the beginning.",
    heroImage: designBuildHero,
    heroAlt: "Preconstruction meeting",
    heroPosition: "center 48%",
    introTitle: "Design and construction moving together.",
    introParagraphs: [
      "Design-build is a collaborative delivery approach that brings construction input into the design process. Instead of waiting for a completed set of documents to evaluate cost, logistics, and sequencing, the project team can examine those considerations as the design develops.",
      "Trinity Build Co. coordinates the construction side of that process with the owner and design professionals. The project agreement establishes the contractual structure and professional responsibilities, while the working team aligns scope, constructability, budget, schedule, procurement, and authorization milestones.",
    ],
    capabilitiesTitle: "An integrated design-build workflow.",
    capabilities: [
      {
        title: "Team & Role Alignment",
        copy: "Define decision authority, design responsibilities, construction responsibilities, deliverables, and communication paths for the selected structure.",
      },
      {
        title: "Constructability Input",
        copy: "Review developing design information for access, sequencing, coordination, material, system, and field-execution considerations.",
      },
      {
        title: "Design-to-Budget Reviews",
        copy: "Update budgets as information develops and identify assumptions, allowances, exclusions, and decisions affecting cost.",
      },
      {
        title: "Schedule & Procurement",
        copy: "Connect design milestones, approvals, permitting, long-lead decisions, procurement, and construction sequencing in one working plan.",
      },
      {
        title: "Construction Transition",
        copy: "Confirm the authorized scope, design status, price basis, permits, procurement priorities, and open decisions before field work advances.",
      },
    ],
    supportImage: designBuildSupport,
    supportAlt: "Commercial facade installation",
    supportPosition: "center 52%",
    supportEyebrow: "Coordinated Decisions",
    supportTitle: "Buildability belongs in the design conversation.",
    supportCopy:
      "When cost, material availability, access, sequencing, and construction methods are discussed while design choices are still developing, the owner can compare options with more complete information.",
    processTitle: "A coordinated path from concept to construction.",
    processCopy:
      "Design-build does not remove the need for decisions, approvals, or professional responsibilities. It creates a framework for addressing them through an aligned team and a connected set of milestones.",
    processItems: [
      {
        title: "Define",
        copy: "Document the owner's goals, program, constraints, delivery structure, decision authority, and required professional services.",
      },
      {
        title: "Align",
        copy: "Establish the design and construction team, responsibilities, communication plan, milestones, and available project information.",
      },
      {
        title: "Develop Together",
        copy: "Coordinate design, constructability, budgets, schedules, procurement, approvals, and alternatives through agreed milestones.",
      },
      {
        title: "Authorize",
        copy: "Confirm the scope, design status, price basis, schedule, permits, and open decisions required to proceed under the agreement.",
      },
      {
        title: "Build & Close",
        copy: "Deliver the authorized work with the field controls, communication, documentation, punch, and turnover required by the project.",
      },
    ],
    fitTitle: "Projects that benefit from earlier collaboration.",
    fitCopy:
      "Design-build can be useful when owners want design and construction considerations evaluated through one coordinated workflow. The appropriate contract structure should be selected with the owner's legal and professional advisors.",
    fitItems: [
      {
        title: "Schedule-Sensitive Work",
        copy: "Projects where design packages, permitting, procurement, and construction sequencing need to be considered together.",
      },
      {
        title: "Budget-Led Development",
        copy: "Projects that require recurring cost feedback as the design moves from concepts toward construction documents.",
      },
      {
        title: "Complex Coordination",
        copy: "Work where system choices, logistics, existing conditions, or stakeholder requirements benefit from early builder input.",
      },
    ],
    faqs: [
      {
        question: "What is design-build construction?",
        answer:
          "Design-build coordinates design and construction through an integrated delivery structure. The exact contractual model varies, but the goal is to connect design development with constructability, cost, schedule, procurement, and field-planning input earlier.",
      },
      {
        question: "Who contracts with the architect and engineers?",
        answer:
          "That depends on the selected design-build structure and project agreement. Design professionals may contract through the design-builder or under another approved arrangement. The contracts must clearly preserve each professional's responsibilities and the owner's decision rights.",
      },
      {
        question: "Does design-build guarantee the budget or completion date?",
        answer:
          "No delivery method eliminates every change or guarantees an outcome. Coordinated planning can improve the information used for decisions, but results still depend on design development, approvals, market conditions, procurement, site conditions, and the executed contract.",
      },
      {
        question: "When should the design-build team become involved?",
        answer:
          "The team is generally most useful before major design, system, budget, and procurement decisions are fixed. Trinity can review the project's current stage and identify an appropriate next planning step.",
      },
    ],
    relatedSlugs: ["preconstruction", "budget-development", "value-engineering", "commercial-general-contracting"],
  },
  {
    slug: "construction-management",
    id: "construction-management",
    title: "Construction Management",
    shortTitle: "Construction Management",
    seoTitle: "Construction Management Phoenix, AZ | Trinity Build Co.",
    seoDescription:
      "Commercial construction management in Phoenix and across Arizona, supporting planning, procurement, cost, schedule, coordination, quality, and closeout.",
    hubCopy:
      "Owner-focused project leadership that organizes planning, procurement, reporting, coordination, quality, and closeout around a defined assignment.",
    hubBullets: [
      "Clear roles, reporting, and decision paths",
      "Procurement and bid-review support",
      "Visible cost, schedule, quality, and risk information",
    ],
    eyebrow: "Commercial Construction Management",
    lede:
      "Structured project leadership for owners who need clear information, coordinated stakeholders, and defined accountability.",
    heroImage: constructionManagementHero,
    heroAlt: "Mechanical room inspection",
    heroPosition: "center 50%",
    introTitle: "Management built around the owner's assignment.",
    introParagraphs: [
      "Construction management can take different forms. An owner may need early planning and procurement support, ongoing project controls, field coordination, or a broader management role through closeout. The contract must define authority, responsibilities, reporting, and the relationship between the owner, designers, contractors, and trade partners.",
      "Trinity Build Co. structures its construction-management work around those defined responsibilities. The focus is to keep current information organized, surface decisions and risks, coordinate the right parties, and help ownership maintain visibility into the work.",
    ],
    capabilitiesTitle: "Management services shaped to the assignment.",
    capabilities: [
      {
        title: "Management Planning",
        copy: "Establish roles, authority, reporting, meeting cadence, decision paths, project controls, and success criteria for the assignment.",
      },
      {
        title: "Procurement Support",
        copy: "Support trade outreach, qualification, bid comparison, scope review, and recommendations as required by the selected delivery model.",
      },
      {
        title: "Cost & Schedule Visibility",
        copy: "Maintain the agreed budget and milestone information, document movement, and identify items requiring owner or team action.",
      },
      {
        title: "Stakeholder Coordination",
        copy: "Connect owners, designers, consultants, contractors, property teams, inspectors, and other participants through clear responsibilities.",
      },
      {
        title: "Quality & Closeout Oversight",
        copy: "Monitor the quality, punch, documentation, and turnover responsibilities included within Trinity's contracted scope.",
      },
    ],
    supportImage: constructionManagementSupport,
    supportAlt: "Construction vehicles and tool trailer",
    supportPosition: "center 50%",
    supportEyebrow: "Owner Visibility",
    supportTitle: "Useful information, delivered in time to act.",
    supportCopy:
      "A management report should do more than describe the past. Current cost, schedule, procurement, decision, quality, and risk information helps ownership understand what has changed and what needs attention next.",
    processTitle: "Clear controls from assignment through closeout.",
    processCopy:
      "The management plan should match the delivery method and the authority granted by the owner. Trinity's exact responsibilities are documented before services begin and updated when the assignment changes.",
    processItems: [
      {
        title: "Establish the Assignment",
        copy: "Define the delivery model, scope, authority, reporting, stakeholders, available information, and owner priorities.",
      },
      {
        title: "Develop the Management Plan",
        copy: "Organize budget, schedule, procurement, logistics, communication, decision, quality, and risk processes.",
      },
      {
        title: "Support Procurement",
        copy: "Evaluate qualifications, scopes, pricing, exclusions, and recommendations according to the owner's approved procurement process.",
      },
      {
        title: "Coordinate Delivery",
        copy: "Monitor the contracted cost, schedule, quality, decisions, action items, and active risks while coordinating responsible parties.",
      },
      {
        title: "Close & Turn Over",
        copy: "Track punch, documentation, training, acceptance, and transition requirements included within the assignment.",
      },
    ],
    fitTitle: "When an owner needs a dedicated management layer.",
    fitCopy:
      "Construction management is most effective when the owner clearly defines the decisions, information, and oversight it needs. The model can then be tailored to the project rather than forcing every assignment into the same structure.",
    fitItems: [
      {
        title: "Multi-Party Projects",
        copy: "Assignments with several contracts, consultants, stakeholders, phases, or operational requirements that need coordinated oversight.",
      },
      {
        title: "Early Owner Support",
        copy: "Projects needing planning, budget, schedule, procurement, or team-formation assistance before field work begins.",
      },
      {
        title: "Reporting-Intensive Work",
        copy: "Projects where ownership requires a consistent view of cost, schedule, decisions, quality, procurement, and risk.",
      },
    ],
    faqs: [
      {
        question: "How is construction management different from general contracting?",
        answer:
          "A general contractor typically contracts to deliver the construction work. Construction management can include planning, procurement, coordination, controls, and owner support under several possible contractual models. The agreement defines whether Trinity serves as constructor, manager, advisor, or a combination permitted by the project structure.",
      },
      {
        question: "Does the construction manager make decisions for the owner?",
        answer:
          "Only within authority explicitly granted by the agreement. Trinity can organize information, coordinate reviews, and provide recommendations, while owner, designer, and contractor decision rights remain defined by their contracts.",
      },
      {
        question: "What information can construction-management reporting include?",
        answer:
          "Depending on scope, reporting may address budget status, schedule, procurement, decisions, change items, quality, safety coordination, risks, meeting actions, and closeout. The format and cadence are established for the project.",
      },
      {
        question: "When should an owner engage a construction manager?",
        answer:
          "Engaging the manager during early planning allows more support with team structure, delivery strategy, budgets, schedules, and procurement. Trinity can also enter later when the required responsibilities and available project information are clearly defined.",
      },
    ],
    relatedSlugs: ["project-planning", "preconstruction", "budget-development", "commercial-general-contracting"],
  },
  {
    slug: "preconstruction",
    id: "preconstruction-services",
    title: "Preconstruction Services",
    shortTitle: "Preconstruction",
    seoTitle: "Commercial Preconstruction Phoenix, AZ | Trinity Build Co.",
    seoDescription:
      "Commercial preconstruction in Phoenix and Arizona, including constructability, budgets, schedules, logistics, procurement planning, and permitting support.",
    hubCopy:
      "Early planning that connects scope, constructability, budget, schedule, logistics, procurement, permitting, and project decisions before field work.",
    hubBullets: [
      "Feasibility, logistics, and constructability reviews",
      "Budget development and reconciliation",
      "Milestone, procurement, and permitting planning",
    ],
    eyebrow: "Commercial Preconstruction",
    lede:
      "Build a clearer scope, budget, schedule, and execution plan while the project still has room to evaluate options.",
    heroImage: preconstructionHero,
    heroAlt: "Hardhat resting on construction plans",
    heroPosition: "center 46%",
    introTitle: "Make the important decisions before mobilization.",
    introParagraphs: [
      "Preconstruction turns early goals and developing documents into a working construction plan. It gives the owner, design team, and builder a structured way to review scope, logistics, constructability, cost, schedule, procurement, permitting, and unresolved decisions before those items reach the field.",
      "Trinity Build Co. tailors the preconstruction scope to the project's stage and delivery method. Available information is reviewed, assumptions are documented, and each update is intended to improve decision quality—not promise that later market, approval, design, or site changes cannot occur.",
    ],
    capabilitiesTitle: "Preconstruction focused on buildable information.",
    capabilities: [
      {
        title: "Feasibility & Logistics",
        copy: "Review available site information, access, staging, utilities, phasing, operational constraints, and jurisdictional considerations.",
      },
      {
        title: "Constructability Review",
        copy: "Evaluate developing documents for coordination questions, sequencing needs, material interfaces, access, and practical field considerations.",
      },
      {
        title: "Budget Development",
        copy: "Prepare and reconcile estimates using the information available at each milestone, with assumptions, allowances, and exclusions identified.",
      },
      {
        title: "Schedule & Procurement",
        copy: "Develop realistic milestones and identify approvals, design decisions, materials, systems, and packages that may affect timing.",
      },
      {
        title: "Permitting & Transition Support",
        copy: "Coordinate the construction-side information needed for permitting and prepare a defined handoff from planning into authorized field work.",
      },
    ],
    supportImage: preconstructionSupport,
    supportAlt: "Concrete pour in progress",
    supportPosition: "center 50%",
    supportEyebrow: "Plan Before the Pour",
    supportTitle: "Field performance starts with decisions made on paper.",
    supportCopy:
      "A useful preconstruction plan makes assumptions visible, connects design milestones to construction needs, and identifies decisions before they become avoidable field disruption.",
    processTitle: "From early information to a construction-ready plan.",
    processCopy:
      "The level of detail grows with the design. Early studies may establish broad feasibility and budget direction, while later milestones support detailed pricing, procurement, logistics, and turnover into construction.",
    processItems: [
      {
        title: "Discover",
        copy: "Clarify the owner's goals, constraints, available information, priorities, delivery method, and decision process.",
      },
      {
        title: "Review",
        copy: "Study site and design information for scope gaps, logistics, constructability questions, approvals, and key dependencies.",
      },
      {
        title: "Develop",
        copy: "Build the working budget, milestone schedule, procurement priorities, logistics approach, and documented assumptions.",
      },
      {
        title: "Reconcile",
        copy: "Update the plan as design information and decisions develop, showing material changes and available alternatives.",
      },
      {
        title: "Prepare to Build",
        copy: "Confirm the authorized scope, design and permit status, price basis, schedule, procurement needs, and open decisions.",
      },
    ],
    fitTitle: "Early planning for commercial project decisions.",
    fitCopy:
      "Preconstruction can be scaled to the information available. It is valuable for new developments, renovations, build-outs, and phased work whenever cost, schedule, logistics, and approvals need to be connected before construction.",
    fitItems: [
      {
        title: "Concept & Feasibility",
        copy: "Early projects that need high-level construction input before the owner advances major design or investment decisions.",
      },
      {
        title: "Design Development",
        copy: "Projects that need recurring constructability, budget, schedule, logistics, and procurement feedback as documents progress.",
      },
      {
        title: "Construction Readiness",
        copy: "Projects approaching mobilization that need final coordination of scope, permits, price basis, schedule, procurement, and responsibilities.",
      },
    ],
    faqs: [
      {
        question: "What is included in commercial preconstruction?",
        answer:
          "The agreed scope may include feasibility input, site logistics, constructability review, estimating, budget reconciliation, milestone scheduling, value analysis, procurement planning, permitting support, and preparation for construction. Deliverables are defined for each project.",
      },
      {
        question: "When should preconstruction begin?",
        answer:
          "Preconstruction is most useful while scope and design decisions can still be evaluated. It can begin with early concepts or later documents, but the services and level of certainty depend on the information available.",
      },
      {
        question: "Does a preconstruction budget guarantee the final project cost?",
        answer:
          "No. Early budgets are based on the design, quantities, assumptions, allowances, market information, and site conditions available at that time. They should be updated as the project develops and distinguished from any later contractual price.",
      },
      {
        question: "Can Trinity support permitting during preconstruction?",
        answer:
          "Trinity can coordinate construction-related permitting information and planning as defined in the project scope. The architect, engineers, owner, contractor, and jurisdiction retain the responsibilities assigned to them by law and contract.",
      },
    ],
    relatedSlugs: ["budget-development", "value-engineering", "project-planning", "design-build"],
  },
  {
    slug: "budget-development",
    id: "budget-development",
    title: "Budget Development",
    shortTitle: "Budget Development",
    seoTitle: "Construction Budget Development Phoenix | Trinity Build Co.",
    seoDescription:
      "Commercial construction budget development in Phoenix and Arizona, with documented scope, assumptions, allowances, options, and design-to-budget updates.",
    hubCopy:
      "Construction budgets developed from the available scope and reconciled as design, pricing, procurement, and owner decisions evolve.",
    hubBullets: [
      "Conceptual through detailed estimating",
      "Documented assumptions, allowances, and exclusions",
      "Design-to-budget reconciliation",
    ],
    eyebrow: "Construction Budget Development",
    lede:
      "Turn developing project information into a documented construction budget owners and design teams can use for decisions.",
    heroImage: budgetHero,
    heroAlt: "Construction team reviewing plans",
    heroPosition: "center 46%",
    introTitle: "A budget should explain what is included.",
    introParagraphs: [
      "Construction budgets are most useful when the scope, basis, assumptions, allowances, exclusions, quantities, and timing are visible. A single total without that context makes it difficult to understand what changed or compare alternatives as the project develops.",
      "Trinity Build Co. develops budgets around the information available at each milestone. Estimates can begin at a conceptual level and become more detailed as drawings, specifications, site information, trade input, and owner decisions mature.",
    ],
    capabilitiesTitle: "Budget information built for decisions.",
    capabilities: [
      {
        title: "Basis & Scope Review",
        copy: "Identify the documents, narratives, quantities, site information, assumptions, allowances, exclusions, and date supporting the estimate.",
      },
      {
        title: "Conceptual Estimating",
        copy: "Develop early cost direction using the program, area, project type, systems, schedule, and comparable construction information available.",
      },
      {
        title: "Detailed Pricing",
        copy: "Organize quantities, scope packages, market input, general conditions, alternates, and project requirements as design information increases.",
      },
      {
        title: "Option & Allowance Tracking",
        copy: "Separate unresolved choices and incomplete information so the owner can see where decisions or further investigation may change cost.",
      },
      {
        title: "Budget Reconciliation",
        copy: "Compare milestones, explain material movement, and align scope, design, procurement, schedule, and available funds before authorization.",
      },
    ],
    supportImage: budgetSupport,
    supportAlt: "Work cap beside construction tools and building materials",
    supportPosition: "center 52%",
    supportEyebrow: "Transparent Basis",
    supportTitle: "The number matters. The reasoning matters too.",
    supportCopy:
      "A documented budget gives the team a shared reference for scope decisions, allowances, options, design changes, and market input instead of treating each estimate as an unexplained new total.",
    processTitle: "Develop, validate, and reconcile.",
    processCopy:
      "Budget detail should match design detail. Each estimate identifies its basis and level of development so an early planning figure is not mistaken for a later contractual price.",
    processItems: [
      {
        title: "Collect",
        copy: "Gather the current drawings, narratives, program, site information, schedule goals, finish expectations, and owner priorities.",
      },
      {
        title: "Define the Basis",
        copy: "Document included scope, assumptions, allowances, alternates, exclusions, quantities, escalation basis, and known constraints.",
      },
      {
        title: "Develop the Estimate",
        copy: "Apply the appropriate conceptual, systems, assembly, quantity, and market-pricing methods for the available information.",
      },
      {
        title: "Validate",
        copy: "Review high-impact scope, trade input, constructability, schedule, procurement, and options with the responsible project participants.",
      },
      {
        title: "Reconcile & Communicate",
        copy: "Compare the budget with prior milestones and available funds, then document decisions and next actions.",
      },
    ],
    fitTitle: "Budgeting matched to the project's stage.",
    fitCopy:
      "Owners need different information at concept, design development, procurement, and construction authorization. The estimate format and level of detail should respond to that decision point.",
    fitItems: [
      {
        title: "Early Feasibility",
        copy: "High-level cost direction to help evaluate a site, program, investment range, or initial project path.",
      },
      {
        title: "Design-to-Budget",
        copy: "Recurring estimates that show whether the developing scope remains aligned with the owner's available funds and priorities.",
      },
      {
        title: "Procurement & Authorization",
        copy: "Detailed scope and pricing information supporting bid review, alternates, final decisions, and the selected construction agreement.",
      },
    ],
    faqs: [
      {
        question: "What information is needed to prepare a construction budget?",
        answer:
          "Useful inputs include the project program, drawings or narratives, site information, finish and system expectations, schedule goals, delivery method, known constraints, and owner priorities. Early budgets can proceed with limited information when the resulting assumptions and uncertainty are clearly documented.",
      },
      {
        question: "Is a construction estimate the same as a contract price?",
        answer:
          "Not necessarily. An estimate is an opinion of probable construction cost based on stated information and assumptions. A contract price is established under the terms, scope, qualifications, allowances, and risk allocation of an executed agreement.",
      },
      {
        question: "How often should the budget be updated?",
        answer:
          "Updates should align with meaningful design, scope, procurement, schedule, or decision milestones. The right cadence depends on how quickly information is changing and what decisions the owner needs to make.",
      },
      {
        question: "Why did the budget change between design milestones?",
        answer:
          "Movement can result from added design detail, quantity changes, clarified scope, material or labor pricing, schedule changes, site information, allowances, alternates, procurement decisions, or corrected assumptions. Reconciliation should identify the material reasons rather than only present a new total.",
      },
    ],
    relatedSlugs: ["preconstruction", "value-engineering", "project-planning", "design-build"],
  },
  {
    slug: "value-engineering",
    id: "value-engineering",
    title: "Value Engineering",
    shortTitle: "Value Engineering",
    seoTitle: "Construction Value Engineering Phoenix | Trinity Build Co.",
    seoDescription:
      "Commercial construction value engineering in Phoenix and Arizona, comparing cost, schedule, quality, performance, lifecycle, and design implications.",
    hubCopy:
      "Documented construction alternatives evaluated for cost, schedule, quality, performance, lifecycle, procurement, and design implications.",
    hubBullets: [
      "Options tied to project priorities",
      "Cost and schedule impacts documented",
      "Owner and design-team decisions preserved",
    ],
    eyebrow: "Construction Value Engineering",
    lede:
      "Evaluate practical alternatives without reducing every project decision to the lowest initial cost.",
    heroImage: valueEngineeringHero,
    heroAlt: "Glass partition installation in an office buildout",
    heroPosition: "center 50%",
    introTitle: "Better value starts with the project's priorities.",
    introParagraphs: [
      "Value engineering is not simply cutting scope. A useful review begins with the owner's performance, design, operational, schedule, quality, and budget priorities, then compares alternatives against those goals.",
      "Trinity Build Co. helps the project team identify and document construction options as design and pricing develop. Architects, engineers, owners, and other responsible parties retain approval over design, performance, code, and professional decisions within their scope.",
    ],
    capabilitiesTitle: "Alternatives evaluated in context.",
    capabilities: [
      {
        title: "Priority Definition",
        copy: "Clarify the design intent, performance needs, operating goals, budget pressures, schedule requirements, and non-negotiable outcomes.",
      },
      {
        title: "Option Identification",
        copy: "Review systems, materials, details, sequencing, procurement, packaging, and scope for practical alternatives worth evaluating.",
      },
      {
        title: "Impact Comparison",
        copy: "Document probable cost, schedule, quality, maintenance, lifecycle, availability, and design implications using available information.",
      },
      {
        title: "Team Coordination",
        copy: "Route options through the owner and responsible design professionals so technical and design consequences are properly reviewed.",
      },
      {
        title: "Decision Documentation",
        copy: "Record selected, rejected, and pending options along with assumptions, required revisions, approvals, and budget updates.",
      },
    ],
    supportImage: valueEngineeringSupport,
    supportAlt: "Commercial warehouse loading dock",
    supportPosition: "center 54%",
    supportEyebrow: "Whole-Project Value",
    supportTitle: "First cost is only one part of the decision.",
    supportCopy:
      "Material availability, installation sequence, energy use, maintenance, durability, replacement, schedule, and user needs can matter as much as the initial price difference between options.",
    processTitle: "A documented review, not a last-minute cut list.",
    processCopy:
      "The strongest value work happens while the team can study options without creating avoidable redesign or procurement disruption. Late reviews can still help, but the available choices may be narrower.",
    processItems: [
      {
        title: "Establish the Baseline",
        copy: "Confirm the current scope, design intent, budget position, schedule, performance criteria, and reason for the review.",
      },
      {
        title: "Prioritize",
        copy: "Focus attention on high-impact systems, materials, details, packages, procurement constraints, and owner decisions.",
      },
      {
        title: "Develop Options",
        copy: "Describe each alternative clearly enough for pricing, design, performance, and schedule review by the appropriate parties.",
      },
      {
        title: "Evaluate",
        copy: "Compare probable benefits, tradeoffs, risks, redesign needs, lead times, lifecycle considerations, and decision deadlines.",
      },
      {
        title: "Approve & Incorporate",
        copy: "Document the selected direction, obtain required design and owner approvals, and reconcile affected budget and schedule information.",
      },
    ],
    fitTitle: "Value reviews tied to real project decisions.",
    fitCopy:
      "Value engineering can support early planning, design reconciliation, procurement, and targeted problem solving. The goal is to preserve the outcomes that matter while improving how the project uses its resources.",
    fitItems: [
      {
        title: "Budget Alignment",
        copy: "Projects where the developing design and available funds need to be reconciled through prioritized, owner-approved options.",
      },
      {
        title: "Procurement Constraints",
        copy: "Projects facing long lead times, availability concerns, sequencing issues, or package strategies that warrant alternatives.",
      },
      {
        title: "Lifecycle Decisions",
        copy: "Projects comparing systems or materials where durability, maintenance, energy, replacement, and user needs affect value.",
      },
    ],
    faqs: [
      {
        question: "Is value engineering the same as cost cutting?",
        answer:
          "No. Cost cutting focuses primarily on reducing initial expense. Value engineering compares alternatives against the project's required function, quality, design, schedule, performance, operating, and budget priorities.",
      },
      {
        question: "Who approves a value-engineering change?",
        answer:
          "The owner approves project-direction and cost decisions, while architects, engineers, and other professionals review design, code, performance, and technical implications within their responsibilities. Contract requirements determine the formal approval path.",
      },
      {
        question: "Can value engineering improve the schedule?",
        answer:
          "Some options may reduce lead time, simplify sequencing, or improve availability, while others may require redesign or create new dependencies. Schedule effects should be reviewed and documented for each option rather than assumed.",
      },
      {
        question: "When should value engineering happen?",
        answer:
          "It is generally most effective during planning and design, before documents and procurement are fixed. Targeted reviews can also occur later when market, availability, site, or budget conditions change.",
      },
    ],
    relatedSlugs: ["budget-development", "preconstruction", "project-planning", "design-build"],
  },
  {
    slug: "project-planning",
    id: "project-planning",
    title: "Project Planning",
    shortTitle: "Project Planning",
    seoTitle: "Commercial Construction Planning Phoenix | Trinity Build Co.",
    seoDescription:
      "Commercial construction planning in Phoenix and Arizona, connecting milestones, logistics, procurement, responsibilities, decisions, and project risks.",
    hubCopy:
      "A coordinated construction roadmap connecting responsibilities, milestones, logistics, procurement, approvals, decisions, and known risks.",
    hubBullets: [
      "Milestones and dependencies mapped early",
      "Site logistics and phasing coordinated",
      "Decision and procurement needs made visible",
    ],
    eyebrow: "Commercial Project Planning",
    lede:
      "Create a practical roadmap for the people, information, approvals, procurement, logistics, and milestones required to build.",
    heroImage: planningHero,
    heroAlt: "Construction site entrance with perimeter fencing",
    heroPosition: "center 50%",
    introTitle: "A schedule is stronger when the full plan supports it.",
    introParagraphs: [
      "Dates alone do not create a construction plan. Each milestone depends on design information, owner decisions, permits, procurement, access, trade sequencing, inspections, utilities, site logistics, and the responsibilities assigned to the project team.",
      "Trinity Build Co. organizes those dependencies into a working roadmap. The plan is updated as the project changes so the team can understand current priorities, upcoming decisions, and the conditions affecting the next phase of work.",
    ],
    capabilitiesTitle: "Planning that connects the whole project.",
    capabilities: [
      {
        title: "Objectives & Responsibilities",
        copy: "Define project goals, key stakeholders, decision authority, delivery structure, required information, and assigned responsibilities.",
      },
      {
        title: "Milestone Scheduling",
        copy: "Map design, approvals, procurement, mobilization, construction, inspections, turnover, and owner milestones with their dependencies.",
      },
      {
        title: "Site Logistics & Phasing",
        copy: "Plan access, staging, deliveries, temporary conditions, occupied areas, work zones, sequencing, and phase transitions.",
      },
      {
        title: "Procurement Planning",
        copy: "Identify long-lead materials, systems, trade packages, decision dates, submittals, fabrication, delivery, and storage needs.",
      },
      {
        title: "Decision & Risk Tracking",
        copy: "Maintain visibility into assumptions, open decisions, approvals, constraints, potential impacts, and the responsible party for each next action.",
      },
    ],
    supportImage: planningSupport,
    supportAlt: "Construction safety huddle",
    supportPosition: "center 50%",
    supportEyebrow: "Shared Roadmap",
    supportTitle: "The next milestone should not be a surprise.",
    supportCopy:
      "A connected plan helps each participant see what information, decision, material, inspection, or preceding activity is needed before the next phase can move forward.",
    processTitle: "Plan, assign, update, and communicate.",
    processCopy:
      "Project planning is not a one-time document. The roadmap must reflect current design, approvals, procurement, site conditions, decisions, and actual progress as the assignment develops.",
    processItems: [
      {
        title: "Discover",
        copy: "Clarify goals, constraints, stakeholders, available information, target milestones, operations, and project-specific requirements.",
      },
      {
        title: "Map the Work",
        copy: "Connect design, permitting, procurement, logistics, construction, inspections, closeout, and occupancy dependencies.",
      },
      {
        title: "Assign Responsibility",
        copy: "Identify the owner, designer, contractor, consultant, trade, or agency responsible for each required action and decision.",
      },
      {
        title: "Track & Update",
        copy: "Compare current information and progress with the plan, then document material movement and its effect on upcoming work.",
      },
      {
        title: "Transition the Plan",
        copy: "Carry approved milestones, logistics, procurement, decisions, and controls into mobilization, field execution, and turnover.",
      },
    ],
    fitTitle: "Planning for projects with connected constraints.",
    fitCopy:
      "Every commercial project benefits from a clear roadmap, but planning becomes especially valuable when approvals, operations, phasing, access, long-lead items, or several stakeholders affect delivery.",
    fitItems: [
      {
        title: "Early Development",
        copy: "Projects needing an initial roadmap for design, decisions, permits, budgets, procurement, and construction milestones.",
      },
      {
        title: "Occupied & Phased Work",
        copy: "Projects where ongoing operations, tenant access, shutdowns, security, temporary conditions, or phased turnover shape the plan.",
      },
      {
        title: "Long-Lead Coordination",
        copy: "Projects where equipment, materials, utility work, design releases, submittals, or fabrication must be planned well before installation.",
      },
    ],
    faqs: [
      {
        question: "What does a commercial construction plan include?",
        answer:
          "Depending on the project, it may include scope and responsibility mapping, design and permit milestones, procurement, logistics, phasing, schedule dependencies, owner decisions, inspections, risk items, communication, turnover, and closeout requirements.",
      },
      {
        question: "When should project planning begin?",
        answer:
          "Planning should begin as soon as the owner has enough information to define goals and constraints. The plan can start at a high level and gain detail as design, approvals, team roles, and procurement develop.",
      },
      {
        question: "How are permits reflected in the project plan?",
        answer:
          "The plan can identify required submissions, responsible parties, review periods, comments, resubmittals, fees, inspections, and dependencies. Jurisdictional timing is an external factor and should not be treated as guaranteed.",
      },
      {
        question: "How often is the project plan updated?",
        answer:
          "The appropriate cadence depends on the project phase and rate of change. Updates should occur often enough to reflect material design, approval, procurement, site, decision, and progress information before it affects the team's next actions.",
      },
    ],
    relatedSlugs: ["preconstruction", "budget-development", "construction-management", "commercial-general-contracting"],
  },
  {
    slug: "ground-up-commercial-construction",
    id: "ground-up-commercial-construction",
    title: "Ground-Up Commercial Construction",
    shortTitle: "Ground-Up Construction",
    seoTitle: "Ground-Up Commercial Construction Phoenix | Trinity Build Co.",
    seoDescription:
      "Ground-up commercial construction in Phoenix and across Arizona, coordinating sitework, structure, enclosure, building systems, interiors, and turnover.",
    hubCopy:
      "New commercial construction coordinated from site preparation and structure through building systems, interiors, inspections, and turnover.",
    hubBullets: [
      "Sitework through shell and interiors",
      "Coordinated trade and inspection sequencing",
      "Structured quality, punch, and turnover",
    ],
    eyebrow: "Ground-Up Commercial Construction",
    lede:
      "Coordinate the site, structure, enclosure, building systems, interiors, inspections, and turnover as one connected delivery plan.",
    heroImage: groundUpHero,
    heroAlt: "Tilt-up warehouse construction site",
    heroPosition: "center 52%",
    introTitle: "Build the sequence from the ground up.",
    introParagraphs: [
      "A new commercial building depends on more than vertical construction. Civil work, utilities, access, temporary conditions, foundations, structure, enclosure, building systems, interiors, life safety, inspections, and owner turnover must progress in the right order.",
      "Trinity Build Co. organizes that work around the approved documents, project agreement, site conditions, and required milestones. Early planning connects procurement and jurisdictional needs with field sequencing so dependencies are visible before each phase begins.",
    ],
    capabilitiesTitle: "Connected delivery from site to occupancy.",
    capabilities: [
      {
        title: "Preconstruction & Mobilization",
        copy: "Confirm the construction scope, permit status, logistics, procurement priorities, controls, responsibilities, and site-readiness requirements.",
      },
      {
        title: "Site & Infrastructure",
        copy: "Coordinate access, earthwork, drainage, utilities, civil improvements, foundations, temporary conditions, and jurisdictional inspections.",
      },
      {
        title: "Structure & Enclosure",
        copy: "Sequence structural systems, roofing, exterior walls, openings, waterproofing, and weather-tightness around the project design.",
      },
      {
        title: "Systems & Interiors",
        copy: "Coordinate MEP, fire protection, life safety, controls, equipment, ceilings, finishes, specialties, testing, and inspections.",
      },
      {
        title: "Commissioning & Turnover",
        copy: "Organize startup, testing, punch, final approvals, training, documentation, warranties, and owner acceptance required by the agreement.",
      },
    ],
    supportImage: groundUpSupport,
    supportAlt: "Commercial office construction site",
    supportPosition: "center 50%",
    supportEyebrow: "Phase by Phase",
    supportTitle: "Every building milestone depends on what came before it.",
    supportCopy:
      "Site access, underground work, structure, dry-in, permanent power, equipment, inspections, finishes, and turnover are connected. The schedule must make those dependencies visible across every trade and stakeholder.",
    processTitle: "A practical path from site readiness to turnover.",
    processCopy:
      "Ground-up work is adjusted to the building type, systems, jurisdiction, site, delivery method, and owner milestones. The field plan stays tied to current documents and approved changes throughout construction.",
    processItems: [
      {
        title: "Prepare",
        copy: "Confirm design and permit status, site control, logistics, procurement, trade responsibilities, utilities, safety planning, and mobilization needs.",
      },
      {
        title: "Establish the Site",
        copy: "Coordinate access, temporary controls, earthwork, underground systems, civil improvements, foundations, and early inspections.",
      },
      {
        title: "Build the Structure",
        copy: "Sequence the structural frame, enclosure, roofing, openings, and weather protection with required quality controls.",
      },
      {
        title: "Complete Systems & Interiors",
        copy: "Coordinate building systems, equipment, inspections, finishes, specialties, startup, and owner-furnished requirements.",
      },
      {
        title: "Turn Over",
        copy: "Complete punch, testing, approvals, training, documents, warranties, and transition activities included in the project scope.",
      },
    ],
    fitTitle: "New commercial construction across Arizona.",
    fitCopy:
      "Trinity evaluates each opportunity based on project type, location, documents, schedule, procurement, team fit, and availability. Early engagement allows more time to coordinate site and long-lead considerations.",
    fitItems: [
      {
        title: "Standalone Buildings",
        copy: "New office, retail, medical, industrial, worship, restaurant, and other commercial facilities with coordinated site and building scopes.",
      },
      {
        title: "Multi-Building Work",
        copy: "Developments where horizontal improvements, building starts, amenities, inspections, and phased turnover must operate as one program.",
      },
      {
        title: "Shell & Build-Out",
        copy: "Projects that combine core-and-shell construction with coordinated interior improvements, equipment, owner needs, or tenant requirements.",
      },
    ],
    faqs: [
      {
        question: "What is included in ground-up commercial construction?",
        answer:
          "The contracted work may include site preparation, civil and utility coordination, foundations, structure, enclosure, building systems, interiors, equipment coordination, inspections, testing, punch, and closeout. The drawings and agreement define the exact scope.",
      },
      {
        question: "Does Trinity coordinate sitework and utilities?",
        answer:
          "Trinity can coordinate the site and utility construction included in its agreement, along with responsible civil professionals, utility providers, trade partners, inspectors, and the owner. Off-site or provider-controlled work remains subject to separate requirements and schedules.",
      },
      {
        question: "How long does a ground-up project take?",
        answer:
          "Duration depends on design and permit status, site conditions, building size and systems, procurement, utility work, jurisdictional reviews, market conditions, weather, owner decisions, and the selected delivery plan. A project-specific schedule is developed from those facts.",
      },
      {
        question: "When should Trinity become involved?",
        answer:
          "Early involvement creates more opportunity to review site logistics, constructability, budgets, schedules, permitting, utilities, and long-lead procurement before the construction sequence is fixed.",
      },
    ],
    relatedSlugs: ["commercial-general-contracting", "preconstruction", "project-planning", "budget-development"],
  },
  {
    slug: "tenant-improvements",
    id: "tenant-improvements",
    title: "Tenant Improvements",
    shortTitle: "Tenant Improvements",
    seoTitle: "Tenant Improvement Contractor Phoenix | Trinity Build Co.",
    seoDescription:
      "Commercial tenant improvements in Phoenix and Arizona, coordinating existing conditions, landlords, phasing, interiors, inspections, and turnover.",
    hubCopy:
      "Commercial interior build-outs and renovations planned around existing conditions, approvals, building rules, operations, inspections, and turnover.",
    hubBullets: [
      "Existing-condition and scope coordination",
      "Landlord, property, and permit planning",
      "Occupied-space and after-hours options where appropriate",
    ],
    eyebrow: "Commercial Tenant Improvements",
    lede:
      "Plan and deliver commercial build-outs around existing conditions, building requirements, operational needs, and the details of turnover.",
    heroImage: tenantImprovementHero,
    heroAlt: "Walkthrough inside a tenant-improvement space",
    heroPosition: "center 50%",
    introTitle: "Interior construction shaped by the space around it.",
    introParagraphs: [
      "Tenant improvements combine new construction requirements with an existing building, lease conditions, landlord criteria, property rules, operations, access, utilities, life-safety systems, inspections, and unknown conditions. Those constraints should be understood before the field sequence is finalized.",
      "Trinity Build Co. supports commercial interior build-outs from planning and budgeting through construction and turnover. The project-specific plan defines responsibilities for design, permitting, landlord approvals, owner-furnished items, shutdowns, after-hours work, and closeout.",
    ],
    capabilitiesTitle: "Build-out services coordinated to the space.",
    capabilities: [
      {
        title: "Existing-Condition Review",
        copy: "Review available documents and visible conditions, identify investigation needs, and document assumptions where concealed information remains unknown.",
      },
      {
        title: "Landlord & Property Coordination",
        copy: "Plan around building criteria, access, protection, deliveries, shutdowns, security, inspections, and approval responsibilities.",
      },
      {
        title: "Budget, Schedule & Phasing",
        copy: "Connect the build-out scope with allowances, long-lead items, operational constraints, decision dates, and practical milestone sequencing.",
      },
      {
        title: "Interior Construction",
        copy: "Coordinate demolition, framing, MEP changes, life safety, ceilings, finishes, specialties, equipment, testing, and quality controls.",
      },
      {
        title: "Punch & Turnover",
        copy: "Complete corrections, final inspections, cleaning, training, documents, keys, warranties, and acceptance requirements included in the agreement.",
      },
    ],
    supportImage: tenantImprovementSupport,
    supportAlt: "Medical tenant-improvement framing",
    supportPosition: "center 50%",
    supportEyebrow: "Plan the Constraints",
    supportTitle: "The building keeps shaping the project after the lease is signed.",
    supportCopy:
      "Existing systems, neighboring occupants, property rules, access, shutdowns, inspections, and concealed conditions can affect the build-out. A realistic plan accounts for them before they reach the field.",
    processTitle: "From existing space to ready-for-use interior.",
    processCopy:
      "Each build-out is planned around its design, permit status, lease and landlord requirements, operational needs, site conditions, procurement, and turnover criteria.",
    processItems: [
      {
        title: "Assess",
        copy: "Review the space, available documents, building criteria, intended use, known conditions, operational needs, and investigation requirements.",
      },
      {
        title: "Align",
        copy: "Confirm owner, tenant, landlord, property, designer, permit, utility, shutdown, access, and approval responsibilities.",
      },
      {
        title: "Plan",
        copy: "Develop budget, schedule, phasing, logistics, protection, procurement, decision, inspection, and turnover requirements.",
      },
      {
        title: "Build",
        copy: "Coordinate field activity, building operations, trade sequencing, safety, quality, inspections, changes, and current decisions.",
      },
      {
        title: "Turn Over",
        copy: "Complete punch, final approvals, cleaning, documentation, training, and transition items required for use of the space.",
      },
    ],
    fitTitle: "Commercial interiors for changing business needs.",
    fitCopy:
      "Tenant-improvement planning should reflect how the space will be used and how construction will affect the building and its occupants. Trinity evaluates each project based on scope, location, schedule, constraints, and team fit.",
    fitItems: [
      {
        title: "New Tenant Build-Outs",
        copy: "Interior construction that turns an existing shell or suite into a space aligned with the tenant's approved use and design.",
      },
      {
        title: "Renovations & Reconfigurations",
        copy: "Commercial spaces requiring demolition, layout changes, system modifications, finishes, equipment, and updated inspections.",
      },
      {
        title: "Occupied-Space Work",
        copy: "Phased or after-hours construction where access, noise, dust, safety, shutdowns, security, and communication require added planning.",
      },
    ],
    faqs: [
      {
        question: "What is a commercial tenant improvement?",
        answer:
          "A tenant improvement is construction that adapts an existing commercial space for an approved tenant or owner use. It can include demolition, partitions, ceilings, finishes, building-system changes, life-safety work, equipment coordination, inspections, and closeout.",
      },
      {
        question: "Can Trinity work in an occupied building or after hours?",
        answer:
          "Occupied-space and after-hours work can be planned when appropriate for the project. The plan should define access, noise, dust, shutdowns, protection, security, safety, communication, premium-time cost, and building requirements before work begins.",
      },
      {
        question: "Who coordinates landlord and property-manager approvals?",
        answer:
          "Trinity can support or manage defined coordination tasks, but the lease, building requirements, design contracts, permit process, and construction agreement must identify who prepares, submits, approves, schedules, and pays for each item.",
      },
      {
        question: "What affects a tenant-improvement schedule?",
        answer:
          "Key factors include design and permit status, existing-condition investigation, landlord approvals, building access, long-lead materials, utility or shutdown coordination, inspections, owner decisions, concealed conditions, and turnover requirements.",
      },
    ],
    relatedSlugs: ["commercial-general-contracting", "project-planning", "budget-development", "preconstruction"],
  },
];

export const serviceBySlug = new Map(servicePages.map((service) => [service.slug, service]));
