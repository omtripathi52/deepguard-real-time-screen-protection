import { ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl text-center">
      <ShieldCheck className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">About ScreenSentinel</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-8 text-left">
        ScreenSentinel helps you spot manipulated video in real time — right on your computer. It watches the pixels on your screen and alerts you when something looks suspicious, without uploading anything off your device.
        <br/><br/>
        Our mission is to make powerful, privacy-first deepfake detection accessible to journalists, creators, and everyday users. By running detection locally, ScreenSentinel keeps your data private while giving you fast, useful alerts.
        <br/><br/>
        Made in Lucknow, India — free to download and easy to use.
      </p>
    </div>
  );
}