//* @ts-nocheck
/* ============================================================
   FINAYA ADVISOR SCRUB OPERATIONS · application logic
   Converted from standalone HTML build to a Next.js client module.
   ============================================================ */

/* ============================================================
   FINAYA ADVISOR SCRUB OPERATIONS · application logic
   Data and copy generators unchanged from the audited build.
   ============================================================ */

const COMPANY = {
  name: "Finaya Home Loans",
  nmls: "2470186",
  address: "378 Technology Center Way, Suite 1002, Rock Hill, SC 29730",
  disclosure: "For informational purposes only. This is not a commitment to lend or extend credit. All loans are subject to credit approval. Finaya Home Loans. Equal Housing Lender. NMLS Consumer Access: www.nmlsconsumeraccess.org."
};

const ADVISORS = [
  {
    "id": 1,
    "name": "Nick Campo",
    "title": "Chief Revenue Officer",
    "nmls": "2011753",
    "licensedStates": "CO, FL, GA, LA, NC, SC (DCA)",
    "markets": [
      "Charleston",
      "Goose Creek (Berkeley County)"
    ],
    "state": "SC",
    "phone": "843-371-5755",
    "cell": "980-263-7274",
    "email": "nick.campo@finayahl.com",
    "link": "finayahl.com/p/nicholasc",
    "linkedin": "linkedin.com/in/nicholas-campo-sr-90230686",
    "facebook": "facebook.com/nick.campo.37017",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 2,
    "name": "Alan Sacks",
    "title": "Executive Mortgage Advisor",
    "nmls": "159915",
    "licensedStates": "NC, SC (DCA)",
    "markets": [
      "Indian Trail (Union County)",
      "Mooresville (Iredell County)",
      "Raleigh (Wake County)"
    ],
    "state": "NC",
    "phone": "704-733-8700",
    "cell": "",
    "email": "alan.sacks@finayahl.com",
    "link": "finayahl.com/p/alans",
    "linkedin": "linkedin.com/in/alan-sacks-92b20313",
    "facebook": "facebook.com/mortgagewithalan",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 3,
    "name": "John Birke",
    "title": "Executive Mortgage Advisor",
    "nmls": "1150795",
    "licensedStates": "NC, SC (DCA)",
    "markets": [
      "Rock Hill (York County)",
      "Greenville",
      "Easley (Oconee & Pickens Counties)",
      "Hilton Head Island (Beaufort County)"
    ],
    "state": "SC",
    "phone": "479-445-5062",
    "cell": "",
    "email": "john.birke@finayahl.com",
    "link": "finayahl.com/p/johnb",
    "linkedin": "linkedin.com/in/johnbmortgage",
    "facebook": "facebook.com/john.birke",
    "instagram": "@johnbmortgage",
    "tiktok": "@johnbmortgage",
    "status": "complete"
  },
  {
    "id": 4,
    "name": "Ben Singleton",
    "title": "Executive Mortgage Advisor",
    "nmls": "2341198",
    "licensedStates": "CO, NC, SC (DCA)",
    "markets": [
      "Myrtle Beach (Horry County)"
    ],
    "state": "SC",
    "phone": "803-262-2641",
    "cell": "980-402-2866",
    "email": "ben.singleton@finayahl.com",
    "link": "finayahl.com/p/bens",
    "linkedin": "linkedin.com/in/benjamin-singleton-57319a161",
    "facebook": "facebook.com/ben.singleton.50",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 5,
    "name": "Christina Yudzitski",
    "title": "Executive Mortgage Advisor",
    "nmls": "2663819",
    "licensedStates": "NC, SC (BFI), SC (DCA)",
    "markets": [
      "Pinehurst (Moore County)",
      "Durham & Orange County",
      "Raleigh (Wake County)"
    ],
    "state": "NC",
    "phone": "401-207-1464",
    "cell": "",
    "email": "christina.yudzitski@finayahl.com",
    "link": "finayahl.com/p/christinay",
    "linkedin": "linkedin.com/in/christinayudzitski",
    "facebook": "facebook.com/cbelov",
    "instagram": "@homeloansxchristina",
    "status": "complete"
  },
  {
    "id": 6,
    "name": "Raymond M Pinkston",
    "title": "Executive Mortgage Advisor",
    "nmls": "2823400",
    "licensedStates": "NC",
    "markets": [
      "Charlotte (Mecklenburg County)",
      "Boone (Watauga & Avery Counties)"
    ],
    "state": "NC",
    "phone": "704-728-7798",
    "cell": "",
    "email": "ray.pinkston@finayahl.com",
    "link": "finayahl.com/p/rpinkston",
    "linkedin": "linkedin.com/in/raymond-pinkston-9113483b",
    "facebook": "facebook.com/raymondmpinkston",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 7,
    "name": "Khesey Silva",
    "title": "Executive Mortgage Advisor",
    "nmls": "2358323",
    "licensedStates": "CO, FL, GA, NC, NJ, SC (DCA)",
    "markets": [
      "St. Augustine (St. Johns & Nassau Counties)",
      "Crestview (Walton & Okaloosa Counties)"
    ],
    "state": "FL",
    "phone": "720-715-7524",
    "cell": "",
    "email": "khesey.silva@finayahl.com",
    "link": "finayahl.com/p/kheseys",
    "linkedin": "linkedin.com/in/kheseypich",
    "facebook": "facebook.com/KheseySilva",
    "instagram": "@kheseysilva_nmls2358323",
    "status": "complete"
  },
  {
    "id": 8,
    "name": "Andrew Simmons",
    "title": "Executive Mortgage Advisor",
    "nmls": "1679914",
    "licensedStates": "CO, FL, GA, NC",
    "markets": [
      "Wilmington (New Hanover County)",
      "Leland (Brunswick County)",
      "Asheville (Buncombe County)",
      "Franklin",
      "Kill Devil Hills"
    ],
    "state": "NC",
    "phone": "404-480-8630",
    "cell": "",
    "email": "andrew.simmons@finayahl.com",
    "link": "finayahl.com/p/andrews",
    "linkedin": "linkedin.com/in/andrew-simmons-289379141",
    "facebook": "",
    "instagram": "",
    "status": "waiting",
    "note": "Headshot pending from JB Frye."
  },
  {
    "id": 9,
    "name": "Mark Glatzmaier II",
    "title": "Executive Mortgage Advisor",
    "nmls": "1085400",
    "licensedStates": "FL, GA, SC (DCA)",
    "markets": [
      "Atlanta (Fulton County)",
      "Marietta (Cobb & Forsyth Counties)"
    ],
    "state": "GA",
    "phone": "720-715-7384",
    "cell": "509-990-1818",
    "verificationAddress": "6911 N Argonaut Rd, Spokane, WA 99208",
    "email": "mark.glatzmaier@finayahl.com",
    "link": "finayahl.com/p/mglatzmaier",
    "linkedin": "linkedin.com/in/marksmortgage",
    "facebook": "facebook.com/MarksMortgage",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 10,
    "name": "Matthew Squires",
    "title": "Executive Mortgage Advisor",
    "nmls": "1029875",
    "licensedStates": "CO, FL, GA, KY, NC, NE, SC (BFI), UT (DRE)",
    "markets": [
      "Tampa (Hillsborough & Pinellas Counties)"
    ],
    "state": "FL",
    "phone": "864-375-4640",
    "cell": "",
    "email": "matthew.squires@finayahl.com",
    "link": "finayahl.com/p/matthews",
    "linkedin": "linkedin.com/in/mattsquires11",
    "facebook": "facebook.com/matt.squires.79",
    "instagram": "@matt._squires_",
    "status": "complete"
  },
  {
    "id": 11,
    "name": "Paul Grady",
    "title": "Executive Mortgage Advisor",
    "nmls": "2502731",
    "licensedStates": "FL, NC",
    "markets": [
      "Miami (Miami-Dade County)"
    ],
    "state": "FL",
    "phone": "720-776-0146",
    "cell": "206-228-2160",
    "verificationAddress": "3881 W River Falls Drive, Post Falls, ID 83854",
    "email": "paul.grady@finayahl.com",
    "link": "finayahl.com/p/paulg",
    "linkedin": "linkedin.com/in/paul-grady-a848b231",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 12,
    "name": "Geneva Lynne Price",
    "title": "Executive Mortgage Advisor",
    "nmls": "247066",
    "licensedStates": "FL, GA, ME, UT (DRE)",
    "markets": [
      "North Port (Sarasota & Manatee Counties)",
      "Fort Lauderdale (Broward County)"
    ],
    "state": "FL",
    "phone": "843-605-9744",
    "cell": "",
    "email": "geneva.price@finayahl.com",
    "link": "finayahl.com/p/genevap",
    "linkedin": "linkedin.com/in/geneva-price-mortgage",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 13,
    "name": "Cleo Lewis",
    "title": "Executive Mortgage Advisor",
    "nmls": "1451574",
    "licensedStates": "CO",
    "markets": [
      "Denver (Denver County)"
    ],
    "state": "CO",
    "phone": "720-770-1530",
    "cell": "",
    "email": "cleo.lewis@finayahl.com",
    "link": "finayahl.com/p/cleol",
    "linkedin": "linkedin.com/in/cleo-lewis-837aba85",
    "facebook": "facebook.com/cleo.lewis.775",
    "instagram": "",
    "status": "waiting",
    "note": "Headshot pending from JB Frye."
  },
  {
    "id": 14,
    "name": "Brandon Metoyer",
    "title": "Executive Mortgage Advisor",
    "nmls": "2055356",
    "licensedStates": "CO",
    "markets": [
      "Aurora (Arapahoe County)",
      "Lakewood (Jefferson County)",
      "Castle Rock (Douglas County)"
    ],
    "state": "CO",
    "phone": "Pending",
    "cell": "",
    "email": "brandon.metoyer@finayahl.com",
    "link": "finayahl.com/p/brandonm",
    "linkedin": "linkedin.com/in/brandon-metoyer-51276a59",
    "facebook": "facebook.com/TheFaceOfDualLicensing",
    "instagram": "",
    "status": "waiting",
    "note": "On hold per Nick Campo: Part-time, OneCloud phone pending. Do not launch until approved."
  },
  {
    "id": 15,
    "name": "Gerise Wilson",
    "title": "Executive Mortgage Advisor",
    "nmls": "2125467",
    "licensedStates": "CO",
    "markets": [
      "Boulder (Boulder County)",
      "Colorado Springs (El Paso County)"
    ],
    "state": "CO",
    "phone": "720-394-5849",
    "cell": "720-394-5849",
    "email": "gerise.wilson@finayahl.com",
    "link": "finayahl.com/p/gerisew",
    "linkedin": "linkedin.com/in/ashley-gerise",
    "facebook": "facebook.com/ashley.brannon.90",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 16,
    "name": "Jeff Fenkell",
    "title": "Executive Mortgage Advisor",
    "nmls": "1419136",
    "licensedStates": "AZ, CO, FL, GA, RI, UT (DRE)",
    "markets": [
      "West Palm Beach (Palm Beach County)",
      "Stuart (Martin County)"
    ],
    "state": "FL",
    "phone": "704-303-8670",
    "cell": "",
    "email": "jeff.fenkell@finayahl.com",
    "link": "finayahl.com/p/jefff",
    "linkedin": "linkedin.com/in/jfenkell",
    "facebook": "facebook.com/jafenkell",
    "instagram": "@jaf192304",
    "status": "complete"
  },
  {
    "id": 17,
    "name": "Tony Piccione",
    "title": "Executive Mortgage Advisor",
    "nmls": "826808",
    "licensedStates": "CO, FL, GA, ME",
    "markets": [
      "Naples (Collier County)",
      "Orlando (Orange County)"
    ],
    "state": "FL",
    "phone": "803-526-7193",
    "cell": "",
    "email": "tony.piccione@finayahl.com",
    "link": "finayahl.com/p/tonyp",
    "linkedin": "linkedin.com/in/anthony-piccione-17b0ab110",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 18,
    "name": "Warren Potter",
    "title": "Executive Mortgage Advisor",
    "nmls": "221747",
    "licensedStates": "CO",
    "markets": [
      "Gypsum (Eagle County)",
      "Telluride (San Miguel County)",
      "Breckenridge (Summit County)"
    ],
    "state": "CO",
    "phone": "720-739-5730",
    "cell": "",
    "email": "warren.potter@finayahl.com",
    "link": "finayahl.com/p/warrenp",
    "linkedin": "",
    "facebook": "facebook.com/cwarrenpotter",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 19,
    "name": "Michael Hakun",
    "title": "Executive Mortgage Advisor",
    "nmls": "886450",
    "licensedStates": "None active",
    "markets": [
      "Seminole County",
      "Volusia County",
      "Brevard County",
      "Pasco County"
    ],
    "state": "FL",
    "phone": "803-526-7190",
    "cell": "",
    "email": "mike.hakun@finayahl.com",
    "link": "finayahl.com/p/mikeh",
    "linkedin": "linkedin.com/in/michael-hakun-5516aa31",
    "facebook": "facebook.com/share/1JEnUQbEJ7",
    "instagram": "",
    "status": "complete",
    "note": "Territories assigned: Seminole, Volusia, Brevard, Pasco (FL)."
  },
  {
    "id": 20,
    "name": "Steve Fox",
    "title": "Executive Mortgage Advisor",
    "nmls": "913411",
    "licensedStates": "GA, NC",
    "markets": [
      "Guilford County (Greensboro)",
      "Winston-Salem (Forsyth County)"
    ],
    "state": "NC",
    "phone": "336-265-7341",
    "cell": "",
    "email": "steve.fox@finayahl.com",
    "link": "finayahl.com/p/stevef",
    "linkedin": "linkedin.com/in/steven-fox-9bba7a60",
    "facebook": "facebook.com/steve.fox.9655",
    "instagram": "",
    "status": "complete",
    "note": "NMLS #913411 verified by Nick Campo. Territories: Guilford, Winston-Salem, Forsyth (NC)."
  },
  {
    "id": 21,
    "name": "Jamie Repasky",
    "title": "Director of Mortgage Sales",
    "nmls": "1095360",
    "licensedStates": "CO, GA, NC",
    "markets": [
      "National Team Lead",
      "Denver, CO",
      "Atlanta, GA",
      "Charlotte, NC"
    ],
    "state": "CO",
    "phone": "424-305-5228",
    "cell": "608-449-9859",
    "verificationAddress": "640 Vermilion Peak Dr, Windsor, CO 80550",
    "email": "jamie.repasky@finayahl.com",
    "link": "finayahl.com/p/jamier",
    "linkedin": "linkedin.com/in/james-repasky-cude-a1104292",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 22,
    "name": "Kevin Fox",
    "title": "Director of Mortgage Sales",
    "nmls": "775402",
    "licensedStates": "CO, FL, KY, MI, MO, OH, PA, TN, TX (SML)",
    "markets": [
      "National Team Lead",
      "Rock Hill HQ",
      "Charlotte, NC",
      "Tampa, FL"
    ],
    "state": "SC",
    "phone": "704-751-5278",
    "cell": "810-449-3558",
    "email": "kevin.fox@finayahl.com",
    "link": "finayahl.com/p/kevinf",
    "linkedin": "linkedin.com/in/kevin-fox-ba98b250",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 23,
    "name": "Brian Banks",
    "title": "Executive Mortgage Advisor",
    "nmls": "2037092",
    "licensedStates": "AR, AZ, CA (DFPI), FL, GA, HI, IA, KS, LA, NC, NH, NM, NV, TX (SML), WA",
    "markets": [
      "Palm Beach (West Palm Beach)",
      "Duval (Jacksonville)"
    ],
    "state": "FL",
    "phone": "704-849-9210",
    "cell": "678-897-3045",
    "email": "brian.banks@finayahl.com",
    "link": "finayahl.com/p/brianb",
    "linkedin": "linkedin.com/in/banks1127",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 24,
    "name": "Scott Cleaver",
    "title": "Executive Mortgage Advisor",
    "nmls": "963074",
    "licensedStates": "FL, GA",
    "markets": [
      "DeKalb (Stonecrest)",
      "Chatham (Savannah)",
      "Greene/Putnam (Eatonton)",
      "Glynn (Brunswick)",
      "Floyd (Rome)",
      "Rabun (Clayton)"
    ],
    "state": "GA",
    "phone": "919-589-7445",
    "cell": "945-365-5345",
    "email": "scott.cleaver@finayahl.com",
    "link": "finayahl.com/p/scottc",
    "linkedin": "linkedin.com/in/scott-cleaver-34914216",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 25,
    "name": "Bryan Anstandig",
    "title": "Executive Mortgage Advisor",
    "nmls": "591342",
    "licensedStates": "FL",
    "markets": [
      "Miami-Dade (Miami)",
      "Lee (Cape Coral)"
    ],
    "state": "FL",
    "phone": "803-526-7196",
    "cell": "248-320-9640",
    "email": "bryan.anstandig@finayahl.com",
    "link": "finayahl.com/p/bryana",
    "linkedin": "linkedin.com/in/bryan-anstandig-63229414",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 26,
    "name": "Kirk Rasmussen",
    "title": "Executive Mortgage Advisor",
    "nmls": "1737435",
    "licensedStates": "CO",
    "markets": [
      "Pitkin (Aspen)",
      "Routt (Steamboat Springs)",
      "Gunnison"
    ],
    "state": "CO",
    "phone": "720-770-1530",
    "cell": "303-956-6487",
    "email": "kirk.rasmussen@finayahl.com",
    "link": "finayahl.com/p/kirkr",
    "linkedin": "linkedin.com/in/kirk-rasmussen-45222a13",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  },
  {
    "id": 27,
    "name": "Cashmere Jones",
    "title": "Executive Mortgage Advisor",
    "nmls": "2092763",
    "licensedStates": "FL, GA, NC",
    "markets": [
      "Fulton (Atlanta)"
    ],
    "state": "GA",
    "phone": "803-262-0724",
    "cell": "980-417-4200",
    "email": "cashmere.jones@finayahl.com",
    "link": "finayahl.com/p/cashmerej",
    "linkedin": "linkedin.com/in/cashmerejones",
    "facebook": "",
    "instagram": "",
    "status": "complete"
  }
];

/* ---------------- LINKEDIN SCRUB AUDIT DATA ---------------- */

