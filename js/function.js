
function logout()
{
 //alert('jas');

localStorage.clear();
window.location.href = "index.html";


}

/*var pushNotification = window.plugins.pushNotification;

pushNotification.register(
    successHandler, 
    errorHandler, 
    {
        'senderID':'350287673095',
        'ecb':'onNotificationGCM' // callback function
    }
);*/


function jas()
{

var  userid = localStorage.getItem('loginurid');
var  test = localStorage.getItem('graphid');


var objk = jQuery.parseJSON( test);

 
 

var task = "getuser";
  var userid = userid;

  var formData = {
   task: task,
   usersshowid: userid,
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
    



  var obj = jQuery.parseJSON( response );

//for()
  var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 

  jQuery('.student-result').html('');

var getstringify = JSON.stringify(obj[1]);
var objs = jQuery.parseJSON( getstringify );




var name = objs.name;
var avatar = objs.avatar;
var studentype = objs.studentype;
var collegename = objs.collegename;


stusertype=objs.studentype;

if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
  if(avatar==""||avatar==null)
{
  var imgd ="http://bahuka.com/home/images/no-image-found.png";
img=imgd; 
}
else
{
 var img="http://bahuka.com/home/"+avatar;
}


   var profile="<div class='student-result-page01'><div class='student-result-img1'><img src='"+img+"'></img><div class='student-rslt-txt'><p class='Student-name-txt'>"+name+"</p><p>"+st+", "+collegename+"</p></div>";
 jQuery('.student-result').append(profile);

 var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "",
      fontFamily: "arial black"
    },
                animationEnabled: true,
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    theme: "theme1",
    data: [
    {        
      type: "pie",
      indexLabelFontFamily: "Garamond",       
      indexLabelFontSize: 12,
      indexLabelFontWeight: "bold",
      startAngle:0,
      indexLabelFontColor: "MistyRose",       
      indexLabelLineColor: "darkgrey", 
      indexLabelPlacement: "inside", 
      toolTipContent: "{name}: {y}%",
      showInLegend: true,
      indexLabel: "#percent%", 
      dataPoints: [
        {  y: objs.auditory, name: " ",indexLabel: objs.auditory+"%"},
        {  y: objs.visual, name: " ",indexLabel: objs.visual+"%"},
        {  y: objs.kinesthetic, name: " ", indexLabel: objs.kinesthetic+"%"},
        {  y: objs.textual, name: " ", indexLabel: objs.textual+"%"}
      ]
    }
    ]
  });
  chart.render();







    },
    error: function () { 
      //alert("Error");
    }
  }); 
  

}


/* popup code */



function popup()
{
jQuery(".popup").css("display","block");
 
jQuery("body").addClass("pupred");
}

function popclose()
{
jQuery(".popup").css("display","none"); 

} 

  function getclases1()
  {
 
var  userid = localStorage.getItem('loginurid');


  //alert(userid);
  //alert('get classes');
 var task = "getclasses";
  var userid = userid;

  var formData = {
   task: task,
   userid: userid,
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
    
    //alert("response");


  var obj = jQuery.parseJSON( response );

//for()
  var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 

len = arr.length;

console.log(len) //2*/
 //divdata="";
  jQuery('#student-clases-added').html('');
  var p=1;
  for(i=1; i<=len;i++)
  {

var getstringify = JSON.stringify(obj[i]);
console.log(getstringify);
var objs = jQuery.parseJSON( getstringify );
var id = objs.id;
var asset_id = objs.asset_id;
var subjectname = objs.subjectname;
var collegeId7 = objs.collegeId;

 localStorage.setItem('collabc' ,collegeId7);
//alert(p);
 data = "<div class='student-clases-added-lists'><div onclick='addclass1("+id+");' ford='"+p+"' class='student-class-button-pge'><input type='button' value='"+subjectname+"' class='StdFinishBtn-pge' name='start'></div></div>";
 jQuery('#student-clases-added').append(data);

p++;
 } 
 
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  

  }
 

  function getclases()
  {




var  userid = localStorage.getItem('loginurid');
if(userid==null)
{
window.location.href = "index.html";

}


 // alert(userid);
  //alert('get classes');
 var task = "getclasses";
  var userid = userid;

  var formData = {
   task: task,
   userid: userid,
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
    
    //alert("response");


  var obj = jQuery.parseJSON( response );

//for()
  var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 

len = arr.length;

console.log(len) //2*/
 //divdata="";
  jQuery('#student-clases-added').html('');
  var p=1;
  for(i=1; i<=len;i++)
  {

var getstringify = JSON.stringify(obj[i]);
console.log(getstringify);
var objs = jQuery.parseJSON( getstringify );
var id = objs.id;
var asset_id = objs.asset_id;
var subjectname = objs.subjectname;
var collegeId7 = objs.collegeId;

 localStorage.setItem('collabc' ,collegeId7);
//alert(p);
 data = "<div class='student-clases-added-lists'><div onclick='addclass("+id+");' ford='"+p+"' class='student-class-button-pge'><input type='button' value='"+subjectname+"' class='StdFinishBtn-pge' name='start'></div></div>";
 jQuery('#student-clases-added').append(data);

p++;
 } 
 
     jQuery(".search-post-append").after("<div class='back10'  onclick='history.back();'>Back</div>");
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  

  }






















    function addclass(id)
  {
    //alert(id);
jQuery('.back,.back3').hide();
   //ajax hit question save value 
 var task ='matchclass';
var matchclasses = id;
 

 var formData = {
task: task,

matchclasses: matchclasses,

 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {
      
   //alert(response);



var obj = jQuery.parseJSON( response );
//var a=response.crntals;
var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 

lend = arr.length;
//console.log(lend) //2*/

  jQuery("#student-class-pge").html('');
 
for(j=1;j<=lend;j++)
{
 
 // alert(j);
 var getstringify = JSON.stringify(obj[j]);
//console.log(getstringify);
var objss = jQuery.parseJSON( getstringify );
//console.log(objss);
var id = objss.id;
var subject_id = objss.subject_id;
var classnames = objss.classname; 
console.log(classnames);
/*var classnames = objss.classname; */
var ctrlsf = objss.ctrls; 
var crntals = objss.crntals;

 //alert(crntals);
 if(ctrlsf){
  //alert(ctrlsf);
localStorage.setItem('ctrlsfs',ctrlsf); 
  var t="<div class='math-button-cls'><input type='button' name='math' id='mathbtn-cls' value='"+ctrlsf+"'></div></div>";
  if(!classnames){
    classnames = "Result Not Found";   
  }
 }
 else
 {
  var t="";
 }
 data = "<div class='class-title_"+j+"'>"+t+"<div class='student-class-page2-cls'><!--p class='class_page2-cls'><a onclick='geteacher("+id+");'> "+id+" </a></p--><p class='class_page2-cls-subjct'><a onclick='geteacher("+id+","+matchclasses+");'>"+classnames+"</a></p></div>";
 jQuery('#student-class-pge').append(data);
 

}
 jQuery(".search-post-append").after("<div class='back2'><a href='student-classes-page.html'>Back</a></div>");

     //alert('successfully');

    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 
   
  }

  /*  classs map page  */
function geteacher1(geteacher,csidww)
 {
 // jQuery('#possible_'+csid).animate({scrollTop:0}, 'slow');




jQuery('.back,.back2,.backa,.back4,.backa6,.back10').hide();
  var task = "bestmatching";
  var geteacher = geteacher;
  var userid =localStorage.getItem('loginurid');

  var formData = {
  task: task,
  geteacher: geteacher,
  useridpending:userid,

  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
  success: function(responsesew) {
    //alert(responses);
     var objb = jQuery.parseJSON( responsesew );
    // console.log(responsesew);
    //var a=response.crntals;
    var arr = [], objb;

    for(key in objb) {
        arr.push(key);
    } 
    lends = arr.length;
    var sss=responsesew;
    console.log(lends) //2*/
    jQuery('#student-class-pge').html('');
    jQuery('.math-button-cls').html('');


    for(r=1;r<=lends;r++)
    {

     var getstringify = JSON.stringify(objb[r]);
    //console.log(getstringify);

    var objss = jQuery.parseJSON( getstringify );
   
    var usridp=objss.usrid;
    var usernamep=objss.username;
    var avatarp=objss.avatar;
    var auditoryp=objss.auditory;
    var visualp=objss.visual;
    var kinestheticp=objss.kinesthetic;
    var textualp=objss.textual;
    var img='http://bahuka.com/home/'+avatarp;

    if(r<2)
    {best="<p>Best Match</p>";}
    else
    {best="";}
    //alert(avatarp);
     if(avatarp==""|| avatarp==null)
    {
      var imgd ="http://bahuka.com/home/images/no-image-found.png";
    img=imgd; 

    }
      //console.log(lends);
     
    //alert(usernamep);

    var url="http://bahuka.com/home/images";

    datagu = "<div class='best-teacher-match-found' id="+usridp+"><div class='best-match-page'><div class='best-match-pro'><div class='best-tchr-image'><img onclick=viewprfl("+usridp+") src='"+img+"'></div><!--p onclick=viewprfl("+usridp+")>view prifile</p--><div class='best-pst-crt'>"+best+"</div></div><div class='best-match-text'><div id='chartContainer_"+r+"' class='containdercss'></div>  </div></div><div class='bottom-colm'><div class='thr-nme-best'><p>"+usernamep+"</p><p class='professercls'>Professor</p></div><div class='best-match-classes-div'><div class='view-detail-thr'><p onclick='detailteacherpage("+usridp+");'> Classes </p></div></div></div><div class='line-end'></div></div>";


    jQuery('#student-class-pge').append(datagu);

  /*  chart container start */
   //var obj = jQuery.parseJSON( localStoragegraphid); 

    var chart = new CanvasJS.Chart("chartContainer_"+r,
    {
       // title:{
          //  text: "Top Categories of New Year's Resolution"
       // },
        //exportFileName: "Pie Chart",
        //exportEnabled: true,
            //    animationEnabled: true,
       // legend:{
            //verticalAlign: "bottom",
            //horizontalAlign: "center"
      //  },
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",

            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditoryp, legendText: "", label: "" },
                {  y: visualp, legendText: "", label: "" },
                {  y: kinestheticp, legendText: "", label: "" },
                {  y: textualp, legendText: "", label: ""}
               
            ]
    }
    ]
    });
    chart.render();


//alert(id);

  }// end of for loop
    var i = 1;

   jQuery.each(objb, function(key, val) {
    var len = val.length;
    var useriddd =localStorage.getItem('loginurid');
    if (len == undefined ||len == null || len == "") {      
    }
    else {
         var datadlsdd="";
         var datagu2 ="";
         var data1="";
         var seats1="";
         var avatarpending ="http://bahuka.com/home/images/avtar4.png";
         var imgddw ="http://bahuka.com/home/images/pending2.png";
var ca="";
         
         jQuery.each(val, function(key, res) {


          var json=jQuery.parseJSON( JSON.stringify(res) );

          var jasid=json.jasid;
          var csid=json.id;
          var imagepending=json.img;
          var seatsw=json.seats;
          var class_room=json.class_room;
          var startdate=json.startdate;
          var enddate=json.enddate;
          var starttime1=json.starttime;
          var endtime1=json.endtime;
          var class_days=json.class_days;
          var classcode=json.classcode;
            var checked=json.checked;

       var starm=json.startdatem; 
      var  stard=json.startdated; 
      var  enddatem=json.enddatem;
      var enddated=json.enddated;
var open=json.open;
var taken=json.taken;

          //var open=json.open;
          //var taken=json.taken;

          if(checked){

 if(jasid==null){

                          tt="";
                        }
else{
             tt="<input type='checkbox'  value='"+csid+"' id='class_id"+csid+"'  name='class_id"+csid+"' class='class_id123' onclick='addpendingcs("+csid+","+useriddd+");'  checked>";
           }
          }
          else{
             if(jasid==null){

                          tt="";
                                  }
                           else{
              tt="<input type='checkbox'  value='"+csid+"'  id='class_id"+csid+"' name='class_id"+csid+"' class='class_id123' onclick='addpendingcs("+csid+","+useriddd+");'>";
            }
          }
          seats1="<p onclick=showme("+i+");>Classes </p>";


  // alert(ca);
data1="<div class='best-teacher-match-found' id='possible_"+csid+"' ><div class='tch_profile"+i+" profile1'><div class='main-possible-cls'><div class='tch_image'><img src='"+avatarpending+"'id='tch_profilepic'></div><div class='tch_university'><img src='"+imgddw+"'></div><div class='res_pro_title'><p onclick='possible("+csid+","+useriddd+","+geteacher+")'>Possible Professors</p></div></div><div class='res_professors'><div class='res_pro_img1'> <ul id='"+i+"' class='ul'></ul> </div></div></div><div id='pending"+i+"' class='pending-classes'></div><div class='pending-end' id='pending-en1"+i+"' style='overflow: hidden; display: inline; width: 100%; float: left; margin: 0% 0px 4%; padding: 0px 0px 4%;'><div class='arrow-divc'><button onclick='hideclassesDivjas("+i+");'><img src='img/testQAarrowtop.png'></button></div></div><div class='line-end'></div></div>";

   
          datadlsdd = "<div class='line-endd'></div><div class='class_divds' ><div class='detailspge'></div><div class='tecr-date-time-ap'><div class='class_id'>"+tt+"</div><div class='datetme-app'><p id='dte'><b id='clssme'>Dates: "+starm+" "+stard+" - "+enddatem+" "+enddated+"</b></p><p><b id='clssme'>Days:</b>"+class_days+"</p><p><b id='clssme'>Time:</b> "+starttime1+" - "+endtime1+"</p><p><b id='clssme'>Room:</b> "+class_room+"</p><p><b id='clssme'>CRN:</b><b id='clssme'> "+classcode+"</b></p><p><b id='clssme'>Seats:</b> <b id='steopn'>"+seatsw+"</b></p></div></div></div>";



            var pimg='http://bahuka.com/home/'+imagepending;
            if(imagepending == ""||imagepending ==null)
              {
               
              var imgdd ='http://bahuka.com/home/images/no-image-found.png';
              pimg = imgdd;
              }
            //alert(i+ " => " + JSON.stringify(res));

if(jasid==null){

datagu2="";
}else{

            datagu2 += "<li><p class='pro_img'><img src='"+pimg+"'></p></li>";
      }
        });

      }

        jQuery('#student-class-pge').append(data1);

        jQuery(datagu2).appendTo("#"+i);
        jQuery(seats1).appendTo('#pending'+i);
        jQuery('#pending-en1'+i).append(datadlsdd);   


          
        //jQuery(".tch_profile"+i).append(datagu2);
      i++;

   


    });

jQuery('.line-end').css("overflow","hidden");
 jQuery('html, body').animate({
        scrollTop: jQuery("#possible_"+csidww).offset().top
    }, 0);
    var  userid = localStorage.getItem('loginurid');
    fnsh="<div class='techer_listpage'><input type='button' name='start'   onclick='Finishbtn1("+userid+");' class='StdFinishBtn-pge' value='Finish'></div>";
    jQuery("#student-class-pge").append(fnsh);
   // alert("successfully ajax work");
//jQuery(".search-post-append").after("<div class='back3' onclick='addclass(" +geteacher+")'>Back</a></div>");
    },
    error: function () { 
      //alert("Error");
    }
  }); 
 

 }




/*for getting teacher*/
 function geteacher(geteacher,matchclasses)
 {

jQuery('.back,.back2,.backa,.back4,.backa6,.back10').hide();
jQuery('.back3 :nth-child(1)').show();
  var task = "bestmatching";
  var geteacher = geteacher;
  var userid =localStorage.getItem('loginurid');

  var formData = {
  task: task,
  geteacher: geteacher,
  useridpending:userid,

  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
  success: function(responsesew) {
    //alert(responses);
     var objb = jQuery.parseJSON( responsesew );
    // console.log(responsesew);
    //var a=response.crntals;
    var arr = [], objb;

    for(key in objb) {
        arr.push(key);
    } 
    lends = arr.length;
    var sss=responsesew;
    console.log(lends) //2*/
    jQuery('#student-class-pge').html('');
    jQuery('.math-button-cls').html('');
if(lends>0)
{
    for(r=1;r<=lends;r++)
    {

     var getstringify = JSON.stringify(objb[r]);
    //console.log(getstringify);

    var objss = jQuery.parseJSON( getstringify );
   
    var usridp=objss.usrid;
   
    var usernamep=objss.username;
    var avatarp=objss.avatar;
    var auditoryp=objss.auditory;
    var visualp=objss.visual;
    var kinestheticp=objss.kinesthetic;
    var textualp=objss.textual;
    var img='http://bahuka.com/home/'+avatarp;

    if(r<2)
    {best="<p>Best Match</p>";}
    else
    {best="";}
    //alert(avatarp);
     if(avatarp==""||avatarp==null)
    {
      var imgd ="http://bahuka.com/home/images/no-image-found.png";
    img=imgd; 

    }
      //console.log(lends);
     
    //alert(usernamep);

    var url="http://bahuka.com/home/images";
if(usernamep!=null){
    datagu = "<div class='best-teacher-match-found' id="+usridp+"><div class='best-match-page'><div class='best-match-pro'><div class='best-tchr-image'><img onclick=viewprfl2("+usridp+","+geteacher+","+matchclasses+") src='"+img+"'></div><!--p onclick=viewprfl("+usridp+")>view prifile</p--><div class='best-pst-crt'>"+best+"</div></div><div class='best-match-text'><div id='chartContainer_"+r+"' class='containdercss'></div>  </div></div><div class='bottom-colm'><div class='thr-nme-best'><p>"+usernamep+"</p><p class='professercls'>Professor</p></div><div class='best-match-classes-div'><div class='view-detail-thr'><p onclick='detailteacherpage("+usridp+","+geteacher+");'> Classes </p></div></div></div><div class='line-end'></div></div>";


    jQuery('#student-class-pge').append(datagu);
}
  /*  chart container start */
   //var obj = jQuery.parseJSON( localStoragegraphid); 
if(auditoryp){
    var chart = new CanvasJS.Chart("chartContainer_"+r,
    {
       // title:{
          //  text: "Top Categories of New Year's Resolution"
       // },
        //exportFileName: "Pie Chart",
        //exportEnabled: true,
            //    animationEnabled: true,
       // legend:{
            //verticalAlign: "bottom",
            //horizontalAlign: "center"
      //  },
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",

            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditoryp, legendText: "", label: "" },
                {  y: visualp, legendText: "", label: "" },
                {  y: kinestheticp, legendText: "", label: "" },
                {  y: textualp, legendText: "", label: ""}
               
            ]
    }
    ]
    });
    chart.render();
}

//alert(id);

  }// end of for loop
    var i = 1;

   jQuery.each(objb, function(key, val) {
    var len = val.length;
    var useriddd =localStorage.getItem('loginurid');
    if (len == undefined ||len == null || len == "") {      
    }
    else {
         var datadlsdd="";
         var datagu2 ="";
         var data1="";
         var seats1="";
         var avatarpending ="http://bahuka.com/home/images/avtar4.png";
         var imgddw ="http://bahuka.com/home/images/pending2.png";
var ca="";
         
         jQuery.each(val, function(key, res) {


          var json=jQuery.parseJSON( JSON.stringify(res) );

          var jasid=json.jasid;
          var csid=json.id;
          var imagepending=json.img;
          var seatsw=json.seats;
          var class_room=json.class_room;
          var startdate=json.startdate;
          var enddate=json.enddate;
          var starttime1=json.starttime;
          var endtime1=json.endtime;
          var class_days=json.class_days;
          var classcode=json.classcode;
            var checked=json.checked;

       var starm=json.startdatem; 
      var  stard=json.startdated; 
      var  enddatem=json.enddatem;
      var enddated=json.enddated;
var  open=json.open;
      var taken=json.taken;


          //var open=json.open;
          //var taken=json.taken;

          if(checked){

 if(jasid==null){

                          tt="";
                        }
else{
             tt="<input type='checkbox'  value='"+csid+"' id='class_id"+csid+"'  name='class_id"+csid+"' class='class_id123' onclick='addpendingcs("+csid+","+useriddd+");'  checked>";
           }
          }
          else{
             if(jasid==null){

                          tt="";
                                  }
                           else{
              tt="<input type='checkbox'  value='"+csid+"'  id='class_id"+csid+"' name='class_id"+csid+"' class='class_id123' onclick='addpendingcs("+csid+","+useriddd+");'>";
            }
          }
          seats1="<p onclick=showme("+i+");>Classes </p>";


  // alert(ca);
data1="<div class='best-teacher-match-found' id='possible_"+csid+"' ><div class='tch_profile"+i+" profile1'><div class='main-possible-cls'><div class='tch_image'><img src='"+avatarpending+"'id='tch_profilepic'></div><div class='tch_university'><img src='"+imgddw+"'></div><div class='res_pro_title'><p onclick='possible("+csid+","+useriddd+","+geteacher+")'>Possible Professors</p></div></div><div class='res_professors'><div class='res_pro_img1'> <ul id='"+i+"' class='ul'></ul> </div></div></div><div id='pending"+i+"' class='pending-classes'></div><div class='pending-end' id='pending-en1"+i+"' style=overflow:hidden;><div class='arrow-divc'><button onclick='hideclassesDivjas("+i+");'><img src='img/testQAarrowtop.png'></button></div></div><div class='line-end'></div></div>";

   
          datadlsdd = "<div class='line-endd'></div><div class='class_divds' ><div class='detailspge'></div><div class='tecr-date-time-ap'><div class='class_id'>"+tt+"</div><div class='datetme-app'><p id='dte'><b id='clssme'>Dates: "+starm+" "+stard+" - "+enddatem+" "+enddated+"</b></p><p><b id='clssme'>Days:</b>"+class_days+"</p><p><b id='clssme'>Time:</b> "+starttime1+" - "+endtime1+"</p><p><b id='clssme'>Room:</b> "+class_room+"</p><p><b id='clssme'>CRN:</b><b id='clssme'> "+classcode+"</b></p><p><b id='clssme'>Seats:</b> <b id='steopn'>"+seatsw+ " </b><b id='clssme'>Taken:</b> <b id='steopn'>"+taken+"</b></p><p><b id='clssme'>Open:</b> <b id='steopn'>"+open+"</b></p></div></div></div>";



            var pimg='http://bahuka.com/home/'+imagepending;
            if(imagepending == ""||imagepending ==null)
              {
               
              var imgdd ='http://bahuka.com/home/images/no-image-found.png';
              pimg = imgdd;
              }
            //alert(i+ " => " + JSON.stringify(res));

if(jasid==null){

datagu2="";
}else{

            datagu2 += "<li><p class='pro_img'><img src='"+pimg+"'></p></li>";
      }
        });

      }

        jQuery('#student-class-pge').append(data1);

        jQuery(datagu2).appendTo("#"+i);
        jQuery(seats1).appendTo('#pending'+i);
        jQuery('#pending-en1'+i).append(datadlsdd);     
        //jQuery(".tch_profile"+i).append(datagu2);
      i++;

    
    });
}
else{

fnsha="<div class='noprofessor'>No Professors</div>";
    jQuery("#student-class-pge").append(fnsha);

}



    var  userid = localStorage.getItem('loginurid');
    fnsh="<div class='techer_listpage'><input type='button' name='start'   onclick='Finishbtn1("+userid+");' class='StdFinishBtn-pge' value='Finish'></div>";
    jQuery("#student-class-pge").append(fnsh);
  
jQuery(".search-post-append").after("<div class='back3' onclick='addclass(" +matchclasses+")'>Back</a></div>");
     
   // alert("successfully ajax work");

    },
    error: function () { 
      //alert("Error");
    }
  }); 
 
}

/***************** Add pending teachers************/

