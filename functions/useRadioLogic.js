import { useState } from 'React';

const useRadioLogic = () => {
    const [selectedValue, setSelectedValue] = useState("Satisfied");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return { handleChange };
}

export default useRadioLogic;
