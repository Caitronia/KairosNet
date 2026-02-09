import { useEffect, useState } from "react";
import logo from "/logo.png";

export default function Intro({ showNavbar }) {
  const [logoActive, setLogoActive] = useState(false);
  const [logoFade, setLogoFade] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setLogoActive(true), 100);

    const fadeTimeout = setTimeout(() => {
      setLogoActive(false);
      setLogoFade(true);
    }, 2100);

    const hideTimeout = setTimeout(() => {
      setHideIntro(true);
      showNavbar();
    }, 2400);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [showNavbar]);

  if (hideIntro) return null;

  return (
    <div className="intro">
      <h1 className="logo-header">
        <span className={`logo ${logoActive ? "active" : ""} ${logoFade ? "fade" : ""}`}>
          <img src={logo} alt="Logo" />
        </span>
      </h1>
    </div>
  );
}
