const DrinksLayout = ({ children }) => {
  return (
    <div className='max-w-xl m-auto'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>npx create-next-app@latest nextJs-tutorial</pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
