var express = require('express');
var router = express.Router();
var username="abhi";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/profile',function(req,res){
   if(req.headers["username"] && req.headers["username"]==username){
   //res.send("hello");
   res.send({ username: 'abhishek',dob:"12/12/2012",age: 34,email:"abhishek.kumar@gmail.com",phoneNumber:89809809897 });
  
   }
	else{
		res.status(401).send("unAuthorised");
	}
	
})

router.get('/microservice/name',function(req,res){
   if(req.headers["username"]==username){
   res.send("user-microservice");
   }
   else{
	   res.status(401).send("unAuthorised");
   }
})

router.post('/auth', function (req, res) {
   
   req.headers["username"];
   if(req.headers["username"]==username){
      //res.status(200).send("successful");
	  res.redirect('/user/profile')

   }
   if(req.headers["username"]!=username){
      res.status(401).send("unAuthorised");

   }
   if(req.headers["username"]==null ){
      console.log("NULL");
      res.status(401).send("NULL");

   }
   
})



module.exports = router;
