      $(function () {
          let rangeMin = 30;
          let rangeMax = 70;

          let elemDailyProfit = $('.value_daily-profit .value__val');
          let elemTotalProfit = $('.value_total-profit .value__val');

          let scaleMin = $('.slider__item-scale_min');
          let scaleMax = $('.slider__item-scale_max');

          let handle = $(".slider__value");
          $slider = $("#slider").slider({
              create: function () {
                  handle.text($(this).slider("value"));
                  calc($(this).slider("value"), elemDailyProfit, elemTotalProfit);


              },
              slide: function (event, ui) {
                  handle.text(ui.value + '$');
                  calc(ui.value, elemDailyProfit, elemTotalProfit);
                  $('#calc-input-amount').val(ui.value);
                  console.log('slide');
                  if (ui.value < rangeMin || ui.value > rangeMax) {
                      switchPlan(ui.value);
                  }
              },
              change: function (event, ui) {
                  console.log('change')
                  handle.text(ui.value + '$');
                  if (ui.value < rangeMin || ui.value > rangeMax) {
                      switchPlan(ui.value);
                  }
                  calc(ui.value, elemDailyProfit, elemTotalProfit);

              },
              orientation: "horizontal",
              range: "min",
              min: 5,
              max: 10000,
              value: 30
          });

          function switchPlan(val) {

              $('input[name="invest-plan"]').each(function (indx, elem) {
                  if (val > $(elem).attr('data-plan-min') && val < $(elem).attr('data-plan-max')) {
                      elem.checked = true;
                      rangeMin = Number($(elem).attr('data-plan-min'));
                      rangeMax = Number($(elem).attr('data-plan-max'));
                      return false;
                  }

              });

          };


          $('#calc-input-amount').on('input', function () {
              let min = 5;
              let max = 10000;

              let value = Number($(this).val());
              if (value < min) {
                  $('#calc-input-amount').val(min)
              }
              if (value > max) {
                  $('#calc-input-amount').val(max)
              }
              $("#slider").slider({
                  value: $(this).val(),

              });

          });


          $('input[name="invest-plan"]').on('change', function () {
              let min = Number($(this).attr('data-plan-min'));
              let max = Number($(this).attr('data-plan-max'));
              rangeMin = min;
              rangeMax = max;

              let value = Number($('#calc-input-amount').val());
              if (value < min) {
                  $('#calc-input-amount').val(min)
              }
              if (value > max) {
                  $('#calc-input-amount').val(max)
              }

              $("#slider").slider({
                  value: $('#calc-input-amount').val(),

              });
              calc($('#calc-input-amount').val(), elemDailyProfit, elemTotalProfit);
              handle.text($('#calc-input-amount').val() + '$');
              $("#slider").slider('values', 'gg', $('#calc-input-amount').val());

          });

          function calc(val, elemDailyProfit, elemTotalProfit) {
              let percent = $('input[name="invest-plan"]:checked').attr('data-plan-perc');
              let day = $('input[name="invest-plan"]:checked').attr('data-plan-day');

              let dailyProfit = (Number(val) * (Number(percent) / 100));
              elemDailyProfit.html(dailyProfit.toFixed(2) + '$');

              console.log(Number(percent))

              let totalProfit = dailyProfit * day;
              elemTotalProfit.html(totalProfit.toFixed(2) + '$');

          };

          $('.question').on('click', '.question__issue', function (e) {
              $('.question').not($(e.delegateTarget)).removeClass('question_active');
              $('.question__ask').not($(e.delegateTarget).find('.question__ask')).hide(600);
              $(e.delegateTarget).toggleClass('question_active');
              $(e.delegateTarget).find('.question__ask').slideToggle();


          });




      });
