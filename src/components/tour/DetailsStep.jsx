import React from "react";

const DetailsStep = ({ formData, setFormData }) => {
  return (
    <div className="animate-fade-in space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold ml-3">
            Full Name
          </label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-accent-gold"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold ml-3">
            Email
          </label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-accent-gold"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold ml-3">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-accent-gold"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold ml-3">
            Group Size
          </label>
          <input
            type="text"
            placeholder="e.g. 5 People"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-accent-gold"
            value={formData.groupSize}
            onChange={(e) =>
              setFormData({ ...formData, groupSize: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-8 pt-8 border-t border-white/5">
        <div className="space-y-4">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold">
            Estimated Budget (Per Head)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Under ₹5k", "₹5k-₹10k", "₹10k-₹20k", "Above ₹20k"].map((b) => (
              <button
                key={b}
                onClick={() => setFormData({ ...formData, estimatedBudget: b })}
                className={`py-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${formData.estimatedBudget === b ? "bg-accent-gold border-accent-gold text-forest-deep" : "bg-white/5 border-white/10 text-white/30"}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold">
              Transport
            </label>
            <div className="flex gap-2">
              {["AC", "Non AC"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFormData({ ...formData, transport: t })}
                  className={`flex-1 py-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${formData.transport === t ? "bg-accent-gold border-accent-gold text-forest-deep" : "bg-white/5 border-white/10 text-white/30"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold">
              Food
            </label>
            <div className="flex gap-2">
              {["Veg", "Both"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormData({ ...formData, food: f })}
                  className={`flex-1 py-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${formData.food === f ? "bg-accent-gold border-accent-gold text-forest-deep" : "bg-white/5 border-white/10 text-white/30"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold">
              Stay Preference
            </label>
            <select
              value={formData.stay}
              onChange={(e) =>
                setFormData({ ...formData, stay: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[11px] font-black uppercase focus:border-accent-gold focus:outline-none"
            >
              <option value="" className="bg-forest-deep text-white">
                Select Type
              </option>
              {[
                "Hotel (AC)",
                "Hotel (Non AC)",
                "HomeStay (AC)",
                "HomeStay (Non AC)",
              ].map((s) => (
                <option key={s} value={s} className="bg-forest-deep text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsStep;
