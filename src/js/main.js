import "../styles/main.sass"

'use strict'
import {ableSearch, disableSearch,toggleNav,toDown} from './homepage'
import lazyload from "./lazyload"
import {sendIdea,ideaForm} from "./sendIdea"
import slickSlider from "./slickSlider"
import scrollPortfolio from "./portfolio"
import {careersAccordion,fileInput,scrollCareers} from "./careers"
import {inputContactFocus,handleMessageForm} from "./contact"
import {inputFaqFocus,faqAcc,handleQuestionForm} from "./faq"

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
 fileInput();
 scrollCareers();

 

 inputFaqFocus();
 faqAcc();
 handleQuestionForm();

 inputContactFocus();
 handleMessageForm();

 
});