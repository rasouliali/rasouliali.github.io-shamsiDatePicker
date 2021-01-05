# shamsiDatePicker

<html>
<head>
	
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
  <script src="./jalalidatepicker.js"></script>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

</head>
<body>
	<div class="container"> 
		<div class="row">
			<div class="col-6">
				<input type="text" id="shamsidate" value="1369/09/20" class="jalaliDate"/>
			</div>
			<div class="col-6">
				<input type="text" id="shamsidate2" value="" class="jalaliDate"/>
			</div>
			<div class="col-12">
				<input type="text" id="shamsidate3" value="1369/09/20" class="jalaliDate"/>
			</div>
		</div>
		<button class="btn btn-success mt-3" id="validatejalalidate">validate jalali date</button>
		<button class="btn btn-success mt-3" id="validatejalalidateandShowerror">validate jalali date and Show error</button>
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

<body>
</html>
