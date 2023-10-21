


function Model({ children ,modelState }) {
    return (
      <>
        <div className="border rounded-xl bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 pr-3 py-3" style={{ position: 'fixed' , top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', zIndex: '4',  backdropFilter: 'blur(4px)' }} >
      <div className="flex justify-end"  onClick={() => modelState()}>
        <span class="material-symbols-outlined">
close
</span>

</div>

            {children}</div>
      </>
    );
  }
  
  export { Model };