/* ---------------- GOOGLE BUSINESS PROFILE (GBP) DATA ---------------- */
const GBP_DATA = {
  "1": {
    "bname": "Nick Campo, Chief Revenue Officer - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Charleston, SC, Goose Creek, SC, Berkeley County, SC, Charleston County, SC, Dorchester County, SC, Mount Pleasant, SC, North Charleston, SC, Summerville, SC",
    "areasList": [
      "Charleston, SC",
      "Goose Creek, SC",
      "Berkeley County, SC",
      "Charleston County, SC",
      "Dorchester County, SC",
      "Mount Pleasant, SC",
      "North Charleston, SC",
      "Summerville, SC"
    ],
    "phone": "843-371-5755",
    "website": "https://finayahl.com/p/nicholasc",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Nicholas Campo Sr. is Chief Revenue Officer and Executive Mortgage Advisor at Finaya Home Loans, serving home buyers and homeowners across Charleston and Berkeley County, South Carolina. Specializing in conventional, FHA, VA, jumbo, and refinance residential mortgage solutions. With transparent guidance and local market insight, Nick helps families structure smart financing tailored to their long-term financial goals. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Nick Campo NMLS #2011753. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "nick.campo@finayahl.com",
    "cell": "980-263-7274"
  },
  "2": {
    "bname": "Alan Sacks, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Indian Trail, NC, Union County, NC, Mooresville, NC, Iredell County, NC, Raleigh, NC, Wake County, NC, Waxhaw, NC, Matthews, NC, Lake Norman, NC",
    "areasList": [
      "Indian Trail, NC",
      "Union County, NC",
      "Mooresville, NC",
      "Iredell County, NC",
      "Raleigh, NC",
      "Wake County, NC",
      "Waxhaw, NC",
      "Matthews, NC",
      "Lake Norman, NC"
    ],
    "phone": "704-733-8700",
    "website": "https://finayahl.com/p/alans",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Alan Sacks is an Executive Mortgage Advisor at Finaya Home Loans, guiding home buyers and homeowners across Indian Trail, Mooresville, Raleigh, and surrounding North Carolina communities. Providing conventional, FHA, VA, USDA, and jumbo mortgage financing with clear communication and dependable execution. Alan takes time to understand your financial objectives to secure the right home loan structure. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Alan Sacks NMLS #159915. Visit www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "alan.sacks@finayahl.com",
    "cell": ""
  },
  "3": {
    "bname": "John Birke, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Rock Hill, SC, York County, SC, Greenville, SC, Greenville County, SC, Easley, SC, Pickens County, SC, Oconee County, SC, Hilton Head Island, SC, Beaufort County, SC, Fort Mill, SC",
    "areasList": [
      "Rock Hill, SC",
      "York County, SC",
      "Greenville, SC",
      "Greenville County, SC",
      "Easley, SC",
      "Pickens County, SC",
      "Oconee County, SC",
      "Hilton Head Island, SC",
      "Beaufort County, SC",
      "Fort Mill, SC"
    ],
    "phone": "479-445-5062",
    "website": "https://finayahl.com/p/johnb",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "John Birke is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across Rock Hill, Greenville, Easley, Hilton Head Island, and the greater Upstate and Lowcountry regions of South Carolina. Specializing in first-time buyer financing, conventional, FHA, VA, and second-home mortgage options. John delivers dedicated support from pre-approval through closing. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. John Birke NMLS #1150795. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "john.birke@finayahl.com",
    "cell": ""
  },
  "4": {
    "bname": "Ben Singleton, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Myrtle Beach, SC, Horry County, SC, Conway, SC, North Myrtle Beach, SC, Georgetown County, SC, Murrells Inlet, SC, Pawleys Island, SC",
    "areasList": [
      "Myrtle Beach, SC",
      "Horry County, SC",
      "Conway, SC",
      "North Myrtle Beach, SC",
      "Georgetown County, SC",
      "Murrells Inlet, SC",
      "Pawleys Island, SC"
    ],
    "phone": "803-262-2641",
    "website": "https://finayahl.com/p/bens",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Ben Singleton is an Executive Mortgage Advisor at Finaya Home Loans, specializing in residential home financing across Myrtle Beach, Conway, and Horry County, South Carolina. From primary residences and vacation retreats to investment properties, Ben offers conventional, FHA, VA, and coastal mortgage programs tailored to coastal South Carolina buyers. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Ben Singleton NMLS #2341198. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "ben.singleton@finayahl.com",
    "cell": "980-402-2866"
  },
  "5": {
    "bname": "Christina Yudzitski, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Pinehurst, NC, Moore County, NC, Durham, NC, Durham County, NC, Orange County, NC, Chapel Hill, NC, Raleigh, NC, Wake County, NC, Southern Pines, NC",
    "areasList": [
      "Pinehurst, NC",
      "Moore County, NC",
      "Durham, NC",
      "Durham County, NC",
      "Orange County, NC",
      "Chapel Hill, NC",
      "Raleigh, NC",
      "Wake County, NC",
      "Southern Pines, NC"
    ],
    "phone": "401-207-1464",
    "website": "https://finayahl.com/p/christinay",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Christina Yudzitski is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across Pinehurst, Moore County, the Triangle (Durham, Orange, Raleigh), and North Carolina. Christina provides personalized mortgage consultations for conventional, FHA, VA, and jumbo loan options, ensuring home buyers feel confident and informed throughout every step of the mortgage process. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Christina Yudzitski NMLS #2663819. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "christina.yudzitski@finayahl.com",
    "cell": ""
  },
  "6": {
    "bname": "Raymond Pinkston, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Charlotte, NC, Mecklenburg County, NC, Boone, NC, Watauga County, NC, Avery County, NC, Huntersville, NC, Cornelius, NC, Blowing Rock, NC",
    "areasList": [
      "Charlotte, NC",
      "Mecklenburg County, NC",
      "Boone, NC",
      "Watauga County, NC",
      "Avery County, NC",
      "Huntersville, NC",
      "Cornelius, NC",
      "Blowing Rock, NC"
    ],
    "phone": "704-728-7798",
    "website": "https://finayahl.com/p/rpinkston",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Raymond M. Pinkston is an Executive Mortgage Advisor at Finaya Home Loans, delivering comprehensive home financing solutions across Charlotte, Mecklenburg County, and the High Country (Boone, Watauga, Avery Counties). Offering conventional, FHA, VA, mountain retreat, and refinance mortgage loans tailored to North Carolina families and investors. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Raymond M. Pinkston NMLS #2823400. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "ray.pinkston@finayahl.com",
    "cell": ""
  },
  "7": {
    "bname": "Khesey Silva, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "St. Augustine, FL, St. Johns County, FL, Nassau County, FL, Fernandina Beach, FL, Crestview, FL, Okaloosa County, FL, Walton County, FL, Destin, FL, Ponte Vedra, FL",
    "areasList": [
      "St. Augustine, FL",
      "St. Johns County, FL",
      "Nassau County, FL",
      "Fernandina Beach, FL",
      "Crestview, FL",
      "Okaloosa County, FL",
      "Walton County, FL",
      "Destin, FL",
      "Ponte Vedra, FL"
    ],
    "phone": "720-715-7524",
    "website": "https://finayahl.com/p/kheseys",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Khesey Silva is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers throughout Northeast Florida (St. Augustine, St. Johns, Nassau Counties) and the Florida Panhandle (Crestview, Walton, Okaloosa Counties). Offering conventional, FHA, VA, jumbo, and condo residential financing. Khesey pairs personalized attention with competitive mortgage solutions. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Khesey Silva NMLS #2358323. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "khesey.silva@finayahl.com",
    "cell": ""
  },
  "8": {
    "bname": "Andrew Simmons, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Wilmington, NC, New Hanover County, NC, Leland, NC, Brunswick County, NC, Asheville, NC, Buncombe County, NC, Franklin, NC, Kill Devil Hills, NC, Outer Banks, NC",
    "areasList": [
      "Wilmington, NC",
      "New Hanover County, NC",
      "Leland, NC",
      "Brunswick County, NC",
      "Asheville, NC",
      "Buncombe County, NC",
      "Franklin, NC",
      "Kill Devil Hills, NC",
      "Outer Banks, NC"
    ],
    "phone": "404-480-8630",
    "website": "https://finayahl.com/p/andrews",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Andrew Simmons is an Executive Mortgage Advisor at Finaya Home Loans, assisting home buyers across coastal and western North Carolina, including Wilmington, Brunswick County, Asheville, and the Outer Banks. Specializing in conventional, FHA, VA, second homes, and coastal residential lending. Andrew delivers transparent guidance throughout your home buying journey. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Andrew Simmons NMLS #1679914. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "andrew.simmons@finayahl.com",
    "cell": ""
  },
  "9": {
    "bname": "Mark Glatzmaier, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Atlanta, GA, Fulton County, GA, Marietta, GA, Cobb County, GA, Forsyth County, GA, Cumming, GA, Sandy Springs, GA, Alpharetta, GA, Roswell, GA",
    "areasList": [
      "Atlanta, GA",
      "Fulton County, GA",
      "Marietta, GA",
      "Cobb County, GA",
      "Forsyth County, GA",
      "Cumming, GA",
      "Sandy Springs, GA",
      "Alpharetta, GA",
      "Roswell, GA"
    ],
    "phone": "720-715-7384",
    "website": "https://finayahl.com/p/mglatzmaier",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Mark Glatzmaier II is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers and homeowners across Greater Atlanta, Fulton County, Cobb County (Marietta), and Forsyth County, Georgia. Offering comprehensive conventional, FHA, VA, jumbo, and refinance options designed around each client's financial timeline and wealth-building goals. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Mark Glatzmaier II NMLS #1085400. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "mark.glatzmaier@finayahl.com",
    "cell": "509-990-1818",
    "verificationAddress": "6911 N Argonaut Rd, Spokane, WA 99208"
  },
  "10": {
    "bname": "Matthew Squires, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Tampa, FL, Hillsborough County, FL, Pinellas County, FL, St. Petersburg, FL, Clearwater, FL, Brandon, FL, Riverview, FL",
    "areasList": [
      "Tampa, FL",
      "Hillsborough County, FL",
      "Pinellas County, FL",
      "St. Petersburg, FL",
      "Clearwater, FL",
      "Brandon, FL",
      "Riverview, FL"
    ],
    "phone": "864-375-4640",
    "website": "https://finayahl.com/p/matthews",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Matthew Squires is an Executive Mortgage Advisor at Finaya Home Loans, delivering residential mortgage solutions across the Tampa Bay area, Hillsborough County, and Pinellas County, Florida. Providing conventional, FHA, VA, jumbo, and home equity refinance loans with clear advice and attentive communication. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Matthew Squires NMLS #1029875. Visit www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "matthew.squires@finayahl.com",
    "cell": ""
  },
  "11": {
    "bname": "Paul Grady, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Miami, FL, Miami-Dade County, FL, Coral Gables, FL, Miami Beach, FL, Doral, FL, Kendall, FL, Homestead, FL",
    "areasList": [
      "Miami, FL",
      "Miami-Dade County, FL",
      "Coral Gables, FL",
      "Miami Beach, FL",
      "Doral, FL",
      "Kendall, FL",
      "Homestead, FL"
    ],
    "phone": "720-776-0146",
    "website": "https://finayahl.com/p/paulg",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Paul Grady is an Executive Mortgage Advisor at Finaya Home Loans, guiding home buyers and real estate investors across Miami and Miami-Dade County, Florida. Specializing in conventional, jumbo, FHA, VA, and condo financing structured for South Florida's dynamic residential market. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Paul Grady NMLS #2502731. Visit www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "paul.grady@finayahl.com",
    "cell": "206-228-2160",
    "verificationAddress": "3881 W River Falls Drive, Post Falls, ID 83854"
  },
  "12": {
    "bname": "Geneva Price, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "North Port, FL, Sarasota County, FL, Manatee County, FL, Fort Lauderdale, FL, Broward County, FL, Bradenton, FL, Venice, FL, Hollywood, FL, Pompano Beach, FL",
    "areasList": [
      "North Port, FL",
      "Sarasota County, FL",
      "Manatee County, FL",
      "Fort Lauderdale, FL",
      "Broward County, FL",
      "Bradenton, FL",
      "Venice, FL",
      "Hollywood, FL",
      "Pompano Beach, FL"
    ],
    "phone": "843-605-9744",
    "website": "https://finayahl.com/p/genevap",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Geneva Lynne Price is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across Southwest Florida (North Port, Sarasota, Manatee Counties) and South Florida (Fort Lauderdale, Broward County). Specializing in conventional, FHA, VA, retirement relocations, and residential purchases with attentive, caring service. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Geneva Lynne Price NMLS #247066. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "geneva.price@finayahl.com",
    "cell": ""
  },
  "13": {
    "bname": "Cleo Lewis, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Denver, CO, Denver County, CO, Centennial, CO, Highlands Ranch, CO, Cherry Creek, CO, Thornton, CO, Arvada, CO",
    "areasList": [
      "Denver, CO",
      "Denver County, CO",
      "Centennial, CO",
      "Highlands Ranch, CO",
      "Cherry Creek, CO",
      "Thornton, CO",
      "Arvada, CO"
    ],
    "phone": "720-770-1530",
    "website": "https://finayahl.com/p/cleol",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Cleo Lewis is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across Denver, Denver County, and the Front Range of Colorado. Providing conventional, FHA, VA, jumbo, and first-time home buyer financing programs tailored to the Colorado market with transparent and responsive service. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Cleo Lewis NMLS #1451574. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "cleo.lewis@finayahl.com",
    "cell": ""
  },
  "14": {
    "bname": "Brandon Metoyer, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Aurora, CO, Arapahoe County, CO, Lakewood, CO, Jefferson County, CO, Castle Rock, CO, Douglas County, CO",
    "areasList": [
      "Aurora, CO",
      "Arapahoe County, CO",
      "Lakewood, CO",
      "Jefferson County, CO",
      "Castle Rock, CO",
      "Douglas County, CO"
    ],
    "phone": "Pending",
    "website": "https://finayahl.com/p/brandonm",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Brandon Metoyer is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers and homeowners across Aurora, Arapahoe County, Lakewood, and Castle Rock, Colorado. Specializing in conventional, FHA, VA, and jumbo residential mortgage solutions designed for Colorado families and investors. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Brandon Metoyer NMLS #2055356. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": true,
    "email": "brandon.metoyer@finayahl.com",
    "cell": ""
  },
  "15": {
    "bname": "Gerise Wilson, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Boulder, CO, Boulder County, CO, Colorado Springs, CO, El Paso County, CO, Longmont, CO, Monument, CO, Fountain, CO",
    "areasList": [
      "Boulder, CO",
      "Boulder County, CO",
      "Colorado Springs, CO",
      "El Paso County, CO",
      "Longmont, CO",
      "Monument, CO",
      "Fountain, CO"
    ],
    "phone": "720-394-5849",
    "website": "https://finayahl.com/p/gerisew",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Gerise Wilson is an Executive Mortgage Advisor at Finaya Home Loans, providing residential mortgage financing for families across Boulder County and the Pikes Peak region (Colorado Springs, El Paso County). Specializing in conventional, VA military loans, FHA, and mountain residential programs with proactive communication. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Gerise Wilson NMLS #2125467. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "gerise.wilson@finayahl.com",
    "cell": "720-394-5849"
  },
  "16": {
    "bname": "Jeff Fenkell, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "West Palm Beach, FL, Palm Beach County, FL, Stuart, FL, Martin County, FL, Jupiter, FL, Boca Raton, FL, Palm Beach Gardens, FL",
    "areasList": [
      "West Palm Beach, FL",
      "Palm Beach County, FL",
      "Stuart, FL",
      "Martin County, FL",
      "Jupiter, FL",
      "Boca Raton, FL",
      "Palm Beach Gardens, FL"
    ],
    "phone": "704-303-8670",
    "website": "https://finayahl.com/p/jefff",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Jeff Fenkell is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers and homeowners across West Palm Beach, Palm Beach County, Stuart, and the Treasure Coast of Florida. Offering tailored conventional, FHA, VA, jumbo, and luxury second-home mortgage financing backed by personal service. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Jeff Fenkell NMLS #1419136. Visit www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "jeff.fenkell@finayahl.com",
    "cell": ""
  },
  "17": {
    "bname": "Tony Piccione, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Naples, FL, Collier County, FL, Orlando, FL, Orange County, FL, Marco Island, FL, Winter Park, FL, Windermere, FL",
    "areasList": [
      "Naples, FL",
      "Collier County, FL",
      "Orlando, FL",
      "Orange County, FL",
      "Marco Island, FL",
      "Winter Park, FL",
      "Windermere, FL"
    ],
    "phone": "803-526-7193",
    "website": "https://finayahl.com/p/tonyp",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Tony Piccione is an Executive Mortgage Advisor at Finaya Home Loans, guiding home buyers across Southwest Florida (Naples, Collier County) and Central Florida (Orlando, Orange County). Specializing in conventional, jumbo, FHA, VA, and resort condominium residential financing with transparent advice throughout the loan process. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Tony Piccione NMLS #826808. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "tony.piccione@finayahl.com",
    "cell": ""
  },
  "18": {
    "bname": "Warren Potter, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Gypsum, CO, Eagle County, CO, Vail, CO, Telluride, CO, San Miguel County, CO, Breckenridge, CO, Summit County, CO",
    "areasList": [
      "Gypsum, CO",
      "Eagle County, CO",
      "Vail, CO",
      "Telluride, CO",
      "San Miguel County, CO",
      "Breckenridge, CO",
      "Summit County, CO"
    ],
    "phone": "720-739-5730",
    "website": "https://finayahl.com/p/warrenp",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Warren Potter is an Executive Mortgage Advisor at Finaya Home Loans, delivering specialized residential financing across Colorado's mountain communities, including Eagle County (Gypsum, Vail), Telluride, and Summit County (Breckenridge). Expertise in primary homes, vacation properties, and mountain resort mortgages. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Warren Potter NMLS #221747. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "warren.potter@finayahl.com",
    "cell": ""
  },
  "19": {
    "bname": "Michael Hakun, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Seminole County, FL, Sanford, FL, Altamonte Springs, FL, Volusia County, FL, Daytona Beach, FL, Deltona, FL, Brevard County, FL, Melbourne, FL, Palm Bay, FL, Pasco County, FL, Wesley Chapel, FL",
    "areasList": [
      "Seminole County, FL",
      "Sanford, FL",
      "Altamonte Springs, FL",
      "Volusia County, FL",
      "Daytona Beach, FL",
      "Deltona, FL",
      "Brevard County, FL",
      "Melbourne, FL",
      "Palm Bay, FL",
      "Pasco County, FL",
      "Wesley Chapel, FL"
    ],
    "phone": "803-526-7190",
    "website": "https://finayahl.com/p/mikeh",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Michael Hakun is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across Central Florida, including Seminole, Volusia, Brevard (Space Coast), and Pasco Counties. Offering conventional, FHA, VA, USDA, and jumbo mortgage loans designed to make buying or refinancing a home clear and stress-free. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Michael Hakun NMLS #886450. Visit www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "mike.hakun@finayahl.com",
    "cell": ""
  },
  "20": {
    "bname": "Steve Fox, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Greensboro, NC, Guilford County, NC, Winston-Salem, NC, Forsyth County, NC, High Point, NC, Kernersville, NC, Clemmons, NC",
    "areasList": [
      "Greensboro, NC",
      "Guilford County, NC",
      "Winston-Salem, NC",
      "Forsyth County, NC",
      "High Point, NC",
      "Kernersville, NC",
      "Clemmons, NC"
    ],
    "phone": "336-265-7341",
    "website": "https://finayahl.com/p/stevef",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Steve Fox is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across the North Carolina Piedmont Triad, including Greensboro, Guilford County, Winston-Salem, and Forsyth County. Offering conventional, FHA, VA, and refinance solutions backed by trusted guidance and local market know-how. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Steve Fox NMLS #913411 (Verified Active). www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "email": "steve.fox@finayahl.com",
    "cell": ""
  },
  "21": {
    "bname": "Jamie Repasky, Director of Mortgage Sales - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Denver, CO, Atlanta, GA, Charlotte, NC, Fulton County, GA, Mecklenburg County, NC",
    "areasList": [
      "Denver, CO",
      "Atlanta, GA",
      "Charlotte, NC",
      "Fulton County, GA",
      "Mecklenburg County, NC"
    ],
    "phone": "(424) 305-5228",
    "cell": "608-449-9859",
    "email": "jamie.repasky@finayahl.com",
    "website": "https://finayahl.com/p/jamier",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Jamie Repasky is Director of Mortgage Sales at Finaya Home Loans, leading sales origination and advising clients across Colorado, Georgia, and North Carolina. Offering conventional, FHA, VA, and residential mortgage financing with personalized guidance and dependable execution. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Jamie Repasky NMLS #1095360. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false,
    "verificationAddress": "640 Vermilion Peak Dr, Windsor, CO 80550"
  },
  "22": {
    "bname": "Kevin Fox, Director of Mortgage Sales - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Rock Hill, SC, York County, SC, Charlotte, NC, Mecklenburg County, NC, Tampa, FL",
    "areasList": [
      "Rock Hill, SC",
      "York County, SC",
      "Charlotte, NC",
      "Mecklenburg County, NC",
      "Tampa, FL"
    ],
    "phone": "(704) 751-5278",
    "cell": "810-449-3558",
    "email": "kevin.fox@finayahl.com",
    "website": "https://finayahl.com/p/kevinf",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Kevin Fox is Director of Mortgage Sales at Finaya Home Loans, guiding residential lending teams and serving home buyers across South Carolina, North Carolina, and Florida. Specializing in conventional, FHA, VA, jumbo, and home purchase financing tailored to each family's goals. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Kevin Fox NMLS #775402. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false
  },
  "23": {
    "bname": "Brian Banks, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "West Palm Beach, FL, Palm Beach County, FL, Jacksonville, FL, Duval County, FL, Boca Raton, FL, Jupiter, FL",
    "areasList": [
      "West Palm Beach, FL",
      "Palm Beach County, FL",
      "Jacksonville, FL",
      "Duval County, FL",
      "Boca Raton, FL",
      "Jupiter, FL"
    ],
    "phone": "(704) 849-9210",
    "cell": "678-897-3045",
    "email": "brian.banks@finayahl.com",
    "website": "https://finayahl.com/p/brianb",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Brian Banks is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers across Florida including Palm Beach County (West Palm Beach, Boca Raton) and Duval County (Jacksonville). Providing conventional, FHA, VA, and jumbo loan options with dedicated client support. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Brian Banks NMLS #2037092. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false
  },
  "24": {
    "bname": "Scott Cleaver, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Stonecrest, GA, DeKalb County, GA, Savannah, GA, Chatham County, GA, Eatonton, GA, Brunswick, GA, Rome, GA",
    "areasList": [
      "Stonecrest, GA",
      "DeKalb County, GA",
      "Savannah, GA",
      "Chatham County, GA",
      "Eatonton, GA",
      "Brunswick, GA",
      "Rome, GA"
    ],
    "phone": "(919) 589-7445",
    "cell": "945-365-5345",
    "email": "scott.cleaver@finayahl.com",
    "website": "https://finayahl.com/p/scottc",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Scott Cleaver is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers and homeowners across Georgia, including Greater Atlanta (DeKalb County), Savannah (Chatham County), and Lake Oconee (Greene County). Specializing in conventional, FHA, VA, and coastal residential lending. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Scott Cleaver NMLS #963074. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false
  },
  "25": {
    "bname": "Bryan Anstandig, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Miami, FL, Miami-Dade County, FL, Cape Coral, FL, Lee County, FL, Fort Myers, FL, Coral Gables, FL",
    "areasList": [
      "Miami, FL",
      "Miami-Dade County, FL",
      "Cape Coral, FL",
      "Lee County, FL",
      "Fort Myers, FL",
      "Coral Gables, FL"
    ],
    "phone": "(803) 526-7196",
    "cell": "248-320-9640",
    "email": "bryan.anstandig@finayahl.com",
    "website": "https://finayahl.com/p/bryana",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Bryan Anstandig is an Executive Mortgage Advisor at Finaya Home Loans, assisting home buyers and real estate investors across Miami-Dade County and Southwest Florida (Cape Coral, Lee County). Providing conventional, jumbo, FHA, VA, and second-home financing with attentive personal service. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Bryan Anstandig NMLS #591342. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false
  },
  "26": {
    "bname": "Kirk Rasmussen, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Aspen, CO, Pitkin County, CO, Steamboat Springs, CO, Routt County, CO, Crested Butte, CO, Gunnison County, CO",
    "areasList": [
      "Aspen, CO",
      "Pitkin County, CO",
      "Steamboat Springs, CO",
      "Routt County, CO",
      "Crested Butte, CO",
      "Gunnison County, CO"
    ],
    "phone": "(720) 770-1530",
    "cell": "303-956-6487",
    "email": "kirk.rasmussen@finayahl.com",
    "website": "https://finayahl.com/p/kirkr",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Kirk Rasmussen is an Executive Mortgage Advisor at Finaya Home Loans, delivering specialized mortgage solutions across Colorado's mountain resort regions, including Pitkin County (Aspen), Routt County (Steamboat Springs), and Gunnison County. Expertise in luxury mountain homes, jumbo loans, and vacation retreats. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Kirk Rasmussen NMLS #1737435. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false
  },
  "27": {
    "bname": "Cashmere Jones, Executive Mortgage Advisor - Finaya Home Loans",
    "primaryCat": "Mortgage broker",
    "secCats": "Mortgage lender, Loan agency, Financial consultant",
    "areas": "Atlanta, GA, Fulton County, GA, Sandy Springs, GA, Alpharetta, GA, Roswell, GA, Johns Creek, GA",
    "areasList": [
      "Atlanta, GA",
      "Fulton County, GA",
      "Sandy Springs, GA",
      "Alpharetta, GA",
      "Roswell, GA",
      "Johns Creek, GA"
    ],
    "phone": "(803) 262-0724",
    "cell": "980-417-4200",
    "email": "cashmere.jones@finayahl.com",
    "website": "https://finayahl.com/p/cashmerej",
    "hours": "Monday\u2013Friday: 8:30 AM \u2013 6:00 PM\nSaturday: 10:00 AM \u2013 2:00 PM\nSunday: Closed",
    "desc": "Cashmere Jones is an Executive Mortgage Advisor at Finaya Home Loans, serving home buyers and homeowners across Greater Atlanta and Fulton County, Georgia. Offering comprehensive conventional, FHA, VA, and first-time buyer financing structured around each client's financial future. Finaya Home Loans is an Equal Housing Lender. Company NMLS #2470186. Cashmere Jones NMLS #2092763. www.nmlsconsumeraccess.org. For informational purposes only. This is not a commitment to lend. All loans subject to credit approval.",
    "onHold": false
  }
};

