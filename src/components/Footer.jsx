import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-6">
      <div className="container mx-auto text-center text-white">
          <p>Copyright &#169; 2025 Leul Makonnen</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/leul-makonnen-715508260" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/leul8" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
