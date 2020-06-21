import todosController from "./todos.controller";

const mockResults = 2;
const mockService = {
  findOne: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  findAll: jest.fn().mockImplementation(() => mockResults),
  create: jest.fn().mockImplementation(() => mockResults),
  update: jest.fn().mockImplementation(() => mockResults),
  delete: jest.fn().mockImplementation(() => mockResults),
};

const mockResponse = {
  status: jest.fn().mockReturnValue(200),
  json: jest.fn().mockReturnValue(mockResults),
};

const mockRequest = {
  params: { id: 1 },
  body: {},
};
const mockNext = {};

test("it should find one", () => {
  const {
    params: { id },
  } = mockRequest;
  todosController(mockService)
    .findOne(mockRequest, mockResponse, mockNext)
    .then((data) => {
      expect(mockService.findOne).toHaveBeenCalledWith(id);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResults);
      expect(data).toBe(2);
    });
});

test("it should find all", () => {
  return todosController(mockService)
    .findAll(mockRequest, mockResponse, mockNext)
    .then((data) => {
      expect(mockService.findAll).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockResults);
      expect(data).toBe(2);
    });
});

test("it should create one", () => {
  return todosController(mockService)
    .create(mockRequest, mockResponse, mockNext)
    .then((data) => {
      const { body } = mockRequest;
      expect(mockService.create).toHaveBeenCalledWith(body);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResults);
      expect(data).toBe(2);
    });
});

test("it should update one", () => {
  return todosController(mockService)
    .update(mockRequest, mockResponse, mockNext)
    .then((data) => {
      const {
        body,
        params: { id },
      } = mockRequest;
      expect(mockService.update).toHaveBeenCalledWith(body, id);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResults);
      expect(data).toBe(2);
    });
});

test("it should delete one", () => {
  return todosController(mockService)
    .delete(mockRequest, mockResponse, mockNext)
    .then((data) => {
      const {
        params: { id },
      } = mockRequest;
      expect(mockService.delete).toHaveBeenCalledWith(id);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResults);
      expect(data).toBe(2);
    });
});
