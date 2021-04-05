function MapPollyFill(){
    var arr = [4,3,2,1];
    console.log(arr.myMap((item)=> item*2));
    console.log('filter',arr.myFilter(item => item > 2));
    console.log('reduce',arr.myReduce((total, num) => total-num));
    console.log('reduce -- ',arr.reduce((total, num) => total-num));
}

Array.prototype.myMap = function (callback){
    var newArray = [];
    for(let item of this) {
        // pass each element to callback and push response to new array
          newArray.push(callback(item));
    }
        // return final array
    return newArray;

}

Array.prototype.myFilter = function (callback){
    var newArray = [];
    for(let item of this){
        if(callback(item)){
            newArray.push(item);
        }
        
    }
    return newArray;
}
Array.prototype.myReduce = function (callback){
    var total = this[0];
    console.log('this: ', this);
    for(let i = 1; i<this.length;i++) {
        // pass each element to callback and push response to new array
        // console.log('item', item);
        var item = this[i];
        total = callback(total,item);
        
    }
        
    return total;

}