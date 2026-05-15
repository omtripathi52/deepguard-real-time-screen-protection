import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
      <h1 className="text-4xl font-bold text-zinc-50 mb-4">Contact Us</h1>
      <p className="text-zinc-400 mb-6">Whether you need technical support, have deployment questions, or want to report a false positive, we’re here to help. Please include the app version and a brief description of the issue when you contact us.</p>
      <p className="text-zinc-400 mb-8">For urgent security concerns, please mark the subject as <strong>Security:</strong> in your email.</p>
      
      <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 text-zinc-300">
          <Mail className="text-emerald-500 h-5 w-5" />
          <a href="mailto:screensentinel.ai@gmail.com?subject=Support%20Request" className="hover:text-emerald-400 transition-colors text-lg">
            screensentinel.ai@gmail.com
          </a>
        </div>
        
        <div className="w-full h-px bg-zinc-800"></div>
        
        <div className="flex items-center gap-3 text-zinc-400">
          <MapPin className="text-zinc-500 h-5 w-5" />
          <span>Lucknow, Uttar Pradesh, India</span>
        </div>
      </div>
    </div>
  );
}