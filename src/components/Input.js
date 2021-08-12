import { connect } from 'react-redux';

const Input = (props) => {
  return (
    <section className='sec-padding'>
      <form
        className='flex center'
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target.input.value);
          props.dispatch({
            type: 'addTodo',
            payload: { title: event.target.input.value, isCompleted: false },
          });
        }}
      >
        <input
          type='text'
          name='input'
          id='input'
          placeholder='Enter task name'
        />
        <button className='btn-pri' type='submit'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default connect()(Input);
