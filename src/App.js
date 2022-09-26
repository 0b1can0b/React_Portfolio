import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./Header/Header.js";
import AppBody from "./AppBody/AppBody.js";
import Footer from "./Footer/Footer.js";

console.clear();

const App = () => {
  useEffect(() => {
    const targetsString =
      ".header_logo, .NavItem, .header_buttons a, .hero_section .heading_primary, .hero_section .heading_secondary, .hero_buttons a, .hero_vid_img, .services_section .heading_primary, .services_section .heading_secondary, .service_icon, .service_title, .service_subtitle, .features_section .sub_heading, .features_section .heading_primary, .features_section .heading_secondary, .icon_list_item, .testimonial_img, .testimonial_body, .testimonial_name, .testimonial_position, .features_right, .tabs_section .heading_primary, .tabs_section .heading_secondary, .tab_head, .tab_image, .tab_title, .tab_body, .tab_button, .target_section .heading_primary, .target_section_left, .target_section .sub_heading, .target_section_title, .target_section_body, .body_section.news_section .heading_primary, .news_image, .news_category_item, .news_title, .news_body, .news_profileImg, .news_author, .news_date, .newsletter_section, .heading_primary, .heading_secondary, .newsletter_right, .footer_logo, .footer_about, .footer_links_heading, .footer_links a, .copyright, .social_icon";

    const targets = document.querySelectorAll(targetsString);

    targets.forEach((target) => target.classList.add("scroll_animation"))

    function handleIntersection(entries) {
      entries.forEach((entry, index) => {
        setTimeout(() => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        }, index * 100);
      });
    }

    const observer = new IntersectionObserver(handleIntersection);
    targets.forEach((target) => observer.observe(target));
  }, []);

  return (
    <div className="App">
      <Header />
      <AppBody />
      <Footer />
    </div>
  );
};

export default App;
