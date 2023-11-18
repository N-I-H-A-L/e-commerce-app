import { css } from "styled-components";

//Instead of writing @media... again and again, you can use this function to make the code cleaner and also save time.
export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 380px){
            ${props}
        }
    `;
}