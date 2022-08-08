import React from "react";

import './form.scss';

function Form (props){
  const handleSubmit = e => {
            e.preventDefault();
            const formData1 = {
              method:'GET',
              url: 'https://api.themoviedb.org/3/movie/550?api_key=6f7fea2a73b77fb5ffeb104ba61d85d9',
            };
            props.handleApiCall(formData1);
    
            const formData2 = {
              method:'POST',
              url: 'https://api.themoviedb.org/3/movie/550?api_key=6f7fea2a73b77fb5ffeb104ba61d85d9',
            };
            props.handleApiCall(formData2);
          }

          return(
                        <form onSubmit={handleSubmit}>
                        <label >
                          <span>URL: </span>
                          <input name='url' type='text' />
                          <button type="submit">GO!</button>
                        </label>
                        <label className="methods">
                          <span id="get">GET</span>
                          <span id="post">POST</span>
                          <span id="put">PUT</span>
                          <span id="delete">DELETE</span>
                        </label>
                      </form>
                    
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