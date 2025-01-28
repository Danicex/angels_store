//the 
const STORAGE_KEY = 'crud_data'

const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const saveData = ()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
};
export const getData = () => data;

export const getById = (id) => {
data.map((item)=>(item.id === id))
return data
}

export const postData = (newItem)=>{
data.push(newItem)
saveData()
};
export const updateData = (id, updatedItem)=>{
data =  data.map((item)=> (item.id === id ? {...item, ...updatedItem } : item));
}
export const deleteData = (id)=>{
data =  data.filter((item)=>(item.id !== id));
};