const LINKEDIN_AUDIT = {
  1: {
    found: true, username: "nicholas-campo-sr-90230686", profileUrl: "https://www.linkedin.com/in/nicholas-campo-sr-90230686/",
    currentHeadline: "🏡Co-Founder, CRO at Finaya, Inc. · EMA (MLO) @ Finaya Home Loans NMLS #2354884, Personal NMLS #2011753",
    currentEmployer: "Finaya (Co-Founder/CRO) + Finaya Home Loans (Director of Originations)",
    currentLocation: "United States",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "About still lists 'Account Executive at NewRez Wholesale' (severely outdated)",
      "Dual Finaya / Finaya Home Loans experience entries are confusing",
      "Headline should read CRO at Finaya Home Loans",
      "Wrong company NMLS listed (#2354884; should be #2470186)",
      "Location = United States only; should be SC"
    ],
    priority: "P0", status: "Wrong employer/NMLS mismatch",
    aboutText: "Currently an Account Executive at NewRez Wholesale.\n\nCareer Highlights:\n-10 years of managerial experience dating back to 2009\n-3 years of mortgage underwriting experience\n-7 years of mortgage experience\n-3 years of Business Development experience\n-9 years of Marketing and Sales Experience\n-2 years of logistics experience\n… more"
  },
  2: {
    found: true, username: "alan-sacks-92b20313", profileUrl: "https://www.linkedin.com/in/alan-sacks-92b20313/",
    currentHeadline: "Executive Mortgae Advisor at Finaya Home Loans",
    currentEmployer: "Homebridge Wholesale / Logan Finance (no Finaya entry)",
    currentLocation: "Waxhaw, North Carolina",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "Typo 'Mortgae' in headline",
      "No Finaya Home Loans experience entry",
      "About contains only email",
      "Headline/About missing NMLS, markets, phone, link, disclosure"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: "alan.sacks@finayahl.com\n\n\nActivity\n\n629 followers\n\nFollow\n\nAlan Sacks commented on a post\n\n•\n\n2mo\n\nThanks Mark!\n\nShow all"
  },
  3: {
    found: true, username: "johnbirke", profileUrl: "https://www.linkedin.com/in/johnbirke/",
    currentHeadline: "Private Mortgage & Capital Strategist (no Finaya)",
    currentEmployer: "NBI Financial Group LLC",
    currentLocation: "Charlotte, North Carolina",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No Finaya presence",
      "Old employer NBI still listed as current",
      "About empty",
      "Location is NC; should be SC territory"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: ""
  },
  4: {
    found: true, username: "benjamin-singleton-57319a161", profileUrl: "https://www.linkedin.com/in/benjamin-singleton-57319a161/",
    currentHeadline: "Executive Mortgage Advisor. NMLS#2341198",
    currentEmployer: "Finaya Home Loans · Executive Mortgage Advisor",
    currentLocation: "Clover, South Carolina",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "Headline does not say 'at Finaya Home Loans' inline",
      "About lacks Finaya, phone, pre-approval link, disclosure",
      "Experience start date is Feb 2026 (should be Oct 2026)",
      "No company NMLS #2470186 in experience"
    ],
    priority: "P1", status: "Needs headline/About update",
    aboutText: "Career Highlights\n- 10 years experience in the wholesale mortgage industry.\n- DE certified underwriter.\n- 7+ years underwriting experience in Jumbo and all conforming products.\n- Majority of experience is in solution underwriting and fraud prevention.\n- 4+ years experience in business development\n… more"
  },
  5: {
    found: true, username: "christinayudzitski", profileUrl: "https://www.linkedin.com/in/christinayudzitski/",
    currentHeadline: "Mortgage Loan Originator at Innovative Mortgage Services, Inc.",
    currentEmployer: "Innovative Mortgage Services, Inc.",
    currentLocation: "Monroe, North Carolina",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "Profile is entirely for wrong employer",
      "No Finaya mention anywhere",
      "About empty",
      "Employment status must be verified with Nick/JB"
    ],
    priority: "P0", status: "Wrong employer",
    aboutText: ""
  },
  6: {
    found: true, username: "raymond-pinkston-9113483b", profileUrl: "https://www.linkedin.com/in/raymond-pinkston-9113483b/",
    currentHeadline: "General Partner at Build UP Properties LLC",
    currentEmployer: "Pinkston Tax & Advisory Group LLC / Build UP Properties / ASHBRANNAD LLC / RPM Warrior Capital",
    currentLocation: "Huntersville, North Carolina",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No mortgage / Finaya presence",
      "May be wrong person or not updated",
      "Employment status must be verified with Nick/JB"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: ""
  },
  7: {
    found: true, username: "kheseypich", profileUrl: "https://www.linkedin.com/in/kheseypich/",
    currentHeadline: "Executive Mortgage Advisor at Finaya",
    currentEmployer: "Finaya · Executive Mortgage Advisor",
    currentLocation: "Forney, Texas",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "Company name truncated to 'Finaya' (should be 'Finaya Home Loans')",
      "No NMLS, markets, or state in headline",
      "Experience start date Aug 2026 (should be Oct 2026)",
      "Location is Texas; should be FL"
    ],
    priority: "P1", status: "Needs location fix",
    aboutText: ""
  },
  8: {
    found: true, username: "andrew-simmons-289379141", profileUrl: "https://www.linkedin.com/in/andrew-simmons-289379141/",
    currentHeadline: "Executive Mortgage Advisor at Finaya Home Loans",
    currentEmployer: "Finaya Home Loans · Executive Mortgage Advisor",
    currentLocation: "Las Vegas, Nevada",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "Location is Las Vegas, NV; should be NC",
      "'Open to work' badge active",
      "About empty",
      "Experience claims '11.5 days from application to Clear to Close' (guarantee-style language)",
      "Experience start date Sep 2026 (should be Oct 2026)"
    ],
    priority: "P0", status: "Needs location fix",
    aboutText: ""
  },
  9: {
    found: true, username: "marksmortgage", profileUrl: "https://www.linkedin.com/in/marksmortgage/",
    currentHeadline: "Executive Mortgage Advisor at Finaya Home Loans",
    currentEmployer: "Finaya Home Loans · Executive Mortgage Advisor",
    currentLocation: "Spokane, Washington",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "About empty",
      "No company NMLS #2470186 in experience",
      "Experience start date Aug 2026 (should be Oct 2026)",
      "Location is Washington; should be GA"
    ],
    priority: "P1", status: "Needs location fix",
    aboutText: ""
  },
  10: {
    found: true, username: "mattsquires11", profileUrl: "https://www.linkedin.com/in/mattsquires11/",
    currentHeadline: "Senior Loan Officer at Finaya Home Loans",
    currentEmployer: "Mutual of Omaha Mortgage · Senior Mortgage Loan Officer",
    currentLocation: "Greater Tampa Bay Area, Florida",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "Headline says Finaya but experience lists Mutual of Omaha as current",
      "No Finaya experience entry",
      "Title mismatch (Senior Loan Officer vs Executive Mortgage Advisor)",
      "About empty"
    ],
    priority: "P0", status: "Wrong employer",
    aboutText: ""
  },
  11: {
    found: true, username: "paul-grady-a848b231", profileUrl: "https://www.linkedin.com/in/paul-grady-a848b231/",
    currentHeadline: "Executive Mortgage Advisor, NMLS# 2502731 at Finaya Home Loans",
    currentEmployer: "Finaya Home Loans · Executive Mortgage Advisor",
    currentLocation: "Post Falls, Idaho",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "About empty",
      "No company NMLS #2470186 in experience",
      "Experience start date Sep 2026 (should be Oct 2026)",
      "Location is Idaho; should be FL",
      "Prior Sage Home Loans entry contains superlative: 'some of the lowest monthly payment loans in the industry'"
    ],
    priority: "P1", status: "Needs location fix",
    aboutText: ""
  },
  12: {
    found: true, username: "geneva-price-mortgage", profileUrl: "https://www.linkedin.com/in/geneva-price-mortgage/",
    currentHeadline: "Executive Mortgage Advisor at Finaya Home Loans",
    currentEmployer: "Finaya Home Loans · Executive Mortgage Advisor",
    currentLocation: "Toledo, Washington",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "About still promotes old employer Jet Direct Mortgage (email, phone, website)",
      "About says 'I close loans anywhere in Washington' (wrong state)",
      "No Finaya company NMLS #2470186 or Equal Housing disclosure",
      "Experience start date Sep 2026 (should be Oct 2026)",
      "Location is Washington; should be FL",
      "Implied guarantee language ('quick cleared to close')"
    ],
    priority: "P0", status: "Needs location/About fix",
    aboutText: "🤝 I provide my clients, buyers agents, & builders personalized 1-on-1 services, making the mortgage process smooth & stress-free.\n\n🤝 I believe in working directly with my clients & referral partners to build long-lasting relationships, based on respect, loyalty, & trust.\n\n🤔 Are your potential buyers not getting pre-approved fast enough?\n\n🚀 I have the experience that you can count on to review your client's credit report & all of their income & asset information in a timely fashion.\n\n🤔 Have you experienced delays in loan processing or status updates?\n\n🚀 I have the time & the resources to provide my clients & partners with 1-on-1 attention. My clients & referral partners experience quick & efficient service so everyone knows precisely the status of the buyer's loan file.\n\n🤔 Want to clear your loan quickly?\n\n🚀 I process & pre-underwrite all loan files in-house. I gather everything upfront & submit complete loan packages, allowing me to obtain a quick cleared to close status.\n\n🥇 There is never a communication breakdown with me. My streamlined in-house workflow allows me to analyze quickly & solve the most difficult scenarios.\n\n🥇 For the last 19 years, I have had the pleasure of working with & supporting Washington State Realtors, helping their clients achieve their homeownership dreams.\n\n📈 Client satisfaction is my absolute top priority. I close loans anywhere in Washington & offer the following products, including but not limited to:\n\n✔️Conventional, FHA, VA & USDA loans\n✔️Renovation loans\n✔️Simultaneous Second Mortgages\n✔️Home Equity Lines of Credit\n\n👇 But don't just take my word for it, have a look at what some of my current clients have to say about working with me.\n\n📱Available when you need me, seven days a week. If you want to achieve consistent on-time closings, please get in touch by messaging me & let's connect!\n\n😀Geneva Price\n📧 G.Price@JetDirectMortgage.com\n📞 360-581-8596\n📄NMLS# 247066\n🌐︎https://team.jetdirectmortgage.com/geneva\n… more\n\nServices\n\nLoans\n\nMortgage Lending\n\nCommercial Lending\n\nCommercial Real Estate\n\nReal Estate\n\nRelocation\n\nRequest services\nShow all\nFeatured\n\nLink\n\nMortgage lenders on Zillow\n\nZillow\n\nCustomer reviews"
  },
  13: {
    found: true, username: "cleo-lewis-837aba85", profileUrl: "https://www.linkedin.com/in/cleo-lewis-837aba85/",
    currentHeadline: "NMLS: 1451574 Get Clear To Close in 15 days or less!*Depending on loan type and terms and conditions of the loan.",
    currentEmployer: "Wicker Park Mortgage · Business Owner",
    currentLocation: "Denver, Colorado",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No Finaya presence",
      "Current employer is Wicker Park Mortgage",
      "Headline contains 15-day close guarantee",
      "Location OK but needs Finaya role"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: "I have been in the Mortgage Industry for the last 15 years. Jumbo, Conventional, FHA, and VA loans. 10 years plus underwriting experience. Loan Origination and NMLS certification. NMLS ID: 1451574"
  },
  14: {
    found: true, username: "brandon-metoyer-51276a59", profileUrl: "https://www.linkedin.com/in/brandon-metoyer-51276a59/",
    currentHeadline: "Realtor and Loan Officer Manager",
    currentEmployer: "Barrett Financial Group LLC · Mortgage Loan Officer + Real Estate Agent",
    currentLocation: "Aurora, Colorado",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No Finaya presence",
      "About describes IT/network analyst career (outdated)",
      "On hold pending Nick approval for full-time onboarding"
    ],
    priority: "Hold", status: "On hold",
    aboutText: "An accomplished Network Analyst, currently pursuing a B.S in Computer Science and a CCNA certification - both projected late 2019. Experience in Ticketing, Escalation, Switching & Routing, Administrative support, and Customer service."
  },
  15: {
    found: true, username: "ashley-gerise", profileUrl: "https://www.linkedin.com/in/ashley-gerise/",
    currentHeadline: "Entrepreneur | Esthetician, Bookkeeping, Loan officer",
    currentEmployer: "Ozell Divine · Owner (no Finaya)",
    currentLocation: "Denver Metropolitan Area, Colorado",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No Finaya presence",
      "Primary current role is esthetician; last mortgage role ended Jun 2025",
      "Active status must be verified with JB/Nick"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: "Experienced Finance Professional with a demonstrated history of working in the banking and finance industry. Skilled in Income Tax, Financial Accounting, Mortgage Loans(FHA,Conventional, VA), and Tax Preparation. Strong financial background with an Associate's degree focused in Accounting and Finance from Ivy Tech Community College.\n\nFeatured\n\nMedia\n\nPublic notary\n\nNotary\n\nMedia\n\nMLO\n\nNMLS\n\nMedia\n\nAccounting Degree\n\nMedia\n\nTax Preparation!"
  },
  16: {
    found: true, username: "jfenkell", profileUrl: "https://www.linkedin.com/in/jfenkell/",
    currentHeadline: "Sr. Loan Consultant",
    currentEmployer: "West Capital Lending / Newrez / Better (no Finaya)",
    currentLocation: "Southfield, Michigan",
    nmlsMention: true, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No Finaya presence",
      "About still links to New American Funding profile",
      "Location is Michigan; should be FL"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: "https://www.newamericanfunding.com/mortgage-loans/jeffreyfenkell\nSenior Loan Officer, New American Funding, LLC (NMLS #6606), NMLS# 1419136\n\nMy specialties include:\n\n•\tConventional/FHA/VA/Jumbo Loan Products\n•\tPurchase Mortgages\n•\tRefinances\n•\tS.A.F.E. Certified\n•\tMarketing\n… more"
  },
  17: {
    found: true, username: "anthony-piccione-17b0ab110", profileUrl: "https://www.linkedin.com/in/anthony-piccione-17b0ab110/",
    currentHeadline: "Senior Loan Consultant",
    currentEmployer: "Better (Sep 2024–Dec 2025); no Finaya",
    currentLocation: "Oakland, Michigan",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "No Finaya presence",
      "Most recent role ended Dec 2025",
      "About empty",
      "Location is Michigan; should be FL",
      "Employment status must be verified with Nick/JB"
    ],
    priority: "P0", status: "No Finaya presence",
    aboutText: ""
  },
  18: {
    found: false, username: null, profileUrl: null,
    currentHeadline: "",
    currentEmployer: "",
    currentLocation: "",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: ["LinkedIn profile not found — provide URL to JB/Nick"],
    priority: "P3", status: "Not found",
    aboutText: ""
  },
  19: {
    found: true, username: "michael-hakun-5516aa31", profileUrl: "https://www.linkedin.com/in/michael-hakun-5516aa31/",
    currentHeadline: "Executive Mortgage Advisor at Finaya",
    currentEmployer: "Finaya · Mortgage Broker",
    currentLocation: "Detroit Metropolitan Area, Michigan",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: true,
    issues: [
      "Company name truncated to 'Finaya' (should be 'Finaya Home Loans')",
      "Title is Mortgage Broker (should be Executive Mortgage Advisor)",
      "About is generic sales summary with no Finaya/NMLS/disclosure",
      "Old Quicken Loans contact info in history",
      "Location is Michigan; should be FL",
      "Old entries contain superlatives: 'best rate' and 'amazing product pricing'"
    ],
    priority: "P1", status: "Needs location/title fix",
    aboutText: "With over 10 years of experience in sales, relationship building, product and service line creation, general business and marketing, retail, along with a college education as a sales and business marketing major, I have developed skills essential for a professional, business realated, or sales representative role.\n\nSpecifically, my skills include: Solution focused product and service analysis for each client or business specific area of needs, exceeding quota and revenue targets, proposing solutions that benefit the company and the client, building strong relationships with customers, retaining client business and long term referrals, and mastering the use of computer software and related technologies. Learning the lesson of being well prepared as a key to success in building a value based sales and overall business relationship.\n\nSpecialties: -Client attention is # 1\n-Long term sales growth while reducing churn\n-Customer satisfaction and loyalty\n-Easy to understand F.A.B. and value sales style\n-Comfortable and firm business value based negotiations\n-Listening and probing skills to seek to understand true objective and client needs/wants\n-Referral and word of mouth networks\n-Tie down issues to solve problems and create a solution\n… more"
  },
  20: {
    found: true, username: "steven-fox-9bba7a60", profileUrl: "https://www.linkedin.com/in/steven-fox-9bba7a60/",
    currentHeadline: "Mortgage Banker",
    currentEmployer: "Rocket · Delivery Manager through May 2026 (no Finaya)",
    currentLocation: "Royal Oak, Michigan",
    nmlsMention: false, marketsMention: false, finayaAsCurrent: false,
    issues: [
      "Profile is entirely Rocket-branded",
      "'Open to work' post active",
      "Old posts advertise 'lowest rates' and $500 closing bonus",
      "Location is Michigan; should be NC"
    ],
    priority: "P0", status: "Wrong employer",
    aboutText: "me & what I'm looking for:\n⭐ I've previously worked at Rock Central and Rocket the last 14 years in various capacities- sales, marketing, data, product management.\n\n12\n1\n2\n​\n\nSteven Fox\n\n • 3rd+\n\nMortgage Banker\n\n5yr\n\nDon't max out your credit cards 💳. Get the money you need for holiday spending with a cash-out refinance from QL! Great rates and $500 after closing 💰. Click my link to see more details and get started: https://lnkd.in/eH_QK8C\n\nAmerica's Largest Mortgage Lender | Quicken Loans\nAmerica's Largest Mortgage Lender | Quicken Loans\n\nquickenloans.com\n\n3\n\n​\n\n​\n\n​\n\nSteven Fox\n\n • 3rd+\n\nMortgage Banker\n\n6yr\n\nQuicken Loans is hiring, reach out to me if you are interested.\n\n3\n\n​\n\n​\n\n​\n\nSteven Fox\n\n • 3rd+\n\nMortgage Banker\n\n6yr\n\nMortgage rates are at some of the lowest we have seen in years! Whether you are interested in buying a home or refinancing, please reach out to me and see if we can improve your situation. #quickenloans #rocketmortgage\n\n2\n\n​\n\n​\n\n​\nShow all"
  }
};

