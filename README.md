# inner-promise

A different way to handle resolve/reject patterns for promises.

```
improt { innerPromise } from 'inner-promise';

const [val, err] = await innerPromise(myPromise);
if (err) {
    // handle error
} else {
    // do something with value
}

const [[val1, val2], err2] = innerPromise(Promise.all([promise1, promise2]));
if (err2) {
    // handle error
} else {
    // do something with values
}
```
