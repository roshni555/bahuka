/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *//*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

*/


/*var choosePage = function() {
  var  localStorageId = localStorage.getItem('loginurid');
  if(localStorageId) {
window.location.assign("matchingpage1.html");
  } else {
    window.location.assign("index.html");
  }
}*/







jQuery(document).ready(function()
{
jQuery("#divLoading").addClass('show');
var formData = {
task: "getcolleges"
 };


jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
   data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
jQuery("#divLoading").removeClass('show');
    var obj = jQuery.parseJSON(response);

    var arr = [], obj;

    for(key in obj) {
    arr.push(key);
    } 
    len = arr.length;     

    for(i=1; i<=len;i++)
    {


    var getstringify = JSON.stringify(obj[i]);
    //console.log(getstringify);
    var objss = jQuery.parseJSON( getstringify );
    //console.log(getstringify);

    var collegename = objss.collegename;
    $('#myselect').append("<option value='"+collegename+"'>"+collegename+"</option>");
  
    }

    },
    error: function () { 
     // alert("Error");
    }
  }); 













var  userid = localStorage.getItem('loginurid');
if(userid){


 // var myurl=window.location;

var url = document.URL

var abc=url.substr(url.lastIndexOf('/') + 1);

if(abc=="index.html")
{
window.location.href = "matchingpage1.html";

}

 }

 //alert("hp");

 


  jQuery( ".ds" ).click(function() {

var admin=jQuery(this).attr('for');
//alert(admin);
if(admin=="C1")
{
window.location.href="index.html";
}
if(admin=="C2")
{
 window.location.href="index2.html";
}
if(admin=="C3")
{
window.location.href="index3.html";
}
if(admin=="C4")
{
window.location.href="index4.html";
}
 

 });

