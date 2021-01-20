import request from './request';

export const searchTodoList = () => {
  return request({ url: '/todolist/search' });
};

export const addTodo = (params) => {
  return request({ url: '/todolist/add', data: params });
};

export const updateTodo = (params) => {
  return request({ url: '/todolist/update', data: params });
};
