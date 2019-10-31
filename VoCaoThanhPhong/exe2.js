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


class People {
    constructor(name, old, address) {
          this.name = name;
          this.old = old;
          this.address = address;
        }
        getName() {
          return this.name;
        }
        getOld(){
            return this.old;
        }
        getAddress(){
            return this.address;
        }
        setAddress(address) {
          this.address = address;
        }
        setName(name) {
          this.name = name;
        }
        setOld(old){
            this.old = old;
        }
    }
    let person = new People("Jon Snow",15, "VN");
    console.log(person);
    person.setName("Anh Hoàng");
    person.setOld(18);
    person.setAddress("Đồng Nai");
    console.log(person.getName() + " ,em " + person.getOld() + ", nhà ở " + person.getAddress());
    