$(document).ready(function(){
        // регулярка для провірки емейла
        var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // регулярка для провірки номеру телефону(міжнародний формат)
        var phoneRegexp = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        // функція яка вертає true/false в залежності від того, чи прошло поле валідацію на наявність введених вимволів, а також тогглить класс has-error
        function validateLength(input) {
          var isValid = false;
          isValid = $(input).val().length > 0;
          if(!isValid) {
            $(input).closest('.form-group').addClass('has-error');
            $(input).attr('placeholder', 'Поле обязательно для заполнения');
          } else {
            $(input).closest('.form-group').removeClass('has-error');
            $(input).closest('.form-group').addClass('has-success');
          }
          return isValid;
        }
        // функція яка вертає true/false в залежності від того, чи прошло поле валідацію на наявність введених вимволів та на регулярку передану другим аргументом, а також тогглить класс has-error
        function validateByReg(input, regexp) {
          var isValid = false;
          var value = $(input).val();

          isValid =  value.length > 0 && regexp.test(value);
          if(!isValid) {
            $(input).closest('.form-group').addClass('has-error');
            $(input).attr('placeholder', 'Поле обязательно для заполнения');
          } else {
            $(input).closest('.form-group').removeClass('has-error');
            $(input).closest('.form-group').addClass('has-success');
          }
          return isValid;
        }
        // обробка кліка на кнопку submit. якщо хоч одне із вказаних полів невалідне, то відміняєм submit
        $('#formSubmit').on('click', function () {
          var form = $(this).closest('form');
          var isFormValid = false;

          var email = validateByReg('#exampleInputEmail1', emailRegexp);
          var phone = validateByReg('#exampleInputphone1', phoneRegexp);
          var name = validateLength('#exampleInputname1');
          var text = validateLength('#exampleInputmessenger1');

          isFormValid = email && phone && name && text;
          if (!isFormValid) {
            return false;
          }
        });
      
        $('#btn1').click(function(){
          $.ajax({
            url: "page/page1.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });
        
        $('#btn2').click(function(){
          $.ajax({
            url: "page/page2.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });

        $('#btn3').click(function(){
          $.ajax({
            url: "page/page3.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });

        $('#btn4').click(function(){
          $.ajax({
            url: "page/page4.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });

        $('#btn5').click(function(){
          $.ajax({
            url: "page/page5.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });

        $('#btn6').click(function(){
          $.ajax({
            url: "page/page6.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });

        $('#btn7').click(function(){
          $.ajax({
            url: "page/page7.html",
            cache: false,
            success: function(html){
              $("#content").html(html);
            }
          });
        });
        
      });