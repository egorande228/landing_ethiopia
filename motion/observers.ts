export const observeOnce = (element: Element, onEnter: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        onEnter();
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  observer.observe(element);

  return () => observer.disconnect();
};
