if [ -f "./block06/ex01/src/__tests/react_b6ex1.test.js" ]
then
   echo "It exists"
   cd ./block06/ex01/src/__tests
   npm test react_b6ex1.test.js
else
   mkdir ./block06/ex01/src/__tests
   cp ./react_tests/react_b6ex1.test.js ./block06/ex01/src/__tests
   cd ./block06/ex01/src/__tests
   npm test react_b6ex1.test.js
fi
