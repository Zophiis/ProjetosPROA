import React from "react";

const MaiorIdade = ({ idade }) => {
    if (idade >= 18) {
        return (
            <h2> Tu é maior de idade. </h2 >
        );
    } else {
        return (
            <h2> Tu é menor de idade. </h2>
        )
    }
}

export default MaiorIdade