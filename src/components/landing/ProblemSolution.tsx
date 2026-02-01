import { X, Check } from "lucide-react";

const problems = [
  "Deepfakes are everywhere",
  "You can't tell what's real anymore",
  "Traditional detectors require uploads and waiting",
];

const solutions = [
  "DeepGuard watches your screen automatically",
  "Instant visual feedback as you scroll",
  "No friction, no interruption",
];

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">DeepGuard</span>?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Problem side */}
          <div className="glass-card rounded-2xl p-8 border-danger/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-danger/20 flex items-center justify-center">
                <X className="w-5 h-5 text-danger" />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Problem</h3>
            </div>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-danger" />
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solution side */}
          <div className="glass-card rounded-2xl p-8 border-safe/20 glow-safe">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-safe/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-safe" />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Solution</h3>
            </div>
            
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-safe/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-safe" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
