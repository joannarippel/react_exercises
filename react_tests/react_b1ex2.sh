if [ -f "./block01/ex02/src/__tests/react_b1ex2.test.js" ]
then
   echo "It exists"
   cd ./block01/ex02/src/__tests
   npm test react_b1ex2.test.js
else
   mkdir ./block01/ex02/src/__tests
   cp ./react_tests/react_b1ex2.test.js ./block01/ex02/src/__tests
   cd ./block01/ex02/src/__tests
   npm test react_b1ex2.test.js
fi
