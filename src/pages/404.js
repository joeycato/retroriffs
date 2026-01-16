import React from 'react'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="content-box clearfix">
          <h1>That page doesn&#39;t exist.</h1>
        </div>
      </DefaultLayout>
    )
  }
}

export default NotFoundPage

export const Head = () => <SEO title="404: Not Found" />
