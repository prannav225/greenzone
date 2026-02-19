import { useState } from "react";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import { EXPERIENCE_TYPES } from "../../data/contactData";
import { DESTINATION_COLLECTIONS } from "../../data/destinationsData";

// Flatten all destinations into a single list for the dropdown
const ALL_DESTINATIONS = DESTINATION_COLLECTIONS.flatMap(
  (col) => col.destinations,
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    experienceType: "",
    startDate: "",
    endDate: "",
    groupSize: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[0-9\s+-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (min 10 digits)";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination";
    }

    if (!formData.experienceType) {
      newErrors.experienceType = "Please select an experience type";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (
      formData.startDate &&
      formData.endDate &&
      new Date(formData.startDate) > new Date(formData.endDate)
    ) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted successfully:", formData);
      setIsSubmitted(true);
      // Reset after success if needed or show success message
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      console.warn("Form validation failed", errors);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const inputClasses = (field) => `
    w-full bg-white/5 border px-6 py-4 rounded-2xl outline-none font-medium text-white transition-all placeholder:text-white/20
    ${errors[field] ? "border-red-500 bg-red-500/5 focus:border-red-500" : "border-white/10 focus:border-accent-gold focus:bg-white/10"}
  `;

  return (
    <div className="lg:col-span-8 bg-white/5 backdrop-blur-3xl p-6 sm:p-12 lg:p-16 rounded-card border border-white/10 shadow-premium relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl opacity-50" />

      {isSubmitted ? (
        <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center animate-fade-in">
          <CheckCircle2 className="w-20 h-20 text-accent-gold mb-8 animate-bounce" />
          <h3 className="text-3xl font-heading font-black text-white mb-4">
            Inquiry Received.
          </h3>
          <p className="text-white/60 max-w-sm">
            Our curators will reach out to you within 24 hours to begin crafting
            your journey.
          </p>
          <PrimaryButton
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
            className="mt-10"
          >
            Send Another Inquiry
          </PrimaryButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent-gold ml-2 flex justify-between items-center">
                Full Name
                {errors.name && (
                  <span className="text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.name}
                  </span>
                )}
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClasses("name")}
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent-gold ml-2 flex justify-between items-center">
                Email Address
                {errors.email && (
                  <span className="text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.email}
                  </span>
                )}
              </label>
              <input
                type="text"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClasses("email")}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent-gold ml-2 flex justify-between items-center">
                Phone Number
                {errors.phone && (
                  <span className="text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.phone}
                  </span>
                )}
              </label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClasses("phone")}
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent-gold ml-2 flex justify-between items-center">
                Preferred Destination
                {errors.destination && (
                  <span className="text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.destination}
                  </span>
                )}
              </label>
              <div className="relative">
                <select
                  value={formData.destination}
                  onChange={(e) => handleChange("destination", e.target.value)}
                  className={`${inputClasses("destination")} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-forest-deep text-white/40">
                    Select Destination
                  </option>
                  {ALL_DESTINATIONS.map((dest) => (
                    <option
                      key={dest.id}
                      value={dest.id}
                      className="bg-forest-deep text-white"
                    >
                      {dest.name}
                    </option>
                  ))}
                  <option
                    value="custom"
                    className="bg-forest-deep text-white italic"
                  >
                    Other / Custom Journey
                  </option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                  <Send className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent-gold ml-2 flex justify-between items-center">
                Type of Experience
                {errors.experienceType && (
                  <span className="text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.experienceType}
                  </span>
                )}
              </label>
              <div className="relative">
                <select
                  value={formData.experienceType}
                  onChange={(e) =>
                    handleChange("experienceType", e.target.value)
                  }
                  className={`${inputClasses("experienceType")} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-forest-deep text-white/40">
                    Select Experience
                  </option>
                  {EXPERIENCE_TYPES.map((type) => (
                    <option
                      key={type.id}
                      value={type.id}
                      className="bg-forest-deep text-white"
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                  <Send className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent-gold ml-2">
                Travel Duration
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleChange("startDate", e.target.value)}
                    className={`${inputClasses("startDate")} text-[10px] sm:text-xs scheme-dark`}
                  />
                </div>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleChange("endDate", e.target.value)}
                    className={`${inputClasses("endDate")} text-[10px] sm:text-xs scheme-dark`}
                  />
                </div>
              </div>
              {errors.startDate && (
                <p className="text-red-400 text-[9px] font-medium ml-2">
                  {errors.startDate}
                </p>
              )}
              {errors.endDate && (
                <p className="text-red-400 text-[9px] font-medium ml-2">
                  {errors.endDate}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-accent-gold ml-2">
                Group Size
              </label>
              <input
                type="number"
                min="1"
                placeholder="Number of travelers"
                value={formData.groupSize}
                onChange={(e) => handleChange("groupSize", e.target.value)}
                className={inputClasses("groupSize")}
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-accent-gold ml-2">
                Budget Range (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 50k - 1L per person"
                value={formData.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
                className={inputClasses("budget")}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-accent-gold ml-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about the atmosphere you seek..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`${inputClasses("message")} resize-none`}
            />
          </div>

          <PrimaryButton
            variant="primary"
            size="lg"
            className="w-full group py-6"
          >
            Send Inquiry
            <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </PrimaryButton>
        </form>
      )}
    </div>
  );
}
