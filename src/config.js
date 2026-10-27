// ============================================================
//  EDIT EVERYTHING HERE — names, dates, captions, reasons, etc.
// ============================================================

export const config = {
  // ---- Names ----
  yourName: "Your Name",
  herName: "Her Name",

  // ---- Relationship start date ----
  // (Year, Month-1, Day, Hours, Minutes, Seconds)
  // Note: Month starts from 0 (0 = Jan, 5 = June)
  startDate: new Date(2023, 5, 14, 18, 30, 0),

  // ---- Hero tagline ----
  tagline: "Every day with you feels like a favourite song on repeat.",

  // ---- Timeline Photos ----
  // Note: Tumhe public/images/ folder mein apni photos rakhni hongi 
  // (e.g., photo1.jpg, photo2.jpg). Agar images nahi milengi toh woh 
  // automatically styled placeholder dikhayega.
  timeline: [
    {
      id: 1,
      src: "/images/photo1.jpg",
      caption: "That day you laughed so hard at the bus stop, people stared. Worth it.",
    },
    {
      id: 2,
      src: "/images/photo2.jpg",
      caption: "You defended your Maggi recipe like a PhD thesis. I still think about it.",
    },
    {
      id: 3,
      src: "/images/photo3.jpg",
      caption: "First time you fell asleep on my shoulder. I didn't move for 40 minutes.",
    },
    {
      id: 4,
      src: "/images/photo4.jpg",
      caption: "Rainy day, no umbrella, both soaked. Best 'bad' plan ever.",
    },
    {
      id: 5,
      src: "/images/photo5.jpg",
      caption: "The blurry selfie you insisted was 'aesthetic'. It actually was.",
    },
    {
      id: 6,
      src: "/images/photo6.jpg",
      caption: "You rated every dog we saw out of 10. I rated you a 10.",
    },
  ],

  // ---- Reasons I Love You ----
  reasons: [
    "You narrate your own life like a sports commentator.",
    "You get emotionally attached to every stray dog within 5 metres.",
    "You remember tiny things I said once, months ago.",
    "Your '5-minute nap' is a full lifestyle choice.",
    "You send me reels at 2 AM like it's a national duty.",
    "You argue with GPS. And win.",
    "You make ordinary Sundays feel like festivals.",
    "You have a specific face for every emotion — and I've memorised all of them.",
    "You defend me before I even explain my side.",
    "You make my worst days feel 40% smaller.",
  ],

  // ---- The Love Letter ----
  letter: {
    heading: "To My Favourite Person,",
    body: `I don't know how to put this in one letter, so I'll try. Thank you for being the reason ordinary days feel worth looking forward to. For every laugh, every argument about food, every late-night call — I'd choose all of it again, in every version of this life. You are my favourite habit and my best decision.`,
    signature: "Yours, always",
  },

  // ---- Final Surprise Section ----
  finalSurprise: {
    buttonLabel: "Ek surprise hai…",
    note: "I promise to keep choosing you — in every small, boring, beautiful day ahead. ❤️",
  },
};

export default config;