import { IService, IRepository } from "../types/interfaces";

const todosService = (todosRepository: IRepository): IService => {
  return {
    findAll: async () => {
      return await todosRepository.findAll();
    },
    findOne: async (id: number) => {
      return await todosRepository.findOne(id);
    },
    create: async (body: any): Promise<any> => {
      return await todosRepository.create(body);
    },
    update: async (body: any, id: number): Promise<any> => {
      return await todosRepository.update(body, id);
    },
    delete: async (id: number) => {
      return await todosRepository.delete(id);
    },
  };
};

export default todosService;
