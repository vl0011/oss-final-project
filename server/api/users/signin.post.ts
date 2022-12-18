import { users } from "../../dbModels";
import { readBody } from "h3";

interface IRequestBody {
  password: string;
  username: string;
  email: string;
}

export default defineEventHandler(async (event) => {
  console.log("POST /api/users/signin");
  const { username, password } = await readBody<IRequestBody>(event);
  if (!username) {
    event.res.statusCode = 400;
    return {
      code: "USERNAME_REQUIRED",
      message: "아이디를 입력하세요."
    };
  }
  // Check if password is passed.
  if (!password) {
    event.res.statusCode = 400;
    return {
      code: "PASSWORD_REQUIRED",
      message: "비밀번호를 입력하세요."
    };
  }

  try {
    console.log("Find user");
    const userData = await users.findOne({
      username: username.toLowerCase()
    });
    if (userData) {
      console.log("User found");
      const isPasswordValid = await userData.verifyPasswordSync(password);
      if (isPasswordValid) {
        // Generate token or create session here
        return {
          id: userData._id,
          username: userData.username,
          email: userData.email
        };
      } else {
        console.log("Password is not valid");
        event.res.statusCode = 404;
        return {
          code: "USER_NOT_FOUND",
          message: "비밀번호를 확인해 주세요."
        };
      }
    } else {
      console.log("User not found");
      event.res.statusCode = 404;
      return {
        code: "USER_NOT_FOUND",
        message: "유저 정보가 없습니다."
      };
    }
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong."
    };
  }
});
