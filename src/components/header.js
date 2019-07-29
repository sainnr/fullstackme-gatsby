import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import StyledBackgroundSection from "./bgImage"

const Header = ({ siteTitle, subtitle }) => <header style={{
  marginBottom: `1.45rem`,
}}>
  <StyledBackgroundSection className="">
    <div style={{
      textAlign: `center`,
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
          fontFamily: `Caveat Brush`,
          fontWeight: `normal`,
          fontSize: `1.25em`,
          color: `black`,
          textDecoration: `none`,
        }}>{ siteTitle }</Link>
      </h1>
      <h4 style={{
        fontStyle: `italic`,
        fontWeight: `normal`,
        margin: `.7rem 0 .1rem`,
      }}>{ subtitle }</h4>
    </div>

  </StyledBackgroundSection>
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
