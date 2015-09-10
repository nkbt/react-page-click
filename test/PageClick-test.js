import React from 'react/addons';
const TestUtils = React.addons.TestUtils;


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



  it('should require the only child to be present', () => {
    expect(() => TestUtils.renderIntoDocument(<PageClick />))
      .toThrow();
  });


  describe('Subscribe to document clicks', () => {
    beforeEach(() => {
      spyOn(global.window, 'addEventListener');
      spyOn(global.window, 'removeEventListener');
    });


    it('should subscribe to mousedown on render', () => {
      const pageClick = TestUtils.renderIntoDocument(<PageClick><span>Test</span></PageClick>);
      expect(global.window.addEventListener).toHaveBeenCalled();
      expect(global.window.addEventListener.calls.mostRecent().args[0]).toEqual('mousedown');
    })


    it('should unsubscribe on destroy', () => {
      const div = document.createElement('div');
      const pageClick = React.render(<PageClick><span>Test</span></PageClick>, div);
      const onMouseDown = global.window.addEventListener.calls.mostRecent().args[1];
      React.unmountComponentAtNode(div);

      expect(global.window.removeEventListener).toHaveBeenCalled();
      expect(global.window.removeEventListener.calls.mostRecent().args[0]).toEqual('mousedown');
      expect(global.window.removeEventListener.calls.mostRecent().args[1])
        .toEqual(onMouseDown);
    })
  });
});
