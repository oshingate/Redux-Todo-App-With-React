import { connect } from 'react-redux';

const todo = (props) => {
  return (
    <div className='todo flex jsb'>
      <input
        type='checkbox'
        checked={props.todo.isCompleted}
        onChange={(event) => {
          props.dispatch({
            type: 'handleChecked',
            payload: { value: props.todo.isCompleted, index: props.index },
          });
        }}
      ></input>
      <span>{props.todo.title}</span>
      <button
        className='btn-pri'
        onClick={(event) => {
          props.dispatch({ type: 'deleteTodo', payload: props.index });
        }}
      >
        X
      </button>
    </div>
  );
};

export default connect()(todo);
