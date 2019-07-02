let allPrice=document.querySelector('.allPrice');
let btn=document.querySelector('button');
let ost=document.querySelector('.ostatok');
let pr=document.querySelector('.price');
let add=document.querySelector('.add');
let sale=document.querySelector('.sale');
let myCount=0;
let b=0;
function Prod(name,price,total){ 
    this.name=name;
    this.price=price;
    this.total=total;
    const self=this;

    btn.addEventListener('click', function() {        
        this.name=document.querySelector('#select').value;
        this.count=document.querySelector('.count').value;
        myCount=this.count;                                            
        if(this.name==self.name){
            pr.value=self.price;
            b=self.total-this.count;                        
            if(b<3){
                ost.innerHTML='совсем мало'+' '+b;                
                }if(b<0){
                ost.innerHTML='нет столько в наличи';
                    }else{
                    ost.innerHTML=b;                    
            }
            allPrice.innerHTML=self.price*this.count+' '+'$';           
        } 
    });
    sale.addEventListener('click',function(){        
        self.total=+b;
        console.log(self.total);                    
    });
    add.addEventListener('click',function(){        
        let count_add=document.querySelector('.count_add').value;
        self.total=+b + +count_add;
        console.log(self.total);
    });    
}

// let prod1=new Prod('Молоко','30','100');
// let prod2=new Prod('Хлеб','15','30');
// let prod3=new Prod('Сыр','50','70');
// let prod4=new Prod('Изюм','25','25');
// let prod5=new Prod('Яйца','12','15');
// let prod6=new Prod('Огурцы','7','10');



const items = [
    {
        name: 'Молоко',
        price: 30,
        total: 100,
    },
    {
        name: 'Хлеб',
        price: 15,
        total: 30,
    },
    {
        name: 'Сыр',
        price: 50,
        total: 70,
    },
    {
        name: 'Изюм',
        price: 25,
        total: 25,
    },
    {
        name: 'Яйца',
        price: 12,
        total: 15,
    },
    {
        name: 'Огурцы',
        price: 7,
        total: 10,
    },    
]

let resultName = items.map(({ name }) => name);
let resultPrice = items.map(({ price }) => price);
let resultTotal = items.map(({ total }) => total);

let prod={};
for(let i=0; i<resultName.length; i++){
    prod[i]=new Prod(resultName[i], resultPrice[i], resultTotal[i]);      
}


