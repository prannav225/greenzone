import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const DESTINATIONS = [
  {
    id: "hampi",
    name: "Hampi",
    subtitle: "Stone Poetry",
    image:
      "https://images.unsplash.com/photo-1651569213711-b29d1fc3f995?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gokarna",
    name: "Gokarna",
    subtitle: "Coastal Stillness",
    image:
      "https://images.unsplash.com/photo-1641192936002-80e89555786f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "chikkamagaluru",
    name: "Chikkamagaluru",
    subtitle: "Cloud Navigation",
    image:
      "https://images.unsplash.com/photo-1605105777592-c3430a67d033?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "belur-halebeedu",
    name: "Belur & Halebeedu",
    subtitle: "Silent Masterpieces",
    image:
      "https://images.unsplash.com/photo-1702970091346-8e4e72427691?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mysuru",
    name: "Mysuru",
    subtitle: "Royal Heritage",
    image:
      "https://images.unsplash.com/photo-1585167716034-5d7f10f162b9?q=80&w=800&auto=format",
  },
  {
    id: "sringeri",
    name: "Sringeri",
    subtitle: "Vedic Echoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp8xALeke30H4hUXOJCKSokRkPuDhBEefag&s",
  },
  {
    id: "kolluru-kodachadri",
    name: "Kodachadri",
    subtitle: "Summit Wisdom",
    image: "https://pbs.twimg.com/media/GtVdDykbMAIIuhu.jpg",
  },
  {
    id: "dakshina-kashi",
    name: "Dakshina Kashi",
    subtitle: "Sacred Currents",
    image:
      "https://horanadu-web-img.s3.ap-south-1.amazonaws.com/website-main-images/About+(1).webp",
  },
  {
    id: "madikeri",
    name: "Madikeri",
    subtitle: "Wild Interior",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkOoWCwxgxj-WJ6ziKROC7Ap4FMlfHxHrGdQ&s",
  },
  {
    id: "lepakshi-penukonda",
    name: "Lepakshi",
    subtitle: "Mythic Legacy",
    image:
      "https://www.topplacesindia.com/img/attractions/andhra-pradesh/gooty-fort/gooty-fort-hero.jpg",
  },
  {
    id: "netrani-island",
    name: "Netrani",
    subtitle: "Crystal Stillness",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "udupi-stmarys",
    name: "Udupi",
    subtitle: "Basaltic Rhythms",
    image:
      "https://images.unsplash.com/photo-1595931320730-c4589902db9a?q=80&w=800&auto=format&fit=crop",
  },
];

export default function DestinationGrid({ id }) {
  return (
    <section id={id} className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-forest/10 bg-forest/5">
            <MapPin className="w-3.5 h-3.5 text-accent-gold" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/60">
              Selected Geographies
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-forest mb-6 tracking-tighter">
            Karnataka's{" "}
            <span className="text-accent-gold italic">Signature Sites.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <Link
              key={idx}
              to={`/destinations#${dest.id}`}
              className="group relative h-[300px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden bg-forest-deep flex flex-col justify-end p-6 sm:p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Background with cinematic darkening */}
              <div className="absolute inset-0 z-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent group-hover:via-black/40 transition-all duration-700" />
              </div>

              {/* Minimal Line for aesthetic structure */}
              <div className="relative z-10 w-8 h-1 bg-accent-gold mb-6 transition-all duration-500 group-hover:w-16" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white mb-2 leading-[0.9] tracking-tighter">
                  {dest.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-accent-gold/80 uppercase tracking-[0.3em] mb-8">
                  {dest.subtitle}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 group/btn">
                    Explore Details
                    <ArrowUpRight className="w-4 h-4 text-accent-gold transition-transform duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                  </span>
                  <span className="text-[10px] font-black text-white/20">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              </div>

              {/* Inner Focus Border (Very Subtle) */}
              <div className="absolute inset-4 rounded-[1.8rem] border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
