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