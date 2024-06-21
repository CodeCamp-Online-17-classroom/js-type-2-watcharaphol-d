// write code here
let a = undefined;
let b = null;
let c = b + '4 2';

let d = Number(a); // The result is: NaN
let e = Number(b); // The result is: 0
let f = Number(c); // The result is: NaN

console.log(`The value of 'd' is: ${d}, \nThe value of 'e' is: ${e}, \nThe value of 'f' is: ${f}`);

//=============== Explanation ===============
// - ผลลัพทธ์ของตัวแปร d เป็น Number ค่า "์NaN" เพราะค่าของตัวแปร a เป็น Undefined เมื่อแปลงค่า Undefined ให้เป็นตัวเลขจะไม่สามารถแปลงได้ จึงให้ค่า NaN ออกมา

// - ผลลัพทธ์ของตัวแปร e เป็น Number ค่า "์0" เพราะค่าของตัวแปร b เป็น null หรือเป็นตัวแปรเปล่าที่ไม่มีค่า พอแปลงค่า null ให้เป็น Number จึงให้ค่า 0 ออกมา

// - ผลลัพทธ์ของตัวแปร f เป็น Number ค่า "์NaN" เพราะค่าของตัวแปร c เป็นการนำตัวแปร null มาทำ operation ทาง Math ซึ่งไม่สามารถทำได้ จึงมีค่าเป็น NaN พอแปลงค่า NaN ให้เป็นตัวแปรชนิด Number จึงให้ค่า NaN เหมือนเดิม