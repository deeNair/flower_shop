const React= require('react');

function Index(props){

    const {flowers} = props;
    console.log(flowers);
return(

<div>
<nav>
            <a href="/flowers/new">create new flower</a>
        </nav>
        <h1>index</h1>
<ul>

    {
         flowers.map((flower,i)=>{
            return(
    <li key={flower._id}>
        The <a  href={`flowers/${flower._id}`}>
            {flower.name}</a> 
            is {flower.color} {" "} 
            {
                flower.readyToBloom ? 'its ready to bloom ':'not ready to bloom'
            }
    </li>

            )
         })




    }
</ul>


</div>

)}

module.exports= Index;