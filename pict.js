function Pict(parent){
	// initialize
	this.parent = parent;
	this.dom = document.createElement('canvas');
	this.parent.appendChild(this.dom);        //DOMの生成
	this.context = this.dom.getContext('2d');
	this.data = null;

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
		this.getPictData(img);
		this.grayScale(img);
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
 * キャンバス領域のピクセルデータを表す
 */
 Pict.prototype.getPictData = function() {

	this.data = this.context.getImageData(0, 0, this.dom.width, this.dom.height);
	console.log(this.data);
}

/**
 * 画像をグレースケールに変換する
 */

Pict.prototype.grayScale = function() {

	var inputData = this.data.data;  //this.dataのdataを取得する
	var output = this.context.createImageData(this.dom.width, this.dom.height);
	var outputData = output.data;
	var i = 0;
	
	for(i=0; i<inputData.length; i = i + 4){
		var pixel = (inputData[i] + inputData[i+1] + inputData[i+2]) / 3;
		outputData[i] = pixel;
		outputData[i+1] = pixel;
		outputData[i+2] = pixel;
		outputData[i+3] = inputData[i+3];
	}
	this.context.putImageData(output, 0, 0);
}

/**
*setUpWindow
*キャンバスの大きさを変える
*@param {int} width - 受け取る数字1
*@param {int} height - 受け取る数字2
*/

Pict.prototype.setUpWindow = function(width,height){
	this.dom.width=width;
	this.dom.height=height;
};