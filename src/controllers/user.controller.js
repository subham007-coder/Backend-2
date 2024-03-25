import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // steps for register user in note.txt file

  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);
});

export { registerUser };
