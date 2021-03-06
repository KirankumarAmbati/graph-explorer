export const gremlinServerUrlKey = "GREMLIN_SERVER_URL";
export const DefaultGremlinServerUrl = "ws://localhost:8182/gremlin";
export const GREMLIN_SERVER_URL = localStorage.getItem(gremlinServerUrlKey);
export const InvanaManagementLabel = "InvanaManagement"
export const DefaultNodeBgColor = "#444444";
export const DefaultNodeBorderColor = "#4385b8";
export const DefaultNodeBgPropertyKey = ""; // make sure this key is string.
export const DefaultNodeStrokeWidth = 3;
export const DefaultNodeRadius = 24;
export const DefaultNodeInShapeTextColor = "#dddddd"; // inside the shape
export const DefaultNodeLabelColor = "#dddddd";

export const DefaultLinkPathColor = "#c9c9c9";
export const DefaultLinkTextColor = "#c9c9c9";
export const DefaultLinkStrokeWidth = 2;
export const DefaultLinkDistance = 180;

export const DefaultInShapeHTMLFn = (node) => node.properties.name ? node.properties.name.substring(0, 10) : node.id;

export const DefaultLabelVisibility = false;
export const DefaultHoverOpacity = 0.8;

export const DefaultConnectionRetryTimeout = 10;
export const DefaultMaxTimeExlapsedWarninginSeconds = 180;
export const linkCurvature = .85;

// export function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }

export const UUIDGenerator = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
