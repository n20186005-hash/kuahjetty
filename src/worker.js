export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.kuahjetty.com' || (url.hostname === 'kuahjetty.com' && url.protocol === 'http:')) {
      url.hostname = 'kuahjetty.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
