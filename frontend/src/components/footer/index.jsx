const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-sm text-gray-300">
            FarmFresh is your one-stop destination for quality products and
            unbeatable prices.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-sm text-gray-300">Email: support@FarmFresh.com</p>
          <p className="text-sm text-gray-300">Phone: +1 (800) 123-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} FarmFresh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
