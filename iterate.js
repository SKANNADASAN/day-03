//Using For Loop
let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];

for(var i=0;i<json.length;i++){
    var obj = json[i];
    console.log(obj.id);
}

// Using For in 

let jsonforin = [{
    "id": "1",
    "msg": "hi",
    "tid": "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
  }, {
    "id": "2",
    "msg": "there",
    "tid": "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
  }];

  for (var key in jsonforin){
    console.log(jsonforin[key].msg);
  };
// Using For off

  let jsonforof = [{
    "id": "1",
    "msg": "hi",
    "tid": "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
  }, {
    "id": "2",
    "msg": "there",
    "tid": "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
  }];

  for(var element of jsonforof){
    console.log(element);
  }

// Using For each 
  let jsonforeach = [{
    "id": "1",
    "msg": "hi",
    "tid": "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
  }, {
    "id": "2",
    "msg": "there",
    "tid": "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
  }];

  jsonforeach.forEach((element) => {
    console.log(element);
  })