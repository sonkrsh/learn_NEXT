/**
 *
 * Asynchronously loads the component for CustomImage
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
