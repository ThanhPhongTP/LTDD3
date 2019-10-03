// var hello = (name, message) => {
//     console.log("Hello " + name + ", My name is " + message);
// };

// hello('every one', 'Phong');
// };




var a = 10
var b = -15
var pt = 3
console.log("Số a:", a, "; Số b:", b)

var TinhTong = (SoA, SoB, pt) => {
    // console.log("Tổng a + b là:", a + b);
    // if ((a + b) >= 0)
    //     console.log('Tổng dương')
    // else
    //     console.log('Tổng âm')

    switch (pt){
        case 1:
            console.log("Tổng a + b là:", a + b);
            break;      
        case 2:
            console.log("Hiệu a - b là:", a - b);
            break;
        case 3:
            console.log("Tích a * b là:", a * b);
            break
        case 4:
            console.log("Thương a / b là:", a * b);
            break
        }
};

TinhTong(a,b, pt);


