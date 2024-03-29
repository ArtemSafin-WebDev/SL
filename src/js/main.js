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

import gsap from './gsap-shockingly-green/src/all';
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
import catalogSidebar from './catalogSidebar';
import fixedHeader from './fixedHeader';
import menu from './menu';
import headerCatalogDropdown from './headerCatalogDropdown';
import comparisonAnimation from './comparisonAnimation';
import animatedHeadings from './animatedHeaders';
import blocksReveal from './blockReveal';
import brandBlock from './brandBlock';
import productGallery from './productGallery';
import illustrationsSlider from './illustrations-slider';
import productTabs from './productTabs';
import complectationShowAll from './complectationShowAll';
import fancybox from './fancybox';
import aboutReviewsSlider from './aboutReviewsSlider';
import filtersNav from './filtersNav';
import stickyNavWrapper from './stickyNavWrapper';
import articleGallery from './articleGallery';
import articleTable from './articleTable';
import articleInterestingSlider from './articleInterestingSlider';
import comparisonFixedCards from './comparisonFixedCards';
import fixedSidebar from "./fixedSidebar";

gsap.registerPlugin(ScrollTrigger);

if (lazySizes) lazySizes.cfg.expFactor = 1;

window.SL_API = {};
document.addEventListener('DOMContentLoaded', function() {
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
    catalogSidebar();
    fixedHeader();
    fixedSidebar();
    menu();
    headerCatalogDropdown();
    comparisonAnimation();
    blocksReveal();
    brandBlock();
    productGallery();
    illustrationsSlider();
    productTabs();
    complectationShowAll();
    fancybox();
    aboutReviewsSlider();
    filtersNav();
    stickyNavWrapper();
    articleGallery();
    articleTable();
    articleInterestingSlider();
    comparisonFixedCards();

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    animatedHeadings();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
