if [ -f "./block02/ex05/src/__tests/react_b2ex5.test.js" ]
then
   echo "It exists"
   cd ./block02/ex05/src/__tests
   npm test react_b2ex5.test.js
else
   mkdir ./block02/ex05/src/__tests
   cp ./react_tests/react_b2ex5.test.js ./block02/ex05/src/__tests
   cd ./block02/ex05/src/__tests
   npm test react_b2ex5.test.js
fi
