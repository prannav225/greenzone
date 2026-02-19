import { Phone, MessageCircle, Mail, Instagram } from "lucide-react";

export default function QuickConnect() {
  const contactItems = [
    {
      icon: <Phone size={14} />,
      label: "Direct Line",
      value: "+91 70199 71407",
      href: "tel:+917019971407",
    },
    {
      icon: <MessageCircle size={14} />,
      label: "WhatsApp",
      value: "+91 70199 71407",
      href: "https://wa.me/917019971407",
    },
    {
      icon: <Mail size={14} />,
      label: "Email",
      value: "greenzoneadventures@gmail.com",
      href: "mailto:greenzoneadventures@gmail.com",
    },
    {
      icon: <Instagram size={14} />,
      label: "Instagram",
      value: "@greenzoneadventures",
      href: "https://instagram.com/greenzoneadventures",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
        Quick Connect
      </h3>
      <div className="space-y-4">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-gold/20 text-accent-gold flex items-center justify-center group-hover:bg-accent-gold group-hover:text-forest-deep transition-all duration-500">
              {item.icon}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">
                {item.label}
              </span>
              <span className="text-sm font-bold text-white/80 block group-hover:text-white transition-colors">
                {item.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