const FILTERS = [
  {key:"all", label:"All",            test:a=>true},
  {key:"SC",  label:"South Carolina", test:a=>a.state==="SC" || (a.licensedStates && a.licensedStates.includes("SC"))},
  {key:"NC",  label:"North Carolina", test:a=>a.state==="NC" || (a.licensedStates && a.licensedStates.includes("NC"))},
  {key:"FL",  label:"Florida",        test:a=>a.state==="FL" || (a.licensedStates && a.licensedStates.includes("FL"))},
  {key:"GA",  label:"Georgia",        test:a=>a.state==="GA" || (a.licensedStates && a.licensedStates.includes("GA"))},
  {key:"CO",  label:"Colorado",       test:a=>a.state==="CO" || (a.licensedStates && a.licensedStates.includes("CO"))},
  {key:"PEN", label:"Pending",        test:a=>a.state==="Pending" || a.status==="waiting"}
];

/* ---------------- COPY GENERATORS (unchanged, audited) ---------------- */
const mk = a => a.markets.join(", ");
function linkedinHeadline(a){ return `${a.title} at ${COMPANY.name} | NMLS #${a.nmls} | Serving ${mk(a)}${a.state!=="Pending" ? ", " + a.state : ""}`; }
function linkedinAbout(a){
  let p2 = `Whether this is a first home, a move to more space, or a refinance to reshape a monthly budget, I offer conventional, FHA, VA, jumbo, and refinancing solutions tailored to each client's financial timeline. My process is straightforward: listen first, explain every option in plain language, and build the loan around the life it needs to support.`;
  if(a.state==="GA") p2 += ` Licensed as a Georgia Residential Mortgage Licensee.`;
  if(a.state==="CO") p2 += ` ${COMPANY.name}, Company NMLS #${COMPANY.nmls}.`;
  const phoneLine = a.phone==="Pending" ? `My direct line is being assigned and will be posted here shortly.` : `Call or text me directly on my direct line at ${a.phone},`;
  const linkLine  = a.link==="Pending"  ? `or start your pre-approval through ${COMPANY.name} at your earliest convenience.` : `or start your pre-approval at ${a.link}.`;
  return `Helping families and homebuyers across ${mk(a)} navigate the home financing process with clarity and total confidence.

${p2}

${phoneLine} ${linkLine} Serving ${mk(a)}${a.state!=="Pending" ? ", " + a.state : ""} with one goal: a smooth, predictable path to the closing table.

NMLS #${a.nmls} | ${COMPANY.name}, Company NMLS #${COMPANY.nmls}

${COMPANY.disclosure}`;
}
function experienceBlock(a){
  return `${a.title}
${COMPANY.name} | NMLS #${COMPANY.nmls}
Oct 2026 - Present | ${a.state!=="Pending" ? a.state : "Rock Hill, SC (HQ)"}

• Originate and structure residential mortgage loans, including conventional, FHA, VA, and jumbo products, for homebuyers across ${mk(a)}.
• Guide each client from first conversation to closing with clear communication, fast follow-up, and full transparency on rates, costs, and timelines.
• Build lasting referral relationships with local real estate professionals by delivering a smooth, predictable lending experience for every client.`;
}
function socialBio(a){
  let bio = [a.title, COMPANY.name, "NMLS #" + a.nmls, "Serving " + mk(a)].join(" | ");
  if(bio.length > 160) bio = [a.title, COMPANY.name, "NMLS #" + a.nmls, a.state !== "Pending" ? a.state : "Serving homeowners nationwide"].join(" | ");
  if(a.phone !== "Pending" && bio.length + a.phone.length + 1 <= 160) bio += " " + a.phone;
  return bio;
}
function socialDisclosure(a){ return `NMLS #${a.nmls} | ${COMPANY.name}, NMLS #${COMPANY.nmls}. Equal Housing Lender. ${COMPANY.disclosure}`; }
function emailSignature(a){
  const phone = a.phone==="Pending" ? "Direct line: assigned shortly" : `Direct: ${a.phone}`;
  const cell  = a.cell ? ` | Cell: ${a.cell}` : "";
  const email = a.email ? `\nEmail: ${a.email}` : "";
  const link  = a.link==="Pending"  ? "" : `\nStart your pre-approval: ${a.link}`;
  return `${a.name}
${a.title} | ${COMPANY.name}
${phone}${cell}${email}${link}

NMLS #${a.nmls} | Company NMLS #${COMPANY.nmls}
Equal Housing Lender | NMLS Consumer Access: www.nmlsconsumeraccess.org

Confidentiality Notice: This message and any attachments are for the sole use of the intended recipient and may contain confidential information. Any unauthorized review, use, or distribution is prohibited. This is not a commitment to lend or extend credit; all loans are subject to credit approval.`;
}

/* ---------------- STATE ---------------- */
let activeFilter = "all";
let searchTerm = "";
let selectedId = 1;
let activeTab = "li";
let bannerPreset = "li";
let bannerStyle = "corporate";
let showSafeArea = false;
let includePortrait = true;
let headshotVariant = "clean";

const HEADSHOT_MAP = {
  1:  "advisor_1_nick_campo",
  2:  "advisor_2_alan_sacks",
  3:  "advisor_3_john_birke",
  4:  "advisor_4_ben_singleton",
  5:  "advisor_5_christina_yudzitski",
  6:  "advisor_6_raymond_m_pinkston",
  7:  "advisor_7_khesey_silva",
  8:  "advisor_8_andrew_simmons",
  9:  "advisor_9_mark_glatzmaier_ii",
  10: "advisor_10_matthew_squires",
  11: "advisor_11_paul_grady",
  12: "advisor_12_geneva_lynne_price",
  13: "advisor_13_cleo_lewis",
  14: "advisor_14_brandon_metoyer",
  15: "advisor_15_gerise_wilson",
  16: "advisor_16_jeff_fenkell",
  17: "advisor_17_tony_piccione",
  18: "advisor_18_warren_potter",
  19: "advisor_19_michael_hakun",
  20: "advisor_20_steve_fox",
  21: "advisor_21_jamie_repasky"
};
function getHeadshotUrl(id, variant="clean"){
  const base = HEADSHOT_MAP[id] || "advisor_1_nick_campo";
  return `/headshots/studio/${base}_${variant}.png`;
}
function getHeadshotThumb(id){
  return `/headshots/thumbnails/advisor_${id}.png`;
}
const _advisorImgCache = {};
function getAdvisorImg(id, cb){
  const url = getHeadshotUrl(id, "clean");
  if(_advisorImgCache[url]){
    cb(_advisorImgCache[url]);
    return;
  }
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = ()=>{
    _advisorImgCache[url] = img;
    cb(img);
  };
  img.onerror = ()=>{
    cb(null);
  };
  img.src = url;
}
async function copyHeadshotToClipboard(url){
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    if(navigator.clipboard && navigator.clipboard.write){
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      toast("Headshot copied to clipboard");
    } else {
      toast("Clipboard copy not supported in this browser");
    }
  } catch(e){
    toast("Headshot copy blocked by browser permissions");
  }
}

const BANNER_PRESETS = {
  li:{label:"LinkedIn", w:1584, h:396, tag:"Cover 4:1"},
  fb:{label:"Facebook", w:820,  h:312, tag:"Header 2.6:1"},
  x:{label:"X Header",  w:1500, h:500, tag:"Header 3:1"}
};
const BANNER_STYLES = {
  corporate:{label:"Clean Corporate", desc:"Teal 950 Prestige · Architectural Structure"},
  editorial:{label:"Premium Editorial", desc:"Slate 50 Ivory · Private Banking Typography"},
  minimal:{label:"Modern Executive", desc:"Obsidian Dark · Quick-Scan Contact Grid"}
};
const STATUS_WORD = {complete:"Ready", waiting:"Pending", blocked:"Locked"};
const STATE_LABEL = {SC:"South Carolina", NC:"North Carolina", FL:"Florida", GA:"Georgia", CO:"Colorado", "Pending":"Pending"};

/* ---------------- HELPERS ---------------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function toast(msg){
  $("#toastMsg").textContent = msg;
  const t = $("#toast");
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(()=>t.classList.remove("show"), 1700);
}
function copyText(text, btn){
  const done = () => {
    toast("Copied to clipboard");
    if(btn){
      btn.textContent = "Copied";
      btn.classList.add("done");
      setTimeout(()=>{btn.textContent = "Copy";btn.classList.remove("done");},1300);
    }
  };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done));
  } else { fallbackCopy(text,done); }
}
function fallbackCopy(text, done){
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try{ document.execCommand("copy"); }catch(e){}
  document.body.removeChild(ta);
  done();
}

/* ---------------- DIRECTORY ---------------- */
function renderHeaderStats(){
  const total = ADVISORS.length;
  const ready = ADVISORS.filter(a => a.status === "complete").length;
  const pending = ADVISORS.filter(a => a.status === "waiting").length;
  const locked = ADVISORS.filter(a => a.status === "blocked").length;
  const pct = Math.round((ready / total) * 100);

  const prog = $("#headerProgress");
  if(prog){
    prog.innerHTML = `
      <span class="big num"><b>${ready}</b>/${total}</span>
      <span style="display:flex;flex-direction:column;gap:6px">
        <span class="cap">Advisors ready</span>
        <span class="progress-track"><i style="width:${pct}%"></i></span>
      </span>`;
  }
  const dir = $("#dirCounts");
  if(dir){
    dir.innerHTML = `<b>${total}</b> total · <b>${ready}</b> ready · <b>${pending}</b> pending · <b>${locked}</b> locked`;
  }
}

function renderTabs(){
  $("#filterTabs").innerHTML = FILTERS.map(f=>{
    const n = ADVISORS.filter(f.test).length;
    return `<button class="fbtn ${f.key===activeFilter?'active':''}" role="tab" aria-selected="${f.key===activeFilter}" data-f="${f.key}">${f.label}<span class="c num">(${n})</span></button>`;
  }).join("");
  document.querySelectorAll(".fbtn").forEach(b=>{ b.onclick = ()=>{ activeFilter = b.dataset.f; renderTabs(); renderRoster(); }; });
}
function renderRoster(){
  const list = ADVISORS.filter(a=>{
    if(!FILTERS.find(f=>f.key===activeFilter).test(a)) return false;
    if(!searchTerm) return true;
    return (a.name+" "+a.nmls+" "+a.markets.join(" ")+" "+a.state).toLowerCase().includes(searchTerm);
  });
  $("#roster").innerHTML = list.length ? list.map(a=>`
    <div class="row ${a.id===selectedId?'active':''}" data-id="${a.id}" role="button" tabindex="0" aria-label="${esc(a.name)}, ${STATUS_WORD[a.status]}">
      <img src="${getHeadshotThumb(a.id)}" class="ravatar" alt="${esc(a.name)}" loading="lazy">
      <span class="rname">${esc(a.name)}</span>
      <span class="rmeta">NMLS #${a.nmls} · ${esc(a.markets[0])}</span>
      <span class="rstatus ${a.status}"><span class="dot ${a.status}"></span>${STATUS_WORD[a.status]}</span>
    </div>`).join("")
    : `<div class="empty">No advisors match.</div>`;
  document.querySelectorAll(".row").forEach(el=>{
    el.onclick = ()=>selectAdvisor(+el.dataset.id);
    el.onkeydown = e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();selectAdvisor(+el.dataset.id);} };
  });
}
function selectAdvisor(id){ selectedId = id; renderRoster(); renderStage(); }

/* ---------------- WORKSPACE ---------------- */
function copyBtn(id){ return `<button class="copy" data-copy="${id}">Copy</button>`; }
function docSection(id, title, hint, inner, extraClass){
  return `<div class="doc">
    <div class="doc-head"><span class="t">${title}</span>${hint?`<span class="hint">${hint}</span>`:""}${copyBtn(id)}</div>
    <div class="${extraClass || "plain"}">${inner}</div>
  </div>`;
}
function aboutHTML(a){
  const paras = linkedinAbout(a).split(/\n\n+/);
  const legal = paras.pop();
  return `<div class="doc-body">${paras.map(p=>`<p>${esc(p)}</p>`).join("")}<p class="legal">${esc(legal)}</p></div>`;
}
function tabbar(){
  const tabs = [["li","LinkedIn"],["scrub","LinkedIn Scrub"],["social","Facebook & Instagram"],["gbp","Google Business Profile"],["sig","Email Signature"],["banner","Banner Generator"],["headshot","Studio Headshot"]];
  return `<div class="tabs" role="tablist">${tabs.map(([k,l])=>`<button class="tab ${k===activeTab?'active':''}" role="tab" aria-selected="${k===activeTab}" data-tab="${k}">${l}</button>`).join("")}</div>`;
}

