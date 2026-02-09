import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs";
import { CATEGORIES } from "./data";

let categClone = [...CATEGORIES];
const CATEGORY_TEST_SET_LENGHT = 15;

let mirageServer = createServer({
  models: {
    category: Model.extend({
      post: hasMany(),
    }),
    post: Model.extend({
      category: belongsTo(),
    }),
    user: Model.extend({
      post: hasMany(),
    }),
  },

  factories: {
    category: Factory.extend({
      title(i) {
        return categClone[i];
      },

      afterCreate(category, server) {
        console.log(categClone);
        server.createList("post", 5, {category})
      },
    }),

    post: Factory.extend({
      title(i) {
        return "Vand TESTE " + i;
      },
    }),
  },

  routes() {
    this.get("/categories", (schema, request) => {
      // console.log(schema)
      console.log(schema.posts.all())
      return schema.categories.all();
    });
  },

  seeds(server) {
    server.createList("category", CATEGORY_TEST_SET_LENGHT);
  },
});

// setTimeout(() => {
//   console.log("setTimeout");
//   console.log(CATEGORIES);
//   fetch("/categories")
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// });
