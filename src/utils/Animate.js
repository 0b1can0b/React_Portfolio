import { useState, useEffect, cloneElement } from "react";

const Animate = (props) => {
  const {
    children,
    on,
    duration,
    from,
    to,
    timingFunction,
    onEnter,
    onExit
  } = props;
  const [open, setOpen] = useState(false);
  const [styleFrom, setStyleFrom] = useState(from);

  const childEle = cloneElement(children, {
    style: {
      ...children.props.style,
      ...styleFrom,
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: timingFunction ?? "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  });

  const [entered, setEntered] = useState(false);
  const [exited, setExited] = useState(false);

  const [waited, setWaited] = useState(false);

  useEffect(() => {
    if (on) {
      setExited(false);
      setOpen(true);
      setTimeout(() => {
        onEnter && onEnter();
        setEntered(true);
      // }, 0);
      //   ^^^ this 0 here doesnt work on vercel :(
      }, 25);
    } else {
      setStyleFrom(from);
      setEntered(false);
      setTimeout(() => {
        setExited(true);
        onExit && onExit();
      }, duration);
    }
    setTimeout(() => {
      setWaited(true);
    }, duration);
    return () => {};
  }, [on]);

  useEffect(() => {
    if (waited) {
      if (on && !open) {
        setStyleFrom(from);
        setOpen(true);
        setTimeout(() => {
          setStyleFrom(to);
        }, 0);
      }
      setWaited(false);
    }
  }, [waited]);

  useEffect(() => {
    entered && setStyleFrom(to);
    return () => {};
  }, [entered]);
  useEffect(() => {
    exited && setOpen(false);
    return () => {};
  }, [exited]);

  return open && childEle;
};

export default Animate;
