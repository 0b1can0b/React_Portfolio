import { useState, useRef } from "react";
import Button from "../utils/Button.js";
import heroVidImg from "../imgs/hero_vid_img.jpg";
import heroVid from "../imgs/placeholder_video.mp4";
import Animate from "../utils/Animate.js";
import BgSvg1 from "../imgs/bg_svg_1.js";
import BgSvg2 from "../imgs/bg_svg_2.js";

const AppBody = () => {
  const [openVidPop, setOpenVidPop] = useState(false);
  const popupRef = useRef(null);

  const handelVidPopClose = (e) => {
    e.target === popupRef.current && setOpenVidPop(false);
  };

  return (
    <div className="AppBody">
      <div className="body_section hero_section">
        <BgSvg1 />
        <div className="heading_primary">Landing template for startups</div>
        <div className="heading_secondary">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </div>
        <div className="hero_buttons">
          <Button href="#Start_free_trial" className="button_primary">
            Start free trial
          </Button>
          <Button href="#Learn_more" className="button_secondary">
            Learn more
          </Button>
        </div>
      </div>

      <div className="body_section hero_video">
        <div className="hero_video_icon" onClick={() => setOpenVidPop(true)}>
          <svg viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </div>
        <div className="hero_vid_img">
          <img src={heroVidImg} alt="hero_vid_img" />
          <BgSvg2 />
        </div>
      </div>

      <Animate
        on={openVidPop}
        duration={400}
        from={{ opacity: 0, transform: "scale(0)" }}
        to={{ opacity: 1, transform: "scale(1)" }}
      >
        <div ref={popupRef} className="video_popup" onClick={handelVidPopClose}>
          <div className="close_popup" onClick={() => setOpenVidPop(false)} />
          <video src={heroVid} autoPlay loop preload />
        </div>
      </Animate>
    </div>
  );
};

export default AppBody;
