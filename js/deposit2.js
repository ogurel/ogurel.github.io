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
              $('.min-depo span:nth-child(2)').html(rangeMin);
              $('.max-depo span:nth-child(2').html(rangeMax);

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
              $('.min-depo span:nth-child(2)').html(rangeMin);
              $('.max-depo span:nth-child(2').html(rangeMax);
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

          calc(30, elemDailyProfit, elemTotalProfit);

          $('.modal').on('click', '.depo-window__close', function (e) {
              $(e.delegateTarget).attr('hidden', '')
          })
          $('.modal').on('click', function (e) {
              if ($(e.target).hasClass('modal')) {
                  $(this).attr('hidden', '')
              }

          })
          let modal = function (sel) {
              this.mod = $(sel);
              this.open = function () {
                  this.mod.removeAttr('hidden')
              };
          }

          let modDepo = new modal('.modal_depo');


          $('#make-depo-btn').on('click', function () {
              modDepo.open();
          })
      });
