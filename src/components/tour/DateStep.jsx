import React from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";

const DateStep = ({
  formData,
  setFormData,
  setJourneyDuration,
  journeyDuration,
}) => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
            <Calendar className="w-5 h-5 text-accent-gold" />
          </div>
          <h4 className="text-xl font-black text-white uppercase tracking-tighter">
            Select Your Dates
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold ml-3">
              Start Date
            </label>
            <DatePicker
              selected={formData.fromDate}
              onChange={(date) => {
                setFormData({ ...formData, fromDate: date });
                if (date && formData.toDate) {
                  const diff = Math.ceil(
                    (formData.toDate - date) / (1000 * 60 * 60 * 24),
                  );
                  if (diff >= 0)
                    setJourneyDuration(`${diff + 1} Days, ${diff} Nights`);
                }
              }}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white cursor-pointer focus:border-accent-gold focus:outline-none transition-all"
              popperPlacement="bottom"
              inputMode="none"
              autoComplete="off"
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold ml-3">
              End Date
            </label>
            <DatePicker
              selected={formData.toDate}
              onChange={(date) => {
                setFormData({ ...formData, toDate: date });
                if (formData.fromDate && date) {
                  const diff = Math.ceil(
                    (date - formData.fromDate) / (1000 * 60 * 60 * 24),
                  );
                  if (diff >= 0)
                    setJourneyDuration(`${diff + 1} Days, ${diff} Nights`);
                }
              }}
              minDate={formData.fromDate || new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white cursor-pointer focus:border-accent-gold focus:outline-none transition-all"
              popperPlacement="bottom"
              inputMode="none"
              autoComplete="off"
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {formData.fromDate && formData.toDate && (
          <div className="pt-6 border-t border-white/5 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-accent-gold/60">
              Total Duration:{" "}
              <span className="text-white">{journeyDuration}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateStep;
