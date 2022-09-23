import { useState, useRef } from "react";
import Button from "../utils/Button.js";
import heroVidImg from "../imgs/hero_vid_img.jpg";
import heroVid from "../imgs/placeholder_video.mp4";
import Animate from "../utils/Animate.js";
import BgSvg1 from "../imgs/bg_svg_1.js";
import BgSvg2 from "../imgs/bg_svg_2.js";
import ServicesSvg1 from "../imgs/services_svg_1.js";
import ServicesSvg2 from "../imgs/services_svg_2.js";
import ServicesSvg3 from "../imgs/services_svg_3.js";

const ServiceComponent = ({ icon, title, subtitle }) => {
  return (
    <div className="service">
      <div className="service_icon">{icon}</div>
      <div className="service_title">{title}</div>
      <div className="service_subtitle">{subtitle}</div>
    </div>
  );
};

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
        duration={250}
        from={{ opacity: 0, transform: "translateY(10rem) scale(0.75)" }}
        to={{ opacity: 1, transform: "translateY(0) scale(1)" }}
      >
        <div ref={popupRef} className="video_popup" onClick={handelVidPopClose}>
          <div className="close_popup" onClick={() => setOpenVidPop(false)} />
          <video src={heroVid} autoPlay loop preload />
        </div>
      </Animate>

      <div className="body_section services_section">
        <div className="services_headings">
          <div className="heading_primary">Built exclusively for you</div>
          <div className="heading_secondary">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </div>
        </div>
        <div className="services_body">
          <ServiceComponent
            icon={<ServicesSvg1 />}
            title="Acquisition"
            subtitle="Fugiat, modi eos illum eum voluptatum tempora sed quae voluptatibus praesentium"
          />
          <ServiceComponent
            icon={<ServicesSvg2 />}
            title="Activation"
            subtitle="A ducimus laudantium magnam amet nihil aperiam tenetur quam necessitatibus odit! Alias excepturi "
          />
          <ServiceComponent
            icon={<ServicesSvg3 />}
            title="Retention"
            subtitle="Atque nobis quaerat, ut corrupti blanditiis labore, delectus eos maiores, necessitatibus fugit aliquid"
          />
        </div>
      </div>

      <div className="body_section features_section">
        <div className="features_left">
          <div className="sub_heading">Lighting fast workflow</div>
          <div className="heading_primary">Say hello to research data</div>
          <div className="heading_secondary">
            Illum labore earum totam pariatur eius temporibus sed repudiandae
            et, tempora consequuntur ratione, nam id incidunt sequi voluptates
            quam eveniet ipsam nemo.
          </div>
          <div className="icon_list">
            <div className="icon_list_item">
              <div className="icon_list_icon">SVG HERE</div>
              <div className="icon_list_text">TEXT HERE</div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial_left">
              <div className="testimonial_img"></div>
            </div>
            <div className="testimonial_right">
              <div className="testimonial_body">
                Cumque porro recusandae minus nulla eos totam aliquam commodi
                reprehenderit illum deleniti.
              </div>
              <div className="testimonial_name">Anastasia Dan</div>
              <div className="testimonial_position">
                <a href="#UX_Board">UX Board</a>
              </div>
            </div>
          </div>
        </div>
        <div className="features_right">
          {/* <img src="" alt=""/> */}
          {/* sCaLe aNiMaTiOn */}
        </div>
      </div>
    </div>
  );
};

export default AppBody;
