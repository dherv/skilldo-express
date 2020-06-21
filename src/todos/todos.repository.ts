import { IRepository } from "../types/interfaces";
import { Pool } from "mysql";

const todosRepository = (pool: Pool): IRepository => {
  return {
    findAll: (): Promise<any> => {
      return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
          // execute query
          let stmt = `SELECT * from todos`;
          connection.query(stmt, (error, results, fields) => {
            if (error) {
              console.error(error.message);
              reject(error);
            }
            resolve(results);
          });
          connection.release();
        });
      });
    },
    findOne: (id: number): Promise<any> => {
      return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          let stmt = `SELECT * FROM todos 
                      WHERE id = ?`;
          connection.query(stmt, id, (error, results, fields) => {
            if (error) {
              console.error(error.message);
              reject(error);
            }
            resolve(results);
          });
          connection.release();
        });
      });
    },
    create: async (body: any): Promise<any> => {
      return new Promise((resolve, reject) => {
        const { name, completed } = body;
        pool.getConnection((err, connection) => {
          let stmt = `INSERT INTO todos(name, completed) VALUES(?,?)`;
          let todo = [name, completed];
          connection.query(stmt, todo, (error, results, fields) => {
            if (error) {
              console.error(error.message);
              reject(error);
            }
            resolve(results);
          });
          connection.release();
        });
      });
    },
    update: (body: any, id: number): Promise<any> => {
      return new Promise((resolve, reject) => {
        const { name, completed } = body;
        pool.getConnection((err, connection) => {
          let stmt = `UPDATE todos 
                      SET name = ?, completed = ?
                      WHERE id = ?`;
          let data = [name, completed, id];
          connection.query(stmt, data, (error, results, fields) => {
            if (error) {
              console.error(error.message);
              reject(error);
            }
            resolve(results);
          });
          connection.release();
        });
      });
    },
    delete: (id: number): Promise<any> => {
      return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          let stmt = `DELETE FROM todos WHERE id = ?`;
          connection.query(stmt, id, (error, results, fields) => {
            if (error) {
              console.error(error.message);
              reject(error);
            }
            resolve(results);
          });
          connection.release();
        });
      });
    },
  };
};

export default todosRepository;
