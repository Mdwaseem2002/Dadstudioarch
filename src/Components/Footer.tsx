"use client";

import { Building2, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-14 md:pt-20 pb-8 md:pb-10 border-t border-white/10 text-white">
      <div className="w-full px-5 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-white">
              <img 
                src="/brand/dadstudioarch-logo.svg" 
                alt="DADSTUDIOARCH" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
              {BRAND.shortDescription}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#A9855B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9855B] animate-pulse"></span>
              <span>Inquiries &amp; Consultations Open</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 tracking-wider text-xs md:text-sm uppercase font-general">Navigation</h4>
            <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#A9855B] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#A9855B] transition-colors">About Studio</Link></li>
              <li><Link href="/services" className="hover:text-[#A9855B] transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#A9855B] transition-colors">Project Showcase</Link></li>
              <li><Link href="/contact" className="hover:text-[#A9855B] transition-colors">Discuss Your Project</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 tracking-wider text-xs md:text-sm uppercase font-general">Our Services</h4>
            <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm text-gray-400">
              {BRAND.services.map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="hover:text-[#A9855B] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 tracking-wider text-xs md:text-sm uppercase font-general">Project Inquiries</h4>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
              Schedule an architectural consultation or structural scope evaluation with our team.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 border border-[#A9855B] text-[#A9855B] hover:bg-[#A9855B] hover:text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300"
            >
              Start Consultation <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[11px] md:text-xs text-gray-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} DADSTUDIOARCH. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