jQuery(".student-login-button").click(function(){

var emial=jQuery("#emial").val();

var fistname=jQuery("#first-name").val();

var usrname=jQuery("#user-name").val();
var myselect = jQuery("#myselect").val();
 var text = " ";

var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
for( var i=0; i < 8; i++ )

{
        text += charset.charAt(Math.floor(Math.random() * charset.length));
}


 if(myselect=="0")
{
jQuery("#myselect").focus();
 jQuery("#myselect").toggleClass('red');
  return false;

    jQuery("#formLoading").removeClass('show');
}


  if(fistname=="")
{
jQuery("#first-name").focus();
 jQuery("#first-name").toggleClass('red');
  jQuery("#formLoading").removeClass('show');
   jQuery(".first-name").show();
  
  return false;

}
else{
 jQuery(".first-name").hide();

}

 if(emial=="")
{
jQuery("#emial").focus();
 jQuery("#emial").toggleClass('red');
  jQuery("#formLoading").removeClass('show');
  jQuery(".campus-email").show();
  
  return false;
}
else{
 jQuery(".campus-email").hide();

}

 if(usrname=="")
{
  jQuery("#user-name").focus();
   jQuery("#user-name").toggleClass('red');
    jQuery("#formLoading").removeClass('show');
    jQuery(".user-name").show();
    
    return false;
}

else{
 jQuery(".user-name").hide();

}

var emailRegExp = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.([a-zA-Z]){2,4})$/;
 if(!emailRegExp.test(jQuery("#emial").val())){  
 // jQuery("#btl-registration-error").html(btlOpt.MESSAGES.EMAIL_INVALID).show();
 //alert('Please enter the valid email')
 jQuery("#emial").toggleClass('red');
    jQuery("#formLoading").removeClass('show');

  return false;
 }

else{
  var collegename1 = jQuery("#myselect").val();

  var task = "varifirequest1";


    var varifidata1 = {
    task: task,
    emial:emial,
    collegename:collegename1
  }; 
    
        jQuery.ajax({url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",data:varifidata1, success: function(result){
//alert(result);
if(result)
{
  //alert(result);


    jQuery( ".imgappend" ).html('');
  
      if(result==1)
  {

   // var text="Email Already used, Please try different email!";
  jQuery( ".email-append" ).show();
  jQuery( "#emial" ).val('');
  jQuery("#emial").focus();
  jQuery("#emial").toggleClass('red');
  jQuery("#formLoading").removeClass('show');
    return false;

  }
  else if(result == 2){

     jQuery( ".email-append" ).hide();
    //alert(School Not);
    var schoolnotfound="Can't find your school.Please Try different email ";
    jQuery( ".imgappend" ).append( "<p>"+schoolnotfound+"</p>");
      return false;
      jQuery("#formLoading").removeClass('show');
    /*jQuery( ".imgappend" ).append( "<span class='grey_page1'><a id='goto_grey_page' href='javascript:;' onclick='findUserSchool();'> Click Here!</a></span>");*/
  }

  else{


    jQuery( ".email-append" ).hide();
    jQuery("#formLoading").addClass('show');

   var pass1 = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < 8; i++)
    {
        pass1 += possible.charAt(Math.floor(Math.random()* possible.length));
    }


   var task = "registerstudent";

  var formData = {
    task: task,
    emial:emial,
    firstname: fistname,
    username: usrname,
    userpassword: pass1
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
    var objq = jQuery.parseJSON( response );
    var userid=objq.userid;
    
 //localStorage.setItem('loginurid',userid);

 localStorage.setItem('username',usrname);
      jQuery( ".main-school-div" ).show();
      jQuery( ".main-school" ).hide();
var  usernamed = localStorage.getItem('username');

jQuery( "#login-name12" ).val(usernamed);
    },
    error: function () { 
 alert("Error");
    }
  });
 
  }
    }


 
        }

      });

          
}





 


   
 }); 

 jQuery(".firstpage-next").click(function(){

var emial=jQuery("#emial").val();

var fistname=jQuery("#first-name").val();

var usrname=jQuery("#user-name").val();

var pass1=jQuery("#user-password").val();
var pass2=jQuery("#user-varifypassord").val();
if(emial=="")
{
jQuery("#emial").focus();
 jQuery("#emial").toggleClass('red');
}else if(fistname=="")
{
jQuery("#first-name").focus();
 jQuery("#first-name").toggleClass('red');

}else if(usrname=="")
{
  jQuery("#user-name").focus();
   jQuery("#user-name").toggleClass('red');
}else if(pass1=="")
{
jQuery("#user-password").focus(); 
jQuery("#user-password").toggleClass('red');
}else if(pass2=="")
{
jQuery("#user-varifypassord").focus(); 
jQuery("#user-varifypassord").toggleClass('red');
 }else{

if(pass1==pass2)
{
jQuery(".main-school").css("display" ,"none");
jQuery(".student-login-main").css("display" ,"block");
  }
  else
  {
jQuery("#user-varifypassord").focus(); 
jQuery("#user-varifypassord").toggleClass('red');
jQuery("#user-password").focus(); 
jQuery("#user-password").toggleClass('red');

  }
  }
   
 }); 
 jQuery(".login_right").click(function(){


var username = jQuery("#login-name12").val();
var password = jQuery("#login-password12").val();

if(username=="")
{

 jQuery("#login-name12").focus(); 
jQuery("#login-name12").toggleClass('red'); 
}else if(password=="")
{
jQuery("#login-password12").focus(); 
jQuery("#login-password12").toggleClass('red'); 
}else{
//alert('userlign');


  var task ='userlogin';
  var username = username;
  var password =password;
  

   var formData = {
    task: task,
    username: username,
    password: password,
   
  };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {

//alert(response);
if(response=="teacher")
 {

}

else{
 if(response=="Login Error")
 {
  //jQuery("#login-name12").focus().val(''); 
  jQuery("#login-password12").focus().val(''); 
  jQuery("#login-password12").toggleClass('red'); 
  jQuery("#login-name12").toggleClass('red'); 
  /*jQuery(".error-para").html(''); 
  jQuery(".error-para").append('Username and Password are incorrect'); */
}else
{
jQuery(".student-login-main").css("display" ,"block");
jQuery(".main-school-div").css("display" ,"none");



 }

}
  },
    error: function () { 
      //alert("Error");
    }
  }); 
}

  //alert('hello');
 









































   
 }); 
 jQuery(".second-login-right").click(function(){
   jQuery(".student-login-main,.main-school-div").css("display" ,"none");
    jQuery(".student-login-3.main-page-student").css("display" ,"block");
   
 }); 

  jQuery(".last-right-arrow").click(function(){
 //alert('dd')
var citytown= jQuery("#jscitytown").val();

var country=jQuery( "#countryId option:selected" ).val();
var state=jQuery( "#stateId option:selected" ).val();
var birthdate=jQuery( "#datepicker" ).val();
if(birthdate=="")
{
jQuery("#datepicker").focus();
jQuery("#datepicker").toggleClass('red'); 
return false;
}
else if(citytown=="")
{
jQuery("#jscitytown").focus();
jQuery("#jscitytown").toggleClass('red');
return false;
}else if(country=="")
{
 // alert('state');
jQuery("#countryId").focus();
jQuery("#countryId").css("border", "1px solid red"); 

return false;

}else if(state=="")
{

jQuery("#stateId").focus();
 jQuery("#stateId").css("border", "1px solid red");  
return false;
}else{

   jQuery(".student-login-3.main-page-student").css("display" ,"none");
  jQuery(".student-login4.maindiv").css("display" ,"block");
} 

 jQuery(".student-login-3.main-page-student").css("display" ,"none");
  jQuery(".student-login4.maindiv").css("display" ,"block");
   
 }); 

   jQuery(".left-arrow-left2").click(function(){
   jQuery(".student-login4.maindiv").css("display" ,"none");
    jQuery(".student-login-3.main-page-student").css("display" ,"block");
   
 });

    jQuery(".last-left-arrow").click(function(){
   jQuery(".student-login-3.main-page-student").css("display" ,"none");
    jQuery(".student-login-main").css("display" ,"block");
   
 }); 

    jQuery(".left-arrow").click(function(){
   jQuery(".student-login-main").css("display" ,"none");
    jQuery(".main-school").css("display" ,"inline");


   
 }); 

