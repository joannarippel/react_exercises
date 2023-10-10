> To push React exercises to GitHub: https://gist.github.com/gk3000/d5597ad403a998810de58d985d1c3488

> Names of create-react-app should be matching the name of the exercise inside a corresponding block folder, example: ex01

> App.js should not be renamed

## Exercise 1 / Display a list of product categories

- Create a brand new React application with 'Create React App' by running "create-react-app ex01" in the terminal from 03_react/block01 folder.

- This app needs to display a list of product categories from an array.

- The categories are 't-shirts', 'hats', 'shorts', 'jackets', 'pants', 'shoes'.

- In order to display them you will need to use Array.map

**_Your solution goes to the ex01 folder_**

## Exercise 2 / Display all products and best-sellers with a header and a footer

It's a simple eCommerce clone, use this page as an example: https://www.chalkd.co.nz/collections/all but don't repeat their layout mistakes such as overlapping elements, etc.

Here is a version of final clone: http://chalkd-react-clone.surge.sh

- You need to make a static page that display a list of products.

- Create a brand new React application with 'Create React App' by running "create-react-app ex02" in the terminal from 03_react/block01 folder.

- All of your code goes in App.js file.

- Include a `<header>` with no functionality that contains a "My Shop" text and any other content you'd like.

- Include a `<footer>` with no functionality that contains a "All rights reserved" text and any other content you'd like.

- Display the products divided in two categories: all products, best sellers.

- Each category should have an `<h1>` with the title of the section ("All products" and "Best Sellers")

- Every product should display: product_name, price, image, 'on sale' label (if any).

- When you map, provide a key for each element. Example:
   <!-- {
     products.map((product, i) => {
       <div key={i}>
          <p>{product.name}</p>
       </div>
     })
   } -->

- For the products structure you can use the following one and declare it right inside your App.js or declare it in a separate .js file and import in App.js:

  ```jsx
  const products = [
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
    },
  ];

  // export + import in file
  ```

  Or if by chance you can already manage state then you can fetch it from https://barcelonacodeschool.com/files/reactB1products.json with

```
fetch('https://barcelonacodeschool.com/files/reactB1products.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
.catch((error) => {
  console.error('Error:', error);
})
```

