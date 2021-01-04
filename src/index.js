/**
 * @theroyalwhee0/iter:src/index.js
 */

/**
 * Constants.
 */
const MAX = Number.MAX_SAFE_INTEGER;

/**
 * Generator a range sequence.
 * Examples:
 *  range(0, 10);     From 0-10 step 1 (auto)
 *  range(10, 0);     From 10-0 step -1 (auto)
 *  range(20);        From 0-20 step 1 (auto)
 *  range(3, 12, 3);  From 3-12 step 3
 * @param {integer} from Starting value, inclusive.
 * @param {integer} to Ending value value, inclusive.
 * @param {integer} step The amount to advance by.
 * @returns The resulting iterator.
 */
function* range(from, to, step) {
  if(from !== undefined && to === undefined) {
    to = from;
    from = 0;
  }
  if(from === undefined) {
    from = 0;
  }
  if(to === undefined) {
    to = MAX;
  };
  if(step === undefined) {
    step = from < to ? 1 : -1;
  }
  const lt = step > 0;
  let current = from;
  while(lt ? current <= to : current >= to) {
    yield current;
    current += step;
  }
}

/**
 * Repeat a value.
 * @param {any} value Any value to repeat.
 * @param {integer} length Number of times to repat.
 * @returns The resulting iterator.
 */
function* repeat(value, length=MAX) {
  let idx = 0;
  while(idx < length) {
    yield value;
    idx += 1;
  }
}

/**
 * Limit wrapped iterator to a given length.
 * @param {iterable} iter The iterable to operator on.
 * @param {integer} length The length to limit wrapper iterator to.
 * @returns The resulting limited iterator.
 */
function* limit(iter, length) {
  let idx = 0;
  for(let value of iter) {
    if(idx >= length) {
      break;
    }
    yield value;
    idx += 1;
  }
}

/**
 * Concatinate iterators together.
 * @param  {...iterables} iters The iterators to concatinate.
 * @returns The resulting concatinated iterator.
 */
function* concat(...iters) {
  for(let iter of iters) {
    for(let value of iter) {
      yield value;
    }
  }
}

/**
 * Build a function that takes the next item from an iterable.
 * That function returns the 'last' value when done.
 * Example:
 *  const take = taker([ 1, 2 ], 0);
 *  const first = take();  // 1
 *  const second = take(); // 2
 *  const third = take();  // 0
 *  const fourth = take(); // 0
 * @param {iterable} iter The iterable to operator on.
 * @param {any} last The value to return if at end.
 * @returns The function that takes the next item.
 */
function taker(iter, last) {
  const it = iter[Symbol.iterator]();
  return function takeNext() {
    const { value, done } = it.next();
    if(done) {
      return last;
    } else {
      return value;
    }
  };
}

/**
 * Fibonacci sequence.
 * @param {number} initial The initial value.
 * @param {number} maximum The maximum value.
 * @returns An iterable fibonacci sequence.
 */
function* fibonacci(initial=1) {
  let previous = 0;
  let current = initial;
  while(1) {
    yield current;
    [ previous, current ] = [ current, previous + current ];
  }
}

/**
 * Map values.
 * @param {iterable} iter The iterable to operator on.
 * @param {function} fn A function to transform/map each item.
 * @returns An iterator of mapped items.
 */
function* map(iter, fn) {
  for(let value of iter) {
    yield fn(value);
  }
}

/**
 * Filter values.
 * @param {iterable} iter The iterable to operator on.
 * @param {function} fn A function to filter each item.
 * @returns An iterator of filtered items.
 */
function* filter(iter, fn) {
  for(let value of iter) {
    if(fn(value)) {
      yield value;
    }
  }
}

/**
 * Slice a range out of an iterable.
 * @param {iterable} iter The iterable to operator on.
 * @param {integer} from The starting index.
 * @param {integer} to The ending index.
 * @returns An iterator of the sliced part.
 */
function* slice(iter, from, to) {
  if(from !== undefined && to === undefined) {
    to = from;
    from = 0;
  }
  if(from === undefined) {
    from = 0;
  }
  if(to === undefined) {
    to = MAX;
  };
  let idx = 0;
  for(let item of iter) {
    if(idx > to) {
      break;
    }
    idx += 1;
    if(idx <= from) {
      continue;
    }
    yield item;
  }
}

/**
 * Advance an iterator by a given amount.
 * @param {iterator} iter The iterator to advance .
 * @param {integer} size The number of items to advance by.
 * @returns The advanced iterator.
 */
function advance(iter, size) {
  return slice(iter, size, MAX);
}

/**
 * Exports.
 */
module.exports = {
  // General.
  taker,
  // Transform the values.
  map,
  // Change the iteration.
  limit,
  filter,
  slice,
  advance,
  concat,
  // Create iterators.
  range,
  repeat,
  fibonacci,
};
