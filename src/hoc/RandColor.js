import React from "react";

function RandColor(Wrapcomponent) {
   const colors = ["blue", "red", "yellow", "black", "orange", "green"];
   const randColor = colors[Math.floor(Math.random() * colors.length)];

   const className = `${randColor}-text`;

   return (props) => {
      return (
         <div className={className}>
            <Wrapcomponent {...props} />
         </div>
      );
   };
}
export default RandColor;
