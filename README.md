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
	&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;
	&lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
					</code>
				</pre>
			</div>
			<div class="col-12">
				and only added these two files:
  				<pre>
	<code>
	&lt;link rel="stylesheet" href="https://raw.githubusercontent.com/rasouliali/shamsidatepicker/main/style.css"&gt;
	&lt;script src="https://raw.githubusercontent.com/rasouliali/shamsidatepicker/main/jalalidatepicker.js"&gt;&lt;/script&gt;
					</code>
				</pre>
			</div>
			<div class="col-12">
				and then you add input tag and run script:
  				<pre>
	<code>
	&lt;input type="text" id="shamsidate4" value="1399/12/20" class="jalaliDate"/&gt;
	&lt;script &gt;$('.jalaliDate').ShamsiDatePicker(); &lt;/script&gt;
	</code>
				</pre>
			</div>
			<div class="col-12">
				for validation before input you can use this code: var isValid=$('.jalaliDate').ShamsiDatePickerValidate()
				you can see sample code that log of validation in end of page(last element of bbody) in bottom:
  				<pre>
	<code>
	&lt;script &gt;
	$('.jalaliDate').on('click',function(){
		var validate = $('.jalaliDate').ShamsiDatePickerValidate();
		$('.ShamsiDatePickerValidate').remove();
		if(validate==true)
			$('body').append('<span class="ShamsiDatePickerValidate" style="color:red">تاریخ ها صحیح هستند</span>');
		else
		{
			$('body').append('<span class="ShamsiDatePickerValidate" style="color:red">'+validate+'</span>');
		}
	}); &lt;/script&gt;
	</code>
				</pre>
			</div>
		</div>
	</body>
</html>
