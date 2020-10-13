      $(function () {
          let rangeMin = 30;
          let rangeMax = 70;

          let elemDailyProfit = $('.value_daily-profit .value__val');
          let elemTotalProfit = $('.value_total-profit .value__val');

          let scaleMin = $('.slider__item-scale_min');
          let scaleMax = $('.slider__item-scale_max');



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
              };
              if (value < rangeMin || value > rangeMax) {
                  switchPlan(value);
              }
              calc(value, elemDailyProfit, elemTotalProfit);

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

              calc($('#calc-input-amount').val(), elemDailyProfit, elemTotalProfit);


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

          calc(50, elemDailyProfit, elemTotalProfit);

      });
