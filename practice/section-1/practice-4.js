'use strict';

function collectSameElements(collectionA, objectB) {
  const collectionC;
  for(var i=0;i<9;i++){
    for(var j=0;j<4;j++){
      if(collectionA.key[i].toEquals(collectionB.value[j])){
        collectionC.append(collectionA.key[i])
      }
    }
  }
  return collectionC;
}
