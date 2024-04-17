


function Model({ children ,modelState }) {
    return (
      <>
        <div className="border rounded-xl bg-gradient-to-r  pr-3 py-3" style={{ position: 'fixed' , top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', zIndex: '4',  backdropFilter: 'blur(4px)' , backgroundColor : '#141519'}} >
      <div className="flex justify-end text-white cursor-default"  onClick={() => modelState()}>
        <span class="material-symbols-outlined cursor-default">
close
</span>

</div>

            {children}</div>
      </>
    );
  }
  
  export { Model };