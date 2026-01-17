import { Link } from 'gatsby'
import React from 'react'

import Logo from './joey160.gif'
import BlueSky from './bluesky.svg'
import BmcLogo from './bmc-logo.svg'
import LinkedInIcon from './linkedin.svg'
import EnvelopeIcon from './envelope.svg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Logo} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">{siteMetadata.author}</div>
          <p>{siteMetadata.description}</p>
        </div>
      </header>
      <footer>
        <section className="contact">
          <h3 className="contact-title">Contact me</h3>
          
          <ul>
            <li>
              <a
                href="https://bsky.app/profile/joeycato.bsky.social"
                target="_blank"
              >
                <img src={BlueSky} width={32} height={32} alt="BlueSky" />
              </a>
            </li>
            <li>
              <a
                href="https://www.buymeacoffee.com/myretrotvs"
                target="_blank"
                title="Buy me a coffee"
              >
                <img src={BmcLogo} width={32} height={32} alt="Buy Me a Coffee" />
              </a>
            </li>
            {siteMetadata.social.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                  target="_blank"
                >
                  <img src={LinkedInIcon} width={32} height={32} alt="LinkedIn" />
                </a>
              </li>
            )}
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:${siteMetadata.social.email}`} target="_blank">
                  <img src={EnvelopeIcon} width={32} height={32} alt="Email" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {siteMetadata.author}
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar
