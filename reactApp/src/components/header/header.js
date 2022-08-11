import React from "react";

function Header (){
    return(
        <header>
        <h1 data-testid="Test">RESTy</h1>
         <ui>Home</ui>
         <ui>History</ui>
         <ui>Help</ui>
         </header>
     );
}

export default Header;


// class Header extends React.Component{
// render(){
//     return(
//         <header>
//             <h1>RESTy</h1>
//             <ui>Home</ui>
//             <ui>History</ui>
//             <ui>Help</ui>
//         </header>
//     );
// }
// }

// export default Header;
