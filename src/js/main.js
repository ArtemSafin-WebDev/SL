import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import accordions from './accordions';
import modals from './modals';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import footerSocialHover from './footerSocialHover';
import realisedProjects from './realisedProjects';
import otherReviews from './otherReviews';
import contactsMap from './contactsMap';
import catalog from './catalog';
import catalogBrandsSlider from './catalogBrandsSlider';
import introMarkers from './introMarkers';
import introSlider from './introSlider';
import helpMobileSelect from './helpMobileSelect';
import reviewsMobileSlider from './reviewsMobileSlider';
import comparison from './comparison';
import catalogCardsSliders from './catalogCardsSliders';
import mobileSortBtn from './mobileSortBtn';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    footerSocialHover();
    realisedProjects();
    otherReviews();
    contactsMap();
    catalog();
    catalogBrandsSlider();
    introMarkers();
    introSlider();
    helpMobileSelect();
    reviewsMobileSlider();
    comparison();
    catalogCardsSliders();
    mobileSortBtn();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