jQuery( ".verify" ).click(function() {

    if(jQuery("#emial").val()=="")
 {
  jQuery("#emial").focus();
 // alert('Please enter your email');
     return false;
}

 var emailRegExp = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.([a-zA-Z]){2,4})$/;
 if(!emailRegExp.test(jQuery("#emial").val())){  
 // jQuery("#btl-registration-error").html(btlOpt.MESSAGES.EMAIL_INVALID).show();
 //alert('Please enter the valid email')
jQuery("#emial").focus().select();
  return false;
 }
 var emial11 = jQuery("#emial").val();
  var task = "varifirequest";
  var emial = emial11;

    var varifidata = {
    task: task,
    emial:emial11,


  }; 
    

        jQuery.ajax({url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",data:varifidata, success: function(result){
//alert(result);
if(result)
{
  //alert(result);


    jQuery( ".imgappend" ).html('');
    jQuery( ".imgappend2" ).html('');
      if(result==1)
  {

    var text="Email Already used, Please try different email!";
  jQuery( ".imgappend2" ).append( "<p>"+text+"</p>");
  jQuery( "#emial" ).val('');
  jQuery("#emial").focus();
  jQuery("#emial").toggleClass('red');

  }
  else if(result == 2){
    //alert(School Not);
    var schoolnotfound="Can't find your school...";
    jQuery( ".imgappend2" ).append( "<p>"+schoolnotfound+"</p>");
    jQuery( ".imgappend" ).append( "<span class='grey_page1'><a id='goto_grey_page' href='javascript:;' onclick='findUserSchool();'> Click Here!</a></span>");
  }
    var arr = result.split('k***p');
    var s=arr[0];
    var b=arr[1];
    var arr2 = b.split('/');
    var path="http://bahuka.com/home/images/";

    jQuery( ".imgappend2" ).append( "<p>"+s+"</p>");
    jQuery( ".imgappend" ).append( "<img src="+path+arr2[1]+">");


      //alert(b);
    }


 
        }});

            

   });


  jQuery(".student-login-g6-button").click(function(){

//alert('jas');
/*var emial = jQuery("#emial").val();
var firstname = jQuery("#first-name").val();
var username= jQuery("#user-name").val();
var userpassword= jQuery("#user-password").val();
var uservarifypassord= jQuery("#user-varifypassord").val();
*/

var jsmajor=  jQuery("#jsmajor").val();
var jsgraduation= jQuery("#jsgraduation").val();
var first_go_college = jQuery("#first_go_college").val();
var military_or_veteran=jQuery("#military_or_veteran").val();

var jscitytown = jQuery("#jscitytown").val();
var jsstate = jQuery("#stateId").val();
var jscountry=jQuery("#countryId").val();
var jsbirthdate= jQuery("#datepicker").val();

var jsbiotext=jQuery("#jsbiotext").val();

var gender=jQuery(".gender").val();

var interst=jQuery(".append").text();


  var task = "registerdata1";
var  userId = localStorage.getItem('loginurid');

var major = jsmajor;
var jscitytown = jscitytown;
var jsgraduation = jsgraduation;
var first_go_college =first_go_college;
var military_or_veteran=military_or_veteran;

var gender=gender;
var jsstate=jsstate;

var interst=interst;
var jsbirthdate=jsbirthdate;






  var formData = {
    task: task,
    
major: jsmajor,
jsgraduation: jsgraduation,
first_go_college: first_go_college,
military_or_veteran: military_or_veteran,
jsbiotext:jsbiotext,
gender:gender,
userId:userId,
interst:interst,
jsbirthdate:jsbirthdate,
jscitytown:jscitytown,
jsstate:jsstate,
jscountry:jscountry


  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
  
var myVar = setInterval(myTimer, 1700);
function myTimer() {
window.location.href="matchingpage1.html";
}

      //alert("Record saved successfully..!!");
    },
    error: function () { 
     // alert("Error");
    }
  }); 

         



   
   });


