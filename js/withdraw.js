 $(function () {
     $('input[name="withdraw-method"]').on('change', function () {
         let curr = $(this).attr('data-curr');
         $('.cur-currency').html(' ' + curr);
         $('.input_doll').attr('data-currency', curr);
         $('#withdraw-amount-input').trigger('input');
     });
     $('#withdraw-amount-input').on('input', function () {
         let val = $(this).val();

         if ($('input[name="withdraw-method"]:checked').attr('data-curr') == "$") {
             if (val < 10) {
                 $(this).val('10')
             };
         }

         if (val > 100000) {
             $(this).val('100000')
         };
         $('.withdraw-value').html($(this).val())
     })
 });
