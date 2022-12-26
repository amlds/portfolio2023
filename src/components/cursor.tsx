import React from "react";

/*
export const CursorContext = React.createContext({
  x: 0,
  y: 0,

  setX: (x: number) => {},
  setY: (y: number) => {},
});

export const CursorProvider: React.FC = ({ children }) => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  return (
    <CursorContext.Provider value={{ x, y, setX, setY }}>
      {children}
    </CursorContext.Provider>
  );
};
 */


export default function Cursor() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      if(event.clientX > window.innerWidth){
        setX(window.innerWidth - 40);
      } else {
        setX(event.clientX);
      }
      if(event.clientY > window.innerHeight) {
        setY(window.innerHeight - 40);
      } else {
        setY(event.clientY);
      }
    });
  }, []);

  return (
    <div
      id="cursor"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}
