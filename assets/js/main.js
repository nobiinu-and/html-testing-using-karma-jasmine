function callAPI() {
  console.log('callAPI Clicked');
  console.log(window.XMLHttpRequest);
  $.ajax({
    url: '/message'
  })
  .done(function(data) {
    $('#cell1_1').text(data.hoge);
    console.log('callAPI done. data: ' + data.hoge);
  })
  .fail(function(jqXHR, textStatus) {
    $('#cell1_1').text('Error: ' + textStatus);
    console.log('callAPI fail. textStatus: ' + textStatus);
  });
}
