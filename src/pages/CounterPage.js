import  {produce} from "immer";
import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
              case DECREMENT_COUNT:
                state.count = state.count - 1;
                    return;
            case SET_VALUE_TO_ADD:
                state.valueToAdd = action.payload;
                return;
                  case ADD_VALUE_TO_COUNT:
                    state.count = state.count + state.valueToAdd;
                    state.valueToAdd = 0
                    return;
    
        default: return state;
    }
};

// const reducer = (state, action) => {

//     switch (action.type) {
//         case INCREMENT_COUNT:
//             return {
//                 ...state,
//                 count: state.count + 1,
//               };
//               case DECREMENT_COUNT:
//                     return{
//                         ...state,
//                         count: state.count - 1,
//                     };
//             case SET_VALUE_TO_ADD:
//                 return {
//                     ...state,
//                     valueToAdd: action.payload,
//                   };
//                   case ADD_VALUE_TO_COUNT:
//                     return{
//                         ...state,
//                         count: state.count + state.valueToAdd,
//                         valueToAdd: 0
//                     }
    
//         default: return state;
//             break;
//     }
// };

function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
    // setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });

    // setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
        type: ADD_VALUE_TO_COUNT,
    })
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is: {state.count} </h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
