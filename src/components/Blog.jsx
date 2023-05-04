import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Blog = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <div className='bg-base-200'>
          
          <h1 className='text-center pt-5'>
         <button onClick={handlePrint} className="btn btn-outline">  PRINT AS PDF </button> 
         </h1>

        <div ref={componentRef} >

        <div className='container  mx-auto'>
        <h1 className='text-4xl font-bold text-center pt-16 '>
        Frequently Asked any Question?</h1>
       

        <div className='pb-10 px-5'>
          
         <h1 className='text-2xl pt-10 font-bold'>1. What is  the differences between uncontrolled and controlled components?</h1>
         <p className='mt-5 text-xl'><span className='font-semibold text-xl'>Answer : </span>
 Controlled components are those where the component manages its own state, while uncontrolled components rely on the DOM to manage their state. Controlled components use event handlers to update their state, while uncontrolled components typically use refs to access the values of form elements. </p>

         <h1 className='text-2xl pt-10 font-bold'>2. How to validate React props using PropTypes? </h1>
         <p className='mt-5 text-xl'><span className='font-semibold text-xl'>Answer :</span> To validate React props using PropTypes, first install the "prop-types" package, then import it into your component. Finally, add PropTypes validation to your component by specifying the prop name, data type, and whether it is required.</p>

         <h1 className='text-2xl pt-10 font-bold'>3. What is the difference between nodejs and express js?</h1>
         <p className='mt-5 text-xl'><span className='font-semibold text-xl'>Answer :</span> Node.js is a runtime environment for executing JavaScript code on the server. Express.js is a web application framework built on top of Node.js. Node.js provides the core functionality for running JavaScript on a server, while Express.js provides a layer of abstraction to simplify the process of building web applications. </p>

         <h1 className='text-2xl pt-10 font-bold'>4. What is a custom hook, and why will you create a custom hook?</h1>
         <p className='mt-5 text-xl'><span className='font-semibold text-xl'>Answer : </span> 
 A custom hook is a JavaScript function that allows you to reuse logic across multiple React components. You can create a custom hook to abstract away complex logic or API calls, making your code more readable and maintainable. Custom hooks can be created to handle any functionality that can be abstracted and reused across components.</p>

        </div>
       </div>
       </div>

       </div>
    );
};

export default Blog;