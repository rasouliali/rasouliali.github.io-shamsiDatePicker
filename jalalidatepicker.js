/* brgin part of code from https://www.npmjs.com/package/jalaali-js  (find leap year and miladi to jalali convertor)*/
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0
}
	var breaks =  [ -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
  , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178
  ];

function mod(a, b) {
  return a - ~~(a / b) * b
}

function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === '[object Date]') {
    gd = gy.getDate()
    gm = gy.getMonth() + 1
    gy = gy.getFullYear()
  }
  return d2j(g2d(gy, gm, gd))
}

function g2d(gy, gm, gd) {
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4)
      + div(153 * mod(gm + 9, 12) + 2, 5)
      + gd - 34840408
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752
  return d
}
function div(a, b) {
  return ~~(a / b)
}

function d2j(jdn) {
  var gy = d2g(jdn).gy // Calculate Gregorian year (gy).
    , jy = gy - 621
    , r = jalCal(jy, false)
    , jdn1f = g2d(gy, 3, r.march)
    , jd
    , jm
    , k

  // Find number of days that passed since 1 Farvardin.
  k = jdn - jdn1f
  if (k >= 0) {
    if (k <= 185) {
      // The first 6 months.
      jm = 1 + div(k, 31)
      jd = mod(k, 31) + 1
      return  { jy: jy
              , jm: jm
              , jd: jd
              }
    } else {
      // The remaining months.
      k -= 186
    }
  } else {
    // Previous Jalaali year.
    jy -= 1
    k += 179
    if (r.leap === 1)
      k += 1
  }
  jm = 7 + div(k, 30)
  jd = mod(k, 30) + 1
  return  { jy: jy
          , jm: jm
          , jd: jd
          }
}


function d2g(jdn) {
  var j
    , i
    , gd
    , gm
    , gy
  j = 4 * jdn + 139361631
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908
  i = div(mod(j, 1461), 4) * 5 + 308
  gd = div(mod(i, 153), 5) + 1
  gm = mod(div(i, 153), 12) + 1
  gy = div(j, 1461) - 100100 + div(8 - gm, 6)
  return  { gy: gy
          , gm: gm
          , gd: gd
          }
}


function jalCal(jy, withoutLeap) {  
  var bl = breaks.length
    , gy = jy + 621
    , leapJ = -14
    , jp = breaks[0]
    , jm
    , jump
    , leap
    , leapG
    , march
    , n
    , i

  if (jy < jp || jy >= breaks[bl - 1])
    throw new Error('Invalid Jalaali year ' + jy)

  // Find the limiting years for the Jalaali year jy.
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i]
    jump = jm - jp
    if (jy < jm)
      break
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4)
    jp = jm
  }
  n = jy - jp

  // Find the number of leap years from AD 621 to the beginning
  // of the current Jalaali year in the Persian calendar.
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4)
  if (mod(jump, 33) === 4 && jump - n === 4)
    leapJ += 1

  // And the same in the Gregorian calendar (until the year gy).
  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150

  // Determine the Gregorian date of Farvardin the 1st.
  march = 20 + leapJ - leapG

  // return with gy and march when we don't need leap
  if (withoutLeap) return { gy: gy, march: march };


  // Find how many years have passed since the last leap year.
  if (jump - n < 6)
    n = n - jump + div(jump + 4, 33) * 33
  leap = mod(mod(n + 1, 33) - 1, 4)
  if (leap === -1) {
    leap = 4
  }  

  return  { leap: leap
          , gy: gy
          , march: march
          }
}


function jalCalLeap(jy) {  
  var bl = breaks.length        
    , jp = breaks[0]
    , jm
    , jump
    , leap    
    , n
    , i

  if (jy < jp || jy >= breaks[bl - 1])
    throw new Error('Invalid Jalaali year ' + jy)
    
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i]
    jump = jm - jp
    if (jy < jm)
      break    
    jp = jm
  }
  n = jy - jp
  
  if (jump - n < 6)
    n = n - jump + div(jump + 4, 33) * 33
  leap = mod(mod(n + 1, 33) - 1, 4)
  if (leap === -1) {
    leap = 4
  }  
 
  return leap
}
/* end part of code from https://www.npmjs.com/package/jalaali-js  */

