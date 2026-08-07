import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Grainient from './Grainient';
import Footer from './Footer';

export default function PageLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-black min-h-screen text-primary relative flex flex-col">
      {!isHome && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#535f47"
            color2="#080418"
            color3="#ffffff"
            timeSpeed={0.9}
            colorBalance={0.0}
            warpStrength={0.9}
            warpFrequency={5.0}
            warpSpeed={2.0}
            warpAmplitude={50.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={500.0}
            noiseScale={2.0}
            grainAmount={0.1}
            grainScale={2.0}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={0.9}
          />
        </div>
      )}
      <Navbar />
      {/* Outlet is where the nested routes will render */}
      <div className="relative z-10 flex flex-col flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