jQuery(".click-male-image").click(function(){

  //alert('hello');
  jQuery(".female-imgcheck").css("display","none");
    jQuery(".male-imgcheck").css("display","block");
        jQuery(".gender").val("male");

});

jQuery(".click-female-image").click(function(){

  //alert('hello');
  jQuery(".male-imgcheck").css("display","none");
    jQuery(".female-imgcheck").css("display","block");
      jQuery(".gender").val("female");
});



/*  userlogin function start  */

jQuery(".login_next,.login_float").click(function(){  
var username = jQuery("#login-name12").val();
var password = jQuery("#login-password12").val();

if(username=="")
{

 jQuery("#login-name12").focus(); 
jQuery("#login-name12").toggleClass('red'); 
}else if(password=="")
{
jQuery("#login-password12").focus(); 
jQuery("#login-password12").toggleClass('red'); 
}else{
//alert('userlign');


  var task ='userlogin';
  var username = username;
  var password =password;
  

   var formData = {
    task: task,
    username: username,
    password: password,
   
  };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {

//alert(response);
if(response=="teacher")
 {

window.location.href="teacher-login.html";
return false;
}

else{
 if(response=="Login Error")
 {
  
  jQuery("#login-name12").focus().val(''); 
  jQuery("#login-password12").focus().val(''); 
  jQuery("#login-password12").toggleClass('red'); 
  jQuery("#login-name12").toggleClass('red'); 
  return false;
  /*jQuery(".error-para").html(''); 
  jQuery(".error-para").append('Username and Password are incorrect'); */
}else
{
  jQuery(".error-para").html(''); 
  var strshortened = response.slice(0,1);
//alert(strshortened);
  if(strshortened == 0) {
    var arr = response.split('j****s');
    userid=arr[1];
    localStorage.setItem('loginurid',userid);
    //alert("Normal");
    
    window.location.href="matchingpage1.html";
    //alert("Comming Soon");

  }

if(strshortened == 1)
{
//alert("first");
var arr = response.split('j****s');
userid=arr[1];
localStorage.setItem('loginurid',userid);


  var task = "firsttimeuser";
  var userid = userid;

  var formData = {
    task: task,
    useridfir:userid,


  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
     window.location.href="matchingpage1.html";


    },
    error: function () { 
     // alert("Error");
    }
  }); 






}


}

 }
  },
    error: function () { 
      //alert("Error");
    }
  }); 
}

  //alert('hello');
 
});