function addpendingcs(csid,useriddd){


if(jQuery("#class_id"+csid+"").prop("checked") == true)
{
 //var dd= jQuery("#chkbox-app"+id2+"").attr('attr');
 //alert(dd);
//alert("Checkbox is checked.");

var checkedvaluepending="1";
//alert(checkedvalue);


}

else if(jQuery("#class_id"+csid+"").prop("checked") == false){
///alert("Checkbox is unchecked.");
//alert('hello');
 
  //var ddd= jQuery("#chkbox-app"+id2+"").attr('attr');
  var checkedvaluepending="0";
  //alert(checkedvalue);
 //alert(dd);

}
var task ='chkthrpending';
var csidpending = csid;
var checkdlgnpending = useriddd;
var formData = {
task: task,
csidpending:csidpending,
checkdlgnpending:checkdlgnpending,
checkedvaluepending:checkedvaluepending,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesd) 
    {
      

    // alert(response);

var objsps = jQuery.parseJSON( responsesd );
var getse= JSON.stringify(objsps[1]);
 var objspsd = jQuery.parseJSON( getse );
var ad=objspsd.checked;


 
    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 
}
function showme(i)
{
  //alert(i);
  jQuery('.pending-end').hide(); 
  jQuery( "#pending-en1"+i+"" ).css("display", "inline");   
    

}
/*   classs page map end */


/* 
*   get pending Techers List
*/
function getpendngTchrlist(){
  alert("JASS");
}

/***************** possible teachers************/
 
 function possible(geteacher1,loginuser,geteacher)
 {


   jQuery('.back,.backa,.back2,.back3,.back4,.back5').hide();
  var task = "pendingteacher";
  var geteacher1 = geteacher1;
    var subject_id = subject_id;
  var formData = {
  task: task,
  geteacher1: geteacher1,
  loginuserpending: loginuser,
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
  success: function(responsesew) {
  var objb = jQuery.parseJSON( responsesew );
    var arr = [], objb;

    for(key in objb) {
        arr.push(key);
    } 
    lends = arr.length;


 if(lends==0)
    {
      jQuery('#student-class-pge').html('');
       datad = "<div class='student-class-button-pge'><p>No Possible teacher found</p></div>";
     
     jQuery('#student-class-pge').append(datad);
      //alert('ddd');
      return false;

    }


    var sss=responsesew;
    console.log(lends) //2*/
    jQuery('#student-class-pge').html('');
    jQuery('.math-button-cls').html('');

jQuery('#student-class-pge').append("<div class='possible'><div class='possible-image'><img src='img/arv1.png'></div><div class='possible-nme-best'><p>Possible Professors</p><input type='button' name='Back' value='Back' onclick='geteacher1("+geteacher+","+geteacher1+");'></div><div class='possible-center'><p>Add your favorite to your teacher list</p></div></div>");
    for(r=1;r<=lends;r++)
    {

     var getstringify = JSON.stringify(objb[r]);
    //console.log(getstringify);

    var objss = jQuery.parseJSON( getstringify );
   var usridp=objss.userid;
    var classId=objss.classId;
    var usernamep=objss.username;
    var avatarp=objss.img;
    var auditoryp=objss.auditory;
    var visualp=objss.visual;
    var kinestheticp=objss.kinesthetic;
    var textualp=objss.textual;
    var checkboxpending=objss.checkboxpending;
    var img='http://bahuka.com/home/'+avatarp;
     if(avatarp==""||avatarp==null)
    {
      var imgd ="http://bahuka.com/home/images/no-image-found.png";
    img=imgd; 

    }
    if(checkboxpending>0){
   var checked="";

     checked="<input class='posible_teacher'  id='posible_teacher_"+geteacher1+"' type='checkbox' name='posible_teacher_"+geteacher1+"' value='"+usridp+"'  data-id='"+usridp+"' checked >";
  }
  else{
 checked="<input class='posible_teacher'  id='posible_teacher_"+geteacher1+"' type='checkbox' name='posible_teacher_"+geteacher1+"' value='"+usridp+"' data-id='"+usridp+"'>";
}
    datagu = "<div class='best-teacher-match-found  possiblecheck' id="+usridp+"><div class='best-match-page'><div class='best-match-pro'><div class='tecr-date-time-ap'>"+checked+"</div><div class='best-tchr-image'><img onclick=viewprfl("+usridp+") src='"+img+"'></div><!--p onclick=viewprfl("+usridp+")>view prifile</p--><div class='best-pst-crt'>"+best+"</div></div><div class='best-match-text'><div id='chartContainer_"+r+"' class='containdercss'></div>  </div></div><div class='bottom-colm'><div class='thr-nme-best'><p>"+usernamep+"</p><p class='professercls'>Professor</p></div><div class='best-match-classes-div'></div></div><div class='line-end'></div></div>";


    jQuery('#student-class-pge').append(datagu);
    var chart = new CanvasJS.Chart("chartContainer_"+r,
    {
       // title:{
          //  text: "Top Categories of New Year's Resolution"
       // },
        //exportFileName: "Pie Chart",
        //exportEnabled: true,
            //    animationEnabled: true,
       // legend:{
            //verticalAlign: "bottom",
            //horizontalAlign: "center"
      //  },
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",

            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditoryp, legendText: "", label: "" },
                {  y: visualp, legendText: "", label: "" },
                {  y: kinestheticp, legendText: "", label: "" },
                {  y: textualp, legendText: "", label: ""}
               
            ]
    }
    ]
    });
    chart.render();


//alert(id);

  }// end of for loop
var dataadd="";
          dataadd="<div class='tch_add_tchr'><a data-id="+geteacher1+" class='addpendingteacher' id='tch_add'>Add Teacher</a></div>";

jQuery('#student-class-pge').append(dataadd);

var $j = jQuery.noConflict();
$j(".addpendingteacher").click(function () 
          
      {


      var classID = geteacher1;    
        
           
       var teacherArr = [];
       
       $j('#posible_teacher_'+classID+':checked').each(function () 
       {
       
         teacherArr.push($j(this).val()); 
       
       });  

 var task = "addpendingteacher";
  var classschdeuleid = classID;
    var teachers = teacherArr;
  var formData = {
  task: task,
  classschdeuleid: classschdeuleid,
  teachers: teachers,
    scheduleuser: loginuser,
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
  success: function(responsesew) {
var dataadp="";
dataadp="<div class='possible-nme-best1'>Teacher has been Added successfully</div>";
jQuery('.possible-center').after(dataadp);
  },

 error: function () 
    { 
     // alert("Error");
    }

         });  

});










   },
    error: function () 
    { 
     // alert("Error");
    }
  }); 
}


/* popup code end */
function studenttestdd()
{
 //alert('hello');

 var task ='questionload';
//var matchclasses = id;
 

 var formData = {
  task: task,

//matchclasses: matchclasses,

 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsez) 
    {
      jQuery(".main-question").html("");
     // alert('dd');
   // alert(responsez);
 
    if (window.location.href.indexOf('reload')==-1) {
      //alert('dd');
         window.location.replace(window.location.href+'?reload');
    }
 
     var objq = jQuery.parseJSON( responsez );
    //var a=response.crntals;
    var arr = [], objq;

    for(key in objq) {
        arr.push(key);
    } 

    lendss = arr.length;
    //alert(lendss);
    console.log(lendss); //2*/
    var value="1";
     
    for(a=1;a<=lendss;a++)
    {
       var getstringifys = JSON.stringify(objq[a]);
      // alert(getstringifys);
     
    //console.log(getstringify);
    var objqs = jQuery.parseJSON( getstringifys );


    var idx=objqs.id;
    var question= objqs.question;
    var option1=objqs.option1;
    var option2=objqs.option2;
    var option3=objqs.option3;
    var option4=objqs.option4; 

    var posa=objqs.posa; 
    var posb=objqs.posb; 
    var posc=objqs.posc; 
    var posd=objqs.posd; 


     
     data="<div class='testone"+a+"'><div qustnpos='01' class='testone01'><div class='heading'><h1 class='stendent-test1-taxt'>'"+question+"'</h1></div><div class='student-test-radio'><div class='label-center'><div class='test"+a+"'><input type='radio' value='"+posa+"' name='test"+a+"'><p class='test"+a+"req'>"+option1+"</p></div><div class='test"+a+"'><input type='radio' value='"+posb+"' name='test"+a+"'><p class='test"+a+"req'>"+option2+"</p></div><div class='test"+a+"'> <input type='radio' value='"+posc+"' name='test"+a+"'><p class='test"+a+"req'>"+option3+"</p></div><div class='test"+a+"'> <input type='radio' value='"+posd+"' name='test"+a+"'><p class='test"+a+"req'>"+option4+"</p></div></div></div></div><div class='sutdent-test2-arrow'><div class='stud-tst-right2-arow' id='testone10pre' onclick='paggingpre("+a+")'><a href='#'><img src='img/testQAarrowleft.png'></a></div><div class='pagcntad'><p>"+a+"  of  12</p></div><div class='stud-tst-left2-arow' id='testone10nxt' onclick='pagging("+a+")'><a href='#'><img src='img/testQAarrowright.png'></a></div></div><div style='display:none' class='quertion-finish"+a+"'><a onclick='questionsave("+a+");' href='#'>Finish</a></div></div>";

    jQuery(".main-question").append(data);
    value++;
     
    }

    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 



}


function pagging(id)
{

 // alert(id);
var radioValue = jQuery(".test1 :checked").val();
//alert(radioValue);
if(radioValue)
{
 //alert('radioValue');
  if(id==1)
{

  //alert("hi");
jQuery(".testone1").css("display","none");
jQuery(".testone2").css("display","block"); 
jQuery("#qst1").hide();
jQuery("#qst2").show();
return false;
} 

}
else
{
//alert('hi');
   jQuery(".test1req").focus().val(''); 
jQuery(".test1req").toggleClass('red'); 

return false;
}


var testb2 = jQuery(".test2 :checked").val();
if(testb2)
{
if(id==2)
{
jQuery(".testone2").css("display","none");
jQuery(".testone3").css("display","block"); 
jQuery("#qst2").hide();
jQuery("#qst3").show();
return false;
}
}
else
{

jQuery(".test2req").focus().val(''); 
jQuery(".test2req").toggleClass('red'); 
return false;
}
var testc3 = jQuery(".test3 :checked").val();
if(testc3)
{
if(id==3)
{
 jQuery(".testone3").css("display","none");
jQuery(".testone4").css("display","block");
jQuery("#qst3").hide();
jQuery("#qst4").show();  
return false;
}
}
else
{
 jQuery(".test3req").focus().val(''); 
jQuery(".test3req").toggleClass('red'); 
return false;
}

var testd4 = jQuery(".test4 :checked").val();

if(testd4)
{
if(id==4)
{
 jQuery(".testone4").css("display","none");
jQuery(".testone5").css("display","block"); 
jQuery("#qst4").hide();
jQuery("#qst5").show(); 
return false; 
}
}
else
{
 jQuery(".test4req").focus().val(''); 
jQuery(".test4req").toggleClass('red');
return false; 
}

var teste5 = jQuery(".test5 :checked").val();

if(teste5)
{
if(id==5)
{
 jQuery(".testone5").css("display","none");
jQuery(".testone6").css("display","block"); 
jQuery("#qst5").hide();
jQuery("#qst6").show(); 
return false; 
}
}
else
{
  jQuery(".test5req").focus().val(''); 
jQuery(".test5req").toggleClass('red'); 
return false; 
}

var testf6 = jQuery(".test6 :checked").val();
if(testf6)
{
if(id==6)
{
 jQuery(".testone6").css("display","none");
jQuery(".testone7").css("display","block"); 

jQuery("#qst6").hide();
jQuery("#qst7").show();
return false; 
}
}
else
{
  jQuery(".test6req").focus().val(''); 
jQuery(".test6req").toggleClass('red');  
return false;
}


var testg7 = jQuery(".test7 :checked").val();

if(testg7)
{
if(id==7)
{
 jQuery(".testone7").css("display","none");
jQuery(".testone8").css("display","block"); 
jQuery("#qst7").hide();
jQuery("#qst8").show();
return false; 
}
}
else
{
  jQuery(".test7req").focus().val(''); 
jQuery(".test7req").toggleClass('red');
return false;

}

var testh8 = jQuery(".test8 :checked").val();
if(testh8)
{
if(id==8)
{
 jQuery(".testone8").css("display","none");
jQuery(".testone9").css("display","block"); 
jQuery("#qst8").hide();
jQuery("#qst9").show();
return false; 
}
}
else
{
   jQuery(".test8req").focus().val(''); 
jQuery(".test8req").toggleClass('red');
return false;
}


var testi9 = jQuery(".test9 :checked").val();

if(testi9)
{
if(id==9)
{
 jQuery(".testone9").css("display","none");
jQuery(".testone10").css("display","block"); 
jQuery("#qst9").hide();
jQuery("#qst10").show(); 
return false;
}
}
else
{
    jQuery(".test9req").focus().val(''); 
jQuery(".test9req").toggleClass('red');
return false;

}


var testj10 = jQuery(".test10 :checked").val();

if(testj10)
{
if(id==10)
{
jQuery(".testone10").css("display","none");
jQuery(".testone11").css("display","block"); 
jQuery("#qst10").hide();
jQuery("#qst11").show();
return false;  
}
}
else
{
     jQuery(".test10req").focus().val(''); 
jQuery(".test10req").toggleClass('red'); 
return false;
}



var testj11 = jQuery(".test11 :checked").val();
if(testj11)
{

if(id==11)
{
jQuery(".testone11").css("display","none");
jQuery(".testone12").css("display","block");
jQuery("#qst11").hide();
jQuery("#qst12").show(); 
return false;  
}
}
else
{
     jQuery(".test11req").focus().val(''); 
jQuery(".test11req").toggleClass('red'); 
return false;

}


}





function paggingpre(id)
{
//alert(id);
 
if(id==2)
{
  jQuery(".testone2").css("display","none");
jQuery(".testone1").css("display","block"); 
  jQuery("#qst2").hide();
jQuery("#qst1").show(); 

}
if(id==3)
{
  jQuery(".testone3").css("display","none");
jQuery(".testone2").css("display","block");  
 jQuery("#qst3").hide();
jQuery("#qst2").show();  
}
if(id==4)
{
  jQuery(".testone4").css("display","none");
jQuery(".testone3").css("display","block");  
 jQuery("#qst4").hide();
jQuery("#qst3").show();  
}
if(id==5)
{
  jQuery(".testone5").css("display","none");
jQuery(".testone4").css("display","block");  
 jQuery("#qst5").hide();
jQuery("#qst4").show();  
}
if(id==6)
{
  jQuery(".testone6").css("display","none");
jQuery(".testone5").css("display","block"); 
 jQuery("#qst6").hide();
jQuery("#qst5").show();   
}
if(id==7)
{
  jQuery(".testone7").css("display","none");
jQuery(".testone6").css("display","block"); 
 jQuery("#qst7").hide();
jQuery("#qst6").show();   
}
if(id==8)
{
 jQuery(".testone8").css("display","none");
jQuery(".testone7").css("display","block");  
 jQuery("#qst8").hide();
jQuery("#qst7").show();   
}
if(id==9)
{
  jQuery(".testone9").css("display","none");
jQuery(".testone8").css("display","block");   
 jQuery("#qst9").hide();
jQuery("#qst8").show(); 
}
if(id==10)
{
  jQuery(".testone10").css("display","none");
jQuery(".testone9").css("display","block");   
 jQuery("#qst10").hide();
jQuery("#qst9").show(); 
}
if(id==11)
{
 jQuery(".testone11").css("display","none");
jQuery(".testone10").css("display","block");  
 jQuery("#qst11").hide();
jQuery("#qst10").show();   
}
if(id==12)
{
  jQuery(".testone12").css("display","none");
jQuery(".testone11").css("display","block"); 
 jQuery("#qst12").hide();
jQuery("#qst11").show();   
}

}


/* show hide question */
function questionsave(id)
{

 var  userid = localStorage.getItem('loginurid');
  //alert(id);

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
questionid:  userid,
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


/*
var myVar = setInterval(myTimer, 1700);
function myTimer() {
window.location.href="student-result-page.html";
}*/
window.location.href="student-result-page.html";
     //var graphgernate="successfullyd";


    },
    error: function () 
    { 
     // alert("Error");
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

  //alert('no set cache');
}

  
}




/*   classes search  */
/**************************************/
function cllssrch()
{
jQuery("#clsssrch").keyup(function(){
 var srchkeyidd = jQuery(this).val();
 var  userid = localStorage.getItem('loginurid');
//alert(srchkeyidd);
 var task ='getclasses';
 var srchkeyidval = srchkeyidd;
 var useridval = userid;
 var formData = {
 task: task,
 srchkeyikey:srchkeyidval,
 userid: useridval,
 
};
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {
      

      //alert(response);
  var obj = jQuery.parseJSON( response );
 


    //for()
      var arr = [], obj;

    for(key in obj) {
        arr.push(key);
    } 

    len = arr.length;
     

    console.log(len) //2*/


    if(len==0)
    {
      jQuery('#student-clases-added').html('');
       datad = "<div class='student-class-button-pge'><p>No record found</p></div>";
     
     jQuery('#student-clases-added').append(datad);
      //alert('ddd');
      return false;

    }

      jQuery('#student-clases-added').html('');
      var p=1;
      for(i=1; i<=len;i++)
      {

    var getstringify = JSON.stringify(obj[i]);
    console.log(getstringify);
    var objs = jQuery.parseJSON( getstringify );
    var id = objs.id;
    var asset_id = objs.asset_id;
    var subjectname = objs.subjectname;
    var collegeId7 = objs.collegeId;
    //alert(p);

     
     data = "<div onclick='addclass("+id+");' ford='"+p+"' class='student-class-button-pge'><input type='button' value='"+subjectname+"' class='StdFinishBtn-pge' name='start'></div>";
     
     jQuery('#student-clases-added').append(data);

    p++;
     } 
    },
    error: function () 
    { 
   //   alert("Error");
    }
  });
 
 });
}



function detailpage(id)
{
//alert(id);
var checkedsess = localStorage.getItem('checkedsess');
var  useridlogin = localStorage.getItem('loginurid');
 //alert(checkedsess);
var usrdetail=id;
 
 var task = "getdetailpage";
  var usrdetaild = usrdetail;
  var checkedsess= checkedsess;
  var useridlogin=useridlogin;

  var formData = {
   task: task,
   usrdetail: usrdetaild,
   checkedsess: checkedsess,
  useridlogin: useridlogin,
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseze) { 
     //alert(responsesa);
     //console.log(responsesa);

   jQuery('#student-class-pge').html('');
 var objqe = jQuery.parseJSON( responseze );
//var a=response.crntals;
var arr = [], objqe;

for(key in objqe) {
    arr.push(key);
} 

lendsss = arr.length;
//alert(lendss);
console.log(lendsss); //2*/
tp=1;
for(q=1;q<=lendsss;q++)
{

 
    best="<p>Best Match</p>";
   
  //alert(response);
  //var ojtdetail = jQuery.parseJSON( response );
var objd = jQuery.parseJSON( responseze );
var getstringify = JSON.stringify(objd[q]);
var objd = jQuery.parseJSON( getstringify );

 // console.log(objd.username);
 // jQuery(".student-class-pge").html('');
thumb=objd.thumb;  
usrdetailp=objd.usrdetailp;  

usrname=objd.usrname; 
  localStorage.setItem('usridth',usrdetailp);
//console.log(usrname);
 
Auditory=objd.Auditory;  
Visual=objd.Visual; 
Kinesthetic=objd.Kinesthetic;  
Textual=objd.Textual; 


starm=objd.startdatem; 
stard=objd.startdated; 

enddatem=objd.enddatem;
enddated=objd.enddated;



starttime=objd.starttime;
endtime=objd.endtime;


class_days=objd.class_days;
class_room=objd.class_room;
classId=objd.classId;


classcode=objd.classcode;

seats=objd.seats;

open=objd.open;

taken=objd.taken;

usrdetailp=objd.usrdetailp;
clsids=objd.clsid;
checkedval=objd.checkedvaab;
checkedid=objd.checkedid;
///alert(checkedid);
localStorage.setItem('checkedidd',checkedid);
localStorage.setItem('oldvalue',checkedval);
 if(checkedval<1)
{
  checkedval='';
}
if(checkedid<1)
{
 checkedid=''; 
} 
//alert(checkedval);
/*arr = checkedval.split(',');
for(i=0; i < arr.length; i++)
{

    console.log(arr[i]);
}*/


 

var img='http://bahuka.com/home/'+thumb;
 if(thumb=="")
{
  var imgd ="http://bahuka.com/home/images/no-image-found.jpg";
img=imgd; 

}
 //console.log('first:'+starttime);

var url="http://bahuka.com/home/images";

if(q<2)
{

first="<div id='thr_service_page_dtl' class='best-match-page_"+tp+"'><div class='best-match-pro'><img src='"+img+"'><p onclick=viewprfl("+usrdetailp+")>view prifile</p></div><div class='best-match-text'><div id='chartContainer' class='containdercss'></div>  </div></div><div class='best-pst-crt'>"+best+"</div><div class='bottom-colm'><div class='thr-nme-best'><p>"+usrname+"</p><p class='professercls'>Professor</p></div><div class='view-detail-thr'><p>view Details</p></div></div>";

}
else
{
  first="";
}


//var checkedsess = localStorage.getItem('checkedsess');

//alert(checkedval);

var myFruitsArray = checkedval.split(',');
 //alert(myFruitsArray.toString());

/*var obj = {
  "16": "16",
  "32": "32"
};
jQuery.each( obj, function( key, value ) {
console.log(value);
  //alert( key + ": " + value );


});
*///var cars = ["Saab", "Volvo", "BMW"];

console.log(myFruitsArray);
console.log(clsids);
console.log(myFruitsArray.indexOf(clsids));
 if(myFruitsArray.indexOf(clsids) >= 0 ) 
{
console.log('hi');
tt="<input id='chkbox-app"+tp+"' type='checkbox' attr='"+tp+"' name='chkbox_"+tp+"' onclick='chkthr("+clsids+", "+tp+")' value='"+clsids+"' checked>";

}
else
 {
 console.log('hello');
 tt="<input id='chkbox-app"+tp+"' type='checkbox' attr='"+tp+"' name='chkbox_"+tp+"' onclick='chkthr("+clsids+", "+tp+")' value='"+clsids+"'>";
 
 }
 

datadls = ""+first+"<div class='detailspge'></div><div class='tecr-date-time-ap'>"+tt+"<div class='datetme-app'><p id='dte'><b id='clssme'>Dates: "+starm+" "+stard+" - "+enddatem+" "+enddated+"</b></p><p><b id='clssme'>Days:</b>"+class_days+"</p><p><b id='clssme'>Time:</b> "+starttime+" - "+endtime+"</p><p><b id='clssme'>Room:</b> "+class_room+"</p><p><b id='clssme'>CRN:</b><b id='clssme'> "+classcode+"</b></p><p><b id='clssme'>Seats:</b> <b id='steopn'>"+seats+"</b> <b id='clssme'> Taken:</b><b id='steopn'>"+taken+"</b><b id='clssme'> Open:</b><b id='steopn'>"+open+"</b></p></div></div>";

jQuery('#student-class-pge').append(datadls);  

    tp++; 
  }


    var chart = new CanvasJS.Chart("chartContainer",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 
 
//alert(username);
//datade = "nxcbxbc";
//jQuery(".best-match-page").append(datade);
//var obj = jQuery.parseJSON( response );

    },
    error: function () { 
     // alert("Error");
    }
  });

 
}

/* === Hide the dropdown classes Div === */
function hideclassesDiv(){
    jQuery( ".class_div" ).slideUp( "slow", function() {
    // Animation complete.
     });
    jQuery( ".line-end" ).css("overflow", "hidden");
    //jQuery(".class_div").hide('slow');
    //jQuery(".line-end").html('');
    jQuery('.arrow-div').html(''); 
}

function hideclassesDivjas(i){

  jQuery("#pending-en1"+i+"").css("display","none");
}

function detailteacherpage(id,classId)

{
//alert(id);
  jQuery('.line-end').html('');
  jQuery('.line-end').append("<div class='arrow-div' style='display:none;'><button onclick='hideclassesDiv();'><img src='img/testQAarrowtop.png'></button></div>");
  var checkedsess = localStorage.getItem('checkedsess');
  var  useridlogin = localStorage.getItem('loginurid');
 //alert(checkedsess);
  var usrdetail=id;
 
  var task = "getdetailpage";
  var usrdetaild = usrdetail;
  var checkedsess= checkedsess;
  var useridlogin=useridlogin;

  var formData = {
   task: task,
   usrdetail: usrdetaild,
   checkedsess: checkedsess,
    useridlogin: useridlogin,
    classId:classId
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseze) { 
    var objqe = jQuery.parseJSON( responseze );
    
    //var a=response.crntals;
    var arr = [], objqe;

    for(key in objqe) {
        arr.push(key);
    } 

    lendsss = arr.length;
    //alert(lendss);
    if(lendsss !== 0){
      console.log(lendsss); //2*/
      tp=1;
      for(q=1;q<=lendsss;q++)
      {
      var objd = jQuery.parseJSON( responseze );
      var getstringify = JSON.stringify(objd[q]);
      var objd = jQuery.parseJSON( getstringify );

    
     // jQuery(".student-class-pge").html(''); 
      usrdetailp=objd.usrdetailp;  

      usrname=objd.usrname; 
      localStorage.setItem('usridth',usrdetailp);
      //console.log(usrname);
       
      Auditory=objd.Auditory;  
      Visual=objd.Visual; 
      Kinesthetic=objd.Kinesthetic;  
      Textual=objd.Textual; 

      starm=objd.startdatem; 
      stard=objd.startdated; 

      enddatem=objd.enddatem;
      enddated=objd.enddated;

      starttime=objd.starttime;
      endtime=objd.endtime;

      class_days=objd.class_days;
      class_room=objd.class_room;
      classId=objd.classId;

      classcode=objd.classcode;

      seats=objd.seats;

      open=objd.open;

      taken=objd.taken;

      usrdetailp=objd.usrdetailp;
      clsids=objd.clsid;


      checkedval=objd.checkedvaab;
      checkedid=objd.checkedid;

      ///alert(checkedid);
      localStorage.setItem('checkedidd',checkedid);
      localStorage.setItem('oldvalue',checkedval);
       if(checkedval<1)
      {
        checkedval='';
      }
      if(checkedid<1)
      {
       checkedid=''; 
      } 
      //alert(checkedval);
      /*arr = checkedval.split(',');
      for(i=0; i < arr.length; i++)
      {

          console.log(arr[i]);
      }*/

      var myFruitsArray = checkedval.split(',');    
      console.log(myFruitsArray);
      console.log(clsids);
      console.log(myFruitsArray.indexOf(clsids));
       if(myFruitsArray.indexOf(clsids) >= 0 ) 
      {
      //console.log('hi');
      tt="<input id='chkbox-app"+tp+"' type='checkbox' attr='"+tp+"' name='chkbox_"+tp+"' onclick='chkthr("+clsids+", "+tp+")' value='"+clsids+"' checked>";

      }
      else
       {
       //console.log('hello');
       tt="<input id='chkbox-app"+tp+"' type='checkbox' attr='"+tp+"' name='chkbox_"+tp+"' onclick='chkthr("+clsids+", "+tp+")' value='"+clsids+"'>";
       
       }
       

      datadls = "<div class='class_div'><div class='detailspge'></div><div class='tecr-date-time-ap'>"+tt+"<div class='datetme-app'><p id='dte'><b id='clssme'>Dates: "+starm+" "+stard+" - "+enddatem+" "+enddated+"</b></p><p><b id='clssme'>Days:</b>"+class_days+"</p><p><b id='clssme'>Time:</b> "+starttime+" - "+endtime+"</p><p><b id='clssme'>Room:</b> "+class_room+"</p><p><b id='clssme'>CRN:</b><b id='clssme'> "+classcode+"</b></p><p><b id='clssme'>Seats:</b> <b id='steopn'>"+seats+"</b> <b id='clssme'> Taken:</b><b id='steopn'>"+taken+"</b><b id='clssme'> Open:</b><b id='steopn'>"+open+"</b></p></div></div></div>";

        jQuery('#student-class-pge #'+id+' .line-end').append(datadls);   

          tp++; 
      } 

      jQuery( ".line-end" ).css("overflow", "visible");   
      jQuery('#student-class-pge #'+id+' .arrow-div').show(); 
    }
    else{
      jQuery('#student-class-pge #'+id+' .line-end').append("<div class='class_div'><div class='classnotfoundiv'><p>No classes created yet</p></div></div>");  
      jQuery( ".line-end" ).css("overflow", "visible");  
      jQuery('#student-class-pge #'+id+' .arrow-div').show(); 
    }

    },
    error: function () { 
     // alert("Error");
    }
  });

 
}
/*clases search */
/**************************************/

