const check = (number) => {
  // number123が3の倍数かどうかを戻り値として返してください
  return number%3 === 0
  
};
const result = check(123);
// if文の条件式で、checkを呼び出してください
if (check) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}
