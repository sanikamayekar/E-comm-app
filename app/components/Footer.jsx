export default function Footer() {
  return (
    <footer className="bg-[#BCDDFE] text-gray-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - First Row (3 sections) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-12">
          {/* E-Comm Brand Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <img 
                  src="/Images/icon.png" 
                  alt="E-Comm Logo" 
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                E-Comm
              </span>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1950s, when an unknown printer.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-gray-800 text-lg font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Follow Us
            </h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Since the 1950s, when an unknown printer took a gallery of type and scrambled.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/facebook.png" 
                  alt="Facebook" 
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/twitter.png" 
                  alt="Twitter" 
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-gray-800 text-lg font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>E-Comm , 4578</p>
              <p>Marmora Road,</p>
              <p>Glasgow D04 890R</p>
            </div>
          </div>
        </div>

        {/* Second Row (4 sections) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Information Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-gray-800 text-lg font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Information
            </h4>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Service Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-gray-800 text-lg font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Service
            </h4>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* My Account Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-gray-800 text-lg font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              My Account
            </h4>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Our Offers Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-gray-800 text-lg font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Offers
            </h4>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-6 border-t border-gray-300">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © 2016 Ecommerce Internet by www.ibsenibserv.com
          </p>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <img 
              src="/images/western-union.png" 
              alt="Western Union" 
              className="h-6 sm:h-7 opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/images/mastercard.png" 
              alt="MasterCard" 
              className="h-6 sm:h-7 opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/images/paypal.png" 
              alt="PayPal" 
              className="h-6 sm:h-7 opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/images/visa.png" 
              alt="Visa" 
              className="h-6 sm:h-7 opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}