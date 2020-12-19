const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
import {HTTP} from "@/axios.js";
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    reply(reply_token, msg)
    res.sendStatus(200)
})
app.listen(port)

function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {gWY1qEsFDFXlNuG/aHbMdmDdM6SmZpsBaViQHTXvzxo/W70C+fQZsAhCeAMn39mN5H2tx8+6qLrVKoluYmktK/H8Ug9Mn8EooFIvi4NwUE/eg6ihvOl5rzIuMfFleKWAiAddjSN1s6FSKFeZfGXwTQdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        "type": "template",
        "altText": "this is a carousel template",
        "template": {
          "type": "carousel",
          "imageSize": "cover",
          "imageAspectRatio": "square",
          "columns": [
            {
              "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
              "title": "1",
              "text": "Text",
              "actions": [
                {
                  "type": "message",
                  "label": "View",
                  "text": "View"
                }
              ],
              "imageBackgroundColor": "#E50000"
            },
            {
              "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
              "title": "2",
              "text": "Text",
              "actions": [
                {
                  "type": "message",
                  "label": "View",
                  "text": "View"
                }
              ],
              "imageBackgroundColor": "#137CF7"
            },
            {
              "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
              "title": "3",
              "text": "Text",
              "actions": [
                {
                  "type": "message",
                  "label": "View",
                  "text": "View"
                }
              ],
              "imageBackgroundColor": "#10D228"
            },
            {
              "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
              "title": "4",
              "text": "Text",
              "actions": [
                {
                  "type": "message",
                  "label": "View",
                  "text": "View"
                }
              ],
              "imageBackgroundColor": "#DB2020"
            }
          ]
        }
      })
    
    
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}