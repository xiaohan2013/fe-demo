import test from 'ava';

test.before(t => {
    // This runs before all tests
});

test.before(t => {
    // This runs after the above, but before tests
});

test.after('cleanup', t => {
    // This runs after all tests
});

test.after.always('guaranteed cleanup', t => {
    // This will always run, regardless of earlier failures
});

test.beforeEach(t => {
    // This runs before each test
});

test.afterEach(t => {
    // This runs after each test
});

test.afterEach.always(t => {
    // This runs after each test and other test hooks, even if they failed
});

test(t => {
    // Regular test
});

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});