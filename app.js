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
  // console.log(req.body.events[0])
  if (text === 'สนใจ') {
    sendText(sender, text)
  }
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
                  "title": "Title",
                  "text": "Text",
                  "actions": [
                    {
                      "type": "message",
                      "label": "Action 1",
                      "text": "Action 1"
                    }
                  ]
                },
                {
                    "title": "Title",
                    "text": "Text",
                    "actions": [
                      {
                        "type": "message",
                        "label": "Action 1",
                        "text": "Action 1"
                      }
                    ]
                  },
                  {
                    "title": "Title",
                    "text": "Text",
                    "actions": [
                      {
                        "type": "message",
                        "label": "Action 1",
                        "text": "Action 1"
                      }
                    ]
                  },
                  {
                    "title": "Title",
                    "text": "Text",
                    "actions": [
                      {
                        "type": "message",
                        "label": "Action 1",
                        "text": "Action 1"
                      }
                    ]
                  }
              ]
            }
          },
          {
            "type": "location",
            "title": "ลำปาง",
            "address": "เทศบาลนครลำปาง อำเภอเมืองลำปาง ลำปาง 52100",
            "latitude": 18.283815,
            "longitude": 99.493267
          },
          {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
              "type": "carousel",
              "imageSize": "contain",
              "columns": [
                {
                  "thumbnailImageUrl": "https://t3.gstatic.com/images?q=tbn:ANd9GcQ9HjTYO4Dzwf51uB65RIZ1jhy1PytLWRxeFLf19XvWdg_nwiuZsq1kT4FEFIRgh_1znFzXSijwTX2WrYRH2x_Ugw",
                  "title": "วัดพระธาตุลำปางหลวง",
                  "text": "Text",
                  "actions": [
                    {
                      "type": "postback",
                      "label": "ไม่ไอสัส",
                      "text": "น่ารักจุง",
                      "data": "data"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
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
