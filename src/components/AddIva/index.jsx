import styles from "./AddIva.module.scss"

const AddIva = (props) => {
   const Totprice =  props.price * props.vat / 100 + props.price

   
    return ( 

        <p>{Totprice}</p>
      
    );
  };
  
  export default AddIva;