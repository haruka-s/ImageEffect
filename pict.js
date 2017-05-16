function Pict(parent){
	// initialize
	this.parent = parent;
	this.dom = document.createElement('canvas');
	this.parent.appendChild(this.dom);        //DOMの生成
	this.context = this.dom.getContext('2d');

	// create instance
	this.reader = new FileReader();

	// attach event
	var inputFile = document.getElementById('id_file');
	inputFile.addEventListener('change', this.fileSelect.bind(this), false);
	this.reader.addEventListener('load', this.fileLoad.bind(this), false);

	// other setup
	this.setUpWindow();
}


/** 
 * ファイルの選択イベントの際に呼び出される
*/
Pict.prototype.fileSelect = function(eve){
	var target = eve.target;
	var files = target.files;       //FIleオブジェクトの取得
	var file = target.files[0];     //最初のファイルを取得

	console.log(files);

	this.reader.readAsDataURL(file);     //画像をDataURLとして読み込む
};

/** 
 * ファイルの読み込み
 * 読み込んだ画像をウィンドウに表示
*/

Pict.prototype.fileLoad = function(eve) {
	var getImage = document.getElementById("img");
	getImage.setAttribute("src",eve.target.result);
	//console.log(reader.result);
	var img = new Image();
	img.addEventListener('load', (function(){
		console.log('load!!!');
		this.canvasDraw(img);
	}).bind(this), false);
	img.src = eve.target.result;
};

/** 
 * キャンバスに画像を表示する
 * キャンバスのサイズは、画像データの取得時に画像と同サイズに変更される
 * drawImage(描画イメージ、x座標、y座標)
*/

Pict.prototype.canvasDraw = function(image) {
	this.dom.width = image.width;
	this.dom.height = image.height;
	this.context.drawImage(image, 0, 0);
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

Pict.prototype.setUpWindow = function(width,height){
	this.dom.width=width;
	this.dom.height=height;
};