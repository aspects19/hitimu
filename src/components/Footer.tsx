import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineMarkEmailUnread } from "react-icons/md"

function Footer() {
  return (
    <footer className=" mt-3 footer sm:footer-horizontal bg-base-300 text-base-content p-10">
          <nav>
            <h6 className="footer-title">Quick navigation</h6>
            <a href="/about" className="link link-hover hover:text-blue-400">About us</a>
            <a href="/about" className="link link-hover hover:text-blue-400">Contact</a>
            <a href="/upload" className="link link-hover hover:text-blue-400">Upload document</a>
          </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/americ_inc_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaXTwitter size={25}/>
            </a>
            <a href="https://github.com/aspects19/hitimu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size={25}/>
            </a>
            <a href="mailto:jeffamenya388@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <MdOutlineMarkEmailUnread size={25}/>
            </a>
          </div>
        </nav>
      </footer>
  )
}

export default Footer