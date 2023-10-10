if [ -f "./block04/ex01/src/__tests/react_b4ex1.test.js" ]
then
   echo "It exists"
   cd ./block04/ex01/src/__tests
   npm test react_b4ex1.test.js
else
   mkdir ./block04/ex01/src/__tests
   cp ./react_tests/react_b4ex1.test.js ./block04/ex01/src/__tests
   cd ./block04/ex01/src/__tests
   npm test react_b4ex1.test.js
fi