/*  userlogin function end  */



/*  forgetpassword function sart */


jQuery("#comp-ikjvhz43link").click(function (){

  
 var forgetval=jQuery("#forget-passwrod").val();
 if(forgetval=="")
 {
  jQuery("#forget-passwrod").focus(); 
jQuery("#forget-passwrod").toggleClass('red'); 
return false;  
 }
 
 var emailRegExp = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.([a-zA-Z]){2,4})$/;
 if(!emailRegExp.test(forgetval)){  
 // jQuery("#btl-registration-error").html(btlOpt.MESSAGES.EMAIL_INVALID).show();
 //alert('Please enter the valid email')
jQuery("#forget-passwrod").focus().select();
  return false;
 }
 else
 {
  //alert('dd');

  var task ='forgetpasswrod';
  var forgetval = forgetval;
 
   var formData = {
    task: task,
    forgetval: forgetval,
  
  };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
      //alert(s);
    //alert(userid);
jQuery(".append-forget-text").html('');
    //alert(response);

    if(response==1)
    {
    var validaddress="Please enter valid email";
    jQuery( ".append-forget-text" ).append( "<p>"+validaddress+"</p>");
    }

       if(response==2)
    {
    var validemail="Your password has successfully reset please check your email";
    jQuery( ".append-forget-text" ).append( "<p class='green'>"+validemail+"</p>");
    }
 
  },
    error: function () { 
     // alert("Error");
    }
  }); 


 
 }
  
 
});  // forget password close function




 
  window.onload = function(){
    new JsDatePick({
      useMode:2,
      target:"inputField",
      dateFormat:"%d-%M-%Y"
      /*selectedDate:{        This is an example of what the full configuration offers.
        day:5,            For full documentation about these settings please see the full version of the code.
        month:9,
        year:2006
      },
      yearsRange:[1978,2020],
      limitToToday:false,
      cellColorScheme:"beige",
      dateFormat:"%m-%d-%Y",
      imgPath:"img/",
      weekStartDay:1*/
    });
  };
 
 jQuery(".teacherid").click(function(){

  alert('comming soon');
 });

/* jQuery("#StdStartBtn").click(function(){
//  alert('singh')
  window.location.href="student-test1.html";
});*/


/* student test arrow functionality start*/

jQuery("#testone1nxt").click(function(){
var radioValue = jQuery(".test01 :checked").val();
//alert(radioValue);

if(radioValue)
{
  //alert(radioValue);
  //alert('available value');
   var title = jQuery( ".testone01" ).attr( "qustnpos" );
if(title==01)
{
 // alert('fist div hide');


jQuery(".testone01").css("display","none");
jQuery(".testone02").css("display","block"); 
} 
}

else
{
 
  jQuery(".test1req").focus().val(''); 
jQuery(".test1req").toggleClass('red'); 

 // alert('No found value');
}
});
 

/*  second */

jQuery("#testone02nxt").click(function(){

 var radioValue2 = jQuery(".test02 :checked").val();
//alert(radioValue);

if(radioValue2)
{
  //alert('available value');
   var title = jQuery( ".testone02" ).attr( "qustnpos" );
if(title==02)
{
 // alert('second div hide');
jQuery(".testone02").css("display","none");
jQuery(".testone03").css("display","block"); 
} 
}

else
{
 
  jQuery(".test2req").focus().val(''); 
jQuery(".test2req").toggleClass('red'); 

 // alert('No found value');
}
 
 
});

