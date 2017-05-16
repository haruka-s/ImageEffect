function Paint(parent){
	this.parent = parent;
	this.dom = document.createElement('canvas');

	this.parent.appendChild(this.dom);
	this.context = this.dom.getContext('2d');


	this.flag = false;
	this.prevX =0;
	this.prevY =0;

	this.setUpEvent();
	//this.setUpWindow();
}

/**
*setUpEvent
*マウスイベント
*@param {int} lineWidth - 受け取る数字1
*@param {int} lineWidth - 受け取る数字2
*/

Paint.prototype.setUpEvent = function(){
	this.dom.addEventListener('mousemove', (function(eve){
		if(this.flag === true){
			console.log(eve);

			var rect = eve.target.getBoundingClientRect(); //絶対座標の取得
			var x = eve.clientX - rect.left; //マウスクリックの座標を取得
			var y = eve.clientY - rect.top;  
			console.log(x,y);
			//this.context.fillRect(x,y,10,10);

			this.context.beginPath();
			this.context.moveTo(this.prevX,this.prevY);
			this.context.lineTo(x,y);
			this.context.closePath();
			this.context.stroke();
			this.prevX = x;  //１つ前の座標として登録
			this.prevY = y;
			//this.context.fillRect(x,y,10,10);
		}
	}).bind(this), false);

	this.dom.addEventListener('mousedown', (function(eve){ //マウスを押したとき
		this.flag = true;
		var rect = eve.target.getBoundingClientRect(); 
		var	x = eve.clientX - rect.left;
		var	y = eve.clientY - rect.top;

		this.prevX = x;
		this.prevY = y;

	}).bind(this), false);

	this.dom.addEventListener('mouseup', (function(eve) { //マウスを離したとき
		this.flag = false;
	}).bind(this), false);

};

/**
*setUpWindow
*キャンバスの大きさを変える
*@param {int} lineWidth - 受け取る数字1
*@param {int} lineWidth - 受け取る数字2
*/

Paint.prototype.setUpWindow = function(width,height){
	this.dom.width=width;
	this.dom.height=height;
};

/**
*setUpColor
*ペンの色を変える
*@param {String} color - 受け取る文字(カラーネーム)
*あるいは
*@param {#******} color -16進数(カラーコード)
*/

Paint.prototype.setUpColor = function(color){
	this.context.strokeStyle=color;
};

/**
*setUpLineWidth
*ペンの太さを変える
*@param {int} lineWidth - 受け取る数字
*/

Paint.prototype.setUpLineWidth = function(lineWidth){
	this.context.lineWidth=lineWidth;
};

/**
*resetCanvas
*キャンバスを白紙に戻す
*/

Paint.prototype.resetCanvas = function(){
	this.context.clearRect(0,0,this.dom.width,this.dom.height);
};

/**
 * Test
 * テキストを受け取って出すだけクラス
 */
function Test(){
	this.text = '';                           // 自分に設定されているテキスト
	this.parent = null;                       // 親 DOM
	this.dom = document.createElement('div'); // 自分自身の DOM
	this.dom.className = 'test_class';
	this.dom.style.backgroundColor = 'red';
	this.dom.style.width = '100px';
	this.dom.style.height = '100px';
}

/**
 * setText
 * テキストを受け取って自身のプロパティを更新
 * @param {string} arg1 - うけとる文字そのいち
 * @param {string} arg2 - うけとる文字そのに
 */
Test.prototype.setText = function(arg1, arg2){
	this.text = arg1 + arg2;
	this.dom.textContent = this.text;
};
Test.prototype.appendDOM = function(parent){
	this.parent = parent;
	this.parent.appendChild(this.dom);
};


/*window.addEventListener('load',function(){
	var canvas = document.getElementById('id_canvas');
	var this.context = canvas.getthis.context('2d');
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight - 100;
	this.context.fillStyle = 'blue';
	this.context.lineWidth=2;
	this.context.strokeStyle = 'green';

	var flag = false;
	var x = 0;
	var y = 0;
	var this.prevX = 0;
	var this.prevY = 0;
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
			//this.context.fillRect(x,y,10,10);

			if(radio.checked === true){ //ペンの場合の処理
				this.context.beginPath();
				this.context.moveTo(this.prevX,this.prevY);
				this.context.lineTo(x,y);
				this.context.closePath();
				this.context.stroke();
				this.prevX = x;  //１つ前の座標として登録
				this.prevY = y;
				//this.context.fillRect(x,y,10,10);
			}
			else{
				this.context.clearRect(x,y,10,10); //消しゴムの場合の処理
			}
		}
//		this.context.fillRect(eve.layerX,eve.layerY,10,10);
	}, false);

	canvas.addEventListener('mousedown', function(eve){ //マウスを押したとき
		flag = true;
		var rect = eve.target.getBoundingClientRect(); 
			x = eve.clientX - rect.left;
			y = eve.clientY - rect.top;

			this.prevX = x;
			this.prevY = y;

	}, false);

	canvas.addEventListener('mouseup', function(eve) { //マウスを離したとき
		flag = false;
	}, false);

	var button = document.getElementById('id_button'); 
	button.addEventListener('click', function(){ //リセットボタンを押したとき
		this.context.clearRect(0,0,canvas.width,canvas.height);
	}, false);

	color.addEventListener("change",function(eve){ //色を変更したとき
		//this.context.fillStyle=color.value;
		this.context.strokeStyle=color.value;
	}, false);

	lineWidth.addEventListener('change', function (eve) {
		num = lineWidth.valueAsNumber;
		//console.log(num);
		this.context.lineWidth = num;
	}, false);

})
*/