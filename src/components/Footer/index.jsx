import React from "react";
import ItemFooter from "./components/ItemFooter";
// import TagFooter from "./components/TagFooter";

export function Footer() {
  var itemGetInTouch = [
    {
      id: 1,
      item: "About Us",
    },
    {
      id: 2,
      item: "Careers",
    },
    {
      id: 3,
      item: "Press Releases",
    },
    {
      id: 4,
      item: "Blog",
    },
  ];
  var itemConnections = [
    {
      id: 1,
      item: "Facebook",
    },
    {
      id: 2,
      item: "Twitter",
    },
    {
      id: 3,
      item: "Instagram",
    },
    {
      id: 4,
      item: "Instagram",
    },
    {
      id: 5,
      item: "Instagram",
    },
  ];
  var itemEarnings = [
    {
      id: 1,
      item: "Become an Affiliate",
    },
    {
      id: 2,
      item: "Twitter",
    },
    {
      id: 3,
      item: "Advertise your product",
    },
    {
      id: 4,
      item: "Sell on Market",
    },
  ];
  var itemAccount = [
    {
      id: 1,
      item: "Your account",
    },
    {
      id: 2,
      item: "Returns Centre",
    },
    {
      id: 3,
      item: "Chat with us",
    },
    {
      id: 4,
      item: "Help",
    },
  ];

  // var itemtags = [
  //   {
  //     id: 1,
  //     nameTags: "Beans",
  //   },
  //   {
  //     id: 2,
  //     nameTags: "Carrots",
  //   },
  //   {
  //     id: 3,
  //     nameTags: "Apples",
  //   },
  //   {
  //     id: 4,
  //     nameTags: "Garlic",
  //   },
  //   {
  //     id: 5,
  //     nameTags: "Mushrooms",
  //   },
  //   {
  //     id: 6,
  //     nameTags: "Tomatoes",
  //   },
  //   {
  //     id: 7,
  //     nameTags: "Chilli peppers",
  //   },
  //   {
  //     id: 8,
  //     nameTags: "Broccoli",
  //   },
  //   {
  //     id: 9,
  //     nameTags: "Watermelons",
  //   },
  //   {
  //     id: 10,
  //     nameTags: "Oranges",
  //   },
  //   {
  //     id: 11,
  //     nameTags: "Bananas",
  //   },
  //   {
  //     id: 12,
  //     nameTags: "Grapes",
  //   },
  //   {
  //     id: 13,
  //     nameTags: "Cherrieses",
  //   },
  // ];
  // let elementsTag = itemtags.map((item, index) => {
  //   return <TagFooter nameTag={item.nameTags} />;
  // });

  return (
<<<<<<< HEAD
    <footer>
      <div className="container">
        <div className="footerTop">
          <ItemFooter titleFooter="Get in touch" nameItem={itemGetInTouch} />
          <ItemFooter titleFooter="Connections" nameItem={itemConnections} />
          <ItemFooter titleFooter="Earnings" nameItem={itemEarnings} />
          <ItemFooter titleFooter="Account" nameItem={itemAccount} />
        </div>
        <div className="footerBottom">
          <div className="titleFooter">Product tags</div>
          <ul>
            <li>
              <a href="#">Beans</a>
            </li>
            <li>
              <a href="#">Carrots</a>
            </li>
            <li>
              <a href="#">Apples</a>
            </li>
            <li>
              <a href="#">Garlic</a>
            </li>
            <li>
              <a href="#">Mushrooms</a>
            </li>
            <li>
              <a href="#">Tomatoes</a>
            </li>
            <li>
              <a href="#">Chilli peppers</a>
            </li>
            <li>
              <a href="#">Broccoli</a>
            </li>
            <li>
              <a href="#">Watermelons</a>
            </li>
            <li>
              <a href="#">Oranges</a>
            </li>
            <li>
              <a href="#">Bananas</a>
            </li>
            <li>
              <a href="#">Grapes</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Cherries</a>
            </li>
            <li>
              <a href="#">Meat</a>
            </li>
            <li>
              <a href="#">Seo tag</a>
            </li>
          </ul>

          {/* <TagFooter nameTag={itemtags} /> */}
          {/* <div className="tagTop">{elementsTag}</div> */}
        </div>
        <div className="coppy">© 2016 WOODER, Demo by CFD</div>
      </div>
    </footer>
=======
    <div>
      {/* <h1>footer ne</h1> */}
    </div>
>>>>>>> master
  );
}
