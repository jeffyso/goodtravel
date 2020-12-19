let express = require('express')
let bodyParser = require('body-parser')
let request = require('request')
let app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
  let text = req.body.events[0].message.text
  let sender = req.body.events[0].source.userId
  let replyToken = req.body.events[0].replyToken
  console.log(text, sender, replyToken)
  console.log(typeof sender, typeof text)
  if (text === 'สนใจ') {
    sendText(sender, text)
  }
//   if (text === 'เที่ยวไหนดี'){
//     sendTravel(sender,text)
//   }
//   if (text === 'ร้านไหนเด็ด'){
//     sendRestaurant(sender,text)
//   }
//   if (text === 'ที่พักสบายๆ'){
//     sendHotel(sender,text)
//   }
  res.sendStatus(200)
})
function sendText (sender, text) {


  let data = {
    to: sender,
    messages: [
        {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
              "type": "carousel",
              "columns": [
                {
                  "text": "กดเพื่อเลือก",
                  "actions": [
                    {
                      "type": "message",
                      "label": "สถานที่ท่องเที่ยว",
                      "text": "เที่ยวไหนดี"
                    },
                    {
                      "type": "message",
                      "label": "ร้านอาหาร",
                      "text": "ร้านไหนเด็ด"
                    },
                    {
                      "type": "message",
                      "label": "โรงแรงแรม, ที่พัก",
                      "text": "ที่พักสบาย"
                    }
                  ]
                }
              ]
            }
          }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {gWY1qEsFDFXlNuG/aHbMdmDdM6SmZpsBaViQHTXvzxo/W70C+fQZsAhCeAMn39mN5H2tx8+6qLrVKoluYmktK/H8Ug9Mn8EooFIvi4NwUE/eg6ihvOl5rzIuMfFleKWAiAddjSN1s6FSKFeZfGXwTQdB04t89/1O/w1cDnyilFU=}'
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}
app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
