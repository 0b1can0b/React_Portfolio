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
import CheckmarkIcon from "../imgs/checkmark_svg.js";
import reviewProfile from "../imgs/features-avatar.jpg";
import featuresIllustration from "../imgs/features-illustration.png";
import { Tabs, Tab } from "../utils/Tabs.js";
import tabImg1 from "../imgs/tabs_image_1.jpg";
import tabImg2 from "../imgs/tabs_image_2.jpg";
import tabImg3 from "../imgs/tabs_image_3.jpg";
import tabImg4 from "../imgs/tabs_image_4.jpg";
import tabImg5 from "../imgs/tabs_image_5.jpg";
import TabHeadIcon1 from "../imgs/tab_head_icon_1.js";
import TabHeadIcon2 from "../imgs/tab_head_icon_2.js";
import TabHeadIcon3 from "../imgs/tab_head_icon_3.js";
import TabHeadIcon4 from "../imgs/tab_head_icon_4.js";
import TabHeadIcon5 from "../imgs/tab_head_icon_5.js";

const ServiceComponent = ({ icon, title, subtitle }) => {
  return (
    <div className="service">
      <div className="service_icon">{icon}</div>
      <div className="service_title">{title}</div>
      <div className="service_subtitle">{subtitle}</div>
    </div>
  );
};

const IconListItem = ({ icon, text }) => {
  return (
    <div className="icon_list_item">
      <div className="icon_list_icon">{icon}</div>
      <div className="icon_list_text">{text}</div>
    </div>
  );
};

