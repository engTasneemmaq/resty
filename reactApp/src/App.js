import React,{useState} from 'react';

import './app.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';





function App () {

  const [user,setUser] = useState ({
       data: null,
       requestParams: {},
     });
 
     // let state = {
     //   data: null,
     //   requestParams: {},
     // }
   
//      const api_url = 
//      "https://employeedetails.free.beeceptor.com/my/api/path";
 
// // Defining async function
// async function getapi(url) {
   
//    // Storing response
//    const response = await fetch(url);
   
//    // Storing data in form of JSON
//    var data = await response.json();
//    console.log(data);
// }

  async function callApi (requestParams) {
    if (requestParams.method === 'GET') {
      const response = await fetch(requestParams.url);
      console.log("-------------------------------+ /n",response);
      var data = await response.json();
    
      console.log(data);
      // const data = {
      //   header : [
      //     {"content-Type": 'String  application/json'},
    
         
      //   ],
      

      //   response: { 
      //    count: 5,
      //     results:[

      //       {name: 'Spider-Man (2002)', url: 'https://www.themoviedb.org/movie/557-spider-man'},
      //       {name: 'The Batman', url: 'https://www.themoviedb.org/tv/2022-the-batman'},
      //       {name: 'Mission: Impossible - Dead Reckoning Part One (2023)', url: 'https://www.themoviedb.org/movie/575264-mission-impossible-dead-reckoning-part-one'},
      //       {name: 'Minions: The Rise of Gru', url: 'https://www.themoviedb.org/movie/438148-minions-the-rise-of-gru'},
      //       {name: 'The Gray Man', url: 'https://www.themoviedb.org/movie/725201-the-gray-man'},
      //     ]
      //   },
      // };
      if (requestParams) {
        setUser({user,data:data,requestParams:requestParams});
    }
    }else {
      const data = {
          message: `you cannot Apply >> ${requestParams.method} << method yet  `
         }
         
    if (requestParams) {
        setUser({user,data:data,requestParams:requestParams});
    }
      };
    
    
     
   
 }
 
   
     return (
       <React.Fragment>
       <Header/>
       <div data-testid='request'>Request Method:{user.requestParams.method}</div>
       <div data-testid='url'>URL: {user.requestParams.url}</div>
       <Form  handleApiCall={callApi}/>
       <Results data={user.data}/>
       
       <Footer/>
   </React.Fragment>
     );
     }
   
 
 export default App;





// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 5,
//       results: [
//         {name: 'Spider-Man (2002)', url: 'https://www.themoviedb.org/movie/557-spider-man'},
//         {name: 'The Batman', url: 'https://www.themoviedb.org/tv/2022-the-batman'},
//         {name: 'Mission: Impossible - Dead Reckoning Part One (2023)', url: 'https://www.themoviedb.org/movie/575264-mission-impossible-dead-reckoning-part-one'},
//         {name: 'Minions: The Rise of Gru', url: 'https://www.themoviedb.org/movie/438148-minions-the-rise-of-gru'},
//         {name: 'The Gray Man', url: 'https://www.themoviedb.org/movie/725201-the-gray-man'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }


//   // postApi = (requestParams) => {

//   //   const data ={
//   //     count: 1,
//   //     results: [
//   //       {name: 'SPY x FAMILY', url: 'https://www.themoviedb.org/tv/120089-spyxfamily'},
//   //     ],
//   //   };
//   //   this.setState({data, requestParams});
//   // }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;