/*  Third */

jQuery("#testone03nxt").click(function(){

 var radioValue3 = jQuery(".test03 :checked").val();
//alert(radioValue);

if(radioValue3)
{
  //alert('available value');
   var title = jQuery( ".testone03" ).attr( "qustnpos" );
if(title==03)
{
  //alert('Third div hide');
jQuery(".testone03").css("display","none");
jQuery(".testone04").css("display","block"); 
} 
}

else
{
 
  jQuery(".test3req").focus().val(''); 
jQuery(".test3req").toggleClass('red'); 

  //alert('No found value');
}
 
 
});

/*  Fourth */

jQuery("#testone04nxt").click(function(){

 var radioValue4 = jQuery(".test04 :checked").val();
//alert(radioValue);

if(radioValue4)
{
  //alert('available value');
   var title = jQuery( ".testone04" ).attr( "qustnpos" );
if(title==04)
{
 // alert('fourth div hide');
jQuery(".testone04").css("display","none");
jQuery(".testone05").css("display","block"); 
} 
}

else
{
 
  jQuery(".test4req").focus().val(''); 
jQuery(".test4req").toggleClass('red'); 

  //alert('No found value');
}
 
 
});


/*  Fifth */

jQuery("#testone05nxt").click(function(){

 var radioValue5 = jQuery(".test05 :checked").val();
//alert(radioValue);

if(radioValue5)
{
  //alert('available value');
   var title = jQuery( ".testone05" ).attr( "qustnpos" );
if(title==05)
{
  //alert('fifth div hide');
jQuery(".testone05").css("display","none");
jQuery(".testone06").css("display","block"); 
} 
}

else
{
 
  jQuery(".test5req").focus().val(''); 
jQuery(".test5req").toggleClass('red'); 

 // alert('No found value');
}
 
 
});



/*  Sixth  */

jQuery("#testone06nxt").click(function(){

 var radioValue6 = jQuery(".test06 :checked").val();
//alert(radioValue);

if(radioValue6)
{
  //alert('available value');
   var title = jQuery( ".testone06" ).attr( "qustnpos" );
if(title==06)
{
//  alert('sixth div hide');
jQuery(".testone06").css("display","none");
jQuery(".testone07").css("display","block"); 
} 
}

else
{
 
  jQuery(".test6req").focus().val(''); 
jQuery(".test6req").toggleClass('red'); 

 // alert('No found value');
}
 
 
});




/*  Seventh  */

jQuery("#testone07nxt").click(function(){

 var radioValue7 = jQuery(".test07 :checked").val();
//alert(radioValue);

if(radioValue7)
{
  //alert('available value');
   var title = jQuery( ".testone07" ).attr( "qustnpos" );
if(title==07)
{
 // alert('Seventh div hide');
jQuery(".testone07").css("display","none");
jQuery(".testone08").css("display","block"); 
} 
}

else
{
 
  jQuery(".test7req").focus().val(''); 
jQuery(".test7req").toggleClass('red'); 

 // alert('No found value');
}
 
 
});

/*  Seventh  */

jQuery("#testone08nxt").click(function(){

 var radioValue8 = jQuery(".test08 :checked").val();
//alert(radioValue);

if(radioValue8)
{
  //alert('available value');
   var title = jQuery( ".testone08" ).attr( "qustnpos" );
if(title==08)
{
 // alert('eidth div hide');
jQuery(".testone08").css("display","none");
jQuery(".testone09").css("display","block"); 
} 
}

else
{
 
  jQuery(".test8req").focus().val(''); 
jQuery(".test8req").toggleClass('red'); 

 //alert('No found value');
}
 
 
});



/*  Ninth  */

