import React from "react";

const Cursor: React.FC = () => {
  const dot = React.useRef<HTMLDivElement>(null);
  const dotOutline = React.useRef<HTMLDivElement>(null);
  const lastMouseEvent = React.useRef<MouseEvent>();

  const onMouseMove = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      e.target.classList.forEach(element => {
        if (element === "cursorHover") {
          dot.current?.classList.add("cursor-dot--link");
          dotOutline.current?.classList.add("cursor-dotOutline--link");
          dotOutline.current?.classList.remove("cursor-dotOutline--Animated");
        } else {
          dot.current?.classList.remove("cursor-dot--link");
          dotOutline.current?.classList.remove("cursor-dotOutline--link");
          dotOutline.current?.classList.add("cursor-dotOutline--Animated");
        }
      });
    }
    if (dot.current && dotOutline.current) {
      if(dotOutline.current.style.position === "fixed") {
        dotOutline.current.style.position = "absolute";
        dotOutline.current.style.left = e.pageX + "px";
        dotOutline.current.style.top = e.pageY + "px";
      }
      dot.current.style.position = "absolute";
      dotOutline.current.style.position = "absolute";
      dot.current.style.left = e.pageX + "px";
      dot.current.style.top = e.pageY + "px";
      setTimeout(() => {
        if (dotOutline.current) {
          dotOutline.current.style.left = e.pageX + "px";
          dotOutline.current.style.top = e.pageY + "px";
          dotOutline.current.style.opacity = "1";
        }
      }, 100);
    }

    lastMouseEvent.current = e;
  };

  const scroll = () => {
    if (dot.current && dotOutline.current) {
      dot.current.style.position = "fixed";
      dotOutline.current.style.position = "fixed";
      dot.current.style.left = lastMouseEvent.current?.clientX + "px";
      dot.current.style.top = lastMouseEvent.current?.clientY + "px";
      dotOutline.current.style.left = lastMouseEvent.current?.clientX + "px";
      dotOutline.current.style.top = lastMouseEvent.current?.clientY + "px";
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.addEventListener("scroll", scroll);
    };
  }, []);


  return (
    <>
      <div className="cursor-dot-outline cursor-dotOutline--Animated" ref={dotOutline}></div>
      <div className="cursor-dot" ref={dot}></div>
    </>
  );
};

export default Cursor;
