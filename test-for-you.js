$(document).ready(function() {
    let circleExpanded = false;

    $('.circle').on('mouseenter', function() {
        if (!circleExpanded) {
            // Увеличение круга
            $(this).addClass('expanded');
            circleExpanded = true;

            // Изменение цвета навигации
            $('nav, .nav-link').addClass('expanded');

            // Анимация удаления контента вверх
            $('.content').addClass('move-up');
            
            // Плавное появление блока new-content снизу
            setTimeout(function() {
                $('.new-content').addClass('show');
            }, 500);  // Задержка перед появлением контента

            // Замена логотипа на белый
            $('.logo').attr('src', 'logowhite.png');
        }
    });
});
