describe('Some test case....', function() {

  beforeEach(function() {
    console.log('beforeEach');
    document.body.innerHTML = window.__html__['index.html'];
  });

  it("画面の表示", function() {
    expect(document.getElementsByTagName("h1")[0].innerHTML).toBe("Hello, world!");
  });

});
