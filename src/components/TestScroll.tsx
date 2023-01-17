import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contactRef, inView] = useInView({
      threshold: 0.5,
      triggerOnce: true
  });

  useEffect(() => {
      if (circleRef.current) {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      window.addEventListener('scroll', handleScroll);
                  } else {
                      window.removeEventListener('scroll', handleScroll);
                      if (circleRef.current) {
                          circleRef.current.style.transform = `scale(1)`;
                      }
                  }
              });
          });
          observer.observe(circleRef.current);
          const circle = circleRef.current;
          return () => {
              observer.unobserve(circle);
              window.removeEventListener('scroll', handleScroll);
              if (circleRef.current) {
                  // eslint-disable-next-line react-hooks/exhaustive-deps
                  circleRef.current.style.transform = `scale(1)`;
              }
          }
      }

      function handleScroll() {
        const scrollPosition = window.pageYOffset;

        if (circleRef.current) {
          const maxHeight = window.innerHeight;
          const circleHeight = circleRef.current.offsetHeight;
          if (circleHeight >= maxHeight) {
            return;
          }
          const scale = Math.pow(scrollPosition * 0.001, 3);
          circleRef.current.style.transform = `scale(${scale})`;
          circleRef.current.style.transition = `transform 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28)`;
        }
      }
  }, [inView]);


  return (
    <section ref={contactRef} className="contactContent">
      <div ref={circleRef} className="circle"></div>
      <div ref={contentRef} className="content">
        <h1>Contact Us</h1>
      </div>
    </section>
  );
}

export default Contact;
