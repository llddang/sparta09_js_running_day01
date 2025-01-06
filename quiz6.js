function applyCoupon(cart, coupon) {
  for(const idx in cart["items"]) {
    cart["items"][idx].price -= coupon.discount;
  }
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = copy(userACart);

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log(userACart);
console.log(userBCart);


function copy (target) {
  let res = {};

  if(typeof target === "object" && target !== null) {
    for(const prop in target) {
      res[prop] = copy(target[prop]);
    }
  } else res = target;

  return res;
}



/*
1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
     
    JS에서 매개변수의 object는 call by reference 이므로 
    userBCart와 userACart 모두 키보드 및 마우스의 값이 5000원 감소되어 있다. 


2.	1번의 결과에 대한 이유를 설명해보세요.

    userACart를 바로 userBCart에 붙여넣었고, JS에서 매개변수의 object는 call by reference 이므로 영향이 간다.


3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?

    깊은 복사를 하는 함수를 만들었습니다.
*/
