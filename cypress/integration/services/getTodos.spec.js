const mockItems = [
  {
    id: 1,
    name: "Insert a new row with placeholders",
    completed: 0,
  },
  {
    id: 2,
    name: "Insert multiple rows at a time",
    completed: 0,
  },
];

const add = (item) => cy.request("POST", "/v1/todos", item);
const deleteItem = (item) => cy.request("DELETE", `/v1/todos/${item.id}`);
const getItems = () => cy.request("/v1/todos").its("body");
const deleteAll = () => {
  getItems().then((items) => items.forEach((item) => deleteItem(item)));
};
const reset = () => deleteAll();

describe("Todos - API testing", () => {
  before(() => reset());

  describe("Todos - create", () => {
    it("should insert a new item", () => {
      cy.request("POST", "/v1/todos", mockItems[0])
        .should((response) => {
          expect(response.headers["content-type"]).to.include(
            "application/json; charset=utf-8"
          );
          expect(response.status).to.eq(200);
        })
        .then(({ body }) => {
          expect(body.message).to.eq("created");
        });
    });
  });

  describe("Todos - fetchAll", () => {
    it("should get all the items", () => {
      cy.request("/v1/todos")
        .should((response) => {
          expect(response.headers["content-type"]).to.include(
            "application/json; charset=utf-8"
          );
          expect(response.status).to.eq(200);
        })
        .then((response) => {
          expect(response.body).to.have.length(1);
        });
    });
  });

  describe("Todos - update", () => {
    it("should update one item", () => {
      cy.request("GET", "/v1/todos")
        .its("body")
        .then(([first]) => {
          first.name = "updatedItem";
          cy.request("PUT", `/v1/todos/${first.id}`, first)
            .should((response) => {
              expect(response.headers["content-type"]).to.include(
                "application/json; charset=utf-8"
              );
              expect(response.status).to.eq(200);
            })
            .then(({ body }) => {
              console.log(body);
              expect(body.message).to.eq("updated");
            });
        });
    });
  });

  describe("Todos - findOne", () => {
    it("should get one item", () => {
      cy.request("/v1/todos")
        .its("body")
        .then(([first]) => {
          cy.request("GET", `/v1/todos/${first.id}`)
            .should((response) => {
              expect(response.headers["content-type"]).to.include(
                "application/json; charset=utf-8"
              );
              expect(response.status).to.eq(200);
            })
            .then(({ body }) => {
              expect(body[0].name).to.eq("updatedItem");
            });
        });
    });
  });

  describe("Todos - delete", () => {});
});
