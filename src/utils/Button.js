import { useRef, forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  const btnRef = useRef(null);

  const handelClick = () => {
    ref && ref.current.blur();
    ref && ref.current.focus();
    !ref && btnRef.current.blur();
    !ref && btnRef.current.focus();
    props.onClick && props.onClick();
  };

  const btnEle = (
    <button
      {...props}
      ref={ref || btnRef}
      onMouseDown={handelClick}
      className={`${props.textButton ? "Button TextButton" : "Button"} ${
        props.className && props.className
      }`}
      // href={false}
    >
      {props.children}
    </button>
  );

  return (
    <>
      {props.href && <a href={props.href}>{btnEle}</a>}

      {!props.href && btnEle}
    </>
  );
});

export default Button;
