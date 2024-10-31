// import Square from "./Square";
// import { useState } from 'react';

// export default function Game() {
//   // const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0; 
//   // const currentSquares = history[history.length - 1];
//   const currentSquares = history[currentMove];


//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);    
//     setCurrentMove(nextHistory.length - 1);
//     // setXIsNext(!xIsNext);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//     // setXIsNext(nextMove % 2 === 0);
//     // TODO
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}  />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function Board({xIsNext, squares, onPlay}) {
//   // const [xIsNext, setXIsNext] = useState(true);
//   // const [squares, setSquares] = useState(Array(9).fill(null));

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }


//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//     // setSquares(nextSquares);
//     // setXIsNext(!xIsNext);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// import AppTSX from "./App.tsx";
// const App = AppTSX;
// export default App;

// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     );
//   }
  
//   export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }

// export default function Profile() {
//     return  ( 
//         <img 
//             src="https://i.imgur.com/jA8hHMpm.jpg" 
//             alt="Katsuko Saruhashi" 
//             />
//         );
//   }

// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/QIrZWGIs.jpg"
//         alt="Alan L. Hart"
//       />
//     );
//   }
  
//   export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }
  
// import {Gallery} from './Gallery.js';

// export default function App() {
//   return (
//     <Gallery />
//   );
// }


// export default function Bio() {
//     return (
//         <>
//             <div className="intro">
//             <h1>Welcome to my website!</h1>
//             </div>
//             <p className="summary">
//                 You can find my thoughts here.
//                 <br/>
//                 <br/>
//                 <b>And <i>pictures</i></b> of scientists!
//             </p>
//         </>

//     );
//   }

// export default function TodoList() {
//     const name = 'Gregorio Y. Zara';
//     return (
//       <h1>{name}'s To Do List</h1>
//     );
// }

// export default function TodoList() {
//     return (
//       <ul style={{
//         backgroundColor: 'black',
//         color: 'pink'
//       }}>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     );
//   }

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }


// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// const person = {
//     name: 'Gregorio Y. Zara',
//     imageId: '7vQD0fP',
//     imageSize: 's',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src={baseUrl}{person.imageId}{person.imageSize}".jpg"
//           alt={person.name}
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//     const srcStr = baseUrl + person.imageId + person.imageSize + ".jpg";
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={srcStr}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


// import Avatar from './Avatar.js';

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{ 
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// import React from 'react';
// import { getImageUrl } from './utils.js';

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }


