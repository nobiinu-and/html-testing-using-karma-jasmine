describe('Some test case....', function() {

  beforeEach(function() {
    console.log('beforeEach');
    jasmine.Ajax.install();
    document.body.innerHTML = window.__html__['index.html'];

    // document.Readyで行うHookをここで行う
    $('#callAPI').on('click', callAPI);
  });

  afterEach(function() {
    console.log('afterEach');
    jasmine.Ajax.uninstall();
  });

  it("画面の表示", function() {
    console.log('画面の表示');
    expect(document.getElementsByTagName("h1")[0].innerHTML).toBe("Hello, world!");
  });

  it("メッセージ取得成功", function() {
    console.log('メッセージ取得成功');

    jasmine.Ajax.stubRequest(
      "/message"
    ).andReturn({
      responseText: '{ "hoge": "fuga" }'
    });

    $('#callAPI').click();

    expect($('#cell1_1').text()).toBe('fuga');
  });

  it("メッセージ取得失敗", function() {
    console.log('メッセージ取得失敗');

    jasmine.Ajax.stubRequest(
      "/message"
    ).andReturn({
      status: 404,
      responseText: 'Error Not Found.'
    });

    $('#callAPI').click();

    expect($('#cell1_1').text()).toBe('Error: error');
  });
});
