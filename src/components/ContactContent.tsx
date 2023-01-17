import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
    // Utilisez useRef pour créer une référence à l'élément de cercle
    const circleRef = useRef<HTMLDivElement>(null);
    const [contactRef, inView] = useInView({
        /* options */
        threshold: 0.5,
        triggerOnce: true
    });
    const [size, setSize] = useState(0);
    let transform = `scale(${size})`;

    useEffect(() => {
        if (inView) {
            // Ajoutez un écouteur d'événements de défilement
            window.addEventListener('scroll', handleScroll);
            // Retournez une fonction de nettoyage pour retirer l'écouteur d'événements de défilement
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

        function handleScroll() {
            // Récupérez la position de défilement actuelle
            const scrollPosition = window.pageYOffset;

            // Modifiez la taille de l'élément de cercle en fonction de la position de défilement
            setSize(scrollPosition * 0.01);
        }
    }, [inView]);

    return (
        <section className='contactContent'>
            <div ref={contactRef} className="section-contact">
                <div ref={circleRef} className="circle"
                    style={{ transform: transform }}>
                </div>
                <div className="content">
                    <h1>Contact Us</h1>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
