import morgan from 'morgan';
const requestLogger=morgan(':method :url :status :res[content-length] ')
export default requestLogger