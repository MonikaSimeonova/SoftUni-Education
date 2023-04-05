function requestValidation(request) {
    const { method, version, message } = request;
    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT']
    const validVersions = ['HTPP/0.9', 'HTPP/1.0', 'HTPP/1.1', 'HTPP/2.0']

    const uriPatter = /^([\w.])+$|^\*$/gm;
    const messagePattern = /^[^<>\\&\'\"]+$/gm;

    const errorMessage = (typeOfParam) => `Invalid request header: Invalid ${typeOfParam}`

    if (!validMethod.includes(method) || !method) {
        throw new Error(errorMessage("Method"))
    }
    if (!validMethod.includes(version) || !version) {
        throw new Error(errorMessage("Version"))
    }
    if (!uriPatter.exec(uri) || !uri) {
        throw new Error(errorMessage("URI"))

    }
    if (!messagePattern.exec(message) || !message) {
        throw new Error(errorMessage("Message"))

    }
    return request;
}
requestValidation({

    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',

    message: ''

})