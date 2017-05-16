function Effect(parent){
	this.parent = parent;
	this.dom = document.createElement('canvas');

	this.parent.appendChild(this.dom);        //DOMの生成
	this.context = this.dom.getContext('2d');
    this.setUpWindow();

	var inputFile = document.getElementById('id_file');
	var reader = new FileReader();
    var image = new Image();

	/** 
	 * ファイルの選択
	*/
	function fileSelect(eve){
		var target = eve.target;
		var files = target.files;       //FIleオブジェクトの取得
		var file = target.files[0];     //最初のファイルを取得
 
		//console.log(files);
		
        /** 
         * ファイルの読み込み
         * 読み込んだ画像をウィンドウに表示
        */
        reader.load = function(eve){
            image.load = function(){
                this.context.drawImage(image, 10, 10);
            }
            image.src = eve.target.result;
        }
        reader.readAsDataURL(file);     //画像をDataURLとして読み込む
    }
    inputFile.addEventListener('change', fileSelect, false);   
	function fileLoad(eve) {
		document.getElementById("img").setAttribute("src",eve.target.result);
  		console.log(reader.result);
	}

	inputFile.addEventListener('change', fileSelect, false);
	reader.addEventListener('load', fileLoad, false);
}

/**
*setUpWindow
*キャンバスの大きさを変える
*@param {int} lineWidth - 受け取る数字1
*@param {int} lineWidth - 受け取る数字2
*/

Effect.prototype.setUpWindow = function(width,height){
	this.dom.width=width;
	this.dom.height=height;
};