if [ -f "./block02/ex01/src/__tests/react_b2ex1.test.js" ]
then
   echo "It exists"
   cd ./block02/ex01/src/__tests
   npm test react_b2ex1.test.js
else
   mkdir ./block02/ex01/src/__tests
   cp ./react_tests/react_b2ex1.test.js ./block02/ex01/src/__tests
   cd ./block02/ex01
   npm test react_b2ex1.test.js
fi
