/**
 * Application configurations
 * @type {{api_host: string | string, api_port: string | number}}
 */
const config = {
    api_host : process.env.TODO_API_HOST || "localhost",
    api_port : process.env.TODO_API_PORT || 8999
};
export default config ;
