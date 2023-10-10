if [ -f "./block07/ex01/src/__tests/react_b7ex1.test.js" ]
then
   echo "It exists"
   cd ./block07/ex01/src/__tests
   npm test react_b7ex1.test.js
else
   mkdir ./block07/ex01/src/__tests
   cp ./react_tests/react_b7ex1.test.js ./block07/ex01/src/__tests
   cd ./block07/ex01/src/__tests
   npm test react_b7ex1.test.js
fi
