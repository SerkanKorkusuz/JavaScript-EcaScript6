const last_javascript_bender = "serkan korkusuz";

arr = [1, 2, 3, 4, 5, 6];
arr2 = arr.map((num) => {return num * 2;});
arr2;

arr3 = arr.map(num => {return num *3});
arr3;

arr4 = arr.map(num => num*4);
arr4;

arr_class = arr.map(num => (
    { num : num*2, 
      }));
arr_class;

arr_of_twos = arr.map(() => 2);
arr_of_twos;

var obj = {
    value : 0,
    increment : function(){
        setTimeout(() =>  {
            this.value++;
            console.log(this.value);
        }, 1000)
    }
}
obj.increment()
