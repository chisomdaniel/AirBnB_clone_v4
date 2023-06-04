
$('document').ready(function () {

  const url1 = 'http://' + window.location.hostname + ':5001/api/v1/place_search/';
  $.post(url1, {}, function (data) {
  }, "json");

  const url2 = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(url2, function (reply) {
    if (reply.status === 'OK') {
      $('DIV#api_status').addClass('available');    //css('background-color', '#ff545f')
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  let amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      amenities[$(this).attr("data-id")] = $(this).attr("data-name");
    } else {
      delete amenities[$(this).attr("data-id")];
    }
    $(".amenities H4").text(Object.values(amenities).join(','));
  });
});