function viewprfl(id)
{

userid=id ? id : localStorage.getItem('loginurid');
  var collabcclz = localStorage.getItem('collabc');
 var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      

    jQuery("#student-class-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;


if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
 like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
   if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } 
  if(cityreslts && statereslts && countryreslts ){
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


  tt="";
}
else{

 tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}
if(profilelike>0){

var span1="<img src='img/fb-new.png'  id='Liked' style='opacity:1' onclick='profilelikess("+userid+","+puserid+",this);'>";
}
else{

 span1="<img src='img/fb-new.png'  id='Like' style='opacity:0.30'  onclick='profilelikess("+userid+","+puserid+",this);'>";
}

if(puserid!=userid)
{

var data1="<div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div>";

}

else{



var data1="<div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event,"+'"reports"'+")'>Reports</a></li><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div>";
}




 first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'><p>"+username+"</p><span>"+st+", "+collegename+"</span></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'>"+data1+"<div class='about_center_div tabcontent' id='about' style='display:block;'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><!--span class='imgspans'><img src='img/fblike.png'></span><span class='blue-like2'>"+like+"</span--></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div><div id='reports' class='tabcontent'></div></div></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

    
    getgroups1(id);
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 



}
function viewprfl2(id,gete,matchclasses)
{
jQuery('.back,.back3').hide();
userid=id ? id : localStorage.getItem('loginurid');
  var collabcclz = localStorage.getItem('collabc');
 var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      

    jQuery("#student-class-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;
if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
 like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
   if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } 
  if(cityreslts && statereslts && countryreslts ){
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


  tt="<div class='profess_dtl_prf'><div class='left-user-img'><img src='http://bahuka.com/home/images/crying-user.png'></div><div class='right-user'><img src='http://bahuka.com/home/images/user-circle.png'><img src='http://bahuka.com/home/images/user-circle.png'><img src='http://bahuka.com/home/images/user-circle.png'></div></div>";
}
else{
tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}

if(profilelike>0){

var span1="<img src='img/fb-new.png'  id='Liked' style='opacity:1' onclick='profilelikess("+userid+","+puserid+",this);'>";
}
else{

 span1="<img src='img/fb-new.png'  id='Like' style='opacity:0.30'  onclick='profilelikess("+userid+","+puserid+",this);'>";
}

if(puserid!=userid)
{

var data1="<div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div>";

}

else{



var data1="<div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event,"+'"reports"'+")'>Reports</a></li><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div>";
}




 first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'><p>"+username+"</p><span>"+st+", "+collegename+"</span></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'>"+data1+"<div class='about_center_div tabcontent' id='about' style='display:block;'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><!--span class='imgspans'><img src='img/fblike.png'></span><span class='blue-like2'>"+like+"</span--></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div><div id='reports' class='tabcontent'></div></div></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

    
    getgroups1(id);


    jQuery(".search-post-append").after("<div class='back4' onclick='geteacher(" +gete+","+matchclasses+")'>Back</a></div>");
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 



}




function viewprfl1(id)
{

userid=id ? id : localStorage.getItem('loginurid');

  var collabcclz = localStorage.getItem('collabc');
  var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      jQuery('#header .search-post').html('');

    jQuery("#student-class-group-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;
if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
   if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } 
  if(cityreslts && statereslts && countryreslts ){


   var result = countryreslts.split('_');
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


  tt="";
}
else{
 tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}

if(profilelike>0){

var span="<span  onclick='profilelikess("+userid+","+puserid+",this);' class='profilelike'>Liked</span>";
}
else{

 span="<span  onclick='profilelikess("+userid+","+puserid+",this);'  class='profilelike'>Like</span>";
}
  first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'>"+username+"<br><span>"+st+", "+collegename+"</span></div></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'><div class='about_center_div'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><span class='imgspans'><img src='img/fblike.png'></span>"+span+"<span class='blue-like2'>"+like+"</span></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-group-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

    
    getgroups1(userid);

      // jQuery(".search-post-append").after("<div class='back7' onclick='history.back();'>Back</div>");
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 



}



function viewprfl3(id)
{

userid=id ? id : localStorage.getItem('loginurid');

  var collabcclz = localStorage.getItem('collabc');
  var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      jQuery('#header .search-post').html('');

    jQuery("#student-class-group-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;
if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
   if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } 
  if(cityreslts && statereslts && countryreslts ){


   var result = countryreslts.split('_');
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


  tt="";
}
else{
 tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}

if(profilelike>0){

var span="<span  onclick='profilelikess("+userid+","+puserid+",this);' class='profilelike'>Liked</span>";
}
else{

 span="<span  onclick='profilelikess("+userid+","+puserid+",this);'  class='profilelike'>Like</span>";
}
  first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'>"+username+"<br><span>"+st+", "+collegename+"</span></div></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'><div class='about_center_div'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><span class='imgspans'><img src='img/fblike.png'></span>"+span+"<span class='blue-like2'>"+like+"</span></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-group-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

    
    getgroups1(userid);

      jQuery(".search-post-append").after("<div class='back12'><a href='notifications.html'>Back</a></div>");
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 



}

function viewprflnew(id,groupid)
{
   jQuery('.back,.backa,.back2,.back3,.back4,.back5').hide();
userid=id ? id : localStorage.getItem('loginurid');

  var collabcclz = localStorage.getItem('collabc');
  var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      jQuery('#header .search-post').html('');

    jQuery("#student-class-group-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;
if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
   /*if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } 
*/  if(cityreslts && statereslts && countryreslts ){


   var result = countryreslts.split('_');
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


  tt="<div class='profess_dtl_prf'><div class='left-user-img'><img src='http://bahuka.com/home/images/crying-user.png'></div><div class='right-user'><img src='http://bahuka.com/home/images/user-circle.png'><img src='http://bahuka.com/home/images/user-circle.png'><img src='http://bahuka.com/home/images/user-circle.png'></div></div>";
}
else{
tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}

if(profilelike>0){

var span1="<img src='img/fb-new.png'  id='Liked' style='opacity:1' onclick='profilelikess("+userid+","+puserid+",this);'>";
}
else{

 span1="<img src='img/fb-new.png'  id='Like' style='opacity:0.30'  onclick='profilelikess("+userid+","+puserid+",this);'>";
}

if(puserid!=userid)
{

var data1="<div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div>";

}

else{



var data1="<div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event,"+'"reports"'+")'>Reports</a></li><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div>";
}




 first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'><p>"+username+"</p><span>"+st+", "+collegename+"</span></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'>"+data1+"<div class='about_center_div tabcontent' id='about' style='display:block;'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><!--span class='imgspans'><img src='img/fblike.png'></span><span class='blue-like2'>"+like+"</span--></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div><div id='reports' class='tabcontent'></div></div></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-group-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

    //ratings(userid);
    getgroups1(userid);

    jQuery(".search-post-append").after("<div class='backa6' onclick='getgroupwall("+groupid+");'>Back</div>");
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 



}















function chkthr(id,id2)
{

if(jQuery("#chkbox-app"+id2+"").prop("checked") == true)
{
 //var dd= jQuery("#chkbox-app"+id2+"").attr('attr');
 //alert(dd);
//alert("Checkbox is checked.");
var checkedvalue="1";
//alert(checkedvalue);


}

else if(jQuery("#chkbox-app"+id2+"").prop("checked") == false){
///alert("Checkbox is unchecked.");
//alert('hello');
 
  //var ddd= jQuery("#chkbox-app"+id2+"").attr('attr');
  var checkedvalue="0";
  //alert(checkedvalue);
 //alert(dd);

}

var  checkdlgn = localStorage.getItem('loginurid');
var  usridth = localStorage.getItem('usridth');
var checkedidcses = localStorage.getItem('checkedidd');
var oldvalue = localStorage.getItem('oldvalue');
var precheckedvalue=localStorage.getItem('checkedsess');



//alert(usridth);
var task ='chkthr';
var cueckedid = id;
var checkdlgn = checkdlgn;
var usridth = usridth;
var checkedvalue=checkedvalue;
var checkedidcses=checkedidcses;
var oldvalue=oldvalue;
var precheckedvalue=precheckedvalue;

var formData = {
task: task,
cueckedid:cueckedid,
checkdlgn:checkdlgn,
usridth:usridth,
checkedvalue:checkedvalue,
checkedidcses:checkedidcses,
oldvalue:oldvalue,
precheckedvalue:precheckedvalue,
 
 
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesd) 
    {
      

    // alert(response);

var objsps = jQuery.parseJSON( responsesd );
var getse= JSON.stringify(objsps[1]);
 var objspsd = jQuery.parseJSON( getse );
var ad=objspsd.insertid;
//alert(ad); 
localStorage.setItem('checkedsess',ad);
//alert(getse);

 
    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 
}
function addteacherpending(csid,tid,stid)
{


var $j = jQuery.noConflict();
 var USERId = jQuery(this).data("id");   
 alert(USERId);
 var teacherArr = [];
       
       $j('.posible_teacher_'+classID+':checked').each(function () 
       {
       
         teacherArr.push($j(this).val()); 
       
       });  

var task ='chkpendingteacher';
var chaeckeduser = stid;
var teacherid = tid;
var csid = csid;

var formData = {
task: task,
cueckedid:cueckedid,
checkdlgn:checkdlgn,
usridth:usridth,
checkedvalue:checkedvalue,
checkedidcses:checkedidcses,
oldvalue:oldvalue,
precheckedvalue:precheckedvalue,
 
 
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesd) 
    {
      

    // alert(response);

var objsps = jQuery.parseJSON( responsesd );
var getse= JSON.stringify(objsps[1]);
 var objspsd = jQuery.parseJSON( getse );
var ad=objspsd.insertid;
//alert(ad); 
localStorage.setItem('checkedsess',ad);
//alert(getse);

 
    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 
}

function Finishbtn(id)
{

  //alert(id);


var task ='teacherlistingpage';
var teacherlistinid = id;

var formData = {
task: task,
teacherlistinid: teacherlistinid,


 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesd) 
    {
      jQuery('#student-class-pge').html('');
 var objb = jQuery.parseJSON( responsesd );
//var a=response.crntals;
var arr = [], objb;

for(key in objb) {
    arr.push(key);
} 

lendss = arr.length;

//console.log(lends);
//alert(lends);
//console.log(lends) //2*/
jQuery('#student-class-pge').html('');
jQuery('.math-button-cls').html('');

for(ra=1;ra<=lendss;ra++)
{

 var getstringifyd = JSON.stringify(objb[ra]);
//console.log(getstringify);
var objssw = jQuery.parseJSON( getstringifyd );
//console.log(objssw);
var usridp=objssw.usrid;
var usernamep=objssw.username;
var avatarp=objssw.avatar;
var auditoryp=objssw.auditory;
var visualp=objssw.visual;
var kinestheticp=objssw.kinesthetic;
var textualp=objssw.textual;
var img='http://bahuka.com/home/'+avatarp;
//alert(avatarp);
var img='http://bahuka.com/home/'+avatarp;
 if(avatarp=="")
{
  var imgd ="http://bahuka.com/home/images/no-image-found.jpg";
img=imgd; 

}
if(ra<=1)
{

tt="<div class='teacher-listing-page'><p class='img-thr'><img src='img/teaccher_listing_page.png'></p><p class='teacher-right-txt'>Teacher list</p></div>";

}
else
{
 tt="";
  
}

  //console.log(lends);
  //if()
//alert(usernamep);

var url="http://bahuka.com/home/images";
//http://bahuka.com/home/images/avatar/thumb_53a1c4a6d21f680e77589992.jpg
datagu = ""+tt+"<div class='best-match-page'><div class='best-match-pro'><img src='"+img+"'><p onclick=viewprfl("+usridp+")>view prifile</p></div><div class='best-match-text'><div id='chartContainer_"+ra+"' class='containdercss'></div></div></div><div class='best-pst-crt'></div><div class='bottom-colm'><div class='thr-nme-best'><p>"+usernamep+"</p><p class='professercls'>Professor</p></div><div class='view-detail-thr'><p onclick='detailpage("+usridp+");'>view Details</p></div></div><div class='line-end'></div>";

jQuery('#student-class-pge').append(datagu);
/*  chart container start */
 //var obj = jQuery.parseJSON( localStoragegraphid);

  
    var chart = new CanvasJS.Chart("chartContainer_"+ra,
    {
       // title:{
          //  text: "Top Categories of New Year's Resolution"
       // },
        //exportFileName: "Pie Chart",
        //exportEnabled: true,
            //    animationEnabled: true,
       // legend:{
            //verticalAlign: "bottom",
            //horizontalAlign: "center"
      //  },
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",

            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditoryp, legendText: "", label: "" },
                {  y: visualp, legendText: "", label: "" },
                {  y: kinestheticp, legendText: "", label: "" },
                {  y: textualp, legendText: "", label: ""}
               
            ]
    }
    ]
    });
    chart.render();


//alert(id);

}
 

 re="<div class='home-logo-techer-page'><a href='#'><img src='img/home_logo.png'></a></div>";
 jQuery('#student-class-pge').append(re);
   // alert("successfully ajax work");


    },
    error: function () 
    { 
     // alert("Error");
    }
  });
}



function Finishbtn1(id)
{

  //alert(id);


var task ='teacherlistingpage1';
var teacherlistinid1 = id;

var formData = {
task: task,
teacherlistinid1: teacherlistinid1,


 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesd) 
    {
      jQuery('#student-class-pge').html('');
 var objb = jQuery.parseJSON( responsesd );
//var a=response.crntals;
var arr = [], objb;

for(key in objb) {
    arr.push(key);
} 

lendss = arr.length;
//console.log(lendss);
//alert(lends);
//console.log(lends) //2*/
if(lendss>0){
jQuery('#student-class-pge').html('');
jQuery('.math-button-cls').html('');

for(ra=1;ra<=lendss;ra++)
{

 var getstringifyd = JSON.stringify(objb[ra]);
//console.log(getstringify);
var objssw = jQuery.parseJSON( getstringifyd );
//console.log(objssw);
var usridp=objssw.usrid;
var class_id=objssw.class_id;
//alert(class_id);
var usernamep=objssw.username;
var classname=objssw.classname;
var avatarp=objssw.avatar;
var auditoryp=objssw.auditory;
var visualp=objssw.visual;
var kinestheticp=objssw.kinesthetic;
var textualp=objssw.textual;
var img='http://bahuka.com/home/'+avatarp;
//alert(avatarp);
var img='http://bahuka.com/home/'+avatarp;
 if(avatarp=="")
{
  var imgd ="http://bahuka.com/home/images/no-image-found.jpg";
img=imgd; 

}
if(ra<=1)
{

tt="<div class='teacher-listing-page'><p class='teacher-center-txt'> My Teacher List</p></div>";

}
else
{
 tt="";
  
}

  //console.log(lends);
  //if()
//alert(usernamep);

var url="http://bahuka.com/home/images";
//http://bahuka.com/home/images/avatar/thumb_53a1c4a6d21f680e77589992.jpg
datagu = ""+tt+"<div class='best-teacher-match-found' id="+usridp+" ><div class='best-match-page'><div class='best-match-pro'><div class='best-tchr-image'><img onclick=viewprflss("+usridp+") src='"+img+"'></div></div><div class='best-match-text'><div id='chartContainer_"+ra+"' class='containdercss'></div></div></div><div class='best-pst-crt'></div><div class='bottom-colm'><div class='score-left hhh'><div class='score-img score-img2'><img src='img/red-minus-th.png'  onclick='deleteteacher("+teacherlistinid1+","+usridp+");'></div></div><div class='thr-nme-best hhhh'><p>"+usernamep+"</p><p class='professercls'>Professor</p><span class='classname'>"+classname+"</span></div><div class='best-match-classes-div'><div class='view-detail-thr' id='har'><p id='"+class_id+"' suneel='"+usridp+"' class='harff' onclick='detailteacherpage1(this);'>Details</p></div></div></div><div class='line-end'></div></div>";
 
jQuery( "#dataTable tbody tr" ).on( "click", function() {
  console.log( $( this ).text() );
});
jQuery('#student-class-pge').append(datagu);
/*  chart container start */
 //var obj = jQuery.parseJSON( localStoragegraphid);

  
    var chart = new CanvasJS.Chart("chartContainer_"+ra,
    {
       // title:{
          //  text: "Top Categories of New Year's Resolution"
       // },
        //exportFileName: "Pie Chart",
        //exportEnabled: true,
            //    animationEnabled: true,
       // legend:{
            //verticalAlign: "bottom",
            //horizontalAlign: "center"
      //  },
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",

            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditoryp, legendText: "", label: "" },
                {  y: visualp, legendText: "", label: "" },
                {  y: kinestheticp, legendText: "", label: "" },
                {  y: textualp, legendText: "", label: ""}
               
            ]
    }
    ]
    });
    chart.render();


//alert(id);

}
 
var i = 1;

   jQuery.each(objb, function(key, val) {
    var lenf = val.length;
    var useriddda =localStorage.getItem('loginurid');
    if (lenf == undefined ||lenf == null || lenf == "") {      
    }
    else {
         var datadlsdda="";
         var datagu2q ="";
         var data1a="";
         var seats1a="";
         var avatarpendinga ="http://bahuka.com/home/images/avtar4.png";
         var imgddwa ="http://bahuka.com/home/images/pending2.png";
var ca="";
         
         jQuery.each(val, function(key, res) {
          var jsona=jQuery.parseJSON( JSON.stringify(res) );

          var jasida=jsona.jasid;

          var csida=jsona.id;
          var imagependinga=jsona.img;
          var seatswa=jsona.seats;
          var classnamep=jsona.classnamep;
          var startdatea=jsona.startdate;
          var startdatea=jsona.startdate;
          var enddatea=jsona.enddate;
          var starttime1a=jsona.starttime;
          var endtime1a=jsona.endtime;
          var class_daysa=jsona.class_days;
          var classcodea=jsona.classcode;
            var checkeda=jsona.checked;
  var class_rooma=jsona.class_room;
       var starma=jsona.startdatem; 
      var  starda=jsona.startdated; 
      var  enddatema=jsona.enddatem;
      var enddateda=jsona.enddated;
var  open=jsona.open;
      var taken=jsona.taken;


          //var open=json.open;
          //var taken=json.taken;

     
          seats1a="<p onclick=showme("+i+");>Details </p>";


  // alert(ca);
data1a="<div class='best-teacher-match-found' id='pending_"+csida+"''><div class='tch_profile"+i+" profile1'><div class='main-possible-cls'><div class='tch_image'><img src='"+avatarpendinga+"'id='tch_profilepic'></div><div class='tch_university'><img src='"+imgddwa+"'></div></div><div class='score-left pending_list_main'><div class='score-img pending_list_tchr'><img onclick='deletependingteacher("+csida+");' src='img/red-minus-th.png'><p>Possible Professors</p><span class='classname'>"+classnamep+"</span></div></div><div class='res_professors'><div class='res_pro_img1'> <ul id='"+i+"' class='ul'></ul> </div></div></div><div id='pending"+i+"' class='pending-classes'></div><div class='pending-end' id='pending-en1"+i+"' style=overflow:hidden;><div class='arrow-divc'><button onclick='hideclassesDivjas("+i+");'><img src='img/testQAarrowtop.png'></button></div></div><div class='line-end'></div></div>";

   
          datadlsdda = "<div class='line-endd'></div><div class='class_divds' ><div class='detailspge'></div><div class='datetme-app'><p id='dte'><b id='clssme'>Dates: "+starma+" "+starda+" - "+enddatema+" "+enddateda+"</b></p><p><b id='clssme'>Days:</b>"+class_daysa+"</p><p><b id='clssme'>Time:</b> "+starttime1a+" - "+endtime1a+"</p><p><b id='clssme'>Room:</b> "+class_rooma+"</p><p><b id='clssme'>CRN:</b><b id='clssme'> "+classcodea+"</b></p><p><b id='clssme'>Seats:</b> <b id='steopn'>"+seatswa+"</b><b id='clssme'> Taken:</b><b id='steopn'>"+taken+"</b><b id='clssme'> Open:</b><b id='steopn'>"+open+"</b></p></div></div></div>";



            var pimga='http://bahuka.com/home/'+imagependinga;
            if(imagependinga == ""||imagependinga ==null)
              {
               
              var imgdda ='http://bahuka.com/home/images/no-image-found.png';
              pimga = imgdda;
              }
            //alert(i+ " => " + JSON.stringify(res));

if(jasida==null){

datagu2q="";
}else{

            datagu2q += "<li><p class='pro_img'><img src='"+pimga+"' title='"+jasida+"' onclick='viewprfl("+jasida+")'></p></li>";
      }
        });

      }
jQuery('#student-class-pge').append(data1a);
    

        jQuery(datagu2q).appendTo("#"+i);
        jQuery(seats1a).appendTo('#pending'+i);
        jQuery('#pending-en1'+i).append(datadlsdda);     
        //jQuery(".tch_profile"+i).append(datagu2);
      i++;
    
    });
}




else{


     datad = "<div class='student-class-teacher-pge'><p class='notecherfound'>Teacher List</p><p class='notecherfound'>No Teacher Added</p><div class='techerimage'><img src='img/noteacherfound2.png'></div></div>";
       
       jQuery('#student-class-pge').append(datad);

}
   // alert("successfully ajax work");

jQuery(".search-post-append").after("<div class='back9'  onclick='history.back();'>Back</a></div>");
    },
    error: function () 
    { 
     // alert("Error");
    }
  });
}


















function scorehistory()
{
  var  userid = localStorage.getItem('loginurid');
var task ='scorehistory';
useridscore=userid;
 
var formData = {
task: task,
useridscore: useridscore,
 
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesdsrc) 
    {


      jQuery('#student-score-pges').html('');

    //alert("secessfull");

 
 var objbsrc = jQuery.parseJSON( responsesdsrc );
//var a=response.crntals;
var arr = [], objbsrc;

for(key in objbsrc) {
    arr.push(key);
} 

lendsssrc = arr.length;

//console.log(lends);
//alert(lends);
console.log(lendsssrc) //2*/
 

for(rasrc=1;rasrc<=lendsssrc;rasrc++)
{

 var getstringifydsrc = JSON.stringify(objbsrc[rasrc]);
//console.log(getstringify);
var objsswsrc = jQuery.parseJSON( getstringifydsrc );
//console.log(objssw);
 
var avatarsrc=objsswsrc.avatarsrc;
var auditorysrc=objsswsrc.auditory;
var visualsrc=objsswsrc.visual;
var kinestheticsrc=objsswsrc.kinesthetic;
var textualsrc=objsswsrc.textual;
var created_datea=objsswsrc.created_datea;
var created_dateb=objsswsrc.created_dateb;


var college=objsswsrc.collegename;
 var answereid=objsswsrc.answer;
var namepro=objsswsrc.namessrc;
var profilestatus=objsswsrc.profilestatus;
 
 //alert(namepro);
//alert(avatarsrc);

var img='http://bahuka.com/home/'+avatarsrc;
  if(avatarsrc==""||avatarsrc==null)
{
  var imgd ="http://bahuka.com/home/images/no-image-found.png";
img=imgd; 
}


if(profilestatus)
{
  rasrc1="<div class='pri-src-page'><div class='prifile-src-img'><img src='"+img+"'></div><div class='profile-src-name'>"+namepro+" <br /><span style='color:#605e5e;'> student,"+college+"</span></div></div><div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event,"+'"load-score"'+")'>Learning Scores</a></li><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"ratings"'+")' >Ratings</a></li><li><!--a href='javascript:void(0)' class='tablinks' onclick='openCity(event,"+'"questions"'+")'>Questions</a--></li></ul></div><div class='load-score'></div>";
 }
 else
 {
rasrc1="";

 }

  //console.log(lends);
  //if()
//alert(usernamep);
if(created_datea==undefined ||created_dateb==undefined){

   dates="<div class='student-class-button-pge'><p class='no-score-p'>No Score History to display</p><div class='image-no-rating'><img src='http://bahuka.com/home/images/no-rating.png'></div></div>";
}
else{


  dates="<div class='score-div-page' id="+answereid+"><div class='score-left'><div class='score-text'>"+created_datea+" <br> at "+created_dateb+"</div><div class='score-img'><img src='img/red-minus-th.png' onclick='deletescore("+answereid+");'> </div></div><div class='score-right'><div id='chartContainer_"+rasrc+"' class='containdercss'></div></div></div></div>";
}
//http://bahuka.com/home/images/avatar/thumb_53a1c4a6d21f680e77589992.jpg
/*datagu = ""+rasrc1+""+dates;*/
jQuery('#student-score-pges').append(rasrc1);
jQuery('#load-score').append(dates);

/*  chart container start */
 //var obj = jQuery.parseJSON( localStoragegraphid);

  
    var chart = new CanvasJS.Chart("chartContainer_"+rasrc,
    {
       // title:{
          //  text: "Top Categories of New Year's Resolution"
       // },
        //exportFileName: "Pie Chart",
        //exportEnabled: true,
            //    animationEnabled: true,
       // legend:{
            //verticalAlign: "bottom",
            //horizontalAlign: "center"
      //  },
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",

            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditorysrc, legendText: "", label: "" },
                {  y: visualsrc, legendText: "", label: "" },
                {  y: kinestheticsrc, legendText: "", label: "" },
                {  y: textualsrc, legendText: "", label: ""}
               
            ]
    }
    ]
    });
    chart.render();


//alert(id);

}
 

 re="<div class='home-logo-techer-page'><a href='#'><img src='img/home_logo.png'></a></div>";
 jQuery('#student-class-pge').append(re);
   // alert("successfully ajax work");



 jQuery(".search-post-append").after("<div class='back16' onclick='history.back();'>Back</div>");

        openratingdiv();

        openratingquestion();
    },
    error: function () 
    { 
     // alert("Error");
    }
  });

}

