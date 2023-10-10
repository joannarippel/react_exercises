if [ -f "./block05/ex01/src/__tests/react_b5ex1.test.js" ]
then
   echo "It exists"
   cd ./block05/ex01/src/__tests
   npm test react_b5ex1.test.js
else
   mkdir ./block05/ex01/src/__tests
   cp ./react_tests/react_b5ex1.test.js ./block05/ex01/src/__tests
   cd ./block05/ex01/src/__tests
   npm test react_b5ex1.test.js
fi
