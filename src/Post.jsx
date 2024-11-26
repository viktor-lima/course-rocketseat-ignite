import './global.css'

export function Post(props){
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.context}</p>
    </div>
  );
};