import { isAxiosError } from "axios";
import api from "./config";

export const GetCards = async () => {
  try {
    const apiResponse = await api.get("/tasks");
    if(apiResponse) {
      return apiResponse.data;
    }
  } catch (error) {
    if(isAxiosError(error)) {
      console.log(error);
    }
    console.log(error);
  }
};

export const PostCard = async (title: string, description: string, category: string, priority: string, column: string = "TODO") => {
  try {
    await api.post(
      "/tasks",
      { 
        title, 
        description,
        category,
        priority,
        column
      }
    );
  } catch (error) {
    if(isAxiosError(error)) {
      console.log(error);
    }
    console.log(error);
  }
};

export const DeleteCard = async (id: number) => {
  try {
    await api.delete(`/tasks/${id}`);
  } catch (error) {
    if(isAxiosError(error)) {
      console.log(error);
    }
    console.log(error);
  }
};

export const PutCard = async (id: number, title: string, description: string, category: string, priority: string, column: string = "TODO") => {
  try {
    await api.put(
      `/tasks/${id}`,
      { 
        title, 
        description,
        category,
        priority,
        column
      }
    );
  } catch (error) {
    if(isAxiosError(error)) {
      console.log(error);
    }
    console.log(error);
  }
};

export const ChangeColumn = async (id: number, title: string, description: string, category: string, priority: string, column: string = "TODO") => {
  try {
    await api.put(
      `/tasks/${id}`,
      { 
        title, 
        description,
        category,
        priority,
        column
      }
    );
  } catch (error) {
    if(isAxiosError(error)) {
      console.log(error);
    }
    console.log(error);
  }
};
