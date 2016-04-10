import test from 'tape';
import PageClick from '../src/PageClick';


test('PageClick', t => {
  t.ok(PageClick instanceof Function, 'should be function');
  t.end();
});

/* eslint no-warning-comments: 0 */
/*
TODO: Convert to Tape tests

describe('PageClick', () => {
  it('should be ok', () => {
    expect(PageClick).toBeTruthy();
  });


  it('should require the only child to be present', () => {
    expect(() => TestUtils.renderIntoDocument(<PageClick onClick={() => {}} />))
      .toThrow();
  });


  describe('Subscribe to document clicks', () => {
    beforeEach(() => {
      spyOn(global.window, 'addEventListener');
      spyOn(global.window, 'removeEventListener');
    });


    it('should subscribe to mousedown on render', () => {
      TestUtils.renderIntoDocument(<PageClick onClick={() => {}}><span>Test</span></PageClick>);

      expect(global.window.addEventListener).toHaveBeenCalled();
      expect(global.window.addEventListener.calls.mostRecent().args[0]).toEqual('mousedown');
    });


    it('should unsubscribe on destroy', () => {
      const div = document.createElement('div');

      React.render(<PageClick onClick={() => {}}><span>Test</span></PageClick>, div);

      const onMouseDown = global.window.addEventListener.calls.mostRecent().args[1];

      React.unmountComponentAtNode(div);

      expect(global.window.removeEventListener).toHaveBeenCalled();
      expect(global.window.removeEventListener.calls.mostRecent().args[0]).toEqual('mousedown');
      expect(global.window.removeEventListener.calls.mostRecent().args[1])
        .toEqual(onMouseDown);
    });
  });


  describe('Notification on clicks', () => {
    let pageClick, onClick, onMouseDown;

    beforeEach(() => {
      spyOn(global.window, 'addEventListener');
      onClick = jasmine.createSpy('onClick');
      pageClick = TestUtils.renderIntoDocument(
        <PageClick onClick={onClick}><span>Test</span></PageClick>);
      onMouseDown = global.window.addEventListener.calls.mostRecent().args[1];
    });


    it('should notify on clicks outside of the element', () => {
      onMouseDown();

      expect(onClick).toHaveBeenCalled();
    });


    it('should not notify on clicks inside the element', () => {
      const span = React.findDOMNode(pageClick);

      TestUtils.Simulate.mouseDown(span);
      onMouseDown();

      expect(onClick).not.toHaveBeenCalled();
    });


    it('should set insideClick flag on mouseDown inside', () => {
      const span = React.findDOMNode(pageClick);

      TestUtils.Simulate.mouseDown(span);

      expect(pageClick.insideClick).toBeTruthy();
    });


    it('should reset insideClick flag on mouseUp', () => {
      const span = React.findDOMNode(pageClick);

      TestUtils.Simulate.mouseDown(span);
      TestUtils.Simulate.mouseUp(span);

      expect(pageClick.insideClick).toBeFalsy();
    });


    it('should pass-through click event and other arguments', () => {
      onMouseDown(1, 2, 3);

      expect(onClick).toHaveBeenCalledWith(1, 2, 3);
    });
  });


  describe('Notification on clicks including clicks inside', () => {
    let pageClick, onClick, onMouseDown;

    beforeEach(() => {
      spyOn(global.window, 'addEventListener');
      onClick = jasmine.createSpy('onClick');
      pageClick = TestUtils.renderIntoDocument(
        <PageClick onClick={onClick} outsideOnly={false}><span>Test</span></PageClick>);
      onMouseDown = global.window.addEventListener.calls.mostRecent().args[1];
    });


    it('should notify on clicks inside the element', () => {
      const span = React.findDOMNode(pageClick);

      TestUtils.Simulate.mouseDown(span);
      onMouseDown();

      expect(onClick).toHaveBeenCalled();
    });
  });
});
*/
