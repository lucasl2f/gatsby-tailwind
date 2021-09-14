import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { theme } from "../../tailwind.config"

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
        <h6 style={{marginBottom:0}}>
          <Link
            to="/"
            style={{
              color: theme.colors.primary,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </h6>
        <h6 style={{marginBottom:0}}>
          <Link
            to="/"
            style={{
              color: theme.colors.primary,
              textDecoration: `none`,
            }}
          >
            Events 
          </Link>
        </h6>
        <h6 style={{marginBottom:0}}>
          <Link
            to="/"
            style={{
              color: theme.colors.primary,
              textDecoration: `none`,
            }}
          >
            About 
          </Link>
        </h6>
        <h6 style={{marginBottom:0}}>
          <Link
            to="/"
            style={{
              color: theme.colors.primary,
              textDecoration: `none`,
            }}
          >
            Blog 
          </Link>
        </h6>
        <h6 style={{marginBottom:0}}>
          <Link
            to="/"
            style={{
              color: theme.colors.primary,
              textDecoration: `none`,
            }}
          >
            Contact
          </Link>
        </h6>
        <button className="btn font-bold py-2 px-4 rounded text-xs flex flex-row items-center space-x-64"
          style={{backgroundColor: theme.colors.primary, color: "white"}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>
          (16) 91234-5678
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
