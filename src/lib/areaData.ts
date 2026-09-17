export interface AuthorityRequirement {
  id: string;
  name: string;
  shortName: string;
  category: "municipal" | "electricity" | "gas";
  categoryLabel: string;
  description: string;
  documents: { title: string; subtitle?: string }[];
  note?: string;
  badge?: string;
}

export interface CityData {
  name: string;
  slug: string;
  corp: string;
  tagline: string;
  heroDescription: string;
  requirements: AuthorityRequirement[];
  neighborhoods: string[];
}

export const citiesData: Record<string, CityData> = {
  surat: {
    name: "Surat",
    slug: "surat",
    corp: "SMC",
    tagline: "SMC, DGVCL & Gujarat Gas Name Transfers in Surat",
    heroDescription:
      "Recently bought a house or commercial property in Surat? We handle your Surat Municipal Corporation (SMC) tax name transfer, DGVCL electricity transfer, and Gujarat Gas connection transfer with complete peace of mind and zero office visits.",
    requirements: [
      {
        id: "smc",
        name: "Surat Municipal Corporation (S.M.C)",
        shortName: "S.M.C",
        category: "municipal",
        categoryLabel: "Municipal Property Tax",
        badge: "SMC Ward Office",
        description: "Official property tax name transfer across all SMC administrative zones.",
        documents: [
          { title: "Dastavej copy", subtitle: "Registered Sale Deed copy" },
          { title: "Index copy", subtitle: "Index-2 copy from Sub-Registrar" },
          { title: "Vera Bill", subtitle: "Latest SMC Property Tax Bill" },
          { title: "Vera Bill bharelani Rasid", subtitle: "Property tax payment paid receipt" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "dgvcl",
        name: "Dakshin Gujarat Vij Company Ltd (D.G.V.C.L)",
        shortName: "D.G.V.C.L",
        category: "electricity",
        categoryLabel: "Electricity Connection",
        badge: "DGVCL Sub-Division",
        description: "Power meter ownership and billing name change for Surat properties.",
        documents: [
          { title: "Light Bill", subtitle: "Latest paid DGVCL electricity bill" },
          { title: "Index copy", subtitle: "Registered Index-2 copy" },
          { title: "Aadhar card", subtitle: "Aadhaar Card of the new property owner" },
          { title: "1 passport size photo", subtitle: "Recent passport size photograph" },
          { title: "Mobile Number", subtitle: "Registered mobile number for OTPs and billing alerts" },
          { title: "Signature", subtitle: "Applicant specimen signature" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "gujarat-gas",
        name: "Gujarat Gas (Piped Natural Gas)",
        shortName: "Gujarat Gas",
        category: "gas",
        categoryLabel: "Piped Gas Connection",
        badge: "PNG Domestic / Commercial",
        description: "Piped gas meter name transfer and NOC verification for Surat homes.",
        documents: [
          { title: "Index copy", subtitle: "Registered Index-2 copy" },
          { title: "Last gas bill", subtitle: "Latest paid Gujarat Gas bill copy" },
          { title: "Sales purchase na ID proof", subtitle: "ID proofs of buyer and seller" },
          { title: "Gas meter no photo", subtitle: "Clear photograph of the gas meter showing reading" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
    ],
    neighborhoods: [
      "Adajan",
      "Vesu",
      "Pal",
      "Varachha",
      "Katargam",
      "Ghod Dod Road",
      "Piplod",
      "Althan",
      "Dindoli",
      "Jahangirpura",
      "Palanpur",
      "Citylight",
      "Rander",
      "Bhatar",
      "Udhna",
      "VIP Road",
    ],
  },
  ahmedabad: {
    name: "Ahmedabad",
    slug: "ahmedabad",
    corp: "AMC",
    tagline: "AMC, Torrent Power, UGVCL & Gas Name Transfers in Ahmedabad",
    heroDescription:
      "Get your Ahmedabad Municipal Corporation (AMC) tax records, Torrent Power / UGVCL electricity meter, and Adani Gas / Gujarat Gas connection transferred to your name smoothly.",
    requirements: [
      {
        id: "amc",
        name: "Ahmedabad Municipal Corporation (AMC)",
        shortName: "A.M.C",
        category: "municipal",
        categoryLabel: "Municipal Property Tax",
        badge: "AMC Civic Center",
        description: "Official property tax assessment register name change across all AMC zones.",
        documents: [
          { title: "Registered Sale Deed (Dastavej copy)", subtitle: "Complete registered deed copy" },
          { title: "Index-2 copy", subtitle: "Certified Index-2 from Sub-Registrar" },
          { title: "Latest Property Tax Bill (Vera Bill)", subtitle: "Current AMC tax bill" },
          { title: "Tax Paid Receipt (Rasid)", subtitle: "Latest payment receipt" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "torrent-ugvcl",
        name: "Torrent Power / UGVCL (GEB)",
        shortName: "Torrent / UGVCL",
        category: "electricity",
        categoryLabel: "Electricity Connection",
        badge: "Discom Office",
        description: "Power connection name transfer for Torrent Power city area or UGVCL outskirts.",
        documents: [
          { title: "Latest Electricity Bill", subtitle: "Paid electricity bill copy" },
          { title: "Index-2 copy", subtitle: "Registered property ownership proof" },
          { title: "Aadhaar Card", subtitle: "ID proof of applicant" },
          { title: "Passport size photo", subtitle: "1 recent photograph" },
          { title: "Mobile No. & Signature", subtitle: "Contact details and signature" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "adani-gujarat-gas",
        name: "Adani Gas / Gujarat Gas",
        shortName: "Adani / Gujarat Gas",
        category: "gas",
        categoryLabel: "Piped Gas Connection",
        badge: "PNG Domestic",
        description: "Piped gas connection ownership change and billing update.",
        documents: [
          { title: "Index-2 copy", subtitle: "Property ownership document" },
          { title: "Latest Paid Gas Bill", subtitle: "Recent bill copy" },
          { title: "Buyer & Seller ID proofs", subtitle: "Aadhaar / PAN of both parties" },
          { title: "Gas Meter Photo", subtitle: "Photo showing meter number and reading" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
    ],
    neighborhoods: [
      "Satellite",
      "Paldi",
      "Chandkheda",
      "Shela",
      "SG Highway",
      "South Bopal",
      "Sola",
      "Sanand Road",
      "Sindhu Bhavan Rd",
      "Bopal",
      "Tragad",
      "Nana Chiloda",
      "Kathwada",
      "Adalaj",
      "Khodiyar",
    ],
  },
  vadodara: {
    name: "Vadodara",
    slug: "vadodara",
    corp: "VMC",
    tagline: "VMC, MGVCL & Gujarat Gas Name Transfers in Vadodara",
    heroDescription:
      "Complete doorstep assistance for Vadodara Municipal Corporation (VMC) property tax name transfer, MGVCL power connection, and Gujarat Gas in Vadodara.",
    requirements: [
      {
        id: "vmc",
        name: "Vadodara Municipal Corporation (V.M.C)",
        shortName: "V.M.C",
        category: "municipal",
        categoryLabel: "Municipal Property Tax",
        badge: "VMC Ward Office",
        description: "Municipal tax assessment transfer for residential and commercial units.",
        documents: [
          { title: "Registered Sale Deed (Dastavej)", subtitle: "Ownership document" },
          { title: "Index-2 copy", subtitle: "Sub-Registrar Index copy" },
          { title: "Latest VMC Tax Bill (Vera Bill)", subtitle: "Current property tax bill" },
          { title: "VMC Tax Paid Receipt", subtitle: "Recent tax receipt" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "mgvcl",
        name: "Madhya Gujarat Vij Company Ltd (MGVCL)",
        shortName: "M.G.V.C.L",
        category: "electricity",
        categoryLabel: "Electricity Connection",
        badge: "MGVCL Sub-Division",
        description: "Electricity meter transfer for Vadodara urban and rural circles.",
        documents: [
          { title: "Light Bill", subtitle: "Latest paid MGVCL power bill" },
          { title: "Index copy", subtitle: "Registered Index-2 copy" },
          { title: "Aadhaar Card", subtitle: "Applicant ID proof" },
          { title: "1 passport size photo", subtitle: "Recent photo" },
          { title: "Mobile Number & Signature", subtitle: "Contact info and specimen sign" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "gujarat-gas-vadodara",
        name: "Gujarat Gas (PNG)",
        shortName: "Gujarat Gas",
        category: "gas",
        categoryLabel: "Piped Gas Connection",
        badge: "PNG Connection",
        description: "Piped natural gas transfer and consumer ID update.",
        documents: [
          { title: "Index copy", subtitle: "Index-2 copy" },
          { title: "Last gas bill", subtitle: "Latest paid bill" },
          { title: "Buyer & Seller ID proof", subtitle: "Aadhaar / PAN" },
          { title: "Gas meter photo", subtitle: "Photo showing reading" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
    ],
    neighborhoods: [
      "Alkapuri",
      "Gotri",
      "Vasna Road",
      "Manjalpur",
      "Akota",
      "Karelibaug",
      "Fatehgunj",
      "Sayajigunj",
      "Waghodia Road",
      "Bhayli",
    ],
  },
  rajkot: {
    name: "Rajkot",
    slug: "rajkot",
    corp: "RMC",
    tagline: "RMC, PGVCL & Gujarat Gas Name Transfers in Rajkot",
    heroDescription:
      "Seamless name transfer processing for Rajkot Municipal Corporation (RMC) property taxes, PGVCL electricity meters, and Gujarat Gas connections in Rajkot.",
    requirements: [
      {
        id: "rmc",
        name: "Rajkot Municipal Corporation (R.M.C)",
        shortName: "R.M.C",
        category: "municipal",
        categoryLabel: "Municipal Property Tax",
        badge: "RMC Civic Center",
        description: "RMC municipal assessment register ownership transfer.",
        documents: [
          { title: "Registered Sale Deed (Dastavej)", subtitle: "Sale deed document" },
          { title: "Index-2 copy", subtitle: "Certified Index copy" },
          { title: "Latest RMC Tax Bill (Vera Bill)", subtitle: "Property tax bill" },
          { title: "RMC Tax Paid Receipt", subtitle: "Receipt of paid dues" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "pgvcl",
        name: "Paschim Gujarat Vij Company Ltd (PGVCL)",
        shortName: "P.G.V.C.L",
        category: "electricity",
        categoryLabel: "Electricity Connection",
        badge: "PGVCL Sub-Division",
        description: "Electricity meter transfer across Rajkot city and rural zones.",
        documents: [
          { title: "Light Bill", subtitle: "Latest paid PGVCL power bill" },
          { title: "Index copy", subtitle: "Registered Index-2 copy" },
          { title: "Aadhaar Card", subtitle: "Applicant ID proof" },
          { title: "1 passport size photo", subtitle: "Recent photo" },
          { title: "Mobile Number & Signature", subtitle: "Contact info and signature" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
      {
        id: "gujarat-gas-rajkot",
        name: "Gujarat Gas (PNG)",
        shortName: "Gujarat Gas",
        category: "gas",
        categoryLabel: "Piped Gas Connection",
        badge: "PNG Domestic",
        description: "Piped gas transfer and customer ID migration.",
        documents: [
          { title: "Index copy", subtitle: "Index-2 copy" },
          { title: "Last gas bill", subtitle: "Latest paid gas bill" },
          { title: "Buyer & Seller ID proof", subtitle: "ID documentation" },
          { title: "Gas meter photo", subtitle: "Clear photo of meter reading" },
        ],
        note: "* Transfer fees will be extra (if applicable)",
      },
    ],
    neighborhoods: [
      "Kalawad Road",
      "University Road",
      "150 Feet Ring Road",
      "Yagnik Road",
      "Raiya Road",
      "Kotecha Chowk",
      "Amin Marg",
      "Nana Mava",
      "Mavdi",
    ],
  },
};
