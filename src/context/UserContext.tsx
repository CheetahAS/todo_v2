import React, { createContext } from 'react';
import { Todos } from '../types/types';

interface UserContextProps {
    arrForTodos: Todos
    setArrForTodos: () => void
}

export const UserContext = createContext({});



