window.onload = function () {

    let isOnScroll = false;

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 150 || document.body > 150) {
            CheckTheСondition();
        }
    }

    function CheckTheСondition() {
        if (!isOnScroll) {
            function Animation() {
                if (document.documentElement.scrollTop > 150 || document.body > 150) {
                    let el5567 = document.getElementById('el5567');
                    let el1245 = document.getElementById('el1245');
                    let el372 = document.getElementById('el372');
                    let el20 = document.getElementById('el20');

                    el5567.classList.add('animate1');
                    el1245.classList.add('animate2');
                    el372.classList.add('animate3');
                    el20.classList.add('animate4');

                    a = 0;
                    const num1 = 5567;

                    function animation5567() {
                        requestAnimationFrame(animation5567);
                        if (a < num1) {
                            a += num1 / 100;
                        } else {
                            cancelAnimationFrame(animation5567);
                        }
                        el5567.innerHTML = Math.floor(a);
                    }
                    animation5567();
                    b = 0;
                    const num2 = 1245;
                    function animation1245() {
                        requestAnimationFrame(animation1245);
                        if (b < num2) {
                            b += num2 / 100;
                        } else {
                            cancelAnimationFrame(animation5567);
                        }
                        el1245.innerHTML = Math.floor(b);
                    }
                    animation1245();
                    c = 0;
                    const num3 = 372;
                    function animation372() {
                        requestAnimationFrame(animation372);
                        if (c < num3) {
                            c += num3 / 100;
                        } else {
                            cancelAnimationFrame(animation5567);
                        }
                        el372.innerHTML = Math.floor(c);
                    }
                    animation372();
                    d = 0;
                    const num4 = 20;
                    function animation20() {
                        requestAnimationFrame(animation20);
                        if (d < num4) {
                            d += num4 / 100;
                        } else {
                            cancelAnimationFrame(animation5567);
                        }
                        el20.innerHTML = Math.floor(d);
                    }
                    animation20();
                }
            }
            isOnScroll = true;
            Animation();
        }
    }
}