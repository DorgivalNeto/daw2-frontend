import { useRoutes } from "react-router-dom";

import Private from "./Private";
import Public from "./Public";

export default function Routes() {
    return useRoutes([Private, Public]);
}