import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/museum"
const BASE_URL = "http://localhost:8080/"
const serverURL='http://localhost:3009/api/tempory-get'

//export const listEmployees = () => axios.get(REST_API_BASE_URL);
//export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);
//export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);
//export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId,employee );
//export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);
//export const createImage = (image) => axios.post(REST_API_BASE_URL + '/add-new-image', image);

//interface Exponat

// export const listOfNews = () => axios.get(REST_API_BASE_URL + '/news');
export const listOfNews = () => axios.get(serverURL);

export const addImages = (files: File[]) => axios.post(REST_API_BASE_URL + "/add-new-images", files, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export const addExponat = (formData:any) => axios.post(serverURL + '/create-exponate', formData);
export const addCollection = (formData:any) => axios.post(REST_API_BASE_URL + '/create-collection', formData);
export const addNews = (news:any) => axios.post(REST_API_BASE_URL + '/news', news);

export const addAchivement = (achivement:any) => axios.post(BASE_URL + '/achivement', achivement);
export const listOfAchivement = () => axios.get(BASE_URL + '/achivement/all');
export const updateAchivement = (id: number) => axios.put(BASE_URL + '/achivement/' + id);
export const deleteAchivement = (id: number) => axios.delete(BASE_URL + '/achivement/' + id);

export const listOfCollection = () => axios.get(REST_API_BASE_URL + '/collections');
export const updateCollection = (id: number) => axios.put(REST_API_BASE_URL + '/collections/' + id);
export const deleteCollection = (id: number) => axios.delete(REST_API_BASE_URL + '/collections/' + id);

export const addExhibitiont = (exhibition:any) => axios.post(BASE_URL + '/exhibition', exhibition);
export const listOfExhibition = () => axios.get(BASE_URL + '/exhibition/all');
export const updateExhibition = (id: number) => axios.put(BASE_URL + '/exhibition/' + id);
export const deleteExhibition = (id: number) => axios.delete(BASE_URL + '/exhibition/' + id);

export const addImage = (file: File) => axios.post(REST_API_BASE_URL + "/add-new-image", file, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export const listOfImages = () => axios.get(REST_API_BASE_URL + '/get-all-images');
export const listOfImagesOfExponat = (id: number) => axios.get(REST_API_BASE_URL + '/exponat-images/' + id);
export const changeImagesByExponatId = (id: number) => axios.put(REST_API_BASE_URL + '/exponat-images/' + id);
export const listOfExponates = () => axios.get(REST_API_BASE_URL + '/all-exponats');
export const changeExponat = (id: number) => axios.put(REST_API_BASE_URL + '/update-exponat/' + id);
export const deleteExponat = (id: number) => axios.delete(REST_API_BASE_URL + '/exponat/' + id);

export const getSimpleNews = (id: number) => axios.get(REST_API_BASE_URL + '/one-news/' + id);
export const changeNews = (id: number) => axios.put(REST_API_BASE_URL + '/one-news/' + id);