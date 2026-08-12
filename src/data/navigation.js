const navigation = [
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Mission", href: "/about/mission" },
      { label: "Founder", href: "/about/founder" },
      { label: "Board", href: "/about#board" },
      { label: "Partners", href: "/about#partners" },
    ],
  },

  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "Quarterly Health Fairs",
        href: "/programs/health-fairs",
      },
      {
        label: "Medical Equipment Donations",
        href: "/programs/equipment-donations",
      },
      {
        label: "Hospital & Clinic Construction",
        href: "/programs/healthcare-infrastructure",
      },
      {
        label: "QHA Conference",
        href: "/conference",
      },
      {
        label: "Eva's Women's Health Initiative",
        href: "/programs/evas-womens-health",
      },
    ],
  },

  {
    label: "The Challenge",
    href: "/challenge",
  },

  {
    label: "Conferences",
    href: "/conferences",
  },

  {
    label: "Stories",
    href: "/stories",
  },

  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      {
        label: "Volunteer",
        href: "/get-involved#volunteer",
      },
      {
        label: "Partner / Sponsor",
        href: "/get-involved#partner",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export default navigation;