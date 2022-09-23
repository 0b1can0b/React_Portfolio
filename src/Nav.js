import { useState, useEffect } from "react";
import Animate from "./Animate.js";

const NavFunction = ({ children }) => {
  return <div className="Nav">{children}</div>;
};

const NavItemFunction = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  // console.log(props.dropdown);

  return (
    <div
      {...props}
      className={
        props.active === props.children
          ? props.dropdown
            ? dropdownActive
              ? "NavItem dropdown active dropdown_hover"
              : "NavItem dropdown active"
            : dropdownActive
            ? "NavItem active dropdown_hover"
            : "NavItem active"
          : props.dropdown
          ? dropdownActive
            ? "NavItem dropdown dropdown_hover"
            : "NavItem dropdown"
          : "NavItem"
      }
      active={false}
      dropdown={false}
      onMouseEnter={() => props.dropdown && setDropdownActive(true)}
      onMouseLeave={() => props.dropdown && setDropdownActive(false)}
    >
      <a href={`#${props.children.split(' ').join('_')}`}>
        {props.children}
        {props.dropdown && (
          <div className="dropdown_icon">
            <svg viewBox="0 0 12 12">
              <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"></path>
            </svg>
          </div>
        )}
      </a>
      {props.dropdown && (
        <Animate
          on={dropdownActive}
          duration={200}
          from={{ transform: "scale(1.1) translateY(1rem)", opacity: 0 }}
          to={{ transform: "scale(1) translateY(0)", opacity: 1 }}
        >
          <div className="nav_dropdown">
            <div className="nav_dropdown_inner">
              {props.dropdown.props.children.map((e, i) => {
                return (
                  <div key={i} className="nav_dropdown_item">
                    <a href={`#${e.props.children.split(' ').join('_')}`}>{e.props.children}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </Animate>
      )}
    </div>
  );
};

const Nav = ({ children }) => {
  const [active, setActive] = useState(children[0].props.children);

  useEffect(() => {
    const navInd = document.querySelector(".nav_indicator");
    const navFirstItem = document.querySelectorAll(".NavItem a")[0];
    navInd.style.left = `${
      navFirstItem.offsetLeft + navFirstItem.offsetWidth / 2
    }px`;
    navInd.style.width = `${navFirstItem.offsetWidth * 1}px`;
  }, []);

  const handelClick = (e) => {
    setActive(e);

    const navInd = document.querySelector(".nav_indicator");
    document.querySelectorAll(".NavItem a").forEach((i) => {
      if (i.innerText === e) {
        navInd.style.left = `${i.offsetLeft + i.offsetWidth / 2}px`;
        navInd.style.width = `${i.offsetWidth * 1}px`;
      }
    });
  };

  // console.log(children);

  return (
    <NavFunction>
      {children.map((e, i) => {
        return (
          <NavItemFunction
            key={i}
            active={active}
            onClick={() => handelClick(e.props.children)}
            dropdown={e.props.dropdown}
          >
            {e.props.children}
          </NavItemFunction>
        );
      })}
      <div className="nav_indicator" />
    </NavFunction>
  );
};

const NavItem = () => {};

const Dropdown = () => {};

export { Nav, NavItem, Dropdown };
