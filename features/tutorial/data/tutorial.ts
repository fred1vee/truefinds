export type TutorialIconKey =
  | "getting-started"
  | "registration"
  | "finding-products"
  | "checking-product"
  | "intermediaries"
  | "shipping"
  | "resale"
  | "faq";

export type TutorialContentBlock =
  | {
      text: string;
      type: "heading" | "paragraph" | "note";
    }
  | {
      items: readonly string[];
      type: "list";
    };

export type TutorialLesson = {
  content: readonly TutorialContentBlock[];
  id: string;
  summary: string;
  title: string;
};

export type TutorialSection = {
  description: string;
  icon: TutorialIconKey;
  id: string;
  lessons: readonly TutorialLesson[];
  title: string;
};

export type TutorialLessonReference = {
  href: string;
  lessonId: string;
  sectionId: string;
  title: string;
};

// PLACEHOLDER: All tutorial copy is temporary editorial content.
// Replace through the future admin-managed tutorial repository.
export const tutorialSections: readonly TutorialSection[] = [
  {
    description:
      "Understand the platform, tutorial structure, and a safe learning approach.",
    icon: "getting-started",
    id: "getting-started",
    lessons: [
      {
        content: [
          {
            text: "TrueFinds brings product research, practical tools, and introductory learning into one workspace. This lesson is a short orientation and does not replace detailed purchasing guidance.",
            type: "paragraph",
          },
          {
            items: [
              "Use Tutorial for foundational learning.",
              "Use Spreadsheet to review placeholder verified finds.",
              "Use Tools for estimates and simple calculations.",
            ],
            type: "list",
          },
          {
            text: "Editorial placeholder: expand this overview through the future admin panel.",
            type: "note",
          },
        ],
        id: "platform-overview",
        summary: "Learn what each main TrueFinds area is designed to support.",
        title: "Platform overview",
      },
      {
        content: [
          {
            text: "A structured learning path helps separate research, ordering preparation, shipping awareness, and resale basics into manageable topics.",
            type: "paragraph",
          },
          {
            text: "Move through lessons in order, mark completed topics, and return whenever a concept needs review.",
            type: "paragraph",
          },
          {
            text: "This placeholder lesson will later contain editable onboarding guidance.",
            type: "note",
          },
        ],
        id: "learning-path",
        summary: "See how to move through the tutorial without rushing decisions.",
        title: "Your learning path",
      },
    ],
    title: "Getting Started",
  },
  {
    description:
      "Review the basic preparation and concepts around creating an account.",
    icon: "registration",
    id: "pinduoduo-registration",
    lessons: [
      {
        content: [
          {
            text: "Before registration, prepare the information and device access you normally use for online accounts. Confirm that you can keep account details secure.",
            type: "paragraph",
          },
          {
            items: [
              "Use contact information you control.",
              "Keep verification details private.",
              "Review the current platform interface before continuing.",
            ],
            type: "list",
          },
          {
            text: "Exact registration screens may change and will be maintained through editable tutorial content.",
            type: "note",
          },
        ],
        id: "account-preparation",
        summary: "Prepare the basic information needed before registration.",
        title: "Account preparation",
      },
      {
        content: [
          {
            text: "Registration generally involves opening the official application, selecting the available account option, and following the current verification prompts.",
            type: "paragraph",
          },
          {
            text: "Pause if a screen or request is unclear. The production tutorial can later include reviewed screenshots and updated steps.",
            type: "paragraph",
          },
          {
            text: "Placeholder only: no live registration workflow is performed by TrueFinds.",
            type: "note",
          },
        ],
        id: "registration-overview",
        summary: "Understand the registration flow at a high level.",
        title: "Registration overview",
      },
    ],
    title: "Pinduoduo Registration",
  },
  {
    description:
      "Learn a simple research process for discovering and shortlisting products.",
    icon: "finding-products",
    id: "finding-products",
    lessons: [
      {
        content: [
          {
            text: "Product research starts with a clear idea of the type of item you want to study. Broad browsing can be useful, but a focused category makes comparison easier.",
            type: "paragraph",
          },
          {
            items: [
              "Start with one product category.",
              "Use clear keywords or visual references.",
              "Save candidates before making comparisons.",
            ],
            type: "list",
          },
          {
            text: "Search terminology and interface details will be editable from the future admin panel.",
            type: "note",
          },
        ],
        id: "search-basics",
        summary: "Start product research with focused categories and references.",
        title: "Search basics",
      },
      {
        content: [
          {
            text: "A shortlist is a small group of products kept for later review. It helps prevent an early result from becoming an immediate decision.",
            type: "paragraph",
          },
          {
            text: "Compare candidates using consistent criteria such as presentation, available information, and suitability for your intended audience.",
            type: "paragraph",
          },
          {
            text: "This lesson does not promise product quality, demand, or resale performance.",
            type: "note",
          },
        ],
        id: "shortlist-products",
        summary: "Organize promising candidates before checking them in detail.",
        title: "Building a shortlist",
      },
    ],
    title: "Finding Products",
  },
  {
    description:
      "Review product information carefully before considering an order.",
    icon: "checking-product",
    id: "checking-a-product",
    lessons: [
      {
        content: [
          {
            text: "A product page can include images, options, seller information, and other details. Review what is available and note anything that remains unclear.",
            type: "paragraph",
          },
          {
            items: [
              "Check that the selected option matches the intended item.",
              "Review available visual and written information.",
              "Record questions before moving forward.",
            ],
            type: "list",
          },
          {
            text: "Placeholder guidance only; detailed verification standards require later editorial review.",
            type: "note",
          },
        ],
        id: "review-product-page",
        summary: "Identify the main information areas on a product page.",
        title: "Reviewing a product page",
      },
      {
        content: [
          {
            text: "Comparing more than one option can reveal differences in presentation, selection, and available information.",
            type: "paragraph",
          },
          {
            text: "Use the same review criteria for each candidate so the comparison remains understandable.",
            type: "paragraph",
          },
          {
            text: "TrueFinds does not guarantee product quality or seller performance.",
            type: "note",
          },
        ],
        id: "compare-options",
        summary: "Compare shortlisted products using a consistent review process.",
        title: "Comparing options",
      },
    ],
    title: "Checking a Product",
  },
  {
    description:
      "Understand the basic role of an intermediary in the ordering process.",
    icon: "intermediaries",
    id: "intermediaries",
    lessons: [
      {
        content: [
          {
            text: "An intermediary may help coordinate parts of purchasing, warehouse handling, or delivery. Available services and responsibilities can differ.",
            type: "paragraph",
          },
          {
            items: [
              "Review the service scope.",
              "Confirm the information required for an order.",
              "Keep records of submitted details.",
            ],
            type: "list",
          },
          {
            text: "This lesson does not recommend or endorse a specific intermediary.",
            type: "note",
          },
        ],
        id: "intermediary-role",
        summary: "Learn what an intermediary may support and what to confirm.",
        title: "The intermediary role",
      },
      {
        content: [
          {
            text: "Order preparation means organizing the selected product, option, quantity, and other information requested by the chosen service.",
            type: "paragraph",
          },
          {
            text: "Review the information before submission and ask the provider about any unclear requirement.",
            type: "paragraph",
          },
          {
            text: "Provider-specific instructions will be maintained as editable content later.",
            type: "note",
          },
        ],
        id: "prepare-order",
        summary: "Organize product information before contacting a service.",
        title: "Preparing order information",
      },
    ],
    title: "Intermediaries",
  },
  {
    description:
      "Learn the basic terms behind weight, delivery estimates, and receiving.",
    icon: "shipping",
    id: "shipping",
    lessons: [
      {
        content: [
          {
            text: "Shipping estimates can depend on weight, service terms, handling, and other factors. Calculator results should be treated as planning estimates.",
            type: "paragraph",
          },
          {
            items: [
              "Confirm which weight measurement is used.",
              "Review the carrier's current tariff.",
              "Allow for differences between estimates and final charges.",
            ],
            type: "list",
          },
          {
            text: "TrueFinds does not guarantee delivery timing or final carrier pricing.",
            type: "note",
          },
        ],
        id: "shipping-basics",
        summary: "Understand how weight and tariffs relate to estimates.",
        title: "Shipping basics",
      },
      {
        content: [
          {
            text: "When a parcel becomes available, follow the current carrier or intermediary instructions for collection or delivery.",
            type: "paragraph",
          },
          {
            text: "Keep reference information available and review the parcel condition according to the service's process.",
            type: "paragraph",
          },
          {
            text: "Live carrier procedures and tracking instructions will be added after integration review.",
            type: "note",
          },
        ],
        id: "receive-parcel",
        summary: "Prepare for the basic parcel receiving stage.",
        title: "Receiving a parcel",
      },
    ],
    title: "Shipping",
  },
  {
    description:
      "Review foundational preparation for presenting and managing resale items.",
    icon: "resale",
    id: "resale-basics",
    lessons: [
      {
        content: [
          {
            text: "A basic resale listing should describe the item clearly and use accurate information available to the seller.",
            type: "paragraph",
          },
          {
            items: [
              "Use clear product presentation.",
              "Describe known characteristics accurately.",
              "Avoid promises that cannot be supported.",
            ],
            type: "list",
          },
          {
            text: "This tutorial does not provide legal, tax, or profit advice.",
            type: "note",
          },
        ],
        id: "prepare-listing",
        summary: "Understand the basic structure of a clear product listing.",
        title: "Preparing a listing",
      },
      {
        content: [
          {
            text: "Customer communication should be clear, respectful, and based on information you can confirm.",
            type: "paragraph",
          },
          {
            text: "Keep order details organized and set realistic expectations without guaranteeing outcomes outside your control.",
            type: "paragraph",
          },
          {
            text: "Detailed business policies require separate reviewed requirements.",
            type: "note",
          },
        ],
        id: "customer-basics",
        summary: "Review simple principles for organized customer communication.",
        title: "Customer basics",
      },
    ],
    title: "Resale Basics",
  },
  {
    description:
      "Review common introductory questions and where to continue learning.",
    icon: "faq",
    id: "faq",
    lessons: [
      {
        content: [
          {
            text: "The tutorial introduces a learning framework. Product availability, platform screens, service terms, rates, and processes can change over time.",
            type: "paragraph",
          },
          {
            items: [
              "Recheck current platform and carrier information.",
              "Use estimates only for planning.",
              "Ask the relevant provider when a requirement is unclear.",
            ],
            type: "list",
          },
          {
            text: "FAQ answers will be maintained through the future admin content workflow.",
            type: "note",
          },
        ],
        id: "common-questions",
        summary: "Review the limitations and purpose of the introductory content.",
        title: "Common questions",
      },
      {
        content: [
          {
            text: "After finishing the tutorial, revisit sections that need review and use the platform tools alongside current provider information.",
            type: "paragraph",
          },
          {
            text: "Continue with small, well-documented research steps rather than treating placeholder lessons as complete operational instructions.",
            type: "paragraph",
          },
          {
            text: "Additional reviewed lessons can be published later through the admin panel.",
            type: "note",
          },
        ],
        id: "next-steps",
        summary: "Plan what to review after completing the introductory path.",
        title: "Next steps",
      },
    ],
    title: "FAQ",
  },
];

export function getTutorialSection(sectionId: string) {
  return tutorialSections.find((section) => section.id === sectionId);
}

export function getTutorialLesson(sectionId: string, lessonId: string) {
  return getTutorialSection(sectionId)?.lessons.find(
    (lesson) => lesson.id === lessonId,
  );
}

export function getTutorialLessonKey(sectionId: string, lessonId: string) {
  return `${sectionId}/${lessonId}`;
}

export function getTutorialLessonReferences(): TutorialLessonReference[] {
  return tutorialSections.flatMap((section) =>
    section.lessons.map((lesson) => ({
      href: `/tutorial/${section.id}/${lesson.id}`,
      lessonId: lesson.id,
      sectionId: section.id,
      title: lesson.title,
    })),
  );
}

export function getTutorialLessonNavigation(
  sectionId: string,
  lessonId: string,
) {
  const references = getTutorialLessonReferences();
  const currentIndex = references.findIndex(
    (reference) =>
      reference.sectionId === sectionId && reference.lessonId === lessonId,
  );

  if (currentIndex < 0) {
    return null;
  }

  return {
    currentIndex,
    next: references[currentIndex + 1] ?? null,
    previous: references[currentIndex - 1] ?? null,
    totalLessons: references.length,
  };
}