jQuery("#testone09nxt").click(function(){

 var radioValue9 = jQuery(".test09 :checked").val();
//alert(radioValue);

if(radioValue9)
{
  //alert('available value');
   var title = jQuery( ".testone09" ).attr( "qustnpos" );
if(title==09)
{
  //alert('Ninth div hide');
jQuery(".testone09").css("display","none");
jQuery(".testone10").css("display","block"); 
} 
}

else
{
 
  jQuery(".test9req").focus().val(''); 
jQuery(".test9req").toggleClass('red'); 

  //alert('No found value');
}
 
 
});
/*  TENTH  */

jQuery("#testone10nxt").click(function(){

 var radioValue10 = jQuery(".test10 :checked").val();
//alert(radioValue);

if(radioValue10)
{
  //alert('available value');
   var title = jQuery( ".testone10" ).attr( "qustnpos" );
if(title==10)
{
  //alert('TENTH div hide');
jQuery(".testone10").css("display","none");
jQuery(".testone11").css("display","block"); 
} 
}

else
{
 
  jQuery(".test10req").focus().val(''); 
jQuery(".test10req").toggleClass('red'); 

  //alert('No found value');
}
 
 
});

/*  Elevneth  */

jQuery("#testone11nxt").click(function(){
 
 var radioValue11 = jQuery(".test11 :checked").val();
//alert(radioValue);

if(radioValue11)
{
  //alert('available value');
   var title = jQuery( ".testone11" ).attr( "qustnpos" );
if(title==11)
{
  //alert('Elevneth div hide');
jQuery(".testone11").css("display","none");
jQuery(".testone12").css("display","block"); 
} 
}

else
{
 
  jQuery(".test11req").focus().val(''); 
jQuery(".test11req").toggleClass('red'); 

  //alert('No found value');
}
  
 
});
/* student test arrow functionality end */

 

 jQuery("#testone02pre").click(function(){
var pre1=jQuery(".testone02").attr('qustnpos');
// alert(pre1);
 if(pre1==02)
 {

jQuery(".testone02").css("display","none");
jQuery(".testone01").css("display","block"); 
 }
 });


  jQuery("#testone03pre").click(function(){
var pre1=jQuery(".testone03").attr('qustnpos');
// alert(pre1);
 if(pre1==03)
 {

jQuery(".testone03").css("display","none");
jQuery(".testone02").css("display","block"); 
 }
 });

    jQuery("#testone04pre").click(function(){
var pre1=jQuery(".testone04").attr('qustnpos');
// alert(pre1);
 if(pre1==04)
 {

jQuery(".testone04").css("display","none");
jQuery(".testone03").css("display","block"); 
 }
 });

  jQuery("#testone05pre").click(function(){
var pre1=jQuery(".testone05").attr('qustnpos');
// alert(pre1);
 if(pre1==05)
 {

jQuery(".testone05").css("display","none");
jQuery(".testone04").css("display","block"); 
 }
 });

    jQuery("#testone06pre").click(function(){
var pre1=jQuery(".testone06").attr('qustnpos');
// alert(pre1);
 if(pre1==06)
 {

jQuery(".testone06").css("display","none");
jQuery(".testone05").css("display","block"); 
 }
 });

        jQuery("#testone07pre").click(function(){
var pre1=jQuery(".testone07").attr('qustnpos');
// alert(pre1);
 if(pre1==07)
 {

jQuery(".testone07").css("display","none");
jQuery(".testone06").css("display","block"); 
 }
 });

  jQuery("#testone08pre").click(function(){
var pre1=jQuery(".testone08").attr('qustnpos');
// alert(pre1);
 if(pre1==08)
 {

jQuery(".testone08").css("display","none");
jQuery(".testone07").css("display","block"); 
 }
 });


    jQuery("#testone09pre").click(function(){
var pre1=jQuery(".testone09").attr('qustnpos');
// alert(pre1);
 if(pre1==09)
 {

jQuery(".testone09").css("display","none");
jQuery(".testone08").css("display","block"); 
 }
 });

        jQuery("#testone10pre").click(function(){
var pre1=jQuery(".testone10").attr('qustnpos');
// alert(pre1);
 if(pre1==10)
 {

jQuery(".testone10").css("display","none");
jQuery(".testone09").css("display","block"); 
 }
 });

                jQuery("#testone11pre").click(function(){
var pre1=jQuery(".testone11").attr('qustnpos');
// alert(pre1);
 if(pre1==11)
 {

jQuery(".testone11").css("display","none");
jQuery(".testone10").css("display","block"); 
 }
 });

   jQuery("#testone12pre").click(function(){
var pre1=jQuery(".testone12").attr('qustnpos');
// alert(pre1);
 if(pre1==12)
 {

jQuery(".testone12").css("display","none");
jQuery(".testone11").css("display","block"); 
 }
 });






