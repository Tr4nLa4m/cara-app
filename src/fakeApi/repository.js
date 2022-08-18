import "./server";

export default class Repository {
  constructor(route) {
    this.route = route;
  }

  getAll(dataName, route = this.route) {
    let data = [];
    fetch(route)
      .then((res) => res.json())
      .then((json) => {
        data = json[dataName];
        return json[dataName];
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
      return data;
  }

  insert(dataName, route = this.route) {
    fetch(route, {
      method: "POST",
      body: JSON.stringify({
        id: 10000001,
        image: "/images/products/n4.jpg",
        title: "Men's Fashion T Shirt N4",
        price: 139,
        branch: "adidas",
        description:
          "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
      }),
    }).then((res) => {
      console.log(this.getAll(dataName));
    });
  }
}
