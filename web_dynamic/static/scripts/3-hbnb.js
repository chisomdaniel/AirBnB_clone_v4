
$('document').ready(function () {

  const url1 = 'http://' + window.location.hostname + ':5001/api/v1/place_search/';
  $.post(url1, {}, function (data) {
    const places = $("<article></article>").html('<div class="title_box"></div>').html('<h2>{{ place.name }}</h2><div class="price_by_night">${{ place.price_by_night }}</div>')
    const div2 = $('<div class="information"></div>').append('<div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>')
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
