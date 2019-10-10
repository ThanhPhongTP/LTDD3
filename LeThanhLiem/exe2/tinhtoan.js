var a;
var b = 6, c = 80;
var ptCong = (b, c)=>{
    return a + b;   
};
var ptTru = (b, c)=>{
    return b - c;  
};
var ptNhan = (b, c)=>{
    return b * c;
};
var ptChia = (b, c)=>{
    return b / c;
};

switch(3)
{
    case 1:
        ptCong(b,c);
        break;
    case 2:
        ptTru(b,c);
        break;
    case 3:
        ptNhan(b,c);
        break;
    case 4:
        ptChia(b,c);
        break;     
}