function userprofilepge()
{
//alert('dsfd');

var  usrprofilepageid = localStorage.getItem('loginurid');
//alert(usrprofilepageid);

var task ='userprofilepage';
var usrprofilepage = usrprofilepageid;

var formData = {
task: task,
usrprofilepage:usrprofilepage,


 
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responsesprofile) 
    {

      jQuery(".user-profile-pge").html("");
     // alert('dd');
//alert(responsesprofile);
      var objpro = jQuery.parseJSON( responsesprofile );
var getpro= JSON.stringify(objpro[1]);
 var objpro = jQuery.parseJSON( getpro );

var name=objpro.name;
var username=objpro.username;
var avatar=objpro.avatar;
var auditory=objpro.auditory;
var visual=objpro.visual;
var kinesthetic=objpro.kinesthetic;
var textual=objpro.textual;
  if(avatar=="")
{
  var imgd ="http://bahuka.com/home/images/no-image-found.jpg";
img=imgd; 
}
else
{
 var img="http://bahuka.com/home/images"+avatar;
}


//alert(username);

firstd="<div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='img/profile_imgback.png'></div></div><div class='sin_pfl_dtl'><div class='best-match-page-singl'><div class='best-match-pro'><img src='"+img+"'></div><div class='best-match-text'><div class='thr-nme-bestk'><p>"+username+"</p><p>Student,</p></div></div></div></div><div class='sitemapcontainer'><div id='chartContainer_1sp'></div></div><div class='view-detail-thr'><p>view Details</p></div><div class='about-us-profile'><div class='about_dtl'><p class='about_txt'>About Me</p><p class='me_txt'></p></div><div class='profess_dtl_prf'><p> </p><p> </p><p></p></div></div>";

 

jQuery(".user-profile-pge").append(firstd);


    var chart = new CanvasJS.Chart("chartContainer_1sp",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   

            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: auditory, legendText: "", label: "" },
                {  y: visual, legendText: "", label: "" },
                {  y: kinesthetic, legendText: "", label: "" },
                {  y: textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 



    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 

}

 function findUserSchool()
 {

  //alert("JASS");


 jQuery(".main-school").hide(); 
  jQuery(".student-login-main").hide(); 
  jQuery(".student-login-3.main-page-student").hide();
  jQuery(".student-login4.maindiv").hide();  
  
  jQuery(".school-not-found.greydiv").show('1000'); 

  var task ='usercollegedetails';

  var formData = {
  task: task

   };
    jQuery.ajax({
      type: "get",
      url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
      data: formData,
      //  beforeSend: function () { jQuery.mobile.loading('show'); },
      success: function(collegeresults) 
      {         
        //CollegedetailsArray
        //console.log(collegeresults); 


        var collobj = jQuery.parseJSON( collegeresults );
        //var a=response.crntals;
        var arr = [], collobj;

        for(key in collobj) {
            arr.push(key);
        }

        lendsssrc = arr.length;

        //console.log(lendsssrc) //2*/


        for(colgs=0;colgs<lendsssrc;colgs++)
        {

        var getstringifycollege = JSON.stringify(collobj[colgs]);
        //console.log("JASS " + getstringifycollege);
        var collegeRslt = jQuery.parseJSON( getstringifycollege );
        //console.log("JASS2 " + collegeRslt);

        var collegeid = collegeRslt.id;
        var collegeName = collegeRslt.collegename;
        var collegeWebsite = collegeRslt.website;
        var StdEmailDomain = collegeRslt.student_email_domain;
        var TchrEmailDomain = collegeRslt.teacher_email_domain;

        var selectTagOptions = "<option value='"+collegeWebsite+"'>"+collegeName+"</option>";        

        jQuery("#first_find_college").append(selectTagOptions);
       }
     }
    });
 
 }

function CollegeSendemail(){
  
   var selectedOption = jQuery("#first_find_college option:selected").val();   

   if(selectedOption){
      window.open(selectedOption, '_blank');
      //window.location.href = selectedOption;
   }
   else{
      //alert("Select any value First");
   }
}


/* 
* Show all Groups on Class Groups Page 
*/

function getgroups2(){
 jQuery('.back').hide();
  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "getgroups";
  var userid = userid;

  var formData = {
   task: task,
   groupuserid: userid, 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {
    
    //alert(groupresponse);
    jQuery('#student-class-group-pge').html('');
        var groupobj = jQuery.parseJSON(groupresponse);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
        lengthgroups = garr.length;

         if(lengthgroups !== 0){

            for(group=1;group<=lengthgroups;group++)
            {

            var getstringifygroup = JSON.stringify(groupobj[group]);
            var groupRslt = jQuery.parseJSON(getstringifygroup);

            var groupid = groupRslt.groupid;
            var groupname = groupRslt.groupname;
            var groupDesc = groupRslt.description;
            var groupmembers = groupRslt.membercount;
            var grouphits = groupRslt.totalhits;   


        var imgarray= groupRslt.members;
console.log(imgarray);
var  imgd="";
           $.each(imgarray,function(index,item){
   // alert(item.avatar);

    var img='http://bahuka.com/home/'+item.avatar;

    if(item.avatar==""){
 var tty ="http://bahuka.com/home/images/no-image-found.png";
   img=tty;

    }
   imgd +="<div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+img+"' title='"+item.name+"'></div></div>";
});
var join = groupRslt.join; 
if(join>0){
var tta="";
 tta= "<img src='img/checkimg1.png'  id='remove"+groupid+"' onclick='removegroup("+groupid+");'>";
}
else{

  tta= "<img src='img/pluss.png' id='plus"+groupid+"' onclick='joingroup("+groupid+");'>";
}
            var groupcenterdiv = "<div class='class-groups-center'><div class='class-groups'><div class='group-image'><img src='img/book2.png'></div><div class='group-name'><a href='javascript:' onclick='getgroupwall("+groupid+");'>"+groupname+"</a><p>"+groupDesc+"</p></div><div class='group-memebrs-center'>"+imgd+"<div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'>"+tta+"</div></div></div><div class='grp-memberscount'><a href='#'>"+groupmembers+" Members</a></div><div class='bottm-line'></div></div></div>";  

            jQuery("#student-class-group-pge").append(groupcenterdiv);
            
            
           }
        }
         else{
          jQuery("#student-class-group-pge").append("<div class='class-groups-center'><p id='result-notfound'>Yet No Group Found</p></div>");
         }
      jQuery(".search-post-append").after("<div class='back5'  onclick='history.back();'>Back</a></div>");
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}



function getgroups(){
 jQuery('.back,.backa,.back2,.back3,.back4').hide();
  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "getgroups";
  var userid = userid;

  var formData = {
   task: task,
   groupuserid: userid, 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {
    
    //alert(groupresponse);
    jQuery('#student-clases-groups').html('');
        var groupobj = jQuery.parseJSON(groupresponse);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
        lengthgroups = garr.length;

         if(lengthgroups !== 0){

            for(group=1;group<=lengthgroups;group++)
            {

            var getstringifygroup = JSON.stringify(groupobj[group]);
            var groupRslt = jQuery.parseJSON(getstringifygroup);

            var groupid = groupRslt.groupid;
            var groupname = groupRslt.groupname;
            var groupDesc = groupRslt.description;
            var groupmembers = groupRslt.membercount;
            var grouphits = groupRslt.totalhits;   


        var imgarray= groupRslt.members;
console.log(imgarray);
var  imgd="";
           $.each(imgarray,function(index,item){
   // alert(item.avatar);

    var img='http://bahuka.com/home/'+item.avatar;

    if(item.avatar==""){
 var tty ="http://bahuka.com/home/images/no-image-found.png";
   img=tty;

    }
   imgd +="<div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+img+"' title='"+item.name+"'></div></div>";
});
var join = groupRslt.join; 
if(join>0){
var tta="";
 tta= "<img src='img/checkimg1.png'  id='remove"+groupid+"' onclick='removegroup("+groupid+");'>";
}
else{

  tta= "<img src='img/pluss.png' id='plus"+groupid+"' onclick='joingroup("+groupid+");'>";
}
            var groupcenterdiv = "<div class='class-groups-center'><div class='class-groups'><div class='group-image'><img src='img/book2.png'></div><div class='group-name'><a href='javascript:' onclick='getgroupwall("+groupid+");'>"+groupname+"</a><p>"+groupDesc+"</p></div><div class='group-memebrs-center'>"+imgd+"<div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'>"+tta+"</div></div></div><div class='grp-memberscount'><a href='#'>"+groupmembers+" Members</a></div><div class='bottm-line'></div></div></div>";  

            jQuery("#student-clases-groups").append(groupcenterdiv);
            
            
           }
        }
         else{
          jQuery("#student-clases-groups").append("<div class='class-groups-center'><p id='result-notfound'>Yet No Group Found</p></div>");
         }
    jQuery(".search-post-append").after("<div class='back5'  onclick='history.back();'>Back</a></div>");
     
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}

function getgroupmembers(id){
 
  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "getgroupmembers";
  var userid = userid;

  var formData = {
   task: task,
  
 memberuserid: userid, 
  mgroup: id,
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {
    
    //alert(groupresponse);
    jQuery('#student-class-group-pge').html('');
       jQuery('.search-post').html('');
        jQuery('.header_div #side_menuu').hide();
        var groupobj = jQuery.parseJSON(groupresponse);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
     var  lengthgroups=garr.length;
    // console.log(lengthgroups);f
         if(lengthgroups !== 0){

           
            var getstringifygroup = JSON.stringify(groupobj[1]);

            var groupRslt = jQuery.parseJSON(getstringifygroup);
            var groupid = groupRslt.groupid;
            var groupname = groupRslt.groupname;
            var groupDesc = groupRslt.description;
            var imgarray= groupRslt.members;
            // console.log(imgarray);
            var  imgd="";
              $.each(imgarray,function(index,item){

                if((item.stusertype)==1){

var type="Student";
}
else{
var type="Professor";

}
 var img='http://bahuka.com/home/'+item.avatar;
if(item.avatar==""||item.avatar==null){


  var imgds ="http://bahuka.com/home/images/no-image-found.png";
    img=imgds; 

    

}

                
            
            imgd +="<div class='main-member'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+img+"' title='"+item.name+"'></div></div><div class='membersdetails'><p class='member-name' onclick='viewprfl1("+item.id+");'>"+item.name+" </p><p class='type'>"+type+"</p></div></div>";
                  });
            var groupcenterdiv = "<div class='class-groups-center members'><div class='class-groups'><div class='group-name members'><a href='#'>"+groupname+"</a><p>"+groupDesc+"</p><div class='text-members'>Members</div><div class='bottm-line members'></div>"+imgd+"</div></div>";  
                                     
            jQuery("#student-class-group-pge").append(groupcenterdiv);
            
            
          
        }
         else{
          jQuery("#student-class-group-pge").append("<div class='class-groups-center'><p id='result-notfound'>Yet No Group Found</p></div>");
         }
     
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}





function getgroupwall(id){

  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
jQuery('.backa,.back5,.backa6, .back4, .back3,.back8,.back15').hide();
jQuery('.search-post-append').hide();
  //jQuery('.back').html("");
  //alert('get classes');
  var task = "getgroupwall";
  var userid = userid;

  var formData = {
   task: task,
  
 groupuserid: userid, 
  wallgroupid: id,
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {
      jQuery(".search-post").html('');
    //alert(groupresponse);
    
    jQuery('#student-class-group-pge').html('');
        var groupobj = jQuery.parseJSON(groupresponse);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }

   
     var  lengthgroups=garr.length;
    // console.log(lengthgroups);
         if(lengthgroups !== 0){

           
            var getstringifygroup = JSON.stringify(groupobj[1]);

              var groupRslt = jQuery.parseJSON(getstringifygroup);
              var groupid = groupRslt.groupid;

               localStorage.setItem('groupidlocal',groupid);  
              var groupname = groupRslt.groupname;
              var groupDesc = groupRslt.description;
              var hits= groupRslt.hits;
              var cover= groupRslt.cover;
              var  members=groupRslt.members;
              var  plus=groupRslt.selected;
              var  likes=groupRslt.likes;
              grouplike=groupRslt.grouplike;
            nomember=groupRslt.nomember;


              
                        var imgarray= groupRslt.activity;
//console.log(imgarray);
var postdata="";

$.each(imgarray,function(index,item){

                                        var actorname=item.actorname;
                                        var actor=item.actor;
                                        var  app=item.app;
                                        //alert(app);
                                        var content=item.content;
                                        var title=item.title;
                                        var  verb=item.verb;
                                        var  avatars=item.avatar;
                                        var  timeago=item.time;
                                        var  comments=item.comments;
                                        var  likescount=item.likescount;
                                        var  unlike=item.unlike;
                                        var  title1=item.title1;
                                        var  params=item.params;
                                        allrows=item.allrows;
                                        var  content_id=item.content_id;
                                        var  photomain1=item.photomain1;
                                        var  photomain2=item.photomain2;
                                        var  commentsrow=item.commentsrow;
                                         var  pathvideo=item.pathvideo;
                                        var hashtags=item.hashtags;


                                       //title.replace(/#(\w+)/g, "<a 'onclick=abc();'>$&</a>");


                                          /*if(hashtags){
                                            

                                              var res = hashtags.split("#"); 

                                              for(i=1;i<=res.length;i++){
                                                //alert(res[i]);
                                                var str=res[i];
                                                       if(str!=undefined){
                                                        
                                                    var n= title.search(str);
                                                   
                                                         }

                                              }
                                          }*/
                                      
                                           //var res = hashtags.split("#"); 
                                          // alert(res);
                                           // var n = title.search("W3Schools"); 

var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
var match = title1.match(regExp);


var teacherArr=[];

 
if (match && match[2].length == 11) {

var id= match[2];
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+id+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var udescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var str=udescription.substring(0,50);
jQuery('.descriptionvideo').append(str);
jQuery('.descriptionvideo').append('..');
}

});

var iframe="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  iframe="";
}
if(pathvideo){
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+pathvideo+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var vdescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var strb=vdescription.substring(0,50);
jQuery('.descriptionvideo').append(strb);
jQuery('.descriptionvideo').append('..');
}

});

var pathvideo="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  pathvideo="";
}














//alert(id);
//jQuery('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');




if(photomain1!=undefined&&photomain1!=""){
                
//alert(photomain1);
                    var photomain1s='http://bahuka.com/home/'+photomain1;





                    var ddss="<div class='post-image'><img src='"+photomain1s+"'></div>";
              }
              else{
                ddss="";
              }





if(photomain2!=undefined&&photomain2!=""){
                  var photomain2s='http://bahuka.com/home/'+photomain2;
//alert(photomain2);

/*
jQuery("<img>", {
    src: photomain2s,
    error: function() { var ddssa="" },
    load: function() { alert(photomain2s + ': ' + true); }
});

*/









                  
                    var ddssa="<div class='post-image hghgh'><img src='"+photomain2s+"'></div>";
              }
              else{
                ddssa="";
              }





  var likescounta="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span  id='likecount_"+content_id+"' class='likecount-span'>"+likescount+"</span><span>Likes</span></p>";





              var actorimg='http://bahuka.com/home/'+avatars;

              if(avatars==""){
                var gg="http://bahuka.com/home/images/no-image-found.png";
                actorimg=gg;
              }

   var commentsaa="";
if(allrows>2){


var showmore="<div class='show_more_comments' id= 'showmore"+content_id+"' onclick='showmorecomments("+content_id+");'><div class='show_more_para'><p><a>Show more comments</a></p></div></div>";


}

else{
showmore="";

}

$.each(comments,function(index,item){

var likescountc=item.likescountc;
var unlikecomment=item.unlikecomment;


if(unlikecomment>0){

var unlikepostc="<a class='buttonc_"+item.idc+"'   href='javascript:' onclick='likecomment("+item.idc+",this)'>unlike</a>";
}
else{

 unlikepostc="<a class='buttonc_"+item.idc+"' href='javascript:' onclick='likecomment("+item.idc+",this)'>like</a>";
}


var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+item.idc+"'>"+likescountc+"</span> <span>Likes</span></p>";

/*else{
commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'>span id='commentlike_"+item.idc+"'>"+likescountc+" </span> <span>Likes</span></p>";

}*/
var timec=item.timec;
                var actorimgs='http://bahuka.com/home/'+item.avatarc;


                if(item.paramsc){

                    var paramsc='http://bahuka.com/home/'+item.paramsc;
                    var dd="<div class='post-image'><img src='"+paramsc+"'></div>";
                }
                else{

                  dd="";
                }
            
              if(item.avatarc==""){
                var ggdd="http://bahuka.com/home/images/no-image-found.png";
                actorimgs=ggdd;
              }


         

    var commenttext= "";
               commentsaa+="<div class='comment-main' id='"+item.idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+item.namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+item.namec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+item.commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div class='post_time_div'>"+timec+"</div></div></div>";

});
 var time ="<span>"+timeago+"</span>";
if(unlike>0){

var unlikepost="<div class='ulcomment'><a class='button_"+content_id+"'   href='javascript:' onclick='likepost("+content_id+",this)'>unlike</a></div>";
}
else{

 unlikepost="<div class='ulcomment'><a class='button_"+content_id+"' href='javascript:' onclick='likepost("+content_id+",this)'>like</a></div>";
}

if(verb=='post'||app=='photos'||app=='videos'){
 var artcle="<div class='article-post'><span class='more'>"+title+"</span>"+iframe+""+pathvideo+"</div>"+ddss+""+ddssa+"<div class='artcle-like'>"+likescounta+""+unlikepost+"</div>";


  
}
/*else{
  artcle="<div class='article-post  content'><span>"+content+"</span>"+likescounta+"<a class='button' href='javascript:' onclick='likepost("+content_id+")'><span id='like'></span></a></div>";
}*/
if(app=='groups.wall'||app=='photos'||app=='videos'){




  postdata+="<div class='post-meta' id='"+content_id+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='main_time_post'><div class='joms-stream__meta'><a class='joms-stream__user' href='javascript:' onclick='viewprflnew("+actor+","+groupid+");'>"+actorname+"</a><span class='image_post' ><img src='img/arrow-icon.jpg'></span><a  class='group-meta' href='#'>"+groupname+"</a></div><div class='post_time_div'>"+time+"</div></div></div>"+artcle+"<div class='commentshow-"+content_id+"'>"+commentsaa+"</div>"+showmore+"<div class='text' id='text-"+content_id+"'><textarea name='comment-text' id='textarea_comment"+content_id+"' cols='40' row='4' placeholder='write a comment'  onclick='myfunctionc("+content_id+");'></textarea><div class='pixform-left'><img  src='img/images.png' onclick ='getImage1();'><div id='commentLoading'></div></div><div class='commentstatus' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='comment' value='post' id='comment-post"+content_id+"'  onclick='addcomment("+groupid+","+content_id+");' style='display:none;' ></div></div></div>";
}


/*else if(app=='groups.join'){


  var actors=obj.actors;

  var res = actors.split(","); 
var users="";

var count=res.length-1;

var teacherArre = [];
 for(i=0; i < 1; i++)
      {

        
var idss=res[i];
var collabcclz = localStorage.getItem('collabc');
 
//alert(collabcclz);
/*  ajax hit question save value
var task ='viewprofl';
var useridpr = idss;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {   

    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );
    usernamea=objsp.usrname;
       
jQuery(".join").append(usernamea); 
 


  },
error: function () 
    { 
      //alert("Error");
    }
  }); 

 
      }
 
postdata+="<div class='join-class' id='"+content_id+"'><div class='joms-stream'><a class='join' href='#'></a> and "+count+" others join class.</div></div>";

      //alert(username);
 }

 else if(app=='groups.like'){


  var actors=obj.actors;

  var res = actors.split(","); 
var users="";var teacherArr = [];
 for(i=0; i < res.length; i++)
      {
var idss=res[i];
var collabcclz = localStorage.getItem('collabc');
 
//alert(collabcclz);
/*  ajax hit question save value 
var task ='viewprofl';
var useridpr = idss;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {   

    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );
    username=objsp.usrname;
         //teacherArr.push(username); 

  jQuery(".like-group").append(username+' and '); 


  },
error: function () 
    { 
      //alert("Error");
    }
  }); 

 
      }

postdata+="<div class='join-class' id='"+content_id+"'><div class='joms-stream'><a class='like-group' href='#'></a>like class.</div></div>";

      //alert(username);
 }
 else if(app=='groups.discussion'){

 postdata+="<div class='post-meta' id='"+content_id+"'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='joms-stream__meta'><a class='joms-stream__user' href='#'>"+actorname+"</a>Posted a new discussion</div><div class='post-params'>"+obj.topic+"</div>"+artcle+""+commentsaa+"</div>";
 }


 else if(app=='groups.avatar.upload'){


var cavatra='http://bahuka.com/home/'+obj.avatar_cropped_thumb;
if(obj.avatar_cropped_thumb==""){
var ggs="http://bahuka.com/home/images/no-image-found.png";
                cavatra=ggs;

}
 postdata+="<div class='post-meta' id='"+content_id+"'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='joms-stream__meta'><a class='joms-stream__user' href='#'>"+actorname+"</a>changed "+groupname+" avatar.</div><div class='best-match-pro'><div class='best-tchr-image'><img src='"+cavatra+"'></div></div>"+commentsaa+"</div>";
 }
*/
 

           });

            var  imgd="";

 var img='http://bahuka.com/home/'+cover;
if(cover==""||cover==null){

  var imgds ="http://bahuka.com/home/components/com_community/assets/cover-group-default.png";
    img=imgds; 
}
var ff="";
 if(plus==0){
ff="<div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'><img src='img/pluss.png' id='plus"+groupid+"' onclick='joingroup("+groupid+");'></div></div></div>";
 }
 else{

  ff="<div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'><img src='img/checkimg1.png' id='remove"+groupid+"' onclick='removegroup("+groupid+");'></div></div></div>";
 } 
                 
if(grouplike>0){

var span="<span  onclick='grouplikess("+groupid+",this);' class='grouplike'>Liked</span>";
}
else{

 span="<span  onclick='grouplikess("+groupid+",this);' class='grouplike'>Like</span>";
}

if(groupname==null)

{

var groupcenterdivdd="<div class='main--post'><h2 style='text-align:center;color:red;'>Class not found </h2></div>";



}
else{


if(nomember=="yes"){


  var postthis="<div class='joms-postbox-input joms-inputbox'><textarea id='add_post' class='input input-status' name='add_post' placeholder='Ask a question,post resources start a # ,or post your notes....' rows='4' cols='31' onclick='myFunction();'></textarea><div class='pixform-left'><img  src='img/images.png'onclick ='getImage();'><div id='imageLoading'></div></div><div class='status' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='post' value='post' id='button-post'  onclick='addpost("+groupid+");' style='display:none;' ></div></div><div class='activity'  style='display:none;'><p>Join class and join  activity </p></div></div>";


}

else{

  var postthis="<div class='joms-postbox-input joms-inputbox' style='display:none;'><textarea id='add_post' class='input input-status' name='add_post' placeholder='Ask a question,post resources start a # ,or post your notes....' rows='4' cols='31' onclick='myFunction();'></textarea><div class='pixform-left'><img  src='img/images.png'onclick ='getImage();'><div id='imageLoading'></div></div><div class='status' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='post' value='post' id='button-post'  onclick='addpost("+groupid+");' style='display:none;' ></div></div><div class='activity'><p>Join class to post activity </p></div></div>";


}







    var groupcenterdivdd= "<div class='main--post'><div class='joms-focus__cover'><div style='background:url("+img+") no-repeat center center / cover ;' class='joms-focus__cover-image--mobile'></div><div class='joms-focus__header'><div class='joms-focus__title'><h3>"+groupname+"</h3> <p>"+groupDesc+"</p></div><div class='joms-avatar--focus'>"+ff+"</div></div><div class='member-liked'><div class='left'><a onclick='getgroupmembers("+id+");'> Members </a><span class='blue-like'>" +members+ "</span></div><div class='right'><p class='blue-like1'>"+likes+"</p><p class='imgspan'>"+span+"<img src='img/fblike.png'></p></div></div></div>"+postthis+"<div id='postdata-main'>"+postdata+"</div>   "; 
                    }                 
            jQuery("#student-class-group-pge").append(groupcenterdivdd);
  jQuery(".search-post").append('<input type="text" placeholder="Search... " name="search" id="postsrch" onclick="postsrch('+id+');" >');

                jQuery(".search-post-append").after('<img class=side id=side_menuu src=img/drop1.png  onclick=showsearch();>');

     jQuery(".search-post-append").after("<div class='back' onclick='getgroups2();'>Back</div>");
          
          
        }
         else{
          jQuery("#student-class-group-pge").append("<div class='class-groups-center'><p id='result-notfound'>Yet No Group Found</p></div>");

          
         }

 //jQuery("#student-class-group-pge").after("<div class='back' onclick='getgroups2();'>Back</div>");
     
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}


function getgroupwallnoti(id){

  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
jQuery('.backa,.back5,.backa6, .back4, .back3,.back8,.back15').hide();
jQuery('.search-post-append').hide();
  //jQuery('.back').html("");
  //alert('get classes');
  var task = "getgroupwall";
  var userid = userid;

  var formData = {
   task: task,
  
 groupuserid: userid, 
  wallgroupid: id,
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {
      jQuery(".search-post").html('');
    //alert(groupresponse);
    
    jQuery('#student-class-group-pge').html('');
        var groupobj = jQuery.parseJSON(groupresponse);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }

   
     var  lengthgroups=garr.length;
    // console.log(lengthgroups);
         if(lengthgroups !== 0){

           
            var getstringifygroup = JSON.stringify(groupobj[1]);

              var groupRslt = jQuery.parseJSON(getstringifygroup);
              var groupid = groupRslt.groupid;

               localStorage.setItem('groupidlocal',groupid);  
              var groupname = groupRslt.groupname;
              var groupDesc = groupRslt.description;
              var hits= groupRslt.hits;
              var cover= groupRslt.cover;
              var  members=groupRslt.members;
              var  plus=groupRslt.selected;
              var  likes=groupRslt.likes;
              grouplike=groupRslt.grouplike;
            nomember=groupRslt.nomember;


              
                        var imgarray= groupRslt.activity;
//console.log(imgarray);
var postdata="";

$.each(imgarray,function(index,item){

                                        var actorname=item.actorname;
                                        var actor=item.actor;
                                        var  app=item.app;
                                        //alert(app);
                                        var content=item.content;
                                        var title=item.title;
                                        var  verb=item.verb;
                                        var  avatars=item.avatar;
                                        var  timeago=item.time;
                                        var  comments=item.comments;
                                        var  likescount=item.likescount;
                                        var  unlike=item.unlike;
                                        var  title1=item.title1;
                                        var  params=item.params;
                                        allrows=item.allrows;
                                        var  content_id=item.content_id;
                                        var  photomain1=item.photomain1;
                                        var  photomain2=item.photomain2;
                                        var  commentsrow=item.commentsrow;
                                         var  pathvideo=item.pathvideo;
                                        var hashtags=item.hashtags;


                                       //title.replace(/#(\w+)/g, "<a 'onclick=abc();'>$&</a>");


                                          /*if(hashtags){
                                            

                                              var res = hashtags.split("#"); 

                                              for(i=1;i<=res.length;i++){
                                                //alert(res[i]);
                                                var str=res[i];
                                                       if(str!=undefined){
                                                        
                                                    var n= title.search(str);
                                                   
                                                         }

                                              }
                                          }*/
                                      
                                           //var res = hashtags.split("#"); 
                                          // alert(res);
                                           // var n = title.search("W3Schools"); 

var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
var match = title1.match(regExp);


var teacherArr=[];

 
if (match && match[2].length == 11) {

var id= match[2];
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+id+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var udescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var str=udescription.substring(0,50);
jQuery('.descriptionvideo').append(str);
jQuery('.descriptionvideo').append('..');
}

});

var iframe="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  iframe="";
}
if(pathvideo){
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+pathvideo+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var vdescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var strb=vdescription.substring(0,50);
jQuery('.descriptionvideo').append(strb);
jQuery('.descriptionvideo').append('..');
}

});

var pathvideo="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  pathvideo="";
}














//alert(id);
//jQuery('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');




if(photomain1!=undefined&&photomain1!=""){
                
//alert(photomain1);
                    var photomain1s='http://bahuka.com/home/'+photomain1;





                    var ddss="<div class='post-image'><img src='"+photomain1s+"'></div>";
              }
              else{
                ddss="";
              }





if(photomain2!=undefined&&photomain2!=""){
                  var photomain2s='http://bahuka.com/home/'+photomain2;
//alert(photomain2);

/*
jQuery("<img>", {
    src: photomain2s,
    error: function() { var ddssa="" },
    load: function() { alert(photomain2s + ': ' + true); }
});

*/









                  
                    var ddssa="<div class='post-image hghgh'><img src='"+photomain2s+"'></div>";
              }
              else{
                ddssa="";
              }





  var likescounta="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span  id='likecount_"+content_id+"' class='likecount-span'>"+likescount+"</span><span>Likes</span></p>";





              var actorimg='http://bahuka.com/home/'+avatars;

              if(avatars==""){
                var gg="http://bahuka.com/home/images/no-image-found.png";
                actorimg=gg;
              }

   var commentsaa="";
if(allrows>2){


var showmore="<div class='show_more_comments' id= 'showmore"+content_id+"' onclick='showmorecomments("+content_id+");'><div class='show_more_para'><p><a>Show more comments</a></p></div></div>";


}

else{
showmore="";

}

$.each(comments,function(index,item){

var likescountc=item.likescountc;
var unlikecomment=item.unlikecomment;


if(unlikecomment>0){

var unlikepostc="<a class='buttonc_"+item.idc+"'   href='javascript:' onclick='likecomment("+item.idc+",this)'>unlike</a>";
}
else{

 unlikepostc="<a class='buttonc_"+item.idc+"' href='javascript:' onclick='likecomment("+item.idc+",this)'>like</a>";
}


var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+item.idc+"'>"+likescountc+"</span> <span>Likes</span></p>";

/*else{
commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'>span id='commentlike_"+item.idc+"'>"+likescountc+" </span> <span>Likes</span></p>";

}*/
var timec=item.timec;
                var actorimgs='http://bahuka.com/home/'+item.avatarc;


                if(item.paramsc){

                    var paramsc='http://bahuka.com/home/'+item.paramsc;
                    var dd="<div class='post-image'><img src='"+paramsc+"'></div>";
                }
                else{

                  dd="";
                }
            
              if(item.avatarc==""){
                var ggdd="http://bahuka.com/home/images/no-image-found.png";
                actorimgs=ggdd;
              }


         

    var commenttext= "";
               commentsaa+="<div class='comment-main' id='"+item.idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+item.namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+item.namec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+item.commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div class='post_time_div'>"+timec+"</div></div></div>";

});
 var time ="<span>"+timeago+"</span>";
if(unlike>0){

var unlikepost="<div class='ulcomment'><a class='button_"+content_id+"'   href='javascript:' onclick='likepost("+content_id+",this)'>unlike</a></div>";
}
else{

 unlikepost="<div class='ulcomment'><a class='button_"+content_id+"' href='javascript:' onclick='likepost("+content_id+",this)'>like</a></div>";
}

if(verb=='post'||app=='photos'||app=='videos'){
 var artcle="<div class='article-post'><span class='more'>"+title+"</span>"+iframe+""+pathvideo+"</div>"+ddss+""+ddssa+"<div class='artcle-like'>"+likescounta+""+unlikepost+"</div>";


  
}
/*else{
  artcle="<div class='article-post  content'><span>"+content+"</span>"+likescounta+"<a class='button' href='javascript:' onclick='likepost("+content_id+")'><span id='like'></span></a></div>";
}*/
if(app=='groups.wall'||app=='photos'||app=='videos'){




  postdata+="<div class='post-meta' id='"+content_id+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='main_time_post'><div class='joms-stream__meta'><a class='joms-stream__user' href='javascript:' onclick='viewprflnew("+actor+","+groupid+");'>"+actorname+"</a><span class='image_post' ><img src='img/arrow-icon.jpg'></span><a  class='group-meta' href='#'>"+groupname+"</a></div><div class='post_time_div'>"+time+"</div></div></div>"+artcle+"<div class='commentshow-"+content_id+"'>"+commentsaa+"</div>"+showmore+"<div class='text' id='text-"+content_id+"'><textarea name='comment-text' id='textarea_comment"+content_id+"' cols='40' row='4' placeholder='write a comment'  onclick='myfunctionc("+content_id+");'></textarea><div class='pixform-left'><img  src='img/images.png' onclick ='getImage1();'><div id='commentLoading'></div></div><div class='commentstatus' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='comment' value='post' id='comment-post"+content_id+"'  onclick='addcomment("+groupid+","+content_id+");' style='display:none;' ></div></div></div>";
}


/*else if(app=='groups.join'){


  var actors=obj.actors;

  var res = actors.split(","); 
var users="";

var count=res.length-1;

var teacherArre = [];
 for(i=0; i < 1; i++)
      {

        
var idss=res[i];
var collabcclz = localStorage.getItem('collabc');
 
//alert(collabcclz);
/*  ajax hit question save value
var task ='viewprofl';
var useridpr = idss;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {   

    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );
    usernamea=objsp.usrname;
       
jQuery(".join").append(usernamea); 
 


  },
error: function () 
    { 
      //alert("Error");
    }
  }); 

 
      }
 
postdata+="<div class='join-class' id='"+content_id+"'><div class='joms-stream'><a class='join' href='#'></a> and "+count+" others join class.</div></div>";

      //alert(username);
 }

 else if(app=='groups.like'){


  var actors=obj.actors;

  var res = actors.split(","); 
var users="";var teacherArr = [];
 for(i=0; i < res.length; i++)
      {
var idss=res[i];
var collabcclz = localStorage.getItem('collabc');
 
//alert(collabcclz);
/*  ajax hit question save value 
var task ='viewprofl';
var useridpr = idss;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {   

    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );
    username=objsp.usrname;
         //teacherArr.push(username); 

  jQuery(".like-group").append(username+' and '); 


  },
error: function () 
    { 
      //alert("Error");
    }
  }); 

 
      }

postdata+="<div class='join-class' id='"+content_id+"'><div class='joms-stream'><a class='like-group' href='#'></a>like class.</div></div>";

      //alert(username);
 }
 else if(app=='groups.discussion'){

 postdata+="<div class='post-meta' id='"+content_id+"'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='joms-stream__meta'><a class='joms-stream__user' href='#'>"+actorname+"</a>Posted a new discussion</div><div class='post-params'>"+obj.topic+"</div>"+artcle+""+commentsaa+"</div>";
 }


 else if(app=='groups.avatar.upload'){


var cavatra='http://bahuka.com/home/'+obj.avatar_cropped_thumb;
if(obj.avatar_cropped_thumb==""){
var ggs="http://bahuka.com/home/images/no-image-found.png";
                cavatra=ggs;

}
 postdata+="<div class='post-meta' id='"+content_id+"'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='joms-stream__meta'><a class='joms-stream__user' href='#'>"+actorname+"</a>changed "+groupname+" avatar.</div><div class='best-match-pro'><div class='best-tchr-image'><img src='"+cavatra+"'></div></div>"+commentsaa+"</div>";
 }
*/
 

           });

            var  imgd="";

 var img='http://bahuka.com/home/'+cover;
