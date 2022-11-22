function ComponentFormHeader({ formTitle, setIsVisible }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    setIsVisible((prevState) => (prevState ? false : true));
  };
  return (
    <div className="component-form-header">
      <label>{formTitle}</label>
      <button onClick={handleOnClick}>X</button>
    </div>
  );
}

export default ComponentFormHeader;
