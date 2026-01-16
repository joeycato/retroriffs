import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Sidebar from '.././components/sidebar'
import '../styles/main.scss'
import '../styles/fonts/font-awesome/css/font-awesome.min.css'

const DefaultLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          social {
            facebook
            linkedin
            github
            email
          }
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Sidebar siteMetadata={data.site.siteMetadata} />
      {children}
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
