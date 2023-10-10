if [ -f "./block04/ex02/src/__tests/react_b4ex2.test.js" ]
then
   echo "It exists"
   cd ./block04/ex02/src/__tests
   npm test react_b4ex2.test.js
else
   mkdir ./block04/ex02/src/__tests
   cp ./react_tests/react_b4ex2.test.js ./block04/ex02/src/__tests
   cd ./block04/ex02/src/__tests
   npm test react_b4ex2.test.js
fi
