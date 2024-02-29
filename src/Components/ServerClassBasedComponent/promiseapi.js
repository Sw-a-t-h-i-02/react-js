import React from 'react';

const MyComponent = () => {

    const asyncFunction = async () => {
        return "hello swathi";
    }

    const promiseData = async () => {
        try {
            let result = await asyncFunction();
         console.log(result)
                } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <button onClick={promiseData}>Click here </button>
            
          </>
    );
}

export default MyComponent;
