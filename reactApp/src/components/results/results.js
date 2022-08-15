import React from "react";

function Results (props){
    return(
        <section>
          <pre >{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
          <div class="loader"></div>
        </section>
                );
}

export default Results;



// class Results extends React.Component{
//     render(){
//         return(
//             <section>
//                  <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//             </section>
//         );
//     }
// }

// export default Results;