$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow: `<button class="banner-section__slider-btn banner-section__slider-btn-prev "><img src="images/prev-arrow.svg" alt="prev-arrow" ></button> `,
    nextArrow: `<button class="banner-section__slider-btn banner-section__slider-btn-next "><img src="images/next-arrow.svg" alt="next-arrow" ></button> `,
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ],
  });

  $(".tab").on("click", function (event) {
    event.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass("tabs-content--active");

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $('.product-slider').slick('setPosition')
  });

  $(".product-item__favourite").on("click", function () {
    $(".product-item__favourite").toggleClass(
      "product-item__favourite--active"
    );
  });

  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button class="product-slider__slider-btn product-slider__slider-btn-prev "><img src="images/prev-black-arrow.svg" alt="prev-black-arrow" ></button> `,
    nextArrow: `<button class="product-slider__slider-btn product-slider__slider-btn-next "><img src="images/next-black-arrow.svg" alt="next-black-arrow" ></button> `,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 871,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ],
  });

  $('.filter-style').styler()

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active')
    $(this).next().slideToggle('200')
  });

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 100000,
    max: 500000,
    to: 200,
  })

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list')

  })

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list')
  })

  $(".rat-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#C4C4C4"
  })

  $('.menu__btn').on('click', function () {
    $('.menu__mobile-list').toggleClass('menu__mobile-list--active')
  })

  $('.footer__top-drop').on('click', function () {
    $(this).next().slideToggle()
    $(this).toggleClass('footer__top-drop--active')
  })

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle()
  })



});