/* brgin part of code write by ali rasouli(ali.r.programmer@gmail.com)  */
	jQuery.fn.ShamsiDatePicker = function() {
		var dataCore='<div id="shamsidateDiv" class="row shamsidateDiv jalaliDatePicker">'+
			'<div class="col-6 year">'+
				'<a><i class="fa fa-angle-up"></i></a>'+
				'<input type="number" readonly="" />'+
				'<a><i class="fa fa-angle-down"></i></a>'+
			'</div>'+
			'<div class="col-3 month">'+
				'<a><i class="fa fa-angle-up"></i></a>'+
				'<input type="number" readonly="" />'+
				'<a><i class="fa fa-angle-down"></i></a>'+
			'</div>'+
			'<div class="col-3 day">'+
				'<a><i class="fa fa-angle-up"></i></a>'+
				'<input type="number" readonly="" />'+
				'<a><i class="fa fa-angle-down"></i></a>'+
			'</div>'+			
			'<div class="col-4">'+
				'<button class="yes btn btn-primary">دیروز</button>'+
			'</div>'+
			'<div class="col-4">'+
				'<button class="today btn btn-primary">امروز</button>'+
			'</div>'+
			'<div class="col-4">'+
				'<button class="tom btn btn-primary">فردا</button>'+
			'</div>'+		
			'<div class="col-12">'+
				'<button class="closeBtn btn btn-primary mt-2 mb-2 form-control">بستن</button>'+
			'</div>'+
		'</div>';
		$(this).each(function(index) {
			var originInputId=$(this).attr("id");
			var data=dataCore.split('shamsidate').join(originInputId);
			
			$(this).after(data);
			
			$(this).on('change',function(){
				var changeDate=$(this).val();
				changeYear=changeDate.split('/')[0];
				changeMonth=changeDate.split('/')[1];
				changeDay=changeDate.split('/')[2];
				if(changeYear)
					$('#'+originInputId+'Div .year input').val(parseInt(changeYear));
				if(changeMonth)
					$('#'+originInputId+'Div .month input').val(parseInt(changeMonth));
				if(changeDay)
					$('#'+originInputId+'Div .day input').val(parseInt(changeDay));
			});
			
			$('#'+originInputId+'Div .yes').on('click , touchstart',function(){
				var yes = new Date();
				yes.setDate(new Date().getDate()-1);
				var setdate =toJalaali(yes);
				$('#'+originInputId).val(setdate.jy+"/"+setdate.jm+"/"+setdate.jd);
				$('#'+originInputId+'Div .year input').val(setdate.jy);
				$('#'+originInputId+'Div .month input').val(setdate.jm);
				$('#'+originInputId+'Div .day input').val(setdate.jd);

			});
			$('#'+originInputId+'Div .today').on('click , touchstart',function(){
				var today = new Date();
				var setdate =toJalaali(today);
				$('#'+originInputId).val(setdate.jy+"/"+setdate.jm+"/"+setdate.jd);
				$('#'+originInputId+'Div .year input').val(setdate.jy);
				$('#'+originInputId+'Div .month input').val(setdate.jm);
				$('#'+originInputId+'Div .day input').val(setdate.jd);

			});
			$('#'+originInputId+'Div .closeBtn').on('click , touchstart',function(){	
				$('.'+originInputId+'Div').hide();			
			});
			$('#'+originInputId+'Div .tom').on('click , touchstart',function(){				
				var tom= new Date();
				tom.setDate(new Date().getDate()+1);
				var setdate =toJalaali(tom);
				$('#'+originInputId).val(setdate.jy+"/"+setdate.jm+"/"+setdate.jd);
				$('#'+originInputId+'Div .year input').val(setdate.jy);
				$('#'+originInputId+'Div .month input').val(setdate.jm);
				$('#'+originInputId+'Div .day input').val(setdate.jd);

			});
			
			
			
			var defDate=$(this).val();
			//$('#'+originInputId).val(defDate);
			var defYear=parseInt(defDate.split('/')[0]);
			var defMonth=parseInt(defDate.split('/')[1]);
			var defDay=parseInt(defDate.split('/')[2]);
			$('#'+originInputId+'Div .year input').val(defYear);
			$('#'+originInputId+'Div .month input').val(defMonth);
			$('#'+originInputId+'Div .day input').val(defDay);
			$('#'+originInputId+' , .'+originInputId+'Div input').focus(function() {
				$('.'+originInputId+'Div').css("display","flex");
				setTimeout(function(){$('.'+originInputId+'Div').css("display","flex");},100);
			});
			$('.'+originInputId+'Div a').on('click , mouseup , mousedown ,touchstart',function() {
				$('.'+originInputId+'Div').css("display","flex");
				setTimeout(function(){$('.'+originInputId+'Div').css("display","flex");},100);
			});
			// $('.'+originInputId+'Div input , #'+originInputId).focusout(function() {
				// setTimeout(function(){$('.'+originInputId+'Div').hide();},50);
			// });
			$('.'+originInputId+'Div').hide();
			/*$('.shamsidatediv input').focus(function() {
			setTimeout(function(){$('.shamsidatediv').css("display","flex");},100);
			});*/
			$($('#'+originInputId+ 'Div .year').children()[0]).on('click , touchstart',function(){
				var year = $('#'+originInputId+ 'Div .year input').val();
				if(!year)
					if(!defYear)
						year=1360;
					else
						year=defYear;
				else
					year++;
				$('#'+originInputId+ 'Div .year input').val(year);
				getJalaliDateValue(originInputId);
			});
			$($('#'+originInputId+ 'Div .year').children()[2]).on('click , touchstart',function(){
				var year = $('#'+originInputId+ 'Div .year input').val();
				if(!year)
					if(!defYear)
						year=1360;
					else
						year=defYear;
				else
					year--;
				if(year<=0)
					year=0;
				$('#'+originInputId+ 'Div .year input').val(year);
				getJalaliDateValue(originInputId);
			});
			$($('#'+originInputId+ 'Div .month').children()[0]).on('click , touchstart',function(){
				var month = $('#'+originInputId+ 'Div .month input').val();
				if(!month)
					if(!defMonth)
						month=6;
					else
						month=defMonth;
				else
					month++;
				if(month>=13 || month<=0)
					month=1;
				$('#'+originInputId+ 'Div .month input').val(month);
				
				getJalaliDateValue(originInputId);
			});
			$($('#'+originInputId+ 'Div .month').children()[2]).on('click , touchstart',function(){
				var month = $('#'+originInputId+ 'Div .month input').val();
				if(!month)
					if(!defMonth)
						month=6;
					else
						month=defMonth;
				else
					month--;
				if(month<=0 || month>12)
					month=12;
				$('#'+originInputId+ 'Div .month input').val(month);
				getJalaliDateValue(originInputId);
			});
			$($('#'+originInputId+ 'Div .day').children()[0]).on('click , touchstart',function(){
				var day = $('#'+originInputId+ 'Div .day input').val();
				if(!day)
					if(!defDay)
						day=15;
					else
						day=defDay;
				else
					day++;
				if(day==30 || day==31 || day==32)
				{
					var month = $('#'+originInputId+ 'Div .month input').val();
					if(!month)
						month=6;
					if(month>6 && day==31)
						day=1;
					else if(month<=6 && day==32)
						day=1;
					else if(month==12 && (day==30 ||day==31))
					{
						var year = $('#'+originInputId+ 'Div .year input').val();
						if(!year)
							year=1360;
						if(isLeapJalaaliYear(year) && day>=31)
							day=1;
						else if(isLeapJalaaliYear(year)==false && day>=30)
							day=1;
					}
				}
				if(day>31 || day<1)
					day=1;
				$('#'+originInputId+ 'Div .day input').val(day);
				getJalaliDateValue(originInputId);
			});
			$($('#'+originInputId+ 'Div .day').children()[2]).on('click , touchstart',function(){
				var day = $('#'+originInputId+ 'Div .day input').val();
				if(!day)
					if(!defDay)
						day=15;
					else
						day=defDay;
				else
					day--;
				if(day<=0)
				{
					var month = $('#'+originInputId+ 'Div .month input').val();
					if(!month)
						month=6;
					if(month==12)
					{
						day=30
						var year = $('#'+originInputId+ 'Div .year input').val();
						if(!year)
							year=1360;
						if(isLeapJalaaliYear(year))
							day=30;
						else
							day=29;
					}
					else if(month>6)
						day=30;
					else
						day=31;
				}
				if(day>31 || day<1)
					day=1;
				$('#'+originInputId+ 'Div .day input').val(day);
				getJalaliDateValue(originInputId);
			});
			
			
			
			
			
			
			
		});
		
		return this; // This is needed so other functions can keep chaining off of this
	};

	function getJalaliDateValue(originId){
		var month =$('#'+originId+ 'Div .month input').val();
		var day =$('#'+originId+ 'Div .day input').val();
		var year =$('#'+originId+ 'Div .year input').val();
		if(!month)
		{
			month=6;
			$('#'+originId+ 'Div .month input').val(month)
		}
		if(!day)
		{
			day=15;
			$('#'+originId+ 'Div .day input').val(day);
		}
		if(!year)
		{
			year=1360;
			$('#'+originId+ 'Div .year input').val(year);
		}
		$('#'+originId).val(year+"/"+(month<10?"0"+month:month)+"/"+(day<10?"0"+day:day));
	}
	jQuery.fn.ShamsiDatePickerValidate = function() {
		var errData="";
		$(this).each(function(index) {
			var date = $(this).val();
			
			var year=parseInt(date.split('/')[0]);
			var month=parseInt(date.split('/')[1]);
			var day=parseInt(date.split('/')[2]);
			if(year<=0)
			{
				errData+= "-1000,سال صحیح نیست,"+$(this).attr("id")+",";
				return; 
			}
			if(month<=0)
			{
				errData+= "-1001,ماه صحیح نیست,"+$(this).attr("id")+",";
				return; 
			}
			if(month>12)
			{
				errData+= "-1001,ماه صحیح نیست,"+$(this).attr("id")+",";
				return; 
			}
			if(day<=0)
			{
				errData+= "-1002,روز صحیح نیست,"+$(this).attr("id")+",";
				return; 
			}
			if(day>31)
			{
				errData+= "-1002,روز صحیح نیست,"+$(this).attr("id")+",";
				return; 
			}
			if(month>6 && day>30)
			{
				errData+= "-1003,ماه های نیمه دوم سال باید کوچکتر از 31 باشند,"+$(this).attr("id")+",";
				return; 
			}
			if(month==12 && day>29 && isLeapJalaaliYear(year)==false)
			{
				errData+= "-1004,ماه اسفند 29 روز است,"+$(this).attr("id")+",";
				return; 
			}
		});
		if(!errData)
			return true;
		else 
			return errData;
	};
	jQuery.fn.ShamsiDatePickerValidateAndShowErr = function() {
		var validate =$(this).ShamsiDatePickerValidate();
		$('.ShamsiDatePickerValidate').remove();
		if(validate==true)
			return true;
		else
		{
			var errDataArr = validate.split(',');
			for(var i=0;i<errDataArr.length;i+=3)
			{
				var errorCode = errDataArr[i];
				var errorDesc = errDataArr[i+1];
				var errorElemId = errDataArr[i+2];
				$('#'+errorElemId).after('<span class="ShamsiDatePickerValidate" style="color:red">'+errorDesc+'</span>')
				$('#'+errorElemId).focus();
			}
		}
	}
	
	
	/* end part of code write by ali rasouli(ali.r.programmer@gmail.com)  */
