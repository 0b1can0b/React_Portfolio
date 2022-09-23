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

  return (
    <button
      {...props}
      ref={ref || btnRef}
      onMouseDown={handelClick}
      className={`${props.textButton ? "Button TextButton" : "Button"} ${props.className && props.className}`}
    >
      {props.children}
    </button>
  );
});

export default Button;
