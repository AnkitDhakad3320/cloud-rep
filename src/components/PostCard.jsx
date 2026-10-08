export const PostCard = (props)=> {
    return (
        <div className="post-card">
            <h3>h{props.title}</h3>
            <p>p{props.body}</p>
        </div>
    )
}