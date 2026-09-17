export type PostSection = { heading: string; paragraphs: string[] };

export type Post = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  image: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "amc-name-transfer-ahmedabad-guide",
    title: "AMC Name Transfer in Ahmedabad: Process, Charges & Documents",
    dek: "Everything a new owner needs before applying for a municipal name transfer.",
    date: "2026-05-17",
    image: "/blog/amc.jpg",
    sections: [
      {
        heading: "Why AMC name transfer matters",
        paragraphs: [
          "Registering a sale deed doesn't automatically update Ahmedabad Municipal Corporation's property tax records. Until the AMC record is updated, tax bills, dues notices, and any future resale paperwork still carry the previous owner's name — which becomes a real problem the moment you need a clean property tax history for a bank, a buyer, or your own records.",
          "The transfer is a one-time administrative step, but it's the one most new owners forget until a tax notice or resale query brings it up months later.",
        ],
      },
      {
        heading: "Documents to keep ready",
        paragraphs: [
          "AMC asks for the registered sale deed, property tax payment receipts (showing dues are clear up to the transfer date), and ID plus address proof for the new owner. If the property changed hands through inheritance or a gift deed rather than a sale, the equivalent registered document is used in place of the sale deed.",
        ],
      },
      {
        heading: "What the process looks like",
        paragraphs: [
          "The application goes in with the property's tax account number, the supporting documents above, and a request to update the name on record. AMC verifies the documents against its existing records before the update is confirmed — this is the step where incomplete or mismatched paperwork usually causes delays, so it's worth getting the document set right before submitting.",
          "We handle the submission and the follow-up with the ward office, and confirm with you once the record shows your name.",
        ],
      },
    ],
  },
  {
    slug: "gujarat-gas-name-transfer-online",
    title: "Gujarat Gas PNG Name Transfer in Ahmedabad",
    dek: "Transfer your piped gas connection after buying a home — Satellite, Paldi, Chandkheda, Shela, SG Highway, South Bopal.",
    date: "2026-02-24",
    image: "/blog/gujarat-gas.jpg",
    sections: [
      {
        heading: "Why transfer the connection at all",
        paragraphs: [
          "A piped natural gas (PNG) connection is tied to the person named on the Gujarat Gas account, not the property itself. If you buy a home with an existing connection and don't transfer it, billing, safety inspections, and any future disconnection or maintenance request stay linked to someone who no longer lives there — which gets complicated fast if there's ever a leak, a billing dispute, or a need to upgrade the meter.",
        ],
      },
      {
        heading: "Documents Gujarat Gas asks for",
        paragraphs: [
          "ID proof of the new owner, proof of ownership (the registered sale deed or an index copy), an NOC or consent letter from the existing consumer, and a copy of the latest paid gas bill. Where the previous owner isn't reachable for a consent letter, we can advise on the alternate documentation route.",
        ],
      },
      {
        heading: "Where we're active",
        paragraphs: [
          "We handle Gujarat Gas transfers across Satellite, Paldi, Chandkheda, Shela, SG Highway, and South Bopal, along with the rest of Ahmedabad. In most cases a site visit isn't required — we handle submission and follow-up without you needing to be present.",
        ],
      },
    ],
  },
  {
    slug: "adani-gas-name-transfer-online",
    title: "Adani Gas PNG Name Transfer in Ahmedabad",
    dek: "Serving new housing societies across Sola, Sanand Road, Sindhu Bhavan Rd, Shela, Bopal, South Bopal.",
    date: "2026-02-22",
    image: "/blog/adani-gas.jpg",
    sections: [
      {
        heading: "New societies, same requirement",
        paragraphs: [
          "Adani Total Gas covers a large share of the newer developments on Ahmedabad's western side — Sola, Sanand Road, Sindhu Bhavan Road, Shela, Bopal, and South Bopal all sit in its network. Buyers in these societies almost always inherit an existing PNG connection from the builder or the previous owner, and it needs the same name-transfer step as any resale property.",
        ],
      },
      {
        heading: "Documents Adani Gas asks for",
        paragraphs: [
          "ID proof of the new owner, proof of ownership (registered sale deed or index copy), an NOC or consent letter from the existing consumer, and a copy of the latest paid gas bill — the same document set Gujarat Gas uses, since both follow PNGRB's consumer-transfer guidelines.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "We prepare the documentation, submit it to the local Adani Gas office, and follow up until the connection shows your name — no site visit required in most cases.",
        ],
      },
    ],
  },
  {
    slug: "ugvcl-electricity-name-transfer",
    title: "UGVCL Electricity Name Transfer in Ahmedabad",
    dek: "Complete guide for home buyers in outskirts & developing areas — Chandkheda, Tragad, Nana Chiloda, Kathwada, Adalaj, Khodiyar.",
    date: "2026-01-30",
    image: "/blog/ugvcl.png",
    sections: [
      {
        heading: "Torrent Power vs. UGVCL",
        paragraphs: [
          "Central Ahmedabad is largely served by Torrent Power, but the outskirts and fast-developing pockets — Chandkheda, Tragad, Nana Chiloda, Kathwada, Adalaj, and Khodiyar — fall under Uttar Gujarat Vij Company Limited (UGVCL) instead. The core documents for a name transfer are the same either way; what differs is the submission channel and, in our experience, the processing time.",
        ],
      },
      {
        heading: "Documents you'll need",
        paragraphs: [
          "ID proof (Aadhaar, PAN, or passport), the registered sale deed or index copy, an NOC from the previous owner where required, and the latest paid electricity bill for the connection.",
        ],
      },
      {
        heading: "Timeline",
        paragraphs: [
          "Once documents are verified and submitted, a UGVCL transfer typically takes 10–15 working days to confirm — in line with the other utility transfers we handle. We submit on your behalf and follow up with the local UGVCL office so you're not the one chasing status updates.",
        ],
      },
    ],
  },
];
