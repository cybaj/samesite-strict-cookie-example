# 192.168.0.13:8085 - (fetch) → localhost:80
- DevTool -> application -> cookie : `localhost:80/` 에서 set cookie 한 내용을 확인할 수 있고,
- `localhost:80/test` 으로 다시 fetch request 날릴 때, 과연 `SameSite=Strict` 인 `hot=dollor` cookie 가 전달되는지, `console.log(req.rawHeaders)` 에서 확인할 수 있다. 전달되지 않았다.
```
[
  'Host',
  'localhost',
  'Connection',
  'keep-alive',
  'Cache-Control',
  'max-age=0',
  'sec-ch-ua',
  '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
  'sec-ch-ua-mobile',
  '?0',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
  'Accept',
  '*/*',
  'Origin',
  'http://192.168.0.13:8085',
  'Sec-Fetch-Site',
  'cross-site',
  'Sec-Fetch-Mode',
  'cors',
  'Sec-Fetch-Dest',
  'empty',
  'Referer',
  'http://192.168.0.13:8085/',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
  'Cookie',
  'foo=bar2',
  'If-None-Match',
  'W/"34-MglRPC+KCXkZ0jB3viY3zNKz7xw"'
]
```
