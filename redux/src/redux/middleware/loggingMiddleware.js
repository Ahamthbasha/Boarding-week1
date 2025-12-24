const loggerMiddleware = store => next => action => {
    console.log('dispatching',action)
    console.log('Before state',store.getState())

    const result = next(action)

    console.log("After state",store.getState())

    return result
}

export default loggerMiddleware