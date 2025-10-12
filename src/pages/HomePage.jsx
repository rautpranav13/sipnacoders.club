import LiquidEther from '../blocks/Backgrounds/LiquidEther/LiquidEther';

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-gray-100">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={15}
          cursorSize={70}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.0}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-12 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-white">
          Welcome to Sipna Coders Club
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Empowering developers, fostering creativity, and organizing tech events at Sipna College of Engineering & Technology.
        </p>

        <a
          href="/dashboard"
          className="bg-primary hover:bg-secondary px-8 py-3 rounded-full text-white font-semibold transition-all"
        >
          Go to Dashboard →
        </a>
      </div>

      {/* Decorative Bottom Section */}
      <div className="absolute bottom-4 text-gray-400 text-sm z-10">
        © {new Date().getFullYear()} Sipna Coders Club
      </div>
    </div>
  );
}
