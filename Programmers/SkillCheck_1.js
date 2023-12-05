function fun1(num1, num2){
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
    if(num1 % i === 0 && num2 % i === 0){
      gcd = i;
    }
  }
  return gcd;
}

function fun2(num1, num2){
  let lcm = 1;

  while(true){
    if((lcm % num1 === 0) && (lcm % num2 === 0)){
      break;
    }
    lcm++;
  }
  return lcm
}

function solution(n, m) {
  return [fun1(n,m),fun2(n,m)];
}

solution(3,12);