import { IController, IService } from "../types/interfaces";

const todosController = (todosService: IService): IController => {
  return {
    findAll: async (req, res, next): Promise<any> => {
      const results = await todosService.findAll();
      return res.json(results);
    },
    findOne: async (req, res, next): Promise<any> => {
      const {
        params: { id },
      } = req;
      const results = await todosService.findOne(id);
      return res.json(results);
    },
    create: async (req, res, next): Promise<any> => {
      const { body } = req;
      const results = await todosService.create(body);
      return res.json(results);
    },
    update: async (req, res, next): Promise<any> => {
      const {
        body,
        params: { id },
      } = req;
      const results = await todosService.update(body, id);
      return res.json(results);
    },
    delete: async (req, res, next): Promise<any> => {
      const {
        params: { id },
      } = req;
      const results = await todosService.delete(id);
      return res.json(results);
    },
  };
};

export default todosController;

// export default class TodosController {
//   private readonly todosService: IService;
//   constructor(todosService: IService) {
//     this.todosService = todosService;
//   }
//   findAll() {
//     return this.todosService.findAll();
//   }
//   findOne() {
//     return this.todosService.findOne();
//   }
//   create() {
//     return this.todosService.create();
//   }
//   update() {
//     return this.todosService.update();
//   }
//   delete() {
//     return this.todosService.delete();
//   }
// }
