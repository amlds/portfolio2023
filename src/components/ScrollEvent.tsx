import React, { useState, useEffect, useRef } from 'react';

const ScrollEvent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [size, setSize] = useState(100);
  const [ElementTop] = useState(100);
  const element = useRef<HTMLDivElement>(null);

  let transformScale = `scale(${size})`;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (element.current) {
        const top = element.current.getBoundingClientRect().top;
        if (top <= ElementTop) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (sticky) {
      setOpacity(Math.min(scrollY / 2000 , 1));
      // set size and multiplication 1 / 2²
      console.log(scrollY)
      console.log(ElementTop)
      setSize(Math.exp(-0.5 * Math.pow((scrollY - ElementTop) / 10, 3)));
      console.log(size)
    } else {
      setOpacity(0);
    }
  }, [sticky, scrollY]);

  return (
    <div className='test'>
      <div className='place'>
      </div>
      <div className="rounded" ref={element}
        style={{  position: sticky ? 'sticky' : 'static',
                  top: sticky ? ElementTop : '',
                  opacity, transform: transformScale}}>
        {/* votre contenu ici */}
      </div>
    </div>
  );
}

export default ScrollEvent;
