import "../styles/main.sass";

("use strict");
import { ableSearch, disableSearch, toggleNav, toDown } from "./homepage";
import lazyload from "./lazyload";
import { sendIdea, ideaForm } from "./sendIdea";
import slickSlider from "./slickSlider";
import { careersAccordion, fileInput, handleCareersForm } from "./careers";
import { inputContactFocus, handleMessageForm } from "./contact";
import { inputFaqFocus, faqAcc, handleQuestionForm } from "./faq";

$(document).ready(function () {
  lazyload();

  ableSearch();
  disableSearch();
  toggleNav();
  toDown();
  sendIdea();
  ideaForm();
  slickSlider();

  careersAccordion();
  fileInput();
  handleCareersForm();

  inputFaqFocus();
  faqAcc();
  handleQuestionForm();

  inputContactFocus();
  handleMessageForm();

  const stickyNav = () => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      if (window.scrollY > nav.offsetTop) {
        nav.classList.add("sticky-navbar");
      } else {
        nav.classList.remove("sticky-navbar");
      }
    });
  };
  stickyNav();

});
