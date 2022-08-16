const initialState ={
    url: [],
    data : [],
    count : 0
}

export default function reducer (state=initialState,action){
  const {type , payload} = action;

  switch (type){
    case "ADD_DATA":
        const count1= state.count +1 ;
        const data1 = [...state.data,payload];
        const url1 = [...state.url,payload.url];

        return {
            url: url1,
            data: data1,
            count: count1
        };

    case "REMOVE_url":
        const count2 = state.count -1;
        const data2 = state.data.filter((data,idx) => idx !== payload);
        const url2 = state.url.filter((url,idx)=> idx !== payload);  
        
        return{
            url : url2,
            data: data2,
            count: count2
        }

    case "EMPTY_DATA":
        return initialState;

    default:
        return state;
  }

}

export const addData =(response)=>{
    return{
        type: "ADD_DATA",
        payload: response
    }
}

export  const removeUrl = (idx)=>{
    return {
        type: "REMOVE_URL",
        payload: idx,
    }
}

export const emptyAction =()=>{
    return {
        type: "EMPTY_DATA",
    }
}