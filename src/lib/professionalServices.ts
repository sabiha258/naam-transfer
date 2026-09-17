export type ProfessionalServiceDetail = {
  name: string;
  summary: string;
  items: string[];
  icon: "home" | "wallet" | "paint" | "hammer";
  image: string;
  benefits: string[];
  whoIsThisFor?: string[];
};

export const professionalServiceDetails: Record<
  string,
  ProfessionalServiceDetail
> = {
  "real-estate": {
    name: "Real Estate Agents",
    summary: "Find the right property faster with expert guidance for buying, selling, or renting homes. Our vetted partners know Ahmedabad inside out.",
    items: ["Property Listing", "Investment", "Buy, Sell, Rent", "Title Search Assistance"],
    icon: "home",
    image: "/heroes/real_estate_hero.png",
    whoIsThisFor: [
      "First-time home buyers in Gujarat",
      "NRI investors looking for reliable local representation",
      "Homeowners looking to upgrade or sell current properties"
    ],
    benefits: [
      "Vetted professionals with deep local knowledge",
      "Assistance with site visits and negotiations",
      "Seamless property registration guidance",
      "Zero-pressure consultation"
    ]
  },
  "loans-insurance": {
    name: "Loans & Insurance",
    summary: "Get customized home loans, personal loans, and insurance solutions that fit your financial profile perfectly without jumping through hoops.",
    items: ["Home Loan", "Personal Loan", "Insurance", "Loan Balance Transfer"],
    icon: "wallet",
    image: "/heroes/loans_hero.png",
    whoIsThisFor: [
      "Buyers needing quick loan disbursement for possession",
      "Current owners looking to transfer loan balances for better rates",
      "Families seeking comprehensive home insurance"
    ],
    benefits: [
      "Compare rates across top banks and NBFCs",
      "Quick approval processing",
      "Comprehensive insurance coverage options",
      "Dedicated relationship manager"
    ]
  },
  "interior-design": {
    name: "Interior Design",
    summary: "Redefine your living space with creative designs, smart layouts, and stylish décor. From modular kitchens to full turnkey projects.",
    items: ["Planning", "Design Consultation", "Renovation", "Furniture Selection"],
    icon: "paint",
    image: "/heroes/interior_hero.png",
    whoIsThisFor: [
      "New flat owners wanting a turnkey design solution",
      "Families looking to modernize an older resale property",
      "Commercial clients needing office space planning"
    ],
    benefits: [
      "Tailored layouts to maximize space",
      "Access to premium materials and finishes",
      "Dedicated project managers for execution",
      "3D visualizations before starting work"
    ]
  },
  construction: {
    name: "Construction Services",
    summary: "Build, extend, or renovate your dream home with reliable construction experts who prioritize structural integrity and aesthetic finish.",
    items: ["New Construction", "Renovation", "PMC", "Structural Audits"],
    icon: "hammer",
    image: "/heroes/construction_hero.png",
    whoIsThisFor: [
      "Plot owners ready to build their independent house",
      "Societies needing structural repair work",
      "Individuals planning a major extension to their property"
    ],
    benefits: [
      "On-time project delivery",
      "Strict quality control and supervision",
      "Transparent pricing with no hidden costs",
      "Compliance with all municipal building codes"
    ]
  },
};
