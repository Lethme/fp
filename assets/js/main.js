AOS.init();

$(() => {
    $('.navbar .nav-item').each((i, e) => {
        $('footer .footer-nav').append($(e).html());
    });

    $('footer .footer-nav .nav-link').last().addClass('pr-lg-0');
    $('footer .footer-nav .nav-link').addClass('color-main text-center');

    $('.navbar .navbar-toggler').on('click', e => {
        let collapsed = $('.navbar .navbar-toggler').hasClass('collapsed');
        if (!collapsed) {
            $('.navbar').addClass('show');
        } else {
            $('.navbar').removeClass('show');
        }
    });

    $('.navbar .nav-link').on('click', e => {
        let links = $('.navbar .nav-link');
        let link = $(e.target);

        links.removeClass('active');
        link.addClass('active');

        let navbarCollapsed = !$('.navbar').hasClass('show');

        if (!navbarCollapsed) {
            $('.navbar').removeClass('show');
            $('.navbar .navbar-toggler').addClass('collapsed');
            $('.navbar .navbar-collapse').removeClass('show');
        }
    });

    $('footer .footer-nav .nav-link').on('click', e => {
        let href = $(e.target).attr('href');
        let text = $(e.target).html();
        let links = $('.navbar .nav-link');
        let link = links.filter((i, el) => {
            return $(el).attr('href') === href && $(el).html() === text;
        });

        links.removeClass('active');
        link.addClass('active');
    });

    $(window).resize(() => {
        if ($(window).width() > 992) {
            $('.navbar .navbar-toggler').addClass('collapsed');
            $('.navbar .navbar-collapse').removeClass('show');
            $('.navbar').removeClass('show');
        }
    });

    $('#signup').on('submit', e => {
        e.preventDefault();

        let eula = $('#signup-form-input-agreement').is(':checked');

        if (eula) {
            let phoneConvert = (phone) => {
                return phone.replace('(', '').replace(')', '').replace(/\s+/g, '');
            };

            let inputs = {
                name: $('#signup-form-input-name').val(),
                email: $('#signup-form-input-email').val(),
                phone: phoneConvert($('#signup-form-input-phone').val())
            }
        }

        return false;
    });
});