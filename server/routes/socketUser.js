const userController = require('../controllers/socketController');


const GetUsers = (io, socket) => async () => {
  const res = await userController.getUsers();
  res.error
    ? socket.emit('getUsers_error', res.error)
    : socket.emit('getUsers_success', res.success);
};

const EditUser = (io, socket) => async ( {chosenUser, isEdit} ) => {
  const {email, firstName, lastName, password, role, _id} = chosenUser
  console.log(chosenUser)
  const res = await userController.editUser(email, firstName, lastName, password, role, _id, isEdit);
  res.error ?
      socket.emit("editUser_error", res.error)
      : socket.emit("editUser_success", res.success)
}

const DeleteUser = (io, socket) => async (id) => {
  const res = await userController.deleteUser(id);
  res.error ?
      socket.emit("deleteUser_error", res.error)
      : socket.emit("deleteUser_success", res.success)
}

exports.GetUsers = GetUsers;
exports.EditUser = EditUser;
exports.DeleteUser = DeleteUser;
