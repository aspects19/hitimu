import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-base-300/40 flex w-full flex-col">
      <div className="footer sm:footer-horizontal text-base-content p-10">
        <nav>
          <h6 className="footer-title">Quick navigation</h6>
          <a href="/" className="link link-hover hover:text-blue-400">
            Home
          </a>
          <a href="/login" className="link link-hover hover:text-blue-400">
            Sign In
          </a>
          <a href="/about" className="link link-hover hover:text-blue-400">
            Contact
          </a>
          <a href="/upload" className="link link-hover hover:text-blue-400">
            Upload document
          </a>
          <a href="/about" className="link link-hover hover:text-blue-400">
            About us
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://x.com/americ_inc_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaXTwitter size={25} />
            </a>
            <a
              href="https://github.com/aspects19/hitimu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="mailto:jeffamenya388@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <MdOutlineMarkEmailUnread size={25} />
            </a>
          </div>
        </nav>
      </div>
      <div className="border-t border-gray-800 pt-5 pb-8 text-center">
        <p className="text-sm text-gray-400">
          © <span id="current-year">2025</span> Hitimu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
