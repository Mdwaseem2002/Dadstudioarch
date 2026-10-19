"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Compass, Clock, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSample() {
  return (
    <section className="relative bg-[#0d0f0e] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden text-white">
      
      {/* Right Architectural Background Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full z-0">
        <img 
          src="/images/services/service-exterior.jpg" 
          alt="DADSTUDIOARCH Studio Consultation" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f0e] via-[#0d0f0e]/85 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Studio Introduction */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#A9855B]"></span>
                <p className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">
                  Discuss Your Space
                </p>
              </div>

              <h1 className="font-instrument text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 leading-[1.1]">
                Let's Explore Your <br />
                <span className="italic text-[#A9855B]">Architectural Vision.</span>
              </h1>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
                Whether you are planning a modern private villa, residential project, commercial atelier, or UPVC window upgrade, DADSTUDIOARCH provides disciplined design and build coordination.
              </p>
            </motion.div>

            {/* Engagement Options */}
            <div className="space-y-4">
              {[
                { 
                  icon: MessageSquare, 
                  title: "Inquiry Submission", 
                  desc: "Submit your initial site parameters and scope requirements via our project form." 
                },
                { 
                  icon: Calendar, 
                  title: "Design Consultation", 
                  desc: "Schedule a dedicated concept review with our lead architects and engineers." 
                },
                { 
                  icon: Compass, 
                  title: "Turnkey Scope Planning", 
                  desc: "We coordinate working drawings, BOQ, structural feasibility, and material schedules." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#A9855B]/15 border border-[#A9855B]/30 flex items-center justify-center shrink-0 text-[#A9855B]">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-general">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Note */}
            <div className="mt-8 p-4 rounded-lg bg-[#141615] border border-white/10 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#A9855B] shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Consultation Availability</p>
                <p className="text-[11px] text-gray-400">Scheduled by appointment for focused project attention</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
