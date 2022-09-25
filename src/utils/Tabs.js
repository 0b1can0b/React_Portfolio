import { useState } from "react";
import Animate from "./Animate.js";

const Tabs = ({ children }) => {
  const [open, setOpen] = useState(1);

  return (
    <div className="Tabs">
      <div className="tabs_head">
        {children.map((e, i) => {
          return (
            <div
              key={i}
              className={open === i ? "tab_head active" : "tab_head"}
              onClick={() => setOpen(i)}
            >
              {e.props.titleIcon}
              {e.props.title}
            </div>
          );
        })}
      </div>
      <div className="tabs_body">
        {children.map((e, i) => {
          return (
            <Animate
              key={i}
              on={open === i}
              duration={400}
              from={{ opacity: 0, transform: "scale(0.95)" }}
              to={{ opacity: 1, transform: "scale(1)" }}
            >
              <Tab>{e.props.children}</Tab>
            </Animate>
          );
        })}
      </div>
    </div>
  );
};

const Tab = (props) => {
  return <div {...props} className="Tab">{props.children}</div>;
};

export { Tabs, Tab };
