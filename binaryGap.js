function solution(N) {
    const binaryArr = N.toString(2).split('');
    let currentGap=0;
    let gapArr=[];
    console.log(binaryArr)
    const firstOne = binaryArr.indexOf('1');
    for (let i=firstOne+1; i<binaryArr.length; i++) {
      if (binaryArr[i] === "0"){
        currentGap++
        console.log(currentGap)
      } else{
        gapArr.push(currentGap);
        currentGap = 0;
      }
    }
    console.log(gapArr)
    if (gapArr.length > 0) {
      return Math.max(...gapArr)
    } else return 0
}