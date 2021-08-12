import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <section className='sec-padding'>
      <div className='root'>
        {props.data.map((todo, i) => {
          return <Todo todo={todo} key={todo.title} index={i} />;
        })}
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps)(TodoList);