if(cover==""||cover==null){

  var imgds ="http://bahuka.com/home/components/com_community/assets/cover-group-default.png";
    img=imgds; 
}
var ff="";
 if(plus==0){
ff="<div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'><img src='img/pluss.png' id='plus"+groupid+"' onclick='joingroup("+groupid+");'></div></div></div>";
 }
 else{

  ff="<div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'><img src='img/checkimg1.png' id='remove"+groupid+"' onclick='removegroup("+groupid+");'></div></div></div>";
 } 
                 
if(grouplike>0){

var span="<span  onclick='grouplikess("+groupid+",this);' class='grouplike'>Liked</span>";
}
else{

 span="<span  onclick='grouplikess("+groupid+",this);' class='grouplike'>Like</span>";
}

if(groupname==null)

{

var groupcenterdivdd="<div class='main--post'><h2 style='text-align:center;color:red;'>Class not found </h2></div>";



}
else{


if(nomember=="yes"){


  var postthis="<div class='joms-postbox-input joms-inputbox'><textarea id='add_post' class='input input-status' name='add_post' placeholder='Ask a question,post resources start a # ,or post your notes....' rows='4' cols='31' onclick='myFunction();'></textarea><div class='pixform-left'><img  src='img/images.png'onclick ='getImage();'><div id='imageLoading'></div></div><div class='status' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='post' value='post' id='button-post'  onclick='addpost("+groupid+");' style='display:none;' ></div></div><div class='activity'  style='display:none;'><p>Join class and join  activity </p></div></div>";


}

else{

  var postthis="<div class='joms-postbox-input joms-inputbox' style='display:none;'><textarea id='add_post' class='input input-status' name='add_post' placeholder='Ask a question,post resources start a # ,or post your notes....' rows='4' cols='31' onclick='myFunction();'></textarea><div class='pixform-left'><img  src='img/images.png'onclick ='getImage();'><div id='imageLoading'></div></div><div class='status' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='post' value='post' id='button-post'  onclick='addpost("+groupid+");' style='display:none;' ></div></div><div class='activity'><p>Join class to post activity </p></div></div>";


}







    var groupcenterdivdd= "<div class='main--post'><div class='joms-focus__cover'><div style='background:url("+img+") no-repeat center center / cover ;' class='joms-focus__cover-image--mobile'></div><div class='joms-focus__header'><div class='joms-focus__title'><h3>"+groupname+"</h3> <p>"+groupDesc+"</p></div><div class='joms-avatar--focus'>"+ff+"</div></div><div class='member-liked'><div class='left'><a onclick='getgroupmembers("+id+");'> Members </a><span class='blue-like'>" +members+ "</span></div><div class='right'><p class='blue-like1'>"+likes+"</p><p class='imgspan'>"+span+"<img src='img/fblike.png'></p></div></div></div>"+postthis+"<div id='postdata-main'>"+postdata+"</div>   "; 
                    }                 
            jQuery("#student-class-group-pge").append(groupcenterdivdd);
  jQuery(".search-post").append('<input type="text" placeholder="Search... " name="search" id="postsrch" onclick="postsrch('+id+');" >');

                jQuery(".search-post-append").after('<img class=side id=side_menuu src=img/drop1.png  onclick=showsearch();>');

     jQuery(".search-post-append").after("<div class='back13'><a href='notifications.html'>Back</a></div>");
          
          
        }
         else{
          jQuery("#student-class-group-pge").append("<div class='class-groups-center'><p id='result-notfound'>Yet No Group Found</p></div>");

          
         }

 //jQuery("#student-class-group-pge").after("<div class='back' onclick='getgroups2();'>Back</div>");
     
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}


























jQuery(window).scroll(function(){
  //alert('grr');
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.side').fadeIn();
    

    } else {
    

    
      jQuery('.side').fadeOut();
    }
  });
  function showsearch(){
  //Click event to scroll to top
  $('.side').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
}
























function likepost(contentid,ab){

var currentId = $(ab).text();

 var  userid = localStorage.getItem('loginurid');
//alert(collabcclz);

var task ='likepost';
var likeuserid = userid;

var formData = {
task: task,
likeuserid:likeuserid,
contentid :contentid,
likeunlike :currentId,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprzlike) 
    {  
    //alert(responseprzlike); 

//jQuery('#like').html('unlike');
    var objsplike = jQuery.parseJSON( responseprzlike );
 
     
   
    countlikes=objsplike.countlikes;
    likeme=objsplike.likeme;

 contentid=objsplike.contentid;

if(likeme=='1'){



jQuery('#likecount_'+contentid).html(countlikes);
jQuery('.button_'+contentid).html('unlike');
}
else{
jQuery('.button_'+contentid).html('like');
jQuery('#likecount_'+contentid).html(countlikes);

}




  },


error: function () 
    { 
      //alert("Error");
    }
  }); 
}

function likecomment(contentid,ab){

var currentId = $(ab).text();

var  userid = localStorage.getItem('loginurid');


var task ='likecomment';
var likeuserid = userid;

var formData = {
task: task,
likecuserid:userid,
commentid :contentid,
likeunlikec :currentId,
};
jQuery.ajax({
type: "post",
url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
data: formData,
//  beforeSend: function () { jQuery.mobile.loading('show'); },
success: function(responseprzlike) 
{  
//alert(responseprzlike); 

//jQuery('#like').html('unlike');
var objsplike = jQuery.parseJSON( responseprzlike );

 

countlikesc=objsplike.countlikesc;
likemec=objsplike.likemec;

commentid=objsplike.commentid;

if(likemec=='1'){

jQuery('.buttonc_'+commentid).html('unlike');
}
else{
jQuery('.buttonc_'+commentid).html('like');

}

jQuery('#commentlike_'+commentid).html(countlikesc);


},


error: function () 
{ 
  //alert("Error");
}
}); 
}


















function viewprflss(id)
{
jQuery(".back9").hide('');
userid=id ? id : localStorage.getItem('loginurid');
  var collabcclz = localStorage.getItem('collabc');
 var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      

    jQuery("#student-class-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;
if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
 like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
   if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } 
  if(cityreslts && statereslts && countryreslts ){
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


  tt="";
}
else{

 tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}
if(profilelike>0){

var span="<span  onclick='profilelikess("+userid+","+puserid+",this);' class='profilelike'>Liked</span>";
}
else{

 span="<span  onclick='profilelikess("+userid+","+puserid+",this);'  class='profilelike'>Like</span>";
}


  first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'><p>"+username+"</p><span>"+st+", "+collegename+"</span></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'><div class='about_center_div'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><span class='imgspans'><img src='img/fblike.png'></span>"+span+"<span class='blue-like2'>"+like+"</span></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

    
    getgroups1(id);

    jQuery(".search-post-append").after("<div class='back11'><a href='teachers.html'>Back</a></div>");
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 
}



