import React from 'react';

type TechLogoProps = {
  className?: string;
  fill?: string;
};

export const Html5Logo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 384 512" fill={fill}>
    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
  </svg>
);

export const Css3Logo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 384 512" fill={fill}>
    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
  </svg>
);

export const JavaScriptLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 448 512" fill={fill}>
    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
  </svg>
);

export const GitLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 448 512" fill={fill}>
    <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/>
  </svg>
);

export const ServerlessLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M0 17.57h24L12 22l-12-4.43zm12-9.97l12 4.42-12 4.43-12-4.43zm0-3.6L24 8.43 12 12.86 0 8.43z"/>
  </svg>
);

export const PhotoshopLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01v2.03c.2.02.41.02.64.02.81 0 1.32-.3 1.32-.89 0-.43-.29-.79-.77-.97zM15.51 10c-.49 0-.8.32-.89.81h1.71c-.05-.49-.34-.81-.82-.81z"/>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.77 12.89c-.49.33-1.18.49-2.04.49-.28 0-.49-.01-.67-.02v2.35H5.5V6.54C6.05 6.44 6.88 6.33 8 6.33c1.21 0 2.08.26 2.66.77.55.46.86 1.17.86 2.01.01 1.13-.59 2.11-1.75 2.78zm7.06-.04h-3.13c.12.59.55.87 1.18.87.57 0 1.06-.18 1.49-.52l.49 1.01c-.56.4-1.29.62-2.09.62-1.9 0-2.99-1.18-2.99-3.08 0-1.96 1.26-3.17 2.83-3.17 1.64 0 2.43 1.25 2.43 2.88 0 .41-.04.77-.11 1.06l-.1.33z"/>
  </svg>
);

export const IllustratorLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.42 14.5h-1.92L9.6 14H6.4l-1.05 3.5H3.5L6.9 6.3h1.9l3.78 11.2zM12 12.5h4v1h-4z"/>
    <path d="M8 9.95L7.2 12.5h1.6zm4.75 4.05h1.5v-6h-1.5z"/>
  </svg>
);

export const FigmaLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M15.5 8c0-1.5-1-3-2.5-3s-2.5 1.5-2.5 3 1 3 2.5 3 2.5-1.5 2.5-3zm-5 3c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3zm5 0c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3z"/>
  </svg>
);

export const FlutterLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-7.37-7.373 7.37-7.37h-7.37z"/>
  </svg>
);

export const WebflowLogo: React.FC<TechLogoProps> = ({ className, fill = "#8E9196" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a4574.428 4574.428 0 0 0-2.106-6.607h-2.523s-1.072 3.38-1.769 5.577c-.213-1.08-1.396-7.09-1.396-7.09l-3.219.001 2.695 11.318h2.713s1.658-5.23 1.792-5.73c.157.576 1.796 5.73 1.796 5.73h2.815l4.062-9.806h-2.755z"/>
  </svg>
);

const TechLogos = () => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <Html5Logo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <Css3Logo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <JavaScriptLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <GitLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <ServerlessLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <PhotoshopLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <IllustratorLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <FigmaLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <FlutterLogo className="w-10 h-10" />
      </div>
      <div className="p-4 bg-white rounded-lg flex items-center justify-center">
        <WebflowLogo className="w-10 h-10" />
      </div>
    </div>
  );
};

export default TechLogos;
