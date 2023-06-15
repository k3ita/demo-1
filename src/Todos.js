import {memo} from 'react';

const Todos = ({todos}) => {
    console.log("child render");
    return(
        <>
            <h2>List Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}
        </>
    );
};

export default memo(Todos);