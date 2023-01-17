import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [contactRef, inView] = useInView({
      /* options */
      threshold: 0.5,
      triggerOnce: true
  });

  useEffect(() => {
      if (circleRef.current) {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      // Ajoutez un écouteur d'événements de défilement
                      window.addEventListener('scroll', handleScroll);
                  } else {
                      // Retournez une fonction de nettoyage pour retirer l'écouteur d'événements de défilement
                      window.removeEventListener('scroll', handleScroll);
                      if (circleRef.current) {
                          circleRef.current.style.transform = `scale(1)`;
                      }
                  }
              });
          });
          observer.observe(circleRef.current);

          // Copiez la référence dans une variable locale
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
          // Récupérez la position de défilement actuelle
          const scrollPosition = window.pageYOffset;
          // Modifiez la taille de l'élément de cercle en fonction de la position de défilement
          if (circleRef.current) {
            circleRef.current.style.transform = `scale(${scrollPosition * 0.45})`;
            circleRef.current.style.transition = `transform 0.5s ease-out`;
          }
      }
  }, [inView]);


  return (
    <section ref={contactRef} className="contactContent">
      <div ref={circleRef} className="circle"></div>
      <div className="content">
        <h1>Contact Us</h1>
      </div>
    </section>
  );
}

export default Contact;
