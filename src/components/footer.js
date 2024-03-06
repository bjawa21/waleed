/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
       Built on Gatsby JS and Hosted on Netlify
        
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">Stackrole.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
