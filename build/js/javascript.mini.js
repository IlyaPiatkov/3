$(document).ready(function(){function c(c){var t=!1;return t=$(c).val().length>0,t?($(c).closest(".form-group").removeClass("has-error"),$(c).closest(".form-group").addClass("has-success")):($(c).closest(".form-group").addClass("has-error"),$(c).attr("placeholder","Поле обязательно для заполнения")),t}function t(c,t){var e=!1,n=$(c).val();return e=n.length>0&&t.test(n),e?($(c).closest(".form-group").removeClass("has-error"),$(c).closest(".form-group").addClass("has-success")):($(c).closest(".form-group").addClass("has-error"),$(c).attr("placeholder","Поле обязательно для заполнения")),e}var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;$("#formSubmit").on("click",function(){$(this).closest("form");var a=t("#exampleInputEmail1",e),s=t("#exampleInputphone1",n),o=c("#exampleInputname1"),l=c("#exampleInputmessenger1");if(!(a&&s&&o&&l))return!1}),$("#btn1").click(function(){$.ajax({url:"page/page1.html",cache:!1,success:function(c){$("#content").html(c)}})}),$("#btn2").click(function(){$.ajax({url:"page/page2.html",cache:!1,success:function(c){$("#content").html(c)}})}),$("#btn3").click(function(){$.ajax({url:"page/page3.html",cache:!1,success:function(c){$("#content").html(c)}})}),$("#btn4").click(function(){$.ajax({url:"page/page4.html",cache:!1,success:function(c){$("#content").html(c)}})}),$("#btn5").click(function(){$.ajax({url:"page/page5.html",cache:!1,success:function(c){$("#content").html(c)}})}),$("#btn6").click(function(){$.ajax({url:"page/page6.html",cache:!1,success:function(c){$("#content").html(c)}})}),$("#btn7").click(function(){$.ajax({url:"page/page7.html",cache:!1,success:function(c){$("#content").html(c)}})})});