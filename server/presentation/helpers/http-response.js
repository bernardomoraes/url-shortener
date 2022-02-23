module.exports = class HttpResponse {
  static badRequest(message) {
    return {
      statusCode: 400,
      body: {
        message: message || 'Bad Request'
      }
    }
  }

  static serverError() {
    return {
      statusCode: 500,
      body: {
        message: 'Internal Server Error'
      }
    }
  }
}