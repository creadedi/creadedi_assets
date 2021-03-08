function slider_project() {
    var controller = new ScrollMagic.Controller();

    var fundoproject = TweenMax.fromTo('.fundo_image_project', 0.4, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    });


    var titleprojectprin = TweenMax.fromTo('.titulo_project', 0.4, {
        x: -80,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 1.3
    });

    var titlecase = TweenMax.fromTo('.titulo_case', 0.4, {
        x: -80,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 1.6
    });

    var paragrafoproject = TweenMax.fromTo('.paragrafo_project_home', 0.4, {
        y: -80,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        delay: 1.9
    });

    var scene = new ScrollMagic.Scene({ triggerElement: "#slide-project" })
        .setTween(fundoproject)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#slide-project" })
        .setTween(titleprojectprin)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#slide-project" })
        .setTween(titlecase)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#slide-project" })
        .setTween(paragrafoproject)
        .addTo(controller);
}

function tm() {
    TweenMax.fromTo('.link_block', 0.3, {
        y: -200,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        delay: 0.8
    });

}

function sm() {
    var controller = new ScrollMagic.Controller();

    var TextoUp = TweenMax.fromTo('.texto-up', 0.5, {
        x: -600,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 0.7
    });

    var TextoDown = TweenMax.fromTo('.texto-down', 0.5, {
        x: 600,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 0.7
    });

    var present = TweenMax.fromTo('.apresentacao', 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    });

    var fotopes = TweenMax.fromTo('.foto-pessoa', 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.2
    });

    var textcomp = TweenMax.fromTo('.text-intro-home', 0.4, {
        x: -200,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 0.7
    });

    var titleproject = TweenMax.fromTo('.title_home_project', 0.4, {
        x: -200,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 0.7
    });

    var scene = new ScrollMagic.Scene({ triggerElement: "#texto-nome-grande" })
        .setTween(TextoUp)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#texto-nome-grande" })
        .setTween(TextoDown)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#texto-nome-grande" })
        .setTween(present)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#texto-nome-grande" })
        .setTween(fotopes)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#texto-comp" })
        .setTween(textcomp)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#slide-project" })
        .setTween(titleproject)
        .addTo(controller);
}

$(document).ready(function () {
    /* Início Função Slider Projeto Home */
    $('.w-slider-arrow-right, .w-slider-arrow-left').click(function () {
        slider_project();
    });
    /* Fim Função Slider Projeto Home */

    /* Inicio Função Básicas */
    tm();
    sm();
    slider_project();
    /* Fim Função Básicas */

});