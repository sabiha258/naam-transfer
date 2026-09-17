export const services = [
  { name: "Electricity Name Transfer", href: "/services/electricity", blurb: "Torrent Power, DGVCL, GEB & UGVCL", icon: "bolt" },
  { name: "Piped Gas Name Transfer", href: "/services/gas", blurb: "Gujarat Gas & Adani Gas", icon: "flame" },
  { name: "Municipal Name Transfer", href: "/services/amc", blurb: "AMC, SMC, VMC & RMC Tax Transfer", icon: "building" },
] as const;

export const areas = [
  {
    name: "Ahmedabad",
    href: "/areas/ahmedabad",
    corp: "AMC",
    neighborhoods: [
      "Satellite", "Paldi", "Chandkheda", "Shela", "SG Highway", "South Bopal",
      "Sola", "Sanand Road", "Sindhu Bhavan Rd", "Bopal", "Tragad",
      "Nana Chiloda", "Kathwada", "Adalaj", "Khodiyar",
    ],
  },
  {
    name: "Surat",
    href: "/areas/surat",
    corp: "SMC",
    neighborhoods: [
      "Adajan", "Vesu", "Pal", "Varachha", "Katargam", "Ghod Dod Road",
      "Piplod", "Althan", "Dindoli", "Jahangirpura", "Palanpur",
      "Citylight", "Rander", "Bhatar", "Udhna", "VIP Road",
    ],
  },
  /* Hidden temporarily:
  {
    name: "Vadodra",
    href: "/areas/vadodara",
    corp: "VMC",
    neighborhoods: [
      "Alkapuri", "Gotri", "Vasna Road", "Manjalpur", "Akota",
      "Karelibaug", "Fatehgunj", "Sayajigunj", "Waghodia Road", "Bhayli",
    ],
  },
  {
    name: "Rajkot",
    href: "/areas/rajkot",
    corp: "RMC",
    neighborhoods: [
      "Kalawad Road", "University Road", "150 Feet Ring Road", "Yagnik Road",
      "Raiya Road", "Kotecha Chowk", "Amin Marg", "Nana Mava", "Mavdi",
    ],
  },
  */
] as const;

export const guideLinks = [
  { name: "Blogs", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
] as const;

export const primaryNav = [
  { name: "Services", href: "/services" },
  { name: "Areas we serve", href: "/areas" },
  { name: "Guide me", href: "/blog" },
  { name: "Other professional services", href: "/professional-services" },
  { name: "Contact us", href: "/contact" },
] as const;

export const utilityProviders = ["Torrent Power", "DGVCL", "UGVCL", "Gujarat Gas", "Adani Gas", "SMC", "AMC"] as const;

export const whatsappNumber = "919274510633";
