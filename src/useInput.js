import {useState} from 'react';

const useInput = (initialValue) => {
    const [value, setInput] = useState(initialValue);

    const onChange = (e) => {
        const {
        target: {value}
        } = e;
        setInput(value);
    }

    return {value, onChange};
};

export default useInput;
