const StandardPage = (props) => {
    return (
      <div 
        id='homeContainer' 
        className='
          flex 
          justify-center 
          items-center  
          px-5
          py-16
          bg-gradient-radial
          from-yellow-50
          to-yellow-500'
      >
        {props.children}
      </div>
    )
  }
  
  export default StandardPage;
  