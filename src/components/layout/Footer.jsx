import { Instagram, Mail, MapPinned, Youtube } from "lucide-react";
import { brand, navItems } from "../../data/siteData.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black uppercase tracking-[0.14em] text-white">{brand.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/[0.58]">
            Cinematic motorcycle travel, adventure storytelling, and creator-first collaborations built from Indian roads outward.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-ember">Explore</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/[0.58] transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-ember">Social</p>
          <div className="mt-4 flex gap-3">
            {[Instagram, Youtube, Mail, MapPinned].map((Icon, index) => (
              <a key={index} href={index === 0 ? "https://instagram.com/sabircreates" : "#collab"} className="rounded-md border border-white/10 p-3 text-white/[0.62] transition hover:border-ember hover:text-ember" aria-label="Social link">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.08] py-5 text-center text-xs uppercase tracking-[0.18em] text-white/[0.38]">
        © 2026 SabirCreates. Ride the story.
      </div>
    </footer>
  );
}