/* question save functionality */
jQuery(".quertion-finish").click(function(){
  
  var radioValue12 = jQuery(".test12 :checked").val();
 // alert('jas');
 if(radioValue12)
 {
 // alert('value');
var radiosqstn1   =  jQuery(".test1 :checked").val();
var radiosqstn2 = jQuery(".test2 :checked").val();
var radiosqstn3 = jQuery(".test3 :checked").val();
var radiosqstn4 = jQuery(".test4 :checked").val();
var radiosqstn5 = jQuery(".test5 :checked").val();
var radiosqstn6 = jQuery(".test6 :checked").val();
var radiosqstn7 = jQuery(".test7 :checked").val();
var radiosqstn8 = jQuery(".test8 :checked").val();
var radiosqstn9 = jQuery(".test9 :checked").val();
var radiosqstn10 = jQuery(".test10 :checked").val();
var radiosqstn11 = jQuery(".test11 :checked").val();
var radiosqstn12 = jQuery(".test12 :checked").val();
 


/*  ajax hit question save value */
var task ='questionave';
var forans1 = radiosqstn1;
var forans2 = radiosqstn2;
var forans3 = radiosqstn3;
var forans4 = radiosqstn4;
var forans5 = radiosqstn5;
var forans6 = radiosqstn6;
var forans7 = radiosqstn7;
var forans8 = radiosqstn8;
var forans9 = radiosqstn9;
var forans10 = radiosqstn10;
var forans11 = radiosqstn11;
var forans12 = radiosqstn12;

 var formData = {
task: task,

radiosqstn1:   radiosqstn1,
radiosqstn2:   radiosqstn2,
radiosqstn3:   radiosqstn3,
radiosqstn4:   radiosqstn4,
radiosqstn5:   radiosqstn5,
radiosqstn6:   radiosqstn6,
radiosqstn7:   radiosqstn7,
radiosqstn8:   radiosqstn8,
radiosqstn9:   radiosqstn9,
radiosqstn10:  radiosqstn10,
radiosqstn11:  radiosqstn11,
radiosqstn12:  radiosqstn12,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {
      

    //  alert('successfully');
  localStorage.setItem('graphid',response);

  var obj = jQuery.parseJSON( response );
 window.location.href="student-result-page.html";
     //var graphgernate="successfullyd";


    },
    error: function () 
    { 
      //alert("Error");
    }
  }); 

 /*   *********************   */
 
 //return false; 
 }
 else
 {
  //alert('emprt');
jQuery(".test12req").focus(); 
jQuery(".test12req").toggleClass('red'); 
return false;

 }


var  localStoragegraphid = localStorage.getItem('graphid');
//alert(localStoragegraphid);
if(localStoragegraphid) {
//alert('set cache');

  var obj = jQuery.parseJSON( localStoragegraphid );

//alert(obj.user_id);


  //localStorage.setItem('graphid',"");
}else{

 // alert('no set cache');
}
});

 
/* end */

//alert('dd');
    jQuery(".country").change(function(){
      //alert('ddss');
      jQuery(".append").html('');
        var countries = [];
        jQuery.each(jQuery(".country option:selected"), function(){            
            countries.push(jQuery(this).val());
        });
      //  alert("You have selected the country - " + countries.join(", "));
     var test=countries.join(", ");

      jQuery(".append").append(test); 
    }); 

jQuery("#datepicker").datepicker();
 

});
