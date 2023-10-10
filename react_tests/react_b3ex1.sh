if [ -f "./block03/ex01/src/__tests/react_b3ex1.test.js" ]
then
   echo "It exists"
   cd ./block03/ex01/src/__tests
   npm test react_b3ex1.test.js
else
   mkdir ./block03/ex01/src/__tests
   cp ./react_tests/react_b3ex1.test.js ./block03/ex01/src/__tests
   cd ./block03/ex01/src/__tests
   npm test react_b3ex1.test.js
fi
