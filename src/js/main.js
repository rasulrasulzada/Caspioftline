import "../styles/main.sass"

'use strict'
import {ableSearch, disableSearch,toggleNav,toDown} from './homepage'
import accordionFunc from './accordion';
import lazyload from "./lazyload"
import {sendIdea,ideaForm} from "./sendIdea"
import slickSlider from "./slickSlider"
import scrollPortfolio from "./portfolio"
import {careersAccordion,scrollCareers} from "./careers"
import {inputFocus,handleMessageForm} from "./contact"
import {faqAcc,handleQuestionForm} from "./faq"

$(document).ready(function(){
lazyload()

 ableSearch();
 disableSearch()
 toggleNav();
 toDown();
 sendIdea();
 ideaForm();
 slickSlider();

 scrollPortfolio();

 careersAccordion();
 scrollCareers();

 

 faqAcc();
 handleQuestionForm();

 inputFocus();
 handleMessageForm();
// accordionFunc();

 
});