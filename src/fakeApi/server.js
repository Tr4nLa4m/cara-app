import { createServer, Model } from "miragejs";
import { productsData } from "../fakeData";

export const setupServer = () => {
  createServer({
    models: {
      products: Model,
      cart: Model,
    },
    seeds(server) {
      // server.create('product', productsData[0])
      // server.create('product', productsData[1])
      // server.create('product', productsData[2])
      // server.create('product', productsData[3])
      // server.create('product', productsData[4])
      // server.create('product', productsData[5])
      // server.create('product', productsData[6])
      // server.create('product', productsData[7])
      // server.create('product', productsData[8])
      // server.create('product', productsData[9])
      // server.create('product', productsData[10])
      // server.create('product', productsData[11])
      // server.create('product', productsData[12])
      // server.create('product', productsData[13])
      // server.create('product', productsData[14])
      // server.create('product', productsData[15])
    },
    routes() {
      this.namespace = "api/v1";

      this.get("/products", (schema) => {
        return {products : productsData}
      });

      this.post("/products", (schema, request) => {
        let payload = JSON.parse(request.requestBody);

        return schema.products.create(payload);
      });

      this.get("/cart", (schema) => {
        return schema.cart.all();
      });

      this.post("/cart", (schema, request) => {
        let payload = JSON.parse(request.requestBody);

        return schema.cart.create(payload);
      });
    },
    
  });
};
