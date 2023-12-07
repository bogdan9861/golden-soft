$(function () {

    $('.main-img__slider').slick({
        arrows: false,
        asNavFor: '.main-content__sldier',

    });

    $('.main-content__sldier').slick({
        asNavFor: '.main-img__slider',
        prevArrow: '<button class="arrows left"> <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.665 28.3333L1.33171 14.9999L14.665 1.66659" stroke="#C4CDD5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg></button>',
        nextArrow: '<button class="arrows right"> <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L14.3333 14.3333L1 27.6667" stroke="#C4CDD5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        fade: true,
        dots: true,
    });

    $('.popular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="arrows2 left2"> <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.665 28.3333L1.33171 14.9999L14.665 1.66659" stroke="#C4CDD5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="arrows2 right2"> <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L14.3333 14.3333L1 27.6667" stroke="#C4CDD5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [
            {
                breakpoint: 1211,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 931,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 611,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 373,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    })

    $('.menu__btn').on('click', function () {
        $(this).toggleClass('menu__btn--active');
        $('.mobile__menu').toggleClass('mobile__menu--active');
    })

    let img = document.querySelector('.item-product__img');
    let links = document.querySelectorAll('.item-product__link');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let url = link.href;
            img.src = url;
        });
    });

    // checkbox

    let btn = document.querySelectorAll('#btn');

    btn.forEach(function (btn) {
        btn.onclick = function () {
            btn.classList.toggle('checked');
        }
    });

    // main checkbox logic
    const price = document.getElementById('price');
    const checkFullSet = document.querySelector('.box-inner');

    const currentPrice = '33 000';
    const FullSetPrice = '34 500';

    checkFullSet.addEventListener('click', () => {
        if (checkFullSet.classList.contains('checked')) {
            price.innerHTML = `${FullSetPrice}₽`
        } else {
            price.innerHTML = `${currentPrice}₽`
        }
    });

    //rateYO

    $("#rateYo").rateYo({
        rating: 5,
        readOnly: true,
        ratedFill: '#F7AB3A',
        spacing: "7px",
        starWidth: "20px",
        multiColor: {

            "startColor": "#FF0000", //RED
            "endColor": "#00FF00"  //GREEN
        }
    });

    $('#rateYoSelect').rateYo({
        rating: 0,
        ratedFill: '#F7AB3A',
        spacing: "7px",
        starWidth: "20px",
        halfStar: true,
        multiColor: {

            "startColor": "#FF0000", //RED
            "endColor": "#00FF00"  //GREEN
        }
    });

    $('#rateYoUser').rateYo({
        rating: '3.5',
        readOnly: true,
        ratedFill: '#F7AB3A',
        spacing: "7px",
        starWidth: "20px",
        multiColor: {
            "startColor": "#FF0000", //RED
            "endColor": "#00FF00"  //GREEN
        }
    });

    // form stiler

    $('select').styler();

    // accordion

    const wrap = document.querySelectorAll('#accordion_wrap');
    const arrow = document.querySelectorAll('.accordion__arrow');

    arrow.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('accordion__arrow');
        });
    });

    wrap.forEach((wrap) => {
        wrap.addEventListener('click', (e) => {
            if (e.target.tagName == 'IMG') {
                wrap.nextElementSibling.classList.toggle('accordion__content--active');
            }
        })
    })

    // tab

    $('.tab').on('click', function (e) {
        e.preventDefault()

        $('.tab').removeClass('tab--active');
        $(this).addClass('tab--active');

        $('.tab__content').removeClass('tab__content--active');
        $($(this).attr('href')).addClass('tab__content--active');
    });

    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    if (month == 0) {
        month = 'Января';
    } else if (month == 1) {
        month = 'Февраля';
    } else if (month == 2) {
        month = 'Марта';
    } else if (month == 3) {
        month = 'Апрелья';
    } else if (month == 4) {
        month = 'Мая';
    } else if (month == 5) {
        month = 'Июня';
    } else if (month == 6) {
        month = 'Июля';
    } else if (month == 7) {
        month = 'Августа';
    } else if (month == 8) {
        month = 'Сенября';
    } else if (month == 9) {
        month = 'Октября';
    } else if (month == 10) {
        month = 'Ноября';
    } else if (month == 11) {
        month = 'Декабря';
    }

    const reviews = document.getElementById('reviews'),
        form = document.getElementById('form');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const inputName = document.getElementById('inputName').value,
            textArea = document.getElementById('textArea').value;

        reviews.innerHTML += `
        <div class="reviews__cart">
        <div class="reviews__cart-top">
        <span class="reviews__cart-name">${inputName}</span>
        <span class="reviews__cart-date">${date} ${month}, ${year}</span>
        <div class="reviews__cart-rate" id="rateYoUser"></div>
        </div>
        <div class="reviews__cart-body">
            <p class="reviews__cart-text">
            ${textArea}
            </p>
            <div class="answer__inner">
                <span class="reviews__cart-answer">Ответ: <span id="answer" style="display: inline;"></span></span>
            </div>
            
            <div class="reviews__cart-functions">
                <li class="reviews__cart-functions__item">
                    <a class="reviews__cart-function__answer" id="answerBtn">Ответить</a>
                </li>
                <li class="reviews__cart-functions__item">
                    <a class="reviews__cart-function__comment" id="commentBtn"> <span id="comments"
                            style="display: inline;">0</span>
                        комментарий
                    </a>
                </li>
            </div>
        </div>
        <div class="answer-fill">
            <input class="reviews__answer-input" type="text" value="" 
            placeholder="Ваш ответ:" id="answerInput">
        </div>
    </div>`

    });

    const answer = document.getElementById('answer'),
        answerInput = document.getElementById('answerInput'),
        answerBtn = document.getElementById('answerBtn'),
        commentBtn = document.getElementById('commentBtn'),
        comments = document.getElementById('comments'),
        answerFill = document.querySelector('.answer-fill');

    function putTheAnswer(content) {
        answer.innerText = content;
    };

    numOfComments = 0;

    answerInput.addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
            putTheAnswer(answerInput.value);
            numOfComments = 1;
            comments.innerHTML = numOfComments;
        }

        if (numOfComments == 1) {
            commentBtn.addEventListener('click', () => {
                document.querySelector('.reviews__cart-answer').classList.toggle('reviews__cart-answer--active')
            })
        }
    });

    answerBtn.addEventListener('click', () => {
        answerFill.classList.toggle('answer-fill--active');
    })
});