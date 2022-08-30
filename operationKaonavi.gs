function getKaonaviToken() {
　const consumerKey = '指定のconsumerKey '
　const consumerSecret = '指定のconsumerSecret '

　const credentials = Utilities.base64Encode(`${consumerKey}:${consumerSecret}`, Utilities.Charset.UTF_8)
　const options = {
　　'method' : 'post',
　　'headers' : {
　　　'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
　　　'Authorization' : `Basic ${credentials}`,
    },
　　'payload' : 'grant_type=client_credentials'
　};

　const jsonData = JSON.parse(
　　UrlFetchApp.fetch('https://api.kaonavi.jp/api/v2.0/token', options).getContentText()
　)
　return jsonData
}