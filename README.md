# inner-promise

[![NPM](https://nodei.co/npm/inner-promise.png?mini=true)](https://nodei.co/npm/inner-promise/) [![Build Status](https://app.travis-ci.com/asilvas/inner-promise.svg?branch=main)](https://app.travis-ci.com/asilvas/inner-promise)

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