function timelineContent(id){
 
  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "timelineContent";
  var userid = userid;

  var formData = {
   task: task,
  
 groupuserid: userid, 
  wallgroupid: id,
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {
    
  
     
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}

function removegroup(groupid){
 
  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "removegroup";
  var userid = userid;

  var formData = {
   task: task,
   removegroupid: groupid, 
    ruserid: userid, 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {

jQuery('#plusadd'+groupid).html("<img src='img/pluss.png' id='plus"+groupid+"' onclick='joingroup("+groupid+");'>");
     //jQuery("#plus"+groupid).attr("src", "img/pluss.png");


     jQuery('.joms-postbox-input').hide();
jQuery('.activity').show();
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}



function joingroup(groupid){
 
  var  userid = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "joingroup";
  var userid = userid;

  var formData = {
   task: task,
   groupid: groupid, 
    ugroupid: userid, 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {

jQuery('#plusadd'+groupid).html("<img src='img/checkimg1.png' id='remove"+groupid+"' onclick='removegroup("+groupid+");'>");
jQuery('.joms-postbox-input').show();
jQuery('.activity').hide();
     // jQuery("#plus"+groupid).attr("src", "img/checkimg1.png");
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}


function notifications(){
 

 jQuery("body").addClass('hidenoti');
  var  userid = localStorage.getItem('loginurid');
   var  userids = localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "notifications";
  var userid = userid;

  var formData = {
   task: task,
   notiuserid: userid, 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData, 
   // dataType:"json",
    success: function(groupresponse) {
     
jQuery("#divLoading").removeClass('show');



  var groupobj = jQuery.parseJSON(groupresponse);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
        lengthgroups = garr.length;

         if(lengthgroups !== 0){
 var notificationdiv="";
            for(group = 1; group <= lengthgroups; group++)
            {
              //alert(group);


             
             var groupRslt = jQuery.parseJSON(JSON.stringify(groupobj[group]));


             var cmd_type = groupRslt.cmd_type;
            var  params = groupRslt.params;
           var  time = groupRslt.time;
            var act_id = groupRslt.act_id;

           var  userid = groupRslt.userid;
           //   //var obj = jQuery.parseJSON( params );
             
               var actor = groupRslt.actor;
                var groupss = groupRslt.groupdd;

               var user = groupRslt.user;
                     //alert(group);        
      if(cmd_type == 'notif_comments_like')
      {
        if(actor!=null){
          notificationdiv += "<div  class='notification_center' onclick ='showcomments("+act_id+");'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber'> "+actor+ "</span> like your <span >comment</span></h1><p> "+time+" </p> </div><div class='notifcation_image'></div></div></li></ul></div>";
        }
      }
      else if(cmd_type == 'notif_groups_wall_create')
      { 
        if(actor!=null){
          notificationdiv += "<div  class='notification_center' onclick='getgroupwallnoti("+userid+");'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber'> "+actor+ "</span> posted in the <span id='notic_action'>"+groupss+" class.</span></h1><p> "+time+" </p> </div></div></li></ul></div>";
        }
      }
      else if(cmd_type == 'notif_groups_invite')
      {
             if(actor!=null){
          notificationdiv += "<div  class='notification_center'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber'> "+actor+ "</span> invited you to join class</h1><p> "+time+" </p> </div></div></li></ul></div>";
        }
      }
      else if(cmd_type == 'notif_groups_member_join')
      {

             if(actor!=null){
          notificationdiv += "<div  class='notification_center' onclick='getgroupwallnoti("+userid+");'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber'> "+user+ "</span> join your<span id='notic_action'> " +groupss+" class</span></h1><p> "+time+" </p> </div></div></li></ul></div>";
        }
      }
      else if(cmd_type == 'notif_friends_request_connection')
      {
             if(actor!=null){
          notificationdiv += "<div  class='notification_center'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber'> "+actor+ "</span>  requested to be your friend</h1><p> "+time+" </p> </div></div></li></ul></div>";
        }

}

          else if(cmd_type == 'notif_profile_like')
      {
             if(actor!=null){
          notificationdiv += "<div  class='notification_center'  style='font-weight:bold;cursor:pointer;' onclick='viewprfl1new("+userids+");'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber' style='font-weight:bold;cursor:pointer;'> "+actor+ "</span>  liked your <span style='font-weight:bold;cursor:pointer;' onclick='viewprfl1new("+userids+");'>profile</span></h1><p> "+time+" </p> </div></div></li></ul></div>";
        }
      }

    else if(cmd_type == 'notif_groups_create_album')
      {
             if(actor!=null){
          notificationdiv += "<div  class='notification_center' onclick='getgroupwallnoti("+userid+");'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1><span id='notic_nmber'> "+actor+ "</span>  created a new <span id='notic_action'>"+groupss+"</span> photos album in the <span id='notic_action'> "+groupss+"</span> class. </h1><p> "+time+" </p> </div></div></li></ul></div>";
        }
}
        else if(cmd_type == 'notif_system_messaging')
      {
            
          notificationdiv += "<div  class='notification_center'><ul class='notific_lists'><li><div class=list_notific_details><div  class='notification_text'><h1> <span id='notic_nmber'>Thank you for Registering on Bahuka</span> </h1><p> "+time+" </p> </div></div></li></ul></div>";
        
      }




      else{

      }
 }


        jQuery('.notification_main').append(notificationdiv);
}

else{


     datad = "<div class='student-class-teacher-pge'><p class='notecherfound notificationnew'>No Notification Yet</p><div class='techerimage'><img src='img/nonotification.png'></div></div>";
       
       jQuery('.notification_main').append(datad);




}

 jQuery(".search-post-append").after("<div class='back15' onclick='history.back();'>Back</div>");

    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}

window.setInterval(function () {
    countnoti();
},  1000);

var countnoti = function() {
    var logincountid = localStorage.getItem('loginurid');
    var formData = {
        task: "countnotifications",
        loginidcount : logincountid
    }; 
    jQuery.ajax({
        type: "POST",
        url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
        data: formData,
        dataType:"json",
        success: function(response) 
        {      
         if(response.totalnoti != 0){           

          //jQuery(".sidebar_main_div .notinum.iconn-animated.flash ").html("j");

         // alert(response.totalnoti);
           /* if(response.totalnoti != 0){           
             var userdata = "<p><a href='notifications.html' data-hint='NOTIFICATIONS' class='ic-btn hint--left '>Notifications</a><img src='img/notification.png' /><span class='notinum iconn-animated  flash'>" + response.totalnoti + "</span><p>";
            }
            else {
                var userdata = "<p><a href='notifications.html' data-hint='NOTIFICATIONS' class='ic-btn hint--left '>Notifications</a><img src='img/notification.png'/><span class='notinum iconn-animated  flash'></span><p>";
            }*/
            jQuery(".sidebar_main_div .notinum.iconn-animated.flash ").html(response.totalnoti);
            }
        }
        
    });
}
















function getgroups1(id){

  currentuserid = id;
  var  userid = currentuserid ? currentuserid :localStorage.getItem('loginurid');
  //alert(userid);
  //alert('get classes');
  var task = "getgroupsa";

  var formData = {
   task: task,
   groupuserida: userid, 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,   
    success: function(groupresponse) {

    jQuery('#student-clases-groups').html('');
        var groupobj = jQuery.parseJSON(groupresponse);
      
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
        lengthgroups = garr.length;

         if(lengthgroups !== 0){

            for(group=1;group<=lengthgroups;group++)
            {

            var getstringifygroup = JSON.stringify(groupobj[group]);
            var groupRslt = jQuery.parseJSON(getstringifygroup);

            var groupid = groupRslt.groupid;
            var groupname = groupRslt.groupname;
            var groupDesc = groupRslt.description;
            var groupmembers = groupRslt.membercount;
            var grouphits = groupRslt.totalhits;   



        var imgarray= groupRslt.members;
console.log(imgarray);
var  imgd="";
           $.each(imgarray,function(index,item){
   // alert(item.avatar);

    var img='http://bahuka.com/home/'+item.avatar;

    if(item.avatar==""|| item.avatar==null)
    {
var ttd ="http://bahuka.com/home/images/no-image-found.png";
  img=ttd;
    }
   imgd +="<div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+img+"' title='"+item.name+"'></div></div>";
});

var join =1; 
if(join>0){
var tta="";
 tta= "<img src='img/checkimg1.png'>";
}
else{

  tta= "<img src='img/pluss.png'>";
}
            var groupcenterdiv = "<div class='class-groups-center'><div class='class-groups'><div class='group-image'><img src='img/book2.png'></div><div class='group-name'><a href='#' onclick='getgroupwall("+groupid+");'>"+groupname+"</a><p>"+groupDesc+"</p></div><div class='group-memebrs-center'>"+imgd+"<div class='main-circle-div'><div class='divcircle_wrapper'>"+tta+"</div></div></div><div class='grp-memberscount'><a href='#'>"+groupmembers+" Members</a></div><div class='bottm-line'></div></div></div>";  

            jQuery("#student-clases-groups").append(groupcenterdiv);
            
            
           }
        }
         else{
          jQuery("#student-clases-groups").append("<div class='class-groups-center'><p id='result-notfound'>Yet No Group Found</p></div>");
         }
     
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  
}















/* 
* groupsrch() used to search groups in Class Group page
*/
function groupsrch()
{
jQuery("#groupsrch").keyup(function(){
 var srchgrupidd = jQuery(this).val();
 var  userid = localStorage.getItem('loginurid');
//alert(srchgrupidd);
 var task ='getgroups';
 var srchkeyidval = srchgrupidd;
 var useridval = userid;

 var formData = {
 task: task,
 srchgroupkey:srchkeyidval,
 groupuserid: useridval,

 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(Srchresponse) 
    {
       // console.log(Srchresponse);
      var obj = jQuery.parseJSON( Srchresponse );
   
      var arr = [], obj;

      for(key in obj) {
          arr.push(key);
      } 
      len = arr.length;       
      //console.log(len) 

      /*if(len==0)
      {
        jQuery('#student-clases-added').html('');
         datad = "<div class='student-class-button-pge'><p>No record found</p></div>";
       
       jQuery('#student-clases-added').append(datad);
        //alert('ddd');
        return false;

      }*/

      jQuery("#student-clases-groups").html('');
      var p=1;
      for(i=1; i<=len;i++)
      {


        var getstringify = JSON.stringify(obj[i]);
        //console.log(getstringify);
        var objss = jQuery.parseJSON( getstringify );
        //console.log(getstringify);

        var groupid = objss.groupid;
        var groupname = objss.groupname;
        var groupDesc = objss.description;
        var groupmembers = objss.membercount;
        var grouphits = objss.totalhits;  
var imgarray= objss.members; 
var join= objss.join;

if(join>0){
var tta="";
 tta= "<img src='img/checkimg1.png' id='remove"+groupid+"' onclick='removegroup("+groupid+");'>";
}
else{

  tta= "<img src='img/pluss.png' id='plus"+groupid+"' onclick='joingroup("+groupid+");'>";
}



//console.log(imgarray);
var  imgd="";
           $.each(imgarray,function(index,item){
   // alert(item.avatar);

    var img='http://bahuka.com/home/'+item.avatar;


    if(item.avatar==""){

      var ttds ="http://bahuka.com/home/images/no-image-found.png";
   ttds=img; 
    }
   imgd +="<div class='main-circle-div'><div class='divcircle_wrapper' ><img src='"+img+"' title='"+item.name+"'></div></div>";
});
        if(groupid == null){
         // alert('jas');

          var groupcenterdiv = "";  

     
        }

        else{
//alert('hello');

       var groupcenterdiv = "<div class='class-groups-center'><div class='class-groups'><div class='group-image'><img src='img/book2.png'></div><div class='group-name'><a href='javascript:' onclick='getgroupwall("+groupid+");'>"+groupname+"</a><p>"+groupDesc+"</p></div><div class='group-memebrs-center'>"+imgd+"<div class='main-circle-div'><div class='divcircle_wrapper' id='plusadd"+groupid+"'>"+tta+"</div></div></div><div class='grp-memberscount'><a href='#'>"+groupmembers+" Members</a></div><div class='bottm-line'></div></div></div>";


        }

        
        p++; 
   jQuery("#student-clases-groups").append(groupcenterdiv);
      }

  
    },
    error: function () 
    { 
     // alert("Error");
    }
  }); /* Ajax end */
 });  /* Jquery keup end */

}

function postsrch(groupid)
{

  jQuery('.back,.backa,.back2,.back3,.back4,.back5,.back6,.back7').hide();
 jQuery("#postsrch").keyup(function(){
 var srchgrupidd = jQuery(this).val();

 var  userid = localStorage.getItem('loginurid');
//alert(srchgrupidd);
 var task ='getpostsearch';
 var postsrchval = srchgrupidd;
 var puseridval = userid;

 var formData = {
 task: task,
 postsrchval:postsrchval,
 puseridval: puseridval,

  pgroupid: groupid,

 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(Srchresponse) 
    {
      jQuery(".search-post-append").show();
      jQuery(".search-post-append").html('');
     
      var obj = jQuery.parseJSON( Srchresponse );
   
      var arr = [], obj;

      for(key in obj) {
          arr.push(key);
      } 
      len = arr.length;       
      //console.log(len) 
if(len!=0){
     jQuery("#postdata-main").html("");
var title1="";
      var p=1;
      for(i=1; i<=len;i++)
      {


                  var getstringify = JSON.stringify(obj[i]);
                  //console.log(getstringify);
                  var objss = jQuery.parseJSON( getstringify );
                  //console.log(getstringify);

                  var id = objss.id;
                  var title = objss.title;
                  content = objss.content;
                  avatar = objss.avatar;
                  params = objss.params;
                  content_id = objss.content_id;
                  actorname = objss.actorname;
                  groupname = objss.groupname;
                  app = objss.app;
                   actor = objss.actor;

                   photomain2=objss.photomain1;
                  verb = objss.verb;
                  likescount = objss.likescount;
                  unlike = objss.unlike;
                  timeago = objss.time;
                  comments = objss.comments;
                    pathvideo = objss.pathvideo;
                  var postdata="";
                  likescount = objss.likescount;
  var likescounta="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span  id='likecount_"+content_id+"' class='likecount-span'>"+likescount+"</span><span>Likes</span></p>";

 groupid = objss.groupid;
 
if(title!=null)
{



              title1="<a href='#"+content_id+"' ><p class='append-div'>"+objss.tag+"</p></a>";
              $(".search-post-append").css("border", " 3px solid gray"); 
              jQuery(".search-post-append").append(title1);



                                      var actorimg='http://bahuka.com/home/'+avatar;

                                      if(avatar==""){
                                      var gg="http://bahuka.com/home/images/no-image-found.png";
                                      actorimg=gg;
                                      }

                                      var commentsaa="";


                                  $.each(comments,function(index,item){


                                  var likescountc=item.likescountc;
                                  var unlikecomment=item.unlikecomment;


                                  if(unlikecomment>0){

                                  var unlikepostc="<a class='buttonc_"+item.idc+"'   href='javascript:' onclick='likecomment("+item.idc+",this)'>unlike</a>";
                                  }
                                  else{

                                  unlikepostc="<a class='buttonc_"+item.idc+"' href='javascript:' onclick='likecomment("+item.idc+",this)'>like</a>";
                                  }


                                  var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+item.idc+"'>"+likescountc+"</span> <span>Likes</span></p>";

                                
                                  var timec=item.timec;
                                  var actorimgs='http://bahuka.com/home/'+item.avatarc;


                                  if(item.paramsc){

                                  var paramsc='http://bahuka.com/home/'+item.paramsc;
                                  var dd="<div class='post-image'><img src='"+paramsc+"'></div>";
                                  }
                                  else{

                                  dd="";
                                  }

                                  if(item.avatarc==""){
                                  var ggdd="http://bahuka.com/home/images/no-image-found.png";
                                  actorimgs=ggdd;
                                  }

                                  var commenttext= "";
                                  commentsaa+="<div class='comment-main' id='"+item.idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+item.namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+item.namec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+item.commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div class='post_time_div'>"+timec+"</div></div></div>";

                                  });


if(pathvideo){
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+pathvideo+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {
jQuery(".back").html("");
var title=response.items[0].snippet.title;
var vdescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var strb=vdescription.substring(0,50);
jQuery('.descriptionvideo').append(strb);
jQuery('.descriptionvideo').append('..');
}

});

var pathvideo="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  pathvideo="";
}












if(photomain2!=undefined&&photomain2!=""){
                
//alert(photomain2);
                    var photomain2s='http://bahuka.com/home/'+photomain2;
                    var ddssa="<div class='post-image hghgh'><img src='"+photomain2s+"'></div>";
              }
              else{
                ddssa="";
              }
  var time ="<span>"+timeago+"</span>";
if(unlike>0){

var unlikepost="<div class='ulcomment'><a class='button_"+content_id+"'   href='javascript:' onclick='likepost("+content_id+",this)'>unlike</a></div>";
}
else{

 unlikepost="<div class='ulcomment'><a class='button_"+content_id+"' href='javascript:' onclick='likepost("+content_id+",this)'>like</a></div>";
}

if(verb=='post'||app=='photos'||app=='videos'){





   var artcle="<div class='article-post more'>"+title+""+pathvideo+"</div>"+ddssa+"<div class='artcle-like'>"+likescounta+""+unlikepost+"</div>";
}

if(app=='groups.wall'|| app=='photos'||app=='videos'){


 postdata="<div class='post-meta' id='"+content_id+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='main_time_post'><div class='joms-stream__meta'><a class='joms-stream__user' href='javascript:' onclick='viewprfl1("+actor+");'>"+actorname+"</a><span class='image_post'><img src='img/arrow-icon.jpg'></span><a  class='group-meta' href='#'>"+groupname+"</a></div><div class='post_time_div'>"+time+"</div></div></div>"+artcle+"<div id='commentshow-"+content_id+"'>"+commentsaa+"</div><div class='text' id='text-"+content_id+"'><textarea name='comment-text' id='textarea_comment"+content_id+"' class='hashtagtext' cols='40' row='4' placeholder='write a comment'  onclick='myfunctionc("+content_id+");'></textarea><div class='pixform-left'><img  src='img/images.png' onclick ='getImage1();'><div id='commentLoading'></div></div><div class='commentstatus' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='comment' value='post' id='comment-post"+content_id+"'  onclick='addcomment1("+groupid+","+content_id+");' style='display:none;' ></div></div></div>";
  
 
}
     var  imgd="";

              jQuery("#postdata-main").append(postdata);
 
}

      }


 
 





  }




  else
{

   jQuery(".search-post-append").append("<div class='class-groups-center'><p id='presult-notfound'>No Record Found</p></div>");
        

setTimeout('$(".search-post-append").hide()',1500);


       
}

 




    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 
 });  
jQuery(".search-post-append").after("<div class='back8' onclick='getgroupwall("+groupid+");'>Back</div>");
}
 











/***************Delete score*************/
function deletescore(answerid){
  var  userid = localStorage.getItem('loginurid');

//alert(userid);

//alert(collabcclz);
/*  ajax hit question save value */
var task ='deletescore';
var useridpr = userid;
var answerid = answerid;
var formData = {
task: task,
deletesuserid:   useridpr,
answerid:   answerid,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
 var obj = jQuery.parseJSON(responseprz);
       var getstringify = JSON.stringify(obj[1]);
        //console.log(getstringify);
        var objss = jQuery.parseJSON(getstringify);
        //console.log(getstringify);

        var daid = objss.daid;
        console.log(daid);
    jQuery("#"+daid).remove();
     
    },
    error: function () 
    { 
      //alert("Error");
    }
  });

}
function deleteteacher(userid,tid){
  var  userid = localStorage.getItem('loginurid');

//alert(userid);

//alert(collabcclz);
/*  ajax hit question save value */
var task ='deleteteacher';
var useridpr1 = userid;
var tid = tid;
var formData = {
task: task,
deletesuserid1:useridpr1,
tid: tid,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
 var obj = jQuery.parseJSON(responseprz);
       var getstringify = JSON.stringify(obj[1]);
        //console.log(getstringify);
        var objss = jQuery.parseJSON(getstringify);
        //console.log(getstringify);

        var daid = objss.daid;
        console.log(daid);
    jQuery("#"+daid).remove();
     
    },
    error: function () 
    { 
      //alert("Error");
    }
  });

}
function deletependingteacher(ptid){
  var  userid = localStorage.getItem('loginurid');

//alert(userid);

//alert(collabcclz);
/*  ajax hit question save value */
var task ='deletependingteacher';
var formData = {
task: task,
pendingcs:ptid,
useriddpending: userid,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
 var obj = jQuery.parseJSON(responseprz);
       var getstringify = JSON.stringify(obj[1]);
        //console.log(getstringify);
        var objss = jQuery.parseJSON(getstringify);
        //console.log(getstringify);

        var daid = objss.daid;
        console.log(daid);
    jQuery("#pending_"+daid).remove();
     
    },
    error: function () 
    { 
      //alert("Error");
    }
  });

}

/* Get User Profile */
function getuserprofile(){
  var  userid = localStorage.getItem('loginurid');

//alert(userid);

//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var formData = {
task: task,
useridpr:   useridpr,
 };










  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      jQuery("#main-content #sidebar .sidebar_main_div .sidebar_profile").html("");
      //console.log(responseprz);

      var objsprofl = jQuery.parseJSON( responseprz );
      var getuserprf= JSON.stringify(objsprofl[1]);
      var objsprofl = jQuery.parseJSON( getuserprf );
      //console.log(getuserprf);

      useridpr=objsprofl.useridpr;
      username=objsprofl.usrname;
      useremail=objsprofl.usremail;
       avatar=objsprofl.thumb;

      var img='http://bahuka.com/home/'+avatar;

       if(avatar==""||avatar==null )
      {
        var imgd ="img/Screenshot_2.png";
        img=imgd; 

      }
     
      var sidebarfirst =  "<div class='main-user-profl'><div class='user_image' id="+useridpr+"><div class='user_login_image'><a href='userprofilepge.html'><img src='"+img+"'/></a></div></div><div class='user_login_details'><span class='menu_username'><p>"+username+"</p> </span><span class='menu_useremail'><p> "+useremail+"</p> </span></div></div>";

      //jQuery("#main-content #sidebar .sidebar_main_div .sidebar_profile").html('');

        
       jQuery("#main-content #sidebar .sidebar_main_div .sidebar_profile").html(sidebarfirst);
      
    },
    error: function () 
    { 
      //alert("Error");
    }
  });

}



function sendverification() {



var task ='verifymail';
var mycollege=  $("#mycollege").val();
var myname=  $("#myname").val();
 var myemail=  $("#myemail").val();
var formData = {
task: task,
myname:   myname,
mycollege:mycollege,
myemail:   myemail,
 };
jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
                $("#mail-status").html(responseprz);
               jQuery("#verifyform").trigger('reset');
            },
            error:function (){}
        });
    
}
function sendContact() {


    var  useremailid = localStorage.getItem('loginurid');
var task ='feedback';
var email=  $("#email").val();
var subject=  $("#subject").val();
 var comments=  $("#comments").val();
var formData = {
task: task,
femail:   email,
useremailid:useremailid,
fsubject:   subject,
fcomments:   comments,
 };
jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
                $("#mail-status").html(responseprz);
               jQuery("#feedback").trigger('reset');
            },
            error:function (){}
        });
    
}
function sendSupport() {


    var  useremailid = localStorage.getItem('loginurid');
var task ='support';
var email=  $("#email").val();
var subject=  $("#subject").val();
var formData = {
task: task,
semail:   email,
suseremailid:useremailid,
ssubject:   subject,
 };
jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
                $("#support-status").html(responseprz);
               jQuery("#support").trigger('reset');
            },
            error:function (){}
        });
    
}
function getprofile()
  {
var  userid = localStorage.getItem('loginurid');
 var task = "edituser";
  var formData = {
   task: task,
   edituserid: userid,
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {


    //alert(responseprz);
    var objsp = jQuery.parseJSON( response );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    var aboutme=objsp.aboutme;


     var interestarray=objsp.interestarray;
console.log(interestarray);
if($.inArray( "Anything Sciency", interestarray) !== -1)
{

 // alert('hi');
}
else{
  // alert('ddd');
}
      var mobilephone=objsp.mobilephone;


      var birthdate=objsp.birthdate;

      var d = new Date(birthdate);
      var month=d.getMonth();
      month=month+ 1;
      if(month<10){

        month='0'+month;
      }

var dateformmat=month+'/'+d.getDate()+'/'+d.getFullYear();
      var picker = $("<input/>", {
  type: 'text',
  id: "datepicker",
  name: "birthdate",
  value: dateformmat
}).datepicker();

$('#box').append(picker);

    //  var n = birthdate.getDate(); 


//var n = d.getDate(); 
//var n = d.getMonth(); 
//var n = d.getMonth(); 
//alert(dateformmat);

var cars = ["Anything Sciency", "Book over TV", "Space Junky", "Astronomy", "Anything Engineering","Food Science","Theory Addict"];
var select = $("<select multiple='multiple'/>")
    $.each(cars, function(a, b) {



        select.append($("<option/>").attr("value", b).text(b));

    });
    $("#select").append(select);
$("#aboutme").val(aboutme);
$("#mobilephone").val(mobilephone);
$("#birthdate").val(dateformmat);

//alert($("#birthdate").val(birthdate));
  //console.log(aboutme);

    },
    error: function () { 
      //alert("Error");
    }
  }); 
  

  }



function editprofile()
  {
var  userid = localStorage.getItem('loginurid');

var aboutme= jQuery("#aboutme").val();
alert(aboutme);
 var task = "editprofile";
  var formData = {
   task: task,
   editprofileid: userid,
   aboutme:aboutme
 
  }; 
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {

//window.location.href="bahuka-settings.html";
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  

  }




  function detailteacherpage1(aa)

{

var currentId = $(aa).attr('id');
var currentIds = $(aa).attr('suneel');
//alert(currentId+' - ' + currentIds);



  jQuery('.line-end').html('');
  jQuery('.line-end').append("<div class='arrow-div' style='display:none;'><button onclick='hideclassesDiv();'><img src='img/testQAarrowtop.png'></button></div>");
  var checkedsess = localStorage.getItem('checkedsess');
  var  useridlogin = localStorage.getItem('loginurid');
 //alert(checkedsess);
  var usrdetail=currentIds;
 
  var task = "getdetailpage1";
  var usrdetaild = usrdetail;
  var checkedsess= checkedsess;
  var useridlogin=useridlogin;
 
  var formData = {
   task: task,
   usrdetail1: currentIds,
   checkedsess1: checkedsess,
    useridlogin1: useridlogin,
    classscdetailid: currentId,
 
  }; 


  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseze) { 
    var objqe = jQuery.parseJSON( responseze );
    
    //var a=response.crntals;
    var arr = [], objqe;

    for(key in objqe) {
        arr.push(key);
    } 

    lendsss = arr.length;
    //alert(lendss);
    if(lendsss !== 0){
      console.log(lendsss); //2*/
      tp=1;
      for(q=1;q<=lendsss;q++)
      {
      var objd = jQuery.parseJSON( responseze );
      var getstringify = JSON.stringify(objd[q]);
      var objd = jQuery.parseJSON( getstringify );

    
     // jQuery(".student-class-pge").html(''); 
      usrdetailp=objd.usrdetailp;  

      usrname=objd.usrname; 
      localStorage.setItem('usridth',usrdetailp);
      //console.log(usrname);
       
      Auditory=objd.Auditory;  
      Visual=objd.Visual; 
      Kinesthetic=objd.Kinesthetic;  
      Textual=objd.Textual; 

      starm=objd.startdatem; 
      stard=objd.startdated; 
    classname=objd.classname; 
      enddatem=objd.enddatem;
      enddated=objd.enddated;

      starttime=objd.starttime;
      endtime=objd.endtime;

      class_days=objd.class_days;
      class_room=objd.class_room;
      classId=objd.classId;

      classcode=objd.classcode;

      seats=objd.seats;

      open=objd.open;

      taken=objd.taken;

      usrdetailp=objd.usrdetailp;
      clsids=objd.clsid;
     /* checkedval=objd.checkedvaab;
      checkedid=objd.checkedid;

      ///alert(checkedid);
      localStorage.setItem('checkedidd',checkedid);
      localStorage.setItem('oldvalue',checkedval);
       if(checkedval<1)
      {
        checkedval='';
      }
      if(checkedid<1)
      {
       checkedid=''; 
      } */
      //alert(checkedval);
      /*arr = checkedval.split(',');
      for(i=0; i < arr.length; i++)
      {

          console.log(arr[i]);
      }*/

    /*  var myFruitsArray = checkedval.split(',');    

      console.log(myFruitsArray);
      console.log(clsids);
      console.log(myFruitsArray.indexOf(clsids));
       if(myFruitsArray.indexOf(clsids) >= 0 ) 
      {
      //console.log('hi');
      tt="<input id='chkbox-app"+tp+"' type='checkbox' attr='"+tp+"' name='chkbox_"+tp+"' onclick='chkthr("+clsids+", "+tp+")' value='"+clsids+"' checked>";

      }
      else
       {
       //console.log('hello');
       tt="<input id='chkbox-app"+tp+"' type='checkbox' attr='"+tp+"' name='chkbox_"+tp+"' onclick='chkthr("+clsids+", "+tp+")' value='"+clsids+"'>";
       
       }*/
       

      datadls = "<div class='class_div'><div class='detailspge'></div><div class='tecr-date-time-ap'><div class='datetme-app'><p id='dte' style='color: #6eb4bd;'>"+classname+"</p><p id='dte'><b id='clssme'>Dates: "+starm+" "+stard+" - "+enddatem+" "+enddated+"</b></p><p><b id='clssme'>Days:</b>"+class_days+"</p><p><b id='clssme'>Time:</b> "+starttime+" - "+endtime+"</p><p><b id='clssme'>Room:</b> "+class_room+"</p><p><b id='clssme'>CRN:</b><b id='clssme'> "+classcode+"</b></p><p><b id='clssme'>Seats:</b> <b id='steopn'>"+seats+"</b> <b id='clssme'> Taken:</b><b id='steopn'>"+taken+"</b><b id='clssme'> Open:</b><b id='steopn'>"+open+"</b></p></div></div></div>";

        jQuery('#student-class-pge #'+currentIds+' .line-end').append(datadls);   

          tp++; 
      } 

      jQuery( ".line-end" ).css("overflow", "visible");   
      jQuery('#student-class-pge #'+currentIds+' .arrow-div').show(); 
    }
    else{
      jQuery('#student-class-pge #'+currentIds+' .line-end').append("<div class='class_div'><div class='classnotfoundiv'><p>No classes created yet</p></div></div>");  
      jQuery( ".line-end" ).css("overflow", "visible");  
      jQuery('#student-class-pge #'+currentIds+' .arrow-div').show(); 
    }

    },
    error: function () { 
     // alert("Error");
    }
  });

 
}
function myFunction(){




$('#button-post').show();

}
function myfunctionc(content_id){



jQuery('#comment-post'+content_id).show();

}
function addcomment(groupid,content_id){
var cimageinsert=    localStorage.getItem('cimagename'); 


     //var currentId = $(dd).attr('id');

     var commentcontent=$('#textarea_comment'+content_id).val();
   
//var res = currentId.substring(currentId.indexOf("-") + 1);
  
   var  actorid = localStorage.getItem('loginurid'); 

  var task ='addcomment';
 var formData = {
task: task,
postcommentid: content_id,
actorid: actorid,
commentcontent:commentcontent,
cimageinsert:cimageinsert
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {



   //jQuery('#divLoading').addClass("show");

         getgroupwall(groupid);


  jQuery('#textarea_comment').trigger('reset');
   localStorage.removeItem('cimagename');
    },
    error: function () 
    { 
     // alert("Error");
    }
  });
   
}

function addcomment1(groupid,content_id){
var cimageinsert=    localStorage.getItem('cimagename'); 


     //var currentId = $(dd).attr('id');

     var commentcontent=$('#textarea_comment'+content_id).val();
   
//var res = currentId.substring(currentId.indexOf("-") + 1);
  
   var  actorid = localStorage.getItem('loginurid'); 

  var task ='addcomment1';
 var formData = {
task: task,
postcommentid1: content_id,
actorid1: actorid,
commentcontent1:commentcontent,
cimageinsert1:cimageinsert
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    {

 var groupobj = jQuery.parseJSON(response);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
     var  lengthgroups=garr.length;
  var commentsaa= "";
         if(lengthgroups !== 0){

jQuery('.comment-main').hide();
            for(group=1;group<=lengthgroups;group++)
            {
//alert(group);
            var getstringifygroup = JSON.stringify(groupobj[group]);

            var groupRslt = jQuery.parseJSON(getstringifygroup);
            var avatarc = groupRslt.avatarc;
           var namec = groupRslt.namec;
            var commentc = groupRslt.commentc;
            var paramsc= groupRslt.paramsc;
            var likescountc= groupRslt.likescountc;
               var  timec=groupRslt.timec;
               var  unlikecomment=groupRslt.unlikecomment;
              

var actorimgs='http://bahuka.com/home/'+avatarc;
   if(avatarc==""){
                var ggdd="http://bahuka.com/home/images/no-image-found.png";
                actorimgs=ggdd;
              }

   




 var  content_id=groupRslt.content_id;
var  idc=groupRslt.idc;

  if(paramsc){

                    var paramscaa='http://bahuka.com/home/'+paramsc;
                    var dd="<div class='post-image'><img src='"+paramscaa+"'></div>";
                }
                else{

                  dd="";
                }
            

if(unlikecomment>0){

var unlikepostc="<a class='buttonc_"+idc+"'   href='javascript:' onclick='likecomment("+idc+",this)'>unlike</a>";
}
else{

 unlikepostc="<a class='buttonc_"+idc+"' href='javascript:' onclick='likecomment("+idc+",this)'>like</a>";
}




var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+idc+"'>"+likescountc+"</span> <span>Likes</span></p>";
var commenttext= "";
               commentsaa+="<div class='comment-main' id='"+idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+namec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div class='post_time_div'>"+timec+"</div></div></div>";


}
jQuery('#commentshow-'+content_id).append(commentsaa);
  jQuery('.hashtagtext').val('');
     


            }



   //jQuery('#divLoading').addClass("show");

        // getgroupwall(groupid);

   //$('#textarea_comment'+content_id).val('');
   localStorage.removeItem('cimagename');
    },
    error: function () 
    { 
     // alert("Error");
    }
  });
   
}

