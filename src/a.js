import World from "./b";

class Hello {
  static say() {
    return `Hello ${World.say()}`;
  }
}

export default Hello;
