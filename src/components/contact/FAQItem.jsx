import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-heading font-bold text-white group-hover:text-accent-gold transition-colors">
          {question}
        </span>
        {isOpen ? (
          <Minus size={18} className="text-accent-gold" />
        ) : (
          <Plus size={18} className="text-white/40 group-hover:text-white" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-white/60 leading-relaxed font-medium">{answer}</p>
      </div>
    </div>
  );
}