function addpost(groupid)
  {
   var  userid = localStorage.getItem('loginurid'); 
var imageinsert=    localStorage.getItem('imagename'); 
var contentpost=jQuery('#add_post').val();

var regExp = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
var match = contentpost.match(regExp);
if (match && match[2].length == 11) {
var id= match[2];
//alert(id);
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+id+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",
 
    success: function(response) 
    {

var title=response.items[0].snippet.title;
var udescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;

 var task ='addpost';
 var formData = {
task: task,
postgroupid: groupid,
postuserid: userid,
contentpost:contentpost,
imageinsert:imageinsert,
height:height,
width:width,
iurl:iurl,
titleu:title,
udescription:udescription,
videoid:id
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    { 

        jQuery("#add_post").trigger('reset');
 getgroupwall(groupid);
 
 localStorage.removeItem('imagename');

    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 

 
    }
  });

      }
      else{

 var task ='addpost';
 var formData = {
task: task,
postgroupid: groupid,
postuserid: userid,
contentpost:contentpost,
imageinsert:imageinsert,
height:'',
width:'',
iurl:'',
titleu:'',
udescription:'',
videoid:''
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) 
    { 

        jQuery("#add_post").trigger('reset');
 getgroupwall(groupid);
 
 localStorage.removeItem('imagename');

    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 

      }
      }


      
var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

   function getImage() {
            // Retrieve image file location from specified source
            navigator.camera.getPicture(uploadPhoto, function(message) {
      alert('get picture failed');
    },{
      quality: 50, 
      destinationType: navigator.camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    }
            );
 
        }

   function getImage1() {
            // Retrieve image file location from specified source
            navigator.camera.getPicture(uploadPhoto1, function(message) {
     // alert('get picture failed');
    },{
      quality: 50, 
      destinationType: navigator.camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    }
            );
 
        }


   function uploadPhoto1(imageURI) {

$("#commentLoading").addClass('show');

//alert(imageURI);

          var  userid = localStorage.getItem('loginurid'); 
            var options = new FileUploadOptions();
            options.fileKey="image";
           // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
  if (imageURI.substr(imageURI.lastIndexOf('/') + 1).indexOf(".") >= 0) {
        var newfname = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    } else {
        var newfname = jQuery.trim(imageURI.substr(imageURI.lastIndexOf('/') + 1)) + '.jpg';
    }
    options.fileName = newfname;
            var params = new Object();
          params.photocloginid =userid;

           options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://bahuka.com/home/index.php?option=com_content&view=appcode&task=commentimageupload", win1, fail, options);
        }


function win1(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);

            if(r){
              $("#commentLoading").hide();
               $(".commentstatus").show();
          setTimeout('$(".commentstatus").hide()',1000);

            }
    
          var cimagename=r.response;
        //alert(cimagename);
       var cimageinsert=    localStorage.setItem('cimagename',cimagename);  
       //alert(imageinsert);
        }
 








        function uploadPhoto(imageURI) {

$("#imageLoading").addClass('show');

//alert(imageURI);

          var  userid = localStorage.getItem('loginurid'); 
            var  groupid = localStorage.getItem('groupidlocal');
            var options = new FileUploadOptions();
            options.fileKey="image";
           // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
  if (imageURI.substr(imageURI.lastIndexOf('/') + 1).indexOf(".") >= 0) {
        var newfname = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    } else {
        var newfname = jQuery.trim(imageURI.substr(imageURI.lastIndexOf('/') + 1)) + '.jpg';
    }
    options.fileName = newfname;
            var params = new Object();
          params.photologinid =userid;
           params.groupidlocal =groupid;

           options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://bahuka.com/home/index.php?option=com_content&view=appcode&task=imageupload", win, fail, options);
        }
 
        function win(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);

            if(r){
              $("#imageLoading").hide();
              $(".status").show();
          setTimeout('$(".status").hide()',1000);
            }
    
          var imagename=r.response;
      
       var imageinsert=    localStorage.setItem('imagename',imagename);  
       //alert(imageinsert);
        }
 
        function fail(error) {
           // alert("An error has occurred: Code = "+ error.code);
        }



/* Get User Profile */
function showmorecomments(contentid){
  var  userid = localStorage.getItem('loginurid');


//var id=$(aa).data("value");
var task ='showmorecomments';
var useridpr = userid;
var formData = {
task: task,
csuserid:   useridpr,
moreontentid:contentid,

 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    
    success: function(responseprz) 
    {
      
    //jQuery('.comment_'+morecid).hide();
     var groupobj = jQuery.parseJSON(responseprz);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
     var  lengthgroups=garr.length;
  var commentsaa= "";
         if(lengthgroups !== 0){
jQuery('.commentshow-'+contentid).empty();
            for(group=1;group<=lengthgroups;group++)
            {
//alert(group);
            var getstringifygroup = JSON.stringify(groupobj[group]);

            var groupRslt = jQuery.parseJSON(getstringifygroup);
            var avatarc = groupRslt.avatarc;
           var namec = groupRslt.namec;
            var commentc = groupRslt.commentc;
            var paramsc= groupRslt.paramsc;
            var likescountc= groupRslt.likescountc;
               var  timec=groupRslt.timec;
               var  unlikecomment=groupRslt.unlikecomment;
              

var actorimgs='http://bahuka.com/home/'+avatarc;
   if(avatarc==""){
                var ggdd="http://bahuka.com/home/images/no-image-found.png";
                actorimgs=ggdd;
              }

   




 var  content_id=groupRslt.content_id;
var  idc=groupRslt.idc;

  if(paramsc){

                    var paramscaa='http://bahuka.com/home/'+paramsc;
                    var dd="<div class='post-image'><img src='"+paramscaa+"'></div>";
                }
                else{

                  dd="";
                }
            

if(unlikecomment>0){

var unlikepostc="<a class='buttonc_"+idc+"'   href='javascript:' onclick='likecomment("+idc+",this)'>unlike</a>";
}
else{

 unlikepostc="<a class='buttonc_"+idc+"' href='javascript:' onclick='likecomment("+idc+",this)'>like</a>";
}




var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+idc+"'>"+likescountc+"</span> <span>Likes</span></p>";
var commenttext= "";
               commentsaa+="<div class='comment-main' id='"+idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+namec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div class='post_time_div'>"+timec+"</div></div></div>";


}
jQuery('.commentshow-'+contentid).append(commentsaa);
jQuery('#showmore'+contentid).hide();



            }






    },
    error: function () 
    { 
      //alert("Error");
    }
  });

}

 $(document).on("click", "a#hashtag" , function() {
jQuery('.back,.back13').hide();

jQuery('.activity').hide();

var text=jQuery(this).text();
           // alert(text);
var className = $('a#hashtag').attr('class');


     jQuery(".joms-focus__cover").show();
      
         jQuery(".joms-postbox-input").show();
    
var  userid = localStorage.getItem('loginurid');
//alert(srchgrupidd);
 var task ='hashtaglink';


 var formData = {
 task: task,
 hashtag:text,
 userhash: userid,
hashgroupid: className,

 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(Srchresponse) 
    {
       
      var obj = jQuery.parseJSON( Srchresponse );
   
      var arr = [], obj;

      for(key in obj) {
          arr.push(key);
      } 
      len = arr.length;       
      //console.log(len) 
                       if(len!=0){
       jQuery(".joms-focus__cover").hide();
      $( "#postdata-main" ).addClass( "widthadd" );
         jQuery(".joms-postbox-input").hide();
     jQuery("#postdata-main").html("");
 
      var p=1;
      for(i=1; i<=len;i++)
      {


var getstringify = JSON.stringify(obj[i]);
//console.log(getstringify);
var objss = jQuery.parseJSON( getstringify );
//console.log(getstringify);

var id = objss.id;
var title = objss.title;
content = objss.content;
avatar = objss.avatar;
actor = objss.actor;
params = objss.params;
content_id = objss.content_id;
actorname = objss.actorname;
groupname = objss.groupname;
app = objss.app;
verb = objss.verb;
photomain2 = objss.photomain2;

pathvideo = objss.pathvideo;
likescount = objss.likescount;
unlike = objss.unlike;
timeago = objss.time;
comments = objss.comments;
var postdata="";
likescount = objss.likescount;
if(pathvideo){
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+pathvideo+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var vdescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var strb=vdescription.substring(0,50);
jQuery('.descriptionvideo').append(strb);
jQuery('.descriptionvideo').append('..');
}

});

var pathvideo="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  pathvideo="";
}


if(photomain2!=undefined&&photomain2!=""){
                
//alert(photomain2);
                    var photomain2s='http://bahuka.com/home/'+photomain2;
                    var ddssa="<div class='post-image hghgh'><img src='"+photomain2s+"'></div>";
              }
              else{
                ddssa="";
              }

var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
var match = title.match(regExp);




 
if (match && match[2].length == 11) {

var id= match[2];
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+id+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var udescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var str=udescription.substring(0,50);
jQuery('.descriptionvideo').append(str);
jQuery('.descriptionvideo').append('..');
}

});

var iframe="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  iframe="";
}









  var likescounta="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span  id='likecount_"+content_id+"' class='likecount-span'>"+likescount+"</span><span>Likes</span></p>";

 groupid = objss.groupid;

        



                                      var actorimg='http://bahuka.com/home/'+avatar;

                                      if(avatar==""){
                                      var gg="http://bahuka.com/home/images/no-image-found.png";
                                      actorimg=gg;
                                      }

                                      var commentsaa="";


                                  $.each(comments,function(index,item){


                                  var likescountc=item.likescountc;
                                  var unlikecomment=item.unlikecomment;


                                  if(unlikecomment>0){

                                  var unlikepostc="<a class='buttonc_"+item.idc+"'   href='javascript:' onclick='likecomment("+item.idc+",this)'>unlike</a>";
                                  }
                                  else{

                                  unlikepostc="<a class='buttonc_"+item.idc+"' href='javascript:' onclick='likecomment("+item.idc+",this)'>like</a>";
                                  }


                                  var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+item.idc+"'>"+likescountc+"</span> <span>Likes</span></p>";

                                
                                  var timec=item.timec;
                                  var actorimgs='http://bahuka.com/home/'+item.avatarc;


                                  if(item.paramsc){

                                  var paramsc='http://bahuka.com/home/'+item.paramsc;
                                  var dd="<div class='post-image'><img src='"+paramsc+"'></div>";
                                  }
                                  else{

                                  dd="";
                                  }

                                  if(item.avatarc==""){
                                  var ggdd="http://bahuka.com/home/images/no-image-found.png";
                                  actorimgs=ggdd;
                                  }

                                  var commenttext= "";
                                  commentsaa+="<div class='comment-main' id='"+item.idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+item.namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+item.namec+"</div><div class='post_time_div'>"+timec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+item.commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div></div></div></div>";

                                  });


  var time ="<span>"+timeago+"</span>";
if(unlike>0){
var unlikepost="<div class='ulcomment'><a class='button_"+content_id+"'   href='javascript:' onclick='likepost("+content_id+",this)'>unlike</a></div>";

}
else{

 unlikepost="<div class='ulcomment'><a class='button_"+content_id+"' href='javascript:' onclick='likepost("+content_id+",this)'>like</a></div>";
}

if(verb=='post'||app=='photos'||app=='videos'){



   var artcle="<div class='article-post'><span>"+title+"</span>"+iframe+""+pathvideo+"</div>"+ddssa+"<div class='artcle-like'>"+likescounta+""+unlikepost+"</div>";
}

if(app=='groups.wall'||app=='photos'||app=='videos'){
  postdata="<div class='post-meta' id='"+content_id+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='main_time_post'><div class='joms-stream__meta'><a class='joms-stream__user' href='javascript:' onclick='viewprfl1("+actor+");'>"+actorname+"</a><span class='image_post'><img src='img/arrow-icon.jpg'></span><a  class='group-meta' href='#'>"+groupname+"</a></div><div class='post_time_div'>"+time+"</div></div></div>"+artcle+"<div id='commentshow-"+content_id+"'>"+commentsaa+"</div><div class='text' id='text-"+content_id+"'><textarea name='comment-text' id='textarea_comment"+content_id+"' class='hashtagtext' cols='40' row='4' placeholder='write a comment'  onclick='myfunctionc("+content_id+");'></textarea><div class='pixform-left'><img  src='img/images.png' onclick ='getImage1();'><div id='commentLoading'></div></div><div class='commentstatus' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='comment' value='post' id='comment-post"+content_id+"'  onclick='addcomment1("+groupid+","+content_id+");' style='display:none;' ></div></div></div>";
}
     var  imgd="";

              jQuery("#postdata-main").append(postdata);
 
}

      }

           jQuery(".search-post-append").after("<div class='backa' onclick='getgroupwall("+groupid+");'>Back</div>");
//jQuery("#student-class-group-pge").after("<div class='back' onclick='getgroupwall("+groupid+");'>Back</div>");
    },
    error: function () 
    { 
     // alert("Error");
    }
  }); 



        });

function showcomments(actid){
jQuery('.back15').hide();
var  userid = localStorage.getItem('loginurid');

//alert(userid);

//alert(collabcclz);
/*  ajax hit question save value */
var task ='showcommentblock';
var useridpr = userid;
var formData = {
task: task,
cbloackuserid:   useridpr,
actcontentid:   actid,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      

      jQuery('#student-class-group-pge').html('');
        var groupobj = jQuery.parseJSON(responseprz);
        var garr = [], groupobj;

        for(key in groupobj) {
            garr.push(key);
        }
     var  lengthgroups=garr.length;
    // console.log(lengthgroups);
         if(lengthgroups !== 0){

           var  postdata ="";
            var getstringifygroup = JSON.stringify(groupobj[1]);

               var groupRslt = jQuery.parseJSON(getstringifygroup);
              var actorname=groupRslt.actorname;
                                        var actor=groupRslt.actor;
                                          var  app=groupRslt.app;
                                        
                                          var title=groupRslt.title;
                                          var  verb=groupRslt.verb;
                                          var  avatars=groupRslt.avatar;
                                          var  timeago=groupRslt.time;
                                          var  comments=groupRslt.comments;
                                          var  likescount=groupRslt.likescount;
                                          var  unlike=groupRslt.unlike;
                                           var  title1=groupRslt.title1;
                                          var  params=groupRslt.params;
                                          var  groupname=groupRslt.groupname;
var  groupid=groupRslt.groupid;

   var  pathvideo=groupRslt.pathvideo;
                                          allrows=groupRslt.allrows;
                                          var  content_id=groupRslt.content_id;
                                          var  photomain1=groupRslt.photomain1;
                                          var  commentsrow=groupRslt.commentsrow;
var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
var match = title1.match(regExp);


var teacherArr=[];

 
if (match && match[2].length == 11) {

var id= match[2];
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+id+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var udescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var str=udescription.substring(0,50);
jQuery('.descriptionvideo').append(str);
jQuery('.descriptionvideo').append('..');
}

});

var iframe="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  iframe="";
}
if(pathvideo){
var apiKey="AIzaSyC7oWmM0ritk8pkQzrUoB0_fUuWLca6r7M";

var url="https://www.googleapis.com/youtube/v3/videos?id="+pathvideo+"&key="+apiKey+"&fields=items(snippet(title,thumbnails,description))&part=snippet";

//alert(url);
jQuery.ajax({
type: "post",

url: url, 
dataType: "jsonp",

    success: function(response) 
    {

var title=response.items[0].snippet.title;
var vdescription=response.items[0].snippet.description;
var thumbnail=response.items[0].snippet.thumbnails;
var iurl=thumbnail.default.url;
var height=thumbnail.default.height;
var width=thumbnail.default.width;
var strb=vdescription.substring(0,50);
jQuery('.descriptionvideo').append(strb);
jQuery('.descriptionvideo').append('..');
}

});

var pathvideo="<div class='video'><div class='iframe'><iframe width='100' height='100' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allowfullscreen></iframe></div><div class='descriptionvideo'></div></div>";
}

else{
  pathvideo="";
}
//alert(id);
//jQuery('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');




if(photomain1!=undefined&&photomain1!=""){
                
//alert(photomain1);
                    var photomain1s='http://bahuka.com/home/'+photomain1;
                    var ddss="<div class='post-image'><img src='"+photomain1s+"'></div>";
              }
              else{
                ddss="";
              }

  var likescounta="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span  id='likecount_"+content_id+"' class='likecount-span'>"+likescount+"</span><span>Likes</span></p>";





              var actorimg='http://bahuka.com/home/'+avatars;

              if(avatars==""){
                var gg="http://bahuka.com/home/images/no-image-found.png";
                actorimg=gg;
              }

   var commentsaa="";
if(allrows>2){


var showmore="<div class='show_more_comments' id= 'showmore"+content_id+"' onclick='showmorecomments("+content_id+");'><div class='show_more_para'><p><a>Show more comments</a></p></div></div>";


}

else{
showmore="";

}
$.each(comments,function(index,item){

var likescountc=item.likescountc;
var unlikecomment=item.unlikecomment;


if(unlikecomment>0){

var unlikepostc="<a class='buttonc_"+item.idc+"'   href='javascript:' onclick='likecomment("+item.idc+",this)'>unlike</a>";
}
else{

 unlikepostc="<a class='buttonc_"+item.idc+"' href='javascript:' onclick='likecomment("+item.idc+",this)'>like</a>";
}


var commentcount="<p class='img'><img src='img/fblike.png'></p><p class='likecount'><span id='commentlike_"+item.idc+"'>"+likescountc+"</span> <span>Likes</span></p>";

var timec=item.timec;
                var actorimgs='http://bahuka.com/home/'+item.avatarc;


                if(item.paramsc){

                    var paramsc='http://bahuka.com/home/'+item.paramsc;
                    var dd="<div class='post-image'><img src='"+paramsc+"'></div>";
                }
                else{

                  dd="";
                }
            
              if(item.avatarc==""){
                var ggdd="http://bahuka.com/home/images/no-image-found.png";
                actorimgs=ggdd;
              }


         

    var commenttext= "";
               commentsaa+="<div class='comment-main' id='"+item.idc+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimgs+"' title='"+item.namec+"'></div></div><div class='main_time_post'><div class='text-comment'>"+item.namec+"</div></div></div><div class='article-post'><div class='ulcomment'>"+unlikepostc+"</div><div class='old_post'>"+item.commentc+"</div>"+dd+"</div><div class='artcle-like'>"+commentcount+"<div class='post_time_div'>"+timec+"</div></div></div>";

});
 var time ="<span>"+timeago+"</span>";
if(unlike>0){

var unlikepost="<div class='ulcomment'><a class='button_"+content_id+"'   href='javascript:' onclick='likepost("+content_id+",this)'>unlike</a></div>";
}
else{

 unlikepost="<div class='ulcomment'><a class='button_"+content_id+"' href='javascript:' onclick='likepost("+content_id+",this)'>like</a></div>";
}

if(verb=='post'||app=='photos'||app=='videos'){


   var artcle="<div class='article-post'>"+title+""+iframe+""+pathvideo+"</div>"+ddss+"<div class='artcle-like'>"+likescounta+""+unlikepost+"</div>";
}
/*else{
  artcle="<div class='article-post  content'><span>"+content+"</span>"+likescounta+"<a class='button' href='javascript:' onclick='likepost("+content_id+")'><span id='like'></span></a></div>";
}*/
if(app=='groups.wall'||app=='photos'||app=='videos'){





  postdata="<div class='post-meta' id='"+content_id+"'><div class='main_post_wrapper'><div class='main-circle-div'><div class='divcircle_wrapper'><img src='"+actorimg+"' title='"+actorname+"'></div></div><div class='main_time_post'><div class='joms-stream__meta'><a class='joms-stream__user' href='javascript:' onclick='viewprfl1("+actor+");'>"+actorname+"</a><span class='image_post' ><img src='img/arrow-icon.jpg'></span><a  class='group-meta' href='#'>"+groupname+"</a></div><div class='post_time_div'>"+time+"</div></div></div>"+artcle+"<div class='commentshow-"+content_id+"'>"+commentsaa+"</div>"+showmore+"<div class='text' id='text-"+content_id+"'><textarea name='comment-text' id='textarea_comment"+content_id+"' cols='40' row='4' placeholder='write a comment'  onclick='myfunctionc("+content_id+");'></textarea><div class='pixform-left'><img  src='img/images.png' onclick ='getImage1();'><div id='commentLoading'></div></div><div class='commentstatus' style='display:none;'>Image uploading successfully</div><div class='post-hidden'><input type='button' name='comment' value='post' id='comment-post"+content_id+"'  onclick='addcomment("+groupid+","+content_id+");' style='display:none;' ></div></div></div>";
}

jQuery('#student-class-group-pge ').append(postdata);
















                                        }


                                        else{



jQuery('#student-class-group-pge ').append("<h2 style='align:center;'>No Comment Activity Found</h2>");

                                        }
      
           jQuery(".search-post-append").after("<div class='back14'><a href='notifications.html'>Back</a></div>");



    },
    error: function () 
    { 
      //alert("Error");
    }
  });



}

function grouplikess(groupid,aa){

var  userid = localStorage.getItem('loginurid');

var currentIdsss = $(aa).attr('class');
var currentId = $(aa).text();
//alert(currentId);

var task ='showgrouplike';
var useridpr = userid;
var formData = {
task: task,
glikeuserid:   useridpr,
grouplike:   currentId,
grouptolike:   groupid,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {

 var objsplike = jQuery.parseJSON( responseprz );
 countlikes=objsplike.countlikes;
    likeme=objsplike.likeme;

 contentid=objsplike.contentid;
//alert(likeme);
if(likeme=='1'){

jQuery('.blue-like1').html(countlikes);

jQuery('.grouplike').text('Liked');
}
else{

jQuery('.blue-like1').html(countlikes);
jQuery('.grouplike').text('Like');

}


 









     
     
    },
    error: function () 
    { 
      //alert("Error");
    }
  });


}

function profilelikess(id,puserid,aa){

var  userid = localStorage.getItem('loginurid');
var currentId = jQuery(aa).attr('id');



//var currentIdsss = $(aa).attr('class');
//var currentId = $(aa).text();


var task ='showprofilelike';
var useridpr = userid;
var formData = {
task: task,
plikeuserid:   id,
wholike:puserid,
plike:   currentId,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {

var objsplike = jQuery.parseJSON( responseprz );
 countlikes=objsplike.countlikes;
    likeme=objsplike.likeme;

 contentid=objsplike.contentid;
//alert(likeme);
if(likeme=='1'){

jQuery('.button-like').html(countlikes);
jQuery("#"+currentId).css("opacity","1");
jQuery("#Like").attr('id','Liked');

}
else{

jQuery('.button-like').html(countlikes);
jQuery("#"+currentId).css("opacity","0.30");
//jQuery('.profilelike').text('Like');
jQuery("#Liked").attr('id','Like');


}


 









     
     
    },
    error: function () 
    { 
      //alert("Error");
    }
  });


}
function terms(){
  $('.forgot2').hide('');

var task ='terms';

var formData = {
task: task
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
 
 var objsplike = jQuery.parseJSON( responseprz );
     $('.teram-of-service-page').append(objsplike.textdd);
  
    },
    error: function () 
    { 
      //alert("Error");
    }
  });


}

