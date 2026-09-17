export type ServiceDetail = {
  slug: string;
  name: string;
  providers: string[];
  summary: string;
  documents: string[];
  faqs: { question: string; answer: string }[];
  image?: string;
  features?: string[];
  process?: { title: string; description: string }[];
  whoIsThisFor?: string[];
  timeline?: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  electricity: {
    slug: "electricity",
    name: "Electricity Name Transfer",
    providers: ["Torrent Power", "DGVCL (Surat)", "UGVCL (Ahmedabad)", "MGVCL (Vadodara)", "PGVCL (Rajkot)", "GEB"],
    summary:
      "Move your electricity connection into your name after possession — no counter visits, no chasing the board for updates. Ensure you get all billing alerts directly and establish a clean chain of ownership for future resale.",
    image: "/heroes/elec_hero.png",
    timeline: "10–15 working days",
    whoIsThisFor: [
      "Recent home buyers taking possession of resale flats and houses",
      "Heirs inheriting property looking to update utility records",
      "Commercial property owners needing official electricity bills for GST"
    ],
    features: [
      "100% Online Processing",
      "No physical visits required",
      "Regular status updates via WhatsApp",
      "Expert checking to avoid rejections",
      "Arrears checking before transfer"
    ],
    process: [
      { title: "Document Collection", description: "Send us your property deed, index-2 copy, Aadhaar, and past light bill on WhatsApp or via our portal." },
      { title: "Application Preparation", description: "We draft the required NOCs and application forms for your specific power company (DGVCL, Torrent, UGVCL, etc.)." },
      { title: "Submission & Follow Up", description: "Our team submits the file and continuously follows up until the name change reflects." },
    ],
    documents: [
      "Light Bill (Latest paid electricity bill)",
      "Registered Sale Deed / Index-2 copy",
      "Aadhaar Card of the applicant",
      "1 Passport size photo",
      "Mobile number for billing alerts",
      "Signature of applicant",
    ],
    faqs: [
      {
        question: "How long does it take?",
        answer: "Typically 10–15 working days after documents are verified and submitted.",
      },
      {
        question: "Does the process differ between Torrent Power, DGVCL, and UGVCL?",
        answer:
          "The core documents (Index copy, light bill, Aadhaar, photo) are the same; submission channels and Discom processing times vary slightly by board. We handle Torrent Power, DGVCL (Surat), UGVCL, MGVCL, and PGVCL.",
      },
    ],
  },
  gas: {
    slug: "gas",
    name: "Piped Gas Name Transfer",
    providers: ["Gujarat Gas", "Adani Gas"],
    summary:
      "Transfer your piped gas connection safely and legally into your name — required for billing and for safety compliance. Avoid disconnection due to unpaid dues from the previous owner.",
    image: "/heroes/gas_hero.png",
    timeline: "7–12 working days",
    whoIsThisFor: [
      "New homeowners in Ahmedabad, Surat, Vadodara, and Rajkot moving into resale properties",
      "Tenants and businesses requiring name alignment for gas connections"
    ],
    features: [
      "Fast-track processing",
      "Complete ownership change",
      "Assistance with legacy bills",
      "Seamless billing transition",
      "End-to-end NOC coordination"
    ],
    process: [
      { title: "Detail Verification", description: "We verify the old owner's meter details, meter reading photo, and outstanding dues." },
      { title: "Form Submission", description: "We prepare and submit the necessary name transfer forms to Gujarat Gas or Adani Gas." },
      { title: "Confirmation", description: "We ensure the next billing cycle reflects your name correctly." },
    ],
    documents: [
      "Index-2 copy (Proof of ownership)",
      "Last gas bill copy",
      "Sales / purchase ID proofs (Buyer & Seller Aadhaar/PAN)",
      "Photograph of gas meter showing reading",
    ],
    faqs: [
      {
        question: "Is a site visit required?",
        answer: "In most cases, no — our team handles submission and follow-up without you needing to be present.",
      },
    ],
  },
  amc: {
    slug: "amc",
    name: "Municipal Name Transfer",
    providers: ["SMC (Surat)", "AMC (Ahmedabad)", "VMC (Vadodara)", "RMC (Rajkot)"],
    summary:
      "Update municipal property tax records to your name — the step many new owners forget until the next tax notice. Stay compliant and avoid penalty interest on pending taxes.",
    image: "/heroes/amc_hero.png",
    timeline: "15–30 working days",
    whoIsThisFor: [
      "Property buyers who have recently completed registration in Surat, Ahmedabad, Vadodara, or Rajkot",
      "Owners looking to clear historical municipal tax dues and update Vera bills",
      "Societies updating common area property tax records"
    ],
    features: [
      "Avoid future legal hassles",
      "Direct update in SMC / AMC / VMC / RMC records",
      "Assistance with property tax receipts",
      "End-to-end guidance",
      "Verification of historical dues"
    ],
    process: [
      { title: "Assessment", description: "We check the current municipal tax records to ensure no pending arrears." },
      { title: "Application", description: "We file the name change application with the respective ward / civic center." },
      { title: "Record Update", description: "We follow up until the property tax bill is generated in your name." },
    ],
    documents: [
      "Dastavej copy (Registered Sale Deed)",
      "Index copy (Index-2 from Sub-Registrar)",
      "Vera Bill (Latest Property Tax Bill)",
      "Vera Bill bharelani Rasid (Property tax paid receipt)",
    ],
    faqs: [
      {
        question: "Why does this matter if I already have the sale deed?",
        answer:
          "Municipal records don't update automatically on registration — leaving it in the previous owner's name can complicate future tax notices, NOCs, and resale.",
      },
    ],
  },
  documentation: {
    slug: "documentation",
    name: "Documentation Support",
    providers: ["All services"],
    summary:
      "Affidavits, NOCs, and follow-up correspondence — the paperwork layer underneath every transfer, handled by our team. We ensure your documents are legally sound and formatted exactly as municipal boards expect.",
    image: "/heroes/docs_hero.png",
    timeline: "2–5 working days",
    whoIsThisFor: [
      "Individuals missing an NOC from the previous owner",
      "Homeowners needing custom affidavits for utility boards",
      "Buyers requiring notarized agreements post-registration"
    ],
    features: [
      "Legal format drafting",
      "Notarization assistance",
      "Custom NOC generation",
      "Secure document handling",
      "Home delivery of documents"
    ],
    process: [
      { title: "Requirement Analysis", description: "Tell us what document is missing or what format is required by the authority." },
      { title: "Drafting", description: "Our legal partners draft the document in the correct, acceptable format." },
      { title: "Execution", description: "We guide you on signatures and notarization to make it legally binding." },
    ],
    documents: ["Varies by case — confirmed with you before we begin"],
    faqs: [
      {
        question: "Can I use this without a full transfer?",
        answer:
          "Yes — some homeowners only need help preparing or chasing a specific document. Tell us what you need on the booking form.",
      },
    ],
  },
};
