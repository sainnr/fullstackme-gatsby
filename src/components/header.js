import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subtitle }) => <header style={{
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}}>
  <div style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}>
    <h1 style={{ margin: 0 }}>
      <Link to="/" style={{
        color: `white`,
        textDecoration: `none`,
      }}>{ siteTitle }</Link>
    </h1>
    <h4 style={{
      color: `white`,
      fontStyle: `italic`,
      fontWeight: `normal`,
      margin: `.7rem 0 .1rem`,
    }}>{ subtitle }</h4>
  </div>
</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default Header
