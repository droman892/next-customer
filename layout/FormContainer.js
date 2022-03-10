const FormContainer = (props) => {
    return (
    <div className='
        max-h-full
        max-w-[100%]
        p-5
        bg-glassy 
        rounded-[16px]
        border-solid
        border-ice
        border-[1px]
        shadow-glass
        backdrop-blur-[5px]
        md:max-w-[50%]

      '>
        {props.children}
      </div>
    )
  }
  
export default FormContainer;
