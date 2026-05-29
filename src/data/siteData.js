import heroImage from "../assets/images/hero-ktm-adventure.png";
import himalayaImage from "../assets/images/gallery-himalaya.png";
import desertImage from "../assets/images/gallery-desert.png";
import monsoonImage from "../assets/images/gallery-monsoon.png";

export const brand = {
  name: "SabirCreates",
  handle: "@sabircreates",
  instagram: "https://instagram.com/sabircreates",
  niche: "Motorcycle travel, cinematic reels, adventure riding, travel storytelling",
  bike: "KTM Adventure 390 2026",
  heroImage
};

export const navItems = [
  { label: "Reels", href: "#reels" },
  { label: "Rides", href: "#rides" },
  { label: "Bike", href: "#bike" },
  { label: "Stories", href: "#stories" },
  { label: "Collab", href: "#collab" }
];

export const stats = [
  { value: "12+", label: "states mapped" },
  { value: "48", label: "ride logs" },
  { value: "4K", label: "cinematic-first edits" },
  { value: "390", label: "ADV platform" }
];

export const reels = [
 {
  title: "KTM Adventure Ride",
  location: "Darjeeling",
  metric: "Latest Reel",
  image: himalayaImage,
  type: "Instagram Reel"
},
  {
    title: "KTM Adventure 390",
    location: "West Bengal",
    metric: "Latest Moto Reel",
    image: desertImage,
    type: "YouTube Short"
  },
  {
    title: "Monsoon Switchbacks",
    location: "Western Ghats",
    metric: "Community favorite",
    image: monsoonImage,
    type: "Instagram Reel"
  }
];

export const gallery = [
  { title: "Altitude Therapy", place: "Himalayan overlook", image: himalayaImage },
  { title: "Dust Lines", place: "Rajasthan highway", image: desertImage },
  { title: "Rain Mode", place: "Western Ghats", image: monsoonImage },
  { title: "Launch Frame", place: "Creator identity", image: heroImage }
];

export const bikeSpecs = [
  { label: "Platform", value: "KTM Adventure 390 2026" },
  { label: "Ride Focus", value: "Touring, trail roads, high-altitude routes" },
  { label: "Creator Setup", value: "Helmet cam, chest POV, drone-style edits" },
  { label: "Visual DNA", value: "Orange-black race energy with travel utility" }
];

export const gear = [
  "Auxiliary lights",
  "Crash protection",
  "Touring windscreen",
  "Luggage rack",
  "Action cam mounts",
  "All-weather riding gear"
];

export const routePins = [
  { city: "Delhi", status: "Base build", x: "45%", y: "30%" },
  { city: "Rajasthan", status: "Desert story arc", x: "30%", y: "48%" },
  { city: "Spiti", status: "High-altitude reel series", x: "42%", y: "18%" },
  { city: "Goa", status: "Coastal creator sprint", x: "38%", y: "76%" },
  { city: "Western Ghats", status: "Monsoon ride logs", x: "46%", y: "70%" }
];

export const stories = [
  {
    title: "How I Plan a 3-Day ADV Route",
    category: "Creator Workflow",
    excerpt: "A practical ride-planning story built around weather windows, light, fuel stops, and cinematic checkpoints."
  },
  {
    title: "The Camera Angles That Sell Speed",
    category: "Reel Breakdown",
    excerpt: "POV, compression, sound design, and transition choices that turn ordinary roads into high-retention travel edits."
  },
  {
    title: "Building a Moto Creator Brand in India",
    category: "Brand Strategy",
    excerpt: "Positioning SabirCreates for community growth, YouTube depth, and premium collaboration opportunities."
  }
];

export const aiFeatures = [
  "AI trip planner",
  "AI route suggestions",
  "AI riding assistant chatbot",
  "Smart ride recommendations"
];

export const socialCards = [
  { platform: "Instagram", copy: "Reels, carousel drops, route snapshots", cta: "Connect @sabircreates" },
  { {
  platform: "YouTube",
  copy: "SabirCreates + Blogg Boss content",
  cta: "Subscribe SabirCreates"
},
{
  platform: "YouTube 2",
  copy: "Moto rides, viral shorts, bike lifestyle",
  cta: "Visit Blogg Boss"
},
  { platform: "Community", copy: "Ride alerts, meetups, behind-the-scenes drops", cta: "Join the crew" }
];
