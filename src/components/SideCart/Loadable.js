/**
 *
 * Asynchronously loads the component for SideCart
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
