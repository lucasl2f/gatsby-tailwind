import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { theme } from "../../tailwind.config"

const HeaderLink = ({ title, link }) => (
  <h6 className="mb-0">
    <Link
      to={link}
      style={{
        color: theme.colors.primary,
        textDecoration: `none`,
      }}
    >
      {title}
    </Link>
  </h6>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: theme.colors.primary,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="flex flex-row items-center justify-between"
      style={{
        margin: `0 auto`,
        maxWidth:1440,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: theme.colors.primary,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div className="flex space-x-4 items-center">
        <HeaderLink title="Sobre" link="/" />
        <HeaderLink title="Trabalhos" link="/" />
        <button className="btn font-bold py-2 px-4 rounded text-xs flex flex-row items-center space-x-64 font-sans"
          style={{backgroundColor: theme.colors.primary, color: "white"}}
        >
          Contato
        </button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