const TabContent = ({ title, body, button, image, imagePosition }) => {
  const ImgComponent = () => {
    return (
      <div className="tab_image media_bg_load">
        <img src={image} alt={image} />
      </div>
    );
  };

  return (
    <>
      {imagePosition === "Left" && <ImgComponent />}
      <div className="tab_info">
        <div className="tab_title">{title}</div>
        <div className="tab_body">{body}</div>
        <Button className="tab_button">{button}</Button>
      </div>
      {imagePosition === "Right" && <ImgComponent />}
    </>
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
        <div className="hero_vid_img media_bg_load">
          <img src={heroVidImg} alt="hero_vid_img " />
          <BgSvg2 />
        </div>
      </div>

      <Animate
        on={openVidPop}
        duration={250}
        from={{ opacity: 0, transform: "translateY(10rem) scale(0.75)" }}
        to={{ opacity: 1, transform: "translateY(0) scale(1)" }}
      >
        <div ref={popupRef} className="video_popup media_bg_load" onClick={handelVidPopClose}>
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
            <IconListItem icon={<CheckmarkIcon />} text="Premium statistics" />
            <IconListItem icon={<CheckmarkIcon />} text="Unlimited jobs" />
            <IconListItem icon={<CheckmarkIcon />} text="Free goods" />
            <IconListItem icon={<CheckmarkIcon />} text="No code required" />
            <IconListItem icon={<CheckmarkIcon />} text="Always up to date" />
          </div>
          <div className="testimonial">
            <div className="testimonial_left">
              <div className="testimonial_img">
                <img src={reviewProfile} alt="ReviewProfile" />
              </div>
            </div>
            <div className="testimonial_right">
              <div className="testimonial_body">
                "Cumque porro recusandae minus nulla eos totam aliquam commodi
                reprehenderit illum deleniti".
              </div>
              <div className="testimonial_name">Anastasia Dan</div>
              <div className="testimonial_position">
                <a href="#UX_Board">UX Board</a>
              </div>
            </div>
          </div>
        </div>
        <div className="features_right">
          <img src={featuresIllustration} alt="featuresIllustration" />
          <div className="scale_animation">
            <div className="sa_1" />
            <div className="sa_2" />
            <div className="sa_3" />
            <div className="sa_4" />
            {/* <div className="sa_5"/> */}
          </div>
        </div>
      </div>

      <div className="body_section tabs_section">
        <div className="tabs_section_headings">
          <div className="heading_primary">
            Integrated workflow designed for product teams
          </div>
          <div className="heading_secondary">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </div>
        </div>
        <Tabs>
          <Tab title="Voluptatum fugiat" titleIcon={<TabHeadIcon1 />}>
            <TabContent
              title="Consectetur adipisicing elit. Aliquam hic"
              body="Illum, impedit necessitatibus? Inventore itaque obcaecati nulla quod commodi eaque ut praesentium officia consequatur necessitatibus quam, repellendus facere beatae suscipit eos dolores nostrum a perspiciatis vel! Sed sunt voluptates autem perferendis dignissimos dolorum! Iste, nihil non maiores voluptatum eveniet rem nam alias obcaecati officiis. Debitis ea omnis modi quis! Omnis facere aliquid modi cum quo adipisci, amet exercitationem."
              button="Deserunt, veniam?"
              image={tabImg1}
              imagePosition="Right"
            />
          </Tab>
          <Tab title="Ipsa dolor" titleIcon={<TabHeadIcon2 />}>
            <TabContent
              title="Rem repellendus quod praesentium ipsa"
              body="A perspiciatis sed, ad minus iste vel. Error, enim ipsum assumenda repellendus odio fuga, iure ullam ducimus atque quod illum veniam facere quos accusamus laboriosam ex recusandae dicta. Nisi fuga dolores nihil non laudantium? Blanditiis voluptatem ipsa, unde temporibus deleniti quos ipsam iure numquam, similique necessitatibus atque asperiores dolores molestiae tempora? Ad distinctio deserunt quis possimus eum iure."
              button="Consectetur, veritatis."
              image={tabImg2}
              imagePosition="Left"
            />
          </Tab>
          <Tab title="Maxime accusamus" titleIcon={<TabHeadIcon3 />}>
            <TabContent
              title="Alias facere ad illum incidunt"
              body="Ipsam nemo laboriosam ad ex distinctio esse alias corrupti dignissimos recusandae adipisci eius voluptates repellat assumenda quo dicta, iusto facere possimus soluta porro hic asperiores eum. Impedit amet exercitationem aspernatur. Eos, officia voluptatum ut dolorem ipsa dolor, ea consectetur enim architecto culpa maxime? Consequuntur perferendis odit, recusandae quis provident beatae, cumque alias mollitia iure sunt quidem, minima repellat?"
              button="Maxime, dolores!"
              image={tabImg3}
              imagePosition="Right"
            />
          </Tab>
          <Tab title="Sunt perferendis" titleIcon={<TabHeadIcon4 />}>
            <TabContent
              title="Quo veniam nemo accusamus porro"
              body="Modi pariatur qui odio laboriosam assumenda explicabo totam, omnis minus voluptatem nihil molestiae magnam autem distinctio eius quidem. Assumenda, repellat minima nulla molestias harum exercitationem dolores accusamus quia maiores eaque ad quam doloremque omnis similique, illum sit tempora ea ipsum quae libero doloribus, impedit nobis debitis? Praesentium molestiae ex corporis minus rem ipsam, delectus illum perferendis velit quaerat."
              button="Culpa, molestias?"
              image={tabImg4}
              imagePosition="Left"
            />
          </Tab>
          <Tab title="Sit enim" titleIcon={<TabHeadIcon5 />}>
            <TabContent
              title="Ipsum perferendis explicabo distinctio vel"
              body="Eos, totam praesentium? Voluptatem saepe amet consequuntur debitis optio provident. Doloremque nostrum dolorum incidunt porro perferendis. Accusantium provident molestiae adipisci incidunt veniam, voluptatum rerum praesentium sit tenetur libero, voluptas repellat nesciunt fugiat corporis magnam eos quis maiores officiis. Sunt laboriosam placeat, quisquam consequuntur temporibus assumenda animi unde dolor architecto ex, nemo voluptatem, similique eum? Atque dignissimos in magnam."
              button="Ea, deserunt?"
              image={tabImg5}
              imagePosition="Right"
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AppBody;
