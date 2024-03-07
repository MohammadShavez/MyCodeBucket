<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Date & Time</title>
</head>
<body>
<div id="runningTime"></div>
<p>This is the local time Clock.</p>
</body>
</html>
<!--  -->
<style>
	body{
		background-color:black;
		color:#fff;
	}
	#runningTime{
		margin-top: 100px;
		text-align:center;
		font-size:140px;
		font-family: Digital-7;
		color: green;
	}
	@font-face {
    font-family: Digital-7;
    src: url(Digital-7.ttf);
}
p{
	text-align:center;
}
</style>










<!--  -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
 

 
<script type="text/javascript">
$(document).ready(function() {
 setInterval(runningTime, 1000);
});
function runningTime() {
  $.ajax({
    url: 'time.php',
    success: function(data) {
       $('#runningTime').html(data);
     },
  });
}
</script>