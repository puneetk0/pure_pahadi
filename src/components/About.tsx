
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Trupahadi is more than just a brand; it is a commitment to purity, sustainability, and wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3" 
                alt="Pristine hills of Uttarakhand" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-8 border-trupahadi-earth-light rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">
              Rooted in the pristine hills of Uttarakhand
            </h3>
            <p className="mb-6 text-gray-700">
              Trupahadi is more than just a brand; it is a commitment to purity, sustainability, and wellness. Rooted in the pristine hills of Uttarakhand, we bring you nature's finest produce, cultivated through traditional, chemical-free farming methods. Our mission is to reconnect people with real, wholesome food that nurtures both body and soul.
            </p>
            <p className="mb-8 text-gray-700">
              With a deep respect for ancestral wisdom, we partner with local farmers to uphold ethical sourcing, fair trade practices, and uncompromising quality. Every Trupahadi product be it our nutrient-rich wood-pressed mustard oil or our wholesome millet balls is crafted to preserve the integrity of natural ingredients while delivering authentic flavors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">100% Organic</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">FSSAI Approved</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">DPIIT Certified</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Chemical-Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-700">
              Our philosophy is simple: food should be pure, ethical, and nourishing. At Trupahadi, we bring farm-fresh goodness straight to your table, ensuring every bite is free from chemicals, preservatives, and artificial additives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
