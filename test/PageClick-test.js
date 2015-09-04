describe('PageClick', () => {
  const PageClickInjector = require('inject!../src/PageClick');
  let mock, PageClick;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => PageClick = PageClickInjector({
    mock
  }));


  it('should be ok', () => {
    expect(PageClick).toBeTruthy();
  });
});
