import "../styles/main.sass"

'use strict'
import {ableSearch, disableSearch,toggleNav,toDown} from './homepage'
import accordionFunc from './accordion';
import lazyload from "./lazyload"
import {sendIdea,ideaForm} from "./sendIdea"
import slickSlider from "./slickSlider"
import scrollPortfolio from "./portfolio"

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

accordionFunc();

 
});