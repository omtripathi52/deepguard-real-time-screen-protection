import { ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl text-center">
      <ShieldCheck className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">About ScreenSentinel</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-8 text-left">
        ScreenSentinel was founded to address a critical vulnerability in modern digital communication: the rapid rise of real-time synthetic media and deepfakes. 
        <br/><br/>
        As AI generation tools become widely accessible, traditional cloud-based security tools are inherently flawed—they require users to upload their private video calls to remote servers for analysis. We believe security should never compromise privacy.
        <br/><br/>
        Based in Lucknow, India, our mission is to build enterprise-grade, localized AI defenses that run entirely on the endpoint. By shifting inference to the user's hardware, we provide journalists, creators, and professionals with an air-gapped layer of visual verification.
      </p>
    </div>
  );
}