import { Heart } from 'lucide-react';

export default function RoseDayPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/rose-day-bg.dim_1920x1080.png)' }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-rose-pink/40 via-soft-pink/30 to-cream-pink/40" />
      
      {/* Floating hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[10%] left-[15%] w-6 h-6 text-rose-accent/20 animate-float-slow" />
        <Heart className="absolute top-[25%] right-[20%] w-8 h-8 text-rose-accent/15 animate-float-medium" />
        <Heart className="absolute bottom-[30%] left-[10%] w-5 h-5 text-rose-accent/25 animate-float-fast" />
        <Heart className="absolute top-[60%] right-[15%] w-7 h-7 text-rose-accent/20 animate-float-slow" />
        <Heart className="absolute bottom-[15%] right-[30%] w-6 h-6 text-rose-accent/15 animate-float-medium" />
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full mx-auto">
          {/* Header section */}
          <header className="text-center mb-8 md:mb-12 animate-fade-in">
            <div className="inline-block mb-6">
              <p className="text-xl md:text-2xl font-script text-rose-text mb-4 animate-pulse-soft whitespace-pre-line max-w-4xl mx-auto px-4">
                Happy Rose Day, my beautiful Hetuuuuuu 🌹{'\n'}If love had a favorite flower, it'd definitely be you—sweet, a little mischievous, and impossible not to smile around. Thank you for caring for me the way you do, even when I'm being me. I'm lucky to have you, today and always ❤️✨
              </p>
              <div className="flex items-center gap-3 justify-center">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-accent fill-rose-accent animate-pulse-soft" />
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-rose-deep tracking-tight">
                  ROSE DAY
                </h1>
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-accent fill-rose-accent animate-pulse-soft" />
              </div>
            </div>
            <p className="text-2xl md:text-4xl font-script text-rose-text mb-2">
              7th February
            </p>
            <p className="text-lg md:text-xl text-rose-text font-light max-w-2xl mx-auto">
              The first day of Valentine's week, celebrating love with the timeless beauty of roses
            </p>
          </header>

          {/* Hero section with chibi illustration */}
          <section className="flex flex-col items-center justify-center mb-12 animate-fade-in-up">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-rose-accent/20 blur-3xl rounded-full scale-75" />
              
              {/* Chibi boy with roses and Dairy Milk - full color with transparent background */}
              <img
                src="/assets/generated/chibi-boy-roses-dairymilk-transparent.dim_1200x1200.png"
                alt="Chibi boy holding a bunch of roses in one hand and a Dairy Milk chocolate bar in the other"
                className="relative z-10 w-full h-auto drop-shadow-2xl animate-float-gentle"
              />
            </div>
          </section>

          {/* Message section */}
          <section className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-delayed">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft border border-rose-accent/20">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-rose-deep mb-4">
                A Rose for You
              </h2>
              <p className="text-lg md:text-xl text-rose-text leading-relaxed mb-6">
                On this special day, a single rose speaks volumes—expressing love, admiration, and the promise of beautiful moments together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-rose-medium">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-rose-accent text-rose-accent" />
                  <span className="font-medium">Love</span>
                </div>
                <span className="text-rose-accent/40">•</span>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-rose-accent text-rose-accent" />
                  <span className="font-medium">Romance</span>
                </div>
                <span className="text-rose-accent/40">•</span>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-rose-accent text-rose-accent" />
                  <span className="font-medium">Forever</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-rose-medium text-sm">
          © 2026. Built with <Heart className="inline w-4 h-4 fill-rose-accent text-rose-accent mx-1" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rose-medium hover:text-rose-deep transition-colors underline decoration-rose-accent/30 hover:decoration-rose-accent"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
