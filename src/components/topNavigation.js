import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Fa,
  Input,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar className="flexible-navbar" light expand="md" scrolling>
        {/* <NavbarBrand href="/">
          <strong>AGENT OPS</strong>
        </NavbarBrand> */}
        <NavbarToggler onClick={this.onClick} />
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem>
              <FormInline className="md-form m-0 pl-2">
                <Fa icon="search grey-text" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </FormInline>
            </NavItem>
            {/* <NavItem active>
              <NavLink to="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="https://mdbootstrap.com/react/5-min-quick-start/"
                target="_blank"
              >
                About MDB
              </a>
            </NavItem>
            <NavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="https://mdbootstrap.com/react/react-bootstrap-getting-started/"
                target="_blank"
              >
                Free download
              </a>
            </NavItem>
            <NavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="https://mdbootstrap.com/bootstrap-tutorial/"
                target="_blank"
              >
                Free tutorials
              </a>
            </NavItem> */}
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Fa icon="life-buoy grey-text" />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Fa icon="comments grey-text" />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Fa icon="bell grey-text" />
              </a>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  Joe Doe
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/data">Data</DropdownItem>
                  <DropdownItem href="/home/dashboard">Dashboard</DropdownItem>
                  <DropdownItem href="/product">Sign Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <img
                className="avatar"
                alt="avatar"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
              />
            </NavItem>
            {/* <NavItem>
              <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design"
                target="_blank"
              >
                <Fa icon="github" className="mr-2" />
                MDB GitHub
              </a>
            </NavItem>
            <NavItem>
              <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                href="https://mdbootstrap.com/product/react-bootstrap-pro/"
                target="_blank"
              >
                <Fa icon="github" className="mr-2" />
                Go Pro
              </a>
            </NavItem> */}
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNavigation;
