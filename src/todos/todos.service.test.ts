import todosService from "./todos.service";

const mockRepository = {
  findOne: jest.fn().mockImplementation(() => 2),
  findAll: jest.fn().mockImplementation(() => 2),
  create: jest.fn().mockImplementation(() => 2),
  update: jest.fn().mockImplementation(() => 2),
  delete: jest.fn().mockImplementation(() => 2),
};

const mockArgs = {
  body: {},
  id: 1,
};

afterEach(() => jest.clearAllMocks());

test("it should find one", () => {
  const { id } = mockArgs;
  return todosService(mockRepository)
    .findOne(id)
    .then((data) => {
      expect(mockRepository.findOne).toHaveBeenCalledWith(id);
      expect(data).toBe(2);
    });
});

test("it should find all", () => {
  return todosService(mockRepository)
    .findAll()
    .then((data) => {
      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(data).toBe(2);
    });
});

test("it should create one", () => {
  const { body } = mockArgs;
  return todosService(mockRepository)
    .create(body)
    .then((data) => {
      expect(mockRepository.create).toHaveBeenCalledWith(body);
      expect(data).toBe(2);
    });
});

test("it should update one", () => {
  const { body, id } = mockArgs;

  todosService(mockRepository)
    .update(body, id)
    .then((data) => {
      expect(mockRepository.update).toHaveBeenCalledWith(body, id);
      expect(data).toBe(2);
    });
});

test("it should delete one", () => {
  const { id } = mockArgs;

  todosService(mockRepository)
    .delete(id)
    .then((data) => {
      expect(mockRepository.delete).toHaveBeenCalledWith(id);
      expect(data).toBe(2);
    });
});
