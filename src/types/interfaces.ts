export interface IController {
  findAll: (req: any, res: any, next: any) => Promise<any>;
  findOne: (req: any, res: any, next: any) => Promise<any>;
  create: (req: any, res: any, next: any) => Promise<any>;
  update: (req: any, res: any, next: any) => Promise<any>;
  delete: (req: any, res: any, next: any) => Promise<any>;
}

export interface IService {
  findAll: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  create: (body: any) => Promise<any>;
  update: (body: any, id: number) => Promise<any>;
  delete: (id: number) => Promise<any>;
}

export interface IRepository {
  findAll: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  create: (body: any) => Promise<any>;
  update: (body: any, id: number) => Promise<any>;
  delete: (id: number) => Promise<any>;
}
