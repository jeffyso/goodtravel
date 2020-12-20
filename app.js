let express = require('express')
let bodyParser = require('body-parser')
let request = require('request')
let app = express()


// const functions = require("firebase-functions");
// const request = require("request-promise");

// const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
// const LINE_HEADER = {
//   "Content-Type": "application/json",
//   "Authorization": "Bearer <CHANNEL-ACCESS-TOKEN>"
// };

// exports.AdvanceMessage = functions.https.onRequest((req, res) => {
    
// })

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
  if (text === 'เที่ยวไหนดี'){
    sendTravel(sender,text)
  }
  if (text === 'ร้านไหนเด็ด'){
    sendRestaurant(sender,text)
  }
  if (text === 'ที่พักสบาย'){
    sendHotel(sender,text)
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
function sendTravel (sender, text) {


    let data = {
      to: sender,
      messages: [


        ,{
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
              "type": "carousel",
              "columns": [
                {
                  "thumbnailImageUrl": "https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/01/0-Jaesorn-01.jpg",
                  "title": "อุทยานแห่งชาติแจ้ซ้อน",
                  "text": "บริเวณอุทยานฯมีธารน้ำแร่ ที่เต็มไปด้วยโขดหินธรรมชาติที่สวยงา",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "ตำแหน่งที่ตั้ง",
                      "uri": "https://goo.gl/maps/h6KouRHtpMXPCrqu6"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://www.chillpainai.com/src/wewakeup/img_travel/733/1443512171-_DSC8276.jpg",
                  "title": "พิพิธภัณฑ์ธนบดี",
                  "text": "หนึ่งเดียวที่ยังคงอนุรักษ์ประวัติศาสตร์แห่ง จ.ลำปาง",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "ตำแหน่งที่ตั้ง",
                      "uri": "https://g.page/MuseumDhanabadee?share"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://lampangsiteblog.files.wordpress.com/2016/01/e0b898e0b8b2e0b895e0b8b8-51.jpg?w=515&h=342",
                  "title": "วัดพระธาตุลำปางหลวง",
                  "text": "เป็นวัดไม้ที่สมบูรณ์ที่สุด แห่งหนึ่งของไทย",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "ตำแหน่งที่ตั้ง",
                      "uri": "https://goo.gl/maps/aGDMXUoerZPijnJ58"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://mpics.mgronline.com/pics/Images/563000004949801.JPEG",
                  "title": "กาดกองต้า",
                  "text": "ย่านตลาดเก่า ตั้งอยู่ขนานกับลำน้ำวัง",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "ตำแหน่งที่ตั้ง",
                      "uri": "https://goo.gl/maps/CfeRbQxPz4PeTv5T7"
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
function sendRestaurant (sender, text) {


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
                  "thumbnailImageUrl": "https://ed.edtfiles-media.com/static-cache/resize-cache/790x528/ud/images/1/90/267639/LUM_3659.jpg",
                  "title": "ร้านเสบียง",
                  "text": "ร้านอาหารบรรยากาศสบายๆ ตั้งอยู่ติดกับแม่น้ำวัง",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "รายละเอียด",
                      "uri": "http://www.edtguide.com/eat/267639/sabiang-restaurant"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://www.thainorthtour.com/img/upload/city-573c192f65400.JPG",
                  "title": "ร้านอร่อยบาทเดียว",
                  "text": "ร้านข้าวต้มอร่อยบาทเดียว อร่อยถูกปาก ราคาถูกใจ อาหารหลากหลาย",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "รายละเอียด",
                      "uri": "https://www.thainorthtour.com/place_detail.php?id=1275"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://www.thainorthtour.com/img/upload/city-573d50b38d9a0.JPG",
                  "title": "ร้านครัวมุกดา",
                  "text": "เมนูแนะนำประจำร้านคือ ปากหม้อญวน ปอเปี๊ยะญวนทอด ",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "รายละเอียด",
                      "uri": "https://www.thainorthtour.com/place_detail.php?id=1289"
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
function sendHotel (sender, text) {


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
                  "thumbnailImageUrl": "https://cf.bstatic.com/images/hotel/max1024x768/590/59058657.jpg",
                  "title": "รีเจนท์ ลอดจ์ ลำปาง",
                  "text": "ดีมาก 8.4",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "จองเลย",
                      "uri": "https://www.booking.com/hotel/th/regent-lodge-lampang.th.html?aid=368593;label=lampang-n4*chrSbMsyHiOP0gygG4wS392940716293:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-297601666475:kwd-325939957138:lp9073366:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZdXK2yOLec1E;sid=626394b8f59bcc8ed5948c38205d8a07;dest_id=5091;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A,A;sb_price_type=total;sr_order=popularity;srepoch=1608396318;srpvid=c55775cf53c1000d;type=total;ucfs=1&#hotelTmpl"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://cf.bstatic.com/images/hotel/max1024x768/132/132139796.jpg",
                  "title": "วิลล่า รัษฎา นคร ลำปาง",
                  "text": "ดีมาก 8.3",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "จองเลย",
                      "uri": "https://www.booking.com/hotel/th/villa-rassada-nakorn-lampang.th.html?aid=368593;label=lampang-n4*chrSbMsyHiOP0gygG4wS392940716293:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-297601666475:kwd-325939957138:lp9073366:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZdXK2yOLec1E;sid=626394b8f59bcc8ed5948c38205d8a07;dest_id=5091;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=3;hpos=3;no_rooms=1;room1=A,A;sb_price_type=total;sr_order=popularity;srepoch=1608396318;srpvid=c55775cf53c1000d;type=total;ucfs=1&#hotelTmpl"
                    }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://cf.bstatic.com/images/hotel/max1024x768/224/224153684.jpg",
                  "title": "โรงแรมลำปางเรสซิเด้นซ์",
                  "text": "ดีเสิศ 9.2",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "จองเลย",
                      "uri": "https://www.booking.com/hotel/th/lampang-residence.th.html?aid=368593;label=lampang-n4*chrSbMsyHiOP0gygG4wS392940716293:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-297601666475:kwd-325939957138:lp9073366:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZdXK2yOLec1E;sid=626394b8f59bcc8ed5948c38205d8a07;dest_id=5091;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=4;hpos=4;no_rooms=1;room1=A,A;sb_price_type=total;sr_order=popularity;srepoch=1608396318;srpvid=c55775cf53c1000d;type=total;ucfs=1&#hotelTmpl"
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
