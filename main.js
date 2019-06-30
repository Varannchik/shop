let allPrice=document.querySelector('.allPrice');
let btn=document.querySelector('button');
let ost=document.querySelector('.ostatok');
let pr=document.querySelector('.price'); 
function Prod(name,price,total){ 
    this.name=name;
    this.price=price;
    this.total=total;
    const self=this;
    btn.addEventListener('click', function() {
        this.name=document.querySelector('#select').value;
        this.count=document.querySelector('.count').value;                    
        if(this.name==self.name){
            pr.value=self.price;
            let b=self.total-this.count            
            if(this.b<3){
                ost.innerHTML='совсем мало'+' '+b;  
                }if(b<0){
                ost.innerHTML='нет столько в наличи';
                    }else{
                    ost.innerHTML=b;  
            }
            allPrice.innerHTML=self.price*this.count+' '+'$';
        } 
    });
}

let prod1=new Prod('Молоко','30','100');
let prod2=new Prod('Хлеб','15','30');
let prod3=new Prod('Сыр','50','70');
let prod4=new Prod('Изюм','25','25');
let prod5=new Prod('Яйца','12','15');
let prod6=new Prod('Огурцы','7','10');





