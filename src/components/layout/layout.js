import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Info from "../info/info";

const Layout = ({ children }) => {

  return (
    <div className="page">
            <Info />
        <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
