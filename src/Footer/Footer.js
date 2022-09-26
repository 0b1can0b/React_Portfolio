import {
  SocialTwitter,
  Github,
  Facebook,
  Instagram,
  Linkedin
} from "../imgs/social_icons.js";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_top">
        <div className="footer_info">
          <a href="#footer_logo" className="footer_logo">
            <svg viewBox="0 0 32 32">
              <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"></path>
            </svg>
          </a>
          <div className="footer_about">
            Maiores, obcaecati perferendis nulla harum, consequatur reiciendis
            suscipit, atque consequuntur porro ex cum in? Nam nostrum
            exercitationem eveniet unde provident fugiat asperiores?
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links_heading">Products</div>
          <a href="#Web_Studio">Web Studio</a>
          <a href="#DynamicBox_Flex">DynamicBox Flex</a>
          <a href="#Programming_Forms">Programming Forms</a>
        </div>
        <div className="footer_links">
          <div className="footer_links_heading">Resources</div>
          <a href="#Nostrud_exercitation">Nostrud exercitation</a>
          <a href="#Visual_mockups">Visual mockups</a>
          <a href="#Nostrud_exercitation">Nostrud exercitation</a>
          <a href="#Visual_mockups">Visual mockups</a>
          <a href="#Nostrud_exercitation">Nostrud exercitation</a>
        </div>
        <div className="footer_links">
          <div className="footer_links_heading">Company</div>
          <a href="#Consectetur_adipiscing">Consectetur adipiscing</a>
          <a href="#Labore_et_dolore">Labore et dolore</a>
          <a href="#Consectetur_adipiscing">Consectetur adipiscing</a>
          <a href="#Labore_et_dolore">Labore et dolore</a>
          <a href="#Consectetur_adipiscing">Consectetur adipiscing</a>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="copyright">© www.com. All rights reserved.</div>
        <div className="socials">
          <div className="social_icon"><SocialTwitter /></div>
          <div className="social_icon"><Github /></div>
          <div className="social_icon"><Facebook /></div>
          <div className="social_icon"><Instagram /></div>
          <div className="social_icon"><Linkedin /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
