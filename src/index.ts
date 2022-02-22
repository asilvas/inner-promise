export function innerPromise(promise: Promise<any>): Promise<any> {
    return promise.then(data => {
        return [data]
    }).catch(err => {
        return [void 0, err]
    });
}
