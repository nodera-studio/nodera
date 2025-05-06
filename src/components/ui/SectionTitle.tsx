import React, { useRef, useEffect } from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Ensure we unobserve only if the target is still valid
            if (entry.target.parentElement) {
                observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentTitleRef = sectionTitleRef.current;
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        // Check if still observing before trying to unobserve
        // This can prevent errors if the component is quickly unmounted
        // and currentTitleRef becomes null or is no longer observed.
        // A more robust check might involve observer.takeRecords().length > 0
        // but for simplicity, checking currentTitleRef should suffice here.
        try {
            observer.unobserve(currentTitleRef);
        } catch (e) {
            // Silently catch if unobserve fails (e.g. target not observed)
        }
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const words = title.split(' ');
  const lastWord = words.pop(); // Removes and returns the last word
  const titlePrefix = words.join(' '); // Joins the remaining words

  return (
		<div className="bg-[#F9F9F9] text-center mb-2.5 mt-2.5 w-full h-[120px] flex flex-col justify-center items-center">
			<h2
				ref={sectionTitleRef}
				className="section-title text-4xl sm:text-5xl font-bold mx-auto text-center"
			>
				{titlePrefix ? `${titlePrefix} ` : ''}
				{lastWord && <span className="gradient-word">{lastWord}</span>}
			</h2>
		</div>
  );
};

export default SectionTitle; 