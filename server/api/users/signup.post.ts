import { users } from "../../dbModels";
import { defineEventHandler, readBody } from "h3";
interface IRequestBody {
  email: string;
  password: string;
  name: string;
  username: string;
}
export default defineEventHandler(async (event) => {
  console.log("POST /api/users/signup");
  console.log(JSON.stringify(await readBody(event)))
  const { username, email, password, name } = await readBody<IRequestBody>(event);
  console.log({ username, email, password, name })
  try {
    const userData = await users.findOne({
      username,
    });
    if (userData) {
      console.log(`${username}: 이미 존재하는 이름 입니다.`);
      event.res.statusCode = 409;
      return {
        code: "USER_EXISTS",
        message: "증복된 이름",
      };
    } else {
      console.log("Create user");
      const newUserData = await users.create({
        username,
        email,
        password,
        name,
      });
      return {
        id: newUserData._id,
        username: newUserData.username,
      };
    }
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});
