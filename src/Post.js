import React from "react"

function Post({arr}) {
return (
    <div>
        {arr.map(item => {
            return (
                <div key={item.id}>
                    <h3><b>id:</b> <i>{item.id}</i></h3>
                    <h1><b>title:</b> <i>{item.title}</i></h1>
                    <h2><b>description:</b> <i>{item.description}</i></h2>
                </div>
            )
        })}
    </div>
)
}

export default Post