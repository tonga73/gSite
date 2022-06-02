import { createStore } from "vuex";
import usersModule from "./modules/usersModule";

export default createStore({ modules: { usersModule } });
