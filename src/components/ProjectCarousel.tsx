import { useEffect, useState, useRef } from "react";
import styles from "./Projects.module.css";

type Props = {
  children: React.ReactNode[];
};

export default function ProjectCarousel({ children }: Props) {
  const [page, setPage] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const cardsPerView = 2;
  const totalPages = Math.ceil(children.length / cardsPerView);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000); // slow & calm

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages]);

  const goToPage = (p: number) => {
    setPage(p);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() =>
        intervalRef.current && clearInterval(intervalRef.current)
      }
    >
      <div
        className={styles.track}
        style={{
          transform: `translateX(-${page * 100}%)`,
        }}
      >
        {children.map((child, i) => (
          <div key={i} className={styles.slide}>
            {child}
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${
              i === page ? styles.active : ""
            }`}
            onClick={() => goToPage(i)}
            aria-label={`Go to projects ${i * 2 + 1} and ${i * 2 + 2}`}
          />
        ))}
      </div>
    </div>
  );
}
