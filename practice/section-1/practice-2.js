'use strict';

function collectSameElements(collectionA, collectionB) {

  const collectionC = [];
  for(var i=0;i<9;i++){
      for(var j=0;j<4;j++){
        if(collectionA[i]==(collectionB[0][j])){
          collectionC.push(collectionA[i])
        }
      }
    }
  return collectionC;
}
