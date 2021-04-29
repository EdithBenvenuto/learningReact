import React, { Component } from 'react'

export default class Posts extends Component {
    
    state = {
        posts: []
    }

    // componentDidMount se ejecuta una vez que el componente ha sido cargado en pantalla

    //Como la peticion es algo que podría tardar se utiliza la caract. async - await, donde el await podría tomar algo de tiempo, una vez termine de dar los datos, se almacena esa respuesta
    async componentDidMount(){
        //API que permite hacer peticiones a otros servidores
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        //console.log(res)
        const data = await res.json();
        console.log(data)
        this.setState({posts: data})        
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key = {post.id}> 
                           <h1>{post.title}</h1>
                           <p>{post.body}</p> 
                        </div>
                    })
                }
            </div>
        )
    }
}




