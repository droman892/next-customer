import { useState } from 'React';
import Radio from '@mui/material/Radio';
import useRadioLogic from '../../functions/useRadioLogic';

const createData = (name, option1, option2, option3) => {
    return { name, option1, option2, option3 };
}

const RadioRows = () => {

const { handleChange } = useRadioLogic();

// const [selectedValue, setSelectedValue] = useState("Satisfied");

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

const radioRows = [
    createData(
      "How satisfied are you with your products' delivery time?", 
      <Radio
        checked={selectedValue === "Not Satisfied"}
        onChange={handleChange}
        value="Not Satisfied"
        name="radioQuestion1"
      />,
      <Radio
        checked={selectedValue === "Satisfied"}
        onChange={handleChange}
        value="Satisfied"
        name="radioQuestion1"
      />,
      <Radio
        checked={selectedValue === "Very Satisfied"}
        onChange={handleChange}
        value="Very Satisfied"
        name="radioQuestion1"
      />
    ),
    createData(
      "How pleased are you with your product's quality?", 
      <Radio
        checked={selectedValue === "Not Satisfied"}
        onChange={handleChange}
        value="Not Satisfied"
        name="radioQuestion2"
      />,
      <Radio
        checked={selectedValue === "Satisfied"}
        onChange={handleChange}
        value="Satisfied"
        name="radioQuestion2"
      />,
      <Radio
        checked={selectedValue === "Very Satisfied"}
        onChange={handleChange}
        value="Very Satisfied"
        name="radioQuestion2"
      />
    ),
    createData(
      "How confident do you feel you'll shop with us again?",
      <Radio
        checked={selectedValue === "Not Satisfied"}
        onChange={handleChange}
        value="Not Satisfied"
        name="radioQuestion3"
      />,
      <Radio
        checked={selectedValue === "Satisfied"}
        onChange={handleChange}
        value="Satisfied"
        name="radioQuestion3"
      />,
      <Radio
        checked={selectedValue === "Very Satisfied"}
        onChange={handleChange}
        value="Very Satisfied"
        name="radioQuestion3"
      /> 
    ),
  ];

  return radioRows;

}

  export default RadioRows;