// import Avatar from './Avatar.js';

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{ 
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// import { getImageUrl } from './utils.js';

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// import { getImageUrl } from './utils.js';

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
      {/* <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section> */}

        {/* <Profile
            header = {"Maria Skłodowska-Curie"}
            url = {"szV5sdG"}
            name = {"Maria Skłodowska-Curie"}
            profession = {"physicist and chemist"}
            awardsNum = {4}
            award = {"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"}
            discovered = {"polonium (chemical element)"}
        /> */}

        {/* <Profile
            header = {"Katsuko Saruhashi"}
            url = {'YfeOqp2'}
            name = {"Katsuko Saruhashi"}
            profession = {"geochemist"}
            awardsNum = {2}
            award = {"Miyake Prize for geochemistry, Tanaka Prize"}
            discovered = {"a method for measuring carbon dioxide in seawater)"}
        /> */}

      {/* <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */}
//     </div>
//   );
// }


// function Profile({header, url, name, profession, awardsNum, award, discovered}) {
//     return (
//         <section className="profile">
//         <h2>{header}</h2>
//         <img
//           className="avatar"
//           src={getImageUrl(url)}
//           alt={name}
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             {profession}
//           </li>
//           <li>
//             <b>Awards: {awardsNum} </b> 
//             {award}
//           </li>
//           <li>
//             <b>Discovered: </b>
//             {discovered}
//           </li>
//         </ul>
//       </section>
//     );
// }

// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {

//     let urlSize = 's'
//     if(size < 90 ) {
//         urlSize = 's'
//     } else {
//         urlSize = 'b'
//     }


//     return (
//       <img
//         className="avatar"
//         src={getImageUrl(person, urlSize)}
//         alt={person.name}
//         width={size}
//         height={size}
//       />
//     );
//   }
  
//   export default function Profile() {
//     return (
//       <Avatar
//         size={150}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//     );
//   }


// export default function Profile() {
//     return (
//       <div>
//         <div className="card">
//           <div className="card-content">
//             <h1>Photo</h1>
//             <img
//               className="avatar"
//               src="https://i.imgur.com/OKS67lhm.jpg"
//               alt="Aklilu Lemma"
//               width={70}
//               height={70}
//             />
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-content">
//             <h1>About</h1>
//             <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//           </div>
//         </div>
//       </div>
//     );
// }

// import React from 'react';

// function Card({ children}) {
//     return (
//         <div className="card">
//             {children}
//         </div>
//     );
// }

// export default function Profile() {
//     return (
//       <div>
//         <Card>
//             <div className="card-content">
//                 <h1>Photo</h1>
//                 <img
//                 className="avatar"
//                 src="https://i.imgur.com/OKS67lhm.jpg"
//                 alt="Aklilu Lemma"
//                 width={70}
//                 height={70}
//                 />
//             </div>
//         </Card>
//         <Card>
//             <div className="card-content">
//                 <h1>About</h1>
//                 <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//             </div>
//         </Card>
//       </div>
//     );
// }

// function Item({ name, isPacked }) {
//     return (
//       <li className="item">
//         {/* {isPacked ? (
//           <del>
//             {name + ' ✅'}
//           </del>
//         ) : (
//           name
//         )} */}
//         {name} {isPacked && '✅'}
//       </li>
//     );
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item 
//             isPacked={true} 
//             name="Space suit" 
//           />
//           <Item 
//             isPacked={true} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             isPacked={false} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }
  

// function Item({ name, isPacked }) {
//     return (
//       <li className="item">
//             {isPacked? name + "✅":name + "❌ "}
//       </li>
//     );
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item 
//             isPacked={true} 
//             name="Space suit" 
//           />
//           <Item 
//             isPacked={true} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             isPacked={false} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }
  
// function Item({ name, importance }) {
//     // {importance > 0 ? name + "(Importance:" + importance : name}
//     return (
//       <li className="item">
//             {importance > 0 ? name + "(Importance: " + importance : name}
//       </li>
//     );
//   }
  
// export default function PackingList() {
// return (
//     <section>
//     <h1>Sally Ride's Packing List</h1>
//     <ul>
//         <Item 
//         importance={9} 
//         name="Space suit" 
//         />
//         <Item 
//         importance={0} 
//         name="Helmet with a golden leaf" 
//         />
//         <Item 
//         importance={6} 
//         name="Photo of Tam" 
//         />
//     </ul>
//     </section>
// );
// }

// function Drink({ name }) {
//     let itemName = name;

//     let plant = 'leaf';
//     let content = '15–70 mg/cup';
//     let age = '4,000+ years';
//     if(name != 'tea') {
//         plant = 'bean';
//         content = '80–185 mg/cup';
//         age = '1,000+ years';
//     }
//     return (
//       <section>
//         <h1>{name}</h1>
//         <dl>
//           <dt>Part of plant</dt>
//           <dd>{plant}</dd>
//           <dt>Caffeine content</dt>
//           <dd>{content}</dd>
//           <dt>Age</dt>
//           <dd>{age}</dd>
//         </dl>
//       </section>
//     );
//   }
  
//   export default function DrinkList() {
//     return (
//       <div>
//         <Drink name="tea" />
//         <Drink name="coffee" />
//       </div>
//     );
//   }
  
// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];
  
//   export default function List() {
//     const listItems = people.map(person =>
//       <li>{person}</li>
//     );
//     return <ul>{listItems}</ul>;
//   }

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = chemists.map(person =>
//     <li>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {

//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );

//   const everyOneElse = people.filter(person =>
//     person.profession != 'chemist'
//   );

//   const chemistItems = chemists.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );

//   const everyOneElseItems =  everyOneElse.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );

//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{chemistItems}</ul>
//       <ul>{everyOneElseItems}</ul>
//     </article>
//   );
// }

import { recipes } from './data.js';

export default function RecipeList() {

  const listItems = recipes.map( recipe => {
        const ingreItems = recipe.ingredients.map(
            ingre => <li>{ingre}</li>         
        );
        return <div>
            <h2>
                {recipe.name}
            </h2>
            <ul>
                {ingreItems}
            </ul>
        </div>;
    }
  );

  return (
    <div>
        {listItems}
    </div>
  );    
}
