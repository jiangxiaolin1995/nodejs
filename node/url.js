//url.prase(urlStr [，parseQueryString] [，slashesDenoteHost])  将一个url地址解析为对象
//url.format(urlObj) 将一个url对象格式化成一个url字符串
//url.resolve(from,to) 也是用来解析 但是接收两个参数 能把两个参数拼接成浏览器可以识别的参数  
//例
//url.resolve('/one/two/three', 'four')         // '/one/two/four'
//url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
//url.resolve('http://example.com/one', '/two') // 'http://example.com/two'