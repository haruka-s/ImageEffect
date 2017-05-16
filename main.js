window.addEventListener('load',function(){
	var p = new Paint(document.body);
	p.setUpWindow(500,500);
	p.setUpColor('#00fdfa');
	p.setUpLineWidth(15);
	var t = new Test();
	t.setText('hoge', 'fuga');
	t.appendDOM(document.body);
});

/*window.addEventListener('load',function(){
	var canvas = document.getElementById('id_canvas');
	var context = canvas.getContext('2d');
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight - 100;
	context.fillStyle = 'blue';
	context.lineWidth=2;
	context.strokeStyle = 'green';

	var flag = false;
	var x = 0;
	var y = 0;
	var prevX = 0;
	var prevY = 0;
	var color = document.getElementById('id_color');
	var radio = document.getElementById('id_pen');
	var lineWidth = document.getElementById('id_lineWidth');


	canvas.addEventListener('mousemove', function(eve){ //マウスを動かしたとき
		if(flag === true){
			console.log(eve);

			var rect = eve.target.getBoundingClientRect(); //絶対座標の取得
			x = eve.clientX - rect.left; //マウスクリックの座標を取得
			y = eve.clientY - rect.top;  
			console.log(x,y);
			//context.fillRect(x,y,10,10);

			if(radio.checked === true){ //ペンの場合の処理
				context.beginPath();
				context.moveTo(prevX,prevY);
				context.lineTo(x,y);
				context.closePath();
				context.stroke();
				prevX = x;  //１つ前の座標として登録
				prevY = y;
				//context.fillRect(x,y,10,10);
			}
			else{
				context.clearRect(x,y,10,10); //消しゴムの場合の処理
			}
		}
//		context.fillRect(eve.layerX,eve.layerY,10,10);
	}, false);

	canvas.addEventListener('mousedown', function(eve){ //マウスを押したとき
		flag = true;
		var rect = eve.target.getBoundingClientRect(); 
			x = eve.clientX - rect.left;
			y = eve.clientY - rect.top;

			prevX = x;
			prevY = y;

	}, false);

	canvas.addEventListener('mouseup', function(eve) { //マウスを離したとき
		flag = false;
	}, false);

	var button = document.getElementById('id_button'); 
	button.addEventListener('click', function(){ //リセットボタンを押したとき
		context.clearRect(0,0,canvas.width,canvas.height);
	}, false);

	color.addEventListener("change",function(eve){ //色を変更したとき
		//context.fillStyle=color.value;
		context.strokeStyle=color.value;
	}, false);

	lineWidth.addEventListener('change', function (eve) {
		num = lineWidth.valueAsNumber;
		//console.log(num);
		context.lineWidth = num;
	}, false);

})
*/