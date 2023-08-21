import React, { useState, useEffect } from 'react';
import './App.scss';
// import { PropTypes } from '@mui/material';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
// import { Color, User, UserWithColor } from './types';
import { UserWithColor, Color } from './types';
import { prepareUsers } from './helpers';
import { colorsService } from './services/colors.service';
import { usersService } from './services/users.service';

export const App: React.FC = () => {
  const [users, setUsers] = useState<UserWithColor[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    Promise.all([usersService.getUsers(), colorsService.getColors()]).then(
      ([usersFromServer, colorsFromServer]) => {
        const preparedUsers = prepareUsers(usersFromServer, colorsFromServer);

        setUsers(preparedUsers);
        setColors(colorsFromServer);
      },
    );
  }, [users]);

  // const addUser = useCallback((name: string, carColorId: number) => {
  //   const color = colors.find((c) => c.id === carColorId);
  //   const newUser: UserWithColor = {
  //     id: Math.random(),
  //     carColorId,
  //     name,
  //     carColor: color,
  //   };

  //   setUsers((prev) => [...prev, newUser]);
  // }, []);

  const addUser = async (name: string, carColorId: number) => {
    const newUser = await usersService.createUser({ name, carColorId });
    const color = colors.find((c) => c.id === carColorId);

    setUsers((prev) => [...prev, { ...newUser, color }]);
  };

  return (
    <AppContainer>
      <UserList users={users} />

      <AddUserForm colors={colors} addUser={addUser} />
    </AppContainer>
  );
};
