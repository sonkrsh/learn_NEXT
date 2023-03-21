/**
 *
 * Asynchronously loads the component for Message
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
