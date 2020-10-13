 $(function () {
     $('.tabs-box__link').on('click', function () {
         $('.tabs-box__link_active').removeClass('tabs-box__link_active');
         $(this).addClass('tabs-box__link_active');
         let ind = $(this).index();
         $('.tabs-box__item').removeClass('tabs-box__item_active');
         $('.tabs-box__item').eq(ind).addClass('tabs-box__item_active');
     })
 });
