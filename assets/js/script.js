$(function () {
  var headerHight = 80; //ヘッダーの高さ
  $('a[href^="#"]').click(function () {
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top - headerHight;
  $("html, body").animate({
  scrollTop: position
  }, 100, "swing");
  return false;
  });
});