function renderScrubPane(a){
  const audit = LINKEDIN_AUDIT[a.id] || { found:false, username:null, profileUrl:null, currentHeadline:"", currentEmployer:"Unknown", currentLocation:"Unknown", nmlsMention:false, marketsMention:false, finayaAsCurrent:false, issues:["No audit data available"], priority:"P3", status:"Unknown", aboutText:"" };

  const onHold = a.status === "waiting" || audit.priority === "Hold";
  const notFound = !audit.found;

  const badgeClass = audit.priority === "P0" ? "p0" : audit.priority === "P1" ? "p1" : audit.priority === "P2" ? "p2" : audit.priority === "P3" ? "p3" : audit.priority === "Hold" ? "hold" : "ready";
  const badgeLabel = audit.priority === "Hold" ? "Hold" : audit.priority;

  if(notFound){
    return `<div class="pane active">
      <div class="scrub-missing">
        <div style="font-size:18px;font-weight:700;color:var(--ink);margin-bottom:8px">LinkedIn profile not found</div>
        <p>Please provide ${esc(a.name)}'s LinkedIn URL to JB or Nick so the scrub packet can be generated.</p>
      </div>
    </div>`;
  }

  if(onHold){
    return `<div class="pane active">
      <div class="scrub-hold">
        <b>${esc(a.name)} is on hold.</b> ${esc(a.note || "Nick Campo has paused onboarding for this advisor. Do not publish or update the LinkedIn profile until approval is given.")}
      </div>
    </div>`;
  }

  const profileLink = audit.profileUrl
    ? `<div class="scrub-url-wrap"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg><a class="scrub-url" href="${esc(audit.profileUrl)}" target="_blank" rel="noopener">${esc(audit.profileUrl)}</a></div>`
    : "";

  const currentAbout = audit.aboutText.trim()
    ? `<pre>${esc(audit.aboutText)}</pre>`
    : `<div class="empty">No About text found</div>`;

  const targetAboutHTML = aboutHTML(a);

  const issueTag = issue => {
    let cls = "";
    const low = issue.toLowerCase();
    if(low.includes("compliance") || low.includes("superlative") || low.includes("guarantee") || low.includes("lowest") || low.includes("$500") || low.includes("best rate") || low.includes("15 days") || low.includes("11.5 days")) cls = "compliance";
    else if(low.includes("location")) cls = "location";
    return `<span class="scrub-issue ${cls}">${esc(issue)}</span>`;
  };

  const summary = (() => {
    const parts = [];
    if(!audit.finayaAsCurrent) parts.push(`add Finaya Home Loans as the current employer`);
    if(!audit.nmlsMention) parts.push(`include NMLS #${a.nmls}`);
    if(!audit.marketsMention) parts.push(`add assigned markets and state`);
    if(audit.issues.some(i => i.toLowerCase().includes("location"))) parts.push(`update the LinkedIn location to match the assigned territory`);
    if(audit.issues.some(i => /compliance|superlative|guarantee|lowest|\$500|15 days|11\.5 days|best rate/i.test(i))) parts.push(`scrub or qualify non-compliant language`);
    if(audit.issues.some(i => i.toLowerCase().includes("open to work"))) parts.push(`remove the 'Open to work' badge`);
    if(audit.aboutText.trim() && !audit.aboutText.includes("Finaya")) parts.push(`replace the About section with the turnkey copy`);
    else if(!audit.aboutText.trim()) parts.push(`add the turnkey About section`);
    if(!parts.length) return `${esc(a.name)}'s LinkedIn profile is aligned with the turnkey target. No scrub actions are required.`;
    return `Scrub actions for ${esc(a.name)}: ${parts.join("; ")}.`;
  })();

  return `<div class="pane active">
    <div class="scrub-card">
      <img src="${getHeadshotThumb(a.id)}" class="scrub-avatar" alt="${esc(a.name)}">
      <div class="scrub-meta">
        <div class="scrub-name">${esc(a.name)}</div>
        <div class="scrub-nmls">NMLS #${a.nmls} · ${esc(a.title)}</div>
        <div class="scrub-badges">
          <span class="scrub-badge ${badgeClass}">${badgeLabel} · ${esc(audit.status)}</span>
          ${audit.found ? `<span class="scrub-badge p3">Found</span>` : ""}
        </div>
        ${profileLink}
      </div>
    </div>

    <div class="scrub-grid">
      <div class="scrub-col current">
        <div class="scrub-col-head"><span class="t">Current headline</span><button class="copy" data-copy="curHeadline">Copy current</button></div>
        <div class="scrub-col-body">${esc(audit.currentHeadline || "—")}</div>
      </div>
      <div class="scrub-col target">
        <div class="scrub-col-head"><span class="t">Target headline</span><button class="copy" data-copy="headline">Copy target</button></div>
        <div class="scrub-col-body">${esc(linkedinHeadline(a))}</div>
      </div>
      <div class="scrub-col current">
        <div class="scrub-col-head"><span class="t">Current About</span></div>
        <div class="scrub-col-body ${audit.aboutText.trim()?'':'empty'}">${currentAbout}</div>
      </div>
      <div class="scrub-col target">
        <div class="scrub-col-head"><span class="t">Target About</span><button class="copy" data-copy="about">Copy target</button></div>
        <div class="scrub-col-body">${targetAboutHTML}</div>
      </div>
      <div class="scrub-col current">
        <div class="scrub-col-head"><span class="t">Current experience</span></div>
        <div class="scrub-col-body">${esc(audit.currentEmployer || "—")}</div>
      </div>
      <div class="scrub-col target">
        <div class="scrub-col-head"><span class="t">Target experience</span><button class="copy" data-copy="exp">Copy target</button></div>
        <div class="scrub-col-body"><pre>${esc(experienceBlock(a))}</pre></div>
      </div>
    </div>

    <div class="scrub-issues">
      <h4>Issues checklist · ${audit.issues.length} items</h4>
      <div class="scrub-issue-list">${audit.issues.map(issueTag).join("")}</div>
    </div>

    <div class="scrub-summary">${esc(summary)}</div>
  </div>`;
}


function renderGbpPane(a){
  const g = GBP_DATA[a.id] || {
    bname: `${a.name}, ${a.title} - Finaya Home Loans`,
    primaryCat: "Mortgage broker",
    secCats: "Mortgage lender, Loan agency, Financial consultant",
    areas: a.markets.join(", ") + ", " + (STATE_LABEL[a.state] || a.state),
    areasList: a.markets,
    phone: a.phone,
    website: "https://" + a.link,
    hours: "Monday–Friday: 8:30 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed",
    desc: `Licensed mortgage advisor at Finaya Home Loans serving home buyers across ${a.state}. NMLS #${a.nmls}. Equal Housing Lender.`
  };

  const onHold = a.status === "waiting" || g.onHold;
  const holdBanner = onHold ? `
    <div class="gbp-alert">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>
        <b>Configuration Staged · Onboarding On Hold:</b> Nick Campo has placed ${esc(a.name)} on hold (part-time transition / OneCloud phone pending). Data below is pre-staged for turnkey publishing once approved.
      </div>
    </div>
  ` : "";

  const pillsHTML = g.areasList && g.areasList.length ? `
    <div class="gbp-pills">
      ${g.areasList.map(area=>`<span class="gbp-pill" data-copy-area="${esc(area)}" title="Click to copy this area">${esc(area)}</span>`).join("")}
    </div>
  ` : "";

  return `<div class="pane active">
    <div class="gbp-hero">
      <div class="gbp-hero-meta">
        <div class="gbp-hero-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Google Business Profile (GBP) Turnkey Setup Kit
        </div>
        <div class="gbp-hero-sub">
          Service Area Business (SAB) Mode · Address Hidden on Google Maps · Deliverable 2 & 3 Compliance Standard
        </div>
      </div>
      <div class="gbp-hero-actions">
        <button class="btn-action btn-secondary" data-copy="gbpBundle">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>Copy All Fields</span>
        </button>
        <a class="btn-action btn-primary" href="https://business.google.com/create" target="_blank" rel="noopener">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          <span>Open Google Manager ↗</span>
        </a>
      </div>
    </div>

    ${holdBanner}

    <div class="gbp-alert" style="background:rgba(0,95,90,0.06);border-color:rgba(0,150,137,0.25);color:var(--teal-deep)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <div>
        <b>Mandatory Rule during Step 2:</b> When Google asks <em>"Do you want to add a location customers can visit, like a store or office?"</em> 👉 <b>Always select "NO"</b>. This ensures the loan officer's personal home address is hidden from the public, and Google creates an approved regional Service Area polygon.
      </div>
    </div>

    <div class="gbp-grid">
      <!-- 1. Business Name -->
      <div class="gbp-card">
        <div class="gbp-card-head">
          <span class="gbp-card-title">1. Business Name</span>
          <button class="copy" data-copy="gbpName">Copy</button>
        </div>
        <div class="gbp-card-body">
          <div class="gbp-val">${esc(g.bname)}</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:6px">Exact compliance naming · Avoid spam buzzwords</div>
        </div>
      </div>

      <!-- 2. Primary Category -->
      <div class="gbp-card">
        <div class="gbp-card-head">
          <span class="gbp-card-title">2. Primary Category</span>
          <button class="copy" data-copy="gbpCatPrimary">Copy</button>
        </div>
        <div class="gbp-card-body">
          <div class="gbp-val">Mortgage broker</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:6px">Secondary: Mortgage lender, Loan agency, Financial consultant</div>
        </div>
      </div>

      <!-- 3. Storefront / Location -->
      <div class="gbp-card">
        <div class="gbp-card-head">
          <span class="gbp-card-title">3. Storefront Location</span>
          <span class="badge" style="background:var(--ok-bg);color:var(--ok);font-size:11px;font-weight:700;padding:2px 8px;border-radius:99px">SAB Mode</span>
        </div>
        <div class="gbp-card-body">
          <div class="gbp-val" style="color:var(--lock)">SELECT "NO" (Address Hidden)</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:6px">Home address is strictly private for verification; never displayed publicly</div>
          ${g.verificationAddress ? `
          <div style="margin-top:10px;padding:8px 10px;background:var(--paper);border:1px dashed var(--line-strong);border-radius:6px;font-size:12px">
            <div style="font-size:10.5px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">Google Backend Verification Address:</div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span class="mono" style="font-weight:600;color:var(--ink)">${esc(g.verificationAddress)}</span>
              <button class="copy-mini" data-copy-val="${esc(g.verificationAddress)}">Copy</button>
            </div>
          </div>` : ''}
        </div>
      </div>

      <!-- 4. Phone Number -->
      <div class="gbp-card">
        <div class="gbp-card-head">
          <span class="gbp-card-title">4. OneCloud Virtual Phone</span>
          <button class="copy" data-copy="gbpPhone">Copy</button>
        </div>
        <div class="gbp-card-body">
          <div class="gbp-val mono">${esc(g.phone)}</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:6px">Assigned OneCloud VoIP line · Never enter personal mobile numbers</div>
        </div>
      </div>

      <!-- 5. Website URL -->
      <div class="gbp-card">
        <div class="gbp-card-head">
          <span class="gbp-card-title">5. Website & Booking URL</span>
          <button class="copy" data-copy="gbpUrl">Copy</button>
        </div>
        <div class="gbp-card-body">
          <div class="gbp-val"><a href="${esc(g.website)}" target="_blank" rel="noopener" style="color:var(--teal);text-decoration:none">${esc(g.website)}</a></div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:6px">Finaya verified EMA landing page & digital application</div>
        </div>
      </div>

      <!-- 6. Operating Hours -->
      <div class="gbp-card">
        <div class="gbp-card-head">
          <span class="gbp-card-title">6. Business Hours</span>
          <button class="copy" data-copy="gbpHours">Copy</button>
        </div>
        <div class="gbp-card-body">
          <div class="gbp-val" style="font-size:12.5px">Mon–Fri: 8:30 AM – 6:00 PM · Sat: 10:00 AM – 2:00 PM · Sun: Closed</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:6px">Standard Finaya Home Loans operating hours</div>
        </div>
      </div>

      <!-- 7. Service Areas (Full width) -->
      <div class="gbp-card full">
        <div class="gbp-card-head">
          <span class="gbp-card-title">7. Designated Service Areas (${g.areasList ? g.areasList.length : 0} markets)</span>
          <button class="copy" data-copy="gbpAreas">Copy All Areas</button>
        </div>
        <div class="gbp-card-body">
          <div style="font-size:12px;color:var(--muted);margin-bottom:8px">Click any individual pill below to copy just that city/county, or use "Copy All Areas" for the full list:</div>
          ${pillsHTML}
          <div style="margin-top:10px;padding:8px 12px;background:var(--paper);border-radius:6px;font-family:var(--mono);font-size:11.5px;color:var(--body);line-height:1.6">${esc(g.areas)}</div>
        </div>
      </div>

      <!-- 8. Description (Full width) -->
      <div class="gbp-card full">
        <div class="gbp-card-head">
          <div style="display:flex;align-items:center;gap:10px">
            <span class="gbp-card-title">8. Google Business Description</span>
            <span class="gbp-counter">${g.desc ? g.desc.length : 0} / 750 chars</span>
            <span class="badge" style="background:var(--ok-bg);color:var(--ok);font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:99px">NMLS Compliant</span>
          </div>
          <button class="copy" data-copy="gbpDesc">Copy Description</button>
        </div>
        <div class="gbp-card-body">
          <div style="font-size:13.5px;line-height:1.7;color:var(--ink);white-space:pre-wrap;background:var(--paper);padding:14px 16px;border-radius:8px;border:1px solid var(--line)">${esc(g.desc)}</div>
        </div>
      </div>
    </div>

    <!-- Corporate Rock Hill HQ Card -->
    <div class="gbp-sop-card">
      <div class="gbp-sop-head">
        <div class="gbp-sop-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Need Rock Hill Central Headquarters Profile? (Storefront Office)
        </div>
        <button class="copy" data-copy="gbpHQ" style="font-size:11.5px;padding:4px 12px">Copy HQ Details</button>
      </div>
      <div style="padding:14px 20px;font-size:13px;line-height:1.6;color:var(--body);background:var(--paper);border-top:1px solid var(--line)">
        <b>Finaya Home Loans (Corporate Listing)</b> · 378 Technology Center Way, Suite 1002, Rock Hill, SC 29730 · Phone: (803) 526-7190 · Category: Mortgage broker · Website: https://www.finayahl.com
      </div>
    </div>

    <!-- 7-Step Quick SOP Checklist -->
    <div class="gbp-sop-card">
      <div class="gbp-sop-head">
        <div class="gbp-sop-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          Google Business Profile 7-Step Setup SOP Checklist
        </div>
        <span style="font-size:11px;font-weight:700;color:var(--teal)">Fast Execution Flow</span>
      </div>
      <div class="gbp-sop-list">
        <div class="gbp-step-item"><span class="gbp-step-num">Step 1:</span> Enter <b>Business Name</b> & select <b>Mortgage broker</b> category on Google.</div>
        <div class="gbp-step-item"><span class="gbp-step-num">Step 2:</span> When asked <em>"Location customers can visit?"</em> 👉 Select <b>"NO"</b> (Address Hidden).</div>
        <div class="gbp-step-item"><span class="gbp-step-num">Step 3:</span> Paste <b>Designated Service Areas</b> into <em>"Where do you serve customers?"</em>.</div>
        <div class="gbp-step-item"><span class="gbp-step-num">Step 4:</span> Enter <b>OneCloud Virtual Phone</b> and the advisor's <b>Finaya Website URL</b>.</div>
        <div class="gbp-step-item"><span class="gbp-step-num">Step 5:</span> Enter mailing address for Google verification code (remains 100% private).</div>
        <div class="gbp-step-item"><span class="gbp-step-num">Step 6:</span> Verify via OneCloud call/SMS, postcard PIN, or quick video verification.</div>
        <div class="gbp-step-item"><span class="gbp-step-num">Step 7:</span> Paste <b>Description</b> and upload Studio Headshot (Logo) + Finaya Banner (Cover).</div>
      </div>
    </div>
  </div>`;
}

