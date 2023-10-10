if [ -f "./block02/ex04/src/__tests/react_b2ex4.test.js" ]
then
   echo "It exists"
   cd ./block02/ex04/src/__tests
   npm test react_b2ex4.test.js
else
   mkdir ./block02/ex04/src/__tests
   cp ./react_tests/react_b2ex4.test.js ./block02/ex04/src/__tests
   cd ./block02/ex04/src/__tests
   npm test react_b2ex4.test.js
fi
