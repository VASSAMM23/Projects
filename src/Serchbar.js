

function Searchbar({value,onChange}){

return(

<div className="search">
   <input type="text"
   value={value} onChange={onChange} placeholder="Enter a Task">
   </input>
</div>



);


}

export default Searchbar;