function renderStage(){

  const a = ADVISORS.find(x=>x.id===selectedId);
  const locked = a.status==="blocked";

  const facts = [
    ["Assigned Territory", a.markets.join("; "), false, null, null],
    ["NMLS ID", "#"+a.nmls + (locked?" (flagged)":""), true, null, null],
    ["Corporate Email", a.email || "Pending", true, null, a.email],
    ["OneCloud VoIP", a.phone==="Pending"?"Pending from JB":a.phone, true, null, a.phone!=="Pending"?a.phone:null],
    ["Direct Cell", a.cell || "—", true, null, a.cell || null],
    ["Licensed States", a.licensedStates || a.state, false, null, null],
    ["Digital Application", a.link==="Pending"?"Pending from JB":a.link, false, a.link, null]
  ];

  const factsHTML = facts.map(([l,v,mono,href,copyVal])=>`
    <div class="fact">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:2px">
        <span class="label">${l}</span>
        ${copyVal?`<button class="copy-mini" data-copy-val="${esc(copyVal)}" title="Copy ${l}">Copy</button>`:""}
      </div>
      ${href?`<a class="val" href="https://${href}" target="_blank" rel="noopener">${esc(v)}</a>`:
        (l==="Corporate Email" && v && !v.includes("Pending")?`<a class="val mono" href="mailto:${esc(v)}" style="color:var(--teal);text-decoration:none">${esc(v)}</a>`:
        `<span class="val ${mono?'mono':''}">${esc(v)}</span>`)}
    </div>`).join("");

  let strip = "";
  if(locked){
    strip = `<div class="strip lock">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
      Compliance Lock: NMLS Verification Pending. Public copy locked until license verified by JB Frye.</div>`;
  } else if(a.note){
    strip = `<div class="strip warn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16.5h.01"/></svg>
      ${esc(a.note)}</div>`;
  }

  let pane = "";
  if(locked){
    pane = `<div class="pane active"><div class="doc"><div class="doc-head"><span class="t">Copy unavailable</span></div>
      <div class="doc-body"><p>This advisor's public copy is locked. NMLS #${a.nmls} could not be verified on the NMLS registry. JB Frye must verify the license number before any profile, bio, or banner is published.</p></div></div></div>`;
  } else if(activeTab==="li"){
    const aboutDoc = `<div class="doc">
      <div class="doc-head"><span class="t">About / bio</span><span class="hint">paste in full, disclosure included</span>${copyBtn("about")}</div>
      ${aboutHTML(a)}
    </div>`;
    pane = `<div class="pane active">
      ${docSection("headline","LinkedIn headline","paste into the Headline field", esc(linkedinHeadline(a)))}
      ${aboutDoc}
      ${docSection("exp","Experience","employer: Finaya Home Loans", esc(experienceBlock(a)), "plain serif-plain")}
    </div>`;
  } else if(activeTab==="scrub"){
    pane = renderScrubPane(a);
  } else if(activeTab==="social"){
    const verifiedAccounts = [];
    if(a.linkedin) verifiedAccounts.push({platform:"LinkedIn", val:a.linkedin, url:"https://"+a.linkedin.replace(/^https?:\/\//,"")});
    if(a.facebook) verifiedAccounts.push({platform:"Facebook", val:a.facebook, url:"https://"+a.facebook.replace(/^https?:\/\//,"")});
    if(a.instagram) verifiedAccounts.push({platform:"Instagram", val:a.instagram, url:a.instagram.startsWith("@")?"https://instagram.com/"+a.instagram.slice(1):"https://"+a.instagram.replace(/^https?:\/\//,"")});
    if(a.tiktok) verifiedAccounts.push({platform:"TikTok", val:a.tiktok, url:a.tiktok.startsWith("@")?"https://tiktok.com/"+a.tiktok:"https://"+a.tiktok.replace(/^https?:\/\//,"")});

    const acctsHTML = verifiedAccounts.length ? `
      <div class="doc" style="margin-bottom:18px">
        <div class="doc-head"><span class="t">Audited Social Media Profiles</span><span class="hint">Verified Active Handles</span></div>
        <div class="doc-body" style="padding:16px 22px">
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            ${verifiedAccounts.map(acc=>`
              <a href="${esc(acc.url)}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid var(--line-strong);border-radius:8px;background:var(--surface);color:var(--ink);text-decoration:none;font-size:12.5px;font-weight:600;box-shadow:var(--shadow-sm);transition:.15s">
                <span style="color:var(--teal)">${acc.platform}:</span>
                <span style="font-family:var(--mono);color:var(--body);font-size:11.5px">${esc(acc.val)}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    ` : `
      <div class="doc" style="margin-bottom:18px">
        <div class="doc-head"><span class="t">Audited Social Media Profiles</span></div>
        <div class="doc-body"><p style="color:var(--muted);font-size:13px">No personal Facebook or Instagram accounts discovered for ${esc(a.name)}. Corporate turnkey guidance applies.</p></div>
      </div>
    `;

    const contactCard = `
      <div class="doc" style="margin-bottom:18px">
        <div class="doc-head"><span class="t">Official Contact & Communication Directory</span><span class="hint">Verified Finaya Directory</span></div>
        <div class="doc-body" style="padding:16px 22px">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
            <div style="padding:10px 14px;background:var(--paper);border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:space-between">
              <div><small style="color:var(--muted);text-transform:uppercase;font-size:10px;font-weight:700">Corporate Email</small><div style="font-family:var(--mono);font-size:12px;font-weight:600;color:var(--ink)">${esc(a.email || "Pending")}</div></div>
              ${a.email?`<button class="copy-mini" data-copy-val="${esc(a.email)}">Copy</button>`:""}
            </div>
            <div style="padding:10px 14px;background:var(--paper);border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:space-between">
              <div><small style="color:var(--muted);text-transform:uppercase;font-size:10px;font-weight:700">OneCloud VoIP</small><div style="font-family:var(--mono);font-size:12px;font-weight:600;color:var(--ink)">${esc(a.phone)}</div></div>
              ${a.phone && a.phone!=="Pending"?`<button class="copy-mini" data-copy-val="${esc(a.phone)}">Copy</button>`:""}
            </div>
            ${a.cell?`
            <div style="padding:10px 14px;background:var(--paper);border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:space-between">
              <div><small style="color:var(--muted);text-transform:uppercase;font-size:10px;font-weight:700">Direct Cell</small><div style="font-family:var(--mono);font-size:12px;font-weight:600;color:var(--ink)">${esc(a.cell)}</div></div>
              <button class="copy-mini" data-copy-val="${esc(a.cell)}">Copy</button>
            </div>
            `:""}
          </div>
        </div>
      </div>
    `;

    pane = `<div class="pane active">
      ${acctsHTML}
      ${contactCard}
      ${docSection("sbio","Bio","under 160 characters · "+socialBio(a).length+" chars", esc(socialBio(a)))}
      ${docSection("slink","Link in bio", null, esc(a.link))}
      ${docSection("sdis","Required disclosure","profile field or pinned post", `<p class="legal" style="border-top:none;padding-top:0">${esc(socialDisclosure(a))}</p>`, "doc-body")}
    </div>`;
  } else if(activeTab==="gbp"){
    pane = renderGbpPane(a);
  } else if(activeTab==="sig"){
    pane = `<div class="pane active">
      <p class="copy-tip">Replace any old brokerage signatures. Set this as the default for new messages and replies.</p>
      ${docSection("sig","Email signature","Outlook: Settings, Mail, Compose and reply · Gmail: Settings, Signature", esc(emailSignature(a)))}
    </div>`;
  } else if(activeTab==="banner"){
    pane = `<div class="pane active">
      <div class="banner-controls">
        <div class="banner-grp">
          <span class="banner-grp-label">Platform:</span>
          <div class="seg" role="group" aria-label="Platform preset">
            ${Object.entries(BANNER_PRESETS).map(([k,v])=>`<button class="${k===bannerPreset?'active':''}" data-preset="${k}">${v.label} <span class="num">${v.w}×${v.h}</span></button>`).join("")}
          </div>
        </div>
        <div class="banner-grp">
          <span class="banner-grp-label">Art Direction:</span>
          <div class="seg" role="group" aria-label="Template style">
            ${Object.entries(BANNER_STYLES).map(([k,v])=>`<button class="${k===bannerStyle?'active':''}" data-style="${k}" title="${v.desc}">${v.label}</button>`).join("")}
          </div>
        </div>
        <button class="btn-toggle ${includePortrait?'active':''}" id="togglePortrait" title="Include high-resolution executive studio portrait">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>${includePortrait?'Portrait On':'Portrait Off'}</span>
        </button>
        <button class="btn-toggle ${showSafeArea?'active':''}" id="toggleSafeAreas" title="Overlay platform profile photo and interface collision guides">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          <span>${showSafeArea?'Safe Areas On':'Safe Areas'}</span>
        </button>
        <div style="margin-left:auto;display:flex;align-items:center;gap:8px">
          <button class="btn-action btn-secondary" id="copyBanner" title="Copy full resolution PNG to clipboard">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy PNG</span>
          </button>
          <button class="btn-action btn-primary" id="dlBanner">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v12M6 11l6 6 6-6M4 21h16"/></svg>
            <span>Download PNG</span>
          </button>
        </div>
      </div>
      <div class="banner-canvas-wrap">
        <canvas id="bannerView"></canvas>
      </div>
      <div class="banner-meta" id="bannerMeta"></div>
    </div>`;
  } else if(activeTab==="headshot"){
    const currentImgUrl = getHeadshotUrl(a.id, "clean");
    const dlFilename = `${HEADSHOT_MAP[a.id] || "advisor"}_high_res.png`;
    pane = `<div class="pane active">
      <div class="banner-controls">
        <div style="display:flex;align-items:center;gap:8px">
          <span class="banner-grp-label">Advisor:</span>
          <span style="font-size:12.5px;font-weight:600;color:var(--text)">${esc(a.name)} · ${esc(a.title)}</span>
        </div>
        <div style="margin-left:auto;display:flex;align-items:center;gap:8px">
          <button class="btn-action btn-secondary" id="copyHeadshotBtn" title="Copy high-resolution image to clipboard">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy Portrait</span>
          </button>
          <a class="btn-action btn-primary" id="dlHeadshotLink" href="${currentImgUrl}" download="${dlFilename}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v12M6 11l6 6 6-6M4 21h16"/></svg>
            <span>Download high-resolution image</span>
          </a>
        </div>
      </div>

      <div class="headshot-preview-container">
        <div class="headshot-card">
          <img src="${currentImgUrl}" class="headshot-display-img" alt="${esc(a.name)} High-Resolution Photo">
        </div>
        <div class="headshot-meta-card">
          <div class="eyebrow" style="margin-bottom:6px">FINAYA EXECUTIVE ADVISOR</div>
          <h3>${esc(a.name)}</h3>
          <p class="headshot-desc" style="margin-bottom:18px">${esc(a.title)} · NMLS #${a.nmls} · Assigned Market: ${mk(a)} (${a.state})</p>
          <div style="margin:20px 0 24px 0">
            <a class="btn-action btn-primary" style="padding:12px 20px;font-size:13.5px;font-weight:600;display:inline-flex;align-items:center;gap:8px;text-decoration:none" href="${currentImgUrl}" download="${dlFilename}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v12M6 11l6 6 6-6M4 21h16"/></svg>
              <span>Download high-resolution image</span>
            </a>
          </div>
          <div class="headshot-actions-box">
            <a class="btn-download-bundle" href="/headshots/Finaya_Advisor_Headshots_All20.zip" download="Finaya_Advisor_Headshots_All20.zip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download All Headshots (ZIP Archive)</span>
            </a>
          </div>
        </div>
      </div>
    </div>`;
  }

  $("#stagePanel").innerHTML = `
    <div class="id-header">
      <div class="id-avatar-box" title="View in Headshot Studio" id="quickAvatarBtn">
        <img src="${getHeadshotThumb(a.id)}" class="id-avatar-main" alt="${esc(a.name)}">
        <span class="id-avatar-tag">Studio HD</span>
      </div>
      <div class="id-header-info">
        <div class="id-eyebrow"><span class="eyebrow">${esc(a.title)}</span><span class="eyebrow" style="color:var(--faint)">·</span><span class="eyebrow">${COMPANY.name}</span></div>
        <h2 class="id-name">${esc(a.name)}</h2>
        <div class="id-sub">Assigned: <b>${mk(a)}</b> (${a.state})</div>
      </div>
      <div class="id-header-actions">
        <button class="btn-headshot-quick" id="btnGoHeadshot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <span>Studio Portrait</span>
        </button>
      </div>
    </div>
    <div class="facts">${factsHTML}</div>
    ${strip}
    ${tabbar()}
    ${pane}`;

  document.querySelectorAll(".tab").forEach(b=>{ b.onclick = ()=>{ activeTab = b.dataset.tab; renderStage(); }; });
  document.querySelectorAll("[data-copy-val]").forEach(b=>{
    b.onclick = (e)=>{
      e.stopPropagation();
      copyText(b.dataset.copyVal, b);
    };
  });
  document.querySelectorAll("[data-copy]").forEach(b=>{
    b.onclick = ()=>{
      const id = b.dataset.copy;
      const audit = LINKEDIN_AUDIT[a.id] || {};
      const gbp = GBP_DATA[a.id] || {};
      const map = {
        headline:linkedinHeadline, about:linkedinAbout, exp:experienceBlock, sbio:socialBio, slink:x=>x.link, sdis:socialDisclosure, sig:emailSignature, curHeadline:()=>audit.currentHeadline||"",
        gbpName:()=>gbp.bname||"",
        gbpCatPrimary:()=>"Mortgage broker",
        gbpCatSecondary:()=>"Mortgage lender, Loan agency, Financial consultant",
        gbpAreas:()=>gbp.areas||"",
        gbpPhone:()=>gbp.phone||"",
        gbpUrl:()=>gbp.website||"",
        gbpHours:()=>gbp.hours||"",
        gbpDesc:()=>gbp.desc||"",
        gbpBundle:()=>`Business Name: ${gbp.bname}\nPrimary Category: Mortgage broker\nSecondary Categories: Mortgage lender, Loan agency, Financial consultant\nStorefront Location: NO (Service Area Business - Address Hidden)\nService Areas: ${gbp.areas}\nOneCloud Phone: ${gbp.phone}\nWebsite: ${gbp.website}\nOperating Hours: ${gbp.hours}\n\nGoogle Description (750 chars max):\n${gbp.desc}`,
        gbpHQ:()=>`Company: Finaya Home Loans\nAddress: 378 Technology Center Way, Suite 1002, Rock Hill, SC 29730\nPhone: (803) 526-7190\nWebsite: https://www.finayahl.com\nCategory: Mortgage broker\n\nCorporate Description:\nFinaya Home Loans is a full-service residential mortgage brokerage headquartered in Rock Hill, South Carolina. Formerly NBI, Finaya Home Loans provides modern home financing solutions across South Carolina, North Carolina, Florida, Georgia, and Colorado. Our licensed Executive Mortgage Advisors offer conventional, FHA, VA, USDA, jumbo, and refinancing loans, combining personal guidance with streamlined digital pre-approvals. Equal Housing Lender. Company NMLS #2470186. Headquarters: 378 Technology Center Way, Suite 1002, Rock Hill, SC 29730. NMLS Consumer Access: www.nmlsconsumeraccess.org. This is not a commitment to lend. All loans subject to credit approval.`
      };
      copyText(map[id](a), b);
    };
  });
  document.querySelectorAll("[data-preset]").forEach(b=>{ b.onclick = ()=>{ bannerPreset = b.dataset.preset; renderStage(); }; });
  document.querySelectorAll("[data-style]").forEach(b=>{ b.onclick = ()=>{ bannerStyle = b.dataset.style; renderStage(); }; });
  const portBtn = $("#togglePortrait");
  if(portBtn) portBtn.onclick = ()=>{ includePortrait = !includePortrait; renderStage(); };
  const safeBtn = $("#toggleSafeAreas");
  if(safeBtn) safeBtn.onclick = ()=>{ showSafeArea = !showSafeArea; renderStage(); };
  const copyBtnEl = $("#copyBanner");
  if(copyBtnEl) copyBtnEl.onclick = copyBannerToClipboard;
  const dl = $("#dlBanner");
  if(dl) dl.onclick = downloadBanner;
  if(activeTab==="banner" && !locked) drawBanner(a);

  const goHeadshot = $("#btnGoHeadshot");
  if(goHeadshot) goHeadshot.onclick = ()=>{ activeTab = "headshot"; renderStage(); };
  const quickAv = $("#quickAvatarBtn");
  if(quickAv) quickAv.onclick = ()=>{ activeTab = "headshot"; renderStage(); };
  document.querySelectorAll("[data-hstyle]").forEach(b=>{
    b.onclick = ()=>{ headshotVariant = b.dataset.hstyle; renderStage(); };
  });
  const copyHs = $("#copyHeadshotBtn");
  if(copyHs) copyHs.onclick = ()=>copyHeadshotToClipboard(getHeadshotUrl(a.id, headshotVariant));
}

/* ---------------- OFFICIAL FINAYA BRAND VECTOR LOGO ---------------- */
/* Extracted from official Finaya Brand Guidelines PDF (108 x 40 px base) */
const FINAYA_LOGO_PATHS = [
  "M10.0876 1.73459C10.8147 1.6092 11.339 1.66493 11.5976 1.89481 11.6326 1.92964 11.8004 2.15256 12.4855 3.40648 12.807 4.01254 13.1356 4.43051 13.4782 4.68826 13.8487 4.95994 14.2751 5.12017 14.7784 5.16196 15.3027 5.16196 15.7711 5.00174 16.1766 4.6673605 16.596 4.29119 16.8127 3.81749 16.8127 3.24626 16.8127 2.41728 16.2954 1.6788601 15.2748 1.0519 14.1632 .35527704 12.7092 0 10.9545 0 8.70348 0 6.78102 .759317 5.23607 2.26402 3.78898 3.6851302 3.06894 5.5868999 3.08991 7.9275505V11.1181H.342546C.15379602 11.1181 0 11.2713 0 11.4594V12.4556C0 12.6437 .15379602 12.7969 .342546 12.7969H3.0969V25.5799C3.0969 27.0428 2.81727 28.0529 2.2649999 28.6033 1.9224501 28.9377 1.48204 29.1048 .90180608 29.1048 .894815 29.1048 .88782408 29.1048 .873843 29.1048 .7829629 29.1048 .692084 29.1397 .629167 29.2024 .56624999 29.2651 .524306 29.3556 .524306 29.4462V30.094C.524306 30.2821 .6781021 30.4354 .86685207 30.4354H10.4232C10.6119 30.4354 10.7657 30.2821 10.7657 30.094V29.4462C10.7657 29.2581 10.6119 29.1048 10.4232 29.1048 9.87792 29.1048 8.20713 29.1048 8.20713 25.5869V12.8039H13.4082C13.597 12.8039 13.7508 12.6506 13.7508 12.4626V11.4664C13.7508 11.2783 13.597 11.125 13.4082 11.125H8.20713V4.74399C8.20713 3.00244 8.82232 2.01324 10.0737 1.73459H10.0876Z",
  "M21.0495 8.28997C21.8674 8.28997 22.5665 7.99739 23.1327 7.43312 23.699 6.86189 23.9856 6.14437 23.9856 5.30843 23.9856 4.47248 23.685 3.75496 23.1188 3.24643 22.5735 2.64037 21.8744 2.34082 21.0565 2.34082 20.2386 2.34082 19.5325 2.62644 18.9523 3.1837302 18.3651 3.7480002 18.0645 4.46552 18.0645 5.30843 18.0645 6.15134 18.3651 6.8688604 18.9453 7.44009 19.5255 8.01132 20.2386 8.29693 21.0495 8.29693V8.28997Z",
  "M25.9988 29.1049C24.4958 29.0213 23.7548 27.8928 23.7478 25.6775V11.0485C23.7478 10.951 23.7059 10.8534 23.629 10.7907 23.5521 10.728 23.4542 10.6932 23.3563 10.7072L16.2467 11.7451C16.079 11.773 15.9531 11.9123 15.9531 12.0865V12.7343C15.9531 12.8388 15.9951 12.9294 16.079 12.999 16.1559 13.0617 16.2607 13.0896 16.3586 13.0757 17.0507 12.9503 17.575 13.0339 17.9175 13.3264 18.33 13.6748 18.5327 14.3435 18.5327 15.3258V25.6845C18.5467 27.9137 17.8057 29.0353 16.2817 29.1119 16.0999 29.1189 15.9531 29.2721 15.9531 29.4532V30.1011C15.9531 30.2892 16.1069 30.4424 16.2957 30.4424H25.9848C26.1736 30.4424 26.3274 30.2892 26.3274 30.1011V29.4532C26.3274 29.2721 26.1876 29.1189 25.9988 29.1119V29.1049Z",
  "M49.1942 29.1185C48.642 29.1046 46.9712 29.0698 46.9712 25.524V17.3526C46.9712 15.2209 46.3909 13.556 45.2375 12.3927 44.0351 11.2223 42.4202 10.6511 40.4488 10.7068 38.4005 10.7068 36.6528 11.3895 35.2477 12.741 35.1428 11.7448 34.9471 11.1248 34.6255 10.8044 34.5486 10.7277 34.436803 10.6929 34.3249 10.7068L27.7956 11.7448C27.6278 11.7727 27.502 11.919 27.502 12.0862V12.734C27.502 12.8385 27.5439 12.9291 27.6278 12.9987 27.7047 13.0614 27.8095 13.0893 27.9074 13.0754 28.5925 12.9569 29.1168 13.0405 29.4594 13.3331 29.8928 13.6953 30.1165 14.4129 30.1165 15.4578V25.537899C30.1165 29.0837 28.403801 29.1185 27.8375 29.1325 27.6488 29.1325 27.502 29.2927 27.502 29.4738V30.1008C27.502 30.2889 27.6558 30.4421 27.8445 30.4421H37.5477C37.7364 30.4421 37.8902 30.2889 37.8902 30.1008V29.4738C37.8902 29.2857 37.7434 29.1325 37.5546 29.1325 36.9954 29.1185 35.2966 29.0837 35.2966 25.537899V16.7535C35.2966 15.7155 35.6042 14.8448 36.2334 14.0924 36.8765 13.3401 37.6245 12.9778 38.5333 12.9778 38.5473 12.9778 38.5613 12.9778 38.5823 12.9778 39.582 12.9778 40.3579 13.3331 40.9591 14.0715 41.5883 14.8239 41.8959 15.7016 41.8819 16.7535V25.537899C41.8819 29.0837 40.2111 29.1185 39.6589 29.1325 39.4701 29.1325 39.3233 29.2927 39.3233 29.4738V30.1008C39.3233 30.2889 39.4771 30.4421 39.6658 30.4421H49.1872C49.376 30.4421 49.5298 30.2889 49.5298 30.1008V29.4738C49.5298 29.2857 49.383 29.1325 49.1942 29.1325V29.1185Z",
  "M70.2011 28.8472 69.9075 28.276001C69.8655 28.1924 69.7816 28.1227 69.6908 28.1018 69.5999 28.0809 69.495 28.0948 69.4111 28.1436 68.5023 28.7288 67.7334 28.9656 67.1531 28.8402 66.6987 28.7079 66.475 28.1436 66.475 27.1753V17.8963C66.489 16.1965 66.2164 14.7963 65.6781 13.7444 64.6295 11.6546 62.0499 10.5957 58.0022 10.5957 55.6184 10.6236 53.7099 11.2018 52.3328 12.3164 51.4379 13.0408 51.0185 13.8211 51.0954 14.65 51.1863 15.2213 51.4379 15.6671 51.8784 15.9945 52.3677 16.3219 52.871 16.4264 53.3604 16.308 53.8218 16.2174 54.2133 15.9876 54.5278 15.6323 54.8564 15.2979 55.136 14.8381 55.3597 14.2808 55.8841 12.9851 56.0518 12.7413 56.0938 12.6995 56.4573 12.3582 57.1004 12.184 58.0092 12.184 61.3648 12.184 61.3858 13.7375 61.3928 14.253 61.4277 16.1896 59.1068 17.9869 54.4999 19.5961 51.4869 20.634 49.9629 22.528801 49.9629 25.2457 49.9629 26.9315 50.5291 28.2899 51.6616 29.3 52.7941 30.2753 54.2133 30.7977 55.891 30.8604 55.919 30.8604 55.954 30.8604 55.9819 30.8604 57.436 30.8604 58.6943 30.5678 59.7359 29.9827 60.5329 29.5368 61.183 29.0283 61.6724 28.471 62.1268 29.9757 63.5249 30.735 65.8389 30.735 67.223 30.735 68.6561 30.2474 70.0962 29.293 70.243 29.1955 70.292 29.0074 70.2081 28.8472H70.2011ZM61.3858 18.4188V22.4104C61.3858 24.2147 61.0572 25.7194 60.4071 26.8897 59.8128 27.9903 58.9809 28.5198 57.8694 28.5198 56.9746 28.5407 56.3035 28.2063 55.8421 27.5306 55.3737 26.813 55.1151 25.9701 55.0801 25.0297 55.0661 24.0684 55.2689 23.2046 55.6743 22.4592 56.0728 21.7138 56.695 21.1356 57.5409 20.7385 59.2955 19.8677 60.5609 19.1014 61.3858 18.4188Z",
  "M89.1102 12.0866V11.4596C89.1102 11.2716 88.9564 11.1183 88.7677 11.1183H82.3851C82.1964 11.1183 82.0426 11.2716 82.0426 11.4596V12.0866C82.0426 12.2747 82.1964 12.4279 82.3851 12.4279 83.0213 12.4279 83.4477 12.5951 83.6505 12.9016 83.972 13.3893 83.8392 14.3506 83.259 15.6812L79.8545 23.4764 76.6947 15.8344C75.8418 13.7515 76.0166 12.9922 76.1983 12.7205 76.2473 12.6439 76.401 12.421 76.9533 12.421 77.1421 12.421 77.2959 12.2677 77.2959 12.0796V11.4527C77.2959 11.2646 77.1421 11.1113 76.9533 11.1113H67.6207C67.4319 11.1113 67.2781 11.2646 67.2781 11.4527V12.0796C67.2781 12.2677 67.4319 12.421 67.6207 12.421 69.0328 12.421 70.2632 13.654 71.2698 16.0922L77.0792 30.0873 75.1147 34.6153C74.5904 35.8135 73.9823 36.6077 73.2832 36.9629 72.8987 37.165 72.4792 37.1789 72.0039 36.9978 71.8081 36.9281 71.4376 36.6913 70.8154 35.9737 70.1863 35.2353 69.3823 34.9776 68.4875 35.2353 67.8863 35.4165 67.4669 35.8205 67.2502 36.4405 67.0474 37.0256 67.0544 37.6456 67.2921 38.2726 67.5298 38.9205 68.0471 39.4081 68.8371 39.7146 69.3264 39.9027 69.8717 40.0002 70.4729 40.0002 70.7945 40.0002 71.13 39.9724 71.4796 39.9166 72.4862 39.7564 73.43 39.3245 74.2898 38.6209 75.1427 37.9243 75.9187 36.7749 76.5968 35.2005L84.7969 16.0991C85.8246 13.7097 87.1668 12.4697 88.7956 12.4279 88.9844 12.4279 89.1312 12.2677 89.1312 12.0866H89.1102Z",
  "M107.959 28.8472 107.665 28.276001C107.623 28.1924 107.539 28.1227 107.449 28.1018 107.358 28.0809 107.253 28.0948 107.169 28.1436 106.26 28.7288 105.491 28.9656 104.911 28.8402 104.457 28.7079 104.233 28.1436 104.233 27.1753V17.8963C104.247 16.1965 103.974 14.7963 103.436 13.7444 102.387 11.6546 99.8077 10.5957 95.7601 10.5957 93.3762 10.6236 91.4677 11.2018 90.0906 12.3164 89.1957 13.0408 88.7763 13.8211 88.8532 14.65 88.9441 15.2213 89.1957 15.6671 89.6362 15.9945 90.1255 16.3219 90.6288 16.4264 91.1182 16.308 91.5796 16.2174 91.9711 15.9876 92.2857 15.6323 92.6142 15.2979 92.8938 14.8381 93.1176 14.2808 93.6419 12.9851 93.8096 12.7413 93.8516 12.6995 94.2151 12.3582 94.8583 12.184 95.767 12.184 99.1226 12.184 99.1436 13.7375 99.1506 14.253 99.1855 16.1896 96.8646 17.9869 92.2577 19.5961 89.2447 20.634 87.7207 22.528801 87.7207 25.2457 87.7207 26.9315 88.287 28.2899 89.4195 29.3 90.552 30.2753 91.9711 30.7977 93.6489 30.8604 93.6768 30.8604 93.7118 30.8604 93.7397 30.8604 95.1938 30.8604 96.4521 30.5678 97.4938 29.9827 98.2907 29.5368 98.9408 29.0283 99.4302 28.471 99.8846 29.9757 101.283 30.735 103.597 30.735 104.981 30.735 106.414 30.2474 107.854 29.293 108.001 29.1955 108.05 29.0074 107.966 28.8472H107.959ZM99.1436 18.4188V22.4104C99.1436 24.2147 98.815 25.7194 98.1649 26.8897 97.5707 27.9903 96.7388 28.5198 95.6272 28.5198 95.6132 28.5198 95.5993 28.5198 95.5853 28.5198 94.7114 28.5198 94.0613 28.1924 93.6069 27.5306 93.1385 26.813 92.8799 25.9701 92.8449 25.0297 92.8309 24.0684 93.0337 23.2046 93.4391 22.4592 93.8376 21.7138 94.4598 21.1356 95.3057 20.7385 97.0603 19.8677 98.3257 19.1014 99.1506 18.4188H99.1436Z"
];

let _finayaPathObjects = null;
function getFinayaPaths(){
  if(!_finayaPathObjects) _finayaPathObjects = FINAYA_LOGO_PATHS.map(d => new Path2D(d));
  return _finayaPathObjects;
}

function drawFinayaLogo(ctx, x, y, h, color="#005F5A"){
  const s = h / 40;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.fillStyle = color;
  const paths = getFinayaPaths();
  for(let p of paths) ctx.fill(p);
  ctx.restore();
  return 108 * s;
}

function drawEqualHousing(ctx, x, y, size, color){
  ctx.save();
  ctx.translate(x, y);
  const s = size / 32;
  ctx.scale(s, s);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  
  ctx.beginPath();
  ctx.moveTo(16, 2.5);
  ctx.lineTo(23, 8.5);
  ctx.lineTo(23, 4);
  ctx.lineTo(26.5, 4);
  ctx.lineTo(26.5, 11.5);
  ctx.lineTo(30, 14.5);
  ctx.lineTo(27, 14.5);
  ctx.lineTo(27, 29);
  ctx.lineTo(5, 29);
  ctx.lineTo(5, 14.5);
  ctx.lineTo(2, 14.5);
  ctx.closePath();
  ctx.stroke();

  ctx.fillRect(9.5, 17.5, 13, 2.6);
  ctx.fillRect(9.5, 23, 13, 2.6);
  ctx.restore();
}

function drawRoundedRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function getCleanTerritory(a){
  if(a.state === "Pending") return "Nationwide Residential Mortgage Advisory";
  const clean = a.markets.map(m => m.replace(/\s*\([^)]*\)/g, "").trim());
  if(clean.length === 1) return `Serving ${clean[0]}, ${a.state}`;
  if(clean.length <= 3) return `Serving ${clean.join(" · ")}${a.state !== "Pending" ? ", " + a.state : ""}`;
  return `Serving ${clean.slice(0, 3).join(" · ")} & across ${STATE_LABEL[a.state] || a.state}`;
}

function fitText(ctx, text, maxW, baseSize, fontFam, weight="600"){
  let size = baseSize;
  ctx.font = `${weight} ${size}px ${fontFam}`;
  let w = ctx.measureText(text).width;
  while(w > maxW && size > baseSize * 0.65){
    size -= 1;
    ctx.font = `${weight} ${size}px ${fontFam}`;
    w = ctx.measureText(text).width;
  }
  return { size, width: w };
}

function drawSafeAreaGuide(ctx, W, H, preset){
  ctx.save();
  ctx.strokeStyle = "rgba(239, 68, 68, 0.85)";
  ctx.fillStyle = "rgba(239, 68, 68, 0.12)";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);

  if(preset === "li"){
    const cx = 175, cy = 396, r = 160;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.font = "600 12px 'Inter', sans-serif";
    ctx.fillStyle = "rgba(239, 68, 68, 0.95)";
    ctx.fillText("Avatar Collision Zone (Desktop)", 60, 360);

    ctx.beginPath();
    ctx.moveTo(395, 0); ctx.lineTo(395, H);
    ctx.strokeStyle = "rgba(239, 68, 68, 0.5)";
    ctx.stroke();
    ctx.fillText("← Safe Content Boundary (X ≥ 400)", 405, 30);
  } else if(preset === "fb"){
    const cx = 120, cy = 250, r = 90;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.font = "600 11px 'Inter', sans-serif";
    ctx.fillStyle = "rgba(239, 68, 68, 0.95)";
    ctx.fillText("Avatar Cutout", 75, 230);

    ctx.beginPath();
    ctx.rect(90, 0, 640, H);
    ctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
    ctx.stroke();
    ctx.fillText("Mobile Safe Viewport (640px center)", 100, 20);
  } else if(preset === "x"){
    const cx = 180, cy = 470, r = 145;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.font = "600 13px 'Inter', sans-serif";
    ctx.fillStyle = "rgba(239, 68, 68, 0.95)";
    ctx.fillText("Avatar Collision Zone", 60, 440);

    ctx.beginPath();
    ctx.moveTo(380, 0); ctx.lineTo(380, H);
    ctx.strokeStyle = "rgba(239, 68, 68, 0.5)";
    ctx.stroke();
    ctx.fillText("← Safe Content Boundary (X ≥ 390)", 390, 36);
  }
  ctx.restore();
}

/* ---------------- MAIN CANVAS PAINT ENGINE ---------------- */
function drawPortraitCard(ctx, img, cardX, cardY, cardW, cardH, radius, styleKey){
  ctx.save();

  // Outer shadow & background card base
  if(styleKey === "editorial"){
    ctx.shadowColor = "rgba(0, 0, 0, 0.10)";
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 4;
    ctx.fillStyle = "#FFFFFF";
  } else if(styleKey === "minimal"){
    ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = "#041514";
  } else {
    // corporate
    ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = "#012421";
  }
  drawRoundedRect(ctx, cardX, cardY, cardW, cardH, radius);
  ctx.fill();
  ctx.restore();

  // Clip content strictly inside the portrait card frame
  ctx.save();
  drawRoundedRect(ctx, cardX, cardY, cardW, cardH, radius);
  ctx.clip();

  // Internal card backdrop gradient & radial illumination
  if(styleKey === "corporate"){
    const bgG = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
    bgG.addColorStop(0, "#011F1D");
    bgG.addColorStop(0.5, "#023530");
    bgG.addColorStop(1, "#004842");
    ctx.fillStyle = bgG;
    ctx.fillRect(cardX, cardY, cardW, cardH);

    const glow = ctx.createRadialGradient(cardX + cardW * 0.5, cardY + cardH * 0.38, 15, cardX + cardW * 0.5, cardY + cardH * 0.38, cardW * 0.65);
    glow.addColorStop(0, "rgba(0, 187, 167, 0.24)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(cardX, cardY, cardW, cardH);
  } else if(styleKey === "minimal"){
    const bgG = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH);
    bgG.addColorStop(0, "#041614");
    bgG.addColorStop(1, "#010A09");
    ctx.fillStyle = bgG;
    ctx.fillRect(cardX, cardY, cardW, cardH);

    const glow = ctx.createRadialGradient(cardX + cardW * 0.5, cardY + cardH * 0.38, 15, cardX + cardW * 0.5, cardY + cardH * 0.38, cardW * 0.65);
    glow.addColorStop(0, "rgba(0, 212, 146, 0.22)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(cardX, cardY, cardW, cardH);
  } else {
    // editorial
    const bgG = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH);
    bgG.addColorStop(0, "#FAF9F5");
    bgG.addColorStop(1, "#EBF0EB");
    ctx.fillStyle = bgG;
    ctx.fillRect(cardX, cardY, cardW, cardH);
  }

  // Draw advisor photo strictly inside card with high quality smoothing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const scale = Math.max(cardW / img.width, cardH / img.height);
  const sw = Math.round(img.width * scale);
  const sh = Math.round(img.height * scale);
  const sx = Math.round(cardX + (cardW - sw) / 2);
  const sy = Math.round(cardY + Math.max(0, (cardH - sh) * 0.12) + 6);
  ctx.drawImage(img, sx, sy, sw, sh);

  // Soft bottom grounding dissolve inside the card
  const fadeH = Math.round(cardH * 0.24);
  const botFade = ctx.createLinearGradient(cardX, cardY + cardH - fadeH, cardX, cardY + cardH);
  if(styleKey === "editorial"){
    botFade.addColorStop(0, "rgba(235, 240, 235, 0)");
    botFade.addColorStop(1, "rgba(235, 240, 235, 0.96)");
  } else if(styleKey === "minimal"){
    botFade.addColorStop(0, "rgba(1, 10, 9, 0)");
    botFade.addColorStop(1, "rgba(1, 10, 9, 0.98)");
  } else {
    botFade.addColorStop(0, "rgba(0, 72, 66, 0)");
    botFade.addColorStop(1, "rgba(0, 72, 66, 0.98)");
  }
  ctx.fillStyle = botFade;
  ctx.fillRect(cardX, cardY + cardH - fadeH, cardW, fadeH);

  ctx.restore();

  // Crisp border line around the portrait frame
  ctx.save();
  drawRoundedRect(ctx, cardX, cardY, cardW, cardH, radius);
  if(styleKey === "editorial"){
    ctx.strokeStyle = "rgba(0, 95, 90, 0.35)";
    ctx.lineWidth = 1.5;
  } else if(styleKey === "minimal"){
    ctx.strokeStyle = "rgba(0, 212, 146, 0.45)";
    ctx.lineWidth = 1.5;
  } else {
    ctx.strokeStyle = "rgba(94, 234, 212, 0.45)";
    ctx.lineWidth = 1.5;
  }
  ctx.stroke();
  ctx.restore();
}

function drawFinayaWatermark(ctx, cx, cy, size, color = "rgba(255, 255, 255, 0.06)"){
  ctx.save();
  ctx.translate(cx, cy);
  const scale = size / 40;
  ctx.scale(scale, scale);
  ctx.translate(-54, -20);
  ctx.fillStyle = color;
  getFinayaPaths().forEach(p => ctx.fill(p));
  ctx.restore();
}

function drawBanner(a){
  const p = BANNER_PRESETS[bannerPreset];
  const view = $("#bannerView");

  // Render with high-DPI 2x Retina resolution buffer for crystal-clear clarity on FB, X, and LI
  const dpr = 2;
  view.width = p.w * dpr;
  view.height = p.h * dpr;
  view.style.width = "100%";
  view.style.height = "auto";

  const render = (img) => {
    const ctx = view.getContext("2d");
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    paintBanner(ctx, p.w, p.h, a, bannerStyle, showSafeArea, img, includePortrait);
    ctx.restore();

    $("#bannerMeta").innerHTML = `
      <span><b>${p.label}</b> · ${p.w} × ${p.h} px (2× Retina Buffer: ${view.width} × ${view.height} px) · Style: <b>${BANNER_STYLES[bannerStyle].label}</b> · <b>${includePortrait && a.status!=="waiting" ? "Executive Portrait Frame Included" : "Typographic Layout"}</b></span>
      <span class="meta-tag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Ultra-sharp 2× Retina export · Equal Housing Lender mark included
      </span>`;
  };

  if(includePortrait && a.status !== "waiting"){
    getAdvisorImg(a.id, (img)=>{
      if(document.fonts && document.fonts.ready){
        document.fonts.ready.then(()=>render(img));
      } else {
        render(img);
      }
    });
  } else {
    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(()=>render(null));
    } else {
      render(null);
    }
  }
}

function paintBanner(ctx, W, H, a, styleKey="corporate", showSafe=false, advImg=null, withPortrait=true){
  const cleanTerritory = getCleanTerritory(a);
  const isLI = (W === 1584 && H === 396);
  const isFB = (W === 820 && H === 312);
  const isX  = (W === 1500 && H === 500);

  const safeLeft = isLI ? 380 : (isFB ? 160 : 380);
  const hasPortrait = withPortrait && !!advImg && a.status !== "waiting";

  const outerMargin = isFB ? 18 : 22;
  const padX = isFB ? 32 : 52;
  const padY = isFB ? 28 : 44;
  const logoH = isFB ? 24 : 32;

  // Portrait frame container specifications (strictly within the canvas & outer straight lines)
  const cardW = isFB ? 210 : (isLI ? 340 : 380);
  const cardH = isFB ? 252 : (isLI ? 324 : 428);
  const cardX = W - outerMargin - (isFB ? 10 : 14) - cardW;
  const cardY = outerMargin + (isFB ? 10 : 14);
  const cardRadius = isFB ? 12 : 14;

  // Maximum width for text & contact bar before colliding with the portrait frame
  const maxContentW = hasPortrait ? (cardX - safeLeft - (isFB ? 20 : 34)) : (W - safeLeft - padX);

  if(styleKey === "corporate"){
    // Background: Deep Luxury Obsidian Teal
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "#011715");
    g.addColorStop(0.42, "#032B27");
    g.addColorStop(1, "#004842");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Outer framing straight-line rectangle
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    ctx.strokeRect(outerMargin, outerMargin, W - outerMargin * 2, H - outerMargin * 2);

    // Vertical anchor hairline beside safeLeft
    ctx.beginPath();
    ctx.moveTo(safeLeft - (isFB ? 16 : 24), outerMargin);
    ctx.lineTo(safeLeft - (isFB ? 16 : 24), H - outerMargin);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
    ctx.stroke();

    // Portrait frame on the right or architectural watermark
    if(hasPortrait){
      drawPortraitCard(ctx, advImg, cardX, cardY, cardW, cardH, cardRadius, "corporate");
    } else {
      drawFinayaWatermark(ctx, W - (isFB ? 130 : 220), H * 0.5, isFB ? 120 : 170, "rgba(255, 255, 255, 0.06)");
    }

    // Top-left Brand Lockup
    const lw = drawFinayaLogo(ctx, padX, padY, logoH, "#FFFFFF");

    ctx.font = `700 ${isFB ? 11 : 13.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#5EEAD4";
    ctx.fillText("HOME LOANS", padX + lw + (isFB ? 8 : 12), padY + logoH * 0.72);
    const hlW = ctx.measureText("HOME LOANS").width;

    if(!isFB){
      ctx.beginPath();
      ctx.moveTo(padX + lw + 12 + hlW + 16, padY + 6);
      ctx.lineTo(padX + lw + 12 + hlW + 16, padY + logoH - 4);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
      ctx.stroke();

      ctx.font = "600 10.5px \x27Inter\x27, sans-serif";
      ctx.fillStyle = "#99F6E4";
      const subBrand = hasPortrait ? "RESIDENTIAL LENDING · NMLS #2470186" : "RESIDENTIAL LENDING";
      ctx.fillText(subBrand, padX + lw + 12 + hlW + 28, padY + logoH * 0.68);
    }

    // Top-right Company Credentials (only when no portrait on right)
    if(!hasPortrait){
      ctx.textAlign = "right";
      ctx.font = `500 ${isFB ? 10.5 : 12}px \x27Inter\x27, sans-serif`;
      ctx.fillStyle = "#A7F3D0";
      ctx.fillText("Company NMLS #2470186", W - padX, padY + (isFB ? 16 : 20));
      ctx.textAlign = "left";
    }

    // Main Identity Block
    const eyebrowY = isFB ? 94 : (isLI ? 120 : 156);
    ctx.font = `700 ${isFB ? 9.5 : 11.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#5EEAD4";
    const roleText = (a.title || "EXECUTIVE MORTGAGE ADVISOR").toUpperCase();
    ctx.fillText(`${roleText}  ·  LICENSED ADVISOR`, safeLeft, eyebrowY);

    // Advisor Name
    const baseNameSize = isFB ? 28 : (isLI ? 44 : 48);
    const fit = fitText(ctx, a.name, maxContentW, baseNameSize, "\x27Playfair Display\x27, Georgia, serif", "600");
    const nameY = eyebrowY + fit.size * 1.08;
    ctx.font = `600 ${fit.size}px \x27Playfair Display\x27, Georgia, serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(a.name, safeLeft, nameY);

    // Territory
    const terrY = nameY + (isFB ? 20 : 28);
    ctx.font = `500 ${isFB ? 11.5 : 15.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#CCFBF1";
    ctx.fillText(cleanTerritory, safeLeft, terrY);

    // Grounded Contact & Compliance Bar
    const barY = isFB ? 228 : (isLI ? 302 : 386);
    ctx.beginPath();
    ctx.moveTo(safeLeft, barY);
    ctx.lineTo(safeLeft + maxContentW, barY);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.stroke();

    const infoY = barY + (isFB ? 24 : 38);
    let curX = safeLeft;

    // Badge 1: Individual NMLS
    ctx.font = `600 ${isFB ? 10 : 12.5}px \x27Inter\x27, sans-serif`;
    const nmlsText = `NMLS #${a.nmls}`;
    const nmlsW = ctx.measureText(nmlsText).width;
    drawRoundedRect(ctx, curX, infoY - (isFB ? 14 : 17), nmlsW + 18, (isFB ? 22 : 26), 5);
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fill();
    ctx.strokeStyle = "rgba(94, 234, 212, 0.35)";
    ctx.stroke();
    ctx.fillStyle = "#5EEAD4";
    ctx.fillText(nmlsText, curX + 9, infoY + 2);
    curX += nmlsW + 18 + (isFB ? 10 : 16);

    // Item 2: Direct Phone
    const phoneVal = a.phone === "Pending" ? "Assigned Shortly" : a.phone;
    ctx.fillStyle = "#99F6E4";
    ctx.font = `700 ${isFB ? 9.5 : 12}px \x27Inter\x27, sans-serif`;
    ctx.fillText("Direct: ", curX, infoY + 2);
    const dw = ctx.measureText("Direct: ").width;
    ctx.font = `500 ${isFB ? 10 : 12.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(phoneVal, curX + dw, infoY + 2);
    curX += dw + ctx.measureText(phoneVal).width + (isFB ? 10 : 16);

    // Item 3: Application Portal
    if(!isFB || !hasPortrait){
      const linkVal = a.link === "Pending" ? "finayahl.com" : a.link;
      ctx.fillStyle = "#99F6E4";
      ctx.font = `700 ${isFB ? 9.5 : 12}px \x27Inter\x27, sans-serif`;
      ctx.fillText("Apply: ", curX, infoY + 2);
      const aw = ctx.measureText("Apply: ").width;
      ctx.font = `500 ${isFB ? 10 : 12.5}px \x27Inter\x27, sans-serif`;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(linkVal, curX + aw, infoY + 2);
    }

    // Right: Equal Housing
    const ehSize = isFB ? 15 : 20;
    const ehX = safeLeft + maxContentW - (isFB ? 122 : 155);
    drawEqualHousing(ctx, ehX, infoY - (isFB ? 12 : 15), ehSize, "#5EEAD4");
    ctx.font = `500 ${isFB ? 9 : 11}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#CCFBF1";
    ctx.fillText("Equal Housing Lender", ehX + ehSize + 6, infoY + 2);

  } else if(styleKey === "editorial"){
    // EDITORIAL LIGHT STYLE (Slate 50 Ivory)
    const papG = ctx.createLinearGradient(0, 0, W, H);
    papG.addColorStop(0, "#FAF9F5");
    papG.addColorStop(1, "#F1F5F9");
    ctx.fillStyle = papG;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = 1;
    ctx.strokeRect(outerMargin, outerMargin, W - outerMargin * 2, H - outerMargin * 2);

    ctx.beginPath();
    ctx.moveTo(safeLeft - (isFB ? 16 : 24), outerMargin);
    ctx.lineTo(safeLeft - (isFB ? 16 : 24), H - outerMargin);
    ctx.strokeStyle = "#E2E8F0";
    ctx.stroke();

    // Portrait frame on right
    if(hasPortrait){
      drawPortraitCard(ctx, advImg, cardX, cardY, cardW, cardH, cardRadius, "editorial");
    } else {
      drawFinayaWatermark(ctx, W - (isFB ? 130 : 220), H * 0.5, isFB ? 120 : 170, "rgba(0, 95, 90, 0.08)");
    }

    const lw = drawFinayaLogo(ctx, padX, padY, logoH, "#005F5A");

    ctx.font = `700 ${isFB ? 11 : 13.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#314158";
    ctx.fillText("HOME LOANS", padX + lw + (isFB ? 8 : 12), padY + logoH * 0.72);
    const hlW = ctx.measureText("HOME LOANS").width;

    if(!isFB){
      ctx.beginPath();
      ctx.moveTo(padX + lw + 12 + hlW + 16, padY + 6);
      ctx.lineTo(padX + lw + 12 + hlW + 16, padY + logoH - 4);
      ctx.strokeStyle = "#CBD5E1";
      ctx.stroke();

      ctx.font = "600 10.5px \x27Inter\x27, sans-serif";
      ctx.fillStyle = "#00786F";
      const subBrand = hasPortrait ? "PRIVATE CLIENT LENDING · NMLS #2470186" : "PRIVATE CLIENT LENDING";
      ctx.fillText(subBrand, padX + lw + 12 + hlW + 28, padY + logoH * 0.68);
    }

    if(!hasPortrait){
      ctx.textAlign = "right";
      ctx.font = `500 ${isFB ? 10.5 : 12}px \x27Inter\x27, sans-serif`;
      ctx.fillStyle = "#64748B";
      ctx.fillText("Company NMLS #2470186", W - padX, padY + (isFB ? 16 : 20));
      ctx.textAlign = "left";
    }

    const eyebrowY = isFB ? 94 : (isLI ? 120 : 156);
    ctx.font = `700 ${isFB ? 9.5 : 11.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#00786F";
    ctx.fillText("RESIDENTIAL MORTGAGE ADVISORY", safeLeft, eyebrowY);

    const baseNameSize = isFB ? 28 : (isLI ? 44 : 48);
    const fit = fitText(ctx, a.name, maxContentW, baseNameSize, "\x27Playfair Display\x27, Georgia, serif", "600");
    const nameY = eyebrowY + fit.size * 1.08;
    ctx.font = `600 ${fit.size}px \x27Playfair Display\x27, Georgia, serif`;
    ctx.fillStyle = "#020618";
    ctx.fillText(a.name, safeLeft, nameY);

    const terrY = nameY + (isFB ? 20 : 28);
    ctx.font = `500 ${isFB ? 11.5 : 15.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#45556C";
    const advSub = a.state === "Pending" ? "Executive Mortgage Advisor · Nationwide Residential Lending" : `${a.title} · ${cleanTerritory}`;
    ctx.fillText(advSub, safeLeft, terrY);

    const barY = isFB ? 228 : (isLI ? 302 : 386);
    drawRoundedRect(ctx, safeLeft, barY - 6, maxContentW, (isFB ? 42 : 52), 8);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.strokeStyle = "#E2E8F0";
    ctx.stroke();

    const infoY = barY + (isFB ? 20 : 26);
    let curX = safeLeft + 16;

    ctx.font = `600 ${isFB ? 10 : 12}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#005F5A";
    ctx.fillText(`NMLS #${a.nmls}`, curX, infoY);
    curX += ctx.measureText(`NMLS #${a.nmls}`).width + 14;

    ctx.fillStyle = "#CBD5E1";
    ctx.fillText("|", curX, infoY);
    curX += 12;

    const phoneVal = a.phone === "Pending" ? "Assigned Shortly" : a.phone;
    ctx.font = `500 ${isFB ? 10 : 12}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#020618";
    ctx.fillText(`Direct: ${phoneVal}`, curX, infoY);
    curX += ctx.measureText(`Direct: ${phoneVal}`).width + 14;

    if(!isFB || !hasPortrait){
      ctx.fillStyle = "#CBD5E1";
      ctx.fillText("|", curX, infoY);
      curX += 12;

      const linkVal = a.link === "Pending" ? "finayahl.com" : a.link;
      ctx.font = `500 ${isFB ? 10 : 12}px \x27Inter\x27, sans-serif`;
      ctx.fillStyle = "#00786F";
      ctx.fillText(`Apply: ${linkVal}`, curX, infoY);
    }

    const ehSize = isFB ? 15 : 20;
    const ehX = safeLeft + maxContentW - (isFB ? 122 : 155);
    drawEqualHousing(ctx, ehX, infoY - (isFB ? 12 : 15), ehSize, "#005F5A");
    ctx.font = `500 ${isFB ? 9 : 11}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#45556C";
    ctx.fillText("Equal Housing Lender", ehX + ehSize + 6, infoY + 2);

  } else if(styleKey === "minimal"){
    // MODERN EXECUTIVE (Obsidian Minimal)
    ctx.fillStyle = "#030D0C";
    ctx.fillRect(0, 0, W, H);

    const radG = ctx.createRadialGradient(safeLeft, H * 0.5, 20, safeLeft, H * 0.5, W * 0.7);
    radG.addColorStop(0, "rgba(0, 95, 90, 0.22)");
    radG.addColorStop(1, "transparent");
    ctx.fillStyle = radG;
    ctx.fillRect(0, 0, W, H);

    // Outer framing straight-line rectangle
    ctx.strokeStyle = "rgba(255, 255, 255, 0.09)";
    ctx.lineWidth = 1;
    ctx.strokeRect(outerMargin, outerMargin, W - outerMargin * 2, H - outerMargin * 2);

    ctx.beginPath();
    ctx.moveTo(safeLeft - (isFB ? 16 : 24), outerMargin);
    ctx.lineTo(safeLeft - (isFB ? 16 : 24), H - outerMargin);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
    ctx.stroke();

    // Portrait frame with emerald halo
    if(hasPortrait){
      drawPortraitCard(ctx, advImg, cardX, cardY, cardW, cardH, cardRadius, "minimal");
    } else {
      drawFinayaWatermark(ctx, W - (isFB ? 130 : 220), H * 0.5, isFB ? 120 : 170, "rgba(0, 212, 146, 0.08)");
    }

    const lw = drawFinayaLogo(ctx, padX, padY, logoH, "#FFFFFF");

    ctx.font = `700 ${isFB ? 11 : 13.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#00D492";
    const hlBrand = hasPortrait ? "HOME LOANS · NMLS #2470186" : "HOME LOANS";
    ctx.fillText(hlBrand, padX + lw + (isFB ? 8 : 12), padY + logoH * 0.72);

    if(!hasPortrait){
      ctx.textAlign = "right";
      ctx.font = `600 ${isFB ? 10.5 : 12}px \x27Inter\x27, sans-serif`;
      ctx.fillStyle = "#00D492";
      ctx.fillText("Company NMLS #2470186", W - padX, padY + (isFB ? 16 : 20));
      ctx.textAlign = "left";
    }

    const eyebrowY = isFB ? 94 : (isLI ? 120 : 156);
    ctx.font = `700 ${isFB ? 9.5 : 11.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#00D492";
    ctx.fillText("EXECUTIVE RESIDENTIAL LENDING", safeLeft, eyebrowY);

    const baseNameSize = isFB ? 28 : (isLI ? 44 : 48);
    const fit = fitText(ctx, a.name, maxContentW, baseNameSize, "\x27Playfair Display\x27, Georgia, serif", "600");
    const nameY = eyebrowY + fit.size * 1.08;
    ctx.font = `600 ${fit.size}px \x27Playfair Display\x27, Georgia, serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(a.name, safeLeft, nameY);

    const terrY = nameY + (isFB ? 20 : 28);
    ctx.font = `500 ${isFB ? 11.5 : 15.5}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#94A3B8";
    ctx.fillText(cleanTerritory, safeLeft, terrY);

    const barY = isFB ? 228 : (isLI ? 302 : 386);
    ctx.beginPath();
    ctx.moveTo(safeLeft, barY);
    ctx.lineTo(safeLeft + maxContentW, barY);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.stroke();

    const infoY = barY + (isFB ? 24 : 38);
    let curX = safeLeft;

    // Item 1: NMLS Badge
    ctx.font = `600 ${isFB ? 10 : 12.5}px \x27Inter\x27, sans-serif`;
    const nmlsText = `NMLS #${a.nmls}`;
    const nmlsW = ctx.measureText(nmlsText).width;
    drawRoundedRect(ctx, curX, infoY - (isFB ? 14 : 17), nmlsW + 18, (isFB ? 22 : 26), 5);
    ctx.fillStyle = "rgba(0, 212, 146, 0.12)";
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 212, 146, 0.5)";
    ctx.stroke();
    ctx.fillStyle = "#00D492";
    ctx.fillText(nmlsText, curX + 9, infoY + 2);
    curX += nmlsW + 18 + (isFB ? 10 : 16);

    // Item 2: Direct Phone
    const phoneVal = a.phone === "Pending" ? "Assigned Shortly" : a.phone;
    ctx.fillStyle = "#F1F5F9";
    ctx.font = `500 ${isFB ? 10 : 12.5}px \x27Inter\x27, sans-serif`;
    ctx.fillText(`📞 ${phoneVal}`, curX, infoY + 2);
    curX += ctx.measureText(`📞 ${phoneVal}`).width + (isFB ? 10 : 16);

    // Item 3: Application Portal
    if(!isFB || !hasPortrait){
      const linkVal = a.link === "Pending" ? "finayahl.com" : a.link;
      ctx.fillStyle = "#38BDF8";
      ctx.fillText(`🔗 ${linkVal}`, curX, infoY + 2);
    }

    const ehSize = isFB ? 15 : 20;
    const ehX = safeLeft + maxContentW - (isFB ? 122 : 155);
    drawEqualHousing(ctx, ehX, infoY - (isFB ? 12 : 15), ehSize, "#00D492");
    ctx.font = `500 ${isFB ? 9 : 11}px \x27Inter\x27, sans-serif`;
    ctx.fillStyle = "#CBD5E1";
    ctx.fillText("Equal Housing Lender", ehX + ehSize + 6, infoY + 2);
  }

  // Overlay platform safe areas if requested
  if(showSafe){
    drawSafeAreaGuide(ctx, W, H, isLI ? "li" : (isFB ? "fb" : "x"));
  }
}

function copyBannerToClipboard(){
  const a = ADVISORS.find(x=>x.id===selectedId);
  const p = BANNER_PRESETS[bannerPreset];
  const c = document.createElement("canvas");
  const exportScale = (bannerPreset === "fb" || bannerPreset === "x") ? 2 : 1;
  c.width = p.w * exportScale;
  c.height = p.h * exportScale;
  const ctx = c.getContext("2d");
  ctx.save();
  ctx.scale(exportScale, exportScale);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const doCopy = (img) => {
    paintBanner(ctx, p.w, p.h, a, bannerStyle, false, img, includePortrait);
    ctx.restore();
    if(c.toBlob && navigator.clipboard && navigator.clipboard.write){
      c.toBlob(blob=>{
        if(!blob){ toast("Failed to export image"); return; }
        navigator.clipboard.write([new ClipboardItem({"image/png": blob})])
          .then(()=>{
            const btn = $("#copyBanner");
            if(btn){
              const originalHTML = btn.innerHTML;
              btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>Copied!</span>`;
              btn.classList.add("done");
              setTimeout(()=>{
                btn.innerHTML = originalHTML;
                btn.classList.remove("done");
              }, 1400);
            }
            toast(`Copied ${p.label} banner (${c.width}×${c.height}px) to clipboard`);
          })
          .catch(()=> toast("Image copy blocked by browser permissions"));
      }, "image/png");
    } else {
      toast("Image clipboard not supported in this browser");
    }
  };

  if(includePortrait && a.status !== "waiting"){
    getAdvisorImg(a.id, doCopy);
  } else {
    doCopy(null);
  }
}

function downloadBanner(){
  const a = ADVISORS.find(x=>x.id===selectedId);
  const p = BANNER_PRESETS[bannerPreset];
  const c = document.createElement("canvas");
  const exportScale = (bannerPreset === "fb" || bannerPreset === "x") ? 2 : 1;
  c.width = p.w * exportScale;
  c.height = p.h * exportScale;
  const ctx = c.getContext("2d");
  ctx.save();
  ctx.scale(exportScale, exportScale);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const doDownload = (img) => {
    paintBanner(ctx, p.w, p.h, a, bannerStyle, false, img, includePortrait);
    ctx.restore();
    const slug = a.name.toLowerCase().replace(/[^a-z]+/g,"-");
    const el = document.createElement("a");
    el.download = `finaya-banner-${slug}-${bannerPreset}-${bannerStyle}.png`;
    el.href = c.toDataURL("image/png");
    el.click();
    toast(`Downloaded ultra-crisp ${p.label} banner (${c.width}×${c.height}px)`);
  };

  if(includePortrait && a.status !== "waiting"){
    getAdvisorImg(a.id, doDownload);
  } else {
    doDownload(null);
  }
}


/* ---------------- CORPORATE CHECKLIST ---------------- */
const CORP_ITEMS = [
  {id:"corp1", t:"Update page tagline", d:"New tagline reflecting the Finaya Home Loans brand. No unapproved slogans until Naren confirms the official one."},
  {id:"corp2", t:"Rewrite About section", d:"Full company description with HQ address, company NMLS #2470186, Equal Housing Lender statement, NMLS Consumer Access link."},
  {id:"corp3", t:"Confirm headquarters data", d:"378 Technology Center Way, Suite 1002, Rock Hill, SC 29730, verified against the Google Business profile."},
  {id:"corp4", t:"NBI post cleanup protocol", d:"Review posts from the last 24 months. Archive or update anything referencing NBI or the old brokerage. Pin the rebrand announcement."},
  {id:"corp5", t:"Banner and logo swap", d:"Upload the new Finaya Home Loans logo and branded cover banner on the corporate page."}
];
function renderCorp(){
  const saved = JSON.parse(localStorage.getItem("finayaCorpChecklist") || "{}");
  $("#corpChecklist").innerHTML = CORP_ITEMS.map(i=>`
    <label class="chk">
      <input type="checkbox" data-corp="${i.id}" ${saved[i.id]?"checked":""}>
      <span class="ci"><div class="ct">${i.t}</div><div class="cd">${i.d}</div></span>
    </label>`).join("");
  const update = ()=>{
    const done = CORP_ITEMS.filter(i=>saved[i.id]).length;
    $("#corpProgress").textContent = `${done} of ${CORP_ITEMS.length} done`;
  };
  update();
  document.querySelectorAll("[data-corp]").forEach(cb=>{
    cb.onchange = ()=>{
      saved[cb.dataset.corp] = cb.checked;
      localStorage.setItem("finayaCorpChecklist", JSON.stringify(saved));
      update();
      toast(`Saved. ${CORP_ITEMS.filter(i=>saved[i.id]).length} of ${CORP_ITEMS.length} done`);
    };
  });
}

/* ---------------- MODAL / SEARCH / INIT ---------------- */
$("#openHowTo").onclick = ()=> $("#modalOverlay").classList.add("open");
$("#closeHowTo").onclick = ()=> $("#modalOverlay").classList.remove("open");
$("#modalOverlay").onclick = e => { if(e.target.id==="modalOverlay") $("#modalOverlay").classList.remove("open"); };
document.addEventListener("keydown", e=>{ if(e.key==="Escape") $("#modalOverlay").classList.remove("open"); });
$("#searchInput").addEventListener("input", e=>{
  searchTerm = e.target.value.trim().toLowerCase();
  renderRoster();
});

renderHeaderStats();
renderTabs();
renderRoster();
renderStage();
renderCorp();

/* Deep links: #tab-banner, #advisor-20, #advisor=5&tab=headshot, #tab=banner&preset=fb */
(function(){
  const h = location.hash.slice(1);
  if(!h) return;
  const advMatch = h.match(/(?:advisor|adv)[=-]?(\d+)/i);
  if(advMatch && ADVISORS.some(a=>a.id===+advMatch[1])){ selectAdvisor(+advMatch[1]); }
  const presetMatch = h.match(/(?:preset)[=-]?(\w+)/i);
  if(presetMatch && ["li","fb","x"].includes(presetMatch[1].toLowerCase())){
    bannerPreset = presetMatch[1].toLowerCase();
  }
  const styleMatch = h.match(/(?:style)[=-]?(\w+)/i);
  if(styleMatch && ["corporate","editorial","minimal"].includes(styleMatch[1].toLowerCase())){
    bannerStyle = styleMatch[1].toLowerCase();
  }
  const tabMatch = h.match(/(?:tab[=-]?)(\w+)/i);
  if(tabMatch && ["li","scrub","social","sig","banner","headshot"].includes(tabMatch[1].toLowerCase())){
    activeTab = tabMatch[1].toLowerCase();
    renderTabs();
    renderStage();
  }
})();

/* ---------------- ROBUST GLOBAL EVENT DELEGATION ---------------- */
if (typeof document !== "undefined") {
  document.addEventListener("click", function(e) {
    const btn = e.target.closest("[data-copy-val]");
    if (btn) {
      e.stopPropagation();
      copyText(btn.dataset.copyVal, btn);
    }
  });
}

window.init = init;
init();
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  }
  window.addEventListener("load", init);
  setTimeout(init, 50);
  setTimeout(init, 300);
}
