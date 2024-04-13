// function solution(name) {
//   const nameSplit = name.split("");
//   const graph = Array(name.length).fill(0).map(_=>Array(name.length).fill(0));
//
//   for(let i in nameSplit) {
//     if(nameSplit[i] === 'A') continue;
//     graph[i] = graph[i].map((val,idx)=> )
//   }
//   return 0;
// }
//
// console.log(solution("BBAAAAB"))
// console.log(solution("BBBABBB"))
// console.log(solution("JEROEN"));


const a = [6,1,2,1,2,3,4];

class Student{
  name;

  constructor(name) {
    this.name = name;
  }

}

const a1 = new Student("kim");
const b = new Student("park");
const c = new Student("yim");
const d = new Student("lee");
const e = new Student("yoo");


const list = [a1,b,c,d,e];

list.sort((a,b) => a.name > b.name ? 1 : -1);
console.log(list);