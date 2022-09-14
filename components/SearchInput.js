import React, { useRef, useState } from 'react'

const SearchInput = (props) => {
    const urlInputRef = useRef();
    let formRef = useRef();



    const submitHandler = (e) => {
        e.preventDefault();
        const enteredUrl = urlInputRef.current.value;
        props.setUrlInput(enteredUrl);
        console.log(enteredUrl)

        formRef.current.reset();

    }


    return (
        <div className='w-screen flex items-center justify-center p-2'>
            <form
                className="w-2/5 rounded-md shadow-lg"
                onSubmit={submitHandler}
                ref={formRef}
            >
                <div>
                    <label
                        htmlFor="title-input"
                        className="block text-gray-500 font-bold"
                    >
                        Enter the Url of an image
                    </label>
                    <input
                        type="text"
                        required
                        id="title-input"
                        className="bg-white appearance-none border-2 border-orange-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-400"
                        ref={urlInputRef}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchInput 