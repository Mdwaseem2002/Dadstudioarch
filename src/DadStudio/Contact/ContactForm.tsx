"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";
import { BRAND } from "@/config/brand";

const serviceOptions = [
  "Architecture & Planning",
  "Construction & Build",
  "Interior Design",
  "Exterior & Facade Design",
  "UPVC Windows & Doors",
  "Complete Design-to-Build",
];

const projectTypeOptions = [
  "Modern Villa",
  "Residential Residence",
  "Commercial Atelier / Office",
  "Facade Renovation",
  "Interior Space Transformation",
  "UPVC Glazing Installation",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceRequired: "",
    projectType: "",
    location: "",
    details: "",
  });

  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg("Please complete your name, phone number, and email.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#141615] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative z-20"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-[1px] bg-[#A9855B]"></span>
        <p className="text-[#A9855B] font-bold tracking-widest text-[11px] uppercase font-general">
          Project Inquiry Form
        </p>
      </div>
      
      <h3 className="font-instrument text-2xl sm:text-3xl text-white font-normal mb-6">
        Tell Us About Your Project
      </h3>

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-white/5 border border-[#A9855B]/40 text-center space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-[#A9855B]/20 text-[#A9855B] mx-auto flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
          <h4 className="font-general font-bold text-lg text-white">Inquiry Details Validated</h4>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
            Thank you, <span className="text-[#A9855B] font-medium">{formData.name}</span>. Your project parameters for <span className="text-white font-medium">{formData.serviceRequired || "Design & Build"}</span> have been recorded in this session.
          </p>
          <p className="text-[11px] text-gray-400 italic">
            * Note: Direct backend submission is configured when official client CRM endpoints are connected.
          </p>
          <button 
            type="button" 
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#A9855B] underline hover:text-white pt-2 block mx-auto"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/30 border border-red-900/50 p-3 rounded-lg">
              <AlertCircle size={15} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Your Name *</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name" 
                className="w-full bg-[#1b1e1d] border border-white/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#A9855B] focus:ring-1 focus:ring-[#A9855B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone Number *</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 / Country Code" 
                className="w-full bg-[#1b1e1d] border border-white/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#A9855B] focus:ring-1 focus:ring-[#A9855B] outline-none transition-all"
              />
            </div>
          </div>

          {/* Email & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Email Address *</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com" 
                className="w-full bg-[#1b1e1d] border border-white/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#A9855B] focus:ring-1 focus:ring-[#A9855B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Project Location</label>
              <input 
                type="text" 
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City / Region" 
                className="w-full bg-[#1b1e1d] border border-white/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#A9855B] focus:ring-1 focus:ring-[#A9855B] outline-none transition-all"
              />
            </div>
          </div>

          {/* Service Required Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Service Required</label>
              <div 
                onClick={() => { setServiceDropdownOpen(!serviceDropdownOpen); setTypeDropdownOpen(false); }}
                className={`w-full bg-[#1b1e1d] border rounded-lg px-4 py-3 text-xs sm:text-sm transition-all outline-none flex items-center justify-between cursor-pointer select-none ${
                  serviceDropdownOpen ? "border-[#A9855B]" : "border-white/10 hover:border-white/20"
                } ${formData.serviceRequired ? "text-white" : "text-gray-500"}`}
              >
                <span>{formData.serviceRequired || "Select Service"}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`} />
              </div>

              <AnimatePresence>
                {serviceDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute top-full left-0 w-full mt-1.5 bg-[#1b1e1d] border border-white/20 rounded-lg shadow-2xl z-50 overflow-hidden"
                  >
                    {serviceOptions.map((opt) => (
                      <div 
                        key={opt}
                        onClick={() => { setFormData({ ...formData, serviceRequired: opt }); setServiceDropdownOpen(false); }}
                        className="px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-[#A9855B]/20 cursor-pointer transition-colors"
                      >
                        {opt}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Project Type Dropdown */}
            <div className="relative">
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Project Type</label>
              <div 
                onClick={() => { setTypeDropdownOpen(!typeDropdownOpen); setServiceDropdownOpen(false); }}
                className={`w-full bg-[#1b1e1d] border rounded-lg px-4 py-3 text-xs sm:text-sm transition-all outline-none flex items-center justify-between cursor-pointer select-none ${
                  typeDropdownOpen ? "border-[#A9855B]" : "border-white/10 hover:border-white/20"
                } ${formData.projectType ? "text-white" : "text-gray-500"}`}
              >
                <span>{formData.projectType || "Select Project Type"}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${typeDropdownOpen ? "rotate-180" : ""}`} />
              </div>

              <AnimatePresence>
                {typeDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute top-full left-0 w-full mt-1.5 bg-[#1b1e1d] border border-white/20 rounded-lg shadow-2xl z-50 overflow-hidden"
                  >
                    {projectTypeOptions.map((opt) => (
                      <div 
                        key={opt}
                        onClick={() => { setFormData({ ...formData, projectType: opt }); setTypeDropdownOpen(false); }}
                        className="px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-[#A9855B]/20 cursor-pointer transition-colors"
                      >
                        {opt}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Project Details &amp; Scope</label>
            <textarea 
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Tell us about the site area, intended spaces, architectural preferences, or specific timeline goals..." 
              className="w-full bg-[#1b1e1d] border border-white/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#A9855B] focus:ring-1 focus:ring-[#A9855B] outline-none transition-all resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#A9855B] hover:bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Submit Inquiry For Review <ArrowRight size={15} />
          </button>
        </form>
      )}
    </motion.div>
  );
}
