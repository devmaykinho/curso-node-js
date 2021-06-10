function BadRequest(message){
    this.name = 'BadRequest';
    this.message = message || 'Bad Request';
    this.status  = 400;
}

function Unauthorized(message){
    this.name = 'Unauthorized';
    this.message = message || 'Request Unauthorized';
    this.status  = 401;
}

BadRequest.prototype = new Error();
Unauthorized.prototype = new Error();

export {
    BadRequest,
    Unauthorized
}