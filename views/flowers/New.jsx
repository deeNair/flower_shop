const React = require('react');

function New(){
    return(
        <div>
            <h1>New flowers page</h1>
            <form action='/flowers' method='POST'>
                Name:<input type="text" name="name" />
                <br/>
                Color:<input type="text" name="color"/>
                <br/>
                Is ready to BLOOM:<input type='checkbox' name='readyToBloom'/>
                <br/>
                <input type="submit" value="create new flower"/>

            </form>
        </div>
    )
}

module.exports=New;