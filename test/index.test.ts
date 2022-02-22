import { innerPromise } from '../src';
import { promisify } from 'util';

const setImmediateP = promisify(setImmediate);

it.concurrent('immediate resolve', async () => {
    const expected = 1;
    const [val, err] = await innerPromise(Promise.resolve(expected));
    expect(val).toBe(expected);
    expect(err).toBe(void 0);
});

it.concurrent('immediate reject', async () => {
    const expected = new Error('whoa');
    const [val, err] = await innerPromise(Promise.reject(expected));
    expect(val).toBe(void 0);
    expect(err).toBe(expected);
});

it.concurrent('delayed resolve', async () => {
    const expected = 2;
    const [val, err] = await innerPromise(setImmediateP().then(() => expected));
    expect(val).toBe(expected);
    expect(err).toBe(void 0);
});

it.concurrent('delayed reject', async () => {
    const expected = new Error('whoa');
    const [val, err] = await innerPromise(setImmediateP().then(() => Promise.reject(expected)));
    expect(val).toBe(void 0);
    expect(err).toBe(expected);
});

it.concurrent('throw', async () => {
    const expected = new Error('whoa');
    const [val, err] = await innerPromise(new Promise((resolve, reject) => {
        throw expected;
    }));
    expect(val).toBe(void 0);
    expect(err).toBe(expected);
});
