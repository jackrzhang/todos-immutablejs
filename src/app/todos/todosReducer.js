const initialTodos = [
  {
    id: 0,
    text: '',
    complete: false
  }
];

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    default:
      return 'temp';
  }
};

export default todosReducer;

// const friendsListReducer = (state = initalFriendsList, action) => {
//   switch (action.type) {
//     case types.ADD_FRIEND:
//       return [
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//         {
//           id: state.reduce((maxId, friend) => Math.max(friend.id, maxId), -1) + 1,
//           starred: false,
//           name: action.name
//         },
//         ...state
//       ];
//     case types.REMOVE_FRIEND:
//       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//       return state.filter(friend => friend.id !== action.id);
//     case types.STAR_FRIEND:
//       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//       return state.map(friend =>
//         friend.id === action.id ?
//           Object.assign({}, friend, { starred: !friend.starred }) :
//           friend
//       );
//     default:
//       return state;
//   }
// };

// export default friendsListReducer;