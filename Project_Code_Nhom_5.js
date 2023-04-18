// Word Count in a Text function 
// @param: str : chuỗi nhập vào 
// @return: số từ trong chuỗi
function WordCount(str) {
  let word = str.split(" ");
  let count = 0;

  for(let i=0; i< word.length; i++){
      if(word[i] != ""){
          count += 1;
      }
  }
  return count;
}

// Find Word in a Text function 
// @param: str: chuỗi nhập vào
// @param: word: từ cần tìm trong chuỗi
// @return: số từ cần tìm trong chuỗi
function FindingSomeWords(str, word) {
  let x = 0, y=0;
  let check = str.includes(word)

  for (let i=0;i< str.length;i++)
      {
      if(str[i] == word[0])
          {
          for(let j=i; j< i+word.length;j++)
             {
              if(str[j]==word[j-i])
                {
                  y++;
                }
              if (y==word.length){
                  x++;
              }
          }
          y=0;
      }
  }
  if(check == false){
      return "Tu khoa '" + word + "' khong xuat hien trong van ban, vui long nhap lai." ; 
  }
  else 
  {return "Tu khoa '" + word + "' được xuat hien " + x + " lan.";}
  
}

// Raplace Word in a Text function
// @param: str : chuỗi nhập vào
//         words: từ muốn thay trong chuỗi với cú pháp [từ_muốn_thay từ_thay]
// @return: chuỗi sau khi đã thay
function ChangingaWord(str, words) {

let word = words.split(", ")
let check = str.includes(word[0])

let tu_muon_thay = word[0]
let tu_thay = word[1]

let newStr = str.split(tu_muon_thay).join(tu_thay)

if(check == false){
  return "Tu khoa nay khong co trong van ban, vui long nhap lai.";
}

else{
return newStr;
  }
}

// encoding Text function
// @param: str: Chuỗi nhập vào
//          num: số bất kỳ từ 1-10
// @return: Text sau khi mã hóa
function encodingText(str, num) {

let code=new Array(str.length);
let sum = "";
num = Number(num);

if (num < 7){
for(let i=0; i<str.length; i++){
  code[i] = str.charCodeAt(i);
  if ( code[i] == 32 ){
      code[i] = String.fromCharCode(32)
      }
  else if( code[i] + num > 122  ){
      code[i] = String.fromCharCode(96 + code[i] + num - 122)
      }
  else if( code[i] + num >= 97 ){
      code[i] = String.fromCharCode(code[i] + num)
      }
  else if(  code[i] + num > 90  ){
      code[i] = String.fromCharCode(64 + code[i] + num - 90)
      }
  else{
      code[i] = String.fromCharCode(code[i] + num)
      }
    }
  }
else{
  for(let i=0; i<str.length; i++){
      code[i] = str.charCodeAt(i);
      if ( code[i] == 32 ){
           code[i] = String.fromCharCode(32)
          }
      else if( code[i] + num > 122  ){
          code[i] = String.fromCharCode(96 + code[i] + num - 122)
          }
      else if( code[i] + num > 100 ){
              code[i] = String.fromCharCode(code[i] + num)
          }
      else if(  code[i] + num > 90  ){
            code[i] = String.fromCharCode(64 + code[i] + num - 90)
          }
      else{
          code[i] = String.fromCharCode(code[i] + num)
          }
        }
}
  
for (let j=0; j< str.length; j++){
  sum = sum + code[j]
  }
  
  return sum;

}

// decoding Text function
// @param: res: Chuỗi nhập vào
//         num: số bất kỳ từ 1-10
// @return: Text sau khi giải mã
function decodingText(str, num) {
  
let code=new Array(str.length);
let sum = "";
num = Number(num);

if (num < 7){
for(let i=0; i<str.length; i++){
  code[i] = str.charCodeAt(i);
  if ( code[i] == 32 ){
       code[i] = String.fromCharCode(32)
  }
  else if(  code[i] - num < 65  ){
      code[i] = String.fromCharCode(91 + code[i] - num - 65)
  }
  else if( code[i] - num < 91 ){
      code[i] = String.fromCharCode(code[i] - num)
  }
  else if( code[i] - num < 97  ){
      code[i] = String.fromCharCode(123 + code[i] - num - 97)
  }
  else{
      code[i] = String.fromCharCode(code[i] - num)
  }
}
}
else{
  for(let i=0; i<str.length; i++){
      code[i] = str.charCodeAt(i);
      if ( code[i] == 32 ){
          code[i] = String.fromCharCode(32)
      }
      else if(  code[i] - num < 65  ){
          code[i] = String.fromCharCode(91 + code[i] - num - 65)
      }
      else if( code[i] - num < 87 ){
          code[i] = String.fromCharCode(code[i] - num)
      }
      else if( code[i] - num < 97  ){
          code[i] = String.fromCharCode(123 + code[i] - num - 97)
      }
      else{
          code[i] = String.fromCharCode(code[i] - num)
      }
    }
}


for (let j=0; j< str.length; j++){
  sum = sum + code[j]
}

return sum;

}