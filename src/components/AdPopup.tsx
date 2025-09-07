import React, { useEffect, useState } from "react";
import "./AdPopup.css";

const ads = [
  "/ads/iklan1.gif",
  "/ads/iklan2.gif",
  "/ads/iklan3.jpg"
];

const getRandomAd = () => ads[Math.floor(Math.random() * ads.length)];

interface AdPopupProps {
  onClose: () => void;
}

const AdPopup: React.FC<AdPopupProps> = ({ onClose }) => {
  const [adSrc, setAdSrc] = useState(getRandomAd());

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="ad-popup">
      <div className="ad-content">
        <img src={adSrc} alt="Iklan" />
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default AdPopup;
