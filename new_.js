
var arr = ["flower", "flow", "flight"];
function Prefix(arr,X=[],T=[],Y={},Z=1) {
	this.arr = arr;
	this.spl = (str) => {
		var len = new Array(str.length).fill(0);
		var ssr = len.map((v,k)=>{
			v = str.split('');
			v.length=k+1;
			return v.join('');
		});
		return ssr;
	};
	this.max = (arr,obj={}) => { 
		for(var i= 0, l = arr.length; i< l; i++){ 
			var item = arr[i]; 
			obj[item] = (obj[item] +1 ) || 1; 
		} 
		return obj; 
	};
	this.getData = () => {
		for(var j = 0; j < arr.length; j++) {
		    for(var i = 0; i < this.spl(arr[0]).length; i++) {
		        if(arr[j].includes(this.spl(arr[0])[i])) {
		            X.push(this.spl(arr[0])[i]);
		        } else {
		            continue;
		        }
		    }
		}
		Y = this.max(X);
		Z = Math.max(...Object.values(Y));
		if(Z === 0 || Z === 1) return '';
		for(var k in Y) {
			if(Y[k] == Z) T.push(k);
		}
		return T[T.length-1] || '';
	}
}
var prefix = new Prefix(arr);
console.log(prefix.getData());