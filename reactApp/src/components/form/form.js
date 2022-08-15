import React from "react";
import { useState  ,useEffect} from "react";
import "./form.scss";

function Form(props) {
  const [APIurl, setAPIurl] = useState('');
  const [APImethod, setAPImethod] = useState('');

  let API ={
url:APIurl,
method:APImethod,
  }

  const [show ,setShow ]=useState(false)
const [statusName ,setStatusName]=useState("Click Me !! Show methods")
  useEffect(()=>{
console.log(API.url);
  },[APIurl])
  // let StatusName ="Show methods"
 const changeShow =()=>{
if(show===true){
  setStatusName("Click Me !! Show methods")
  setShow(false)
}else{
  setStatusName("Click Me !! Hide methods")

  setShow(true)
}

 }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(API);
    props.handleApiCall(API);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>

          <span data-testid='span-url'>URL: </span>
          <input onChange={(e)=>{setAPIurl(e.target.value)}}name="url"type="text"/>
          {/* <input onChange={(e)=>{setAPImethod(e.target.value)}} name="method" type="text" /> */}

          {/* <button type="submit">GO!</button> */}
        <button data-testid='show' onClick={()=>{changeShow()} }id="show">{statusName} </button>
        {/* {show && (<button data-testid='hide' onClick={(e)=>{setShow(false)} }id="hide">hide methods</button>)} */}
        </label>

        {show && (<label className="methods">
        <span>  </span>

          <button data-testid='get' onClick={(e)=>{setAPImethod('GET')} }id="get">GET</button>
          <button data-testid='post' onClick={(e)=>{setAPImethod('POST')} } id="post">POST</button>
          <button data-testid='put' onClick={(e)=>{setAPImethod('PUT')} } id="put">PUT</button>
          <button data-testid='delete' onClick={(e)=>{setAPImethod('DELETE')} } id="delete">DELETE</button>
        </label>)}
        
      </form>
    </>
  );
}

export default Form;




//class 

// class Form extends React.Component{
//     handleSubmit = e => {
//         e.preventDefault();
//         const formData1 = {
//           method:'GET',
//           url: 'https://api.themoviedb.org/3/movie/550?api_key=6f7fea2a73b77fb5ffeb104ba61d85d9',
//         };
//         this.props.handleApiCall(formData1);

//         const formData2 = {
//           method:'POST',
//           url: 'https://api.themoviedb.org/3/movie/550?api_key=6f7fea2a73b77fb5ffeb104ba61d85d9',
//         };
//         this.props.handleApiCall(formData2);
//       }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//             <label >
//               <span>URL: </span>
//               <input name='url' type='text' />
//               <button type="submit">GO!</button>
//             </label>
//             <label className="methods">
//               <span id="get">GET</span>
//               <span id="post">POST</span>
//               <span id="put">PUT</span>
//               <span id="delete">DELETE</span>
//             </label>
//           </form>
        
//         );
//     }
// }

// export default Form;