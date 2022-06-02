//FrogRiverOne
function solution(X, A) {
    const counts = new Map();   
    for (let i = 0; i < A.length; i++) {      
        let positon = A[i]  
        //check if position as a key in counts is not already exist -> add to the counts with key=position and value=true   
        if (!counts.has(positon)) {      
        counts.set(positon, true)    
        }       
        if (counts.size === X) {         
        return i     
        }   
    }   
    return -1
}

//PermCheck
function solution(A) {
    let expectedElement = 0;
  A.sort((a,b) => {return a-b})
    for (let i=0; i<A.length; i++){
        if (A[i] === expectedElement+1){
        expectedElement++
        }
    }
   return (expectedElement === A.length ? 1 : 0)
}

//MaxCounter
function solution(N, A) {
    let counters = [...Array(N)].map(x => 0);
    let max = 0;
    let lastMax = 0;
    
    for(j=0; j < A.length; j++){
        if(A[j] < N+1){
            i = A[j] - 1;
            if (counters[i] < lastMax) counters[i] = lastMax;
            counters[i]++;
            if (max < counters[i]) max = counters[i];
        } else {
            lastMax = max;
        }
    }
    
    for(j = 0; j < N; j++){
      if (counters[j] < lastMax) counters[j] = lastMax;
    }
    
    return counters;
}