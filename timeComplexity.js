//FrogJmp
function solution(X, Y, D) {
    return Math.ceil((Y - X) / D)
}

//PermMissingElem
function solution(A) {
	let misElement = 0;
    let expectedElement = 1;

    A.sort(function(a, b) {
        return a - b;
    })
    
    if (A.length === 0) {
    misElement = 1;
    }
    for (let i=0; i<A.length; i++){
        if (A[i] === expectedElement) {
            expectedElement++
        } else {
            misElement=expectedElement
        }
        }
    if (!misElement) {
        misElement = A[A.length-1]+1
    }
    return misElement
};

//TapeEquilibrium
function solution(A) {
    let sumRight = A.reduce((pv, cv, idx) => (idx > 0) ? (pv + cv) : (0), 0);
    let sumLeft = 0;
    let substractions = [];
    let maxI = A.length - 1;
    
    for(let i = 0; i < maxI; i += 1){
        sumLeft += A[i];
        substractions.push(Math.abs(sumLeft - sumRight));
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }
    
    return substractions.reduce((pv, cv, idx) => (idx > 0) ? ((pv < cv)? pv : cv) : (cv), 0);
}