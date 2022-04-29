<html>
	<body>
	<div class="container"> 
		<h1>Shamsi Date Picker</h1>
		<div class="row">
			<div class="col-12">
				bottom shamsi date picker made by jquery and some bootstrap classes. only use buttom code:
				<pre>
					<code>$('.jalaliDate').ShamsiDatePicker();</code>
				</pre>
			</div>
			<div class="col-12">
				<input type="text" id="shamsidate3" value="1399/10/16" class="jalaliDate"/>
			</div>
			<div class="col-12">
				you can use the shamsi date picker in multiple in your page.
			</div>
			<div class="col-6">
				<input type="text" id="shamsidate" value="1369/09/20" class="jalaliDate"/>
			</div>
			<div class="col-6">
				<input type="text" id="shamsidate2" value="" class="jalaliDate"/>
			</div>
			<div class="col-12">
				As you know the common jquery and bootstrap links are these links:
  				<pre>
					<code>
					&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"&gt;
					&lt;link rel="stylesheet" href="https://raw.githubusercontent.com/rasouliali/shamsidatepicker/main/style.css"&gt;
					
					&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;
					&lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
					&lt;script src="https://raw.githubusercontent.com/rasouliali/shamsidatepicker/main/jalalidatepicker.js"&gt;&lt;/script&gt;
					
					</code>
				</pre>
			</div>
		</div>
		<div class="col-12">
			Bottom botton can show you how you can validate shamsi date picker. 
			First botton validate shamsi date picker and return validation in string the 
			parameters in returned string join by comma.(first value is error code. After that comma sign. Second is error description. After that comma sign. Third is element id that has error and repeat this 
			for each element and all of them seperate with comma sign).
			
			Second bottom validation as common validation and show error after the each date picker box.
		</div>
		<button class="btn btn-success mt-3" id="validatejalalidate">validate jalali date</button>
		<button class="btn btn-success mt-3" id="validatejalalidateandShowerror">validate jalali date and Show error</button>
		
		<div class="col-12">
			bottom date pickers are invalid values after click on above validation botton you can see validation errors.
		</div>
		<div class="col-12">
			<input type="text" id="shamsidate4" value="1399/13/20" class="jalaliDate"/>
		</div>
		<div class="col-12">
			<input type="text" id="shamsidate5" value="1399/11/36" class="jalaliDate"/>
		</div>
		<div class="col-12">
			the only note about this date picker is each input text must be has unique id(you must be assign id and it must be unique)
		</div>
	</div>
	<script>
	$('.jalaliDate').ShamsiDatePicker();
	$('#validatejalalidate').on('click , touchstart',function(){
		var validate = $('.jalaliDate').ShamsiDatePickerValidate();
		$('.ShamsiDatePickerValidate').remove();
		if(validate==true)
			$('body').append('<span class="ShamsiDatePickerValidate" style="color:red">تاریخ ها صحیح هستند</span>');
		else
		{
			$('body').append('<span class="ShamsiDatePickerValidate" style="color:red">'+validate+'</span>');
			//var errDataArr = validate.split(',');
			//for(var i=0;i<errDataArr.length;i+=3)
			//{
			//	var errorCode = errDataArr[i];
			//	var errorDesc = errDataArr[i+1];
			//	var errorElemId = errDataArr[i+2];
			//	$('#'+errorElemId).after('<span class="ShamsiDatePickerValidate" style="color:red">'+errorDesc+'</span>')
			//	$('#'+errorElemId).focus();
			//}
		}
	});
	$('#validatejalalidateandShowerror').on('click , touchstart',function(){
		var validate = $('.jalaliDate').ShamsiDatePickerValidateAndShowErr();
		
	});
	
	</script>

	</body>
</html>
