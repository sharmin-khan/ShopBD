import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full relative bg-black text-gray-300">
      {/* Background with subtle glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%), #000000",
        }}
      />

      {/* Footer Content */}
      <footer className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10 mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="mb-6 sm:mb-0">
          <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            Shop<span className="text-indigo-400">BD</span>
          </Link>
          <p className="mt-2 text-gray-400 text-sm">
            Your one-stop shop for all your needs. Quality products, great prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="font-semibold text-white mb-3">Quick Links</h6>
           <Link href="/features" className="block hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="block hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="block hover:text-cyan-400 transition-colors">
            My Bookings
          </Link>
          <Link href="/pricing" className="block hover:text-cyan-400 transition-colors">
          Blogs
          </Link>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="font-semibold text-white mb-3">Social</h6>
          <Link href="https://twitter.com" target="_blank" className="block hover:text-cyan-400 transition-colors">
            Twitter
          </Link>
          <Link href="https://github.com" target="_blank" className="block hover:text-cyan-400 transition-colors">
            GitHub
          </Link>
          <Link href="https://facebook.com" target="_blank" className="block hover:text-cyan-400 transition-colors">
            Facebook
          </Link>
          <Link href="https://instagram.com" target="_blank" className="block hover:text-cyan-400 transition-colors">
            Instagram
          </Link>
        </div>
      </footer>

      {/* Bottom Note */}
      <div className="relative z-10 text-center text-sm text-gray-500 pb-4 pt-4 border-t border-gray-800">
        © {new Date().getFullYear()} ShopBD. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
