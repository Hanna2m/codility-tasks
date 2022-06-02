// CyclicRotation
function solution(A, K) {
    if (A.length>0 && K>0) {
       for (let i=1; i<=K; i++){
           let lastElement = A[A.length-1];
           A.pop()
           console.log(A)
           A.unshift(lastElement)
         }
     }
     return A 
   }

//OddOccurrencesInArray
function solution(A) {
    let unpairedNum;
    if (A.length === 1) {
      return A[0]
    }
    let step = 2
    if (A.length > 1){
      A.sort()
      unpairedNum = A[A.length-1]
      for (let i=0; i<A.length-1; i+=step){
          if (A[i] === A[i+1]) {
          step = 2
        }
        if (A[i] !== A[i+1]) {
          unpairedNum = A[i]
          step = 1
        }
      }
    }  
    console.log(unpairedNum )
    return unpairedNum 
  }