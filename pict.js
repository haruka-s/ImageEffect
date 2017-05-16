function Pict(parent){
	this.parent = parent;
	this.dom = document.createElement('canvas');

	this.parent.appendChild(this.dom);        //DOMの生成
	this.context = this.dom.getContext('2d');

	var inputFile = document.getElementById('id_file');
	var reader = new FileReader();

	/** 
	 * ファイルの選択
	*/
	function fileSelect(eve){
		var target = eve.target;
		var files = target.files;       //FIleオブジェクトの取得
		var file = target.files[0];     //最初のファイルを取得
 
		console.log(files);
		reader.readAsDataURL(file);     //画像をDataURLとして読み込む
	}

	/** 
	 * ファイルの読み込み
	 * 読み込んだ画像をウィンドウに表示
	*/
	function fileLoad(eve) {
		document.getElementById("img").setAttribute("src",eve.target.result);
  		console.log(reader.result);
	}

	inputFile.addEventListener('change', fileSelect, false);
	reader.addEventListener('load', fileLoad, false);
}



/**
*setUpEvent
*マウスイベント
*@param {int} lineWidth - 受け取る数字1
*@param {int} lineWidth - 受け取る数字2
*/
/*
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
*/
/**
*setUpWindow
*キャンバスの大きさを変える
*@param {int} lineWidth - 受け取る数字1
*@param {int} lineWidth - 受け取る数字2
*/
/*
Paint.prototype.setUpWindow = function(width,height){
	this.dom.width=width;
	this.dom.height=height;
};
*/

/**
*resetCanvas
*キャンバスを白紙に戻す
*/
/*
Paint.prototype.resetCanvas = function(){
	this.context.clearRect(0,0,this.dom.width,this.dom.height);
};
*/