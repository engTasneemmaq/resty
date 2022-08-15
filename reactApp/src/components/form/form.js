import React, {useState} from "react";

import './form.scss';

function Form (props){
  const [ apiUrl, setApiUrl] = useState('');
  const [ apiMethod, setApiMethod] = useState('GET');
  const [body, setBody]= useState('');

  const handleSubmit = e => {
    const header = {
      'Content-Type': 'application/json',
    };
            e.preventDefault();
           const formData = {
            method: apiMethod,
            url: apiUrl,
            Headers: "Headers" + JSON.stringify(header, null, 2),
           };
           const bodyData={
            body: body,
           };
           props.handleApiCall(formData,bodyData);
          }

          const handleClick = e =>{
            e.preventDefault();
            setApiMethod(e.target.value);
          }

          const handleUrl = e =>{
            e.preventDefault();
            setApiUrl(e.target.value);
          }

          const handleBody = e =>{
           e.preventDefault();
           const formattedBody = JSON.stringify(JSON.parse(e.target.value), null, 4);
           setBody(formattedBody);
          }


          return(
            <>
            <form onSubmit={handleSubmit}>
              <label className='label-input'>
                <span>URL: </span>
                <input name='url' type='text' className='input' placeholder='Inter a URL' data-testid='input' onChange={handleUrl} />
                <button type="submit" className='btn' data-testid='submit'>GO!</button>
              </label>
              <label className="methods">
                <div className='btns'>
                  <button id="get" data-testid='get' onClick={handleClick} value='GET'>GET</button>
                  <button id="post" data-testid='post' onClick={handleClick} value='POST'>POST</button>
                  <button id="put" data-testid='put' onClick={handleClick} value='PUT'>PUT</button>
                  <button id="delete" onClick={handleClick} value='DELETE'>DELETE</button>
                </div>
              </label>
              {apiMethod === 'POST' || apiMethod === 'PUT' ? <textarea className='text' onChange={handleBody} /> : null}
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