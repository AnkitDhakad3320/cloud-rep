const UserCard = (props) => {
    console.log(props.data.name);
    return (
        <div className="user-card">
            <h3>{props.data.name.title + " " +props.data.name.first +" " + props.data.name.last} </h3>
            <p>{props.data.email}</p>
            <p>{props.data.phone} </p>
            <p>{props.data.gender} </p>
        </div>
    )
};
export default UserCard;