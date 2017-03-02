import { test } from 'tape';
import { debounce } from './util';

test('debounce shouldnt execute immediately', (assert) => {
  let hasTriggered = false;
  const expected = false;

  const fn = debounce(function(){
    hasTriggered = true;
  }, 100);

  assert.equal(expected, hasTriggered);
  fn();
  assert.equal(expected, hasTriggered);
  assert.end();
});

test('debounce should execute after the given delay', (assert) => {
  let hasTriggered = false;
  const expected = true;
  const delay = 100;

  const fn = debounce(function(){
    hasTriggered = true;
  }, delay);

  assert.notEqual(expected, hasTriggered);
  fn();
  setTimeout(function() {
    assert.equal(expected, hasTriggered);
  }, delay);
  assert.end();
});

test('debounce should not execute until the delay has passed again', (assert) => {
  let counter = 0;
  const expectedAfter100 = 1;
  const expectedAfter200 = 2;
  const delay = 100;

  const fn = debounce(function(){
    counter++;
  }, delay);

  assert.notEqual(expectedAfter100, counter, 'counter should still be 0');
  fn();
  setTimeout(function() {
    assert.equal(expectedAfter100, counter, 'counter should now equal 1');
    fn();
    assert.equal(expectedAfter100, counter, 'counter should still equal 1');
    setTimeout(function() {
      assert.equal(expectedAfter200, counter, 'counter should now equal 2');
    }, delay);
  }, delay);

  assert.end();
});