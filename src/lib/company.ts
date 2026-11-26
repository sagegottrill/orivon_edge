/**
 * Company details for ORIVON EDGE LTD.
 *
 * Source: CAC Certificate of Incorporation, RC 9135897,
 * incorporated 29 December 2025 under CAMA 2020.
 *
 * Every legal detail on this website reads from this one file — the footer
 * block on the pages and the /company page. Change it here, once, and both
 * update.
 */

/**
 * ⚠️  THE ONE SPOT TO FILL IN  ⚠️
 *
 * Paste the registered office address exactly as it appears on your CAC
 * records or CAC status report — street, area, city, state, country.
 * Put it between the quotes below. Nothing else needs to change: the footer
 * and the /company page both read this value.
 *
 * Until you fill it in, the placeholder text shows on the live site.
 */
export const REGISTERED_ADDRESS =
  "No. 3 Crescent, Shehu Sanda Kyarimi, Old GRA, Maiduguri, Borno State, Nigeria";

export const COMPANY = {
  legalName: "ORIVON EDGE LTD",
  displayName: "Orivon Edge",
  rcNumber: "9135897",
  incorporated: "29 December 2025",
  companyType: "Private company limited by shares",
  jurisdiction: "Nigeria",
  law: "Companies and Allied Matters Act 2020",
  regulator: "Corporate Affairs Commission (CAC)",

  address: REGISTERED_ADDRESS,

  // Change this if you want a different number on the site.
  phone: "+234 909 702 4697",
  phoneHref: "+2349097024697",

  email: "support@orivonedge.com",

  // Leadership
  ceoName: "Daniel",
  ceoTitle: "Chief Executive Officer",
  ceoEmail: "daniel@orivonedge.com",
  website: "www.orivonedge.com",
  websiteUrl: "https://www.orivonedge.com",

  companyPage: "/company",
} as const;
