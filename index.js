//42 for in
var myInfor={
    name:'Van Tuyen',
    age:18,
    address:'Hanoi',
};
for(var key in myInfor){
    console.log(myInfor[key]);
}
for(var key in myInfor){
    console.log(key)
}
var languages=[
    'Js',
    'Php',
    'C',
]
for(var value in languages){
    console.log(languages[value]);
}
var js='Javascript';

for(var value in js){
    console.log(js[value]);
}
//43 for of
var languages=[
    'JS',
    'C',
    'C++',
]
for (const value of languages) {
    console.log(value);
}
var myInfor={
    name:'Van Tuyen',
    age:18
}
console.log(Object.keys(myInfor));
for (const value of Object.keys(myInfor)) {
    console.log(value);
}
//44
var i=0;
while (i<1000){
    
    console.log(i);
    i++;
}
//45 do/while
var i=0;
var isSuccess=false;

do {
    i++;
    console.log('Nạp thẻ lần '+ i);
    if (false) {
        isSuccess=true;
    }
    
}while(!isSuccess && i<3);
//46 break and continue in loop
for(var i=0;i<10;i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}
//47 Vòng lặp lồng nhau - Nested loop
var myArray=[
    [1,2],
    [3,4],
    [5,6]
];
for(var i=0;i<myArray.length;i++){
    for(var j=0;j<myArray[i].length;j++){
        console.log(myArray[i][j]);
    }
}
//46 Loop
for(var i=0;i<=100;i +=5){
    console.log(i);
}

