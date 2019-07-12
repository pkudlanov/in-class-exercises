// need to find word needle and index in array
// need to return message "found the needle at position ${index}"
function findNeedle(haystack) {
    const needleInd = haystack.findIndex(word => {
        word.includes('needle');
    });
    
    console.log(needleInd);
    return needleInd;
}

const arr = [12, 'aks', 13081.33, 'something', 12, 'needle', 1341, 'sdk'];

findNeedle(arr);