function privacy(){
 $('.forgot2').hide('');

var task ='privacy';

var formData = {
task: task
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
 
 var objsplike = jQuery.parseJSON( responseprz );
     $('.privacy-page').append(objsplike.textdd);
    
    },
    error: function () 
    { 
      //alert("Error");
    }
  });


}
function viewprfl1new(id)
{

userid=id ? id : localStorage.getItem('loginurid');

  var collabcclz = localStorage.getItem('collabc');
  var  puserid=localStorage.getItem('loginurid');
//alert(collabcclz);
/*  ajax hit question save value */
var task ='viewprofl';
var useridpr = userid;
var collabcclz=collabcclz;
var formData = {
task: task,
useridpr:   useridpr,
viewlogin:puserid,
collabcclz : collabcclz,
 };
  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(responseprz) 
    {
      jQuery('#header .search-post').html('');

    jQuery("#student-class-group-pge").html('');
    //alert(responseprz);
    var objsp = jQuery.parseJSON( responseprz );
    var getstprs= JSON.stringify(objsp[1]);
    var objsp = jQuery.parseJSON( getstprs );

    //console.log(getstprs);
    useridpr=objsp.useridpr;
    username=objsp.usrname;
    //alert(username);
    useremail=objsp.usremail;
    thumb=objsp.thumb;
     cover=objsp.cover;
    Auditory=objsp.Auditory;
    Visual=objsp.Visual;
    Kinesthetic=objsp.Kinesthetic;
    Textual=objsp.Textual;
stusertype=objsp.stusertype;
profilelike=objsp.profilelike;
collegename=objsp.collegename;
if(stusertype==1){

  st="Student";
}
else{
  st="Professor";
}
    clznme=objsp.clznme;

    clzyres=objsp.clzyres;

    textreslts=objsp.textreslts;
    majorreslts=objsp.majorreslts;
    cityreslts=objsp.cityreslts;
    statereslts=objsp.statereslts;
    countryreslts=objsp.countryreslts;
like=objsp.like;
  var covers='http://bahuka.com/home/'+cover;
   if(cover==""||cover==null)
  {
    var coverd ="img/7040469-lake-mountains-woods.jpg";
  covers=coverd; 

  }
  var img='http://bahuka.com/home/'+thumb;
   if(thumb==""||thumb==null)
  {
    var imgd ="http://bahuka.com/home/images/no-image-found.png";
  img=imgd; 

  }
  var url="http://bahuka.com/home/images";  
  localxd = localStorage.getItem('ctrlsfs');
 // alert(textreslts);
 
  //alert(collabcclz); 
  //alert(clzyres);
  /* if(clzyres || textreslts || majorreslts || clznme)
  { }
  else
  {clzyres  = "" ;
   textreslts  = "";
    majorreslts  = "";
    clznme= "";
  } */
  if(cityreslts && statereslts && countryreslts ){


   var result = countryreslts.split('_');
    var userfrom = "From " +cityreslts +", " + statereslts + ", " +countryreslts;
  }
  else{
    var userfrom ="";
  }

  var tt="";
if (textreslts==null||majorreslts==null||userfrom==null){


 
  tt="<div class='profess_dtl_prf'><div class='left-user-img'><img src='http://bahuka.com/home/images/crying-user.png'></div><div class='right-user'><img src='http://bahuka.com/home/images/user-circle.png'><img src='http://bahuka.com/home/images/user-circle.png'><img src='http://bahuka.com/home/images/user-circle.png'></div></div>";
}
else{
 tt= "<div class='profess_dtl_prf'><p>"+textreslts+"</p><p>"+majorreslts+"</p><p>"+userfrom+"</p></div>";
}

if(profilelike>0){

var span="<span  onclick='profilelikess("+userid+","+puserid+",this);' class='profilelike'>Liked</span>";
}
else{

 span="<span  onclick='profilelikess("+userid+","+puserid+",this);'  class='profilelike'>Like</span>";
}


if(profilelike>0){

var span1="<img src='img/fb-new.png'  id='Liked' style='opacity:1' onclick='profilelikess("+userid+","+puserid+",this);'>";
}
else{

 span1="<img src='img/fb-new.png'  id='Like' style='opacity:0.30'  onclick='profilelikess("+userid+","+puserid+",this);'>";
}

  first="<!--div class='proimg_top'><img id='pro_l_img' src='img/pro_l_img.png'><p id='return_top_txt'>Return To Results</p><img id='pro_r_img' src='img/tepro_r_img.png'></div--><div class='thr_prifile_page'><div class='thr_prifile_banner'><img src='"+covers+"'></div></div><div class='sin_pfl_dtl'><div class='best-match-page'><div class='best-match-pro'><div class=best-tchr-image><img src='"+img+"'></div></div><div class='best-match-text'><div class='chrt_sml'><div id='chartContainer_1s'></div></div></div></div></div><div class='bottom-colmk'><div class='Uer_profile_dtl'><div class='thr-nme-bestk'><p>"+username+"</p><span>"+st+", "+collegename+"</span></div></div></div><div class='aboutme_main_container'><div class='about_me_profile'><div class='tab-main-score'><ul class='tab'><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event,"+'"reports"'+")'>Reports</a></li><li><a href='javascript:void(0)' class='tablinks' onclick='openCity(event, "+'"about"'+")'>About</a></li></ul><div class='like-me'><div class='button-like'>"+like+"</div><div class=img-like>"+span1+"</div></div></div><div class='about_center_div tabcontent' id='about' style='display:block;'><div class='about-top-part'><div class='about_dtl'><p class='about_txt bottm-line'><span class='about-div'>About Me</span><!--span class='imgspans'><img src='img/fblike.png'></span>"+span+"<span class='blue-like2'>"+like+"</span--></p></div>"+tt+"</div><div class='email-bottom-part'><div class='about_email'><p id='top_line'></p><p class='about_emaildtl'><img src='img/emailltr.png'> "+useremail+"</p></div></div></div><div id='reports' class='tabcontent'></div></div></div></div></div></div></div><div class='profil-group-div'><div class='group_dtl'><p class='group-text'>Class Groups</p></div><div id='student-clases-groups' class='student-clases-groups'></div>";

  jQuery("#student-class-group-pge").append(first);

   var chart = new CanvasJS.Chart("chartContainer_1s",
    {
      
        data: [
        {    
        indexLabelFontSize: 12,   
          
            indexLabelFontWeight: "normal",
            startAngle:0,
            indexLabelFontColor: "MistyRose",       
            indexLabelLineColor: "darkgrey", 
            indexLabelPlacement: "inside", 
            toolTipContent: "{name}: {y}hrs",
            showInLegend: true,
            indexLabel: "#percent%",
            type: "pie",
            showInLegend: false,
            toolTipContent: "{legendText}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            dataPoints: [
                {  y: Auditory, legendText: "", label: "" },
                {  y: Visual, legendText: "", label: "" },
                {  y: Kinesthetic, legendText: "", label: "" },
                {  y: Textual, legendText: "", label: ""}

            ]
    }
    ]
    });
    chart.render(); 

     ratings(userid);
    getgroups1(userid);
   

      // jQuery(".search-post-append").after("<div class='back7' onclick='history.back();'>Back</div>");
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 



}
function openCity(evt, cityName) {




    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function ratings(newuser)
{

userid= localStorage.getItem('loginurid');

/*  ajax hit question save value */
var task ='viewrating';
var useridpr = userid;
var formData = {
task: task,
useridpr:   useridpr
 };






  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
   

    success: function(responseprz) 
    {
   

if(responseprz=="")



{

var appendataa="<p class='no-class'>You have not any class.</p>";

jQuery("#reports").append(appendataa);
}

else{
    var obj = jQuery.parseJSON( responseprz );

//for()
  var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 

  /*jQuery('.student-result').html('');*/

len = arr.length;

//alert(len); //2*/
 //divdata="";
//  jQuery('#student-clases-added').html('');
  var p=1;
  var classdata="";
 var classdata1="";
var text="";
  for(i=1; i<=len;i++)
  {
    var ing="";

var getstringify = JSON.stringify(obj[i]);
//console.log(getstringify);
var objs = jQuery.parseJSON( getstringify );
var classname = objs.classname;
var startdate = objs.startdate;
if(startdate==null)

{
var d = new Date();
startdate=(d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear();

}



var feedbacrating = objs.feedbackrating;
//alert(feedbacrating);

if(feedbacrating=="norating")

{

feedbacrating=0;


}

feedback=feedbacrating *10;


var scid = objs.scid;



if(i==1)

{
var style='style=display:block;text-align:center;';
var classa='fff';
}

else{

  var style='style=display:none;text-align:center;';
  var classa='';
}


text+="<p class='date-text"+i+"'  "+style+" >"+startdate+"</p>";
for(j=1;j<=5;j++)


{
if(j<=feedbacrating)















{
ing+="<div class='images-list'  ><img src=http://bahuka.com/home/images/brain-gold.png class='list-main"+i+"-"+j+"'  id='"+j+"' onclick='addRating(this,"+userid+","+i+");' style='opacity:1;'></div>";

}

else

{
 ing+="<div class='images-list'><img src=http://bahuka.com/home/images/brain-black.png  class='list-main"+i+"-"+j+"'  id='"+j+"' onclick='addRating(this,"+userid+","+i+");' style='opacity:0.14;'></div>";


}
}



classdata +="<div class='arrow-main' id='rating"+i+"' "+style+" ><div class='imagew-arrow'><img src='img/arrow-1.png' onclick='prepagi("+i+")'></div><div class='text-arrow-img"+i+" "+classa+"'  id='"+scid+"' style='float: left;width: 56%;'>"+classname+"</div><div class='imagew-arrow'><img src='img/arrow-2.png' onclick='paging("+i+")'></div><div class='list-main' id='list-main"+i+"'>"+ing+"</div><div class='list-text  textarea' id='"+i+"-text'> <textarea  id='topics_discuss' name='topics_discuss' placeholder='What topics were discussed...'></textarea></div><div class='list-text'><span class='leftd'>Not Yet!</span><span class='right'>Got this!</span></div><div id='ratingLoading'></div><div class='submit-professor'><input value='RATE' type='submit'  onclick='classhedulelist("+userid+","+i+");'></div><div class='question-professsor'><div class='question-text'>Feedback Points</div><div class='question-picture'><img src='http://bahuka.com/home/images/trophy.png'></div><div class='feedback-points'><div class='text-feedback'>Feedback Points:</div><div class='zero"+i+"' style='color: white;'>"+feedback+"</div></div><div class='submit-question score-history '><a href='scorehistory.html'>Score History</a></div><div class='full-reports'>Check out your full Analytical Report</div></div></div>";
classdata1 +="<div class='arrow-main' id='rating-white"+i+"' style='display:none;'><div class='imagew-arrow'><img src='img/arrow-white1.png' onclick='prepagi1("+i+")'></div><div class='text-arrow-whitw"+i+"'  id='"+scid+"' style='color: white;font-size: 20px;width: 54%;float: left;'>"+classname+"</div><div class='imagew-arrow'><img src='img/arrow-white2.png' onclick='paging1("+i+")'></div></div>";


}



  //var appendata="<p class='coenfidence-list'>Confidence and Understanding</p><div class='small-text'>Only Professors & you can see ratings.</div>"+text+"<div class='arrow-main' id='rating-class'><div class='imagew-arrow'><img src='img/arrow-1.png'></div><div class='text-arrow'>Add Class</div><div class='imagew-arrow'><img src='img/arrow-2.png' onclick='paging(0)'></div></div>"+classdata+"<div class='list-text  textarea'> <textarea  id='topics_discuss' name='topics_discuss' placeholder='What topics were discussed...'></textarea></div><div class='list-text'><span class='leftd'>Not Yet!</span><span class='right'>Got this!</span></div><div id='ratingLoading'></div><div class='submit-professor'><input value='RATE' type='submit'  onclick='classhedulelist("+userid+");'></div><div class='question-professsor'><div class='question-text'>Questions for Professor</div><div class='question-picture'><img src='http://bahuka.com/home/images/question-ans.png'></div><div class='arrow-main' id='rating-white'><div class='imagew-arrow'><img src='img/arrow-white1.png'></div><div class='text-arrow'>Add Classes</div><div class='imagew-arrow'><img src='img/arrow-white2.png' onclick='paging1(0)'></div></div>"+classdata1+"<div class='list-text largetextarea'><textarea name='topics_discuss1' id='topics_discuss1' placeholder='Submit a question about the material covered today…'></textarea></div><div id='whiteLoading'></div><div class='submit-question'><input type='button'  name='submit' value='submit' onclick='submitquestion("+userid+")'></div><div class='absolute' style='display:none;'>Thanks ! your Question has been submitted</div></div><div class='trophy-class'><img src=http://bahuka.com/home/images/trophy.png></div><div class='feedback-points'><div class='text-feedback'>Feedback Points:<span>0</span></div><div class='submit-question score-history '><a href='scorehistory.html'>Score History</a></div><div class='full-reports'>Check out your full Analytical Report</div>";



  var appendata="<p class='coenfidence-list'>Confidence and Understanding</p><div class='small-text'>Only Professors & you can see ratings.</div>"+text+classdata+"";

jQuery("#reports").append(appendata);


}
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 


}



function paging(id)
{


var newid=id+1;
if (jQuery('div#rating'+newid).length) {
jQuery(".text-arrow-img"+id).removeClass("fff");
jQuery("#rating-class").hide();
jQuery("#rating"+newid).show();
jQuery(".text-arrow-img"+newid).addClass("fff");

jQuery("#rating"+id).hide();
jQuery(".date-text"+id).hide();
jQuery(".date-text"+newid).show();
/*jQuery(".questionlist2").show();
jQuery(".question_images2").show();*/
}

}


function pagingquest(id,scid)
{



jQuery('.no-activity-'+scid).remove();
jQuery('.question-show-'+scid).remove();
jQuery(".text-arrow-img"+id).removeClass("fff");
var newid=id+1;
if (jQuery('div#rating'+newid).length) {

jQuery("#rating-class").hide();
jQuery("#rating"+newid).show();
jQuery(".text-arrow-img"+newid).addClass("fff");
var arrowid=jQuery(".text-arrow-img"+newid).attr("id");
userid= localStorage.getItem('loginurid');
var task ='questionlist';

var formData = {
task: task,
userId:userid,
class_id:arrowid
 };
 jQuery('#formLoading').addClass('show');





  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
   

    success: function(responseprz) 
    {
   

jQuery('#formLoading').removeClass('show');
                  var groupobj = jQuery.parseJSON(responseprz);
                  var garr = [], groupobj;

                  for(key in groupobj) {
                  garr.push(key);
                  }
                  var  lengthgroups=garr.length;
         
                  if(lengthgroups > 0){
                // jQuery(".question-show").html("");
                  for(group=1;group<=lengthgroups;group++)
                  {
                  //alert(group);
                  var getstringifygroup = JSON.stringify(groupobj[group]);

                  var groupRslt = jQuery.parseJSON(getstringifygroup);
                  var question = groupRslt.question;
                  var totalquestions = groupRslt.totalquestions;
                  jQuery('.question-total > strong').html(totalquestions);

                     var showChar = 50;

                if(question.length > showChar) {

                var c = question.substr(0, showChar);
                var h = question.substr(showChar, question.length - showChar);
                var html="<div class='read-more'>"+c+"<span class='elippse-"+group+"-"+arrowid+"'>...</span><span  style='display:none;' class='morecontent"+group+"-"+arrowid+"'><span>"+h+"</span></span><div class='morelinks"+group+"-"+arrowid+"' onclick='more("+group+","+arrowid+");'>Read More</div></div>";
                }

                else

                {

                html=question;
                }


                  var class_id=groupRslt.class_id;

var question2="<div class='question-show-"+class_id+"' id='question-show'><div class='questions-list2'>"+html+" </div></div>";

jQuery('.arrow-main.main-'+class_id).append(question2);

   }

 }

if(lengthgroups == 0)
{


jQuery('#formLoading').removeClass('show');
var emptyques="<div class='no-activity-"+arrowid+"'><div class='text-activity'>No Activity</div><div class='no-question-imag'><img src='http://bahuka.com/home/images/no-question.png'></div></div>";

jQuery('.arrow-main.main-'+arrowid).append(emptyques);

jQuery('.question-total > strong').html('0');
 }
  },




    error: function () 
    { 
      //alert("Error");
    }
  }); 


jQuery("#rating"+id).hide();
jQuery(".date-text"+id).hide();
jQuery(".date-text"+newid).show();
/*jQuery(".questionlist2").show();
jQuery(".question_images2").show();*/
}

}
function paging1(id)
{

jQuery(".text-arrow-whitw"+id).removeClass("fff");
var newid=id+1;
if (jQuery('div#rating-white'+newid).length) {

jQuery("#rating-white").hide();
jQuery("#rating-white"+newid).show();
jQuery(".text-arrow-whitw"+newid).addClass("fff");

jQuery("#rating-white"+id).hide();

/*jQuery(".questionlist2").show();
jQuery(".question_images2").show();*/
}

}




function prepagi1(id)

{
jQuery(".text-arrow-whitw"+id).removeClass("white");
var newid=id-1;


if(newid==0){

jQuery("#rating-white"+id).hide();
jQuery("#rating-white").show();

}
else{
if (jQuery('div#rating-white'+newid).length) {


jQuery(".text-arrow-whitw"+newid).addClass("fff");
jQuery("#rating-white").hide();
jQuery("#rating-white"+newid).show();
jQuery("#rating-white"+id).hide();

/*jQuery(".questionlist2").show();
jQuery(".question_images2").show();*/
}
}
}
function prepagi(id)

{
                  
                  var newid=id-1;


                if(newid==0){

return false;

                /*jQuery("#rating"+id).hide();
                jQuery("#rating-class").show();*/
                jQuery(".date-text"+id).hide();
                }
                else{
                if (jQuery('div#rating'+newid).length) {

jQuery(".text-arrow-img"+id).removeClass("fff");
                jQuery(".text-arrow-img"+newid).addClass("fff");
                jQuery("#rating-class").hide();
                jQuery("#rating"+newid).show();
                jQuery("#rating"+id).hide();
                jQuery(".date-text"+newid).show();
                jQuery(".date-text"+id).hide();
/*jQuery(".questionlist2").show();
jQuery(".question_images2").show();*/
}
}
}



                            function prepagitest(id,scid)

                            {
jQuery('.no-activity-'+scid).remove();
                              jQuery('.question-show-'+scid).remove();
                            jQuery(".text-arrow-img"+id).removeClass("fff");
                            var newid=id-1;


                            if(newid==0){

                            jQuery("#rating"+id).hide();
                            jQuery("#rating-class").show();
                            jQuery(".date-text"+id).hide();

                            jQuery('.question-total > strong').html("0");
                            }
                            else{
                            if (jQuery('div#rating'+newid).length) {

                      var arrowid=jQuery(".text-arrow-img"+newid).attr("id");
                      userid= localStorage.getItem('loginurid');
                      var task ='questionlist';

                      var formData = {
                      task: task,
                      userId:userid,
                      class_id:arrowid
                      };


 jQuery('#formLoading').addClass('show');



                      jQuery.ajax({
                      type: "post",
                      url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
                      data: formData,


                      success: function(responseprz) 
                      {
                        jQuery('#formLoading').removeClass('show');






                        var groupobj = jQuery.parseJSON(responseprz);
                  var garr = [], groupobj;

                  for(key in groupobj) {
                  garr.push(key);
                  }
                  var  lengthgroups=garr.length;
               
                  if(lengthgroups > 0){
                // jQuery(".question-show").html("");
                  for(group=1;group<=lengthgroups;group++)
                  {
                  //alert(group);
                  var getstringifygroup = JSON.stringify(groupobj[group]);

                  var groupRslt = jQuery.parseJSON(getstringifygroup);
                  var question = groupRslt.question;

                  var class_id=groupRslt.class_id;
                         var totalquestions = groupRslt.totalquestions;
                        jQuery('.question-total > strong').html(totalquestions);
                  var showChar = 50;

                if(question.length > showChar) {

                var c = question.substr(0, showChar);
                var h = question.substr(showChar, question.length - showChar);
                var html="<div class='read-more'>"+c+"<span class='elippse-"+group+"-"+scid+"'>...</span><span  style='display:none;' class='morecontent"+group+"-"+scid+"'><span>"+h+"</span></span><div class='morelinks"+group+"-"+scid+"' onclick='more("+group+","+scid+");'>Read More</div></div>";
                }

                else

                {

                html=question;
                }
















var question2="<div class='question-show-"+class_id+"' id='question-show'><div class='questions-list2'>"+html+" </div></div>";

jQuery('.arrow-main.main-'+class_id).append(question2);

}
}



if(lengthgroups == 0)
{
 jQuery('#formLoading').removeClass('show');
var emptyques="<div class='no-activity-"+arrowid+"'><div class='text-activity'>No Activity</div><div class='no-question-imag'><img src='http://bahuka.com/home/images/no-question.png'></div></div>";

jQuery('.arrow-main.main-'+arrowid).append(emptyques);

jQuery('.question-total > strong').html('0');
 }
                      },




                      error: function () 
                      { 
                      //alert("Error");
                      }
                      }); 
                            jQuery(".text-arrow-img"+newid).addClass("fff");
                            jQuery("#rating-class").hide();
                            jQuery("#rating"+newid).show();
                            jQuery("#rating"+id).hide();
                            jQuery(".date-text"+newid).show();
                            jQuery(".date-text"+id).hide();

                            }



                            }
                            }


            function addRating(hh,userid,j){
            var hha=hh.src;
            var id=hh.id;
            var task="addrating";
            var classid=jQuery(".fff").attr("id");

            if(classid==undefined)

            {

            alert("Please select class");
            }
            else{
 

if(hha=="http://bahuka.com/home/images/brain-black.png")
{

  
           /* jQuery(".list-main"+i+"-"+id).attr("src","http://bahuka.com/home/images/brain-gold.png");
            jQuery(".list-main"+i+"-"+id).css("opacity","1");
*/
           for(i=1;i<=id;i++)

{


//alert(id);

   jQuery(".list-main"+j+"-"+i).attr("src","http://bahuka.com/home/images/brain-gold.png");
 jQuery(".list-main"+j+"-"+i).css("opacity","1");

}





            var formData = {
            task:task,
            classid:classid,
            rating: id,
            userId:userid
            };
            jQuery.ajax({
            type: "post",
            url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
            data: formData,
            //  beforeSend: function () { jQuery.mobile.loading('show'); },
            success: function(response) {

            },
            error: function () { 
            //alert("Error");
            }
            }); 
}
if(hha=="http://bahuka.com/home/images/brain-gold.png")
{

              var ida=parseInt(id) + 1;
              for(i=ida;i<=5;i++)


              {

                
              jQuery(".list-main"+j+"-"+i).attr("src","http://bahuka.com/home/images/brain-black.png");
              jQuery(".list-main"+j+"-"+i).css("opacity","0.14");


              }



/*
            jQuery(".list-main"+i+"-"+id).attr("src","http://bahuka.com/home/images/brain-black.png");
            jQuery(".list-main"+i+"-"+id).css("opacity","0.14");*/
            //var ratinga=id-1;
            var formData = {
            task:task,
            classid:classid,
            userId: userid,
            rating: id
            };
            jQuery.ajax({
            type: "post",
            url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
            data: formData,
            //  beforeSend: function () { jQuery.mobile.loading('show'); },
            success: function(response) {

            },
            error: function () { 
            //alert("Error");
            }
            }); 


}

}
}
 function classhedulelist(userid,i){

var classid=jQuery(".fff").attr("id");


var topics=jQuery("#topics_discuss").val();
if(classid==undefined)

{

  jQuery(".fff").toggleClass("red");
  alert("Please select the class ");

}

else if(topics=="")
{

  alert("Please write the topics");
  
}

else{


jQuery('#ratingLoading').addClass('show');



task="submitrate";
  var formData = {
    task:task,
   classid: classid,
   userId: userid,
   topics: topics
  };

  jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {


var ten=response*10;
      jQuery('#ratingLoading').removeClass('show');
 jQuery(".zero"+i).html(ten);
 jQuery("#topics_discuss").val("");
 alert("Thanks your rating has been submitted.");
    },
    error: function () { 
      //alert("Error");
    }
  }); 
}
}

function submitquestion(userid){

var question=jQuery("#topics_discuss1").val();
var classid=jQuery(".fff").attr("id");
//alert(question);
if(classid==undefined)

{

  jQuery("#class").toggleClass("red");
   alert("First select the Class");
return false;
}
else if(question=="")
{

  alert("Please write the question ");
  return false;
}
else{


  jQuery("#whiteLoading").addClass('show');

  var task="submiquestion";

var formData = {
     task:task,
   userId: userid,
   question: question,
   classid:classid
  };
jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
     //jQuery("#formLoading").addClass('show');
jQuery("#whiteLoading").removeClass('show');
 alert("Thanks your question has been submitted.");
/*function alertDismissed() {
    // do something
}

window.alert = navigator.notification.alert;



navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);*/
 jQuery("#topics_discuss1").val("");
    },
    error: function () { 
      //alert("Error");
    }
  }); 


}


  }


  function openratingdiv(){



userid= localStorage.getItem('loginurid');
 var task="openratingdiv";

var formData = {
     task:task,
   userId: userid
  };
jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,
    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {


  var obj = jQuery.parseJSON( response );




var getstringifyq = JSON.stringify(obj['average']);
var average = jQuery.parseJSON( getstringifyq );

var total = JSON.stringify(obj['total']);
var total1 = jQuery.parseJSON( total );
var averageimg="";

for(k=1;k<=5;k++)


{
if(k<=average)


{
 averageimg+="<div class='images-list'><img src='http://bahuka.com/home/images/brain-gold.png'></div>";



}
else


{
 averageimg+="<div class='images-list'><img src='http://bahuka.com/home/images/brain-white.png'></div>";



}


}
var dataappend="<h3>Average Rating Score</h3><div class='list-main'>"+averageimg+"</div><div class='total-ratings'>Total Ratings:<strong>"+total1+"</strong></div></div>";

jQuery("#ratings").append(dataappend)

  var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 
len = arr.length;


var len1=len-2;
if(len1>0)

{


 for(i=1; i<=len1;i++)
  {
    
    var ing="";

var getstringify = JSON.stringify(obj[i]);
//console.log(getstringify);
var objs = jQuery.parseJSON( getstringify );
var classname = objs.classname;
var startdate = objs.startdate;
var ratingnew=objs.ratingnew;
var topic=objs.topic;


var appendtopic ="";
for(l=1;l<=5;l++)

{
  if(l<=ratingnew)

  {
 appendtopic+="<div class='images-list'><img src=http://bahuka.com/home/images/brain-gold.png></div>";

}


else{

 appendtopic+="<div class='images-list'><img src=http://bahuka.com/home/images/brain-white.png></div>";

}
}
var dataappend1="<div class='rating-class'><div class='rating-left'>"+classname+" "+startdate+"</div><div class='rating-right'><div class='list-maing'>"+appendtopic+"</div></div></div><div class='topic-class'><div class='topic-p'>Topic</div><div class='topics-discuss'>"+topic+"</div></div>";

jQuery("#ratings").append(dataappend1);


}

}

else{
jQuery("#ratings").html("");
var nodata="<h3>Average Rating Score</h3><div class='list-main'><div class='images-list'><img src='http://bahuka.com/home/images/brain-white.png'></div><div class='images-list'><img src='http://bahuka.com/home/images/brain-white.png'></div><div class='images-list'><img src='http://bahuka.com/home/images/brain-white.png'></div><div class='images-list'><img src='http://bahuka.com/home/images/brain-white.png'></div><div class='images-list'><img src='http://bahuka.com/home/images/brain-white.png'></div></div><div class='total-ratings'>Total Ratings:<strong>0</strong></div><div class='norating-imag' style='text-align:center'><p>No Rating Yet!</p><div class='align-image' style='text-align:center'><img src=http://bahuka.com/home/images/crying-picture.png></div></div>";


jQuery("#ratings").append(nodata);

}

  
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  }


    function openratingquestion(){



userid= localStorage.getItem('loginurid');
 var task="openratingquestion";
var classdata="";
        var formData = {
         task:task,
        userId: userid
        };


jQuery.ajax({
    type: "post",
    url: "http://bahuka.com/home/index.php?option=com_content&view=appcode",
    data: formData,




    //  beforeSend: function () { jQuery.mobile.loading('show'); },
    success: function(response) {
//jQuery("#ratings").html("");

  var obj = jQuery.parseJSON( response );

  var arr = [], obj;

for(key in obj) {
    arr.push(key);
} 
len = arr.length;
if(len>0)

{


 for(i=1; i<=len;i++)
  {

    var appendtopic="";
    var ing="";

var getstringify = JSON.stringify(obj[i]);
//console.log(getstringify);
var objs = jQuery.parseJSON( getstringify );
var classname = objs.classname;
var startdate = objs.startdate;
var scid = objs.scid;



if(i==len)

{
var imgdata="<img src='img/arrow-2.png'>";


}

else{

  var imgdata="<img src='img/arrow-2.png' onclick='pagingquest("+i+","+scid+")'>";
}

classdata +="<div class='arrow-main  main-"+scid+"' id='rating"+i+"' style='display:none;'><div class='imagew-arrow'><img src='img/arrow-1.png' onclick='prepagitest("+i+","+scid+")'></div><div class='text-arrow-img"+i+"'  id='"+scid+"' style='float: left;width: 56%;margin-bottom: 16px;'>"+classname+"</div><div class='imagew-arrow'>"+imgdata+"</div></div>";


}



var qa="<div class='question-aqnswer'>Q&A</div><div class='question-total'>Questions:<strong>0</strong></div><div class='arrow-main' id='rating-class'><div class='imagew-arrow'><img src='img/arrow-1.png'></div><div class='text-arrow'>Select Class</div><div class='imagew-arrow'><img src='img/arrow-2.png' onclick='pagingquest(0,0)'></div></div><div id='formLoading'></div>"+classdata+"";
jQuery("#questions").append(qa);


}


/*else{

var nodata="<div class='question-aqnswer'>Q&A</div><div class='question-total'>Questions:<strong>0</strong></div>";


jQuery("#ratings").append(nodata);

}*/



  
    },
    error: function () { 
      //alert("Error");
    }
  }); 
  }



function more(i,cid)


{

jQuery(".morecontent"+i+"-"+cid).show();
jQuery(".elippse-"+i+"-"+cid).hide();



   jQuery(".morelinks"+i+"-"+cid).hide();
}

function checkurl()

{


    var  userid = localStorage.getItem('loginurid');



if(userid==null)
{
window.location.href = "index.html";

}










}